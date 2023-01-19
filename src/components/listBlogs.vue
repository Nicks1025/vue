<template>
    <div v-theme = "'wide'" id = "show-blogs">
        <h1>List Blog Articles</h1>
        <input type = "text" v-model = "search" placeholder = "Search Blogs"/>
        <div v-for = "blog in filteredBlogs" class = "single-blog">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
            <article>{{ blog.body | snippet }}</article>
        </div>
    </div>
</template>


<script>
    import searchMixin from '../mixins/searchMixins'
export default{
    data(){
        return{
            blogs : [],
            search : ''
        }
    },
    methods : {
        
    },
    created(){          //lifecycle hooks
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){   //vueresource
            console.log(data);
            this.blogs = data.body.slice(0,10);
        })

    }, 
    computed : {
    },
    // filters locally
    filters : {
        // 'to-uppercase' : function(value){
        //     return value.toUpperCase();
        // }
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    directives :{
        'rainbow' : {
            bind(el, binding, vnode){
                el.style.color = "#" +Math.random().toString(16).slice(2,8);
            }
        }
    }, mixins:[searchMixin]
}
</script>

<style>
#show-blogs{
    max-width:800px;
    margin: 0 auto;
}

.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background:#eee;
}
</style>
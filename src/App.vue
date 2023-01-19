<!-- <template> -->
  <!-- <div>
    <app-header v-bind:title = "title" v-on:changeTitle="updateTitle($event)"></app-header>    
    <app-ninja v-bind:ninjas = "ninjas"></app-ninja>
    <app-footer v-bind:title = "title"></app-footer>
  </div> -->
  <!-- <div>
    <form-helper>
      <div slot = "form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>

      <div slot = "form-fields">
        <input type = "text" placeholder = "name" required/>
        <input type = "password" placeholder = "password" required/>
      </div>

      <div slot = "form-controls">
        <button v-on:click = "handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div> -->
  <!-- </template> -->

<!-- <template>
  <div>
    <keep-alive>
      <component v-bind:is = "comp"></component>
    </keep-alive>
    <button v-on:click = "formone">Show form one</button>
    <button v-on:click = "formtwo">Show form two</button>
  </div>
</template> -->

<!-- <template>
  <add-blog></add-blog>
</template> -->

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>

// import Ninjas from './Ninjas.vue'
// component nested locally`

// import headers from './components/header.vue';
// import footers from './components/footer.vue';
// import ninjas from './components/ninjas.vue';

// import formHelper from './components/formHelper.vue'

// import formOne from './components/formOne.vue';
// import formTwo from './components/formTwo.vue';

import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'

export default {
  components : {
  //   'app-header' : headers,
  //   'app-footer' : footers,
  //   'app-ninja' : ninjas
  // 'form-helper' : formHelper
  // 'form-one' : formOne,
  // 'form-two' : formTwo  
  'add-blog' : addBlog,
  'show-blog' : showBlogs,
  'list-blogs' : listBlogs
},
  data () {
    return {
      // ninjas : [
      //       {name: 'Ryu', speciality : 'Vue Components', show : false},
      //       {name: 'Crystal', speciality : 'HTML Wizardry', show : false},
      //       {name: 'Hitoshi', speciality : 'Click Events', show : false},
      //       {name: 'Tango', speciality : 'Conditionals', show : false},
      //       {name: 'Kami', speciality : 'Webpack', show : false},
      //       {name: 'Yoshi', speciality : 'Data Diggin', show : false}
      //   ],        
        // title : "I am a dynamic slot title" 
        // comp : ''   
    }
  },
  methods : {
    // updateTitle : function(updatedTitle){
    //   this.title = updatedTitle
    // }
    // formone: function(){
    //   this.comp = 'form-one',
    //   console.log(this.comp)
    // },
    // formtwo : function(){
    //   this.comp = 'form-two',
    //   console.log(this.comp)
    // }
  }
}
</script>

<style scoped>
h1{
  color:purple
}
</style>

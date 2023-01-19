// new Vue({
//     el:"#vue-app",
//     data:{
//         name:"Nikhil",
//         job : "Programmer Analyst"
//     },
//     methods:{
//         intro : function(time){
//             return "Good "+time+' '+ this.name
//         }
//     }
// })

// new Vue({
//     el : "#data-binding",
//     data : {
//         intro : "Data Binding",
//         website : "https://www.thenetninja.com",
//         websites : "<a href = 'https://www.thenetninja.com'>The Net Ninja Website</a>"
//     }
// })


new Vue({
    el : "#events",
    data : {
        // age :20,
        // x : 0,
        // y : 0,
        // name : "Nikhil",
        // ages : '',
        // a : 0,
        // b : 0,
        // available : false,
        // nearby : false,
        // error : false,
        // success : false,
        // characters : ['Mario','Luigi','Yoshi','Bowser'],
        // ninjas : [
        //     {name : 'Ryu', age  :25},
        //     {name : "Yoshi", age : 35},
        //     {name : 'Ken', age : 55}
        // ],
        // health:100,
        // ended : false
    },
    methods : {
        // add : function(ages){
        //     this.age += ages;
        // },
        // substract : function(ages){
        //     this.age -= ages;
        // },
        // updateXY : function(event){
        //     this.x = event.offsetX;
        //     this.y = event.offsetY;
        // },
        // click : function(){
        //     alert("You Clicked me");
        // },
        // logName : function(){
        //     console.log("You entered your name")
        // },
        // logAge : function(){
        //     console.log("You entered your age")
        // },
        //         addToA : function(){
        //     console.log("Add to A");
        //     return this.a + this.age;
        // },
        // addToB : function(){
        //     console.log("Add to B");
        //     return this.b + this.age;
        // },
        // punch : function(){
        //     this.health -= 10;
        //     if(this.health <= 0){
        //         this.ended = true;
        //     }
        // },
        // restart : function(){
        //     this.health = 100;
        //     this.ended = false;
        // }
    },
    computed : {
        // addToA : function(){
        //     console.log("Add to A");
        //     return this.a + this.age;
        // },
        // addToB : function(){
        //     console.log("Add to B");
        //     return this.b + this.age;
        // },
        // compClasses : function(){
        //     return {
        //         available : this.available,
        //         nearby : this.nearby
        //     }
        // }
    }
})


var data = {
    name : "Nikhil"
}

Vue.component('greeting', {
    template:'<p>Hey, there, I am a {{name}}. <button v-on:click = "changeName">Change Name</button></p>',
    data : function(){
        return data;        //make changes to both the component used
        // return {            //makes changes to the coresponding component only
        //     name : "Nikhil"
        // }
    },
    methods : {
        changeName : function(){
            this.name = "Mario"
        }
    }
})

// var one = new Vue({
//     el : "#vue-app-one",
//     data:{
//         name : "Nick"
//     },
    
// })


// new Vue({
//     el : "#vue-app-two",
//     data : {
//         name : "Nikhil"
//     },
//     methods : {
//         changeName : function(){
//             one.name = "Nicks"
//         }
//     }
// })



new Vue({
    el:"#vue-apps",
    data : {
        output : "your fav food",
        food : ''
    },
    methods : {
        // readRefs : function(){
        //     this.output = this.$refs.reference.value;
        //     // this.output = this.food;
        //     console.log(this.$refs.test.innerHTML)
        // }
        
    }
})
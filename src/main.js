import Vue from 'vue'
import App from './App.vue'
import Ninjas from './Ninjas.vue'

import VueResource from 'vue-resource';       //https get and post req
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Routes from './routes'
const router = new VueRouter({
  routes : Routes,
  mode:'history'
});



// Vue.component('ninjas',Ninjas)    //component nested globally
// Vue.componenet("component name", object)

// custom directives
// Vue.directive("rainbow",{                 //Vue.directive("directive name")
//   bind(el, binding, vnode){                                 //bind(el,binding, virtual node)
//     el.style.color = "#"+Math.random().toString().slice(2,8);
//   }
// })

Vue.directive("theme",{
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px"
    }
    else if(binding.value = 'narrow'){
      el.style.maxWidth = "560px";
    }

    if(binding.arg == 'column'){
      el.style.background = "#ddd";
      el.style.padding = '20px';
    }
  }
})


// filters globally
// Vue.filter('to-uppercase',function(value) {
//   return value.toUpperCase();
// })

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
})
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})

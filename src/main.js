import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/css/reset.css'
import './assets/css/border.css'
Vue.config.productionTip = false
Vue.use(ViewUI);

//前置路由守卫
// router.beforeEach(({name},from,next)=>{
//   if(localStorage.getItem("token")){
//     //如果用户在login页面
//     if(name==='login'){
//       next('personal')
//     }else{
//       next();
//     }
//   }else{
//     if(name==='login'){
//       next()
//     }else{
//       next({name:'login'});
//     }
//   }
// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

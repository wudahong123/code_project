import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import RoutesConfig from './config'
import store from '../store/index'


const routes=[
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path:"/mainbox",
    name:"mainbox",
    component:MainBox,
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to,from,next)=>{
  if(to.name==="login"){
    next()
  }else{
    if(!localStorage.getItem("token")){
      next({
        path:"/login"
      })
    }else{
      if(!store.state.isGetterRouter){
        ConfigRouter()
        next({
        path:to.fullPath
      })
      }else{
        next()
      }
    }
  }   
})


const ConfigRouter=()=>{
  RoutesConfig.forEach(item=>{
    router.addRoute("mainbox",item)
  })

  store.commit("changeGetterRouter",true)

}

export default router

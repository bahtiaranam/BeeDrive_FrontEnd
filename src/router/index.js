import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import File from '../views/File.vue'
import Upload from '../views/Upload.vue'
import CopyDrive from '../views/CopyDrive.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/file',
    name: 'file',
    component: File
  }
  ,
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/copydrive',
    name: 'copydrive',
    component: CopyDrive
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

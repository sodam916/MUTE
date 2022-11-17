import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView'
import TripView from '../views/TripView'
import UserView from '../views/UserView'
import MovieCardView from '../views/MovieCardView'
import SignupView from '../views/SignupView'
import LoginView from '../views/LoginView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/movies',
    name: 'movies',
    component: MovieView
  },
  {
    path:'/trip',
    name: 'trip',
    component: TripView
  },
  {
    path:'/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path:'/movies/:id',
    name: 'detail',
    component: MovieCardView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

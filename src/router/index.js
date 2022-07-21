import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Admin from "../views/Admin.vue";
import Profile from "../views/Profile.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import CreatePost from "../views/CreatePost.vue";
import BlogPreview from "../views/BlogPreview.vue";
import ViewBlog from "../views/ViewBlog.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title:'Home'
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title:'Blogs'
    }
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title:'Login'
    }
  },

  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title:'ForgotPassword'
    }
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title:'Register'
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title:'Profile'
    }
  },
  {
    path: "/createpost",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title:'CreatePost'
    }
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta: {
      title: 'Preview Blog Post'
    }
  },
  {
    path: "/view-blog",
    name: "ViewBlog",
    component: ViewBlog,
    meta: {
      title: 'ViewBlog'
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title:'Admin'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}| FireBlog`;
  next();
});

export default router;

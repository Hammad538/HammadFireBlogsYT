import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app"
import "firebase/auth";
import db from "../firebase/firebaseInit"
import "firebase/auth"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards:[
      {blogTitle:"Blog Card #1",blogCoverPhoto:"stock-1",blogDate:"May 20, 2021"},
      {blogTitle:"Blog Card #2",blogCoverPhoto:"stock-2",blogDate:"May 21, 2021"},
      {blogTitle:"Blog Card #3",blogCoverPhoto:"stock-3",blogDate:"May 23, 2021"},
      {blogTitle:"Blog Card #4",blogCoverPhoto:"stock-4",blogDate:"May 24, 2021"}
    ],
    blogHTML: "Write your blog title here",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId:null,
    profileInitials: null
  },
  mutations: {
    newBlogPost(state, payload)
    {
     state.blogHTML=payload
    },
    updateBlogTitle(state, payload)
    {
      state.blogTitle= payload
    },
    fileNameChange(state,payload)
    {
     state.blogPhotoName=payload
    },
    createFileURL(state, payload)
    {
      state.blogPhotoFileURL=payload
    },
    openPhotoPreview(state)
    {
      state.blogPhotoPreview=!state.blogPhotoPreview
    },
    toggleEditPost(state, payload)
    {
      state.editPost = payload;
      console.log(state.editPost)
    },
    updateUser(state,payload)
    {
      state.user= payload
    },
    setProfileInfo(state, payload)
    {
      state.profileId = payload.id
      state.profileEmail = payload.data().email
      state.profileFirstName = payload.data().firstName
      state.profileLastName = payload.data().lastName
      state.profileUserName= payload.data().userName
    },
    setProfileInitials(state)
    {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("")+
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload)
    {
      state.profileFirstName=payload
    },
    changeLastName(state, payload)
    {
      state.profileLastName=payload
    },
    changeUserName(state, payload)
    {
      state.profileUserName=payload
    }

  },
  actions: {
    async getCurrentUser({commit})
    {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid)
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults)
      commit("setProfileInitials")
      console.log(dbResults)
    },
    async updateUserSetttings({commit,state})
    {
      const dataBase = await db.collection("users").doc(state.profileId)
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName:state.profileUserName
      })
      commit("setProfileInitials")
    }
  },
  modules: {
  }
})

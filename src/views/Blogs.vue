<template>
  <div crlass="blog-card-wrap">
   <div class="blog-cards container">
     <div class="toggle-edit">
      <span>Toggle Editting Post</span>
      <input type="checkbox" v-model= "editPost"/>
   </div>
    <BlogCard :post="post" v-for="(post,index) in sampleBlogCards " :key="index"/>
  </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue"
export default {
 components:{BlogCard},
 computed:{
  sampleBlogCards()
 {
   return this.$store.state.sampleBlogCards;
 },
 editPost:
 {
  get()
  {
    return this.$store.state.editPost;
  },

  set(payload)
  {
   this.$store.commit("toggleEditPost",payload)
  }
 }
 }
}
</script>

<style lang="scss" scopped>
.blog-cards
{
  position:relative;
  .toggle-edit
  {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right:0;
    span
    {
      margin-right: 16px;
    }
  }
}
</style>

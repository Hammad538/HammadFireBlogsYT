<template>
<div class="home">
  <BlogPost v-if="!user" :post="welcomeScreen"/>
  <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index"/>
  <div class="blog-card-wrap">
    <div class="container">
      <h3>View more recent Blogs </h3>
      <div class="blog-cards">
       <BlogCard :post="post" v-for="(post,index) in sampleBlogCards " :key="index"/>
      </div>
    </div>
  </div>
  <div  v-if ="!user" class="updates">
      <div class="container">
        <h2>Never miss a post.Register for your account</h2>
        <router-link class="router-button" to="#">Register For fireblogs <Arrow class="arrow arrow-light"/></router-link>
      </div>
    </div>
</div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
  name:"Home",
  components:{BlogPost,BlogCard,Arrow},
  data()
  {
    return{
      welcomeScreen:{
      title:"Welcome",
      blogPost:
      "lorem kjfhkajd ajhdbakb jabdjkab kjbdkajb",
      welcomeScreen:true,
      photo:"coding",
    },
    sampleBlogPost:[
    {
     title:"This the dample blog of me ",
     blogHTML:"This is a filer nlog and toitle ",
     blogCoverPhoto: "beautiful-stories",
    },
    {
     title:"This the seconfd blog of me ",
     blogHTML:"This is a filer nladog and akjfbdajb ",
     blogCoverPhoto: "designed-for-everyone",
    }
  ],

  }
  },
  computed:
  {
   sampleBlogCards()
   {
   return this.$store.state.sampleBlogCards
  },
  user()
   {
     return this.$store.state.user;
   }
  }
}
</script>

<style lang="scss" scopped>
  .blog-card-wrap
  {
    h3
    {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
  .updates
  {
    .container
    {
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media(min-width:800px)
      {
        padding: 125px 25px;
        flex-direction: row;
      }
      .router-button
      {
        display: flex;
        font-size: 14px;
        text-decoration: none;
        @media(min-width:800px)
        {
          margin-left: auto;
        }
      }
      h2
      {
        font-weight:300;
        font-size:14px;
        max-width: 425px;
        text-align: center;
        text-transform: uppercase;
        @media(min-width: 800)
        {
          text-align: initial;
          font-size: 40px;
        }

      }
    }
  }
</style>

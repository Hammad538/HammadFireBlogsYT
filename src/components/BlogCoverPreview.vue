<template>
  <div class="modal" ref="modal">
    <div class="modal-content">
      <close @click="closePreview" class="icon"/>
      <img :src="this.blogCoverPhoto" alt="" />
    </div>
  </div>
</template>

<script>
import close from "../assets/Icons/times-circle-light.svg";

export default {
components:
{
  close,
},
methods:{
  closePreview(){
    this.$store.commit("openPhotoPreview")
  },
},
computed:{
  blogCoverPhoto()
  {
    return this.$store.state.blogPhotoFileURL;
  }
}
}
</script>

<style lang="scss" scopped>
.modal
{
  top: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 99;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .modal-content
  {
    display: flex;
    position: relative;
    justify-content: center;
    border-radius: 12px;
    width: 600px;
    height: 400px;
    padding: 50px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
    background-color: #fff;
    .icon
    {
      width: 24px;
      height: auto;
      cursor: pointer;
      font-size: 24px;
      position: absolute;
      top: 15px;
      right: 15px;
      color: #303030;

    }
    img{
      margin-top: 16px;
      display: block;
      width: auto;
      height: 100%;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
    }
  }
}
</style>

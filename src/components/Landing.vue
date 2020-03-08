<template>
  <div class="center" id="landing">
    <div class="background">
      <div class="overlay"/>
      <video 
        ref="video"
        v-if="fields.landing_video"
        autoPlay muted loop playsInline
        :src="fields.landing_video"
        :poster="fields.landing_image"
        style="z-index: -2;"
      />
    </div>
    <div class="container">
     <prismic-rich-text class="text mainTitle" v-if="fields.mainTitle" :field="fields.mainTitle"/>
     <prismic-rich-text class="description" v-if="fields.description" :field="fields.description"/>
      <div class="row">
        <a @click="handleClick" data-id="stories" class="button" style="margin-right: 20px">View Stories</a>
        <a class="button button-secondary" 
          target="_blank"
          :href="donateLink">
          Donate
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    fields: Object,
    handleClick: Function,
    donateLink: String,
    setVideoRef: Function
  },
  mounted(){
    var setRef = setInterval(()=>{
        if(this.$refs["video"]){
            this.setVideoRef(this.$refs["video"]);
            clearInterval(setRef);
        }                   
    },500);
  }
}
</script>

<style scoped lang="scss">
  #landing{
    height: 100vh;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .background{
      background-attachment: fixed;
  }
  .container{
    padding-bottom: 16vh;
  }
  .mainTitle, .subtitle, .description{
    color: white;
  }
  .mainTitle{
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    line-height: 1.2;
    width: 50%;
  }
  .description{
    margin-bottom: 2rem;
    width: 50%;
  }
  video{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    left: 0;
    top: 0;
  }
  @include mobile{
    #landing{
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .description{
      width: 100%;
    }
  }
</style>

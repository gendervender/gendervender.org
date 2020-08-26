<template>
  <div id="partners" class="home-block center">
    <div class="container">
        <prismic-rich-text class="title" v-if="partners_header" :field="partners_header"/>
        <prismic-rich-text class="text desc" v-if="partners_content" :field="partners_content"/>
        <div class="partners-directory">
          <prismic-link
            class="partners-item" 
            :aria-label="'visit ' + item.name + ' website'"
            v-for="item in partners_items" :field="item.link"
          >
            <div class="overlay"/>
            <prismic-image :field="item.image" />
            <span>{{item.name}}</span>
          </prismic-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  props: {
    partners_header: Array,
    partners_content: Array,
    partners_items: Array
  }
}
</script>

<style scoped lang="scss">
#partners{
  text-align: center;
  padding: 20vh 0;
}
.partners-directory{
  margin-top: 4%;
  width: 100%;
}
.partners-item{
  cursor: pointer;
  margin: 0% 12px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    -webkit-box-shadow: 0px 5px 12px 0px rgba($text,0.1);
    -moz-box-shadow: 0px 5px 12px 0px rgba($text,0.1);
    box-shadow: 0px 5px 12px 0px rgba($text,0.1);
  }
  span{
    position: absolute;
    top: 112px;
    color: $primary;
    font-weight: 500;
    opacity: 0;
    transition: all 0.2s;
    margin-top: 4%;
    width: 250px;
  }
  .overlay, img{
    border-radius: 50%;
  }
  .overlay{
    background: $primary;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.2s;
  }
  &:hover{
    .overlay{
      opacity: 0.6;
    }
    span{
      opacity: 1;
      margin-top: 0%;
    }
  }
}
@include tablet{
  #partners{
    padding: 40px 0;
  }
  .partners-item{
    margin: 0 12px 12px;
    img{
      width: 80px;
      height: 80px;
    }
  }
  .partners-directory{
    width: 100%;
  }
}
</style>

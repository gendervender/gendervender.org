<template>
  <div id="partners" class="home-block center">
    <div class="container">
        <prismic-rich-text class="title" v-if="fields.title" :field="fields.title"/>
        <prismic-rich-text class="text desc" v-if="fields.description" :field="fields.description"/>
        <div class="partners-directory">
          <a
            class="partners-item center"
            v-for="item in fields.directory"
            :href="item.link.url"
            target="_blank"
          >
            <div class="background" :style="{'background-image': `url(${item.partner_image.url})`}"/>
            <div class="overlay" />
              <h1>{{item.partner_name}}</h1>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  props: {
    fields: Object
  }
}
</script>

<style scoped lang="scss">
  #partners{
    text-align: center;
    padding-bottom: 24vh;
  }
  .partners-directory{
    width: 60%;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 40px;
    justify-items: center;
    align-items: center;
  }
  .partners-item{
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    box-sizing: border-box;
    overflow: hidden;
    width: 152px;
    height: 152px;
    padding: 16px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba($text,0.075);
    -moz-box-shadow: 0px 5px 20px 0px rgba($text,0.075);
    box-shadow: 0px 5px 20px 0px rgba($text,0.075);
    &:hover{
      -webkit-box-shadow: 0px 5px 20px 0px rgba($text,0.15);
      -moz-box-shadow: 0px 5px 20px 0px rgba($text,0.15);
      box-shadow: 0px 5px 20px 0px rgba($text,0.15);
      .overlay{
          opacity: 0.8;
      }
      h1{
        margin-top: 0%;
        opacity: 1;
      }
    }
    .overlay{
      background: $primary;
      opacity: 0;
      transition: 0.24s all ease-in-out;
    }
    h1{
      transition: 0.24s all ease-in-out;
      color: white;
      font-weight: 500;
      font-size: 0.9rem;
      opacity: 0;
      margin-top: 25%;
    }
  }
  @include desktop{
    h1{
      font-size: 1rem!important;
    }
  }
  @include mobile{
    .partners-item{
      width: 100px;
      height: 100px;
      margin: 0px 12px 20px 12px;
    }
  }
</style>

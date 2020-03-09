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
    grid-auto-rows: 1fr;
    justify-items: center;
    align-items: center;
    &:before{
      content: '';
      width: 0;
      padding-bottom: 100%;
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }
  }
  .partners-directory > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  .partners-item{
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    width: 75%;
    height: 75%;
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
    .partners-directory{
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
    }
    .partners-item{
      width: 80%;
      height: 76%;
      &:hover{
        .overlay{
          opacity: 0;
        }
        h1{
          opacity: 0;
        }
      }
    }
  }
  @include tablet{
    .partners-directory{
      width: 100%;
    }
    .partners-item{
      &:hover{
        .overlay{
          opacity: 0;
        }
        h1{
          opacity: 0;
        }
      }
    }
  }
</style>

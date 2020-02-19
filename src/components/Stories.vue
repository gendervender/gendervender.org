<template>
  <div id="stories" class="home-block">
    <div class="container">
        <prismic-rich-text class="title" v-if="fields.title" :field="fields.title"/>
        <prismic-rich-text class="text desc" v-if="fields.description" :field="fields.description"/>
        <div class="stories-grid">
            <router-link
                class="stories-item card"
                v-for="item in stories"
                :to="`/stories/${item.uid}`"
            >
                <div class="top center">
                    <div class="background" :style="{ 'background-image': `url(${item.thumbnail_image.url})` }"/>
                    <div class="overlay"/>
                    <h1>view story</h1>
                </div>
                <div class="bottom">
                    <h5>{{item.name}}</h5>
                    <h6>{{item.business_name}}</h6>
                    <p>{{item.short_description}}</p>
                </div>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stories',
  props: {
    fields: Object,
    stories: Array
  }
}
</script>

<style scoped lang="scss">
    .stories-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 24px;
        column-gap: 24px;
    }
    .stories-item{
        height: 72vh;
        cursor: pointer;
        position: relative;
        color: $text;
        &:hover{
            -webkit-box-shadow: 0px 5px 20px 0px rgba($text,0.05);
            -moz-box-shadow: 0px 5px 20px 0px rgba($text,0.05);
            box-shadow: 0px 5px 20px 0px rgba($text,0.05);
            .top{
                .overlay{
                    opacity: 0.8;
                }
                h1{
                    margin-top: 0%;
                    opacity: 1;
                }
            }
        }
        .top, .bottom{
            width: 100%;
            position: absolute;
        }
        .top{
            top: 0;
            height: 50%;
            .overlay{
                background: $primary;
                opacity: 0;
                transition: 0.24s all ease-in-out;
            }
            h1{
                transition: 0.24s all ease-in-out;
                color: white;
                font-weight: 500;
                font-size: 1.2rem;
                margin-top: 25%;
                opacity: 0;
            }
        }
        .bottom{
            bottom: 0;
            height: 50%;
            background: white;
            padding: 24px;
            box-sizing: border-box;
            h6{
                margin: 8px 0;
                font-weight: 400;
            }
            p{
                font-size: 0.9rem;
                opacity: 0.8;
            }
        }
    }
</style>
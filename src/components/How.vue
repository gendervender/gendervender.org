<template>
  <div id="how" class="home-block">
    <div class="container">
        <prismic-rich-text class="title" v-if="fields.title" :field="fields.title"/>
        <prismic-rich-text class="desc" v-if="fields.description" :field="fields.description"/>
        <div
            v-for="(block, index) in fields.blocks"
            :style=""
            class="how-block card"
        >
            <div class="how-text">
                <prismic-rich-text class="block-title" v-if="block.block_title" :field="block.block_title"/>
                <prismic-rich-text class="block-desc text" v-if="block.block_description" :field="block.block_description"/>
            </div>
            <div class="how-image">
                <div class="background" :style="`background-image: url(${block.block_image.url})`" />
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Landing',
  props: {
    fields: Object
  }
}
</script>

<style lang="scss">
    #how{
        padding-top: 20vh;
    }
    .container{
        flex-direction: column;
    }
    .how-block{
        background: white;
        min-height: 200px;
        width: 100%;
        margin-bottom: 3rem;
        display: flex;
        flex-direction: row;
        &:nth-of-type(even){
         flex-direction: row-reverse;
        }
        .how-text,.how-image{
            position: relative;
            width: 50%;
        }
        &:nth-of-type(3) .block-title{
            &:after{
                background: $tertiary;
            }
        }
        &:nth-of-type(4) .block-title{
            &:after{
                background: $secondary;
            }
        }
        &:nth-of-type(5) .block-title{
            &:after{
                background: $primary;
            }
        }
        .how-text{
            padding: 5%;
            box-sizing: border-box;
            p{
                margin-bottom: 0.9rem;
            }
            .block-title{
                margin-bottom: 1.4rem;
                position: relative;
                display: inline-block;
                &:after{
                    content: '';
                    width: 100%;
                    height: 0.28rem;
                    bottom: 0.1rem;
                    position: absolute;
                }
            }
            .block-desc{
               font-size: 0.92rem;
            }
        }
        .background{
            z-index: 0;
        }
    }
    @include mobile{
        .how-block{
             .how-text,.how-image{
                 width: 100%;
             }
             .how-text{
                 padding: 20px;
             }
             .how-image{
                 height: 32vh;
             }
            flex-direction: column!important;
        }
    }
</style>

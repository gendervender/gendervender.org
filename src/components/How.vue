<template>
  <div id="how" class="home-block">
    <div class="container">
        <prismic-rich-text class="title" v-if="fields.title" :field="fields.title"/>
        <prismic-rich-text class="desc" v-if="fields.description" :field="fields.description"/>
        <div
            v-for="(block, index) in fields.blocks"
            class="how-block card"
        >
            <div class="left">
                <prismic-rich-text class="block-title" v-if="block.block_title" :field="block.block_title"/>
                <prismic-rich-text class="block-desc text" v-if="block.block_description" :field="block.block_description"/>
            </div>
            <div class="right">
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

<style scoped lang="scss">
    #how{
        padding-top: 20vh;
    }
    .container{
        flex-direction: column;
    }
    .underline{
        color: red;
    }
    .how-block{
        background: white;
        height: 90vh;
        width: 100%;
        margin-bottom: 3rem;
        display: flex;
        flex-direction: row;
        .left,.right{
            position: relative;
        }
        .left{
            padding: 6%;
            flex: 1;
            box-sizing: border-box;
            .block-title{
                margin-bottom: 12px;
            }
            .block-desc{
               font-size: 0.92rem;
            }
        }
        .right{
            flex: 1.2;
        }
        .background{
            z-index: 0;
        }
    }
</style>

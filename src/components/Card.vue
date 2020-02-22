<template>
     <div class="card" :style="isLink ? 'cursor: pointer; height: 74vh' : 'cursor: default; height: 60vh'">
        <div class="top center" :style="isLink ? 'height: 50%' : 'height: 60%'">
            <div v-if="imageURL" class="background" :style="{ 'background-image': `url(${imageURL})` }"/>
                <div v-if="isLink" class="overlay"/>
                <h1 v-if="isLink">view story</h1>
            </div>
            <div class="bottom" :style="isLink ? 'height: 50%' : 'height: 40%'">
                <h5 v-if="primary">{{primary}}</h5>
                <h6 v-if="secondary">{{secondary}}</h6>
                <p v-if="description">{{description}}</p>
                <div class="links" v-if="links">
                    <a class="underline"
                        v-for="link in links"
                        v-if="link.url"
                        :href="link.url"
                        target="_blank"
                    >{{link.name}}</a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    primary: String,
    secondary: String,
    description: String,
    imageURL: String,
    links: Array,
    isLink: Boolean
  }
}
</script>

<style scoped lang="scss">
    .card{
        height: 74vh;
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
            background: white;
            padding: 24px;
            box-sizing: border-box;
            h6{
                margin: 8px 0;
                font-weight: 400;
                font-size: 0.96rem;
            }
            p{
                font-size: 0.9rem;
                opacity: 0.8;
            }
        }
        .links{
            a{
                margin-right: 8px;
                font-size: 0.94rem;
            }
        }
    }
</style>
<template>
  <div class="card" :class="isLink ? 'card-story' : 'card-team'">
    <div class="background top center">
      <prismic-image v-if="image" :field="image" />
      <div v-if="isLink" class="overlay" />
      <h1 v-if="isLink">view story</h1>
    </div>
    <div class="bottom" :class="isLink ? 'card-bottom-link' : 'card-bottom'">
      <h5 v-if="primary">{{primary}}</h5>
      <h6 v-if="secondary">{{secondary}}</h6>
      <p v-if="description">{{description}}</p>
      <div class="links" v-if="links">
        <a :key="link.name" v-for="link in links" :href="link.url" target="_blank">
          <img :src="getImgUrl(link.name)" :alt="link.name" />
        </a>
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
    isLink: Boolean,
    image: Object
  },
  methods: {
    getImgUrl(url) {
        var images = require.context('../assets/', false, /\.svg$/)
        return images('./icon-' + url + ".svg")
    }
  }
}
</script>

<style lang="scss">
.card-story {
  cursor: pointer;
}

.card-team {
  cursor: default;
}

.card {
  color: $text;

  &:hover {
    -webkit-box-shadow: 0px 5px 20px 0px rgba($text, 0.05);
    -moz-box-shadow: 0px 5px 20px 0px rgba($text, 0.05);
    box-shadow: 0px 5px 20px 0px rgba($text, 0.05);

    .top {
      .overlay {
        opacity: 0.8;
      }

      h1 {
        margin-top: 0%;
        opacity: 1;
      }
    }
  }

  .top,
  .bottom {
    width: 100%;
  }

  .top {
    width: 100%;
    position: relative;
    height: 16vw;

    .overlay {
      background: $primary;
      opacity: 0;
      transition: 0.24s all ease-in-out;
    }

    h1 {
      transition: 0.24s all ease-in-out;
      color: white;
      font-weight: 500;
      font-size: 1.2rem;
      margin-top: 10%;
      opacity: 0;
    }
  }

  .bottom {
    background: white;
    padding: 20px;
    box-sizing: border-box;

    h6 {
      margin: 4px 0;
      font-weight: 400;
      font-size: $font-size-xs;
    }

    p {
      font-size: 0.9rem;
      margin-top: 0.6rem;
      opacity: 0.8;
      line-height: 1.6;
    }
  }

  .links {
    margin-top: 8px;

    a {
      margin-right: 8px;

      img {
        width: 20px;
        transition: filter 0.16s;
      }

      &:hover img {
        filter: brightness(80%)
      }
    }
  }
}

.card-bottom-link {
  height: 34vh;
}

.card-bottom {
  height: 20vh;
}

@include tablet {
  .top {
    height: 28vh !important;
  }
  .card {
    .top {
      .overlay {
        opacity: 0 !important;
      }

      h1 {
        opacity: 0 !important;
      }
    }
  }
  .card-bottom-link {
    height: 28vh;
  }

  .card-bottom {
    height: 20vh;
  }
}

@include mobile {
  h5 {
    font-size: $font-size-s;
  }

  .card .links a img {
    width: 24px
  }

  .card-bottom-link {
    height: 55vw;
  }

  .card-bottom {
    height: 28vw;
    p{
      font-size: $font-size-xs!important;
    }
  }

  .card {
    .top {
      height: 50vw !important;

      .overlay {
        opacity: 0 !important;
      }

      h1 {
        opacity: 0 !important;
      }
    }
  }
}

@include desktop {
  .top {
    height: 14vw !important;
  }

  .bottom {
    h6 {
      font-size: 1.1rem !important;
    }

    p {
      font-size: 1rem !important;
      line-height: 1.8 !important;
    }

    padding: 28px !important;
  }

  .card-bottom-link {
    height: 13vw;
  }

  .card-bottom {
    height: 8vw;
  }
}
</style>
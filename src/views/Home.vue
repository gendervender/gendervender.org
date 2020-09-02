<template>
  <div id="home">
    <img src="../assets/logo.png" />
    <h1>
      Pardon our dust.. 🏗
    </h1>
    <p>
      Thank you for visiting! Our website is currently under construction as we are remodeling our project.
      We'll be launching our website early September 2020. Stay tuned!
    </p>
    <p>
      Visit our 2019 capstone project website
      <a href="https://gendervender2019.netlify.com/" target="_blank">here</a>.
    </p>
    <p>
      Visit us on social media: <br />
      <a href="https://www.facebook.com/thegendervender/" target="_blank">Facebook</a>
      |
      <a href="https://www.instagram.com/gendervender/" target="_blank">Instagram</a>
      |
      <a href="https://www.youtube.com/channel/UCZ9cJe8pXFpgdbUcGzJ9YCg" target="_blank">Youtube</a>
    </p>
  </div>
</template>
<style scoped lang="scss">
  #home{
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 12% 20%;
    text-align: center;
    background: black;
    @include mobile{
      width: 100%;
      margin-left: 0%;
      box-sizing: border-box;
      padding: 4rem 2rem;
      height:unset;
      min-height: 100vh;
    }
  }
  img{
    width: 10%;
    top: 5%;
    left: 5%;
    position: absolute;
    z-index: 0;
  }
  h1{
    color: var(--primary);
    margin-bottom: 12px;
  }
  p{
    font-size: 1.1rem;
    font-weight: 500;
    margin: 12px 0;
    color: white;
  }
  a{
    color: var(--primary);
    font-weight: 500;
    font-size: 100%;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      width: 100%;
      background: var(--primary);
      bottom: 2px;
      left: 0;
      height: 1.6px;
      opacity: 0.8;
    }
    &:hover{
      animation: link 0.6s ease-in infinite;
      &:after{
        animation: underline 0.6s ease-in infinite;
      }
    }
  }
  @keyframes link{
    0%{
      color: var(--primary);
    }
    25%{
      color: var(--secondary);
    }
    50%{
      color: var(--tertiary);
    }
    100%{
      color: var(--primary);
    }
  }
    @keyframes underline{
    0%{
      background: var(--primary);
    }
    25%{
      background: var(--secondary);
    }
    50%{
      background: var(--tertiary);
    }
    100%{
      background: var(--primary);
    }
  }
</style>
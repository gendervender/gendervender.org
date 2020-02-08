<template>
  <div id="home">
    <div class="left">
      <img src="../assets/machine.png" alt="vending machine"/>
    </div>
    <div class="right">
      <h1>
        Thanks for visiting!
      </h1>
      <p>
        We're currently under construction and redesigning our next vending machine sponsored by Seattle's Pacific Science Center.
      </p>
      <p>
      We'll be launching our website early March 2020. For now, please see where our vending machine will be at next, 
      <a href="https://www.pacificsciencecenter.org/events/womxn-of-color-in-stem-2020-03-31/" target="_blank">here</a>.
      </p>
        <p>
      Visit our 2019 capstone project website 
      <a href="https://gendervender2019.netlify.com/" target="_blank">here</a>.
      </p>
      <p>
      Visit us on social media: <br/>
      <a href="https://www.facebook.com/thegendervender/" target="_blank">Facebook</a>
       | 
       <a href="https://www.instagram.com/gendervender/" target="_blank">Instagram</a>
       |
       <a href="https://www.youtube.com/channel/UCZ9cJe8pXFpgdbUcGzJ9YCg" target="_blank">Youtube</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss">
  #home{
    postion: relative;
    width: 60%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    margin-left: 2.5%;
    @include mobile{
      flex-direction: column;
      width: 100%;
      margin-left: 0%;
      box-sizing: border-box;
      padding: 4rem 2rem;
      height:unset;
      min-height: 100vh;
    }
  }
  .left, .right{
    display: flex;
    box-sizing: border-box;
    justify-content: center;
  }
  .left{
    flex: 1;
    align-items: center;
    img{
      width: 60%;
    }
    @include mobile{
      margin-bottom: 1rem;
      img{
        width: 40%;
      }
    }
  }
  h1{
    color: var(--primary);
    margin-bottom: 12px;
  }
  p{
    font-size: 1.1rem;
    font-weight: 500;
    margin: 12px 0;
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
  .right{
    flex-direction: column;
    align-items: flex-start;
    flex: 1.2;
  }
</style>
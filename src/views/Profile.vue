<template>
<div class="p-profile">
  <header class="header">
    <div class="pictures" v-tap="tap:bindPhone(this)">
        <div v-if="pictures">
            <img v-attr="src: pictures" />
        </div>
      <i class="icon-user" v-if="!pictures"></i>
    </div>
    <div class="tips">
      {{phone || tip}} <span v-go="changePhone" style="display: none">修改</span>
    </div>
  </header>
  <section class="content">
    <ul>
      <li v-repeat="meul1" v-tap="tap:linksOne(this,$index)">
        <i class="{{icon}}"></i>
        <span>{{name}}</span>
        <i class="icon-right"></i>
      </li>
    </ul>

    <ul>
      <li v-repeat="meul2" v-tap="tap:linksTwo(this,$index)">
        <i class="{{icon}}"></i>
        <span>{{name}}</span>
        <i class="icon-right"></i>
      </li>
    </ul>
  </section>
</div>
</template>

<script>

</script>

<style lang='scss'>
@import '../styles/css/mixin';
@import '../styles/css/variable';

.p-profile {
  header {
    overflow: hidden;

    height: 1.65rem;

    border-bottom: .01rem solid rgb(199,200,201);
    background: $skin-a url('bg_xinxi.jpg') no-repeat center;
    background-size: cover;

    .pictures {
      overflow: hidden;

      width: .99rem;
      height: .99rem;
      margin: .25rem auto 0 auto;

      text-align: center;

      border-radius: 1rem ;
      background: rgba(70,70,70,.3);

      .icon-user {
        font-size: .56rem;
        line-height: .76rem;

        display: inline-block;
        overflow: hidden;

        width: .85rem;
        height: .85rem;
        margin: .08rem;

        text-align: center;

        color: rgb(0,153,255);
        border-radius: 100%;
        background: rgb(255,255,255);
      }

      div{
        width: .85rem;
        height: .85rem;
        margin: .07rem auto;

        border: .04rem solid #fff;
        border-radius: 100%;
        background: #e3e4e5;
        overflow: hidden;
        box-sizing: border-box;
        img {
            width: .77rem;
            height: .77rem;
        }
      }

    }

    .tips {
      font-size: .126rem;

      margin-top: .07rem;

      text-align: center;

      color: #fff;
    }
  }

  ul {
    margin: .14rem 0rem;
  }

  li {
    line-height: .38rem;

    height: .38rem;
    margin: 2px 0 0 0;
    padding: 0 .15rem;

    vertical-align: middle;

    background: #fff;

    &.hover {
      background: #ddd;
    }

    i {
      font-size: .26rem;

      display: inline-block;
      float: left;

      margin: .06rem;

      &.icon-coupon {
        color: rgb(255,89,89);
      }
      &.icon-car2 {
        color: rgb(255,91,214);
      }
      &.icon-map2 {
        color: rgb(101,154,242);
      }
      &.icon-about {
        color: rgb(255,165,74);
      }
      &.icon-hand {
        color: rgb(72,200,117);
      }
      &.icon-kefu {
        color: rgb(255,116,88);
      }

      &.icon-right {
        font-size: .136rem;

        float: right;

        margin: .122rem 0;

        color: rgb(184,185,186);
      }
    }

    span {
      margin-left: .05rem;
    }
  }
}

</style>

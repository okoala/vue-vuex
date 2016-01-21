<template>
  <div class="ui-slider" v-el:slider>
    <ul class="ui-slider-content" :style="{width: items.length * 100 + '%'}">
      <li v-for="item in items" v-tap="onTap(item, $index)">
        <img :src="item.imageUrl" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import Scroll from '../util/scroll'

export default {

  props: {
    items: {
        type: Array,
        required: true,
        default: () => []
    },
    // 是否是自动播放
    autoplay: {
      type: Boolean,
      required: false,
      default: () => true
    },
    // 每一张图片持续的时间
    duration: {
      type: Number,
      required: false,
      default: () => 800
    },
    // 延迟时间
    delay: {
        type: Number,
        default: () => 4000
    }
  },

  data () {
    return {
      itemsLength: this.items.length,
      firstItem: this.items[0],
      lastItem: this.items[this.items.length - 1],
      width: document.body.clientWidth,

      // slider的实例
      slider: null
    }
  },

  watch: {
    items: function(val){
      if(val && val.length > 0){
        setTimeout(() => {
          new Scroll(this.$els.slider, {
            role: 'slider',
            indicator: true,
            duration: this.duration,
            autoplay: this.autoplay,
            interval: 3000
          });
        },10)
      }
    }
  },

  ready(){
    // console.log(this.items)
  },

  compiled(){
    if(this.items && this.items.length > 0){
      setTimeout(() => {
        new Scroll(this.$els.slider, {
          role: 'slider',
          indicator: true,
          duration: this.duration,
          autoplay: this.autoplay,
          interval: 3000
        });
      },10)
    }
  },

  methods: {

  },
}
</script>
<style lang='sass'>
@import '../styles/css/mixin';
@import '../styles/css/variable';

/**
 * 轮播组件
 */
.ui-slider {
  border-radius: .15rem;
  z-index: 2;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 3.125rem;
}
.ui-slider-content {
  border-radius: .15rem;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  display: -webkit-box;
  height: 100%;
  min-width: 100%;
}
.ui-slider-content > li {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
}
.ui-slider-content > li img {
  display: block;
  width: 100%;
  height: 100%;
}

.ui-slider-content > li > span {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;
}
.ui-slider-content > li > span .title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.7rem;
  line-height: 0.7rem;
  padding: 0 0.2rem;
  background: rgba(0,0,0,.6);
  color: #fff;
  @include font-dpr(16px);
}
.ui-slider-content > li.active {
  /*opacity: .5;*/
}
.ui-slider-indicators {
  font-size: 0;
  position: absolute;
  width: auto;
  left: 0;
  bottom: .2rem;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: -webkit-box;
  width: 100%;
}
.ui-slider-indicators li {
  font-size: 0;
  position: relative;
  display: block;
  overflow: hidden;
  /* -webkit-box-sizing: border-box;*/
  width: .25rem;
  height: .25rem;
  margin: 0 .15rem;
  white-space: nowrap;
  text-indent: 100%;
  /*border: 1px solid #9e9d9d;*/
  border-radius: 100%;
  background: #fff;
  /*background-color: rgba(0,0,0,.3);*/
  background-clip: padding-box;
}
.ui-slider-indicators li.current {
  background: $skin-a;
}

.ui-slider-indicators-center {
  right: 0;

  -webkit-box-pack: center;
}

</style>

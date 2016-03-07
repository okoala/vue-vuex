import Vue from 'vue'
import VueResource from 'vue-resource'

// Javascript
Vue.use(VueResource)

// HTTP相关
Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true

Vue.http.interceptors.push({
  request (request) {
    // 这里对请求体进行处理
    return request
  },
  response (response) {
    // 这里可以对响应的结果进行处理
    return response
  }
})

export default {
  getSlider: Vue.resource('/api/getSlider')
}

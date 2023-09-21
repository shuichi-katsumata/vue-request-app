<template>
  <div class="btnBox text-center" v-if="$route.name == 'index' || $route.name == 'retouch'">
    <router-link to="/" class="btn btn-primary mx-2">バナー依頼</router-link>
    <router-link to="/retouch" class="btn btn-warning mx-2">レタッチ依頼</router-link>
  </div>
  <router-view />
</template>

<script>
import RequestRetouch from './components/RequestRetouch.vue'

export default {
  name: 'App',
  components: {
    RequestRetouch
  }
}
</script>

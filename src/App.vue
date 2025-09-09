<template>
  <div v-if="$route.meta.showNav !== false" class="btnBox text-center">
    <router-link to="/" class="btn btn-primary mx-2">バナー依頼</router-link>
    <router-link to="/retouch" class="btn btn-warning mx-2">レタッチ依頼</router-link>
    <router-link to="/manager-page" class="btn btn-success mx-2">依頼管理</router-link>
  </div>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useDataStore } from './components/store/useDataStore';

const dataStore = useDataStore();

onMounted(() => {
  dataStore.getRequestData();
});
</script>
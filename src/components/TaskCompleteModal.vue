<template>
  <div v-show="show">
    <div class="z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center" style="background-color:rgba(0,0,0,0.5)">
      <div class="z-3 bg-white .text-secondary w-auto rounded mt-4 p-2" style="height: fit-content;">
        <p class="text-center">選択したタスクを完了させます</p>
        <div class="d-flex justify-content-end">
          <button class="btn btn-danger me-3" @click="$emit('confirm')">
            完了
          </button>
          <button class="btn btn_space btn-secondary" @click="$emit('close')">
            キャンセル
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  show: Boolean,
  
});

const emit = defineEmits(['close', 'confirm']);

</script>
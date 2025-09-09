<template>
  <div v-show="show">
    <div class="position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center" style="background-color:rgba(0,0,0,0.5)">
      <div class="bg-white text-secondary w-50 rounded mt-4" style="height: fit-content;">
        <div class="d-flex flex-column p-3">
          <div class="d-flex justify-content-center items-center">
            <h2 class="fs-3 lh-lg">{{ message }}</h2>
          </div>
          <div class="bg-secondary rounded mt-3" style="height: 20px;" v-if="progressBar">
            <div class="w-100 h2" style="height: 20px;">
              <div class="bg-primary rounded h-100 block" :style="{ width: progress + '%' }"></div>
            </div>
          </div>
          <div class="mt-4 d-flex justify-content-end items-center">
            <button class="btn btn-secondary px-4 py-2 fw-bold" v-if="sending">
              完了
            </button>
            <button class="btn btn-primary px-4 py-2 fw-bold" @click="refreshData" v-if="sendCompleted">
              完了
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRequestStore } from './store/useRequestStore';

const requestStore = useRequestStore();
const emit = defineEmits(['close']);

defineProps({
  show: Boolean,
  message: { type: String, default: '送信完了' },
  progressBar: { type: Boolean, default: false },
  progress: { type: Number, default: 0 },
  sending: { type: Boolean, default: false },
  sendCompleted: { type: Boolean, default: true },

});

const refreshData = () => {
  requestStore.isCheckedPlain = false;
  requestStore.isCheckedPlain2 = false;

  requestStore.orderDetails = [];
  requestStore.otherOrderDetails = [];

  requestStore.eventDetails = '';
  requestStore.eventText = '';
  requestStore.otherText = '';

  requestStore.faceRetouching = '';

  requestStore.manager = '';
  requestStore.shop = '';
  requestStore.deadline = '';
  requestStore.otherDeadline = [];
  requestStore.completed = 'false';
  requestStore.img = 'false';
  requestStore.imgUrls = [];
  requestStore.imgFiles = [];
  requestStore.successWidth = 0;
  requestStore.requestTitle = '';
  requestStore.completeDay = '';
  requestStore.shopConfirmation = 'false';
  requestStore.post = '';
  requestStore.progressBar = false;
  requestStore.sending = false;
  requestStore.send_completed = true;

  emit('close');
}

</script>
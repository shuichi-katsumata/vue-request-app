<template>
  <section>
    <div class="container">
    <h2>レタッチ依頼</h2>
    <div class="alert alert-warning">
      <div class="form-group">
        <div class="input-group align-items-center mb-3">
          <h5 class="me-3">店舗：</h5>
          <div class="btn-group">
            <label class="me-4">
              <input type="radio" v-model="requestStore.shop" value="DG"> DG
            </label>
            <label class="me-4">
              <input type="radio" v-model="requestStore.shop" value="KPG"> KPG
            </label>
            <label class="me-4">
              <input type="radio" v-model="requestStore.shop" value="GG"> GG
            </label>
          </div>
        </div>
        <div class="input-group align-items-center mb-3">
          <h5 class="me-3">担当者：</h5>
          <input v-model="requestStore.manager" class="form-control">
        </div>
        <div class="input-group align-items-center mb-3">
          <div class="flex-column">
            <h5 class="me-3 mb-0">キャスト名：</h5>
            <p class="required">※必須項目です</p>
          </div>
          <input v-model="requestStore.requestTitle" class="form-control">
        </div>
        <div class="row mb-3">
          <div class="col">
            <h5>修正箇所：</h5>
          </div>
          <div class="btn-group flex-column">
            <div>
              <label class="me-4">
                <input type="checkbox" v-model="requestStore.orderDetails" value="ほくろ"> ほくろ
              </label>
              <label class="me-4">
                <input type="checkbox" v-model="requestStore.orderDetails" value="しわ"> しわ
              </label>
              <label class="me-4">
                <input type="checkbox" v-model="requestStore.orderDetails" value="傷"> 傷
              </label>
              <label class="me-4">
                <input type="checkbox" v-model="requestStore.orderDetails" value="細身"> 細身
              </label>
            </div>
            <div class="input-group align-items-center">
              <label class="me-4">
                <input type="checkbox" v-model="requestStore.isCheckedPlain"> その他
              </label>
              <input v-model="requestStore.otherOrderDetails" class="form-control" :disabled="!requestStore.isCheckedPlain" style="border: 1px solid #e1e1e1;" placeholder="髪色やピアス、ネイルの修正等">
            </div>
          </div>
        </div>
        <div class="input-group align-items-center mb-3">
          <h5 class="me-3">顔の処理：</h5>
          <input v-model="requestStore.faceRetouching" class="form-control">
        </div>
        <div class="row mb-3">
          <div class="col">
            <h5>提出期限：</h5>
          </div>
          <div class="btn-group flex-column">
            <div>
              <label class="me-4">
                <input type="radio" v-model="requestStore.deadline" name="deadline" value="大至急"> 大至急
              </label>
              <label class="me-4">
                <input type="radio" v-model="requestStore.deadline" name="deadline" value="3"> ～３日
              </label>
              <label class="me-4">
                <input type="radio" v-model="requestStore.deadline" name="deadline" value="7"> ～７日
              </label>
              <label class="me-4">
                <input type="radio" v-model="requestStore.deadline" name="deadline" value="お任せ"> お任せ
              </label>
              <div class="input-group align-items-center">
                <label class="me-4">
                  <input type="checkbox" name="deadline" v-model="requestStore.isCheckedPlain2"> その他
                </label>
                <input v-model="requestStore.otherDeadline" class="form-control" :disabled="!requestStore.isCheckedPlain2" style="border: 1px solid #e1e1e1;" placeholder="その他要望はこちら">
              </div>
            </div>
          </div>
        </div>
        <h5> レタッチ画像：</h5>
        <div class="phone_area">
          <label class="select_file">
            <input type="file" @change="imgUploadStore.uploadFile" multiple>ファイル選択
          </label>
        </div>
        <div class="pc_area">
          <div class="drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center" @dragenter="imgUploadStore.dragEnter" @dragleave="imgUploadStore.dragLeave" @dragover.prevent @drop.prevent="imgUploadStore.dropFile"  :class="{ enter: imgUploadStore.isEnter }">ファイルアップロード</div></div>
        <div>
          <ul class="list-unstyled d-flex flex-wrap justify-content-start mt-3 p-0">
            <li v-for="(imgUrl, img) in requestStore.imgUrls" :key="img"  class="position-relative cursor d-flex flex-column fs-6 p-2 w-25">
              <div>
                <span class="position-absolute display-6 delete-mark" @click="imgUploadStore.deleteFile(img)">&times</span>
                <img id="thumb" class="w-100" :key="imgUrl" :src="imgUrl">
              </div>
            </li>
          </ul>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end pe-none"  v-if="requestStore.requestTitle === ''">
          <button class="btn btn-secondary">投稿</button>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end" v-else>
          <button @click="addRequestData" class="btn btn-primary">投稿</button>
        </div>
      </div>
    </div>
    </div>
    <h3>依頼中</h3>
    <div class="table-responsive mb-4">
      <table class="table table-striped text-nowrap"  style="width:1296px;">
        <thead>
          <tr>
            <th scope="col">店舗</th>
            <th scope="col">担当者</th>
            <th scope="col">キャスト名</th>
            <th scope="col">修正箇所</th>
            <th scope="col">顔の処理</th>
            <th scope="col">提出期限</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataStore.getPagedItems(dataStore.unfinishedRetouches, dataStore.retouchPage)">
            <td class="text-wrap">{{ item.shop }}</td>
            <td class="text-wrap">{{ item.manager }}</td>
            <td class="text-wrap">{{ item.requestTitle }}</td>
            <td class="text-wrap">{{ item.orders }}</td>
            <td class="text-wrap">{{ item.faceRetouching }}</td>
            <td class="text-wrap">{{ item.deadlines }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center mb-5">
      <span class="btn" :class="dataStore.retouchPage <= 0 ? ['btn-secondary', 'pe-none'] : 'btn-primary'" @click="dataStore.prevRetouch">&lt; prev</span>
      <span class="btn ms-4" :class="{'btn-secondary pe-none': dataStore.retouchPage === dataStore.retouchMaxPage, 'btn-primary': dataStore.retouchPage < dataStore.retouchMaxPage}" @click="dataStore.nextRetouch">next &gt;</span>
    </div>
    <h3>確認及び掲載</h3>
    <div class="table-responsive mb-4">
      <table class="table table-striped text-nowrap"  style="width:1296px;">
        <thead>
          <tr>
            <th scope="col">店舗</th>
            <th scope="col">担当者</th>
            <th scope="col">依頼日</th>
            <th scope="col">納品日</th>
            <th scope="col">キャスト名</th>
            <th scope="col">確認及び掲載</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in dataStore.finishedRetouches" class="align-middle">
            <td class="text-wrap">{{ item.shop }}</td>
            <td class="text-wrap">{{ item.manager }}</td>
            <td class="text-wrap">{{ item.requestDay }}</td>
            <td class="text-wrap">{{ item.completeDay }}</td>
            <td class="text-wrap">{{ item.requestTitle }}</td>
            <td>
              <button class="btn" :class="item.shopConfirmation === 'true' ? ['btn-warning', 'text-white'] : 'btn-outline-warning'" @click="modalStore.confirmationCheck('retouch', item.id, item.shopConfirmation)" >&ensp;確認&ensp;</button>
              <button class="btn btn-outline-success ms-3" @click="modalStore.openPostModal(item.id)">&ensp;掲載&ensp;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="modalStore.postModal">
      <div class="z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center" style="background-color:rgba(0,0,0,0.5)">
        <div class="z-3 bg-white .text-secondary w-auto rounded mt-4 p-2" style="height: fit-content;">
          <p class="text-center">掲載は完了しましたか？</p>
          <div class="d-flex justify-content-center">
            <button class="btn btn-warning text-white me-3" @click="modalStore.postCheck('retouch');">
              はい
            </button>
            <button class="btn btn_space btn-secondary" @click="closeModal">
              いいえ
            </button>
          </div>
        </div>
      </div>
    </div>
    <uploadModal 
      :show="modalStore.uploadModal" 
      :message="requestStore.sendingText"
      :progress-bar="requestStore.progressBar"
      :progress="requestStore.successWidth"
      :sending="requestStore.sending"
      :send-completed="requestStore.send_completed"
      @close="modalStore.closeUploadModal"
    />
  </section>
</template>
  
<script setup>
import UploadModal from './UploadModal.vue';
import { useDataStore } from './store/useDataStore';
import { useModalStore } from './store/useModalStore';
import { useImgUploadStore } from './store/useImgUploadStore.js';
import { useRequestStore } from './store/useRequestStore.js';

const dataStore = useDataStore();
const modalStore = useModalStore();
const imgUploadStore = useImgUploadStore();
const requestStore = useRequestStore();

// 依頼の登録処理
const addRequestData = () => {
  requestStore.saveRequest('retouch');
}

</script>
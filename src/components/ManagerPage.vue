<template>
  <section>
    <h2>バナータスク</h2>
    <div class="table-responsive mb-4">
      <table class="table table-striped text-nowrap"  style="width:1296px;">
        <thead>
          <tr>
            <th scope="col">店舗</th>
            <th scope="col">担当者</th>
            <th scope="col">サイズ</th>
            <th scope="col">イベント名</th>
            <th scope="col">内容</th>
            <th scope="col">文言</th>
            <th scope="col">その他要望</th>
            <th scope="col">提出期限</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in dataStore.unfinishedBanners" class="align-middle">
              <td class="text-wrap">{{ item.shop }}</td>
              <td class="text-wrap">{{ item.manager }}</td>
              <td class="text-wrap">{{ item.sizes }}</td>
              <td class="text-wrap">{{ item.requestTitle }}</td>
              <td class="text-wrap">{{ item.eventDetails }}</td>
              <td class="text-wrap">{{ item.eventText }}</td>
              <td class="text-wrap">{{ item.otherText }}</td>
              <td class="text-wrap">{{ item.deadlines }}</td>
              <td>
                <button class="btn btn_space btn-secondary pe-none" v-if="item.img == 'false'" ><i class="fa-solid fa-download" style="color: #fff;"></i></button>
                <button class="btn btn_space btn-success" @click="imagesDownload(item.requestTitle)" v-if="item.img == 'true'"><i class="fa-solid fa-download" style="color: #fff;"></i></button>
                <button class="btn btn-danger ms-3" @click="openModal(item.id, item.requestTitle, 'banner')">完了</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    <h2>レタッチタスク</h2>
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
            <tr v-for="item in dataStore.unfinishedRetouches" class="align-middle">
              <td class="text-wrap">{{ item.shop }}</td>
              <td class="text-wrap">{{ item.manager }}</td>
              <td class="text-wrap">{{ item.requestTitle }}</td>
              <td class="text-wrap">{{ item.retouchings }}</td>
              <td class="text-wrap">{{ item.faceRetouching }}</td>
              <td class="text-wrap">{{ item.deadlines }}</td>
              <td>
                <button class="btn btn_space btn-secondary pe-none" v-if="item.img == 'false'" ><i class="fa-solid fa-download" style="color: #fff;"></i></button>
                <button class="btn btn_space btn-success" @click="imagesDownload(item.requestTitle)" v-if="item.img == 'true'"><i class="fa-solid fa-download" style="color: #fff;"></i></button>
                <button class="btn btn-danger ms-3" @click="openModal(item.id, item.requestTitle, 'retouch')">完了</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <TaskCompleteModal
        :show="modalStore.uploadModal"
        :type="data.type"
        :id="data.id"
        :name="data.requestTitle"
        @close="closeModal"
        @confirm="requestCompleted"
      />
  </section>
</template>

<script setup>
import TaskCompleteModal from './TaskCompleteModal.vue';
import { reactive } from 'vue';
import { db, storage } from './firebase_settings/index';
import { ref as dbRef, update } from "firebase/database";
import { ref as imgRef, getDownloadURL, getMetadata, listAll, deleteObject } from "firebase/storage";
import { useDataStore } from './store/useDataStore';
import { useRequestStore } from './store/useRequestStore';
import { useModalStore } from './store/useModalStore';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

const dataStore = useDataStore();
const requestStore = useRequestStore();
const modalStore = useModalStore();

const data = reactive ({
  uploadModal: false,
  id: '',
  requestTitle: '',
  type: '',

});

// 画像ダウンロードボタン
const imagesDownload = async(requestTitle) => { 
  const jszip = new JSZip();
  const folderRef = imgRef(storage, requestTitle);
  const imagesList = await listAll(folderRef);

  await Promise.all(
    imagesList.items.map(async(item) => {
      const fileMeta = await getMetadata(item);
      const imgUrl = await getDownloadURL(item);
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      jszip.file(fileMeta.name, blob);  // accは蓄積されていく値、currは現在の配列の要素（次の要素）が渡される

    })
  );

  const zipBlob = await jszip.generateAsync({ type: 'blob' }); // generateAsyncでzipデータが作成される
  saveAs(zipBlob, requestTitle + '.zip');

};

//　完了ボタン
const openModal = (id, requestTitle, type) => {
  modalStore.uploadModal = true;
  data.id = id;
  data.requestTitle = requestTitle;
  data.type = type;

}

const closeModal = () => {
  modalStore.uploadModal = false;

}

// 画像ストレージ削除
const deleteImage = (requestTitle) => {
  const listRef = imgRef(storage, `${requestTitle}/`);
  listAll(listRef).then((res) => {
    res.items.forEach((itemRef) => {
      deleteObject(itemRef);
    });
  });
}

const requestCompleted = () => {
  update(dbRef(db, `${data.type}/${data.id}`), {
    completed: 'true',
    completeDay: requestStore.todayFormat,
    post: 'false',

  });
  deleteImage(data.requestTitle);
  closeModal();
  
}

</script>
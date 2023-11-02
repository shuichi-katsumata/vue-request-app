<template>
  <section>
    <h3>バナータスク</h3>
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
            <tr v-for="item in request_items">
              <td class="text-wrap">{{ item.shop }}</td>
              <td class="text-wrap">{{ item.manager }}</td>
              <td class="text-wrap">{{ item.sizes }}</td>
              <td class="text-wrap">{{ item.eventName }}</td>
              <td class="text-wrap">{{ item.eventDetails }}</td>
              <td class="text-wrap">{{ item.wording }}</td>
              <td class="text-wrap">{{ item.others }}</td>
              <td class="text-wrap">{{ item.deadlines }}</td>
              <td>
                <button class="btn btn_space btn-secondary pe-none" v-if="item.img == 'false'" ><i class="fa-solid fa-download" style="color: #ffffff;"></i></button>
                <button class="btn btn_space btn-success" @click="imagesDownload(item.eventName)" v-if="item.img == 'true'"><i class="fa-solid fa-download" style="color: #ffffff;"></i></button>
                <button class="btn btn-danger ms-3" @click="bannerCompleted(item.id); DeleteImage(item.eventName);">完了</button>
              </td>
              
            </tr>
        </tbody>
      </table>
    </div>
    <h3>レタッチタスク</h3>
      <div class="table-responsive mb-4">
        <table class="table table-striped text-nowrap"  style="width:1296px;">
          <thead>
            <tr>
              <th scope="col">店舗</th>
              <th scope="col">担当者</th>
              <th scope="col">キャスト名</th>
              <th scope="col">修正箇所</th>
              <th scope="col">顔の処理</th>
              <th scope="col">提出期限</th> <!--class="col-1"-->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in retouchRequest_items">
              <td class="text-wrap">{{ item.shop }}</td>
              <td class="text-wrap">{{ item.manager }}</td>
              <td class="text-wrap">{{ item.castName }}</td>
              <td class="text-wrap">{{ item.retouchings }}</td>
              <td class="text-wrap">{{ item.faceRetouching }}</td>
              <td class="text-wrap">{{ item.deadlines }}</td>
              <td>
                <button class="btn btn_space btn-secondary pe-none" v-if="item.img == 'false'" ><i class="fa-solid fa-download" style="color: #ffffff;"></i></button>
                <button class="btn btn_space btn-success" @click="imagesDownload(item.castName)" v-if="item.img == 'true'"><i class="fa-solid fa-download" style="color: #ffffff;"></i></button>
                <button class="btn btn-danger ms-3" @click="retouchCompleted(item.id); DeleteImage(item.castName);">完了</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </section>
</template>

<script>
export default {
  name: 'manager-page',
}
</script>
<script setup>
import { onMounted, reactive, computed } from 'vue';
import { getDatabase, ref, query, get, update, orderByChild, equalTo } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getStorage, ref as imgRef, getDownloadURL, getMetadata, listAll, deleteObject } from "firebase/storage";
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

const firebaseConfig = {
  apiKey: "AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",
  authDomain: "nicoro-request-form.firebaseapp.com",
  databaseURL: "https://nicoro-request-form-default-rtdb.firebaseio.com",
  projectId: "nicoro-request-form",
  storageBucket: "nicoro-request-form.appspot.com",
  messagingSenderId: "771124177365",
  appId: "1:771124177365:web:d19a5c49a3a5750bb4b55c"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const databaseBannerRef = ref(db, 'banner');
const databaseRetouchRef = ref(db, 'retouch');
const data = reactive ({
  fire_data: [],
  completed: '',
})

// DB取得
const getBannerData = ()=> {
  get(query(databaseBannerRef, orderByChild('completed'), equalTo('false'))).then((snapshot)=> {
    let arr = []
    let result = snapshot.val()
    for(let item in result) {
      arr.unshift(result[item]) // 新しい物が上に来るようにしている
    }
    data.fire_data = arr
  })
}
// ページの表示項目
const request_items = computed(function() {
  return data.fire_data
})
// 画像ダウンロードボタン
async function imagesDownload(eventName) { // 関数の前にasyncを宣言することで、非同期関数（async function）を定義できる。awaitを指定すると、その結果が返されるまでそれ以下は実行されず一時停止する
  const jszip = new JSZip();
  const storage = getStorage();
  const folderRef = imgRef(storage, eventName);
  const imagesList = await listAll(folderRef);
  const promises = imagesList.items.map(async (item) => {
    const file = await getMetadata(item);
    const fileRef = imgRef(storage, item.fullPath);
    const fileBlob = await getDownloadURL(fileRef).then((url) => {
      return fetch(url).then((response) => response.blob());
    });
    jszip.file(file.name, fileBlob);
  }).reduce((acc, curr) => acc.then(() => curr), Promise.resolve());
  await promises;
  const blob = await jszip.generateAsync({ type: 'blob' });
  saveAs(blob, eventName + '.zip');
};
// バナー完了ボタン
function bannerCompleted(key) {
  update(ref(db, 'banner/' + key), {
    completed: 'true',
  })
  getBannerData();
}
// 参考画像削除
function DeleteImage(key) {
  const storage = getStorage();
  const listRef = imgRef(storage, key + '/');
  listAll(listRef).then((res) => {
    res.items.forEach((itemRef) => {
      deleteObject(itemRef)
    });
  });
}

const retouchData = reactive ({
  fire_data: [],
})
// DB取得
const getRetouchData = ()=> {
  get(query(databaseRetouchRef, orderByChild('completed'), equalTo('false'))).then((snapshot)=> {
    let arr = []
    let result = snapshot.val()
    for(let item in result) {
      arr.unshift(result[item]) // 新しい物が上に来るようにしている
    }
    retouchData.fire_data = arr
  })
}
// ページの表示項目
const retouchRequest_items = computed(function() {
  return retouchData.fire_data
})
// レタッチ完了ボタン
function retouchCompleted(key) {
  update(ref(db, 'retouch/' + key), {
    completed: 'true',
  })
  getRetouchData();
}


onMounted(()=> {
  getBannerData(),
  getRetouchData()
})
</script>
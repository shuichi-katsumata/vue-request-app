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
                <input type="radio" v-model="data.shop" value="DG"> DG
              </label>
              <label class="me-4">
                <input type="radio" v-model="data.shop" value="KPG"> KPG
              </label>
              <label class="me-4">
                <input type="radio" v-model="data.shop" value="GG"> GG
              </label>
            </div>
          </div>
          <div class="input-group align-items-center mb-3">
            <h5 class="me-3">担当者：</h5>
            <input v-model="data.manager" class="form-control">
          </div>
          <div class="input-group align-items-center mb-3">
            <h5 class="me-3">キャスト名：</h5>
            <input v-model="data.castName" class="form-control">
          </div>
          <div class="row mb-3">
            <div class="col">
              <h5>修正箇所：</h5>
            </div>
            <div class="btn-group flex-column">
              <div>
                <label class="me-4">
                  <input type="checkbox" v-model="data.retouching" value="ほくろ"> ほくろ
                </label>
                <label class="me-4">
                  <input type="checkbox" v-model="data.retouching" value="しわ"> しわ
                </label>
                <label class="me-4">
                  <input type="checkbox" v-model="data.retouching" value="傷"> 傷
                </label>
                <label class="me-4">
                  <input type="checkbox" v-model="data.retouching" value="細身"> 細身
                </label>
              </div>
              <div class="input-group align-items-center">
                <label class="me-4">
                  <input type="checkbox" v-model="isCheckedPlain.checked"> その他
                </label>
                <input v-model="data.otherRetouching" class="form-control" :disabled="isCheckedPlain.checked ? false : true" style="border: 1px solid #e1e1e1;" placeholder="髪色やピアス、ネイルの修正等">
              </div>
            </div>
          </div>
          <div class="input-group align-items-center mb-3">
            <h5 class="me-3">顔の処理：</h5>
            <input v-model="data.faceRetouching" class="form-control">
          </div>
          <div class="row mb-3">
            <div class="col">
              <h5>提出期限：</h5>
            </div>
            <div class="btn-group flex-column">
              <div>
                <label class="me-4">
                  <input type="radio" v-model="data.deadline" name="deadline" value="大至急"> 大至急
                </label>
                <label class="me-4">
                  <input type="radio" v-model="data.deadline" name="deadline" value="3"> ～３日
                </label>
                <label class="me-4">
                  <input type="radio" v-model="data.deadline" name="deadline" value="7"> ～７日
                </label>
                <label class="me-4">
                  <input type="radio" v-model="data.deadline" name="deadline" value="お任せ"> お任せ
                </label>
                <div class="input-group align-items-center">
                  <label class="me-4">
                    <input type="checkbox" name="deadline" v-model="isCheckedPlain2.checked"> その他
                  </label>
                  <input v-model="data.otherDeadline" class="form-control" :disabled="isCheckedPlain2.checked ? false : true" style="border: 1px solid #e1e1e1;" placeholder="その他要望はこちら">
                </div>
              </div>
            </div>
          </div>
          <h5> レタッチ画像：</h5>
          <div class="phone_area">
            <label class="select_file">
              <input type="file" @change="uploadFile" multiple>ファイル選択
            </label>
          </div>
          <div class="pc_area">
            <div class="drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center" @dragenter="dragEnter" @dragleave="dragLeave" @dragover.prevent @drop.prevent="dropFile"  :class="{ enter: data.isEnter }">ファイルアップロード</div></div>
          <div>
            <ul class="list-unstyled d-flex flex-wrap justify-content-start mt-3 p-0">
              <li v-for="(imgUrl, img) in imgUrls" :key="img"  class="position-relative cursor d-flex flex-column fs-6 p-2 w-25">
                <div>
                  <span class="position-absolute display-6 delete-mark" @click="deleteFile(img)">&times</span>
                  <img id="thumb" class="w-100" :key="imgUrl" :src="imgUrl">
                </div>
              </li>
            </ul>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button @click="add" class="btn btn-primary">投稿</button>
          </div>
        </div>
      </div>

      <div v-show="data.uploadModal">
        <div class="z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center" style="background-color:rgba(0,0,0,0.5)">
          <div class="z-3 bg-white .text-secondary w-50 rounded mt-4" style="height: fit-content;">
            <div class="d-flex flex-column p-3">
              <div class="d-flex justify-content-center items-center">
                <h2 class="fs-3 lh-lg">
                  {{ data.send }}
                </h2>
              </div>
              <div class="bg-secondary rounded mt-3" style="height: 20px;" v-show="data.progressBar">
                <div class="w-100 h2" style="height: 20px;">
                  <div class="bg-primary rounded h-100 block" :style="('width:' + data.successWidth + '%')"></div>
                </div>
              </div>
              <div class="mt-4 d-flex justify-content-end items-center">
                <button class="btn btn-secondary px-4 py-2 fw-bold" v-show="data.sending">
                  完了
                </button>
                <button class="btn btn-primary px-4 py-2 fw-bold" @click="closeUploadModal" v-show="data.send_completed">
                  完了
                </button>
              </div>
            </div>
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
              <th scope="col">提出期限</th> <!--class="col-1"-->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in request_items">
              <td class="text-wrap">{{ item.shop }}</td>
              <td class="text-wrap">{{ item.manager }}</td>
              <td class="text-wrap">{{ item.castName }}</td>
              <td class="text-wrap">{{ item.retouchings }}</td>
              <td class="text-wrap">{{ item.faceRetouching }}</td>
              <td class="text-wrap">{{ item.deadlines }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center mb-5">
        <span class="btn btn-secondary me-4" @click="prev">&lt; prev</span>
        <span class="btn btn-secondary ms-4" @click="next">next &gt;</span>
      </div>
    </section>
  </template>
  
<script>
export default {
  name: 'retouch',
}
</script>

<script setup>
import { onMounted, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { getDatabase, ref, set, query, get, orderByChild, equalTo } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getStorage, ref as imgRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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
const databaseRetouchRef = ref(db, 'retouch');
const isCheckedPlain = reactive({
  checked: false
})
const isCheckedPlain2 = reactive({
  checked: false
})
const data = reactive ({
  manager: '',
  retouching: [],
  otherRetouching: [],
  retouchings: [],
  castName: '',
  faceRetouching: '',
  deadline: '',
  otherDeadline: [],
  deadlines: [],
  shop: '',
  num_per_page: 5,
  fire_data: [],
  completed: '',
  store: useStore(),
  id: '',
  isEnter: false,
  files: [],
  successWidth: 0,
  uploadModal: false,
  send: '送信完了',
  sending: false,
  send_completed: true,
  progressBar: false,
  img: 'false',
  imgUrls: [],
})
// 依頼の追加
const add = ()=> {
  data.uploadModal = true
  let d = new Date()
  let id = d.getTime()
  const imagePaths = [];
  const metadata = {
    contentType: 'image/jpeg',
  }
  // 画像がある時の処理
  const storage = getStorage(app);
  data.files.map(async file => {
    data.progressBar = true
    data.sending = true
    data.send_completed = false
    data.send = '送信中'
    data.img = 'true'
    const fileRef = imgRef(storage, data.castName + '/' + file.name);
    await uploadBytesResumable(fileRef, file, metadata);
    const singleImgPath = await getDownloadURL(fileRef);
    imagePaths.push(singleImgPath)
    if(imagePaths.length == data.files.length){
      console.log('got all paths here now:', imagePaths);
      const uploadTask = uploadBytesResumable(fileRef, file);
      uploadTask.on('state_changed', (snapshot)=> {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        data.successWidth = percentage;
        if (percentage == 100) {
          data.send = '送信完了'
          data.sending = false
          data.send_completed = true
        }
      });
    }
  })
  // DB書き込み
  function getDate(deadline) {
    if (deadline) {
      const date = new Date();
      date.setDate(date.getDate() + deadline);
      const month = date.getMonth() + 1;
      const day = date.getDate()
      return String(month) + '/' + String(day);
    } else {
      return data.deadline;
    }
  }
  set(ref(db, 'retouch/' + id), {
    manager: data.manager,
    retouchings: data.retouching + ',' + data.otherRetouching,
    castName: data.castName,
    faceRetouching: data.faceRetouching,
    deadlines: getDate(parseFloat(data.deadline)) +  ' ' + data.otherDeadline,
    shop: data.shop,
    completed: 'false',
    id: id,
    img: data.img,
  })
}

// 画像のアップロード(PC)
const imgUrls = data.imgUrls;
const dragEnter = ()=> {
  data.isEnter = true;
}
const dragLeave = ()=> {
  data.isEnter = false;
}
function dropFile(event) {
  const array = [];
  array.push(...event.dataTransfer.files); // ...で複数選べる
  data.isEnter = false;
  for( let i = 0; i < event.dataTransfer.files.length; i++ ) {
    const file =  event.dataTransfer.files[i];
    const reader = new FileReader();
    reader.onload = function() {
      // サムネイルとして表示
      imgUrls.push(reader.result);
      data.files.push(file);
    };
    reader.readAsDataURL(file);
  }
  event.preventDefault();
}
function deleteFile(img) {
  data.imgUrls.splice(img, 1);
  data.files.splice(img, 1);
}
// 画像のアップロード(スマホ・タブレット)
function uploadFile(event) {
  for( let i = 0; i < event.target.files.length; i++ ) {
    const file =  event.target.files[i];
    const reader = new FileReader();
    reader.onload = function() {
      // サムネイルとして表示
      imgUrls.push(reader.result);
      data.files.push(file);
    };
    reader.readAsDataURL(file);
  }
  console.log(data.files);
  console.log(imgUrls);
  event.preventDefault();
}
const closeUploadModal = () => {
  data.uploadModal = false;  
  location.reload(); 
}
// DB取得
const getRetouchData = ()=> {
  get(query(databaseRetouchRef, orderByChild('completed'), equalTo('false'))).then((snapshot)=> {
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
  return data.fire_data.slice( // slice(○○ , ××)で取り出す範囲設定(○○から××まで)
    data.num_per_page * data.store.state.page, // 0番目から
    data.num_per_page * (data.store.state.page + 1)  // 5番目まで(5番目は入らないので取り出すのは0番目から4番目の5つ)
  )
})
// 表示ページを表す値
const page = computed({
  get: () => { // デフォルトに表示するページ
    return data.store.state.page
  },
  set: (x) => { // lengthは長さ  0より小さい時は0、最後のページより大きいときは最後のページを表示
    var pg = x > (data.fire_data.length - 1) / data.num_per_page ?
      Math.ceil((data.fire_data.length - 1) / data.num_per_page) - 1 : x
    pg = pg < 0 ? 0 : pg
    data.store.commit('set_page',pg)
  }
})
// 次のページ
const next = ()=> {
  page.value++
}
// 前のページ
const prev = ()=> {
  page.value--
}
onMounted(()=> {
  getRetouchData()
})
</script>
<template>
    <div class="mx-auto col-sm-6">
      <h2>ログイン</h2>
      <form @submit.prevent>
        <div class="mb-3">
          <label class="form-label">メールアドレス：</label>
          <input type="email" class="form-control" v-model="data.mailAddress" autocomplete="on">
        </div>
        <div class="mb-3">
          <label class="form-label">パスワード：</label>
          <input type="password" class="form-control" v-model="data.password" autocomplete="on">
        </div>
      </form>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button @click="login" class="btn btn-info text-white fw-bold">ログイン</button>
      </div>
    </div>
</template>

<script setup>
  import { reactive } from 'vue';
  import { getAuth, signInWithEmailAndPassword, setPersistence,  browserSessionPersistence } from "firebase/auth";

  const data = reactive({
    mailAddress: '',
    password: '',
  });

  const auth = getAuth();
  
  const login = async() => {
    await setPersistence(auth, browserSessionPersistence).then( () => {
      return signInWithEmailAndPassword(auth, data.mailAddress, data.password);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    })
    location.reload();
  }
</script>
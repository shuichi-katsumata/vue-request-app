import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../firebase_settings";
import { ref as dbRef, update} from "firebase/database";

export const useModalStore = defineStore('modal', () => {

  //  モーダルウィンドウ操作
  const uploadModal = ref(false);
  const postModal = ref(false);
  const dataId = ref('');

  const openPostModal = (id) => {
    postModal.value = true;
    dataId.value = id;

  }

  const closeUploadModal = () => {
    uploadModal.value = false;

  }

  const closeModal = () => {
    postModal.value = false;
  
  }

  const postCheck = (type) => {
    update(dbRef(db, `${type}/${dataId.value}`), {
      post: 'true',
    
    });
    closeModal();
  }

  const confirmationCheck = (type, id, current) => {
    const currentVal = String(current);
    update(dbRef(db, `${type}/${id}`), {
      shopConfirmation: currentVal === "true" ? "false" : "true",
    
    });
  }

  return {
    uploadModal, postModal, openPostModal, closeUploadModal, closeModal, postCheck, confirmationCheck,
  } 

});
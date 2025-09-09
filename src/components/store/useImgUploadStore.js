import { defineStore } from "pinia";
import { useRequestStore } from "./useRequestStore";
import { ref } from "vue";

export const useImgUploadStore = defineStore('registration', () => {

  const requestStore = useRequestStore();
  const isEnter = ref(false);

  const dragEnter = ()=> {
    isEnter.value = true;

  }

  const dragLeave = ()=> {
    isEnter.value = false;
  
  }
  
  // 画像のアップロード(PC)
  const dropFile = (event) => {
    const dataFiles = [...event.dataTransfer.files];
    requestStore.imgFiles = dataFiles;
    isEnter.value = false;
    const previews = [];

    dataFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        // サムネイルとして表示
        previews.push(reader.result);
        requestStore.imgUrls = [...previews];      
      
      };
      reader.readAsDataURL(file);

    });
    event.preventDefault();
  }

  // 画像のアップロード(スマホ・タブレット)
  const uploadFile = (event) => {
    const dataFiles = [...event.target.files];
    requestStore.imgFiles = dataFiles;
    const previews = [];

    dataFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = function() {
        // サムネイルとして表示
        previews.push(reader.result);
        requestStore.imgUrls = [...previews];

      };
      reader.readAsDataURL(file);
    });
    event.preventDefault();
  }

  const deleteFile = (img) => {
    requestStore.imgUrls.splice(img, 1);
    requestStore.imgFiles.splice(img, 1);

  }

  return {
    isEnter, dragEnter, dragLeave, dropFile, uploadFile, deleteFile,
  } 

});
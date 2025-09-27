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
    requestStore.imgFiles.push(...dataFiles);
    isEnter.value = false;

    dataFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        // サムネイルとして表示
        requestStore.imgUrls.push(reader.result);      
      
      };
      reader.readAsDataURL(file);

    });
    event.preventDefault();
  }

  // 画像のアップロード(スマホ・タブレット)
  const uploadFile = (event) => {
    const files = [...event.target.files];
    requestStore.imgFiles = [...requestStore.imgFiles, ...files]; // 既存ファイルに追加

    const readFileAsDataURL = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    Promise.all(files.map(file => readFileAsDataURL(file)))
      .then((urls) => {
        // 既存の imgUrls に追加
        requestStore.imgUrls = [...requestStore.imgUrls, ...urls];
      })
      .catch((err) => {
        console.error("画像読み込みエラー", err);
      });

    event.preventDefault();
  };

  const deleteFile = (img) => {
    requestStore.imgUrls.splice(img, 1);
    requestStore.imgFiles.splice(img, 1);

  }

  return {
    isEnter, dragEnter, dragLeave, dropFile, uploadFile, deleteFile,
  } 

});
import { defineStore } from "pinia";
import { ref } from "vue";
import { db, storage } from "../firebase_settings/index";
import { ref as dbRef, set } from "firebase/database";
import { ref as imgRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDataStore } from "../store/useDataStore";
import { useModalStore } from "./useModalStore";
import dayjs from "dayjs";

const todayFormat = dayjs().format("MM/DD");

export const useRequestStore = defineStore( 'request', () => {

  const modalStore = useModalStore();
  const dataStore = useDataStore();
  
  const isCheckedPlain = ref(false);
  const isCheckedPlain2 = ref(false);

  const orderDetails = ref([]);
  const otherOrderDetails = ref([]);

  const eventDetails = ref('');
  const eventText = ref('');
  const otherText = ref('');

  const faceRetouching = ref('');

  const manager = ref('');
  const shop = ref('');
  const deadline = ref('');
  const otherDeadline = ref([]);
  const completed = ref('false');
  const img = ref('false');
  const imgUrls = ref([]);
  const imgFiles = ref([]);
  const successWidth = ref(0);
  const requestTitle = ref('');
  const completeDay = ref('');
  const shopConfirmation = ref('false');
  const post = ref('');
  const progressBar = ref(false);
  const sending = ref(false);
  const send_completed =  ref(true);
  const sendingText = ref('送信完了');

  const metadata = {
    contentType: 'image/jpeg',

  }

  const saveRequest = (type) => {
    const id = new Date().getTime();
    modalStore.uploadModal = true;
    const imagePaths = [];

    imgFiles.value.map(async file => {
      progressBar.value = true;
      sending.value = true;
      send_completed.value = false;
      sendingText.value = '送信中';
      img.value = 'true';
      const fileRef = imgRef(storage, `${requestTitle.value}/${file.name}`);
      await uploadBytesResumable(fileRef, file, metadata);
      const singleImgPath = await getDownloadURL(fileRef);
      imagePaths.push(singleImgPath);

      if (imagePaths.length === imgFiles.value.length) {
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on('state_changed', (snapshot)=> {
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          successWidth.value = percentage;

          if (percentage === 100) {
            sendingText.value = '送信完了';
            sending.value = false;
            send_completed.value = true;

          }
        });
      }
    });

    const dataToSave = {
      requestTitle: requestTitle.value,
      manager: manager.value,
      orders: [orderDetails.value, otherOrderDetails.value].filter(v => v && v.length > 0).join(','),
      deadlines: [dataStore.getDate(deadline.value), otherDeadline.value].filter(v => v && v.length > 0).join(','),
      shop: shop.value,
      completed: completed.value,
      id: id,
      img: img.value,
      requestDay: todayFormat,
      completeDay: completeDay.value,
      shopConfirmation: shopConfirmation.value,
      post: post.value,
    };

    if (type === 'banner') {
      dataToSave.eventDetails = eventDetails.value;
      dataToSave.eventText = eventText.value;
      dataToSave.otherText = otherText.value;
    } else {
      dataToSave.faceRetouching = faceRetouching.value;
    }

    set(dbRef(db, `${type}/${id}`), dataToSave);
   
  }

  return {
    todayFormat, isCheckedPlain, isCheckedPlain2, orderDetails, otherOrderDetails, eventDetails, eventText, otherText, faceRetouching,
    manager, shop, deadline, otherDeadline,completed, img, imgUrls, imgFiles, successWidth, requestTitle, completeDay, shopConfirmation,
    post, progressBar, sending, send_completed, sendingText,
    saveRequest,
  }
});
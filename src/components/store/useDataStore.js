import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { db } from "../firebase_settings";
import { ref as dbRef, onValue } from "firebase/database";

export const useDataStore = defineStore('data', () => {

  // DB書き込み
  const getDate = (deadline) => {
    const numDeadline = parseFloat(deadline);
    if (!isNaN(numDeadline)) {
      const date = new Date();
      date.setDate(date.getDate() + numDeadline);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}/${day}`;

    } else {
      return deadline || '';
    
    }
  }
  
  // DB取得
  const unfinishedBanners = ref([]);
  const finishedBanners = ref([]);
  const unfinishedRetouches = ref([]);
  const finishedRetouches = ref([]);
  
  const getRequestData = async() => {
    const refs = [
      { ref: dbRef(db, '/banner'), unfinished: unfinishedBanners, finished: finishedBanners },
      { ref: dbRef(db, '/retouch'), unfinished: unfinishedRetouches, finished: finishedRetouches }
    ];

    refs.forEach(({ref, unfinished, finished}) => {
      onValue(ref, (snapshot) => {
        const val = snapshot.val() || {};
        const allData = Object.values(val);
        const unfinishedData = [];
        const finishedData = [];

        allData.forEach(item => {
          if (item.completed === 'false') {
            unfinishedData.unshift(item); // 新しい物が上に来るようにしている
        
          } else if (item.post === 'false') {
            finishedData.unshift(item);
        
          }
        });
        unfinished.value = unfinishedData;
        finished.value = finishedData;

      });
    });
  }

  //  ページ管理
  const bannerPage = ref(0);
  const bannerMaxPage = ref(0);
  const retouchPage = ref(0);
  const retouchMaxPage = ref(0);
  const numPer_page = ref(5);

  const setPage = (pageRef, maxPageRef, x, fireData_length) => {
    maxPageRef.value = Math.max(Math.ceil(fireData_length / numPer_page.value) - 1, 0);
    let pg = x > maxPageRef.value ? maxPageRef.value : x;
    pg = pg < 0 ? 0 : pg;
    pageRef.value = pg; 

  }

  const getPagedItems = (items, pageRef) => {
    if (!items || !items.length) return [];
    const start = pageRef * numPer_page.value;
    const end = start + numPer_page.value;
    return items.slice(start, end);

  };

  const nextBanner = () => {
    setPage(bannerPage, bannerMaxPage, bannerPage.value + 1, unfinishedBanners.value.length)
  };

  const prevBanner = () => {
    setPage(bannerPage, bannerMaxPage, bannerPage.value - 1, unfinishedBanners.value.length);
  }

  const nextRetouch = () => {
    setPage(retouchPage, retouchMaxPage, retouchPage.value + 1, unfinishedRetouches.value.length);
  }

  const prevRetouch = () => {
    setPage(retouchPage, retouchMaxPage, retouchPage.value - 1, unfinishedRetouches.value.length);
  }

  watch(unfinishedBanners, (newVal) => {
    setPage(bannerPage, bannerMaxPage, bannerPage.value, newVal.length);
  });

  watch(unfinishedRetouches, (newVal) => {
    setPage(retouchPage, retouchMaxPage, retouchPage.value, newVal.length);
  });

  return {
    getDate, unfinishedBanners, finishedBanners, unfinishedRetouches, finishedRetouches, getRequestData, getPagedItems,
    bannerPage, bannerMaxPage, retouchPage, retouchMaxPage, nextBanner, prevBanner, nextRetouch, prevRetouch,
  } 
});
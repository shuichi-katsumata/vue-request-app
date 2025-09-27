# Request Form

Vue 3 + Vite で作成したフォームアプリケーションです。  
Firebase を利用した認証・データ管理が可能な SPA です。
社内での業務依頼が個人LINEでやり取りされており、情報漏洩のリスクがあったため、  
安全に依頼内容を管理できるフォームとして開発しました。

主な工夫点：
- 依頼完了後はバナーページおよびレタッチページで確認・掲載欄に表示
- ボタン管理により、掲載忘れの防止を実現
- 依頼完了時に Storage にアップロードされた画像を自動削除

---

## デモ URL

[https://shuichi-katsumata.github.io/vue-request-app/#/](https://shuichi-katsumata.github.io/vue-request-app/#/)


---

## 機能

- Firebase Authentication によるログイン機能
- 画像アップロード
- モーダル表示
- SPA ルーター（Hash History 使用）

---

## 使用技術

- Vue 3
- Vite
- Vue Router
- Firebase (Realtime Database, Storage)
- Bootstrap 5

---

## ディレクトリ構成

request-form/

├─ public/

│  └─ favicon.ico

├─ src/

│  ├─ assets/img/

│  │  ├─ icon-file.png

│  │  └─ logo.png

│  ├─ components/

│  │  ├─ Login.vue

│  │  ├─ ManagerPage.vue

│  │  ├─ RequestBanner.vue

│  │  ├─ RequestRetouch.vue

│  │  ├─ TaskCompleteModal.vue

│  │  ├─ UploadModal.vue

│  │  ├─ firebase_settings/

│  │  │  └─ index.js

│  │  └─ store/

│  │     ├─ useDataStore.js

│  │     ├─ useImgUploadStore.js

│  │     ├─ useModalStore.js

│  │     └─ useRequestStore.js

│  ├─ App.vue

│  ├─ index.css

│  ├─ main.js

│  └─ router.js

├─ .gitignore

├─ index.html

├─ package-lock.json

├─ package.json

├─ vite.config.js

└─ README.md # このファイル

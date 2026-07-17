/* ===== ランキング用 Firebase 設定ファイル =====
 *
 * お絵かきロジック専用の Firebase プロジェクト（oekaki-logic）の設定です。
 * 見積書アプリ（sakumo-app）とは完全に分離されています。
 *
 * 差し替える場合は、Firebase コンソールのウェブアプリ設定に表示される
 * firebaseConfig の中身をそのまま下に貼り替えてください。
 * apiKey が空だと、ランキング機能はオフになり、ゲーム本体はそのまま遊べます。
 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDVE-rKo3HIOJ28vB6vfACw-GH4zrqDgiM",
  authDomain: "oekaki-logic.firebaseapp.com",
  projectId: "oekaki-logic",
  storageBucket: "oekaki-logic.firebasestorage.app",
  messagingSenderId: "280502073857",
  appId: "1:280502073857:web:0f9130cf2b031819335e00"
};

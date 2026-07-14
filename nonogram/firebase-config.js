/* ===== ランキング用 Firebase 設定ファイル =====
 *
 * ここを、お絵かきロジック専用に作った新しい Firebase プロジェクトの
 * 設定に置き換えると、ログイン画面の表示名が新プロジェクトのものになり、
 * 見積書アプリ（sakumo-app）とは完全に分離されます。
 *
 * 置き換え方:
 *   1. Firebase コンソールで新しいプロジェクトを作成
 *   2. ウェブアプリを追加し、表示された firebaseConfig をこの下にそのまま貼る
 *   3. Authentication で Google ログインを有効化
 *   4. Firestore を作成し、ランキング用のセキュリティルールを設定
 *   （詳しい手順は開発者にご相談ください）
 *
 * apiKey が空だと、ランキング機能はオフになり、ゲーム本体はそのまま遊べます。
 *
 * ※ 現在は暫定的に見積書アプリと共用の sakumo-app を設定しています。
 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDEYnw2FapZ_fXzv_n6crB-cjGgJF2lMcM",
  authDomain: "sakumo-app.firebaseapp.com",
  projectId: "sakumo-app",
  storageBucket: "sakumo-app.firebasestorage.app",
  messagingSenderId: "571412680393",
  appId: "1:571412680393:web:c3a98b0e19485e37768718"
};

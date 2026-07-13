/* ===== 広告の設定ファイル =====
 * Google AdSense の審査に通ったら、下の 2 か所を書き換えて保存するだけで
 * 広告が表示されるようになります（それまでは広告枠は出ません）。
 *
 *   client : AdSense の「パブリッシャー ID」。ca-pub- で始まる文字列
 *   slot   : 作成した「広告ユニット ID」（数字の羅列）
 *
 * 例:
 *   window.AD_CONFIG = { client: "ca-pub-1234567890123456", slot: "1234567890" };
 */
window.AD_CONFIG = {
  client: "",
  slot: ""
};

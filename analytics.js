// JavaScriptファイル（例: script.js）
// meta.js

// METAタグの作成
var adsenseMetaTag = document.createElement('meta');
adsenseMetaTag.name = 'google-adsense-account';
adsenseMetaTag.content = 'ca-pub-9769812822312738'; // この部分は実際のコードに置き換える

// HEAD要素にMETAタグを追加
document.head.appendChild(adsenseMetaTag);


// 非同期でGoogle Tag Managerのスクリプトを読み込む
var scriptTag = document.createElement('script');
scriptTag.async = true;
scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-RCLT2WB2EF';
document.head.appendChild(scriptTag);

// スクリプトが読み込まれた後に実行される関数
scriptTag.onload = function() {
  // Google Tag Managerの初期化
  window.dataLayer = window.dataLayer || [];
  
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'G-RCLT2WB2EF');
};

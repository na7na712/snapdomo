// JavaScriptファイル（例: script.js）
(function() {
  var scriptAds = document.createElement('script');
  scriptAds.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9769812822312738';
  scriptAds.crossOrigin = 'anonymous';
  document.head.appendChild(scriptAds);
})();

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

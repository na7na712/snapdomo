// Google AdSenseの広告スクリプトを非同期で読み込む
var adsenseScriptTag = document.createElement('script');
adsenseScriptTag.async = true;
adsenseScriptTag.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9769812822312738';
document.head.appendChild(adsenseScriptTag);

// 非同期でGoogle Tag Managerのスクリプトを読み込む
var gtagScriptTag = document.createElement('script');
gtagScriptTag.async = true;
gtagScriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-RCLT2WB2EF';
document.head.appendChild(gtagScriptTag);

// Google Tag Managerのスクリプトが読み込まれた後に実行される関数
gtagScriptTag.onload = function() {
    // Google Tag Managerの初期化
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-RCLT2WB2EF');
};

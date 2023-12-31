// navigation.js
document.addEventListener('DOMContentLoaded', function() {
    const navigationHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">TOP</a></li>
                    <li><a href="cardlist.html">カードリスト</a></li>
                    <li><a href="locationlist.html">ロケーションリスト</a></li>
                    <li><a href="spotlights.html">スポットライトトレジャー</a></li>
                    <li><a href="spotlights_share.html">スポトレチェッカー</a></li>
                    <!-- 他のセクションへのリンクを追加 -->
                </ul>
                <ul>
                    <!-- ナビゲーションリンク -->
                    <li><a href="#section1">ア行</a></li>
                    <li><a href="#section2">カ行</a></li>
                    <li><a href="#section3">サ行</a></li>
                    <li><a href="#section4">タ行</a></li>
                    <li><a href="#section5">ナ行</a></li>
                    <li><a href="#section6">ハ行</a></li>
                    <li><a href="#section7">マ行</a></li>
                    <li><a href="#section8">ヤ行</a></li>
                    <li><a href="#section9">ラ行</a></li>
                    <li><a href="#section10">ワ行</a></li>
                </ul>
            </nav>
        </header>
    `;

    // ページに新しいナビゲーションを挿入
    document.body.insertAdjacentHTML('afterbegin', navigationHTML);
});


// ページが読み込まれた際に実行される処理
document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションリンクのクリックイベントを設定
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // クリックされたリンクのhref属性から対象の要素を取得
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // 対象の要素が存在する場合はスクロール
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // スムーズスクロール
                });
            }
        });
    });
});

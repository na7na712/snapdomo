// header.js
document.addEventListener('DOMContentLoaded', function() {
  const headerHTML = `
      <header>
          <nav>
              <ul>
                  <li><a href="index.html">TOP</a></li>
                  <li><a href="cardlist.html">カードリスト</a></li>
                  <li><a href="locationlist.html">ロケーションリスト</a></li>
                  <li><a href="spotlights_share.html">スポトレチェッカー：日本語ver</a></li>
                  <li><a href="spotlights_share_en.html">スポトレチェッカー：英語ver</a></li>
                  <!-- 他のセクションへのリンクを追加 -->
              </ul>
          </nav>
      </header>
  `;

  // ページに新しいヘッダーを挿入
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
});

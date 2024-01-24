// header.js
document.addEventListener('DOMContentLoaded', function() {
  const headerHTML = `
      <header>
          <nav>
              <ul>
                  <li><a href="../index.html">TOP</a></li>
                  <li><a href="../cardlist.html">カードリスト</a></li>
                  <li><a href="../locationlist.html">ロケーションリスト</a></li>
                  <li><a href="../spotlights_share.html">スポトレチェッカー</a></li>
                  <li><a href="../report.html">デッキ紹介</a></li>
                  <li><a href="https://twitter.com/NANA1051815">お問い合わせはこちら</a></li>
                  <!-- 他のセクションへのリンクを追加 -->
              </ul>
          </nav>
      </header>
  `;

  // ページに新しいヘッダーを挿入
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
});

// header.js
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
}


document.addEventListener('DOMContentLoaded', function() {
  const headerHTML = `
      <header>
          <nav>
            <div class="navbar">
                
                <div class="burger-menu" onclick="toggleMenu()">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                
                <span id="title"><b>マベスナドーモ</b></span>

    
        
                <div class="menu">
                    <!-- Your navigation links go here -->
                    <a href="index.html">TOP</a>
                    <a href="cardlist.html">カードリスト</a>
                    <a href="locationlist.html">ロケーションリスト</a>
                    <a href="spotlights_share.html">スポトレチェッカー</a>
                    <a href="spotlights_open.html">スポトレシミュレーター</a>
                    <a href="report.html">デッキ紹介</a>
                    <a href="https://youtube.com/@user-du9lf6dp6j?si=o5AJApS_udRf5CVF">YouTube</a>
                    <a href="https://twitter.com/NANA1051815">お問い合わせ(X)</a>

                </div>
            </div>
          </nav>
      </header>
  `;

  // ページに新しいヘッダーを挿入
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
});

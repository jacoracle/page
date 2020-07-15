(function() {
	'use strict';

	var tabMenus,
			tabContents;
	// document.querySelectorAllでマッチしたclass名を持つ要素を取得
	tabMenus = document.querySelectorAll('.tab_menu_item_link');
	tabContents = document.querySelectorAll('.tab_content');

	// 取得した要素は配列のようなオブジェクトを保持しているため、
	// 要素の数の分だけループ処理をして値を取り出す
	for (var i = 0; i < tabMenus.length; i++) {
		// タブメニュークリック時
		tabMenus[i].addEventListener('click', function(e) {
			// リンクの無効化
			e.preventDefault();

			// すべてのタブメニューを非アクティブにする
			for (var i = 0; i < tabMenus.length; i++) {
				tabMenus[i].className = 'tab_menu_item_link';
			}
			// クリックしたタブメニューをアクティブにする
			this.className = 'tab_menu_item_link is-active';

			// タブコンテンツを非アクティブにする
			for (var i = 0; i < tabContents.length; i++) {
				tabContents[i].className = 'tab_content';
			}
			// タブメニューdata属性値と等しいid値を持つタブコンテンツを表示させる
			document.getElementById(this.dataset.id).className = 'tab_content is-active';

		});
	}
}());

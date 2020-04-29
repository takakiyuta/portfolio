document.addEventListener('DOMContentLoaded',function(){
 document.getElementById("menuButton").addEventListener("click", function(){
  this.classList.toggle("active");
  document.getElementById('header-right').classList.toggle('active');
 })
});

$(function(){
// 「topに戻る」スクロールするとボタン表示・非表示
  $(window).scroll(function(){
    var $TopButton = $('#scroll_top');
    var ScrollPos = $(this).scrollTop();
    if(ScrollPos >= 800){
      $TopButton.fadeIn();
    } else {
      $TopButton.fadeOut();
    }
  });

  // メニューが横から出て来る
  $('#menuButton').click(function(){
   $('.header-right.active').css({
      right:"-100px",
      opacity:"0.0"
    }).animate({
      right:"0",
      opacity:"1.0"
    },1000);
  });

// スクロールジャンプ
  var menu_List = $('a[href^="#"]');
  var top = $('#scroll_top');
  var body = $('body,html');
// ①aタグをクリックし、href属性に # から始まるリンクが設定してあったら発動
  menu_List.click(function(){
    var adjust = 60;
    var speed = 500;
// ②クリックしたaタグのhref属性（リンク先URI）を取得し、変数に格納
    var href =$(this).attr('href')
// ③上で取得した値が#か空白だったら'html'を、それ以外だったら先ほど取得したhref属性の値を変数に格納    
    var target = $(href == '#' || href === '' ? 'html' : href);
// ④変数targetのページトップからの位置を取得し、変数に格納    
    var position = target.offset().top - adjust;
// ⑤scrollTopに上で取得した位置を設定し、ヌルヌルとスクロールさせる    
    body.animate({scrollTop :position},speed);
// ⑥a要素のデフォルトの機能を無効化する    
    return false;
    });

// トップに戻る
    top.click(function(){
      body.animate({
       scrollTop: 0
      },500);
      return false;
    });

 });



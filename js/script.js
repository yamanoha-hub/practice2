// ハンバーガーメニュー
$(function(){

  $('.nav-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.open-menu').toggleClass('open');
    return false;
  });
  
  // ページトップ
  $('#page-top').click(function() {
    $("html, body").animate({scrollTop:0}, 500);
    return false;
  });


  // フォームのバリデーション
  $(".alert").css("color", "red");
  $(".alert").hide();
  $("#submitBtn").click(function() {
    var sendFlag = true;

    // 氏名
    if(!$(".name").children("dd").children("input").val()) {
      $(".name").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".name").children("dd").children(".alert").hide();
    }

    // ひりがな
    if(!$(".furigana").children("dd").children("input").val()) {
      $(".furigana").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".furigana").children("dd").children(".alert").hide();
    }

    // メールアドレス
    if(!$(".mail").children("dd").children("input").val()) {
      $(".mail").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".mail").children("dd").children(".alert").hide();
    }

    // 電話番号
    if(!$(".tel").children("dd").children("input").val()) {
      $(".tel").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".tel").children("dd").children(".alert").hide();
    }

    // 郵便番号
    if(!$(".zip").children("dd").children("input").val()) {
      $(".zip").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".zip").children("dd").children(".alert").hide();
    }

    // 都道府県
    if($("select").val() == "none") {
      $(".pref").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".pref").children("dd").children(".alert").hide();
    }

    // 住所
    if(!$(".address").children("dd").children("input").val()) {
      $(".address").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".address").children("dd").children(".alert").hide();
    }

    // お問い合わせ内容
    if(!$("textarea").val()) {
      $(".multi-text").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".multi-text").children("dd").children(".alert").hide();
    }

    if(sendFlag == false) {
      return false;
    }
  });
  

});

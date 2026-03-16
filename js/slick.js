$(function() {
    // トップページスライドショー - #mainimg内の全スライドを対象に
    $('#mainimg').slick({
        autoplay: true,
        dots: true,            // 丸いページナビボタンを表示
        arrows: false,         // 左右の矢印を非表示
        autoplaySpeed: 4000,   // 切り替えのスピード
        fade: true,            // フェードエフェクト
        cssEase: 'linear',     // アニメーションのパターン
        pauseOnHover: false    // ホバーで一時停止しない
    });

    // 横スライドタイプのサムネイルスライドショー
    $('.thumbnail-slide').slick({
        autoplay: true,
        arrows: false,         // 左右の矢印
        autoplaySpeed: 0,      // 切り替えのスピード。今回は平均してなめらかに移動させるので0にする。
        speed: 7000,           // スライドのスピード
        cssEase: 'linear',     // アニメーションのパターン。通常はこのままでOK。
        slidesToShow: 4,       // 画面内に表示させる枚数。
        slidesToScroll: 1,     // １回でスライド移動する枚数。
        
        // 画面幅899px以下の設定
        responsive: [
            {
                breakpoint: 899,  // ブレイクポイント
                settings: {
                    slidesToShow: 2,  // 画面内に表示させる数。2枚。
                }
            }
        ]
    });
});
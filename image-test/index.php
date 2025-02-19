<?php
/**
 * Template Name: js-test
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      width: 100%;
      max-width: 1400px;
      margin: auto;
      padding-top: 100px;
      text-align: center;
    }

    .image-inner {
      margin: 100vh auto;
      width: 280px;
      height: 328px;
      position: relative;
      text-align: center;
	  overflow: hidden;
    }

    .image-inner.fade .image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      top:0;
      left: 0;
      z-index: 2;
      opacity: 1;
transition: transform 0.9s, opacity 0.6s;
	transform: translateY(0);
    }
	  
	 .image-inner.top .image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      top:0;
      left: 0;
      z-index: 1;
	  opacity: 1;
    }
	  
	 .image-inner.fade .image-change {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      top:0;
      left: 0;
      z-index: 1;
    }
	  
	.image-inner.fade .image.hidden {
		transform: translateY(-100%);
		opacity: 0;
    }
    
    .image-inner.top .image-change {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      top:0;
      left: 0;
      z-index: 2;
	  transform: translateY(100%);
	  transition: 0.3s;
    }
	  
	.image-inner.top .image-change.active {
		transform: translateY(0%);
    }
	  
  </style>
  <title>Document</title>
  <?php wp_head(); ?>
</head>
<body>
  <div class="container">
    <p>スクロールしてください</p>
    <div class="image-inner top">
      <img src="<?php echo get_template_directory_uri(); ?>/image-test/image/image1.png" alt="" class="image">
      <img src="<?php echo get_template_directory_uri(); ?>/image-test/image/image2.png" alt="" class="image-change">
    </div>
    <div class="image-inner fade">
      <img src="<?php echo get_template_directory_uri(); ?>/image-test/image/image1.png" alt="" class="image">
      <img src="<?php echo get_template_directory_uri(); ?>/image-test/image/image2.png" alt="" class="image-change">
    </div>
  </div>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const imageInners = document.querySelectorAll(".image-inner");

      window.addEventListener("scroll", () => {
        const windowHeight = window.innerHeight; // 画面の高さを取得

        imageInners.forEach((inner) => {
			const image1 = inner.querySelector(".image");
          const image2 = inner.querySelector(".image-change"); // .image 要素を取得
          const rect = inner.getBoundingClientRect(); // 要素の位置を取得

          // 画面の中ほどを超えたら .hidden を付与
          if (rect.top < windowHeight * 0.5) {
			  if(inner.classList.contains('top')) {
				  image2.classList.add("active");
			  } else if(inner.classList.contains('fade')) {
				  image1.classList.add("hidden");
			  }
            
          } else {
			  if(inner.classList.contains('top')) {
				  image2.classList.remove("active");
			  } else if(inner.classList.contains('fade')) {
				  image1.classList.remove("hidden");
			  }
          }
        });
      });
    });
  </script>
    <?php wp_footer(); ?>
</body>
</html>
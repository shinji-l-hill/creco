<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="icon" href="<?php echo IMAGE_ROOT; ?>/common/favicon.png" type="image/svg+xml" />
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
  <title>CRECO</title>
  <?php wp_head(); ?>
</head>

<body>
  <article class="main-content">
  <header class="header">
    <div class="header__left">
      <div class="header__logo-inner">
        <img src="<?php echo IMAGE_ROOT ?>/logo.png" alt="CRE-COロゴ" class="header__logo">
      </div>
    </div>
    <div class="header__right">
      <nav class="header__nav">
        <a class="header__nav-link--contact">
          contact
        </a>
        <button id="js-hamburger-btn" class="header__hamburger">
          <div class="header__hamburger-line-inner">
            <span class="header__hamburger-visibility-hidden">メニュー</span>
          </div>
        </button>
      </nav>
    </div>
  </header>
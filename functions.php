<?php
require_once get_template_directory() . '/inc/constants.php';
require_once get_template_directory() . '/inc/helper.php';

function my_theme_enqueue_styles_scripts() {
  // CSSファイルを読み込む
  wp_enqueue_style('destyle-css', 'https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css');
  wp_enqueue_style('my-style', ASSET_ROOT . '/css/style.css', [], '1.0.0');

  // JavaScriptファイルを読み込む
  wp_enqueue_script('jump-image', ASSET_ROOT . '/js/jump-image.js', [], '1.0.0', true);
  wp_enqueue_script('my-script', ASSET_ROOT . '/js/script.js', [], '1.0.0', true);
  //wp_enqueue_script('lib-inview',  'https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js', [], '1.0.0', true);
  if(is_page('fact')){
  wp_enqueue_script('lib-chart',  'https://cdn.jsdelivr.net/npm/chart.js', [], '1.0.0', true);
  wp_enqueue_script('lib-chart-datalabels',  'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels', [], '1.0.0', true);
  wp_enqueue_script('chart', ASSET_ROOT . '/js/chart.js', [], '1.0.0', true);
  }
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles_scripts');

register_nav_menus(
  array(
    'place_global' => 'グローバル',
    'place_footer' => 'フッターナビゲーション'
  )
);

function custom_setup(){
  add_theme_support('post-thumbnails');
  add_theme_support('menus');
}
add_action('after_setup_theme','custom_setup');

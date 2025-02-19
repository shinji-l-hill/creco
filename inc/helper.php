<?php

function loadMenuItems($menu_name) {
  $locations = get_nav_menu_locations();
  $menu = wp_get_nav_menu_object($locations[$menu_name]);
  $menu_items = wp_get_nav_menu_items($menu);

  return $menu_items;
}
<?php
global $post;
if (isset($post)) {
    $slug = get_post_field('post_name', $post->ID);
}
?>

<section class="page-mv--<?php echo $slug; ?>">
  <div class="page-mv__wrapper">
    <h1 class="common__title"><?php the_title(); ?></h1>
  </div>
</section>
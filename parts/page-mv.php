<?php
global $post;
if (isset($post)) {
    $slug = get_post_field('post_name', $post->ID);
}
?>

<section class="page-mv--<?php echo $slug; ?>">
  <div class="page-mv__wrapper">
    <?php if($slug == 'privacy-policy') : ?>
      <h1 class="common__title--primary"><?php the_title(); ?></h1>
    <?php else: ?>
      <h1 class="common__title"><?php the_title(); ?></h1>
    <?php endif; ?>
  </div>
</section>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__left">
                <div class="footer__logo-inner">
                    <p class="footer__logo-text">なりたい自分のその先へ</p>
                    <img src="<?php echo IMAGE_ROOT; ?>/footer-logo.png" alt="ロゴ" class="footer__logo">
                </div>
            </div>
            <div class="footer__right">
                <nav class="footer__menu">
                    <?php $menu_items = loadMenuItems('place_footer'); ?>
                    <ul class="footer__menu-list">
                        <?php 
                        foreach($menu_items as $item): ?>
                        <li class="footer__menu-list-item">
                            <a href="<?php echo $item->url; ?>" class="footer__menu-list-link"><?php echo $item->title; ?></a>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
            </div>
        </div>
        <small class="footer__copy">&copy; CRE-CO Inc. All Rights Reserved.</small>
    </footer>
    <?php wp_footer(); ?>
    </article> <!-- main-content -->
</body>
</html>
<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package faithstrattoncakes
 */

?>

	<footer id="colophon" class="site-footer">
  <div class="footer-nav">
  <?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-2',
          'menu-id' => 'footer-menu'
				)
			);
			?>	
	</div>
  <div>
    <p>&copy Faith Stratton Cakes Ltd <?php echo date("Y"); ?> All Rights Reserved</p>
  </div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

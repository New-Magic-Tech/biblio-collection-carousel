<?php
/**
 * Plugin Name:       Biblio Carousel
 * Description:       Custom carousels for bibliocommons searches
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Brian Looney Dev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       biblio-carousel
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


function biblio_carousel_biblio_carousel_block_init() {
	register_block_type( __DIR__ . '/build', [
		'render_callback' => 'bdl_render_biblio_carousel_block'
	  ] );
}
add_action( 'init', 'biblio_carousel_biblio_carousel_block_init' );

function bdl_render_biblio_carousel_block($attributes){
    $collection = isset($attributes['collection']) ? $attributes['collection'] : 'default-collection';
    $output = "<div class='biblio_carousel_block' data-collection='". esc_attr($collection) ."'>this part works at least</div>";
    return $output;
}


function biblio_carousel_register_route() {
    register_rest_route('biblio-carousel/v1', '/book-details', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'biblio_carousel_book_details',
        'permission_callback' => '__return_true',
        'args' => array(
            'collection' => array(
                'validate_callback' => function($param, $request, $key) {
                    return is_string($param);
                }
            ),
        ),
    ));
}

add_action('rest_api_init', 'biblio_carousel_register_route');

function biblio_carousel_book_details( $data ) {
    $params = $data->get_params();
    $collection = isset($params['collection']) ? $params['collection'] : "adult+nonfiction";
   $url = 'https://gateway.bibliocommons.com/v2/libraries/orl/rss/search?&query=collection%3A%28%22'.$collection.'%22%29&searchType=bl&sort=NEWLY_ACQUIRED';
   

    $xml = simplexml_load_file($url);
    if (!$xml) {
        return new WP_Error('biblio_carousel_error', 'Could not load data from the external source.', array('status' => 500));
    }

    $data = array();

    foreach ($xml->channel->item as $el) {
		$dc = $el->children('http://purl.org/dc/elements/1.1/');
		$title = (string)$el->title;
		$img_url = (string)$el->image_url;
	 	$link = (string)$el->link;
        $data[] = array(
			'title' => $title,
			'img_url' => $img_url,
			'link' => $link,
		);
    }

    return new WP_REST_Response($data, 200);
}

function biblio_enqueue_frontend_script() {
    if ( has_block( 'plugin/biblio-carousel' ) && !is_admin() ) {
        wp_enqueue_script(
            'biblio-carousel-frontend', 
            plugins_url( '/build/frontend.js', __FILE__ ),
            array( 'wp-element' ), 
            filemtime( plugin_dir_path( __FILE__ ) . '/build/frontend.js' ),
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'biblio_enqueue_frontend_script' );
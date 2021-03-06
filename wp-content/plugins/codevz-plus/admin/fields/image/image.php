<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
/**
 *
 * Field: Image
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if( ! class_exists( 'Codevz_Field_Image' ) ) {
  class Codevz_Field_Image extends Codevz_Fields {

    public function __construct( $field, $value = '', $unique = '', $where = '' ) {
      parent::__construct( $field, $value, $unique, $where );
    }

    public function output(){

      echo $this->element_before();

      $preview = '';
      $value   = $this->element_value();
      $add     = ( ! empty( $this->field['add_title'] ) ) ? $this->field['add_title'] : esc_html__( 'Add Image', 'codevz' );
      $hidden  = ( empty( $value ) ) ? ' hidden' : '';

      if( ! empty( $value ) ) {
        $attachment = wp_get_attachment_image_src( $value, 'thumbnail' );
        $preview    = $attachment[0];
      }

      echo '<div class="codevz-image-preview'. $hidden .'">';
      echo '<div class="codevz-image-inner"><i class="fa fa-times codevz-image-remove"></i><img src="'. $preview .'" alt="preview" /></div>';
      echo '</div>';

      echo '<a href="#" class="button button-primary codevz-button">'. $add .'</a>';
      echo '<input type="text" name="'. $this->element_name() .'" value="'. $this->element_value() .'"'. $this->element_class() . $this->element_attributes() .'/>';

      echo $this->element_after();

    }

  }
}

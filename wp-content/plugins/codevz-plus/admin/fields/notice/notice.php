<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
/**
 *
 * Field: Notice
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if( ! class_exists( 'Codevz_Field_notice' ) ) {
  class Codevz_Field_notice extends Codevz_Fields {

    public function __construct( $field, $value = '', $unique = '', $where = '' ) {
      parent::__construct( $field, $value, $unique, $where );
    }

    public function output() {

      echo $this->element_before();
      echo '<div class="codevz-notice codevz-'. $this->field['class'] .'">'. $this->field['content'] .'</div>';
      echo $this->element_after();

    }

  }
}

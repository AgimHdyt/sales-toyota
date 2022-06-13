<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'toyota' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm!.VE$MyFH#Ib9g%J?ul^~gr=z$BA(`vBaBe<QH1r8r$691S`h*=>.X+`O6)L6S8' );
define( 'SECURE_AUTH_KEY',  '2;dm^R#$Qwekkii|dmJSz3:vL&{~We9xd?nAfxfFH?)`.tK TuBil/EI*N.tFd7U' );
define( 'LOGGED_IN_KEY',    'mC)7uL]z,-X2`Ro?.7f;i}Kh2vv?QM~E|2W[c@<gD.k_m[vZJAULC>_Mg&{$$iok' );
define( 'NONCE_KEY',        '_Yrb{ Vz3:)S{9`JK9BH]jF(V]dd;+]z!H>ruMVG?t4U3*]gA:4*-R#!Bj<;aayw' );
define( 'AUTH_SALT',        'NMHa(1#hUhJ^NCuG~ pD]i:mf$u~Vo~ %jV-+^A,Q>t +N!y/K4F|F7:Z5&wT}2=' );
define( 'SECURE_AUTH_SALT', '>8Vx0-9jH=I#cQ25u.7AHLyp%hVlD.Mf]q:Ar+U$h#u8]FC1mru-WVU!m+sa?NPd' );
define( 'LOGGED_IN_SALT',   '0ep=Jkq2cX(?8>Gu}qHj;GNrPg`cosJBV!;V^tIY0es#VzY>Jd-da&CZ<yp]Ap.a' );
define( 'NONCE_SALT',       '1F~ecw?CM_<OTj<2qj0[sSi)s_X<qaP^Iwc1z8Z+Z#>$JZ;ZcY/*EduopMH]qU}G' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

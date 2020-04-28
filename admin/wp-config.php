<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// PRODUCTION

define( 'DB_NAME', 'tomnewma_db2' );

/** MySQL database username */
define( 'DB_USER', 'tomnewma_db2' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wjSkDWMY27EHx' );

/** MySQL hostname */
define( 'DB_HOST', '10.169.0.221' );

// DEVELOPMENT

// define( 'DB_NAME', 'tomnewman_db' );

// // /** MySQL database username */
// define( 'DB_USER', 'root' );

// // /** MySQL database password */
// define( 'DB_PASSWORD', 'root' );

// // /** MySQL hostname */
// define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5|-KnBmEAZN_80=?x(2j2@x<)Bd1Hg9DRNngekK>oV8D-S9-h|kNc6m9JZtpinCq' );
define( 'SECURE_AUTH_KEY',  'HN9<0JkVxLGI-e6yWVkf$4b!T1hh_*qmI`Vzf6=*vA94|1RbS/.4S2T/=+|0S-Xh' );
define( 'LOGGED_IN_KEY',    'zO1Nn5Qcwl^mv%WaGpJBO?1Qd=?,B3O8,FypTy/[2d;CKUA>?ObZ%>W0NJ3fZ;b/' );
define( 'NONCE_KEY',        'RR;3 a[ FqvmbjjTe0#/wuHR!(`L(WtEsoJxZ@HUE.X%pF/9&eA%nWyi<qa*_G[j' );
define( 'AUTH_SALT',        '3x-B%$$((d:Hz29O%C^ZQA!{|47/wOLDl)&V&/M:QC bgCmwzqyb#K!G~M(]$3m+' );
define( 'SECURE_AUTH_SALT', 'V0&sA0m2VDa~`4a16^<q;#sp|}an`y1ZFA]4#6a*U|IeftM!,^q_+sxi]Pi%?V*q' );
define( 'LOGGED_IN_SALT',   '/e;l]+4gJG<TnzbP BIbZBCivUL[5/zWcXKj^sVZ`ybc-`$|Jx6i 1NE$9)TxTcg' );
define( 'NONCE_SALT',       ' |*#vbVE(<hDD[mhm+xG/{9LNKj#gi=ZyQk$+f{zg;ki[/29/4]?,X^au%s*EUEW' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

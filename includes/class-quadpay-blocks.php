<?php

use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;
class Quadpay_WC_Blocks extends AbstractPaymentMethodType {

	/**
	 * @var Quadpay_WC_Gateway
	 */
	private $gateway;

	protected $name = 'quadpay';

	/**
	 * @inheritDoc
	 */
	public function initialize() {
		$this->settings = get_option( Quadpay_WC_Settings::SETTINGS_KEY, [] );
		$gateways       = WC()->payment_gateways->payment_gateways();
		$this->gateway  = $gateways[ $this->name ];
	}

	/**
	 * @inheritDoc
	 */
	public function get_payment_method_script_handles() {
		$script_path       = '/assets/js/blocks/index.js';
		$script_asset_path = QUADPAY_WC_PLUGIN_PATH . 'assets/js/blocks/index.asset.php';
		$script_asset      = file_exists( $script_asset_path )
			? require( $script_asset_path )
			: array(
				'dependencies' => array(),
				'version'      => QUADPAY_WC_VERSION
			);
		$script_url        = QUADPAY_WC_PLUGIN_URL . $script_path;

		wp_register_script(
			'quadpay-payments-blocks',
			$script_url,
			$script_asset[ 'dependencies' ],
			$script_asset[ 'version' ],
			true
		);

		return [ 'quadpay-payments-blocks' ];
	}

	/**
	 * @inheritDoc
	 */
	public function get_payment_method_data() {
		return [
			'title'       => $this->gateway->get_title(),
			'description' => $this->gateway->get_description(),
			'supports'    => array_filter( $this->gateway->supports, [ $this->gateway, 'supports' ] ),
			'enable_payment_widget' => ($this->get_setting( 'enable_payment_widget' ) === 'yes'),
			'merchant_id' => $this->get_setting( 'merchant_id' ),
			'mfpp' => ($this->get_setting( 'mfpp' ) === 'yes')
		];
	}

}

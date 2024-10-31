=== Zip US Gateway for WooCommerce ===
* Contributors: quadpay
* Tags: Zip, WooCommerce, payment, gateway, BNPL, Buy now pay later, Pay in 4
* Requires at least: 4.7
* Tested up to: 6.6
* Stable tag: 1.9.0
* Requires PHP: 7.0
* License: GPLv3
* License URI: https://www.gnu.org/licenses/gpl-3.0.html

Use Zip US as a payment gateway for WooCommerce.

== Description ==

[Zip](https://zip.co/us) helps you acquire more customers, boost your average order value, and offer a first-class payment experience at checkout. Zip seamlessly integrates with your store’s online checkout via our WooCommerce.

Upon installing the Zip extension, the widget will appear on your store’s product pages below the product price, displaying the amount divided into 4. For example, if the product price is $200 the widget will read “or 4 payments of $50.00 with Zip”. The widget also includes a radio that displays the installment breakdown and lending disclosures when clicked. The widget can also be placed on the cart preview page (or mini cart), where it will display the entire purchase price divided into 4. When customers select Zip as a payment option at checkout they are taken to a secure Zip page to confirm their purchase and then redirected back to your store upon confirmation of the installment plan.

To utilize Zip’s WooCommerce plugin you will need a merchant account with Zip. Please complete the signup form on the [Zip for Business](https://zip.co/us/for-businesses) site to begin the onboarding process.

== What's New ==

* Removed Zip Canada support
* Added Installment Fee
* New (block-based) checkout support

== Installation ==

To install the Zip plugin, please follow these steps:

1. Visit the [WordPress marketplace](https://wordpress.org/plugins/quadpay-gateway-for-woocommerce/#installation) to download the plugin.
2. Login to the **WordPress Admin Dashboard** and go to **Plugins**.
3. Click on **Add New**.
4. Click on **Upload Plugin**.
5. Click on **Browse** and find the location of where you downloaded the plugin. Select the zipped plugin file, and click on Install Now.
6. After successful installation, click on **Activate Plugin**.
7. Go back to the **Dashboard** and select **Plugins**. The Zip Gateway for WooCommerce plugin now appears in the list of plugins.

To configure the Zip plugin, please follow these steps:

1. Check **Enable Zip**.
2. Copy and paste the Client Id and Client Secret provided in the [Zip Merchant Portal](http://merchant.us.zip.co) > Settings tab. (Take care not to add any additional spaces or characters to these fields).
3. To display the Zip widget on the Product Page and the Cart Page, check both Enable **Product Page Widget** and Enable **Cart Page Widget**.
4. Test mode should be set to **Production**.
5. Click **Save changes**.

For more detailed instructions please see our [developer documentation](https://docs.us.zip.co/docs/woocommerce) for more information. If you need additional assistance please contact our [Partner Support](mailto:partners@us.zip.co) team.

== Frequently Asked Questions ==

= Can I use this plugin without WooCommerce? =

The Zip plugin for WooCommerce requires the WooCommerce platform. Zip offers a variety of products for other e-commerce platforms. See our [developer documentation](https://docs.us.zip.co/docs/introduction) for more information.

= Do I need an account to use the Zip WooCommerce plugin? =

Yes, to utilize this extension you will need a merchant account with Zip. Please complete the signup form on the [Zip for Business site](https://zip.co/us/for-businesses) to begin the onboarding process.

= Is the plugin free? =

The plugin is freely available, but you need a Zip merchant account to provide your customers Zip as a checkout option. Please complete the signup form on the [Zip for Business site](https://zip.co/us/for-businesses) to begin the onboarding process.

= Why do you load external files? =

The plugin loads external files from Zip’s javascript library on the product detail page, mini cart, and checkout page. These files are needed to display both widgets and the checkout and are provided in real-time.

= How do I request a feature? =

Please send a request to [Zip’s Integrations team](mailto:integrationsus@zip.co).

== Screenshots ==

1. General settings.
2. Zip widget on the cart summary.
3. Zip payment widget on checkout page.

== Changelog ==
= 1.9.0 =
* Removed Zip Canada support
* MFPP is now referred to as Installment Fee
* Compatibility - tested up to WooCommerce 8.9
* Compatibility - tested up to WordPress 6.6
* Documentation updates

= 1.8.0 =
* New (block-based) checkout support
* High-Performance Order Storage support
* Compatibility - tested up to WooCommerce 8.9
* Compatibility - tested up to WordPress 6.5

= 1.7.3 =
* Text changed on payment method display

= 1.7.2 =
* Added merchantId to widget tag if it is set in Payment settings
* Compatibility - tested up to WordPress 6.2
* Compatibility - tested up to WooCommerce 7.5

= 1.7.1 =
* Compatibility - tested up to WordPress 6.0
* Compatibility - tested up to WooCommerce 6.8

= 1.7.0 =
* Defer funds capture support
* Multiple place order and API improvements
* Compatibility - tested up to WooCommerce 6.3

= 1.6.0 =
* Added payment widget on checkout
* Compatibility - tested up to WooCommerce 6.2
* Compatibility - tested up to WordPress 5.9

= 1.5.1 =
* Minor code improvements
* Installment Fee (formerly MFPP) attribute added to the order API call

= 1.5.0 =
* Canada checkout support
* Installment Fee (formerly MFPP)

= 1.4.0 =
* Changed to Zip branding

= 1.3.11 =
* Fix - fixed an error when trying to get the billing country
* Compatibility - tested up to WooCommerce 5.3
* Compatibility - tested up to WordPress 5.7

= 1.3.10 =
* Tweak - added new QuadPay branding
* Compatibility - tested up to WooCommerce 4.9.0

= 1.3.9 =
* Fix - fixed issue with checking QuadPay status for on hold and pending orders
* Tweak - added time settings for order check
* Tweak - added detailed log and order notes messages
* Tweak - added "Discover" as a credit card option in QuadPay checkout button

= 1.3.8 =
* Tweak - added attribute to ES5 script to maximize browser support
* Tweak - improved readme description installation
* Compatibility - tested up to WordPress 5.6.0 and WooCommerce 4.8.0

= 1.3.7 =
* Tweak - logging improvements
* Tweak - updated to QuadPay widget 2.2.6
* Tweak - making plugin compliant with WordPress plugin guidelines
* Fix - fixed issue with access token issue
* Compatibility - tested up to WordPress 5.5.1 and WooCommerce 4.5.1

== Upgrade Notice ==

= 1.3.7 =
With version 1.3.7 we have improved the logging to provide a better support in case something went wrong. And, we are proud to publish the first version to the WordPress plugin repository.

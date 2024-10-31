import { registerPaymentMethod } from '@woocommerce/blocks-registry';
import { decodeEntities } from '@wordpress/html-entities';
import { getSetting } from '@woocommerce/settings';
import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from "react";
import { useSelect } from "@wordpress/data";
import { CART_STORE_KEY } from '@woocommerce/block-data';

const settings = getSetting( 'quadpay_data', {} );

const updateMfpp = (props) => {
    const { extensionCartUpdate } = wc.blocksCheckout;
    const { eventRegistration, emitResponse } = props;
    const { onPaymentSetup } = eventRegistration;

    useEffect(() => {
        extensionCartUpdate({
            namespace: 'quadpay',
            data: {
                mfpp: 'add'
            }
        });

        const unsubscribe = onPaymentSetup(() => {
            return { type: emitResponse.responseTypes.SUCCESS };
        });

        return () => {
            extensionCartUpdate({
                namespace: 'quadpay',
                data: {
                    mfpp: 'remove'
                }
            });
            return unsubscribe();
        };
    }, [onPaymentSetup]);
}

const Content = (props) => {
    if (settings.mfpp) {
        updateMfpp(props);
    }
    return decodeEntities( settings.description || '' );
};

const label = decodeEntities( settings.title ) || __( 'Zip - Pay over time', 'woo_quadpay' );

const Label = ( props ) => {
    const { PaymentMethodLabel } = props.components;
    return <PaymentMethodLabel text={ label } />;
};

const ZipPaymentWidget = ( props ) => {
    if (settings.mfpp) {
        updateMfpp(props);
    }

    const totals = useSelect((select) => {
        const store = select(CART_STORE_KEY);
        return store.getCartTotals();
    });

    return <Fragment>
        <zip-payment-widget amount={ totals.total_price/100 } merchantId={ settings.merchant_id || undefined }></zip-payment-widget>
    </Fragment>;
};

const Zip = {
    name: "quadpay",
    label: <Label/>,
    content: settings.enable_payment_widget ? <ZipPaymentWidget/> : <Content/>,
    edit: null,
    canMakePayment: () => true,
    ariaLabel: label,
    supports: {
        features: settings.supports,
    },
};

registerPaymentMethod(Zip);

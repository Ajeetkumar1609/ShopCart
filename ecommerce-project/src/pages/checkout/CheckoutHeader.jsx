import {Link} from "react-router";
import Logo from '../../assets/images/logo.png';
import MobileLogo from '../../assets/images/mobile-logo-white.png';
import CheckMark from '../../assets/images/icons/checkout-lock-icon.png';

export function CheckoutHeader({cart}) {
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    })

    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/" className="logo-link">
                        <h3>ShopCart</h3>
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link" to="/">{totalQuantity} items</Link>)
                </div>

                <div className="checkout-header-right-section">
                    <img src={CheckMark} />
                </div>
            </div>
        </div>
    )
}
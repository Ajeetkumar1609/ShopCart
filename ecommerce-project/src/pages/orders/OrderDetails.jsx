import dayjs from "dayjs";
import axios from "axios";
import { Link } from "react-router";
import { Fragment } from "react";
import BuyAgainIcon from '../../assets/images/icons/buy-again.png';
import { API_URL } from "../../api";

export function OrderDetails({order, loadCart}) {
   
    return (
        <div className="order-details-grid">
            {order.products.map((orderProduct) => {

                const addToCart = async() => {
                    await axios.post(`${API_URL}/api/cart-items`, {
                    productId: orderProduct.product.id,
                    quantity: 1
                    });

                    await loadCart();
                };

                return (
                    <Fragment key={orderProduct.productId}>
                        <div className="product-image-container">
                            <img src={`${API_URL}/${orderProduct.product.image}`} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                                {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                                Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                            </div>
                            <div className="product-quantity">
                                Quantity: {orderProduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary" onClick={addToCart}>
                                <img className="buy-again-icon" src={BuyAgainIcon} />
                                <span className="buy-again-message">Add to Cart</span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <Link to={`/tracking/${order.id}/${orderProduct.productId}`}>
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </Link>
                        </div>
                    </Fragment>
                );
            })}

        </div>
    );
}
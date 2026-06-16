import axios from 'axios'; 
import { DeliveryOptions } from './DeliveryOptions';
import { CartItemDetails } from './CartItemDetails';    
import { DeliveryDate } from './CartItemDetails';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
    return (
        <div className="order-summary">

            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    });

                const deleteCartItem = async () => {
                    await axios.delete(`/api/cart-items/${cartItem.productId}`);

                    await loadCart();
                }

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <DeliveryDate selectedDeliveryOption = {selectedDeliveryOption} />

                        <div className="cart-item-details-grid">
                            <CartItemDetails cartItem={cartItem} deleteCartItem={deleteCartItem} />
                            <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} />   
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
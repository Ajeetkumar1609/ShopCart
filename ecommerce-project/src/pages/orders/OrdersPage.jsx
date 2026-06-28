import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Header } from '../../components/Header';
import { OrderHeader } from './OrderHeader';
import { OrderDetails } from './OrderDetails';
import './OrdersPage.css';
import { API_URL } from '../../api';

export function OrdersPage({ cart, loadCart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrdersData = async () => {
            const response = await axios.get(`${API_URL}/api/orders?expand=products`);
            setOrders(response.data);
        }
        
        fetchOrdersData();
    }, []);


    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">

                    {orders.map((order) => {
                        return (
                            <div key={order.id} className="order-container">

                                <OrderHeader order={order} />

                                <OrderDetails order={order} loadCart={loadCart} />
                            </div>
                        );
                    })}


                </div>
            </div>
        </>
    );
}
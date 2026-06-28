import axios from 'axios';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';
import { API_URL } from '../../api';

export function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);

    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

    useEffect(() => {
        const getHomeData = async () => {
            const url = search
                ? `${API_URL}/api/products?search=${search}`
                : `${API_URL}/api/products`;

            const response = await axios.get(url);

            setProducts(response.data);
        }

        getHomeData();
    }, [search]);

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}
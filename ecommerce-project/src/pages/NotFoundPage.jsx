import {Header} from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage({ cart }) {
    return (
        <>
            <title>Page Not Found</title>
            <link rel="icon" type="image/svg+xml" href="not-found-favicon.png" />

            <Header cart={cart} />

            <div className="not-found-message">
                <h2>Page Not Found</h2>
            </div>
        </>
    );
}
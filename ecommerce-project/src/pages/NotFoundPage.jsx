import {Header} from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage() {
    return (
        <>
            <title>Page Not Found</title>
            <link rel="icon" type="image/svg+xml" href="not-found-favicon.png" />

            <Header />

            <div className="not-found-message">
                <h2>Page Not Found</h2>
            </div>
        </>
    );
}
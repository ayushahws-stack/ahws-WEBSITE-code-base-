
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>404 - Page Not Found | Academic Heights World School</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <PageBanner 
        title="404 - Page Not Found" 
        image="/images/campus_placeholder.jpg" 
      />
      
      <div className="container" style={{ textAlign: 'center', padding: '100px 20px', minHeight: '50vh' }}>
        <h1 style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '20px' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Oops! We couldn't find that page.</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', padding: '12px 30px', borderRadius: '4px', textDecoration: 'none', background: 'var(--primary)', color: 'white', fontWeight: 'bold' }}>
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

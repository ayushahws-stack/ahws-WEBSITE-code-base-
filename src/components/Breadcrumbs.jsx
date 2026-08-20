import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Do not show breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="breadcrumbs" style={{ padding: '16px 5%', background: 'var(--light-bg)', fontSize: '0.9rem' }}>
      <nav aria-label="breadcrumb">
        <ol style={{ listStyle: 'none', display: 'flex', gap: '8px', padding: 0, margin: 0, flexWrap: 'wrap' }}>
          <li>
            <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Home</Link>
          </li>
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            
            // Format the string: replace dashes with spaces and capitalize
            const title = value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

            return (
              <React.Fragment key={to}>
                <li style={{ color: 'var(--text-light)' }}>/</li>
                <li>
                  {isLast ? (
                    <span style={{ color: 'var(--text-dark)', fontWeight: 'bold' }} aria-current="page">
                      {title}
                    </span>
                  ) : (
                    <Link to={to} style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                      {title}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './page404.scss';

const Page404 = () => {
  useEffect(() => {
    document.title = 'Page 404';
  }, []);
  return (
    <>
      <div className="fog1 ">
        <div className="smoke ">
          <div>
            <ul>
              <li>E</li>
              <li>r</li>
              <li>r</li>
              <li>o</li>
              <li style={{ marginRight: '0.3em' }}>r</li>
              <li>4</li>
              <li>0</li>
              <li>4</li>
              <br />
            </ul>
          </div>
          <p className="goHome">
            <>
              You shouldn't be here...go{' '}
              <Link to={'/'} style={{ textDecoration: 'underline' }}>
                home
              </Link>
            </>{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page404;

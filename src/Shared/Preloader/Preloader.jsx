import { useEffect } from 'react';
import './preloader.css';

const Preloader = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelector('#loading-screen').style.opacity = 0;
      setTimeout(() => {
        document.querySelector('#loading-screen').remove();
      }, 300);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className='loading-screen'
      id='loading-screen'
    >
      <span className='bar top-bar'></span>
      <span className='bar down-bar'></span>
      <div className='animation-preloader'>
        <div className='spinner'></div>
        <div className='loader'></div>
        <div className='txt-loading'>
          <span
            data-text-preloader='G'
            className='letters-loading'
          >
            G
          </span>
          <span
            data-text-preloader='E'
            className='letters-loading'
          >
            E
          </span>
          <span
            data-text-preloader='R'
            className='letters-loading'
          >
            R
          </span>
          <span
            data-text-preloader='O'
            className='letters-loading'
          >
            O
          </span>
          <span
            data-text-preloader='L'
            className='letters-loading'
          >
            L
          </span>
          <span
            data-text-preloader='D'
            className='letters-loading'
          >
            D
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

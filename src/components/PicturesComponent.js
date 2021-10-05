import React from 'react'
import './css/PicturesComponent.css';

const PicturesComponent = ({ pictures, loader }) => {

  if (loader) {
    return <h2>Loading...</h2>;
  }

  return <div className='row'>
    {pictures && pictures.map(url => (
      <div className='column' ><img src={url} alt={url} /></div>
    ))}
  </div>;
};

export default PicturesComponent;

import React from 'react';
const Image = ({ index, photo, open }) => {
  return (
    <img
      src={photo}
      index={index}
      alt={''}
      margin={'-10px 0'}
      style={{
        clip: 'rect(50px,480px,300px,0px)',
        objectFit: 'cover',
      }}
      onClick={() => open({ index, video: photo })}
      {...photo}
    />
  );
};

export default Image;

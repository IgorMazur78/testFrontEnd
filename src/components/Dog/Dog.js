import React from 'react';
import style from './Dog.module.css';

const { container, photo, photoWrapper, title, description } = style;

function Dog({ card }) {
  const { name, bred_for, breed_group, image, reference_image_id } = card;
  return (
    <div className={container}>
      <div className={photoWrapper} key={reference_image_id}>
        <img className={photo} src={image.url} alt={name} />
      </div>
      <h4 className={title}>{name}</h4>
      <p className={description}>{bred_for}</p>
      <p className={description}>{breed_group}</p>
    </div>
  );
}

export default Dog;
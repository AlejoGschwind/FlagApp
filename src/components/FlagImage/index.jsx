import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FlagImage = ({image}) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      width={image.width}
      src={image.src}
    />
  </div>
);

export default FlagImage;
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  withHover: PropTypes.bool
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;
`

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;

  ${props => {
    return props.withHover ? 
      `
        &:hover {
          & ${Img} {
            transform: scale(1.05);
          }
        }`
    : null
  }}
`

function Image({ src, alt, withHover, style, ...rest }) {
  return (
    <Wrapper withHover={withHover} style={style}>
      <Img src={src} alt={alt} {...rest} />
    </Wrapper>
  );
}

export default Image;
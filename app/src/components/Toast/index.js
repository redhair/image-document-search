import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 400px;
  padding: 20px;
  width: 100%;
  border-radius: 4px;
  text-align: left;
  box-sizing: border-box;
  font-size: 14px;
  margin: 18px;
  box-shadow: 8px 8px 20px 10px rgba(200, 203, 216, 0.26);
  z-index: 10;
  background: white;
  border-bottom: 4px solid transparent;

  border-color: ${props => {
    switch (props.level) {
      case 'info':
        return `#253c6e`;
      case 'success':
        return `#57c59b`;
      case 'warning':
        return `rgb(255, 235, 148)`;
      case 'danger':
        return `rgb(246, 119, 119)`;
      default:
        return 'lightgrey';
    }
  }};
`;

export default function Toast({ level, children, style }) {
  return (
    <Wrapper level={level} style={style}>
      <span>{children || 'Unknown Error: Try again later.'}</span>
    </Wrapper>
  );
}

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  style: PropTypes.object
};

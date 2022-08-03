import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-image: url('/me.jpg');
    height: 450px;
    background-size: cover;
    position: relative;
    background-position: center;

    @media (min-width:992px) {
      height: 100vh;
      width: 35%;
      position: fixed;
      top:0;
      left:0;
    }


    &:before {
      content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: -moz-radial-gradient(center, ellipse cover, rgba(0, 0, 0, 0.2) 0%, #373b40 90%);
    background: -webkit-radial-gradient(center, ellipse cover, rgba(0, 0, 0, 0.2) 0%, #373b40 90%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.2) 0%, #373b40 90%);
    }
`

export const BannerImage = () => {
  return (
    <Wrapper/>
  )
}

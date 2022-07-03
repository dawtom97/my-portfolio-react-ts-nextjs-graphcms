import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 70px;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & span {
    margin: auto;
    text-transform: uppercase;
  }
`;

const BOUNCE = keyframes`
    from {
        transform: scaleX(1.25);
    } to {
        transform: translateY(-50px) scaleX(1)
    }
`;

export const Ball = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background:linear-gradient(#3f3cfe,#e943d5);
    animation: ${BOUNCE} .5s alternate infinite;
    &:nth-child(2) {
        animation-delay: .16s;
    }
    &:nth-child(3) {
        animation-delay: .32s;
    }
`;
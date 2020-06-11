import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: auto;
  }

  img {
    width: 80px;
    height: 40px;
  }

  > img {
    width: 45px;
    height: 32px;
  }
`;

export const Logos = styled.div`
  width: 50%;
`;

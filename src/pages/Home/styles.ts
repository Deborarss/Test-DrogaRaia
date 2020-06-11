import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

export const Content = styled.section`
  text-align: center;

  h2 span {
    font-weight: 300;
    letter-spacing: -2px;
    line-height: 16px;
  }

  h3 div {
    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  h3 div span {
    width: 15px;
    border-radius: 100%;
    height: 15px;
    display: inline-block;
    margin-bottom: 5px;
  }
`;

export const Info = styled.section`
  max-width: 800px;
  background: #fff;
  margin: 20px 0 0 20px;
  padding: 6px 16px;

  @media screen and (max-width: 480px) {
    max-width: 300px;
  }
`;

export const ModalContent = styled.div`
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

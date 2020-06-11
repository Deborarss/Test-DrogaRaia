import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid #e0e0e0;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    border-bottom: none;
    height: auto;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }

  nav {
    width: 100%;

    @media screen and (max-width: 480px) {
      margin: 20px 0;
    }
  }

  ul {
    display: flex;

    @media screen and (max-width: 480px) {
      flex-direction: column;
    }

    li {
      @media screen and (max-width: 480px) {
        background-color: #9c8cb9;
        padding: 10px 0;

        :hover {
          background-color: #745f9a;
        }
      }
    }

    li a {
      margin-right: 24px;
      color: #007f56;
      font-size: 22px;
      font-weight: 300;
      letter-spacing: -2px;
      line-height: 22px;

      @media screen and (max-width: 480px) {
        color: #fff;
        text-shadow: none;
        height: 40px;
        font-weight: 400;
      }

      :hover {
        color: #fe9380;
        text-decoration: underline;
        text-shadow: none;
        outline: 0;

        @media screen and (max-width: 480px) {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;

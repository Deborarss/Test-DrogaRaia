import styled, { css } from 'styled-components';

interface CardContainerProps {
  type?: string;
}

interface ButtonProps {
  type?: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 360px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  p {
    margin: 0;
    background-color: #fff;
    height: 116px;
    margin-bottom: 0;
    padding: 4px 12px;
    position: relative;
  }
`;

export const CardHeader = styled.div<CardContainerProps>`
  background-color: #fe9481;
  height: 230px;

  ${(props) =>
    props.type === 'tablet' &&
    css`
      background-color: #fcda92;
    `}

  ${(props) =>
    props.type === 'mobile' &&
    css`
      background-color: #9c8cb9;
    `}

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;

    img {
      margin-top: 18px;
    }
  }

  h3 {
    margin: 0;
    text-align: center;
    text-shadow: none;
    color: #fff;

    @media screen and (max-width: 480px) {
      margin-top: 20px;
      font-size: 32px;
    }
  }
`;

export const Button = styled.span<ButtonProps>`
  margin-top: 6px;
  display: block;
  text-align: right;
  background-color: #fe9481;
  position: absolute;
  right: 14px;
  padding: 2px 4px;

  ${(props) =>
    props.type === 'tablet' &&
    css`
      background-color: #fcda92;
    `}

  ${(props) =>
    props.type === 'mobile' &&
    css`
      background-color: #9c8cb9;
    `}

  a {
    color: #fff;
    text-shadow: none;
    font-weight: 400;

    :hover {
      text-decoration: underline;
    }
  }
`;

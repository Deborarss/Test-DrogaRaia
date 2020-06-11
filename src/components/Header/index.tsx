import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logoImg from '../../assets/logo.png';

const Header: React.FC = () => (
  <Container>
    <h1>
      <Link to="/" title="Como Criar um SITE RESPONSIVO com HTML5 e CSS3">
        <img src={logoImg} alt="Raia Drogasil" />
      </Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link to="/">HTML5</Link>
        </li>
        <li>
          <Link to="/">CSS3</Link>
        </li>
        <li>
          <Link to="/">JAVASCRIPT</Link>
        </li>
        <li>
          <Link to="/">REACT</Link>
        </li>
        <li>
          <Link to="/">REDUX</Link>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Header;

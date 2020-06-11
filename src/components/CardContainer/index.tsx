/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

import imgDesktop from '../../assets/desktop-responsive-design.png';
import imgTablet from '../../assets/tablets-responsive-design.png';
import imgMobile from '../../assets/mobile-responsive-design.png';
import { Container, Card, CardHeader, Button } from './styles';

interface MoreInfoProps {
  handleMoreInfo(): void;
  handleModal(): void;
  handleTheme(): void;
}

const CardContainer: React.FC<MoreInfoProps> = ({
  handleMoreInfo,
  handleModal,
  handleTheme,
}) => {
  return (
    <Container>
      <Card>
        <CardHeader type="desktop">
          <figure>
            <img
              src={imgDesktop}
              alt="Criar Site Responsivo para Desktop"
              width={238}
              height={125}
            />
          </figure>
          <h3>Site Responsivo DESKTOP</h3>
        </CardHeader>
        <p>
          Quando pressionado o botão
          <strong> Leia mais...</strong>o restante da informação deverá aparecer
          em scroll down.
          <Button type="desktop">
            <Link to="/" onClick={handleMoreInfo} title="Leia mais...">
              Leia mais...
            </Link>
          </Button>
        </p>
      </Card>

      <Card>
        <CardHeader type="tablet">
          <figure>
            <img
              src={imgTablet}
              alt="Criar Site Responsivo para Tablet"
              width={238}
              height={125}
            />
          </figure>
          <h3>Site Responsivo Tablet</h3>
        </CardHeader>
        <p>
          Quando pressionado o botão
          <strong> Leia mais...</strong>informação deverá aparecer completa em
          um popup na tela.
          <Button type="tablet">
            <Link to="/" onClick={handleModal} title="Leia mais...">
              Leia mais...
            </Link>
          </Button>
        </p>
      </Card>

      <Card>
        <CardHeader type="mobile">
          <figure>
            <img
              src={imgMobile}
              alt="Criar Site Responsivo para Mobile"
              width={238}
              height={125}
            />
          </figure>
          <h3>Site Responsivo Mobile</h3>
        </CardHeader>
        <p>
          Quando pressionado o botão
          <strong> Leia mais...</strong>modifique o tema do site para
          blackfriday a seu gosto.
          <Button type="mobile">
            <Link to="/" onClick={handleTheme} title="Leia mais...">
              Leia mais...
            </Link>
          </Button>
        </p>
      </Card>
    </Container>
  );
};

export default CardContainer;

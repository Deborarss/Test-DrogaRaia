import React from 'react';

import imgDrogaRaia from '../../assets/logo_drogaraia.png';
import imgDrogasil from '../../assets/logo_drogasil.png';
import imgFarmasil from '../../assets/logo_farmasil.png';
import imgUnivers from '../../assets/logo_univers.png';
import img4Bio from '../../assets/logo_4bio.png';
import imgRaiaDrogasil from '../../assets/logo_small.png';
import { Container, Logos } from './styles';

const Footer: React.FC = () => (
  <Container>
    <p>RD 2017. Todos os direitos reservados</p>
    <Logos>
      <img src={imgDrogaRaia} alt="" />
      <img src={imgDrogasil} alt="" />
      <img src={imgFarmasil} alt="" />
      <img src={imgUnivers} alt="" />
      <img src={img4Bio} alt="" />
    </Logos>
    <img src={imgRaiaDrogasil} alt="" />
  </Container>
);

export default Footer;

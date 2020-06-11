/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import * as Scroll from 'react-scroll';

import Header from '../../components/Header';
import Card from '../../components/CardContainer';
import Footer from '../../components/Footer';
import { Container, Content, Info, ModalContent } from './styles';

interface MoreInfoProps {
  handleTheme(): void;
}

const Home: React.FC<MoreInfoProps> = ({ handleTheme }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [showModal, setShowModal] = useState({ open: false });

  const handleSubmitMoreInfo = useCallback(() => {
    if (!moreInfo) {
      setMoreInfo(true);
      Scroll.animateScroll.scrollToBottom();
    } else {
      setMoreInfo(false);
    }
  }, [moreInfo]);

  const handleSubmitModal = useCallback(() => {
    setShowModal({ open: true });
  }, []);

  const onCloseModal = useCallback(() => {
    setShowModal({ open: false });
  }, []);

  const { open } = showModal;
  return (
    <Container>
      <Header />
      <Content>
        <h2>
          <span>Crie este site </span>
          responsivo
          <span> com </span>
          REACT
          <span> utilizando </span>
          styled-components
        </h2>
        <h3>
          A fonte utilizada é a Open Sans de 300 a 800.
          <br />
          exemplo: &quot;Open Sans&quot;, Helvetica, sans-serif, arial;
          <br />
          Já as cores são:
          <br />
          <div>
            <span style={{ background: `#007f56` }} />
            #007f56, <span style={{ background: `#868686` }} />
            #868686, <span style={{ background: `#FE9481` }} />
            #FE9481, <span style={{ background: `#FCDA92` }} />
            #FCDA92 e <span style={{ background: `#9C8CB9` }} />
            #9C8CB9
          </div>
        </h3>
      </Content>
      <Card
        handleMoreInfo={handleSubmitMoreInfo}
        handleModal={handleSubmitModal}
        handleTheme={handleTheme}
      />
      {moreInfo && (
        <Info>
          <h3>Débora Silva - Desenvolvedora Front-End</h3>
          <p>Ser desenvolvedora Front-End é aprender todos os dias!</p>
        </Info>
      )}
      <Modal open={open} onClose={onCloseModal} center>
        <ModalContent>
          <h2>Droga Raia</h2>
          <p>#TodoCuidadoConta</p>
        </ModalContent>
      </Modal>
      <Footer />
    </Container>
  );
};

export default Home;

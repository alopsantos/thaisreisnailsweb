import React from 'react';
import { FaFacebook, FaCalendarAlt, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

import { Container, Content, Footer } from './styles';
import Avatar from '../../assets/avatarimage.jpg';

const Dashboard: React.FC = () => (
  <Container>
    <Content>
      <div>
        <img src={Avatar} alt="Thais Reis Nails - Espaço" />
        <span>@thaisr.espaconails</span>
      </div>

        <ul>
          <li>
            <FaInstagram size={24} />
            <a href="https://www.instagram.com/thaisreis.nails/" title="">
              Me
            </a>
          </li>
          <li>
            <FaCalendarAlt size={24} />
            <a href="http://bit.ly/WAgendar" title="">
              Agendamentos
            </a>
          </li>
          <li>
            <FaFacebook size={24} />
            <a href="https://www.facebook.com/thaisr.espaconails" title="">
              Facebook
            </a>
          </li>
          <li>
            <FaMapMarkerAlt size={24} />
            <a href="https://www.google.com.br/maps/dir//-25.4437278,-54.4028833/@-25.4437629,-54.4029315,21z/data=!4m2!4m1!3e0" title="">
              Localização
            </a>
          </li>
        </ul>
      <Footer>
        <span>By: Anderson Lopes</span>
      </Footer>
    </Content>
  </Container>
);

export default Dashboard;

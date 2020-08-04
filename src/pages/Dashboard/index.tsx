import React, { useState, useEffect } from 'react';
import {
  FaFacebook,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaInstagram,
} from 'react-icons/fa';

import { Container, Content, Footer } from './styles';
import Avatar from '../../assets/avatarimage.jpg';
import api from '../../services/api';

interface IntLinks {
  id: number;
  title: string;
  url: string;
}
interface IntPerfil {
  id: number;
  title: string;
  urlavatar: string;
}
const Dashboard: React.FC = () => {
  const [links, setLinks] = useState<IntLinks[]>([]);
  const [perfils, setPerfil] = useState<IntPerfil[]>([]);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/alopsantos/linksestacaostore/links',
    ).then(response => {
      response.json().then(data => {
        setLinks(data);
      });
    });
    fetch(
      'https://my-json-server.typicode.com/alopsantos/linksestacaostore/perfil',
    ).then(response => {
      response.json().then(data => {
        setPerfil(data);
      });
    });
  }, []);
  return (
    <Container>
      <Content>
        {perfils.map(perfil => (
          <div key={perfil.id}>
            <img src={perfil.urlavatar} alt="Thais Reis Nails - Espaço" />
            <span>{perfil.title}</span>
          </div>
        ))}
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <a href={link.url} target="_blank" title={link.title}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
};

export default Dashboard;

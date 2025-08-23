// Imagens removidas da Home, agora serão usadas em Serviços
import React from 'react';
import styled from 'styled-components';
import { FaMobileAlt, FaTools, FaLightbulb } from 'react-icons/fa';

const ServicesSection = styled.section`
  margin: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  @media (max-width: 600px) {
    margin: 1.2rem 0 1rem 0;
    padding: 0 0.3rem;
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1.1rem;
  }
`;
const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  width: 100%;
  max-width: 1600px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const ServiceCard = styled.div`
  background: none;
  border-radius: 16px;
  box-shadow: none;
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  text-align: left;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 18px 18px 0 0;
  overflow: hidden;
  box-shadow: 0 4px 32px #000a;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ServiceTitle = styled.div`
  font-weight: 900;
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  color: var(--neon);
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
const ServiceText = styled.div`
  font-size: 1.08rem;
  color: #e3f2fd;
  margin-bottom: 0.5rem;
`;
const Button = styled.a`
  margin-top: 2.5rem;
  background: rgba(57,255,20,0.18);
  color: var(--neon);
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.9rem 2.2rem;
  border-radius: 32px;
  box-shadow: 0 0 16px #39ff14cc, 0 0 32px #39ff1488;
  border: 1.5px solid var(--neon);
  text-shadow: 0 0 8px #39ff14cc;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  display: inline-block;
  letter-spacing: 1px;
  width: auto;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
    margin-top: 1.2rem;
  }
  &:hover {
    background: rgba(57,255,20,0.32);
    color: #181C22;
    box-shadow: 0 0 32px #39ff14cc, 0 0 64px #39ff14aa;
  }
`;

export default function MainServices() {
  return (
    <ServicesSection>
  <Title style={{fontSize:'0.8em'}}>Entre em contato com a nossa equipe</Title>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1.5rem',margin:'2rem 0'}}>
  <div style={{fontSize:'1.2rem',color:'#e3f2fd'}}> <a href="https://api.whatsapp.com/send?phone=5519983749703&text=Ol%C3%A1%20CyberForce%2C%20preciso%20de%20um%20or%C3%A7amento!" style={{color:'var(--neon)',fontWeight:700}} target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{height:'1em',verticalAlign:'middle',marginRight:'0.3em'}}/>+55 19 983749703</a></div>
  <div style={{fontSize:'1.2rem',color:'#e3f2fd'}}> <a href="https://api.whatsapp.com/send?phone=5531989313315&text=Ol%C3%A1%20CyberForce%2C%20preciso%20de%20um%20or%C3%A7amento!" style={{color:'var(--neon)',fontWeight:700}} target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{height:'1em',verticalAlign:'middle',marginRight:'0.3em'}}/>+55 31 98931-3315</a></div>
        <div style={{fontSize:'1.1rem',color:'#e3f2fd'}}>E-mail: <a href="mailto:contato@cyberforce.com.br" style={{color:'var(--neon)'}}>cyberforce.sulucoes.inteligentes@gmail.com</a></div>
  <Button href="https://api.whatsapp.com/send?phone=5519983749703&text=Ol%C3%A1%20CyberForce%2C%20preciso%20de%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer">Fale direto no WhatsApp</Button>
      </div>
    </ServicesSection>
  );
}

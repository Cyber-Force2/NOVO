import React from 'react';
import salaled1 from '../assets/salaled1.jpg';
import led2 from '../assets/led2.jpg';
import spotsfitaled4 from '../assets/spotsfitaled4.jpg';
import casaInteligente1 from '../assets/casa inteligente1.jpg';
import jardim1 from '../assets/jardim1.jpg';
import jrdim2 from '../assets/jrdim2.jpg';
import Spots1 from '../assets/Spots1.png';
import spots2 from '../assets/spots2.jpg';
import led1 from '../assets/led1.jpg';

import logoBg from '../assets/cyberforcelogo.png';



const gallery = [
  {
    img: salaled1,
    title: 'Instalação de Iluminação LED',
    desc: 'Projetos de iluminação LED para salas, quartos e ambientes residenciais, com economia e sofisticação.'
  },
  {
    img: led2,
    title: 'Iluminação Decorativa',
    desc: 'Fitas LED, spots e soluções para valorizar a arquitetura e criar ambientes personalizados.'
  },
  {
    img: spotsfitaled4,
    title: 'Spots e Fita LED',
    desc: 'Instalação de spots, trilhos e fitas LED para efeitos modernos e eficientes.'
  },
  {
    img: casaInteligente1,
    title: 'Automação Residencial',
    desc: 'Controle de iluminação, tomadas e dispositivos pelo smartphone ou assistente de voz.'
  },
  {
    img: jardim1,
    title: 'Iluminação de Jardim',
    desc: 'Projetos de iluminação externa para jardins, áreas de lazer e fachadas, valorizando o paisagismo e a segurança.'
  },
  {
    img: jrdim2,
    title: 'Iluminação Externa',
    desc: 'Soluções para áreas externas, corredores e garagens, com instalação de sensores automáticos e luminárias resistentes.'
  },
  {
    img: Spots1,
    title: 'Spots Decorativos',
    desc: 'Instalação de spots decorativos para realçar detalhes arquitetônicos e criar ambientes sofisticados.'
  },
  {
    img: spots2,
    title: 'Spots Direcionáveis',
    desc: 'Spots direcionáveis para iluminação funcional e personalizada em qualquer ambiente da casa.'
  },
  {
    img: led1,
    title: 'LED em Detalhe',
    desc: 'Aplicação de LED em sancas, móveis e detalhes arquitetônicos para criar efeitos de luz modernos e elegantes.'
  },
];

export default function Gallery() {
  return (
    <div
      className="main-content"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'rgba(24,28,34,0.97)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          content: '""',
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: `url(${logoBg}) center center/40% no-repeat fixed`,
          opacity: 0.0375,
          pointerEvents: 'none',
        }}
      />
      {/* Cabeçalho fixo em toda a largura, responsivo, com menu à direita */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: 10,
          background: 'rgba(24,28,34,0.92)',
          boxShadow: '0 2px 16px #0008',
          padding: '0.7rem 2vw 0.7rem 1vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          minWidth: '320px',
          maxWidth: '100vw',
        }}
      >
        <div style={{display:'flex',alignItems:'center',gap:'1.1rem'}}>
          <img src={logoBg} alt="Logo CyberForce" style={{width:'56px',height:'56px',objectFit:'contain',borderRadius:'12px',background:'#fff',boxShadow:'0 2px 8px #0006'}} />
          <div>
            <div style={{fontWeight:700,fontSize:'1.08rem',color:'var(--accent,#39ff14)',fontFamily:'Montserrat,Arial,sans-serif',lineHeight:1.1}}>Instalação e Manutenção<br/>Elétrica Residencial Inteligente</div>
          </div>
        </div>
        <nav style={{display:'flex',justifyContent:'flex-end',gap:'1.2rem',flexWrap:'wrap'}}>
          <a className="cta-button" href="#/">Início</a>
          <a className="cta-button" href="#/servicos">Serviços</a>
          <a className="cta-button" href="#/galeria">Galeria</a>
          <a className="cta-button" href="#/about">Sobre Nós</a>
          {/* <a className="cta-button" href="#/depoimentos">Depoimentos</a> */}
          <a className="cta-button" href="#/contato">Contato</a>
        </nav>
      </div>
      <div className="header-spacer" style={{height:'5.5rem'}} /> {/* Espaço para não sobrepor o conteúdo */}
      <style>{`
        @media (max-width: 700px) {
          .header-spacer {
            height: 7.5rem !important;
          }
        }
      `}</style>
      <h1 className="banner-title" style={{marginBottom:'2rem', color:'#e3f2fd'}}>Galeria de Serviços e Projetos</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',gap:'1rem',width:'100%',maxWidth:'1150px',margin:'0 auto'}}>
        {gallery.map((item, i) => (
          <div className="card" key={i} style={{padding:'0.5rem 0.3rem'}}>
              <img src={item.img} alt={item.title} style={{width:'100%',height:'220px',objectFit:'cover',borderRadius:'14px',marginBottom:'0.4rem',marginTop:'0.5rem'}} />
            <div style={{padding:'0.6rem',display:'flex',flexDirection:'column',gap:'0.4rem'}}>
              <div style={{fontWeight:900,color:'#e3f2fd',fontSize:'1.13rem',marginBottom:'0.2rem'}}>{item.title}</div>
              <div style={{fontSize:'1.01rem',color:'#e3f2fd'}}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

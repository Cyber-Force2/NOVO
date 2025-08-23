import React from 'react';
import logoBg from '../assets/cyberforcelogo.png';

export default function About() {
  return (
    <div className="about-page" style={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #181c22 70%, #23272f 100%)',
      color: '#e3f2fd',
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div
        style={{
          content: '""',
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: `url(${logoBg}) center center/78% no-repeat fixed`,
          opacity: 0.0375,
          pointerEvents: 'none',
        }}
      />
      {/* Cabeçalho fixo igual ao da Home */}
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
          minWidth: '320px',
          maxWidth: '100vw',
        }}
      >
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.1rem',
          flexWrap: 'wrap',
          position: 'relative',
        }}>
          {/* Left: Logo + subtitle */}
          <div style={{display:'flex',alignItems:'center',gap:'1.1rem',minWidth:'260px'}}>
            <img src={logoBg} alt="Logo CyberForce" style={{width:'56px',height:'56px',objectFit:'contain',borderRadius:'12px',background:'#fff',boxShadow:'0 2px 8px #0006'}} />
            <div>
              <div style={{fontWeight:400,fontSize:'0.76rem',color:'var(--accent,#39ff14)',fontFamily:'Montserrat,Arial,sans-serif',lineHeight:1.1}}>Soluções inteligentes<br/>Instalações e manutenções eletricas inteligentes em sua residência</div>
            </div>
          </div>
          {/* Center: CyberForce name with logo background */}
          <div style={{
            flex: '1 1 220px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minWidth: '180px',
            minHeight: '3.5rem',
            height: '100%',
            zIndex: 2,
          }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              width: '100%',
              height: '100%',
              minWidth: '180px',
              minHeight: '3.5rem',
              background: `url(${logoBg}) center center/contain no-repeat`,
              opacity: 0.5,
              zIndex: 0,
              pointerEvents: 'none',
            }} />
            <span className="special-elite-regular" style={{
              fontSize: '2.5rem',
              color: '#39ff14',
              letterSpacing: '0.02em',
              fontWeight: 400,
              fontStyle: 'normal',
              background: 'rgba(24,28,34,0.85)',
              borderRadius: '12px',
              padding: '0.2em 1.2em',
              zIndex: 1,
              position: 'relative',
              boxShadow: '0 2px 8px #0006',
              minWidth: '180px',
              textAlign: 'center',
              width: 'fit-content',
              height: '100%'
            }}>CyberForce</span>
          </div>
          {/* Right: Menu */}
          <nav style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:'1.2rem',flexWrap:'wrap',minWidth:'220px'}}>
            <a className="cta-button" href="#/">Início</a>
            <a className="cta-button" href="#/servicos">Serviços</a>
            <a className="cta-button" href="#/galeria">Galeria</a>
            <a className="cta-button" href="#/about">Sobre Nós</a>
            {/* <a className="cta-button" href="#/depoimentos">Depoimentos</a> */}
            <a className="cta-button" href="#/contato">Contato</a>
          </nav>
        </div>
      </div>
      <div className="header-spacer" style={{height:'5.5rem'}} /> {/* Espaço para não sobrepor o conteúdo */}
      <style>{`
        @media (max-width: 700px) {
          .header-spacer {
            height: 9rem !important;
            margin-bottom: 9rem !important;
          }
        }
      `}</style>
      {/* Conteúdo institucional */}
      <div style={{
        maxWidth: 800,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        background: 'rgba(24,28,34,0.92)',
        borderRadius: 18,
        boxShadow: '0 4px 24px #0008',
        padding: '2.5rem 2rem',
        marginTop: '2rem',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `url(${logoBg}) center center/60% no-repeat`,
          opacity: 0.07,
          zIndex: 0,
          pointerEvents: 'none',
        }} />
        <h1 className="special-elite-regular" style={{color: '#39ff14', fontSize: '2.2rem', marginBottom: '1.2rem', textAlign: 'center'}}>Sobre Nós</h1>
        <p style={{fontSize: '1.13rem', lineHeight: 1.7, marginBottom: '1.5rem'}}>
          A <span className="special-elite-regular" style={{color:'#39ff14',fontWeight:700}}>CyberForce</span> nasceu da paixão por tecnologia, inovação e segurança. Somos especialistas em soluções elétricas residenciais inteligentes, automação, iluminação decorativa e manutenção, sempre buscando excelência, eficiência e atendimento personalizado.
        </p>
        <p style={{fontSize: '1.13rem', lineHeight: 1.7, marginBottom: '1.5rem'}}>
          Nossa equipe é formada por profissionais experientes, comprometidos com a qualidade e a satisfação do cliente. Atuamos em todas as etapas: do projeto à execução, com transparência, responsabilidade e foco em resultados duradouros.
        </p>
        <p style={{fontSize: '1.13rem', lineHeight: 1.7, marginBottom: '1.5rem'}}>
          <b>Missão:</b> Levar tecnologia, conforto e segurança para o seu lar, com soluções sob medida e atendimento próximo.
        </p>
        <p style={{fontSize: '1.13rem', lineHeight: 1.7, marginBottom: '1.5rem'}}>
          <b>Visão:</b> Ser referência em instalações elétricas inteligentes e automação residencial, reconhecida pela inovação e confiança.
        </p>
        <p style={{fontSize: '1.13rem', lineHeight: 1.7}}>
          <b>Valores:</b> Ética, respeito, inovação, qualidade e compromisso com o cliente.
        </p>
      </div>
    </div>
  );
}

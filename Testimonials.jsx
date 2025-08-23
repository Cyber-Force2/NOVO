// Arquivo removido: página de depoimentos não faz mais parte do projeto.
import React from 'react';

export default function Testimonials() {
  return (
    <div className="main-content">
      <nav style={{display:'flex',justifyContent:'center',gap:'1.2rem',marginBottom:'2.2rem',flexWrap:'wrap'}}>
        <a className="cta-button" href="#/">Início</a>
        <a className="cta-button" href="#/servicos">Serviços</a>
        <a className="cta-button" href="#/galeria">Galeria</a>
        <a className="cta-button" href="#/depoimentos">Depoimentos</a>
        <a className="cta-button" href="#/contato">Contato</a>
      </nav>
      <h1 className="banner-title" style={{marginBottom:'2rem'}}>Depoimentos</h1>
      <p style={{fontSize:'1.15rem',color:'#e3f2fd',textAlign:'center',maxWidth:'600px',margin:'0 auto 2.5rem auto'}}>Veja o que nossos clientes dizem.</p>
      {/* Aqui você pode adicionar cards de depoimentos futuramente */}
    </div>
  );
}

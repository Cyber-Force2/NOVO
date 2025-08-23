import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

import logoBg from '../assets/cyberforcelogo.png';


export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', solucao: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setEnviado(false);
    try {
      const res = await fetch('https://api.sheetmonkey.io/form/oiH4WZVietcDaZy6Stpj3j', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setEnviado(true);
        setForm({ nome: '', email: '', telefone: '', solucao: '', mensagem: '' });
      } else {
        setErro('Erro ao enviar. Tente novamente.');
      }
    } catch {
      setErro('Erro ao enviar. Tente novamente.');
    }
  };

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
          opacity: 0.09,
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
      <div style={{height:'5.5rem'}} /> {/* Espaço para não sobrepor o conteúdo */}
      <div style={{width:'100%',maxWidth:'700px',margin:'3rem auto',padding:'2.5rem 1.5rem',background:'rgba(24,28,34,0.95)',borderRadius:'28px',boxShadow:'0 2px 32px #39ff1422',position:'relative',overflow:'hidden',minHeight:'700px',zIndex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
  <h1 className="banner-title special-elite-regular" style={{fontSize:'2.5rem',marginBottom:'2.2rem', fontFamily: 'Special Elite, system-ui'}}>Contato</h1>
        <div style={{marginBottom:'2.2rem',fontSize:'1.08rem',color:'#e3f2fd',background:'rgba(24,28,34,0.80)',borderRadius:'12px',padding:'1.2rem',boxShadow:'0 0 12px #39ff1422',display:'flex',flexDirection:'column',gap:'0.7rem',alignItems:'center'}}>
          <div><b>Entre em contato conosco:</b></div>
          <div><b>WhatsApp:</b> <a href="https://api.whatsapp.com/send?phone=5519983749703&text=Ol%C3%A1%20CyberForce%2C%20preciso%20de%20um%20or%C3%A7amento!" style={{color:'#39ff14'}} target="_blank" rel="noopener noreferrer">+55 19 98374-9703</a></div>
          <div><b>WhatsApp:</b> <a href="https://api.whatsapp.com/send?phone=5531989313315&text=Ol%C3%A1%20CyberForce%2C%20preciso%20de%20um%20or%C3%A7amento!" style={{color:'#39ff14'}} target="_blank" rel="noopener noreferrer">+55 31 98931-3315</a></div>
          <div><b>E-mail:</b> <a href="mailto:cyberforce.sulucoes.inteligentes@gmail.com" style={{color:'#39ff14'}}>cyberforce.sulucoes.inteligentes@gmail.com</a></div>
        </div>
  <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1.1rem',width:'100%',maxWidth:'420px',margin:'0 auto'}}>
          <input type="text" placeholder="Nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} style={{padding:'0.8rem 1.1rem',borderRadius:'12px',border:'2px solid var(--neon)',background:'rgba(57,255,20,0.09)',fontSize:'1.08rem',color:'#fff',marginBottom:'0.2rem',boxShadow:'0 0 8px #39ff14cc',transition:'border 0.2s, box-shadow 0.2s',zIndex:1,position:'relative'}} />
          <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{padding:'0.8rem 1.1rem',borderRadius:'12px',border:'2px solid var(--neon)',background:'rgba(57,255,20,0.09)',fontSize:'1.08rem',color:'#fff',marginBottom:'0.2rem',boxShadow:'0 0 8px #39ff14cc',transition:'border 0.2s, box-shadow 0.2s',zIndex:1,position:'relative'}} />
          <input type="tel" placeholder="Telefone" value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} style={{padding:'0.8rem 1.1rem',borderRadius:'12px',border:'2px solid var(--neon)',background:'rgba(57,255,20,0.09)',fontSize:'1.08rem',color:'#fff',marginBottom:'0.2rem',boxShadow:'0 0 8px #39ff14cc',transition:'border 0.2s, box-shadow 0.2s',zIndex:1,position:'relative'}} />
          <select value={form.solucao} onChange={e => setForm({ ...form, solucao: e.target.value })} style={{padding:'0.8rem 1.1rem',borderRadius:'12px',border:'2px solid var(--neon)',background:'rgba(57,255,20,0.09)',fontSize:'1.08rem',color:'#fff',marginBottom:'0.2rem',boxShadow:'0 0 8px #39ff14cc',transition:'border 0.2s, box-shadow 0.2s',zIndex:1,position:'relative'}}>
            <option value="">Selecione uma solução</option>
            <option value="consultoria">Consultoria</option>
            <option value="treinamento">Treinamento</option>
            <option value="outro">Outro</option>
          </select>
          <textarea placeholder="Mensagem" value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} style={{padding:'0.8rem 1.1rem',borderRadius:'12px',border:'2px solid var(--neon)',background:'rgba(57,255,20,0.09)',fontSize:'1.08rem',color:'#fff',minHeight:'80px',marginBottom:'0.2rem',boxShadow:'0 0 8px #39ff14cc',transition:'border 0.2s, box-shadow 0.2s',zIndex:1,position:'relative'}} />
          <button type="submit" className="cta-button" style={{fontWeight:900,fontSize:'1.18rem',padding:'1.1rem 2.5rem',borderRadius:'32px',border:'none',boxShadow:'0 0 18px #39ff14cc, 0 0 32px #39ff1488',textShadow:'0 0 8px #39ff14cc',transition:'background 0.2s, color 0.2s, box-shadow 0.2s',cursor:'pointer',letterSpacing:'1.2px',marginTop:'0.7rem'}}>Enviar</button>
          {enviado && <div style={{color:'#39ff14',marginTop:'1rem',fontWeight:700}}>Mensagem enviada com sucesso!</div>}
          {erro && <div style={{color:'#ff5252',marginTop:'1rem',fontWeight:700}}>{erro}</div>}
  </form>
        <div style={{display:'flex',gap:'1.5rem',justifyContent:'center',marginTop:'2rem'}}>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" style={{color:'var(--blue)',fontSize:'2rem',transition:'color 0.2s'}}><FaWhatsapp /></a>
          <a href="https://instagram.com/cyberforce" target="_blank" rel="noopener noreferrer" style={{color:'var(--blue)',fontSize:'2rem',transition:'color 0.2s'}}><FaInstagram /></a>
          <a href="https://facebook.com/cyberforce" target="_blank" rel="noopener noreferrer" style={{color:'var(--blue)',fontSize:'2rem',transition:'color 0.2s'}}><FaFacebook /></a>
        </div>
      </div>
    </div>
  );
}

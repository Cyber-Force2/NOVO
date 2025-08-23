import logoBg from '../assets/cyberforcelogo.png';

import instalacaoEletrica from '../assets/instalação eletrica residencial.jpg';
import iluminacaoInteligente from '../assets/Iluminação inteligente.jpg';
import manutencaoDiagnostico from '../assets/manutenção1.jpg';
import inteligente from '../assets/inteligente.jpg';


const topics = [
  {
    icon: '⚡',
    title: 'Instalações Elétricas Residenciais',
    desc: [
      'Instalação de tomadas convencionais e USB',
      'Instalação de chuveiros elétricos e duchas higiênicas',
      'Montagem e substituição de quadros de distribuição',
      'Instalação de interruptores simples e paralelos',
      'Instalação de ventiladores de teto (convencionais e smart)',
      'Instalação de circuitos dedicados para eletrodomésticos 10A e 20A',
      'Instalação de sensores de presença e movimento',
      'instalação e mudança de pontos de tomada 110v e 220v',
    ],
    img: instalacaoEletrica,
  },
  {
    icon: '💡',
    title: 'Projetos de obra e pós obra',
    desc: [
      'Projeto de iluminação inteligente com automação',
      'Iluminação decorativa de interiores (fitas de LED, spots, sancas)',
      'Iluminação decorativa de exteriores (jardins, fachadas, piscinas)',
      'Iluminação cênica para home theaters e áreas gourmet',
      'Planejamento de circuitos para economia de energia',
      'Projeto de distribuição elétrica para reformas e construções',
      'Integração com assistentes virtuais (Alexa, Google Home)',
    ],
    img: iluminacaoInteligente,
  },
  {
    icon: '🔧',
    title: 'Manutenções',
    desc: [
      'Manutenção elétrica preventiva (inspeção periódica)',
      'Manutenção preditiva com uso de sensores e análise térmica',
      'Reparo de curto-circuitos e sobrecargas',
      'Identificação e correção de fuga de energia',
      'Substituição de fiação antiga ou danificada',
      'Atualização de disjuntores e componentes do quadro',
      'Balanceamento de carga entre circuitos',
      'Testes de aterramento e proteção contra surtos',
    ],
    img: manutencaoDiagnostico,
  },
  {
    icon: '🤖',
    title: 'Projetos de Automação Residencial',
    desc: [
      'Projetos de automação, integração de sistemas e controle inteligente para sua casa.',
      'Configuração de assistentes virtuais e dispositivos smart.',
      'Monitoramento remoto e soluções personalizadas.',
    ],
    img: inteligente,
  },
];

export default function Services() {
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
  <h1 className="banner-title" style={{marginBottom:'2rem', color:'#e3f2fd'}}>Serviços e Soluções</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',gap:'1rem',width:'100%',maxWidth:'1150px',margin:'0 auto'}}>
        {topics.map(topic => (
          <div className="card" key={topic.title}>
            <img src={topic.img} alt={topic.title} style={{width:'100%',height:'220px',objectFit:'cover',borderRadius:'22px',marginBottom: topic.img === manutencaoDiagnostico ? '3rem' : '0.4rem',marginTop:'0',background:'transparent'}} />
            <div style={{padding:'0.6rem',display:'flex',flexDirection:'column',gap:'0.4rem',background:'transparent', color:'#e3f2fd'}}>
              <h2 style={{fontSize:'1.3rem',color:'#e3f2fd',fontFamily:'Montserrat,Arial,sans-serif',fontWeight:700,marginBottom:'0.2rem'}}>{topic.icon} {topic.title}</h2>
              <div style={{fontSize:'1.03rem',color:'#e3f2fd',marginBottom:'0.4rem'}}>
                <ul style={{paddingLeft:'1.1rem'}}>
                  {topic.desc.map((d, i) => <li key={i} style={{marginBottom:'0.3rem', color:'#e3f2fd'}}>{d}</li>)}
                </ul>
              </div>
              <button className="cta-button" style={{marginTop:'0.3rem',marginBottom:'0.3rem'}} onClick={()=>window.open('https://wa.me/5519983749703?text=Olá! Gostaria de solicitar um orçamento para '+topic.title,'_blank')}>Solicitar orçamento</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

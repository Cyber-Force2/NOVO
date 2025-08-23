
import img1 from '../assets/5.jpg';
import img2 from '../assets/6.jpg';
import img3 from '../assets/2.jpg';
import img4 from '../assets/11.jpg';
import img5 from '../assets/7.jpg';
import img6 from '../assets/10.jpg';


const cards = [
  { img: img6, title: 'Troca de Fiação', desc: 'Substituição de fios antigos para garantir segurança e eficiência.' },
  { img: img2, title: 'Quadro de Distribuição', desc: 'Montagem e manutenção de quadros elétricos residenciais.' },
  { img: img1, title: 'Disjuntores', desc: 'Instalação e troca de disjuntores para proteção dos circuitos.' },
  { img: img3, title: 'Tomadas e Interruptores', desc: 'Instalação e manutenção de tomadas e interruptores.' },
  { img: img5, title: 'Iluminação', desc: 'Projetos e instalação de iluminação eficiente e decorativa.' },
  { img: img4, title: 'Aterramento', desc: 'Execução de aterramento para proteção contra choques e surtos.' },
];

export default function CentralImages() {
  return (
    <div
      className="central-images-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2.5rem auto',
        maxWidth: '1200px',
        width: '100%',
        padding: '0 1rem',
      }}
    >
      {cards.map((card, idx) => (
        <div key={idx} style={{
          background: 'rgba(24,28,34,0.92)',
          borderRadius: '16px',
          boxShadow: '0 2px 16px #39ff1422',
          padding: '1.2rem',
          textAlign: 'center',
          color: '#e3f2fd',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '220px',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <img src={card.img} alt={card.title} style={{width:'100%',maxWidth:'180px',height:'120px',objectFit:'cover',borderRadius:'12px',boxShadow:'0 2px 12px #0005',marginBottom:'1rem'}} />
          <div style={{fontWeight:700,fontSize:'1.1rem',marginBottom:'0.5rem',color:'#39ff14'}}>{card.title}</div>
          <div style={{fontSize:'1rem'}}>{card.desc}</div>
        </div>
      ))}
      <style>{`
        @media (max-width: 1100px) {
          .central-images-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 700px) {
          .central-images-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}

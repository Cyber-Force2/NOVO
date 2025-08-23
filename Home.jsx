import CentralImages from '../components/CentralImages';
import Differentials from '../components/Differentials';
import MainServices from '../components/MainServices';
// import HomeTestimonial from '../components/HomeTestimonial';
import logoBg from '../assets/cyberforcelogo.png';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

export default function Home() {
  return (
    <div>
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
            background: `url(${logoBg}) center center/78% no-repeat fixed`,
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
                        <img 
                          src={logoBg} 
                          alt="Logo CyberForce" 
                          style={{
                            width:'86px',
                            height:'86px',
                            objectFit:'contain',
                            borderRadius:'8px',
                            background:'transparent',
                            opacity: 1,
                            boxShadow:'0 0 16px 4px #39ff14, 0 0 32px 8px #39ff1466',
                            filter:'drop-shadow(0 0 8px #39ff14) drop-shadow(0 0 16px #39ff14AA)'
                          }} 
                        />
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
                  <div className="main-content-flex" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: '2.5rem',
                    flexWrap: 'nowrap',
                    width: '100%',
                    margin: '0 auto 2.5rem auto',
                    maxWidth: '1700px',
                  }}>
                    <CentralImages />
                    <div style={{
                      flex: '0 1 294px',
                      minWidth: '196px',
                      maxWidth: '294px',
                      background: 'rgba(24,28,34,0.85)',
                      borderRadius: '18px',
                      boxShadow: '0 2px 16px #0006',
                      padding: '2.2rem 1.5rem',
                      color: '#e3f2fd',
                      fontSize: '1.13rem',
                      fontWeight: 500,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      marginTop: 0,
                    }}>
                      <div style={{fontSize:'18px',fontWeight:900,color:'#39ff14',marginBottom:'0.7rem',fontFamily:'"Special Elite", Montserrat, Arial, sans-serif',letterSpacing:'1.5px'}}>CyberForce</div>
                      <div className="banner-subtitle" style={{fontSize:'1.13rem',color:'#e3f2fd',fontWeight:500,lineHeight:1.5}}>
                        Especialistas em automação, iluminação decorativa, manutenções e Instalações elétricas para todo tipo de residências, sempre buscando soluções práticas e eficientes<br />
                        sob medida para sua residência, com tecnologia, economia e máxima segurança.
                      </div>
                      <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',marginTop:'1.5rem',gap:'0.7rem'}}>
                        <img src={img1} alt="Imagem 1" style={{width:'100%',maxWidth:'340px',borderRadius:'10px',boxShadow:'0 2px 12px #0005'}} />
                        <img src={img2} alt="Imagem 2" style={{width:'100%',maxWidth:'340px',borderRadius:'10px',boxShadow:'0 2px 12px #0005'}} />
                        <img src={img3} alt="Imagem 3" style={{width:'100%',maxWidth:'340px',borderRadius:'10px',boxShadow:'0 2px 12px #0005'}} />
                        <img src={img4} alt="Imagem 4" style={{width:'100%',maxWidth:'340px',borderRadius:'10px',boxShadow:'0 2px 12px #0005'}} />
                      </div>
                    </div>
                  </div>
                  <style>{`
                    @media (max-width: 1200px) {
                      .main-content-flex {
                        flex-direction: column !important;
                        align-items: center !important;
                        flex-wrap: wrap !important;
                      }
                    }
                  `}</style>
                  <Differentials />
                  <MainServices />
                  {/* <HomeTestimonial /> */}
                </div>
              </div>
            );
          }

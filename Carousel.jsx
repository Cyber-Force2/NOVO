import React, { useState } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
// import img5 from '../assets/5.jpg'; // Não existe 5.jpg, carrossel será com 4 imagens

const images = [img1, img2, img3, img4];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 420, margin: '0 auto', textAlign: 'center' }}>
      <img
        src={images[current]}
        alt={`Carrossel ${current + 1}`}
        style={{ width: '100%', maxWidth: 420, height: 260, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 16px #0006' }}
      />
      <button onClick={prev} style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', background: '#23272fcc', color: '#39ff14', border: 'none', borderRadius: '50%', width: 36, height: 36, fontSize: 22, cursor: 'pointer' }}>&lt;</button>
      <button onClick={next} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: '#23272fcc', color: '#39ff14', border: 'none', borderRadius: '50%', width: 36, height: 36, fontSize: 22, cursor: 'pointer' }}>&gt;</button>
      <div style={{ marginTop: 8 }}>
        {images.map((_, idx) => (
          <span key={idx} style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: idx === current ? '#39ff14' : '#888', margin: '0 3px' }} />
        ))}
      </div>
    </div>
  );
}

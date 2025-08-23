import React from 'react';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';

import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function getPage() {
  const hash = window.location.hash.replace('#/', '');
  switch (hash) {
    case 'servicos':
      return <Services />;
    case 'galeria':
      return <Gallery />;
    case 'about':
      return <About />;
    case 'depoimentos':
      return <Testimonials />;
    case 'contato':
      return <Contact />;
    default:
      return <Home />;
  }
}

export default function App() {
  const [page, setPage] = React.useState(getPage());
  React.useEffect(() => {
    const onHashChange = () => {
      console.log('Hash mudou para:', window.location.hash);
      setPage(getPage());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return <SiteLayout>{page}</SiteLayout>;
}

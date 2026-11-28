import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import InfiniteMenu from './InfiniteMenu.jsx';
import './InfiniteMenu.css';

const toItems = projects => (Array.isArray(projects) ? projects : []).map((project, index) => ({
  title: project.title || `AXIS Project ${index + 1}`,
  description: project.desc || project.cat || 'A project by AXIS Digital Engineering.',
  image: project.img || '',
  link: project.link || ''
}));

function ArchiveMenu(){
  const [items, setItems] = useState(() => toItems(window.__latestProjects || []));
  const [count, setCount] = useState(() => matchMedia('(max-width:680px)').matches ? 48 : 96);

  useEffect(() => {
    const update = event => setItems(toItems(event.detail));
    const resize = () => setCount(matchMedia('(max-width:680px)').matches ? 48 : 96);
    document.addEventListener('projects-updated', update);
    window.addEventListener('resize', resize, { passive:true });
    return () => {
      document.removeEventListener('projects-updated', update);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <InfiniteMenu
    items={items}
    count={count}
    tileSize={0.72}
    roundness={0.18}
    zoom={1.55}
    pullBack={0.7}
    stretch={0.35}
    inertia={0.58}
    autoplay={0}
    grayscale={false}
    dim={0.18}
    intro={false}
    theme="dark"
    className="axis-project-menu"
    style={{ width:'100%', height:'100%' }}
  />;
}

const container = document.getElementById('projectArchive3d');
if(container){
  createRoot(container).render(<ArchiveMenu />);
  window.__axisArchiveMounted = true;
}

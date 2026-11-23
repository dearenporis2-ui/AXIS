import React from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './Lanyard.jsx';
import './Lanyard.css';

const roots = new WeakMap();

export function mount(container, props = {}) {
  const previous = roots.get(container);
  if (previous) previous.unmount();

  const root = createRoot(container);
  roots.set(container, root);
  root.render(
    <Lanyard
      frontImage="assets/axis-lanyard-front.svg"
      backImage="assets/axis-lanyard-back.svg"
      imageFit="cover"
      orientation="portrait"
      finish="holographic"
      cardColor="#10131a"
      cornerRadius={0.28}
      size={0.49}
      anchor="center"
      anchorTarget={() => window.__axisLanyardPageAnchor || null}
      strapLength={0.48}
      strapColor="#b8a98a"
      strapWidth={0.7}
      metal="graphite"
      gravity={1.05}
      damping={0.36}
      elasticity={0.42}
      breeze={0.08}
      interactive
      intro
      {...props}
      style={{ width:'100%', height:'100%', ...(props.style || {}) }}
    />
  );

  return () => {
    root.unmount();
    roots.delete(container);
  };
}

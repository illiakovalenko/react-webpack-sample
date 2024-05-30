import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { a, b } from './num';

declare const GLOBAL_WEBPACK_VALUE: string;

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

console.log('Global variable', GLOBAL_WEBPACK_VALUE)

const domNode = document.getElementById('root');

if (!domNode) throw new Error('Root element is required to be added to the DOM');

const root = createRoot(domNode);

root.render(<App num={a + b} />);
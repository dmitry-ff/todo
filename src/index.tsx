import { css, Global } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
// const root = createRoot(container);

const root = createRoot(document.getElementById('root')!);
root.render(
  <>
    <Global styles={css`
    *{
      box-sizing:border-box;
      font-family:'Roboto',sans-serif
    }
  `}

    />
    <App />
  </>
)
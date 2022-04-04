import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
// const root = createRoot(container);

const root = createRoot(document.getElementById('root')!);
root.render(<App />)
import { createRoot } from 'react-dom/client';
import Contact from './authorizationForm';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<Contact />);
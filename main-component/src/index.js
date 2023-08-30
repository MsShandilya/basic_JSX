import { createRoot } from 'react-dom/client';
import ProfilePage from './ProfilePage';


const container = document.getElementById('root');

const root = createRoot(container);
root.render(<ProfilePage />);

/*

import Contact from './authorizationForm';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<Contact />);

*/

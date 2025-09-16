import { createRoot } from 'react-dom/client';
import App from "./App"

const isDarkMode = false

const root = createRoot(document.getElementById('root'))
root.render(
    <App darkMode={isDarkMode}/>
);
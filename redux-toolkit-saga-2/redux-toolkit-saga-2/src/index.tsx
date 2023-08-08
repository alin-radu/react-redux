import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store/store';

import './index.css';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(app);

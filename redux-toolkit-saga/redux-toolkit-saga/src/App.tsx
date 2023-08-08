import { Posts } from './features/posts/components/Posts/Posts';
import { Auth } from './features/auth/components/Auth/Auth';

import './App.css';

function App() {
  return (
    <div className="App">
      <br />
      <Posts />
      <br />
      <Auth />
    </div>
  );
}

export default App;

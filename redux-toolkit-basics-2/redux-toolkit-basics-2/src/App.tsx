import './App.css';

import { CakeView } from './components/Cake/Cake'
import { IcecreamView } from './components/Icecream/Icecream'
import { UserView } from './components/User/User'

function App() {
  return (
    <div className='App'>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App;

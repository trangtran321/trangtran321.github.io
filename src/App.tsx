import './App.css';
import { Provider } from "./components/ui/provider"
import HomePage from './components/Homepage';

function App(){
  return (
    <Provider>
      <HomePage/>
    </Provider>
    
  )
}
export default App;


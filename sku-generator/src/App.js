import { useState } from 'react';
import './App.css';

const App = () => {

  const [skuList, setSkuList] = useState([]);

  const generateNewSku = () => {
    const lengthOfSku = 9999;
    const newSku = Math.floor(Math.random() * lengthOfSku);
    console.log(newSku);
  }

  generateNewSku();

  return (
    <div className="App">
    </div>
  );
}

export default App;

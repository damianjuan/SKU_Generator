import { useState } from 'react';
import './App.css';

const App = () => {

  const [skuList, setSkuList] = useState([]);

  //generate sku based on desired length and save to state. will change to take input for length of sku desired
  const generateNewSku = () => {
    const lengthOfSku = 9999;
    const newSku = Math.floor(Math.random() * lengthOfSku);
    console.log(newSku);
    setSkuList(newSku);
  }

  generateNewSku();
  console.log(skuList);
  return (
    <div className="App">
    </div>
  );
}

export default App;

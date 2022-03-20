import { useState, useEffect } from 'react';
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

  const checkForExsistingSku = () => {
    //chech generated sku against those stored in state if in state already generate another sku
  };

  //only run function once on page load
  useEffect(() => {
    generateNewSku();
  }, []);


  console.log(skuList);
  return (
    <div className="App">
      <button onClick={generateNewSku}>generate new sku</button>
    </div>
  );
}

export default App;

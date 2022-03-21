import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [skuList, setSkuList] = useState([]);
  // moved from generateNewFunction to global scope so can check newSku against those already saved/used
  let newSku;
  let lengthOfSku;

  //generate sku based on desired length and save to state. will change to take input for length of sku desired
  const generateNewSku = () => {
    lengthOfSku = 9999;
    newSku = Math.floor(Math.random() * lengthOfSku);
    //console.log(newSku);
    setSkuList([...skuList, newSku]);
  }

  //check generated sku against those stored in state if in state already generate another sku
  const checkForExsistingSku = () => {
    if ()
  };

  //only run function once on page load
  //dont need to run on page load anymore
  //useEffect(() => {
  //   generateNewSku();
  //  }, []);


  console.log(skuList);
  return (
    <div className="App">
      <button onClick={generateNewSku}>generate new sku</button>
    </div>
  );
}

export default App;

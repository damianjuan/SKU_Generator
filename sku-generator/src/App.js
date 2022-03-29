import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
//import './App.css';

const App = () => {

  const [skuList, setSkuList] = useState([]);
  // moved from generateNewFunction to global scope so can check newSku against those already saved/used
  let newSku;
  let lengthOfSku;

  //generate sku based on desired length and save to state. will change to take input for length of sku desired
  const generateNewSku = () => {
    console.log('generateNewSku running')
    lengthOfSku = 9999;
    newSku = Math.floor(Math.random() * lengthOfSku);
    checkForExsistingSku();
    //console.log(newSku);
    // moving to checkForExsistingSku temporarily 
    // setSkuList([...skuList, newSku]);
  }

  //check generated sku against those stored in state if in state already generate another sku
  const checkForExsistingSku = () => {
    console.log("generateNewSku function running");
    skuList.includes(newSku) ? generateNewSku() : setSkuList([...skuList, newSku]);
  };

  //only run function once on page load
  //dont need to run on page load anymore
  //useEffect(() => {
  //   generateNewSku();
  //  }, []);


  console.log(skuList);
  return (
    <div className="App">
      {/* <button>show my saved SKUs</button> */}
      <Button variant="contained" onClick={generateNewSku}>New SKU</Button>
      <h1>New SKU: {newSku}</h1>
      <h2>SKUs:</h2>
      {skuList.map((sku) => (
        <h3>{sku}</h3>
      ))}
    </div>
  );
}

export default App;

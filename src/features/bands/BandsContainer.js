import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice"

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities)
  const dispatch = useDispatch();

  function handleBandSubmit(name){
    dispatch(bandAdded(name))
  }

  const displayBands = bands.map((band) => <li key={band}>{band}</li>)

  return (
    <div>
      BandsContainer
      <BandInput onBandSubmit={handleBandSubmit}/>
      <ul>
        {displayBands}
      </ul>
    </div>
  );
}

export default BandsContainer;

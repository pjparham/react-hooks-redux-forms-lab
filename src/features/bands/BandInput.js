import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("")

  function onSubmit(e){
    e.preventDefault()
    onBandSubmit(name)
    setName("")
  }

  return (
    <div>
      <h1>Band Input</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" value={name} name="name" label="name"onChange={(e) => setName(e.target.value)}/>
        </label>

        <button type="submit">add band</button>
      </form>
    </div>
  );
}

export default BandInput;

import { useState, createContext } from "react";

function MainPage() {

  
  const [nationName, setNationName] = useState('')
// ? need to fix here

  const NationContext = createContext(nationName)
  
  
  function handleName() {

  }
// !TRYING to put context
  return ( 
    <div className="main-page">
      <form action="submit" >
        <label htmlFor="">
          Insert the nation you are looking for:
          <input 
          type="text" 
          value={nationName}
          onChange={e => setNationName(e.target.value)}
          />
        </label> 
        <button onClick={handleName}>GO!</button>
      </form>
    </div>
   );
}

export default MainPage;
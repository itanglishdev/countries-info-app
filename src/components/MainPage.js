
function MainPage({nameChange}) {

  
  
  return ( 
    <div className="main-page">
      <h2>Welcome to get info from nation</h2>
      <p>Insert the name of the nation you want information from. We have a data base of over 200 nations you can pick from</p>
      <div className="main-page__form">
      <form action="submit" >
        <label htmlFor="">
          Insert the nation you are looking for: 
          <br />
          <input 
          type="text" 
          onChange={nameChange}
          />
        </label> 
        <button >GO!</button>
      </form>
      </div>
    </div>
   );
}

export default MainPage;
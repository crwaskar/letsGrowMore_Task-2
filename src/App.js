import logo from './logo.svg';
import './App.css';
import React  , {useState} from "react" ;


const App = () =>{

  const [users , setUsers] = useState([]);

  const loadUsers = async () => {
    console.log("before")
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await
    response.json();
    setUsers(jsonresponse);
  };

  return(
    <div className='App'>
      <h1 >Lets Grow More Task -2 </h1>
      <button onClick={loadUsers} className='getdata'>Get data</button>

      <h2>Users : 😎</h2>
      <br />
      <h2>Names :😉</h2>
      <ul>
        {users.map(({id,login,avatar_url})=> (
          <li key={id} className='name'>Name: {login} </li>
        )
        )}
          <h2>Urls :🔗</h2>
        {users.map(({id,avatar_url})=> (
          <li key={id} className='avatar'>Avatar: {avatar_url} </li>
        )
        )}
      </ul>
    </div>
  )
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => createUser(data))

    
    console.log('loging from Effect', user);
  }, [])

  function createUser(data) {
    // let allUser = [];
    data.map(singleUser => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(img => {
          const singleInfo = {
            id: singleUser.id,
            name: singleUser.name,
            email: singleUser.email,
            img: img.message,
          }
          // allUser = [...allUser, singleInfo];
          // setUser(allUser);
          const newUser = [...user, singleInfo]
          setUser(newUser);
          
          console.log(user);
        })
    })

  }
  return (
    <div className="App">
      <h1>Total user: {user.length}</h1>
      {
        console.log('final', user)
      }
    </div>
  );
}

export default App;


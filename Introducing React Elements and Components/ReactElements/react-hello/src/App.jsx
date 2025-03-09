import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const user = {
  name: "John",
  surname: "Doe",
  date_of_birth: "1990-01-01",
  address: "123 Main St",
  country: "USA",
  email: "john.doe@example.com",
  telephone: "123-456-7890",
  company: "Example Inc.",
  profile_picture: "https://example.com/profile.jpg",
  shopping_cart: []
};



function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="App">
    <header className="App-header">
      <img src={reactLogo} className="App-logo" alt="logo" />
      <p>Hello React!</p>
      <p>
      <div className="user-profile"></div>
        <img src={user.profile_picture} alt="Profile" className="profile-picture" />
        <h2>{user.name} {user.surname}</h2>
        <p>Date of Birth: {user.date_of_birth}</p>
        <p>Address: {user.address}</p>
        <p>Country: {user.country}</p>
        <p>Email: {user.email}</p>
        <p>Telephone: {user.telephone}</p>
        <p>Company: {user.company}</p>
      </p>
    </header>
  </div>
  )
}

export default App

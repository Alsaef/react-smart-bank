import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import BankDashboard from './components/BankDashboard'

function App() {
  const [user, setUser] = useState(false)

  console.log(user);
  return (
   <div>
  {!user&&  <Login setUser={setUser}></Login>}
  {user&&<BankDashboard user={user} setUser={setUser}></BankDashboard>}
   </div>
  )
}

export default App

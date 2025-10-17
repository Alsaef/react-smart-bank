import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import BankDashboard from './components/BankDashboard'

function App() {
  const [user, setUser] = useState(false)
  return (
   <div>
  {!user&&  <Login setUser={setUser}></Login>}
  {user&&<BankDashboard user={user} setUser={setUser}></BankDashboard>}
   </div>
  )
}

export default App

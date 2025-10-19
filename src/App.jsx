import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import BankDashboard from './components/BankDashboard'

function App() {
  const [user, setUser] = useState(true)
  return (
   <div>
  {user&&<BankDashboard user={user} setUser={setUser}></BankDashboard>}
   </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import BankDashboard from './components/BankDashboard'
import AgentPage from './components/AgentDashboard'

function App() {
  const [user, setUser] = useState(true)
  const [ammount,setAmmount]=useState(12000)
  return (
   <div>
  {user&&<BankDashboard user={user} setUser={setUser} ammount={ammount}></BankDashboard>}
  {!user&&<AgentPage ammount={ammount}></AgentPage>}
   </div>
  )
}

export default App

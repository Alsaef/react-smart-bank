import { useState } from "react";
import { FaHistory, FaMoneyBillWave } from "react-icons/fa";
import AgentToggleComponent from "./AgentToggleComponent";
import CashIn from "./CashIn";         
import RequestMoney from "./RequestMoney"; 
import { Link } from "react-router-dom";
import Header from "./Header";

const AgentDashboard = ({user,setUser,ammount}) => {
    // Default action for agent is 'cashin'
    const [toggle, setToggle] = useState("cashin"); 

    

    return (
        <div className="min-h-screen bg-base-200 rounded-2xl">
            
           <Header user={user} ammount={ammount}></Header>

            
            {/* Using the new AgentToggleComponent */}
            <AgentToggleComponent toggle={toggle} setToggle={setToggle}></AgentToggleComponent>
           
            {/* Conditional Rendering for CashIn */}
            {toggle === "cashin" && (
              <CashIn ></CashIn>
            )}

            
            {/* Conditional Rendering for RequestMoney */}
            {toggle === "requestmoney" && (
               <RequestMoney   ></RequestMoney>
            )}
        </div>
    );
};

export default AgentDashboard;
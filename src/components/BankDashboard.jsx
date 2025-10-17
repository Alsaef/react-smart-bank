import { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import ToggleComponent from "./ToggleComponent";
import CashIn from "./CashIn";
import CashOut from "./CashOut";

const BankDashboard = ({user,setUser}) => {
    const [toggle, setToggle] = useState("cashin");

    const [ammount,setAmmount]=useState(12000)

    return (
        <div className="min-h-screen bg-base-200 rounded-2xl">
            
            <header className="navbar bg-primary text-white shadow-lg px-6">
                <div className="flex-1">
                    <FaMoneyBillWave className="text-2xl mr-2" />
                    <span className="text-xl font-semibold">Smart Bank</span>
                </div>
                <div className="flex-none">
                    <div className="mr-4 text-lg font-medium">
                        Balance: <span className="font-bold">৳{ammount}</span>
                    </div>
                    {
                        user&& <button onClick={()=>setUser(false)} className="btn btn-outline btn-accent text-white mt-5">
                      Logout
                    </button>
                    }
                </div>
            </header>

            

            <ToggleComponent toggle={toggle} setToggle={setToggle}></ToggleComponent>
           
            {toggle === "cashin" && (
              <CashIn setAmmount={setAmmount}></CashIn>
            )}

            
            {toggle === "cashout" && (
               <CashOut ammount={ammount} setAmmount={setAmmount} ></CashOut>
            )}
        </div>
    );
};

export default BankDashboard;

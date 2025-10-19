import { useState } from "react";
import { FaHistory, FaMoneyBillWave } from "react-icons/fa";
import ToggleComponent from "./ToggleComponent";
import SendMoney from "./SendMoney";
import CashOut from "./CashOut";
import { Link } from "react-router-dom";

const BankDashboard = ({user,setUser}) => {
    const [toggle, setToggle] = useState("sendmoney");

    const [ammount,setAmmount]=useState(12000)

    return (
        <div className="min-h-screen bg-base-200 rounded-2xl">
            
            <header className="navbar bg-primary text-white shadow-lg px-6">
      <div className="flex-1">
        <FaMoneyBillWave className="text-2xl mr-2" />
        <span className="text-xl font-semibold">Smart Bank</span>
      </div>

      <div className="flex-none flex flex-col items-end space-y-2">
        {/* Transaction History */}
        <Link
          to="/transaction-history"
          className="flex items-center gap-2 text-sm hover:text-accent transition"
        >
          <FaHistory className="text-lg" />
          <span>Transaction History</span>
        </Link>

        {/* Balance */}
        <div className="text-lg font-medium">
          Balance: <span className="font-bold">৳{ammount}</span>
        </div>

        {/* Logout */}
        {user && (
          <button
            onClick={() => setUser(false)}
            className="btn btn-outline btn-accent text-white btn-sm"
          >
            Logout
          </button>
        )}
      </div>
    </header>

            

            <ToggleComponent toggle={toggle} setToggle={setToggle}></ToggleComponent>
           
            {toggle === "sendmoney" && (
              <SendMoney setAmmount={setAmmount}></SendMoney>
            )}

            
            {toggle === "cashout" && (
               <CashOut ammount={ammount} setAmmount={setAmmount} ></CashOut>
            )}
        </div>
    );
};

export default BankDashboard;

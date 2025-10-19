import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ToggleComponent = ({setToggle,toggle}) => {
    return (
        <div>
             <div className="flex justify-center mt-10">
        <div className="join">
          <button
            onClick={() => setToggle("sendmoney")}
            className={`join-item btn ${toggle === "sendmoney" ? "btn-primary text-white" : "btn-outline"}`}
          >
            <FaArrowDown className="mr-2" /> Send Money
          </button>
          <button
            onClick={() => setToggle("cashout")}
            className={`join-item btn ${toggle === "cashout" ? "btn-primary text-white" : "btn-outline"}`}
          >
            <FaArrowUp className="mr-2" /> Cash Out
          </button>
        </div>
      </div>
        </div>
    );
};

export default ToggleComponent;
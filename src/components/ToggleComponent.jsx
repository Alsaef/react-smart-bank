import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ToggleComponent = ({setToggle,toggle}) => {
    return (
        <div>
             <div className="flex justify-center mt-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setToggle("sendmoney")}
            className={`btn btn-wide shadow-xl flex-1 ${toggle === 'sendmoney' ? 'btn-primary' : 'btn-neutral'} w-full px-8 py-4`}
          >
            <FaArrowDown className="w-5 h-5 mr-1" /> Send Money
          </button>
          <button
            onClick={() => setToggle("cashout")}
            className={`btn btn-wide shadow-xl flex-1 ${toggle === 'cashout' ? 'btn-primary' : 'btn-neutral'} px-8 py-4 w-full`}
          >
            <FaArrowUp className="w-5 h-5 mr-1" /> Cash Out
          </button>
        </div>
      </div>
        </div>
    );
};

export default ToggleComponent;
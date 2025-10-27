import React from 'react';
import { FaArrowDown, FaArrowUp, FaRegCreditCard, FaRegMoneyBillAlt } from 'react-icons/fa';

const AgentToggleComponent = ({setToggle,toggle}) => {
    return (
        <div>
             <div className="flex justify-center mt-10">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setToggle("cashin")}
                        // Cash In uses 'btn-primary' style
                        className={`btn btn-wide shadow-xl flex-1 ${toggle === 'cashin' ? 'btn-primary' : 'btn-neutral'} w-full px-8 py-4`}
                    >
                        <FaRegMoneyBillAlt className="w-5 h-5 mr-1" /> Cash In
                    </button>
                    <button
                        onClick={() => setToggle("requestmoney")}
                        // Request Money uses a different style for distinction
                        className={`btn btn-wide shadow-xl flex-1 ${toggle === 'requestmoney' ? 'btn-success text-white' : 'btn-neutral'} px-8 py-4 w-full`}
                    >
                        <FaRegCreditCard className="w-5 h-5 mr-1" /> Request Money
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgentToggleComponent;
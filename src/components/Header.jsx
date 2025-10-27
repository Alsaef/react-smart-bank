import React from 'react';
import { FaHistory, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({user,ammount}) => {
    return (
        <div>
         <header className="navbar bg-primary text-white shadow-lg px-6">
                <div className="flex-1">
                    <FaMoneyBillWave className="text-2xl mr-2" />
                    {/* Agent Portal Title */}
                    <span className="text-xl font-semibold">Smart Bank | {user===true?'Personal Account':'Agent Account'}</span> 
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

                    {/* Agent Balance */}
                    <div className="text-lg font-medium">
                        Agent Balance: <span className="font-bold">৳{ammount}</span>
                    </div>

                    {/* Logout */}
                    
                    <button
                        
                        className="btn btn-outline btn-accent text-white btn-sm"
                    >
                        Logout
                    </button>
                    
                </div>
            </header>
        </div>
    );
};

export default Header;
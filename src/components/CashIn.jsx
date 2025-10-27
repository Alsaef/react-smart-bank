import React from 'react';

const CashIn = ({setAmmount}) => {
    const handleCashIn = (e) => {
        e.preventDefault();
        
    };

    return (
        <div className="flex justify-center mt-8 p-4">
            <div className="card w-full max-w-md bg-white shadow-2xl">
                <div className="card-body p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700 border-b pb-3">
                        Cash In (Load Customer Account)
                    </h2>

                    <form onSubmit={handleCashIn}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Customer Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Customer Mobile Number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Cash In Amount"
                                className="input input-bordered w-full"
                                required
                            />
                           
                        </div>

                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text">Agent PIN</span>
                            </label>
                            <input
                                type="password"
                                placeholder="****"
                                className="input input-bordered w-full"
                                maxLength="4"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary btn-lg shadow-lg w-full">
                                Confirm Cash In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CashIn;
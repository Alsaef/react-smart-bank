import React from 'react';

const RequestMoney = ({ammount, setAmmount}) => {
    const handleRequest = (e) => {
        e.preventDefault();
        
    };

    return (
        <div className="flex justify-center mt-8 p-4">
            <div className="card w-full max-w-md bg-white shadow-2xl">
                <div className="card-body p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700 border-b pb-3">
                        Request Float Money
                    </h2>

                    <form onSubmit={handleRequest}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Distributor Account Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Distributor Account"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Request Amount</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Amount to Request (e.g., 50000)"
                                className="input input-bordered w-full"
                                required
                            />
                            <label className="label pt-1">
                                <span className="label-text-alt text-info">* Request limit based on agent tier</span>
                            </label>
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
                            <button type="submit" className="btn btn-success btn-lg shadow-lg w-full">
                                Send Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestMoney;
import React from 'react';

const CashOut = () => {
    return (
        <div>
           <div className="flex justify-center mt-10">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-primary">Cash Out</h2>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Enter Amount</span>
                                </div>
                                <input type="number" placeholder="৳ amount" className="input input-bordered" />
                            </label>
                            <label className="form-control mt-4">
                                <div className="label">
                                    <span className="label-text">Enter PIN</span>
                                </div>
                                <input type="password" placeholder="****" className="input input-bordered" />
                            </label>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-error w-full text-white">Confirm Cash Out</button>
                            </div>
                        </div>
                    </div>
                </div>  
        </div>
    );
};

export default CashOut;
import React from 'react';

const CashIn = ({setAmmount }) => {
    const handelCashIn = (event) => {
        event.preventDefault();

        const ammouninput = Number(event.target.ammouninput.value);

        const pin = event.target.pin.value;

        if (pin !== '1234') {
            alert('invalid pin')
            return
        }
        setAmmount(prev => prev + ammouninput)

        event.target.reset()
    }
    return (
        <div>
            <div className="flex justify-center mt-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <form onSubmit={handelCashIn} className="card-body">
                        <h2 className="card-title text-primary">Cash In</h2>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Enter Amount</span>
                            </div>
                            <input type="number" name='ammouninput' placeholder="৳ amount" className="input input-bordered" />
                        </label>
                        <label className="form-control mt-4">
                            <div className="label">
                                <span className="label-text">Enter PIN</span>
                            </div>
                            <input name='pin' type="password" placeholder="****" className="input input-bordered" />
                        </label>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary w-full">Confirm Cash In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CashIn;
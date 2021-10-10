import React from 'react';
let userId = JSON.parse(window.sessionStorage.getItem("userInfo"))

const Immuniztion = () => {

    // const handleUserChange = (e) => {
        
    //   };

    return (
            <div className="container">
                <div className="card shadow-lg p-10 mb-6 bg-white rounded">
                    <div className="card-header">Immunization Details</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="covid_vaccine">COVID-19 Vaccine</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="covid_vaccine"
                                    placeholder="Please Enter Covid Vaccine Details"
                                    // onChange={handleUserChange}
                                />
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="general_vaccine">Other general Vaccines</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Please Enter General Vaccine Details"
                                    name="general_vaccine"
                                    // onChange={handleUserChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mt-3"
                                // onClick={submitUserData}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>  
    )
}

export default Immuniztion ;

import React from "react";
import ReactPlayer from "react-player";

const Patient_Education = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header text-center ">Education Center</div>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-4">
                  <h6>Excercise Tips</h6>
                  <ReactPlayer
                    className="vdo_size"
                    url="https://www.youtube.com/watch?v=YjmQVMLhNT4"
                    controls={true}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <h6>Diabetes Diet Tips</h6>
                  <ReactPlayer
                    className="vdo_size"
                    url="https://www.youtube.com/watch?v=AM5MgWN5C8c"
                    controls={true}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <h6>Women Health Tips</h6>
                  <ReactPlayer
                    className="vdo_size"
                    url="https://www.youtube.com/watch?v=E4EaRk6r_SM"
                    controls={true}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <h6>Women Health Tips</h6>
                  <ReactPlayer
                    className="vdo_size"
                    url="https://www.youtube.com/watch?v=agPsqRDNS3g"
                    controls={true}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <h6>Covid 19 Health Tips</h6>
                  <ReactPlayer
                    className="vdo_size"
                    url="https://www.youtube.com/watch?v=9DYaBzFPbcs"
                    controls={true}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <h6>Heart Health Tips</h6>
                  <ReactPlayer
                    className="vdo_size"
                    url="https://www.youtube.com/watch?v=4egM_a_nmKk"
                    controls={true}
                  />
                </div>
                <div className="col-12 mt-5">
                  <h3 className="text-center pb-3">Blogs For Health Tips</h3>

                  <p>
                    <a href=" https://www.health.harvard.edu/blog">
                      Harvard Health Blog
                    </a>
                  </p>
                  <p>
                    <a href="https://artofhealthyliving.com/healthy-gut-how-to-manage-and-improve-your-gut-health/">
                      Manage And Improve Your GUT Health
                    </a>
                  </p>
                  <p>
                    <a href="https://nutritionstripped.com/articles/">
                      Nutrition Stripped
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient_Education;

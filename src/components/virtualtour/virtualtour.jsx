function Virtualtour() {
  return (
    <>
      <section className="mt-5">
        <div className="section section-lg pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8 text-center mb-3">
                <h1 className="display-2 font-weight-bold">
                  <span>Virtual Tour FMIPA</span>
                </h1>
                <h3 className="display-3 font-weight-bold">
                  <span>Select Building</span>
                </h3>
                <p className="lead">Choose one of the buildings in the Faculty of Mathematics and Natural Sciences, Tanjungpura university to start the extraordinary experience of the virtual tour</p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <div className="card bg-primary border-light shadow-soft">
                  <img src="/assets/img/baru.jpg" className="card-img-top rounded-top"></img>
                  <div className="card-body">
                    <h3 className="card-title mt-2">FMIPA UNTAN Gedung Baru</h3>
                    <p style={{ textAlign: "center" }} className="display-5 shadow-inset rounded">
                      V1.0 august 2022
                    </p>
                    <a href="/gbrvirtualtour/index.html" className="btn btn-primary btn-block text-success font-weight-bold">
                      Start
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <div className="card bg-primary border-light shadow-soft">
                  <img src="/assets/img/lama.png" className="card-img-top rounded-top"></img>
                  <div className="card-body">
                    <h3 className="h3 card-title mt-2">FMIPA UNTAN Gedung Lama</h3>
                    <p style={{ textAlign: "center" }} className="display-5 shadow-inset rounded">
                      V1.0 august 2022
                    </p>
                    <a href="/glmvirtualtour/index.html" className="btn btn-primary btn-block text-success font-weight-bold">
                      Start
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <div className="card bg-primary border-light shadow-soft">
                  <img src="/assets/img/biotek.png" className="card-img-top rounded-top"></img>
                  <div className="card-body">
                    <h3 className="h3 card-title mt-2">FMIPA UNTAN Gedung Biotek</h3>
                    <p style={{ textAlign: "center" }} className="display-5 shadow-inset rounded">
                      V1.0 august 2022
                    </p>
                    <a href="biovirtualtour/index.html" className="btn btn-primary btn-block text-success font-weight-bold">
                      Start
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <div className="card bg-primary border-light shadow-soft">
                  <img src="/assets/img/siskom.png" className="card-img-top rounded-top"></img>
                  <div className="card-body">
                    <h3 className="h3 card-title mt-2">FMIPA UNTAN Gedung Siskom</h3>
                    <p style={{ textAlign: "center" }} className="display-5 shadow-inset rounded">
                      V1.0 august 2022
                    </p>
                    <a href="sisvirtualtour/index.html" className="btn btn-primary btn-block text-success font-weight-bold">
                      Start
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 col-lg-12 mb-5">
              <div className="card bg-primary shadow-soft border-light p-2 p-md-3 p-lg-5">
                <div className="card-header">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center mb-5">
                      <h1 className="display-2 mb-3">
                        <span className="font-weight-bold">Button Hint</span>
                      </h1>
                      <p className="lead">help you understand the function of each button that will be presented in your virtual tour.</p>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-4 col-lg-4 text-center">
                      <div className="icon-box mb-4">
                        <div className="icon icon-shape shadow-inset border-light rounded-circle mb-4">
                          <img src="/assets/img/infospot.png" width="60"></img>
                        </div>
                        <h2 className="h5 icon-box-title">Detail</h2>
                        <span>Room name details</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 text-center">
                      <div className="icon-box mb-4">
                        <div className="icon icon-shape shadow-inset border-light rounded-circle mb-4">
                          <img src="/assets/img/cirle1.png" width="60"></img>
                        </div>
                        <h2 className="h5 icon-box-title">Point</h2>
                        <span>Current location details</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 text-center">
                      <div className="icon-box mb-4">
                        <div className="icon icon-shape shadow-inset border-light rounded-circle mb-4">
                          <img src="/assets/img/arrow.png" width="60"></img>
                        </div>
                        <h2 className="h5 icon-box-title">Next</h2>
                        <span>switch scenes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Virtualtour;

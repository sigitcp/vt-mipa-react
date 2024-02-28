function Footer() {
  return (
    <>
      <footer className="d-flex pb-5 pt-6  border-top border-light bg-primary">
        <div className="container">
          <div className="row">
            <div className="col">
              <a
                href="https://themesberg.com"
                target="_blank"
                className="d-flex justify-content-center"
              >
                <img
                  src="./assets/img/brand/favicon.png"
                  height="25"
                  className="mb-3"
                  alt="Themesberg Logo"
                ></img>
              </a>
              <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo"
              >
                <p className="font-weight-normal font-small mb-0">
                  Copyright © SISTEM INFORMASI FMIPA UNTAN
                  <span className="current-year">2022</span>. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

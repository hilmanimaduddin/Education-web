import Footer from "../../public/component/footer/footer";
import Navbar from "../../public/component/nav/navbar";

export default function Program() {
  return (
    <>
      <Navbar />
      <div>
        <div className="container my-5">
          <h2 className="text-center mb-4">Program Kami</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <img
                  src="./img/hutan1.jpeg"
                  className="card-img-top"
                  alt="Hutan 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Program 1</h5>
                  <p className="card-text">Deskripsi program 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img
                  src="./img/hutan2.jpeg"
                  className="card-img-top"
                  alt="Hutan 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Program 2</h5>
                  <p className="card-text">Deskripsi program 2.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img
                  src="./img/hutan3.jpeg"
                  className="card-img-top"
                  alt="Hutan 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Program 3</h5>
                  <p className="card-text">Deskripsi program 3.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Footer from "../../public/component/footer/footer";
import Navbar from "../../public/component/nav/navbar";

export default function AboutMe() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Tentang Kami</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <img src="./img/team.jpg" className="img-fluid" alt="Tim Kami" />
          </div>
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              commodo odio a nisi consequat, vel dapibus nulla sagittis. Donec
              et feugiat leo. Donec nec arcu turpis. In hac habitasse platea
              dictumst. Phasellus gravida justo vel leo scelerisque vehicula.
              Nam at felis sit amet metus dignissim pretium. Suspendisse
              venenatis metus at nibh efficitur facilisis. Donec et condimentum
              dui, non malesuada metus. Phasellus fringilla libero vel eros
              tincidunt, et venenatis nisi vehicula. Suspendisse potenti.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Team Kami</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src="./img/septian.jpg"
                className="card-img-top"
                alt="Hutan 1"
              />
              <div className="card-body">
                <h5 className="card-title">SEPTIAN AL RIZKI </h5>
                <p className="card-text">
                  Bertanggung Jawab di Frontend, Menggunakan Framework Bootstrap
                </p>
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

      <Footer />
    </>
  );
}

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
              Kami adalah organisasi nirlaba yang berdedikasi untuk melindungi
              hutan dan edukasi masyarakat tentang pentingnya menjaga ekosistem
              ini. Melalui berbagai program edukasi dan konservasi, kami
              berusaha untuk meningkatkan kesadaran dan partisipasi dalam
              menjaga kelestarian hutan.
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
                className="card-img-top image-card"
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
                className="card-img-top image-card"
                alt="Hutan 2"
              />
              <div className="card-body">
                <h5 className="card-title">Program 2</h5>
                <p className="card-text">Deskripsi program 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card ">
              <img
                src="https://res.cloudinary.com/dlcgwbdtv/image/upload/v1722671208/image-profil.jpg"
                className="card-img-top image-card"
                alt="Hutan 3"
              />
              <div className="card-body">
                <h5 className="card-title">Hilman Imaduddin</h5>
                <p className="card-text">Bagian Frontend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

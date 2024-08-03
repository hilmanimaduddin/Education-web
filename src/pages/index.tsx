import React from "react";
import Navbar from "../../public/component/nav/navbar";
import Footer from "../../public/component/footer/footer";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Flora Eksotis</h3>
              <p>
                Hutan adalah rumah bagi berbagai tanaman eksotis yang tidak
                ditemukan di tempat lain.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Keajaiban Hutan Hujan Tropis</h3>
              <p>Jelajahi keindahan hutan hujan tropis yang mempesona.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/3.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Hutan Hujan yang Lestari</h3>
              <p>Pemandangan hutan hujan yang kaya akan flora dan fauna.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="container my-5">
          <div className="card text-center">
            <div className="card-header bg-transparent border-0">
              <p className="motto mb-0">Restore Forest, Restore Life</p>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6 mb-3">
              <img
                src="./img/team.jpg"
                className="img-fluid rounded"
                alt="Gambar"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-primary">Menjaga Kehidupan Hutan</h2>
              <p>
                Selamat datang di situs edukasi kami! Di sini, Anda akan
                menemukan informasi penting tentang hutan, ekosistemnya, dan
                bagaimana kita bisa menjaga kelestariannya. Hutan adalah
                paru-paru bumi dan rumah bagi jutaan spesies. Mari kita pelajari
                lebih dalam tentang peran hutan dalam kehidupan kita.
              </p>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6 order-md-2 mb-3">
              <img
                src="./img/team.jpg"
                className="img-fluid rounded"
                alt="Gambar"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <h2 className="text-primary">Hutan</h2>
              <p>
                Hutan adalah ekosistem alami yang terdiri dari kumpulan pohon,
                tumbuhan, hewan, dan organisme lainnya yang hidup dalam suatu
                area tertentu. Hutan memiliki peran penting dalam menjaga
                keseimbangan lingkungan dan menyediakan berbagai manfaat bagi
                kehidupan manusia dan ekosistem secara keseluruhan.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="text-center text-primary mb-4">Aksi Kami</h2>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/MpeHuqn4D2M?si=-gn943aZPMBiViBC"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;

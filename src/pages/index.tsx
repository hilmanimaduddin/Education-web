import React from "react";
import Navbar from "../../public/component/nav/navbar";
import Footer from "../../public/component/footer/footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./img/1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./img/2.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./img/3.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

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
              <h2 className="text-primary">Judul Teks</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
              <h2 className="text-primary">Judul Teks</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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

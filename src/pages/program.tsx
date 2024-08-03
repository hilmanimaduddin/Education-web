import Footer from "../../public/component/footer/footer";
import Navbar from "../../public/component/nav/navbar";
import data from "../../public/component/json/program.json";

export default function Program() {
  return (
    <>
      <Navbar />
      <div>
        <div className="container my-5">
          <h2 className="text-center mb-4">Program Kami</h2>
          <div className="row justify-content-center">
            {data.map((item) => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import React, { useState } from "react";
import Navbar from "../../public/component/nav/navbar";
import Footer from "../../public/component/footer/footer";

const UsulanForm = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Rahmat",
      usulan: "Reboisasi Hutan",
    },
    {
      id: 2,
      nama: "Rizki",
      usulan: "Edukasi Lingkungan",
    },
  ]);
  const [nama, setNama] = useState("");
  const [usulan, setUsulan] = useState("");

  const handleAddData = () => {
    const newData = {
      id: Date.now(),
      nama,
      usulan,
    };

    setData([...data, newData]);
    setNama("");
    setUsulan("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleAddData();
  };

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <h2 className="mb-4 text-center">Daftar Usulan</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Usulan</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.nama}</td>
                <td>{item.usulan}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mt-4 mb-4 text-center">Form Input Usulan</h2>

        <form
          onSubmit={handleSubmit}
          className="col-md-6 offset-md-3 gap-3 d-flex flex-column"
        >
          <div className="form-group">
            <label htmlFor="nama">Nama:</label>
            <input
              type="text"
              className="form-control"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="usulan">Usulan:</label>
            <textarea
              className="form-control"
              id="usulan"
              value={usulan}
              onChange={(e) => setUsulan(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UsulanForm;

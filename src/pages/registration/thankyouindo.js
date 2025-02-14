import { useLocation } from "react-router-dom";

function ThankYouIndo() {
  const { state } = useLocation();

  return (
    <section className="thankyou">
      <div>
        <h1>Terima Kasih telah mendaftar!</h1>
        <p>
          Kami menghargai partisipasi Anda dan menantikan keterlibatan Anda.
        </p>

        <table className="thankyou-table">
          <tbody>
            <tr>
              <td><strong>Anggota Tim</strong></td>
              <td>{state?.namaLengkap}</td>
            </tr>
            <tr>
              <td><strong>Nama Sekolah</strong></td>
              <td>{state?.namasekolah}</td>
            </tr>
            <tr>
              <td><strong>Judul Proyek</strong></td>
              <td>{state?.projectTitle}</td>
            </tr>
            <tr>
              <td><strong>Kategori Kompetisi</strong></td>
              <td>{state?.category}</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>*Jika data muncul, tangkap layar halaman ini sebagai bukti pendaftaran berhasil</strong>
        </p>

        <a href="/homeregist" className="btn btn-action">
          Kembali ke menu pendaftaran
        </a>
      </div>
    </section>
  );
}

export default ThankYouIndo;

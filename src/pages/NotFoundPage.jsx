import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section__eyebrow">404</p>
        <h1>Halaman tidak ditemukan</h1>
        <p className="section__lead">Alamat yang dibuka belum tersedia di portofolio ini.</p>
        <Link className="button button--primary" to="/">
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;

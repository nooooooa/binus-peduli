import Image from "next/image";

export default function Home() {
  return (
      <main className="login-page">

      <div className="login-card">

        <div className="logo-area">
          <h1>Nama</h1>
          <p>Reporting System</p>
        </div>

        <div className="form-area">

          <input
            type="text"
            placeholder="Email / Username"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Login
          </button>

        </div>

      </div>

    </main>
  );
}
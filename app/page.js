"use client";

import { useState } from "react";

export default function Home() {

  const [page, setPage] = useState("login");

  return (
    <>

      {/* NAVBAR */}
      <div className="nav">

        <div
          className="nav-brand"
          onClick={() => setPage("login")}
        >
          <div className="nav-logo">
            B
          </div>

          <div className="nav-title">
            Binus <span>Peduli</span>
          </div>
        </div>

        {/* NAV LINKS */}
        {page !== "login" && (
          <div className="nav-links">

            <button
              className={`nav-link ${
                page === "dashboard" ? "act" : ""
              }`}
              onClick={() => setPage("dashboard")}
            >
              Dashboard
            </button>

            <button
              className={`nav-link ${
                page === "track" ? "act" : ""
              }`}
              onClick={() => setPage("track")}
            >
              Lacak Tiket
            </button>

          </div>
        )}

      </div>

      {/* LOGIN PAGE */}
      {page === "login" && (

        <div className="login-wrap">

          {/* LEFT */}
          <div className="login-left">

            <div className="ll-brand">

              <div className="ll-logo">
                B
              </div>

              <div className="ll-name">

                <div className="binus">
                  BINUS UNIVERSITY
                </div>

                <div className="peduli">
                  Peduli
                </div>

              </div>

            </div>

            <div className="ll-tagline">
              Ruang aman untuk bicara tanpa takut.
            </div>

            <div className="ll-desc">
              Platform pelaporan kekerasan seksual
              yang aman dan terenkripsi.
            </div>

          </div>

          {/* RIGHT */}
          <div className="login-right">

            <div className="lcard">

              <div className="lcard-badge">
                Platform Aman
              </div>

              <h1>
                Masuk ke Binus Peduli
              </h1>

              <div className="lcard-sub">
                Gunakan akun BINUS Maya.
              </div>

              {/* INPUT */}
              <div className="field">

                <label className="flbl">
                  NIM / Email
                </label>

                <input
                  className="finp"
                  type="text"
                  placeholder="2602xxxxxx"
                />

              </div>

              <div className="field">

                <label className="flbl">
                  Password
                </label>

                <input
                  className="finp"
                  type="password"
                  placeholder="Password"
                />

              </div>

              {/* BUTTON */}
              <button
                className="btn-main"
                onClick={() => setPage("dashboard")}
              >
                Masuk ke Dashboard
              </button>

            </div>

          </div>

        </div>
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (

        <div className="dash">

          <div className="dash-header">

            <h2>
              Selamat datang, Daniel
            </h2>

            <p>
              Berikut ringkasan aktivitas laporan Anda.
            </p>

          </div>

          <div className="stats">

            <div className="stat-card">
              <div className="stat-label">
                Total Laporan
              </div>

              <div className="stat-val">
                3
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-label">
                Sedang Diproses
              </div>

              <div className="stat-val">
                1
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-label">
                Selesai
              </div>

              <div className="stat-val">
                2
              </div>
            </div>

          </div>

          {/* QUICK ACCESS */}
          <div className="panel">

            <h3>
              Akses Cepat
            </h3>

            <div className="quick-btns">

              <div
                className="qbtn"
                onClick={() => setPage("track")}
              >

                <div>
                  <div className="qbtn-title">
                    Lacak Status Laporan
                  </div>

                  <div className="qbtn-sub">
                    Gunakan Ticket ID
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* TRACK PAGE */}
      {page === "track" && (

        <div className="track-pg">

          <h2>
            Lacak Status Laporan
          </h2>

          <div className="sub">
            Masukkan Ticket ID laporan.
          </div>

          <div className="track-result">

            <div className="tr-header">

              <div>

                <div className="tr-ticket-num">
                  BPD-2025-001
                </div>

                <div className="tr-date">
                  Dilaporkan: 12 Maret 2025
                </div>

              </div>

            </div>

            <div className="tr-timeline">

              <div className="tl-item">

                <div className="tl-dot done">
                </div>

                <div>

                  <div className="tl-title">
                    Laporan diterima
                  </div>

                  <div className="tl-sub">
                    Laporan masuk ke sistem
                  </div>

                </div>

              </div>

              <div className="tl-item">

                <div className="tl-dot active">
                </div>

                <div>

                  <div className="tl-title">
                    Investigasi berjalan
                  </div>

                  <div className="tl-sub">
                    Tim sedang memproses laporan
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </>
  );
}
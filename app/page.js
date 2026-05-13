'use client';

import { useState } from "react";
import Image from "next/image";

export default function BinusPeduliSoftBlue() {
  const [currentPage, setCurrentPage] = useState('login');
  const [activeTab, setActiveTab] = useState('nim');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showTrackResult, setShowTrackResult] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const goPage = (page) => {
    setCurrentPage(page);
    setIsLoggedIn(page !== 'login');
  };

  const doLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const togglePassword = () => {
    const input = document.getElementById('lpwd');
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  };

  const showTrack = () => {
    document.getElementById('tresult').style.display = 'block';
  };
  
  const st = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <div className="nav">
        <div className="nav-brand" onClick={() => goPage('login')}>
          <div className="nav-logo"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><circle cx="12" cy="8" r="5"/><path d="M3 21v-1a9 9 0 0118 0v1"/></svg></div>
          <div className="nav-title">Binus <span>Peduli</span></div>
        </div>
        {isLoggedIn && (
          <div className="nav-links">
            <button className={`nav-link ${currentPage === 'dashboard' ? 'act' : ''}`} onClick={() => goPage('dashboard')}>Dashboard</button>
            <button className="nav-link" onClick={() => goPage('lapor')}>Buat Laporan</button>
            <button className="nav-link" onClick={() => goPage('track')}>Lacak Tiket</button>
          </div>
        )}
        <div className="nav-right">
          {!isLoggedIn ? (
            <>
              <button className="btn-sm btn-outline" onClick={() => goPage('login')}>Masuk</button>
              <button className="btn-sm btn-fill" onClick={() => goPage('lapor')}>Lapor Sekarang</button>
            </>
          ) : (
            <>
              <div className="notif-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
                <div className="notif-dot"></div>
              </div>
              <div className="avatar">DP</div>
            </>
          )}
        </div>
      </div>

      {/* LOGIN */}
      <div className={`page ${currentPage === 'login' ? 'show' : ''}`} id="pg-login">
        <div className="login-wrap">
          <div className="login-left">
            <div className="ll-brand">
              <div className="ll-logo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="5"/><path d="M3 21v-1a9 9 0 0118 0v1"/></svg></div>
              <div className="ll-name"><div className="binus">BINUS UNIVERSITY</div><div className="peduli">Peduli</div></div>
            </div>
            <div className="ll-tagline">Ruang aman untuk bicara tanpa takut.</div>
            <div className="ll-desc">Platform pelaporan kekerasan seksual yang dirancang dengan privasi dan keamanan psikologis sebagai prioritas utama.</div>
            <div className="ll-pills">
              <div className="ll-pill"><div className="ll-pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div><div className="ll-pill-text">Laporan 100% anonim & terenkripsi</div></div>
              <div className="ll-pill"><div className="ll-pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19 19 0 013.1 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.9.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg></div><div className="ll-pill-text">Tiket pelacakan mandiri tanpa login</div></div>
              <div className="ll-pill"><div className="ll-pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div><div className="ll-pill-text">Pendampingan psikolog & program terapi</div></div>
            </div>
            <div className="ll-footer">© 2025 BINUS University · Satgas PPKS</div>
          </div>

          <div className="login-right">
            <div className="lcard">
              <div className="lcard-badge">Platform Aman & Terenkripsi</div>
              <h1>Masuk ke Binus Peduli</h1>
              <div className="lcard-sub">Gunakan akun BINUS Maya atau lacak laporan dengan Ticket ID.</div>
              <div className="tabs">
                <button className={`tab ${activeTab === 'nim' ? 'on' : ''}`} onClick={() => st('nim')}> Login NIM </button>
                <button className={`tab ${activeTab === 'ticket' ? 'on' : ''}`} onClick={() => st('ticket')}> Lacak Tiket </button>
              </div>
              <div className={`tc ${activeTab === 'nim' ? 'on' : ''}`} id="tc-nim">
                <div className="field">
                  <label className="flbl">NIM / Email BINUS</label>
                  <div className="finp-wrap">
                    <span className="finp-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                    <input className="finp" type="text" placeholder="2602xxxxxx atau nim@binus.ac.id"/>
                  </div>
                </div>
                <div className="field">
                  <label className="flbl">Password</label>
                  <div className="finp-wrap">
                    <span className="finp-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></span>
                    <input className="finp" type="password" placeholder="Password BINUS Maya" id="lpwd"/>
                    <button className="eye" onClick={togglePassword}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="row-mid">
                  <label className="chk-lbl"><input type="checkbox" className="chk"/> Ingat saya</label>
                  <a href="#" className="link-blue">Lupa password?</a>
                </div>
                <button className="btn-main" onClick={doLogin}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
                  </svg>
                  Masuk ke Dashboard
                </button>
                <div className="sep-row"><div className="sep-line"></div><span className="sep-txt">atau</span><div className="sep-line"></div></div>
                <button className="btn-sec" onClick={() => goPage('dashboard')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><path d="M3 21v-1a9 9 0 0118 0v1"/></svg>
                  Lapor Secara Anonim
                </button>
              </div>
              <div className={`tc ${activeTab === 'ticket' ? 'on' : ''}`} id="tc-ticket">
                <div className="tbox">
                  <div className="tbox-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></div>
                  <div style={{ flex: 1 }}><div className="tbox-lbl">Masukkan Ticket ID</div><input className="tbox-inp" type="text" placeholder="BPD-2025-XXXXXX"/></div>
                </div>
                <div className="info-box"><strong>Ticket ID</strong> diberikan saat laporan anonim dikirim. Lacak status tanpa perlu login.</div>
                <button className="btn-main" onClick={() => goPage('track')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  Cek Status Laporan
                </button>
                <div className="sep-row"><div className="sep-line"></div><span className="sep-txt">belum punya tiket?</span><div className="sep-line"></div></div>
                <button className="btn-sec" onClick={() => goPage('lapor')}>Buat Laporan Baru</button>
              </div>
              <div className="foot-note">Dengan masuk, Anda menyetujui <a href="#">Kebijakan Privasi</a> dan <a href="#">Syarat Layanan</a><br/>Bantuan: <a href="#">sasc@binus.ac.id</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* DASHBOARD - NEW LAYOUT */}
      {isLoggedIn && (
        <div className={`page ${currentPage === 'dashboard' ? 'show' : ''}`} id="pg-dashboard">
          <div className="dash">
            <div className="dash-header">
              <h2>Selamat datang, Daniel</h2>
              <p>Berikut ringkasan aktivitas laporan Anda di Binus Peduli.</p>
            </div>

            <div className="stats">
              <div className="stat-card">
                <div className="stat-label">
                  <span className="stat-dot dot-blue"></span>
                  Total Laporan
                </div>
                <div className="stat-val">3</div>
                <div className="stat-sub">Sejak bergabung</div>
              </div>

              <div className="stat-card">
                <div className="stat-label">
                  <span className="stat-dot dot-amber"></span>
                  Sedang Diproses
                </div>
                <div className="stat-val">1</div>
                <div className="stat-sub">Menunggu respon SASC</div>
              </div>

              <div className="stat-card">
                <div className="stat-label">
                  <span className="stat-dot dot-green"></span>
                  Selesai
                </div>
                <div className="stat-val">2</div>
                <div className="stat-sub">Kasus ditangani</div>
              </div>

              <div className="stat-card">
                <div className="stat-label">
                  <span className="stat-dot dot-sky"></span>
                  Sesi Terapi
                </div>
                <div className="stat-val">3x</div>
                <div className="stat-sub">Tersisa dari program</div>
              </div>
            </div>

            <div className="panel-grid">
              {/* Riwayat Laporan */}
              <div className="panel">
                <h3>Riwayat Laporan</h3>

                <div className="report-item">
                  <div className="ri-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="2" width="16" height="16">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>

                  <div>
                    <div className="ri-cat">Pelecehan Verbal</div>
                    <div className="ri-sub">BPD-2025-001 · 12 Mar 2025</div>
                  </div>

                  <span className="ri-badge badge-proses">Diproses</span>
                </div>

                <div className="report-item">
                  <div className="ri-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="2" width="16" height="16">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>

                  <div>
                    <div className="ri-cat">Bullying Verbal</div>
                    <div className="ri-sub">BPD-2025-002 · 5 Feb 2025</div>
                  </div>

                  <span className="ri-badge badge-selesai">Selesai</span>
                </div>

                <div className="report-item">
                  <div className="ri-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="2" width="16" height="16">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>

                  <div>
                    <div className="ri-cat">Pelecehan Fisik</div>
                    <div className="ri-sub">BPD-2024-089 · 10 Nov 2024</div>
                  </div>

                  <span className="ri-badge badge-selesai">Selesai</span>
                </div>
              </div>

              {/* Akses Cepat */}
              <div className="panel">
                <h3>Akses Cepat</h3>

                <div className="quick-btns">
                  <div className="qbtn" onClick={() => goPage('lapor')}>
                    <div className="qbtn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7-7 7 7" />
                      </svg>
                    </div>

                    <div>
                      <div className="qbtn-title">Buat Laporan Baru</div>
                      <div className="qbtn-sub">Laporan anonim atau terbuka</div>
                    </div>

                    <div className="qbtn-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>

                  <div className="qbtn" onClick={() => goPage('track')}>
                    <div className="qbtn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>

                    <div>
                      <div className="qbtn-title">Lacak Status Laporan</div>
                      <div className="qbtn-sub">Gunakan Ticket ID Anda</div>
                    </div>

                    <div className="qbtn-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>

                  <div className="qbtn">
                    <div className="qbtn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    </div>

                    <div>
                      <div className="qbtn-title">Booking Sesi Konsultasi</div>
                      <div className="qbtn-sub">Psikolog & psikiater kampus</div>
                    </div>

                    <div className="qbtn-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* LAPOR */ }
      <div className={`page ${currentPage === 'lapor' ? 'show' : ''}`} id="pg-lapor">
        <div className="form-pg">
          <h2>Buat Laporan Baru</h2>
          <div className="sub">Semua data dilindungi. Anda bisa memilih untuk tetap anonim.</div>
          <div className="step-bar">
            <div className="step"><div className="step-dot active">1</div><div className="step-lbl active">Privasi</div></div>
            <div className="step-line"></div>
            <div className="step"><div className="step-dot">2</div><div className="step-lbl">Kategori</div></div>
            <div className="step-line"></div>
            <div className="step"><div className="step-dot">3</div><div className="step-lbl">Kronologi</div></div>
            <div className="step-line"></div>
            <div className="step"><div className="step-dot">4</div><div className="step-lbl">Bukti</div></div>
            <div className="step-line"></div>
            <div className="step"><div className="step-dot">5</div><div className="step-lbl">Kirim</div></div>
          </div>
          <div className="fcard">
            <h3>Pilih mode pelaporan</h3>
            <div className="fcard-sub">Pilih sesuai kenyamanan Anda. Keduanya valid dan akan ditindaklanjuti oleh SASC.</div>
            <div className="choice-grid">
              <div className="choice sel" onClick={() => {
                document.querySelector('.choice.sel').classList.remove('sel');
                this.classList.add('sel');
              }}>
                <div className="choice-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><path d="M3 21v-1a9 9 0 0118 0v1"/><line x1="12" y1="15" x2="12" y2="21" strokeDasharray="3 2"/></svg></div>
                <div className="choice-title">Laporan Anonim</div>
                <div className="choice-desc">Identitas tidak dicatat sama sekali. Anda mendapat Ticket ID untuk melacak status.</div>
              </div>
              <div className="choice" onClick={() => {
                document.querySelector('.choice.sel').classList.remove('sel');
                this.classList.add('sel');
              }}>
                <div className="choice-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div className="choice-title">Laporan Terbuka</div>
                <div className="choice-desc">Sertakan NIM dan nomor HP agar SASC bisa menghubungi langsung untuk bantuan segera.</div>
              </div>
            </div>
            <div className="panic-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div><div className="panic-title">Tombol Keluar Darurat</div><div className="panic-sub">Tekan jika seseorang mendekat — layar langsung tertutup otomatis</div></div>
            </div>
            <div className="form-nav">
              <button className="fnav-back" onClick={() => goPage('dashboard')}>Kembali</button>
              <button className="fnav-next">Lanjut: Pilih Kategori →</button>
            </div>
          </div>
        </div>
      </div>
      

      {/* TRACK */}
      <div className={`page ${currentPage === 'track' ? 'show' : ''}`} id="pg-track">
        <div className="track-pg">
          <h2>Lacak Status Laporan</h2>
          <div className="sub">Masukkan Ticket ID yang diterima saat laporan dikirim. Tidak perlu login.</div>
          <div className="track-input-row">
            <div className="finp-wrap" style={{ flex: 1 }}>
              <span className="finp-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span>
              <input className="finp" style={{ height: '48px' }} type="text" placeholder="BPD-2025-XXXXXX" defaultValue="BPD-2025-001" id="tid"/>
            </div>
            <button className="track-find-btn" onClick={showTrack}>Cari</button>
          </div>
          <div className="track-result" id="tresult" style={{ display: showTrackResult ? 'block' : 'none' }}>
            <div className="tr-header">
              <div>
                <div className="tr-ticket-num">BPD-2025-001</div>
                <div className="tr-date">Dilaporkan: 12 Maret 2025 · Pelecehan Verbal</div>
              </div>
              <span className="ri-badge badge-proses" style={{ marginLeft: 'auto', fontSize: '13px', padding: '6px 16px' }}>Sedang Diproses</span>
            </div>
            <div className="tr-timeline">
              <div className="tl-item">
                <div className="tl-dot done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div><div className="tl-title">Laporan diterima</div><div className="tl-sub">12 Mar 2025, 14:32 — Laporan masuk ke database SASC</div></div>
              </div>
              <div className="tl-item">
                <div className="tl-dot done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div><div className="tl-title">Verifikasi awal</div><div className="tl-sub">13 Mar 2025 — Tim SASC memverifikasi kelengkapan laporan</div></div>
              </div>
              <div className="tl-item">
                <div className="tl-dot active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/></svg></div>
                <div><div className="tl-title">Investigasi berjalan</div><div className="tl-sub">Saat ini — Tim sedang melakukan penanganan kasus</div></div>
              </div>
              <div className="tl-item">
                <div className="tl-dot"><svg viewBox="0 0 24 24" fill="none" stroke="#9AB5D0" strokeWidth="2"><circle cx="12" cy="12" r="3"/></svg></div>
                <div><div className="tl-title" style={{ color: 'var(--txt3)' }}>Keputusan & tindak lanjut</div><div className="tl-sub">Menunggu hasil investigasi</div></div>
              </div>
              <div className="tl-item">
                <div className="tl-dot"><svg viewBox="0 0 24 24" fill="none" stroke="#9AB5D0" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div><div className="tl-title" style={{ color: 'var(--txt3)' }}>Kasus selesai</div><div className="tl-sub">Penanganan selesai & laporan diarsipkan</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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

  const tp = () => {
    const i = document.getElementById('lpwd');
    i.type = i.type === 'password' ? 'text' : 'password';
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
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <div className="nav">
        <div className="nav-brand" onClick={() => goPage('login')}>
          <div className="nav-logo"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><circle cx="12" cy="8" r="5"/><path d="M3 21v-1a9 9 0 0118 0v1"/></svg></div>
          <div className="nav-title">Binus <span>Peduli</span></div>
        </div>
        <div className="nav-links" id="navlinks" style={{ display: 'none' }}>
          <button className="nav-link act" onClick={() => goPage('dashboard')}>Dashboard</button>
          <button className="nav-link" onClick={() => goPage('lapor')}>Buat Laporan</button>
          <button className="nav-link" onClick={() => goPage('track')}>Lacak Tiket</button>
        </div>
        <div className="nav-right" id="navright">
          <button className="btn-sm btn-outline" onClick={() => goPage('login')}>Masuk</button>
          <button className="btn-sm btn-fill" onClick={() => goPage('lapor')}>Lapor Sekarang</button>
        </div>
    </div>

      {/* LOGIN */}
      <div
  className={`page ${currentPage === 'login' ? 'show' : ''}`}
  id="pg-login"
>
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
              <div className="tc on" id="tc-nim">
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
                    <button className="eye" onClick={tp}>
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
                <button className="btn-sec" onClick={() => goPage('lapor')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><path d="M3 21v-1a9 9 0 0118 0v1"/></svg>
                  Lapor Secara Anonim
                </button>
              </div>
              <div className="tc" id="tc-ticket">
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

      {/* DASHBOARD */}
      {isLoggedIn && (<div className={`page ${currentPage === 'dashboard' ? 'show' : ''}`}>
        {/* Left */}
        <div className="sidebar-l">
          <div className="widget greeting-widget">
            <div className="widget-title">Profil Anda</div>
            <div className="greeting-name">Daniel Putra</div>
            <div className="greeting-sub">Undergraduate · BINUS University<br/>Bergabung sejak Jan 2025</div>
            <div className="progress-bar-wrap"><div className="progress-bar-fill" style={{ width: '68%' }}></div></div>
            <div className="progress-label"><span>Level 3 — Pemulih</span><span>68%</span></div>
          </div>

          <div className="widget">
            <div className="widget-title">Statistik</div>
            <div className="stat-row">
              <div className="stat-mini"><div className="stat-mini-val">3</div><div className="stat-mini-lbl">Total Laporan</div></div>
              <div className="stat-mini"><div className="stat-mini-val">1</div><div className="stat-mini-lbl">Diproses</div></div>
              <div className="stat-mini"><div className="stat-mini-val">3x</div><div className="stat-mini-lbl">Sesi Terapi</div></div>
              <div className="stat-mini"><div className="stat-mini-val">2</div><div className="stat-mini-lbl">Selesai</div></div>
            </div>
          </div>

          <div className="widget safe-banner">
            <div className="safe-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div className="safe-title">Ruang ini aman</div>
            <div className="safe-sub">Semua data Anda dienkripsi penuh. Tidak ada pihak luar yang dapat mengakses informasi Anda.</div>
          </div>

          <div className="panic-float">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div><div className="panic-title2">Tombol Darurat</div><div className="panic-sub2">Tap untuk tutup layar sekarang</div></div>
          </div>
        </div>

        {/* Center */}
        <div className="center-col">
          {/* MAP */}
          <div className="journey-card">
            <div className="journey-bg"></div>
            <div className="journey-inner">
              <div className="section-head">
                <div>
                  <div className="journey-title">Perjalanan Pemulihan Anda</div>
                  <div className="journey-sub">Ikuti langkah-langkah menuju pemulihan yang lebih baik</div>
                </div>
              </div>
              <div className="path-steps">
                <div className="path-node">
                  <div className="pnode-circle done"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div className="pnode-label done-lbl">Laporan<br/>Diterima</div>
                </div>
                <div className="path-connector done"></div>
                <div className="path-node">
                  <div className="pnode-circle done"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div className="pnode-label done-lbl">Verifikasi<br/>SASC</div>
                </div>
                <div className="path-connector done"></div>
                <div className="path-node">
                  <div className="pnode-circle active"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg></div>
                  <div className="pnode-label active-lbl">Investigasi<br/>Aktif</div>
                </div>
                <div className="path-connector"></div>
                <div className="path-node">
                  <div className="pnode-circle locked"><svg viewBox="0 0 24 24" fill="none" stroke="#9AB5D0" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
                  <div className="pnode-label">Sesi<br/>Konsultasi</div>
                </div>
                <div className="path-connector"></div>
                <div className="path-node">
                  <div className="pnode-circle locked"><svg viewBox="0 0 24 24" fill="none" stroke="#9AB5D0" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>
                  <div className="pnode-label">Pemulihan<br/>Penuh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Q Action */}
          <div>
            <div className="section-head" style={{ marginBottom: "10px" }}><h2>Aksi Cepat</h2></div>
            <div className="qa-grid">
              <div className="qa-btn">
                <div className="qa-icon" style={{ background: '#EEF4FF' }}><svg viewBox="0 0 24 24" fill="none" stroke="#1A5FB4" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg></div>
                <div className="qa-label">Buat Laporan Baru</div>
              </div>
              <div className="qa-btn">
                <div className="qa-icon" style={{ background: '#E8F5E9' }}><svg viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
                <div className="qa-label">Lacak Tiket</div>
              </div>
              <div className="qa-btn">
                <div className="qa-icon" style={{ background: '#FFF3E0' }}><svg viewBox="0 0 24 24" fill="none" stroke="#B06000" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
                <div className="qa-label">Booking Psikolog</div>
              </div>
              <div className="qa-btn">
                <div className="qa-icon" style={{ background: '#F3E5F5' }}><svg viewBox="0 0 24 24" fill="none" stroke="#6A1B9A" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg></div>
                <div className="qa-label">E-Book & Edukasi</div>
              </div>
              <div className="qa-btn">
                <div className="qa-icon" style={{ background: '#E0F7FA' }}><svg viewBox="0 0 24 24" fill="none" stroke="#006064" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>
                <div className="qa-label">Teknik Grounding</div>
              </div>
              <div className="qa-btn">
                <div className="qa-icon" style={{ background: '#FBE9E7' }}><svg viewBox="0 0 24 24" fill="none" stroke="#BF360C" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19 19 0 013.1 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg></div>
                <div className="qa-label">Hubungi SASC</div>
              </div>
            </div>
          </div>

          {/* Riwayat Laporan */}
          <div>
            <div className="section-head" style={{ marginBottom: "10px" }}><h2>Riwayat Laporan</h2><span className="see-all">Lihat semua</span></div>
            <div className="laporan-grid">
              <div className="lap-card">
                <div className="lap-card-top">
                  <div className="lap-card-icon" style={{ background: '#EEF4FF' }}><svg viewBox="0 0 24 24" fill="none" stroke="#1A5FB4" strokeWidth="2" width="18" height="18"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                  <span className="rbadge rbadge-proses">Diproses</span>
                </div>
                <div className="lap-id">BPD-2025-001</div>
                <div className="lap-cat">Pelecehan Verbal</div>
                <div className="lap-date">12 Maret 2025</div>
                <div className="lap-progress">
                  <div className="lap-progress-bar"><div className="lap-progress-fill" style={{ width: "60%" }}></div></div>
                  <div className="lap-progress-label">Step 3 dari 5 — Investigasi</div>
                </div>
              </div>
              <div className="lap-card">
                <div className="lap-card-top">
                  <div className="lap-card-icon" style={{ background: '#E8F5E9' }}><svg viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" width="18" height="18"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                  <span className="rbadge rbadge-selesai">Selesai</span>
                </div>
                <div className="lap-id">BPD-2025-002</div>
                <div className="lap-cat">Bullying Verbal</div>
                <div className="lap-date">5 Februari 2025</div>
                <div className="lap-progress">
                  <div className="lap-progress-bar"><div className="lap-progress-fill" style={{ width: "100%", background: "#4CAF50" }}></div></div>
                  <div className="lap-progress-label" style={{ color: "#388E3C" }}>Selesai ditangani</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="sidebar-r">
          <div className="widget">
            <div className="widget-title">Notifikasi</div>
            <div className="notif-list">
              <div className="notif-item">
                <div className="notif-dot2" style={{ background: "var(--b4)" }}></div>
                <div><div className="notif-text">Status laporan BPD-2025-001 diperbarui ke <strong>Investigasi</strong></div><div className="notif-time">2 jam lalu</div></div>
              </div>
              <div className="notif-item">
                <div className="notif-dot2" style={{ background: "#4CAF50" }}></div>
                <div><div className="notif-text">Sesi konsultasi dikonfirmasi untuk Rabu, 10 Apr</div><div className="notif-time">1 hari lalu</div></div>
              </div>
              <div className="notif-item">
                <div className="notif-dot2" style={{ background: "#F9A825" }}></div>
                <div><div className="notif-text">E-Book baru tersedia: <strong>Panduan Grounding Darurat</strong></div><div className="notif-time">3 hari lalu</div></div>
              </div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-title">Psikolog Tersedia</div>
            <div style={{ display: 'flex',flexDirection: 'column',gap: '8px'}}>
              <div className="psikolog-card">
                <div className="psi-avatar" style={{ background: "#EEF4FF", color: "#1A5FB4" }}>AS</div>
                <div>
                  <div className="psi-name">dr. Ayu Safira</div>
                  <div className="psi-spec">Trauma & Kekerasan</div>
                  <div className="psi-avail">Tersedia hari ini</div>
                </div>
              </div>
              <div className="psikolog-card">
                <div className="psi-avatar" style={{ background: "#F3E5F5", color: "#6A1B9A" }}>RW</div>
                <div>
                  <div className="psi-name">Rizky Wibowo, M.Psi</div>
                  <div className="psi-spec">Psikologi Klinis</div>
                  <div className="psi-avail">Tersedia besok</div>
                </div>
              </div>
            </div>
            <button className="btn-book">Booking Sesi Sekarang</button>
          </div>

          <div className="widget" style={{ background: "#FFFBEF", border: "1px solid #F9E0A0" }}>
            <div className="widget-title" style={{ color: "#8A6A00" }}>Misi Minggu Ini</div>
            <div style={{ display: 'flex',flexDirection: 'column',gap: '8px'}}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#5A4000', }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, }} > <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" width="10" height="10" > <polyline points="20 6 9 17 4 12" /> </svg> </div>
                Baca 1 e-book edukasi
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#5A4000', }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, }} > <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" width="10" height="10" > <polyline points="20 6 9 17 4 12" /> </svg> </div>
                Selesaikan sesi grounding
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#9A8060', }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #D4B870', background: '#FFF8E0', flexShrink: 0, }}></div>
                Ikuti sesi konsultasi
              </div>
            </div>
          </div>
        </div>
      </div>)}

      {/* TRACK */}
      <div
  className={`page ${currentPage === 'track' ? 'show' : ''}`}
  id="pg-track"
>
        <div className="track-pg">
          <h2>Lacak Status Laporan</h2>
          <div className="sub">Masukkan Ticket ID yang diterima saat laporan dikirim. Tidak perlu login.</div>
          <div className="track-input-row">
            <div className="finp-wrap" style={{ flex: 1 }}>
              <span className="finp-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span>
              <input className="finp" style={{ height: '48px' }} type="text" placeholder="BPD-2025-XXXXXX" value="BPD-2025-001" id="tid"/>
            </div>
            <button className="track-find-btn" onClick={showTrack}>Cari</button>
          </div>
          <div className="track-result" id="tresult" style={{ display: 'none' }}>
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

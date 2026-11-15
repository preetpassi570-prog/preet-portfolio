"use client";

import React, { useState } from "react";
import { playPop, playChime } from "@/lib/soundFx";

export default function GenZBentoSection() {
  const [isRacing, setIsRacing] = useState(false);
  const [raceFinished, setRaceFinished] = useState(false);
  const [excelStatus, setExcelStatus] = useState("Ready");
  const [sqlStatus, setSqlStatus] = useState("Ready");

  const startBenchmarkRace = () => {
    playChime();
    setIsRacing(true);
    setRaceFinished(false);
    setExcelStatus("Calculating...");
    setSqlStatus("Running...");

    // SQL finishes almost instantly
    setTimeout(() => {
      setSqlStatus("✓ Finished in 14.2ms! (4.8M rows)");
      playPop();
    }, 450);

    // Excel stutters and crashes
    setTimeout(() => {
      setExcelStatus("⚠️ Excel Not Responding (Out of Memory)");
      setIsRacing(false);
      setRaceFinished(true);
    }, 1800);
  };

  return (
    <section className="section bento-section" id="vibe-check">
      <div className="section-header">
        <div className="data-studio-live-pill">
          <span className="live-pulsar"></span>
          <span>THE BENTO SHOWCASE • VIBE CHECK</span>
        </div>
        <h2 className="section-title">
          <span className="neon-text-red">//</span> HOW I WORK • ZERO FLUFF
        </h2>
        <p className="section-subtitle">
          Modern analytics engineered for speed, aesthetic clarity, and executive impact. Here is what happens behind the scenes.
        </p>
      </div>

      <div className="bento-grid-container">
        {/* Bento Card 1: Interactive Benchmark Race (Excel vs SQL) */}
        <div className="bento-card bento-benchmark">
          <div className="bento-badge-row">
            <span className="bento-pill speed">⚡ SPEED BENCHMARK</span>
            <span className="bento-sub-pill">Real-world test</span>
          </div>
          <h3 className="bento-title">Excel Spreadsheet vs. My Automated SQL Pipeline</h3>
          <p className="bento-desc">
            See what happens when you process 4.8 million records of raw transactional data:
          </p>

          <div className="race-track-wrapper">
            {/* SQL Track */}
            <div className="race-row sql-row">
              <div className="race-label">
                <span className="brand-tag sql">⚡ Preet&apos;s SQL Pipeline</span>
                <span className="race-status">{sqlStatus}</span>
              </div>
              <div className="race-bar-bg">
                <div
                  className={`race-bar-fill sql-fill ${isRacing || raceFinished ? "active" : ""}`}
                ></div>
              </div>
            </div>

            {/* Excel Track */}
            <div className="race-row excel-row">
              <div className="race-label">
                <span className="brand-tag excel">🐢 Legacy Excel File</span>
                <span className="race-status error">{excelStatus}</span>
              </div>
              <div className="race-bar-bg">
                <div
                  className={`race-bar-fill excel-fill ${isRacing ? "stalling" : ""} ${raceFinished ? "crashed" : ""}`}
                ></div>
              </div>
            </div>
          </div>

          <button
            className={`btn btn-secondary race-btn ${isRacing ? "pulsing" : ""}`}
            onClick={startBenchmarkRace}
            disabled={isRacing}
          >
            <i className={`fa-solid ${isRacing ? "fa-circle-notch fa-spin" : "fa-flag-checkered"}`}></i>
            <span>{isRacing ? "Racing Pipelines..." : "Run Live Speed Race"}</span>
          </button>
        </div>

        {/* Bento Card 2: Currently Cookin' & Music Vibe */}
        <div className="bento-card bento-vibe">
          <div className="bento-badge-row">
            <span className="bento-pill live">🟢 CURRENT STATUS</span>
          </div>

          <div className="spotify-widget">
            <div className="spotify-disk">
              <div className="disk-grooves"></div>
              <div className="disk-center">
                <i className="fa-solid fa-music"></i>
              </div>
            </div>
            <div className="spotify-info">
              <span className="spotify-tag">CURRENTLY JAMMING TO</span>
              <h4 className="track-title">Lo-Fi Coding Beats ☕</h4>
              <div className="sound-wave-bars">
                <span className="s-bar"></span>
                <span className="s-bar"></span>
                <span className="s-bar"></span>
                <span className="s-bar"></span>
                <span className="s-bar"></span>
              </div>
            </div>
          </div>

          <div className="status-specs-list">
            <div className="status-spec-item">
              <i className="fa-solid fa-code-commit" style={{ color: "#2563EB" }}></i>
              <span><strong>Building:</strong> Automated KPI dashboards in Power BI</span>
            </div>
            <div className="status-spec-item">
              <i className="fa-solid fa-location-dot" style={{ color: "#06B6D4" }}></i>
              <span><strong>Location:</strong> Delhi, India (Global Remote Ready)</span>
            </div>
            <div className="status-spec-item">
              <i className="fa-solid fa-mug-hot" style={{ color: "#F59E0B" }}></i>
              <span><strong>Fuel:</strong> Cold Brew + Pandas Documentation</span>
            </div>
          </div>
        </div>

        {/* Bento Card 3: Interactive Tech Orbit */}
        <div className="bento-card bento-stack">
          <div className="bento-badge-row">
            <span className="bento-pill stack">🛠️ WEAPONS OF CHOICE</span>
          </div>
          <h3 className="bento-title">Production Tech Stack</h3>
          <p className="bento-desc">Click or hover over any tool to view proficiency:</p>

          <div className="interactive-chips-cloud">
            <span className="genz-chip" onClick={() => playPop(600)}>
              <i className="fa-brands fa-python" style={{ color: "#2563EB" }}></i> Python (Advanced)
            </span>
            <span className="genz-chip" onClick={() => playPop(700)}>
              <i className="fa-solid fa-database" style={{ color: "#0284C7" }}></i> SQL & CTEs
            </span>
            <span className="genz-chip" onClick={() => playPop(800)}>
              <i className="fa-solid fa-chart-simple" style={{ color: "#F59E0B" }}></i> Power BI & DAX
            </span>
            <span className="genz-chip" onClick={() => playPop(650)}>
              <i className="fa-solid fa-table" style={{ color: "#10B981" }}></i> Pandas & NumPy
            </span>
            <span className="genz-chip" onClick={() => playPop(750)}>
              <i className="fa-regular fa-file-excel" style={{ color: "#16A34A" }}></i> Advanced Excel
            </span>
            <span className="genz-chip" onClick={() => playPop(850)}>
              <i className="fa-solid fa-broom" style={{ color: "#8B5CF6" }}></i> Data Cleaning
            </span>
            <span className="genz-chip" onClick={() => playPop(900)}>
              <i className="fa-solid fa-chart-pie" style={{ color: "#EC4899" }}></i> Data Storytelling
            </span>
          </div>
        </div>

        {/* Bento Card 4: The "No Cap" Philosophy */}
        <div className="bento-card bento-quote">
          <div className="bento-badge-row">
            <span className="bento-pill quote">💡 THE PHILOSOPHY</span>
          </div>
          <blockquote className="quote-text">
            &ldquo;I don&apos;t just dump 20 random charts on a canvas. I find the exact bottleneck bleeding your revenue and engineer a visual narrative leadership can act on today.&rdquo;
          </blockquote>
          <div className="quote-footer">
            <div className="author-pill">
              <span className="author-avatar">PP</span>
              <div>
                <strong>Preet Passi</strong>
                <p>Data Analyst & Analytics Engineer</p>
              </div>
            </div>
            <a
              href="https://wa.me/919315971839?text=Hi%20Preet,%20love%20your%20portfolio!%20Let's%20connect%20for%20a%20data%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "0.6rem 1.4rem", fontSize: "0.85rem" }}
            >
              <span>Let&apos;s Connect 🚀</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

const MARQUEE_ITEMS = [
  { icon: "fa-solid fa-bolt", text: "PYTHON & PANDAS WIZARDRY", color: "#2563EB" },
  { icon: "fa-solid fa-chart-pie", text: "AESTHETIC POWER BI DASHBOARDS", color: "#06B6D4" },
  { icon: "fa-solid fa-bullseye", text: "HIGH-SIGNAL DATA STORYTELLING", color: "#10B981" },
  { icon: "fa-solid fa-database", text: "4.8M+ ROWS WRANGLED", color: "#8B5CF6" },
  { icon: "fa-solid fa-fire", text: "ZERO CORPORATE FLUFF", color: "#F59E0B" },
  { icon: "fa-solid fa-arrow-trend-up", text: "MAXIMUM BUSINESS IMPACT", color: "#EC4899" },
  { icon: "fa-solid fa-check-double", text: "OPEN FOR ROLES & FREELANCE", color: "#16A34A" },
];

export default function KineticMarquee() {
  return (
    <div className="kinetic-marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="marquee-item">
            <i className={item.icon} style={{ color: item.color }}></i>
            <span>{item.text}</span>
            <span className="marquee-dot">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

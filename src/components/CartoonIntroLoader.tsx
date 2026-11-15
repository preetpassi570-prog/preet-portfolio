"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  playPop,
  playCartoonPunch,
  playCartoonBoing,
  playBoxingBell,
  playMalletBonk,
  playKOGong,
  playVictoryFanfare,
  playCartoonFallWhistle,
} from "@/lib/soundFx";

type FightStage =
  | "staredown"     // 0.0s - 1.4s: Bell rings, fighters face off on stage
  | "clash"         // 1.4s - 3.4s: Fast punches on stage (POW! BAM!)
  | "mallet_prep"   // 3.4s - 4.6s: Byte draws giant 100-TON Mallet
  | "stage_fall"    // 4.6s - 5.8s: Bonk! Yellow flies off stage and tumbles down to bottom of screen!
  | "ground_splat"  // 5.8s - 6.5s: Splat at the bottom edge of screen!
  | "popup_reveal"; // 6.5s - 8.0s: Big popup "WELCOME BACK TO PREET PASSI'S PORTFOLIO", then auto-opens site!

export default function CartoonIntroLoader() {
  const [isOpen, setIsOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [stage, setStage] = useState<FightStage>("staredown");
  const [speechLeft, setSpeechLeft] = useState("I'm gonna optimize every single table! 🥊");
  const [speechRight, setSpeechRight] = useState("Hahaha! 100,000 corrupt rows incoming! 😈");
  const [comicPuff, setComicPuff] = useState<string | null>(null);
  const [loadingPercent, setLoadingPercent] = useState(15);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  // Smooth loading progress counter
  useEffect(() => {
    if (!isOpen) return;

    const progressInterval = setInterval(() => {
      setLoadingPercent((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + 2, 100);
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, [isOpen]);

  // Main Fight Progression
  const startFightSequence = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    setStage("staredown");
    setIsClosing(false);
    setIsOpen(true);
    setLoadingPercent(12);
    setSpeechLeft("I'm gonna optimize every single table! 🥊");
    setSpeechRight("Hahaha! 100,000 corrupt rows incoming! 😈");
    setComicPuff(null);

    // 0.2s: Bell Rings
    const t0 = setTimeout(() => {
      playBoxingBell();
    }, 200);
    timersRef.current.push(t0);

    // 1.4s: Clash on Stage
    const t1 = setTimeout(() => {
      setStage("clash");
      setSpeechLeft("Take that, messy CSVs! 💥");
      setSpeechRight("Ouch! My missing primary keys! 😵");
      playCartoonPunch();
      setComicPuff("POW!");

      const p1 = setTimeout(() => {
        playCartoonBoing();
        setComicPuff("BAM!");
      }, 600);
      const p2 = setTimeout(() => {
        playCartoonPunch();
        setComicPuff("WHACK!");
      }, 1200);
      timersRef.current.push(p1, p2);
    }, 1400);
    timersRef.current.push(t1);

    // 3.4s: 100-Ton Mallet Prep
    const t2 = setTimeout(() => {
      setStage("mallet_prep");
      setSpeechLeft("100-TON SQL MALLET SMASH! 🔨🔥");
      setSpeechRight("WAIT WAIT NOOO! NOT OFF THE STAGE! 😱💦");
      playCartoonBoing();
      setComicPuff(null);
    }, 3400);
    timersRef.current.push(t2);

    // 4.6s: Mallet Hit & Yellow Flies OFF THE STAGE!
    const t3 = setTimeout(() => {
      setStage("stage_fall");
      playMalletBonk();
      playCartoonFallWhistle();
      setComicPuff("💥 KABLAM! 💥");
      setSpeechRight("WHEEEEEEEEEE! 😱💫");
      setSpeechLeft("AND HE'S OFF THE STAGE! 🏆");
    }, 4600);
    timersRef.current.push(t3);

    // 5.8s: Ground Splat at the very bottom of the screen!
    const t4 = setTimeout(() => {
      setStage("ground_splat");
      playCartoonPunch();
      playKOGong();
      setComicPuff("💥 CRASH! 💥");
      setSpeechRight("I surrender! 0 bugs left! 🏳️");
      setLoadingPercent(100);
    }, 5800);
    timersRef.current.push(t4);

    // 6.6s: Big Comic Popup ("WELCOME BACK PREET PASSI PORTFOLIO")
    const t5 = setTimeout(() => {
      setStage("popup_reveal");
      playVictoryFanfare();
    }, 6600);
    timersRef.current.push(t5);

    // 8.2s: Auto Open the Website smoothly!
    const t6 = setTimeout(() => {
      handleEnter();
    }, 8400);
    timersRef.current.push(t6);
  };

  useEffect(() => {
    startFightSequence();

    const handleReplay = () => {
      startFightSequence();
    };

    window.addEventListener("replay-cartoon-intro", handleReplay);
    return () => {
      timersRef.current.forEach(clearTimeout);
      window.removeEventListener("replay-cartoon-intro", handleReplay);
    };
  }, []);

  const handleEnter = () => {
    playPop(880);
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 600);
  };

  const handleSkip = () => {
    playPop(520);
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      id="cartoon-loader-screen"
      className={`cartoon-loader-overlay ${isClosing ? "loader-fade-out" : ""}`}
    >
      {/* Background Arena Spotlight & Ambience */}
      <div className="loader-backdrop-pattern"></div>
      <div className="arena-spotlights">
        <div className="spotlight spot-left"></div>
        <div className="spotlight spot-right"></div>
      </div>

      {/* Top Header Bar */}
      <div className="loader-top-bar">
        <div className="arena-title-pill">
          <span className="live-clash-dot"></span>
          <span>🥊 CARTOON BATTLE STAGE • PREET PASSI</span>
        </div>
        <button className="skip-intro-btn" onClick={handleSkip} title="Skip straight to Portfolio">
          <span>Skip Intro</span>
          <i className="fa-solid fa-forward-step"></i>
        </button>
      </div>

      {/* Comic Action Spark Burst */}
      {comicPuff && (
        <div className="comic-action-burst">
          <span className="burst-text">{comicPuff}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* THE ELEVATED BATTLE STAGE (FIGHT PLATFORM)                                */}
      {/* ========================================================================= */}
      <div className={`grand-stage-scaffold ${stage === "stage_fall" || stage === "ground_splat" ? "arena-shake" : ""}`}>
        {/* Stage Upper Combat Floor */}
        <div className="stage-mat-deck">
          {/* Stage Back Ropes & Corner Posts */}
          <div className="stage-ropes">
            <div className="stage-rope rope-1"></div>
            <div className="stage-rope rope-2"></div>
            <div className="stage-corner-post post-left"></div>
            <div className="stage-corner-post post-right"></div>
          </div>

          {/* FIGHTER 1: PURPLE SQL BOT ("BYTE") ON STAGE */}
          <div
            className={`fighter-card fighter-purple on-stage-left ${
              stage === "clash"
                ? "punching-left"
                : stage === "mallet_prep"
                ? "lifting-mallet"
                : stage === "stage_fall" || stage === "ground_splat" || stage === "popup_reveal"
                ? "victorious-pose"
                : "bouncing-idle"
            }`}
          >
            {/* Speech Bubble */}
            <div className="speech-bubble bubble-left">
              <span>{speechLeft}</span>
            </div>

            {/* Winner Trophy on Stage */}
            {(stage === "stage_fall" || stage === "ground_splat" || stage === "popup_reveal") && (
              <div className="trophy-badge-pop">
                🏆 <span>STAGE CHAMPION</span>
              </div>
            )}

            {/* Giant Mallet during mallet_prep & stage_fall */}
            {(stage === "mallet_prep" || stage === "stage_fall") && (
              <div className={`giant-mallet ${stage === "stage_fall" ? "mallet-smash" : ""}`}>
                <div className="mallet-head">
                  <span className="mallet-label">100T SQL</span>
                </div>
                <div className="mallet-handle"></div>
              </div>
            )}

            {/* Byte SVG Character */}
            <div className="fighter-svg-wrap">
              <svg viewBox="0 0 140 140" className="fighter-svg">
                <ellipse cx="70" cy="130" rx="35" ry="8" fill="#1E1E1E" opacity="0.3" />
                
                {/* Purple Body */}
                <rect
                  x="30"
                  y="35"
                  width="80"
                  height="75"
                  rx="30"
                  fill="#580556"
                  stroke="#1E1E1E"
                  strokeWidth="3.5"
                />

                {/* Belly Screen */}
                <rect
                  x="45"
                  y="65"
                  width="50"
                  height="36"
                  rx="10"
                  fill="#FFC837"
                  stroke="#1E1E1E"
                  strokeWidth="2.5"
                />
                <line x1="52" y1="76" x2="88" y2="76" stroke="#580556" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="52" y1="86" x2="78" y2="86" stroke="#580556" strokeWidth="2.5" strokeLinecap="round" />

                {/* Big Goofy Cartoon Eyes */}
                {stage === "popup_reveal" || stage === "ground_splat" ? (
                  <g>
                    <text x="46" y="58" fontSize="18" fill="#FFC837" fontWeight="bold">★</text>
                    <text x="74" y="58" fontSize="18" fill="#FFC837" fontWeight="bold">★</text>
                  </g>
                ) : (
                  <g>
                    <circle cx="52" cy="50" r="10" fill="#FFFFFF" stroke="#1E1E1E" strokeWidth="2.5" />
                    <circle cx="55" cy="50" r="4.5" fill="#1E1E1E" />
                    <circle cx="53" cy="48" r="1.5" fill="#FFFFFF" />

                    <circle cx="82" cy="50" r="10" fill="#FFFFFF" stroke="#1E1E1E" strokeWidth="2.5" />
                    <circle cx="85" cy="50" r="4.5" fill="#1E1E1E" />
                    <circle cx="83" cy="48" r="1.5" fill="#FFFFFF" />
                  </g>
                )}

                {/* Headband */}
                <rect x="26" y="32" width="88" height="10" rx="4" fill="#EF4444" stroke="#1E1E1E" strokeWidth="2" />
                <circle cx="70" cy="37" r="4" fill="#FFFFFF" stroke="#1E1E1E" strokeWidth="1.5" />

                {/* Gloves */}
                <g className="glove-left">
                  <circle cx="22" cy="78" r="14" fill="#EF4444" stroke="#1E1E1E" strokeWidth="2.5" />
                  <ellipse cx="20" cy="72" rx="4" ry="7" fill="#DC2626" />
                </g>
                <g className="glove-right">
                  <circle cx="118" cy="75" r="14" fill="#EF4444" stroke="#1E1E1E" strokeWidth="2.5" />
                  <ellipse cx="116" cy="69" rx="4" ry="7" fill="#DC2626" />
                </g>

                {/* Feet */}
                <rect x="48" y="108" width="12" height="18" rx="6" fill="#580556" stroke="#1E1E1E" strokeWidth="2.5" />
                <rect x="78" y="108" width="12" height="18" rx="6" fill="#580556" stroke="#1E1E1E" strokeWidth="2.5" />
                <ellipse cx="54" cy="126" rx="9" ry="4" fill="#1E1E1E" />
                <ellipse cx="84" cy="126" rx="9" ry="4" fill="#1E1E1E" />
              </svg>
            </div>
            <div className="fighter-label-name">BYTE (SQL HERO)</div>
          </div>

          {/* VS CIRCLE */}
          {stage !== "stage_fall" && stage !== "ground_splat" && stage !== "popup_reveal" && (
            <div className="stage-vs-badge">
              <span>VS</span>
            </div>
          )}

          {/* FIGHTER 2: YELLOW GLITCH (ON STAGE BEFORE KNOCKOUT) */}
          {(stage === "staredown" || stage === "clash" || stage === "mallet_prep") && (
            <div
              className={`fighter-card fighter-yellow on-stage-right ${
                stage === "clash"
                  ? "punching-right"
                  : stage === "mallet_prep"
                  ? "sweating-scared"
                  : "bouncing-idle"
              }`}
            >
              <div className="speech-bubble bubble-right">
                <span>{speechRight}</span>
              </div>

              {stage === "mallet_prep" && (
                <div className="sweat-drops-pop">
                  <span>💦</span>
                  <span>💦</span>
                </div>
              )}

              <div className="fighter-svg-wrap">
                <svg viewBox="0 0 140 140" className="fighter-svg">
                  <ellipse cx="70" cy="130" rx="35" ry="8" fill="#1E1E1E" opacity="0.3" />

                  <rect
                    x="32"
                    y="40"
                    width="76"
                    height="72"
                    rx="26"
                    fill="#FFC837"
                    stroke="#1E1E1E"
                    strokeWidth="3.5"
                  />

                  <polygon points="44,40 38,22 52,38" fill="#F59E0B" stroke="#1E1E1E" strokeWidth="2.5" />
                  <polygon points="96,40 102,22 88,38" fill="#F59E0B" stroke="#1E1E1E" strokeWidth="2.5" />

                  <circle cx="52" cy="54" r="12" fill="#FFFFFF" stroke="#1E1E1E" strokeWidth="2.5" />
                  <circle cx="54" cy="54" r="5" fill="#1E1E1E" />
                  <circle cx="52" cy="52" r="1.8" fill="#FFFFFF" />

                  <circle cx="82" cy="54" r="9" fill="#FFFFFF" stroke="#1E1E1E" strokeWidth="2.5" />
                  <circle cx="81" cy="54" r="4" fill="#1E1E1E" />
                  <circle cx="80" cy="53" r="1.5" fill="#FFFFFF" />

                  <path
                    d="M48 80 L54 88 L60 80 L66 88 L72 80 L78 88 L84 80 L90 88"
                    stroke="#1E1E1E"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g className="glove-left">
                    <circle cx="20" cy="74" r="14" fill="#3B82F6" stroke="#1E1E1E" strokeWidth="2.5" />
                    <ellipse cx="18" cy="68" rx="4" ry="7" fill="#2563EB" />
                  </g>
                  <g className="glove-right">
                    <circle cx="120" cy="76" r="14" fill="#3B82F6" stroke="#1E1E1E" strokeWidth="2.5" />
                    <ellipse cx="118" cy="70" rx="4" ry="7" fill="#2563EB" />
                  </g>

                  <rect x="46" y="110" width="14" height="16" rx="6" fill="#F59E0B" stroke="#1E1E1E" strokeWidth="2.5" />
                  <rect x="78" y="110" width="14" height="16" rx="6" fill="#F59E0B" stroke="#1E1E1E" strokeWidth="2.5" />
                  <ellipse cx="53" cy="126" rx="9" ry="4" fill="#1E1E1E" />
                  <ellipse cx="85" cy="126" rx="9" ry="4" fill="#1E1E1E" />
                </svg>
              </div>
              <div className="fighter-label-name">GLITCH (DIRTY DATA)</div>
            </div>
          )}
        </div>

        {/* Elevated Stage Front Plank & Structural Stilts */}
        <div className="stage-front-beam">
          <div className="stage-beam-label">★ PREET PASSI DATA COMBAT STAGE ★</div>
        </div>
        <div className="stage-support-stilts">
          <div className="stilt stilt-1"></div>
          <div className="stilt stilt-2"></div>
          <div className="stilt stilt-3"></div>
          <div className="stilt stilt-4"></div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FALLING ANIMATION: YELLOW FLIES OFF THE STAGE & CRASHES AT BOTTOM SCREEN */}
      {/* ========================================================================= */}
      {stage === "stage_fall" && (
        <div className="falling-glitch-trajectory">
          <div className="glitch-tumbling-sprite">
            <span className="screaming-bubble">WHEEEEEEE! 😱💫</span>
            <svg viewBox="0 0 140 140" className="fighter-svg">
              <rect x="32" y="40" width="76" height="72" rx="26" fill="#FFC837" stroke="#1E1E1E" strokeWidth="3.5" />
              <text x="44" y="66" fontSize="22" fill="#1E1E1E" fontWeight="bold">✕</text>
              <text x="74" y="66" fontSize="22" fill="#1E1E1E" fontWeight="bold">✕</text>
              <path d="M50 85 Q70 82 90 85" stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* GROUND SPLAT AT THE BOTTOM EDGE OF THE SCREEN                            */}
      {/* ========================================================================= */}
      {(stage === "ground_splat" || stage === "popup_reveal") && (
        <div className="bottom-screen-splat-zone">
          <div className="splat-dust-cloud">
            <span>💨</span>
            <span>💥</span>
            <span>💨</span>
          </div>

          <div className="flattened-glitch-pancake">
            {/* Spinning Stars & Tweetie Birds */}
            <div className="dizzy-stars-orbit-floor">
              <span>💫</span>
              <span>🐤</span>
              <span>💫</span>
            </div>

            {/* Surrender White Flag */}
            <div className="surrender-flag-floor">
              <span>🏳️ 0 BUGS LEFT! I SUBMIT!</span>
            </div>

            {/* Flattened Squashed Yellow Pancake Character */}
            <svg viewBox="0 0 160 50" className="pancake-svg">
              <ellipse cx="80" cy="35" rx="75" ry="12" fill="#1E1E1E" opacity="0.3" />
              <ellipse cx="80" cy="25" rx="70" ry="15" fill="#FFC837" stroke="#1E1E1E" strokeWidth="3" />
              {/* Goofy Cross Eyes */}
              <text x="60" y="28" fontSize="16" fill="#1E1E1E" fontWeight="bold">✕</text>
              <text x="95" y="28" fontSize="16" fill="#1E1E1E" fontWeight="bold">✕</text>
              <ellipse cx="20" cy="24" rx="12" ry="7" fill="#3B82F6" stroke="#1E1E1E" strokeWidth="2" />
              <ellipse cx="140" cy="24" rx="12" ry="7" fill="#3B82F6" stroke="#1E1E1E" strokeWidth="2" />
            </svg>
            <div className="floor-splat-label">GLITCH HAS FALLEN OFF THE STAGE! 💥</div>
          </div>
        </div>
      )}

      {/* Arena Bottom Live Loading Progress Strip */}
      <div className="arena-load-strip-fixed">
        <div className="load-status-header">
          <span className="load-status-text">
            {stage === "staredown" && "🔔 Round 1: Battle commences on Preet Passi's Data Stage..."}
            {stage === "clash" && "⚡ Exchanging Rapid SQL Queries & Schema Filters on Stage..."}
            {stage === "mallet_prep" && "🔨 Byte draws the 100-Ton Mallet at stage edge..."}
            {stage === "stage_fall" && "🚀 K.O.! Glitch is flying off the stage towards the bottom screen!"}
            {stage === "ground_splat" && "💥 CRASH! Glitch hit the bottom screen edge! 100% Clean Data!"}
            {stage === "popup_reveal" && "🎉 Victory! Entering Preet Passi's Portfolio..."}
          </span>
          <span className="load-percent-num">{loadingPercent}%</span>
        </div>
        <div className="load-progress-track">
          <div
            className={`load-progress-fill stage-${stage}`}
            style={{ width: `${loadingPercent}%` }}
          ></div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* GIANT FULL-SCREEN BOLD TITLE: "WELCOME PREET PASSI PORTFOLIO"              */}
      {/* ========================================================================= */}
      {stage === "popup_reveal" && (
        <div className="giant-screen-title-overlay" onClick={handleEnter}>
          <div className="giant-title-container">
            <span className="ko-tiny-badge">💥 K.O. • STAGE CHAMPION 💥</span>
            
            <h1 className="screen-giant-welcome">
              <span className="word-welcome">WELCOME TO</span>
              <span className="word-name">PREET PASSI</span>
              <span className="word-portfolio">PORTFOLIO</span>
            </h1>

            <div className="screen-opening-pill">
              <span className="pill-dot-pulse"></span>
              <span>ENTERING PORTFOLIO NOW...</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

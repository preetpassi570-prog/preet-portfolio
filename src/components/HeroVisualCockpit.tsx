"use client";

import React, { useState } from "react";
import { playPop, playCartoonPunch, playCartoonBoing } from "@/lib/soundFx";

export default function HeroVisualCockpit() {
  const [channel, setChannel] = useState<number>(1);
  const [isFlickering, setIsFlickering] = useState<boolean>(false);
  const [tvPower, setTvPower] = useState<boolean>(true);

  // Switch channel with vintage CRT static flicker
  const toggleChannel = () => {
    playPop(850);
    setIsFlickering(true);
    setChannel((prev) => (prev === 1 ? 2 : 1));
    setTimeout(() => setIsFlickering(false), 320);
  };

  const togglePower = () => {
    playPop(tvPower ? 400 : 900);
    setTvPower((prev) => !prev);
  };

  const handleScreenClick = () => {
    if (!tvPower) {
      togglePower();
      return;
    }
    Math.random() > 0.5 ? playCartoonPunch() : playCartoonBoing();
  };

  return (
    <div className="retro-tv-showcase">
      {/* Background Ambient Glow */}
      <div className="tv-ambient-glow"></div>

      {/* Main Television Set */}
      <div className="vintage-tv-set">
        {/* Antennas on Top */}
        <div className="tv-antenna-rig">
          <div className="antenna-stalk stalk-left">
            <span className="antenna-bead"></span>
          </div>
          <div className="antenna-mount-block">
            <span className="tv-carrying-handle"></span>
          </div>
          <div className="antenna-stalk stalk-right">
            <span className="antenna-bead"></span>
          </div>
        </div>

        {/* Vintage TV Cabinet (Outer Bezel) */}
        <div className="tv-cabinet">
          {/* Main CRT Screen (Left 78%) */}
          <div
            className={`tv-crt-viewport ${isFlickering ? "static-flicker" : ""} ${!tvPower ? "screen-off" : ""}`}
            onClick={handleScreenClick}
            title="Click TV screen for sound!"
          >
            {/* Glass Curvature & Glare Highlights */}
            <div className="crt-glass-glare"></div>
            <div className="crt-scanlines"></div>
            <div className="crt-vignette-shadow"></div>

            {tvPower ? (
              <>
                {/* On-Screen Channel Watermark (Classic TV Corner Logo) */}
                <div className="tv-corner-watermark">
                  <span className="channel-id">
                    {channel === 1
                      ? "CH 01 • TOM & JERRY STYLE MALLET CHASE (15s)"
                      : "CH 02 • KUNG-FU DOJO DUEL (15s)"}
                  </span>
                  <span className="rec-live-indicator">
                    <span className="red-pulse-dot">●</span> 2D TOON LIVE
                  </span>
                </div>

                {/* ========================================================
                    STORY 1: LIVING ROOM MALLET HEIST & CHASE (15 SECONDS)
                    ======================================================== */}
                {channel === 1 && (
                  <div className="cartoon-show-stage story-1-livingroom">
                    {/* Living Room Scenery */}
                    <div className="stage-scenery">
                      <div className="cartoon-window">
                        <div className="sun-circle"></div>
                        <div className="hill hill-1"></div>
                        <div className="hill hill-2"></div>
                      </div>
                      <div className="cartoon-wall-frame fish-frame">
                        <i className="fa-solid fa-fish"></i>
                      </div>
                    </div>

                    {/* Character 1: Cat (Felix) - Sneaks, swings giant mallet, gets launched, runs away! */}
                    <div className="story1-actor cat-actor-ch1">
                      <svg viewBox="0 0 110 120" className="actor-svg">
                        {/* Cat Body */}
                        <ellipse cx="55" cy="80" rx="24" ry="26" fill="#3B82F6" stroke="#120E16" strokeWidth="3.2" />
                        <ellipse cx="55" cy="81" rx="15" ry="18" fill="#DBEAFE" />

                        {/* Legs & Cute Red Sneakers */}
                        <rect x="36" y="102" width="10" height="12" fill="#3B82F6" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="40" cy="115" rx="10" ry="5" fill="#EF4444" stroke="#120E16" strokeWidth="2.5" />
                        <rect x="64" y="102" width="10" height="12" fill="#3B82F6" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="69" cy="115" rx="10" ry="5" fill="#EF4444" stroke="#120E16" strokeWidth="2.5" />

                        {/* Cat Head */}
                        <circle cx="55" cy="40" r="28" fill="#3B82F6" stroke="#120E16" strokeWidth="3.2" />
                        {/* Pointy Ears */}
                        <polygon points="31,24 41,2 50,20" fill="#3B82F6" stroke="#120E16" strokeWidth="3.2" strokeLinejoin="round" />
                        <polygon points="35,22 41,8 47,19" fill="#F472B6" />
                        <polygon points="60,20 69,2 79,24" fill="#3B82F6" stroke="#120E16" strokeWidth="3.2" strokeLinejoin="round" />
                        <polygon points="63,19 69,8 75,22" fill="#F472B6" />

                        {/* Big Expressive Cartoon Eyes */}
                        <circle cx="46" cy="38" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.2" />
                        <circle cx="48" cy="38" r="4" fill="#120E16" />
                        <circle cx="49" cy="36" r="1.5" fill="#FFFFFF" />
                        <circle cx="64" cy="38" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.2" />
                        <circle cx="66" cy="38" r="4" fill="#120E16" />
                        <circle cx="67" cy="36" r="1.5" fill="#FFFFFF" />

                        {/* Nose & Whiskers */}
                        <polygon points="53,48 57,48 55,51" fill="#F472B6" />
                        <line x1="30" y1="46" x2="42" y2="47" stroke="#120E16" strokeWidth="2" />
                        <line x1="30" y1="51" x2="42" y2="50" stroke="#120E16" strokeWidth="2" />
                        <line x1="68" y1="47" x2="80" y2="46" stroke="#120E16" strokeWidth="2" />
                        <line x1="68" y1="50" x2="80" y2="51" stroke="#120E16" strokeWidth="2" />

                        {/* Mischievous Grin */}
                        <path d="M 47 54 Q 55 60 63 54" stroke="#120E16" strokeWidth="2.8" fill="none" strokeLinecap="round" />

                        {/* Giant Cartoon Mallet */}
                        <g className="story1-cat-mallet">
                          <path d="M 68 70 Q 88 55 85 45" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" fill="none" />
                          <rect x="74" y="24" width="24" height="34" rx="5" fill="#B45309" stroke="#120E16" strokeWidth="3" />
                          <rect x="76" y="27" width="20" height="6" fill="#FBBF24" opacity="0.4" />
                          <rect x="83" y="44" width="6" height="34" rx="2" fill="#D97706" stroke="#120E16" strokeWidth="2" />
                        </g>

                        {/* Left Hand Guard */}
                        <circle cx="34" cy="72" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.5" />
                      </svg>

                      {/* Cartoon Running Smoke Puff (Appears during sprint) */}
                      <div className="running-dust-trail">
                        <span className="smoke-puff sp-1">💨</span>
                        <span className="smoke-puff sp-2">💨</span>
                      </div>
                    </div>

                    {/* Dog Snore Bubbles (During early sleeping phase) */}
                    <div className="dog-snore-bubbles">
                      <span className="snore-z z-1">z</span>
                      <span className="snore-z z-2">Z</span>
                      <span className="snore-z z-3">Z</span>
                    </div>

                    {/* Comic Impact Bursts ("BONK!" -> "POW!") */}
                    <div className="story1-comic-burst">
                      <span className="comic-word">BONK!</span>
                      <span className="sparkle s1">💥</span>
                      <span className="sparkle s2">⭐</span>
                    </div>

                    {/* Dust Cloud Brawl (Looney Tunes Style) */}
                    <div className="story1-dust-cloud">
                      <div className="dust-blob blob-1"></div>
                      <div className="dust-blob blob-2"></div>
                      <div className="dust-blob blob-3"></div>
                      <div className="flying-prop prop-glove1">🥊</div>
                      <div className="flying-prop prop-glove2">🥊</div>
                      <div className="flying-prop prop-mallet">🔨</div>
                      <div className="flying-prop prop-bone">🦴</div>
                      <span className="dust-scuffle-label">BAM! POW!</span>
                    </div>

                    {/* Character 2: Bulldog (Spike) - Snores, gets bonked, lumps with stars, punches back! */}
                    <div className="story1-actor dog-actor-ch1">
                      <svg viewBox="0 0 110 120" className="actor-svg">
                        {/* Dog Body */}
                        <ellipse cx="55" cy="80" rx="26" ry="27" fill="#F59E0B" stroke="#120E16" strokeWidth="3.2" />
                        <ellipse cx="55" cy="81" rx="16" ry="19" fill="#FEF3C7" />

                        {/* Spiked Collar */}
                        <path d="M 32 64 Q 55 72 78 64" stroke="#DC2626" strokeWidth="7" fill="none" strokeLinecap="round" />
                        <polygon points="42,65 44,59 46,65" fill="#FFFFFF" stroke="#120E16" strokeWidth="1" />
                        <polygon points="53,67 55,61 57,67" fill="#FFFFFF" stroke="#120E16" strokeWidth="1" />
                        <polygon points="64,65 66,59 68,65" fill="#FFFFFF" stroke="#120E16" strokeWidth="1" />

                        {/* Legs & Shoes */}
                        <rect x="36" y="102" width="10" height="12" fill="#F59E0B" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="40" cy="115" rx="10" ry="5" fill="#580556" stroke="#120E16" strokeWidth="2.5" />
                        <rect x="64" y="102" width="10" height="12" fill="#F59E0B" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="69" cy="115" rx="10" ry="5" fill="#580556" stroke="#120E16" strokeWidth="2.5" />

                        {/* Dog Head */}
                        <circle cx="55" cy="38" r="29" fill="#F59E0B" stroke="#120E16" strokeWidth="3.2" />
                        {/* Floppy Ears */}
                        <ellipse cx="26" cy="38" rx="8" ry="19" fill="#B45309" stroke="#120E16" strokeWidth="3" transform="rotate(-15 26 38)" />
                        <ellipse cx="84" cy="38" rx="8" ry="19" fill="#B45309" stroke="#120E16" strokeWidth="3" transform="rotate(15 84 38)" />

                        {/* Muzzle */}
                        <ellipse cx="55" cy="46" rx="17" ry="13" fill="#FEF3C7" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="55" cy="40" rx="7" ry="4" fill="#120E16" />

                        {/* Band-Aid */}
                        <rect x="66" y="32" width="11" height="5" rx="1" fill="#FCA5A5" stroke="#120E16" strokeWidth="1.2" transform="rotate(25 71 34)" />

                        {/* Eyes */}
                        <circle cx="45" cy="32" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.2" />
                        <circle cx="44" cy="32" r="4" fill="#120E16" />
                        <circle cx="45" cy="30" r="1.5" fill="#FFFFFF" />
                        <circle cx="65" cy="32" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.2" />
                        <circle cx="64" cy="32" r="4" fill="#120E16" />
                        <circle cx="65" cy="30" r="1.5" fill="#FFFFFF" />

                        {/* Grumpy Smile */}
                        <path d="M 46 52 Q 55 58 64 52" stroke="#120E16" strokeWidth="2.8" fill="none" strokeLinecap="round" />
                        <polygon points="50,53 53,57 55,53" fill="#FFFFFF" stroke="#120E16" strokeWidth="1.2" />

                        {/* Giant Boxing Glove Arm */}
                        <g className="story1-dog-boxing-arm">
                          <circle cx="34" cy="74" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.5" />
                          <ellipse cx="76" cy="68" rx="15" ry="13" fill="#DC2626" stroke="#120E16" strokeWidth="3" />
                          <ellipse cx="78" cy="66" rx="5" ry="4" fill="#FFFFFF" opacity="0.5" />
                        </g>
                      </svg>

                      {/* Head Lump & Spinning Stars */}
                      <div className="story1-head-lump">
                        <span className="lump-bulb"></span>
                        <span className="spinning-star st-1">⭐</span>
                        <span className="spinning-star st-2">💫</span>
                      </div>
                    </div>

                    {/* Living Room Checkerboard Floor */}
                    <div className="stage-checkerboard-floor"></div>
                  </div>
                )}

                {/* ========================================================
                    STORY 2: KUNG-FU DOJO MARTIAL ARTS BRAWL (15 SECONDS)
                    ======================================================== */}
                {channel === 2 && (
                  <div className="cartoon-show-stage story-2-dojo">
                    {/* Dojo Scenery (Mount Fuji, Paper Lanterns, Bonsai) */}
                    <div className="dojo-scenery">
                      <div className="dojo-lantern lantern-left">
                        <span className="lantern-cord"></span>
                        <span className="lantern-body">🏮</span>
                      </div>
                      <div className="dojo-sun-fuji">
                        <div className="fuji-red-sun"></div>
                        <div className="fuji-mountain">
                          <div className="fuji-snow-cap"></div>
                        </div>
                      </div>
                      <div className="dojo-lantern lantern-right">
                        <span className="lantern-cord"></span>
                        <span className="lantern-body">🏮</span>
                      </div>
                    </div>

                    {/* Ninja Cat: Black headband, flying jump kick, nunchaku, ceiling splat! */}
                    <div className="story2-actor ninja-cat-actor">
                      <svg viewBox="0 0 110 120" className="actor-svg">
                        {/* Body with Karate Belt */}
                        <ellipse cx="55" cy="80" rx="24" ry="26" fill="#1E1E1E" stroke="#120E16" strokeWidth="3.2" />
                        <ellipse cx="55" cy="81" rx="14" ry="18" fill="#FFFFFF" />
                        <rect x="34" y="80" width="42" height="7" rx="2" fill="#EF4444" stroke="#120E16" strokeWidth="1.5" />
                        <path d="M 52 87 L 48 100 L 52 100 L 56 87" fill="#EF4444" />

                        {/* Feet */}
                        <rect x="36" y="102" width="10" height="12" fill="#1E1E1E" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="40" cy="115" rx="10" ry="5" fill="#FFC837" stroke="#120E16" strokeWidth="2.5" />
                        <rect x="64" y="102" width="10" height="12" fill="#1E1E1E" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="69" cy="115" rx="10" ry="5" fill="#FFC837" stroke="#120E16" strokeWidth="2.5" />

                        {/* Head */}
                        <circle cx="55" cy="40" r="28" fill="#3B82F6" stroke="#120E16" strokeWidth="3.2" />
                        <polygon points="31,24 41,2 50,20" fill="#3B82F6" stroke="#120E16" strokeWidth="3.2" />
                        <polygon points="35,22 41,8 47,19" fill="#F472B6" />
                        <polygon points="60,20 69,2 79,24" fill="#3B82F6" stroke="#120E16" strokeWidth="3.2" />
                        <polygon points="63,19 69,8 75,22" fill="#F472B6" />

                        {/* Black Ninja Headband with Long Tails */}
                        <rect x="27" y="27" width="56" height="10" rx="3" fill="#120E16" stroke="#120E16" strokeWidth="1.5" />
                        <path d="M 27 32 Q 10 26 4 36 Q 14 40 27 36" fill="#120E16" className="ninja-ribbon-tail" />

                        {/* Determined Anime Eyes */}
                        <circle cx="46" cy="38" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.2" />
                        <circle cx="48" cy="38" r="4" fill="#120E16" />
                        <polygon points="40,32 50,34 44,30" fill="#120E16" />
                        <circle cx="64" cy="38" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.2" />
                        <circle cx="66" cy="38" r="4" fill="#120E16" />
                        <polygon points="60,34 70,32 66,30" fill="#120E16" />

                        {/* Battle Grin */}
                        <polygon points="53,47 57,47 55,50" fill="#F472B6" />
                        <path d="M 48 53 Q 55 58 62 53" stroke="#120E16" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                        {/* Nunchaku Spinning Paws */}
                        <g className="ninja-nunchaku-paw">
                          <circle cx="75" cy="62" r="9" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.5" />
                          <rect x="80" y="44" width="7" height="24" rx="3" fill="#B45309" stroke="#120E16" strokeWidth="2" transform="rotate(35 84 56)" />
                          <circle cx="34" cy="70" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.5" />
                        </g>
                      </svg>
                    </div>

                    {/* Martial Impact Burst ("KAPOW!" -> "CLANG!" -> "WHAM!") */}
                    <div className="story2-dojo-burst">
                      <span className="dojo-burst-word">KAPOW!</span>
                      <span className="dojo-spark d1">⚡</span>
                      <span className="dojo-spark d2">💥</span>
                    </div>

                    {/* Dojo Clash Tornado (Anime Speedlines & Clash) */}
                    <div className="story2-dojo-tornado">
                      <div className="tornado-wind tw-1"></div>
                      <div className="tornado-wind tw-2"></div>
                      <div className="tornado-wind tw-3"></div>
                      <span className="tornado-icon ti-1">🥋</span>
                      <span className="tornado-icon ti-2">⭐</span>
                      <span className="tornado-icon ti-3">⚡</span>
                      <span className="tornado-clash-text">CLASH!!</span>
                    </div>

                    {/* Karate Bulldog: White Gi, Tiger Stance, Dragon Uppercut! */}
                    <div className="story2-actor karate-dog-actor">
                      <svg viewBox="0 0 110 120" className="actor-svg">
                        {/* Body with Karate Gi & Black Belt */}
                        <ellipse cx="55" cy="80" rx="26" ry="27" fill="#FFFFFF" stroke="#120E16" strokeWidth="3.2" />
                        {/* Red Gi Lapel */}
                        <path d="M 40 68 L 55 86 L 70 68" stroke="#EF4444" strokeWidth="3" fill="none" strokeLinecap="round" />
                        {/* Black Belt */}
                        <rect x="32" y="82" width="46" height="7" rx="2" fill="#120E16" />
                        <path d="M 52 89 L 48 102 L 52 102 L 56 89" fill="#120E16" />

                        {/* Feet */}
                        <rect x="36" y="102" width="10" height="12" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="40" cy="115" rx="10" ry="5" fill="#B45309" stroke="#120E16" strokeWidth="2.5" />
                        <rect x="64" y="102" width="10" height="12" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="69" cy="115" rx="10" ry="5" fill="#B45309" stroke="#120E16" strokeWidth="2.5" />

                        {/* Head */}
                        <circle cx="55" cy="38" r="29" fill="#F59E0B" stroke="#120E16" strokeWidth="3.2" />
                        <ellipse cx="26" cy="38" rx="8" ry="19" fill="#B45309" stroke="#120E16" strokeWidth="3" transform="rotate(-15 26 38)" />
                        <ellipse cx="84" cy="38" rx="8" ry="19" fill="#B45309" stroke="#120E16" strokeWidth="3" transform="rotate(15 84 38)" />

                        {/* Muzzle */}
                        <ellipse cx="55" cy="46" rx="17" ry="13" fill="#FEF3C7" stroke="#120E16" strokeWidth="2.5" />
                        <ellipse cx="55" cy="40" rx="7" ry="4" fill="#120E16" />

                        {/* Eyes with Fierce Anime Eyebrows */}
                        <circle cx="45" cy="32" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.2" />
                        <circle cx="44" cy="32" r="4" fill="#120E16" />
                        <polygon points="38,26 50,28 44,24" fill="#120E16" />
                        <circle cx="65" cy="32" r="8" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.2" />
                        <circle cx="64" cy="32" r="4" fill="#120E16" />
                        <polygon points="60,28 72,26 66,24" fill="#120E16" />

                        {/* Fierce Karate Mouth */}
                        <path d="M 47 52 Q 55 58 63 52" stroke="#120E16" strokeWidth="2.8" fill="none" strokeLinecap="round" />
                        <polygon points="51,53 54,57 56,53" fill="#FFFFFF" stroke="#120E16" strokeWidth="1" />

                        {/* Karate Dragon Paws */}
                        <g className="karate-dragon-paws">
                          <circle cx="34" cy="70" r="9" fill="#FFFFFF" stroke="#120E16" strokeWidth="2.5" />
                          <circle cx="76" cy="65" r="11" fill="#FFFFFF" stroke="#120E16" strokeWidth="3" />
                        </g>
                      </svg>
                    </div>

                    {/* Tatami Bamboo Mat Floor */}
                    <div className="dojo-tatami-floor"></div>
                  </div>
                )}
              </>
            ) : (
              /* TV Turn-Off Static Dot Animation */
              <div className="tv-turned-off-state">
                <span className="phosphor-fade-dot"></span>
                <span className="power-off-hint">CLICK TO TURN ON TV</span>
              </div>
            )}
          </div>

          {/* Right Control Column (Hardware Dials & Speaker) */}
          <div className="tv-control-panel">
            {/* Channel Knob */}
            <div className="tv-hardware-knob-unit" onClick={toggleChannel} title="Click to Change TV Channel (15s Stories!)">
              <span className="knob-title">CHANNEL</span>
              <div className={`vintage-rotary-dial ${channel === 2 ? "ch-rotated" : ""}`}>
                <span className="dial-groove"></span>
              </div>
              <span className="channel-indicator-badge">CH 0{channel}</span>
            </div>

            {/* Volume Knob */}
            <div className="tv-hardware-knob-unit" onClick={handleScreenClick} title="Click for Sound Effect">
              <span className="knob-title">VOLUME</span>
              <div className="vintage-rotary-dial vol-dial">
                <span className="dial-groove"></span>
              </div>
              <span className="volume-indicator-badge">HI-FI 🔊</span>
            </div>

            {/* Vintage Speaker Grille */}
            <div className="tv-speaker-slits">
              <div className="slit"></div>
              <div className="slit"></div>
              <div className="slit"></div>
              <div className="slit"></div>
              <div className="slit"></div>
            </div>

            {/* Power Button & Pilot LED */}
            <div className="tv-power-switch" onClick={togglePower} title="Click to Toggle TV Power">
              <span className={`pilot-bulb ${tvPower ? "bulb-on" : "bulb-off"}`}></span>
              <span className="power-text">{tvPower ? "POWER ON" : "POWER OFF"}</span>
            </div>

            {/* Channel Switch Button Pill */}
            <button className="tv-quick-channel-btn" onClick={toggleChannel} title="Switch to other 15s Story">
              <i className="fa-solid fa-arrows-rotate"></i>
              <span>{channel === 1 ? "NEXT STORY" : "CH 01 STORY"}</span>
            </button>
          </div>
        </div>

        {/* Angled Wooden Retro TV Stand Legs */}
        <div className="tv-stand-legs">
          <div className="tv-leg leg-left"></div>
          <div className="tv-stand-shadow"></div>
          <div className="tv-leg leg-right"></div>
        </div>
      </div>
    </div>
  );
}

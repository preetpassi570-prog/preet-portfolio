/**
 * PREMIUM 3D DATA ANALYTICS PORTFOLIO SCRIPT
 * Handles 3D scenes, loading screen, 3D card effects, bilingiual chatbot, and modal dialogs.
 */

// Global State
const state = {
  loaderComplete: false,
  voiceEnabled: false,
  speechSynth: window.speechSynthesis,
  speechUtterance: null,
  currentVoice: null,
  voicesLoaded: false,
  aiName: "Assistense",
  chatHistory: []
};

// Start initialization once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initTiltCards();
  initTabs();
  initLightbox();
  initRobotEyes();
  initChatbot();
  initProjectLightbox();
  initContactForm();
});

// Initialize Voices for Speech Synthesis
function loadVoices() {
  if (!state.speechSynth) return;
  let voices = state.speechSynth.getVoices();
  if (voices.length > 0) {
    state.voicesLoaded = true;
    selectOptimalVoices(voices);
  } else {
    // Chrome loads voices asynchronously
    state.speechSynth.onvoiceschanged = () => {
      voices = state.speechSynth.getVoices();
      state.voicesLoaded = true;
      selectOptimalVoices(voices);
    };
  }
}
loadVoices();

function selectOptimalVoices(voices) {
  // Try to find a premium/natural English voice and a Hindi voice
  state.hindiVoice = voices.find(v => v.lang.startsWith("hi")) || null;
  state.englishVoice = voices.find(v => v.lang.includes("en-US") || v.lang.includes("en-GB")) || voices[0];
}


/* =========================================================================
   1. 3D LOADING SEQUENCE (Redesigned Futuristic Cyberpunk AI OS)
   ========================================================================= */

// Web Audio API Synth helpers
let audioCtx = null;
function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playBeep(freq, duration) {
  try {
    initAudio();
    if (!audioCtx || audioCtx.state === 'suspended') return;
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Fail silently
  }
}

function playStartupSound() {
  try {
    initAudio();
    if (!audioCtx || audioCtx.state === 'suspended') return;
    
    const now = audioCtx.currentTime;
    // Polyphonic chords C3, E3, G3, C4
    const notes = [130.81, 164.81, 196.00, 261.63];
    notes.forEach(freq => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now);
      
      const filter = audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.Q.setValueAtTime(8, now);
      filter.frequency.setValueAtTime(100, now);
      filter.frequency.exponentialRampToValueAtTime(2000, now + 1.2);
      
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(now + 2.5);
    });
  } catch (e) {
    // Fail silently
  }
}

// Background Grid and Particle Engine
function startBgAnimation() {
  const bgCanvas = document.getElementById("loader-bg-canvas");
  if (!bgCanvas) return { stop: () => {} };
  const ctx = bgCanvas.getContext("2d");
  if (!ctx) return { stop: () => {} };
  
  let width = bgCanvas.width = window.innerWidth;
  let height = bgCanvas.height = window.innerHeight;
  
  const resizeHandler = () => {
    width = bgCanvas.width = window.innerWidth;
    height = bgCanvas.height = window.innerHeight;
  };
  window.addEventListener("resize", resizeHandler);
  
  // Particles
  const particles = [];
  const particleCount = window.innerWidth < 768 ? 20 : 60;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.4,
      speedY: -(Math.random() * 0.4 + 0.1),
      speedX: (Math.random() * 0.15 - 0.075),
      alpha: Math.random() * 0.5 + 0.1
    });
  }
  
  // Mouse trail history
  const trail = [];
  const maxTrail = window.innerWidth < 768 ? 0 : 15;
  
  const mouseMoveHandler = (e) => {
    if (maxTrail === 0) return;
    trail.push({ x: e.clientX, y: e.clientY, alpha: 0.6 });
    if (trail.length > maxTrail) {
      trail.shift();
    }
  };
  window.addEventListener("mousemove", mouseMoveHandler);
  
  let gridOffset = 0;
  let scanlineY = 0;
  let animId;
  
  function draw() {
    animId = requestAnimationFrame(draw);
    
    // Clear screen
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, width, height);
    
    // Ambient Glow Spots (Vision Pro Fog Effect)
    const glowGradient = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, Math.max(width, height) * 0.85);
    glowGradient.addColorStop(0, "rgba(255, 0, 60, 0.11)");
    glowGradient.addColorStop(0.5, "rgba(255, 0, 60, 0.035)");
    glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, width, height);

    const leftFog = ctx.createRadialGradient(0, height / 2, 10, 0, height / 2, width * 0.45);
    leftFog.addColorStop(0, "rgba(255, 0, 60, 0.08)");
    leftFog.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = leftFog;
    ctx.fillRect(0, 0, width, height);

    const rightFog = ctx.createRadialGradient(width, height / 2, 10, width, height / 2, width * 0.45);
    rightFog.addColorStop(0, "rgba(255, 0, 60, 0.08)");
    rightFog.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = rightFog;
    ctx.fillRect(0, 0, width, height);
    
    // Receding perspective grid
    ctx.strokeStyle = "rgba(255, 0, 60, 0.03)";
    ctx.lineWidth = 1;
    
    const horizon = height * 0.35;
    gridOffset = (gridOffset + 0.45) % 40;
    
    // Horizontal lines receding to horizon
    for (let i = 0; i < 20; i++) {
      const ratio = i / 19;
      const y = horizon + (height - horizon) * Math.pow(ratio, 2.2);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    
    // Vertical perspective lines meeting at horizon center
    const verticalLinesCount = window.innerWidth < 768 ? 12 : 30;
    const centerHorizonX = width / 2;
    for (let i = 0; i <= verticalLinesCount; i++) {
      const targetRatio = i / verticalLinesCount;
      const targetX = targetRatio * width;
      ctx.beginPath();
      ctx.moveTo(centerHorizonX, horizon);
      ctx.lineTo(targetX, height);
      ctx.stroke();
    }

    // Laser scanline sweep
    scanlineY += 1.5;
    if (scanlineY > height) {
      scanlineY = 0;
    }
    ctx.fillStyle = "rgba(255, 0, 60, 0.02)";
    ctx.fillRect(0, scanlineY, width, 2);
    
    // Particles
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 0, 60, ${p.alpha})`;
      ctx.shadowBlur = p.size * 2;
      ctx.shadowColor = "rgba(255, 0, 60, 0.5)";
      ctx.fill();
      ctx.shadowBlur = 0;
      
      p.x += p.speedX;
      p.y += p.speedY;
      
      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
    });
    
    // Mouse trail
    trail.forEach((t, index) => {
      ctx.beginPath();
      const radius = (index / trail.length) * 5 + 1.5;
      const tAlpha = (index / trail.length) * t.alpha;
      ctx.arc(t.x, t.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 0, 60, ${tAlpha})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = "rgba(255, 0, 60, 0.9)";
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }
  
  draw();
  
  return {
    stop: () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousemove", mouseMoveHandler);
    }
  };
}

let isIntroSoundPlaying = false;
let audioPlayedOnce = false;
let introSoundBlobUrl = null;
let introSoundPlaybackRequested = false;

function createIntroSoundBlobUrl() {
  if (introSoundBlobUrl) return introSoundBlobUrl;

  const sampleRate = 22050;
  const durationSeconds = 0.85;
  const frameCount = Math.floor(sampleRate * durationSeconds);
  const buffer = new ArrayBuffer(44 + frameCount * 2);
  const view = new DataView(buffer);

  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  writeString(0, "RIFF");
  view.setUint32(4, 36 + frameCount * 2, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, frameCount * 2, true);

  const pcm = new Int16Array(buffer, 44);
  const frequencies = [440, 587, 659];

  for (let i = 0; i < frameCount; i++) {
    const time = i / sampleRate;
    let sample = 0;
    frequencies.forEach((freq, index) => {
      const envelope = Math.exp(-time * 3.5) * (1 - index * 0.18);
      const wave = Math.sin((time * freq * 2 * Math.PI));
      sample += wave * envelope * (index === 0 ? 0.62 : 0.34);
    });

    const ramp = Math.max(0, 1 - time / durationSeconds);
    pcm[i] = Math.max(-32767, Math.min(32767, sample * 22000 * ramp));
  }

  const blob = new Blob([buffer], { type: "audio/wav" });
  introSoundBlobUrl = URL.createObjectURL(blob);
  return introSoundBlobUrl;
}

function playIntroSound(onReadyCallback) {
  const audioEl = document.getElementById("loading-sound");
  if (!audioEl) {
    if (onReadyCallback) onReadyCallback();
    return;
  }

  if (introSoundPlaybackRequested) {
    if (onReadyCallback) onReadyCallback();
    return;
  }
  introSoundPlaybackRequested = true;

  audioEl.src = createIntroSoundBlobUrl();
  audioEl.preload = "auto";
  audioEl.load();

  let readyFired = false;
  const onReady = () => {
    if (readyFired) return;
    readyFired = true;
    console.log("✔ Audio Loaded");
    console.log("✔ Audio Ready");

    if (onReadyCallback) onReadyCallback();
    attemptPlayback();
  };

  const handleAudioReady = () => {
    if (audioEl.readyState >= 2) {
      onReady();
    }
  };

  if (audioEl.readyState >= 2) {
    onReady();
  } else {
    audioEl.addEventListener("loadeddata", handleAudioReady, { once: true });
    audioEl.addEventListener("canplaythrough", handleAudioReady, { once: true });
    audioEl.addEventListener("error", () => {
      console.warn("Intro audio failed to load; using synthesized fallback");
      onReady();
    }, { once: true });
  }

  function attemptPlayback() {
    if (isIntroSoundPlaying || audioPlayedOnce) return;

    audioEl.pause();
    audioEl.currentTime = 0;

    const sessionUnlocked = sessionStorage.getItem("audioUnlocked") === "true";

    const playAudio = () => {
      audioEl.play()
        .then(() => {
          isIntroSoundPlaying = true;
          audioPlayedOnce = true;
          sessionStorage.setItem("audioUnlocked", "true");
          console.log("✔ Playing Intro Sound");
          if (sessionUnlocked) {
            console.log("✔ Audio Unlocked");
          }
        })
        .catch(() => {
          console.log("✔ Autoplay Blocked");
          setupUserGestureUnlock();
        });
    };

    playAudio();
  }

  function setupUserGestureUnlock() {
    if (audioPlayedOnce) return;

    const unlock = () => {
      if (audioPlayedOnce) return;

      audioEl.pause();
      audioEl.currentTime = 0;
      audioEl.play()
        .then(() => {
          isIntroSoundPlaying = true;
          audioPlayedOnce = true;
          sessionStorage.setItem("audioUnlocked", "true");
          console.log("✔ Playing Intro Sound");
          console.log("✔ Audio Unlocked");
          removeUnlockListeners();
        })
        .catch(() => {
          console.log("✔ Autoplay Blocked");
        });

      initAudio();
      if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume().catch(() => {});
      }
    };

    const removeUnlockListeners = () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
    };

    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("keydown", unlock);
  }
}

function initLoader() {
  const loaderOverlay = document.getElementById("loader-overlay");
  const progressFill = document.getElementById("progress-fill");
  const loaderPerc = document.getElementById("loader-perc");
  const appContainer = document.getElementById("app-container");
  const canvas = document.getElementById("loader-canvas");

  if (!canvas) return;

  // Initialize Web Audio Context on first interaction
  const unlockAudio = () => {
    initAudio();
    window.removeEventListener("click", unlockAudio);
    window.removeEventListener("touchstart", unlockAudio);
  };
  window.addEventListener("click", unlockAudio);
  window.addEventListener("touchstart", unlockAudio);

  // Start the loading sound play sequence, then kick off the loading bar animation
  playIntroSound(() => {
    startProgressAnimation();
  });

  // Background Animations
  const bgAnim = startBgAnimation();

  // Three.js setup for loading scene (logo core)
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 8;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(400, 400); // Sharp resolution matching the 440px container size
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Add futuristic geometric mesh (TorusKnot)
  const geometry = new THREE.TorusKnotGeometry(1.6, 0.45, 120, 16);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff003c,
    wireframe: true,
    transparent: true,
    opacity: 0.8
  });
  const torusKnot = new THREE.Mesh(geometry, material);
  scene.add(torusKnot);

  // Subtle interior glow sphere
  const glowGeo = new THREE.SphereGeometry(1.2, 32, 32);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0xff003c,
    transparent: true,
    opacity: 0.15
  });
  const glowSphere = new THREE.Mesh(glowGeo, glowMat);
  scene.add(glowSphere);

  // Animation Loop for Logo
  let animationFrameId;
  const clock = new THREE.Clock();

  function animateLoader() {
    animationFrameId = requestAnimationFrame(animateLoader);
    
    const elapsedTime = clock.getElapsedTime();
    torusKnot.rotation.x = elapsedTime * 0.5;
    torusKnot.rotation.y = elapsedTime * 0.8;
    
    // Pulse mesh size slightly based on elapsedTime
    const pulseFactor = 1 + Math.sin(elapsedTime * 3) * 0.05;
    torusKnot.scale.set(pulseFactor, pulseFactor, pulseFactor);
    
    renderer.render(scene, camera);
  }
  animateLoader();

  // Progress Bar & States
  let currentProgress = 0;
  let targetProgress = 0;
  let actualLoaded = false;
  
  // Dynamic loading statuses
  const loadingStatuses = [
    "Initializing AI Core...",
    "Loading Neural Network...",
    "Connecting Data Engine...",
    "Loading Portfolio Assets...",
    "Loading Projects...",
    "Loading Certificates...",
    "Preparing Dashboard...",
    "Optimizing Experience...",
    "Launching Portfolio..."
  ];

  const statusLabel = document.querySelector(".loader-status");
  const hardwareStatsEl = document.querySelector(".cyber-hardware-stats");

  // Track DOM, Styles, and Fonts loading state
  window.addEventListener("load", () => {
    actualLoaded = true;
  });
  
  // Fallback timer if load event takes too long
  setTimeout(() => {
    actualLoaded = true;
  }, 4500);

  function updateStats(p) {
    if (!hardwareStatsEl) return;
    const cpuVal = Math.min(Math.round(p * 0.9 + Math.random() * 5), 100);
    let gpuVal = "STDBY";
    if (p > 25) gpuVal = "BOOTING";
    if (p > 60) gpuVal = "RTX LOAD";
    if (p > 85) gpuVal = "ACTIVE";
    if (p >= 100) gpuVal = "ONLINE";
    
    let memVal = "8GB";
    if (p > 35) memVal = "16GB";
    if (p > 70) memVal = "32GB LOADED";
    
    hardwareStatsEl.textContent = `CPU: ${cpuVal}% • GPU: ${gpuVal} • MEM: ${memVal}`;
  }

  // Beeps playing control
  let lastBeepP = 0;

  // Linear progression solver loop
  const loaderTimer = setInterval(() => {
    // If assets are not loaded yet, cap target progress at 85%
    if (!actualLoaded) {
      targetProgress = Math.min(targetProgress + (Math.random() * 2 + 1), 85);
    } else {
      // If loaded, let it rush smoothly to 100%
      targetProgress = Math.min(targetProgress + (Math.random() * 6 + 3), 100);
    }

    // Smoothly interpolate currentProgress to targetProgress
    currentProgress += (targetProgress - currentProgress) * 0.15;
    const roundedProgress = Math.round(currentProgress);

    // Update visuals
    if (progressFill) progressFill.style.width = `${roundedProgress}%`;
    if (loaderPerc) loaderPerc.textContent = `${roundedProgress}%`;

    // Audio beeping every 4% step
    if (roundedProgress >= lastBeepP + 4 && roundedProgress < 100) {
      playBeep(440 + roundedProgress * 2, 0.08); // pitch increases as it loads
      lastBeepP = roundedProgress;
    }

    // Dynamic stats updates
    updateStats(roundedProgress);

    // Status text switches randomly / sequentially
    const statusIndex = Math.min(Math.floor((roundedProgress / 100) * loadingStatuses.length), loadingStatuses.length - 1);
    if (statusLabel && statusLabel.textContent !== loadingStatuses[statusIndex]) {
      statusLabel.textContent = loadingStatuses[statusIndex];
    }

    // Material wireframe details adjustments based on completion
    material.opacity = 0.8 - (roundedProgress / 100) * 0.5;

    // Loading complete trigger
    if (roundedProgress >= 99.5) {
      clearInterval(loaderTimer);
      cancelAnimationFrame(animationFrameId);
      
      // Final beeps + startup chord
      playBeep(880, 0.15);
      setTimeout(() => {
        playStartupSound();
      }, 100);

      // Reveal main site
      state.loaderComplete = true;
      revealPortfolio();
    }
  }, 60);

  function revealPortfolio() {
    // 1. Fade/Blur/Zoom loader out
    gsap.timeline()
      .to(loaderOverlay, {
        opacity: 0,
        scale: 1.08,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "power3.inOut",
        onComplete: () => {
          loaderOverlay.style.display = "none";
          document.body.classList.remove("loading-active");
          bgAnim.stop(); // Stop canvas animation to save CPU
          
          // Initialize Background 3D scene after load
          initBackground3D();
          // Initialize local orbits on visual canvas
          initHeroVisualCanvas();
        }
      });

    // 2. Main App Container Activation (Smooth fade-in)
    gsap.set(appContainer, { opacity: 1, pointerEvents: "all" });

    // 3. Cinematic Entrance Stagger Sequence
    const tl = gsap.timeline({ delay: 0.1 });

    // Navbar enters first (slides down)
    tl.fromTo(".navbar", 
      { y: -25, opacity: 0, filter: "blur(5px)" }, 
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
    );

    // Hero Visual enters (scales up and activates)
    tl.fromTo(".hero-visual", 
      { scale: 0.82, opacity: 0, filter: "blur(12px)" }, 
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power4.out" },
      "-=0.9"
    );

    // Hero content items slide up staggering
    tl.fromTo([
      ".hero-welcome-tag",
      ".hero-main-title",
      ".hero-subtitle",
      ".hero-skills-container",
      ".hero-desc",
      ".hero-buttons",
      ".hero-stats-grid"
    ], 
      { y: 35, opacity: 0, filter: "blur(10px)" }, 
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.12, ease: "power3.out" },
      "-=1.2"
    );

    // Scroll explore enters last
    tl.fromTo(".scroll-explore",
      { opacity: 0, y: 10 },
      { opacity: 0.65, y: 0, duration: 1, ease: "power2.out", onComplete: () => {
        // Welcome message from AI
        sendAIMessage(
          "Hey! 👋 Main Assistense hoon — Preet Passi ke portfolio ka assistant.\n\nAap mujhse unke projects, skills, certificates ya contact details ke baare me pooch sakte ho. English ya Hinglish, dono chalega!"
        );
      }}
    );
  }
}

// Local 2D Canvas Particle Orbit inside visual card
function initHeroVisualCanvas() {
  const canvas = document.getElementById("hero-visual-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = canvas.width = canvas.clientWidth;
  let height = canvas.height = canvas.clientHeight;
  
  const resizeHandler = () => {
    if (canvas.clientWidth) {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    }
  };
  window.addEventListener("resize", resizeHandler);

  // Orbiting particles
  const particles = [];
  const particleCount = window.innerWidth < 768 ? 10 : 25;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * 55 + 75,
      speed: (Math.random() * 0.012 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
      size: Math.random() * 2 + 0.6,
      alpha: Math.random() * 0.5 + 0.3
    });
  }

  // Expanding waves
  const waves = [];
  let lastWaveTime = 0;

  let animId;
  function animateVisual() {
    animId = requestAnimationFrame(animateVisual);
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    // Draw and update waves
    const now = Date.now();
    if (now - lastWaveTime > 1800 && window.innerWidth >= 768) {
      waves.push({ radius: 75, alpha: 0.8 });
      lastWaveTime = now;
    }

    waves.forEach((w, index) => {
      ctx.beginPath();
      ctx.arc(centerX, centerY, w.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 0, 60, ${w.alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      w.radius += 0.7;
      w.alpha -= 0.007;

      if (w.alpha <= 0) {
        waves.splice(index, 1);
      }
    });

    // Draw orbiting dots
    particles.forEach(p => {
      p.angle += p.speed;
      const x = centerX + Math.cos(p.angle) * p.radius;
      const y = centerY + Math.sin(p.angle) * p.radius;

      ctx.beginPath();
      ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 0, 60, ${p.alpha})`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = "rgba(255, 0, 60, 0.8)";
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }

  animateVisual();
}

/* =========================================================================
   2. 3D INTERACTIVE PARTICLE CONSTELLATION BACKGROUND
   ========================================================================= */
function initBackground3D() {
  const canvasBg = document.getElementById("webgl-bg");
  if (!canvasBg) return;

  const scene = new THREE.Scene();
  
  // Perspective Camera
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 45;

  const renderer = new THREE.WebGLRenderer({ canvas: canvasBg, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles Creation
  const particleCount = window.innerWidth < 768 ? 70 : 160;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    // Random positions in box
    positions[i * 3] = (Math.random() - 0.5) * 90;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 90;

    // Movement vectors
    velocities.push({
      x: (Math.random() - 0.5) * 0.04,
      y: (Math.random() - 0.5) * 0.04,
      z: (Math.random() - 0.5) * 0.04
    });
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  // Particle Material (Glowing Red dots)
  const material = new THREE.PointsMaterial({
    color: 0xff003c,
    size: window.innerWidth < 768 ? 0.35 : 0.45,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });

  const particlesMesh = new THREE.Points(geometry, material);
  scene.add(particlesMesh);

  // Line connections between particles helper mesh
  const linesMaterial = new THREE.LineBasicMaterial({
    color: 0xff003c,
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending
  });

  let linesMesh = null;

  // Track Mouse movement for Parallax
  let mouse = { x: 0, y: 0 };
  let targetMouse = { x: 0, y: 0 };

  window.addEventListener("mousemove", (event) => {
    targetMouse.x = (event.clientX / window.innerWidth) - 0.5;
    targetMouse.y = -(event.clientY / window.innerHeight) + 0.5;
  });

  // Handle Resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Render loop
  function animate() {
    requestAnimationFrame(animate);

    // Smooth mouse coordinates lag (lerp)
    mouse.x += (targetMouse.x - mouse.x) * 0.05;
    mouse.y += (targetMouse.y - mouse.y) * 0.05;

    // Interactive camera Parallax (cinematic camera shift)
    camera.position.x += (mouse.x * 15 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 15 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    // Subtle mesh rotation for organic drift
    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.x += 0.0002;

    const positionsArr = particlesMesh.geometry.attributes.position.array;

    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      
      positionsArr[idx] += velocities[i].x;
      positionsArr[idx + 1] += velocities[i].y;
      positionsArr[idx + 2] += velocities[i].z;

      // Wrap around bounds
      if (Math.abs(positionsArr[idx]) > 45) velocities[i].x *= -1;
      if (Math.abs(positionsArr[idx + 1]) > 45) velocities[i].y *= -1;
      if (Math.abs(positionsArr[idx + 2]) > 45) velocities[i].z *= -1;
    }

    particlesMesh.geometry.attributes.position.needsUpdate = true;

    // Construct Line segments for close particles
    if (linesMesh) scene.remove(linesMesh);

    const linePoints = [];
    for (let i = 0; i < particleCount; i++) {
      const p1 = new THREE.Vector3(
        positionsArr[i * 3],
        positionsArr[i * 3 + 1],
        positionsArr[i * 3 + 2]
      );
      
      p1.applyEuler(particlesMesh.rotation);

      // Check against others
      for (let j = i + 1; j < particleCount; j++) {
        const p2 = new THREE.Vector3(
          positionsArr[j * 3],
          positionsArr[j * 3 + 1],
          positionsArr[j * 3 + 2]
        );
        p2.applyEuler(particlesMesh.rotation);

        const dist = p1.distanceTo(p2);
        if (dist < 8) {
          linePoints.push(p1, p2);
        }
      }
    }

    if (linePoints.length > 0) {
      const linesGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
      linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
      scene.add(linesMesh);
    }

    renderer.render(scene, camera);
  }

  animate();
}


/* =========================================================================
   3. 3D PERSPECTIVE TILT CARDS & GLOW EFFECTS
   ========================================================================= */
function initTiltCards() {
  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate inside card
      const y = e.clientY - rect.top;  // y coordinate inside card

      // Update CSS variables for radial glow overlay
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      // Compute 3D rotation based on mouse coordinates relative to center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 8;  // limit tilt to 8 deg
      const rotateX = -((y - centerY) / centerY) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      // Return back to original position
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}


/* =========================================================================
   4. TABS MANAGER FOR PROJECTS SHOWCASE
   ========================================================================= */
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const projectCards = document.querySelectorAll("#projects-grid .project-card");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-tab");

      // Switch active class
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Animate project filtration
      projectCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");

        if (category === "all" || cardCat === category) {
          card.style.display = "flex";
          gsap.fromTo(card, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" });
        } else {
          gsap.to(card, {
            scale: 0.85,
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              card.style.display = "none";
            }
          });
        }
      });
    });
  });
}


/* =========================================================================
   5. CERTIFICATE LIGHTBOX (POPUP) OVERLAY
   ========================================================================= */
function initLightbox() {
  const lightbox = document.getElementById("cert-lightbox");
  const certCards = document.querySelectorAll(".cert-card");
  const closeBtn = document.getElementById("lightbox-close-btn");
  const courseLabel = document.getElementById("lightbox-course-name");

  if (!lightbox) return;

  certCards.forEach(card => {
    card.addEventListener("click", (e) => {
      // If the user clicked the 'View Certificate' link itself, do not open lightbox
      if (e.target.closest(".cert-view-btn")) {
        return;
      }

      const courseName = card.getAttribute("data-course") || "SPECIALIZATION CERTIFICATE";
      
      // Update course title inside lightbox
      if (courseLabel) {
        courseLabel.textContent = courseName.toUpperCase();
      }

      // Show Lightbox overlay
      lightbox.classList.remove("lightbox-hidden");
      gsap.fromTo(".lightbox-content", { scale: 0.75, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)" });
    });
  });

  // Close triggers
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  function closeLightbox() {
    gsap.to(".lightbox-content", {
      scale: 0.75,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        lightbox.classList.add("lightbox-hidden");
      }
    });
  }
}


function initRobotEyes() {
  const trigger = document.getElementById("ai-floating-trigger");
  if (!trigger) return;

  const pupils = Array.from(trigger.querySelectorAll(".robot-pupil"));
  const eyes = Array.from(trigger.querySelectorAll(".robot-eye"));
  const state = {
    pointerX: window.innerWidth / 2,
    pointerY: window.innerHeight / 2,
    active: false
  };

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const animateEyes = () => {
    pupils.forEach((pupil, index) => {
      const eye = eyes[index];
      const eyeRect = eye.getBoundingClientRect();
      const centerX = eyeRect.left + eyeRect.width / 2;
      const centerY = eyeRect.top + eyeRect.height / 2;
      const dx = state.pointerX - centerX;
      const dy = state.pointerY - centerY;
      const targetX = state.active ? clamp(dx / 28, -6, 6) : 0;
      const targetY = state.active ? clamp(dy / 28, -5, 5) : 0;
      const currentX = pupil.dataset.currentX ? parseFloat(pupil.dataset.currentX) : 0;
      const currentY = pupil.dataset.currentY ? parseFloat(pupil.dataset.currentY) : 0;
      const nextX = currentX + (targetX - currentX) * 0.24;
      const nextY = currentY + (targetY - currentY) * 0.24;
      pupil.dataset.currentX = nextX;
      pupil.dataset.currentY = nextY;

      const baseX = pupil.classList.contains("pupil-right") ? 128 : 92;
      const baseY = 110;
      pupil.setAttribute("cx", baseX + nextX);
      pupil.setAttribute("cy", baseY + nextY);
    });
    requestAnimationFrame(animateEyes);
  };

  window.addEventListener("mousemove", (event) => {
    state.pointerX = event.clientX;
    state.pointerY = event.clientY;
    state.active = true;
  });

  window.addEventListener("mouseleave", () => {
    state.active = false;
  });

  trigger.addEventListener("mouseenter", () => {
    state.active = true;
  });

  trigger.addEventListener("mouseleave", () => {
    state.active = false;
  });

  let blinkTimer = null;
  const blink = () => {
    trigger.classList.add("blink");
    setTimeout(() => trigger.classList.remove("blink"), 140);
  };
  const startBlinking = () => {
    clearInterval(blinkTimer);
    blink();
    blinkTimer = setInterval(() => {
      blink();
    }, 3600 + Math.floor(Math.random() * 2400));
  };

  startBlinking();
  animateEyes();
}

/* =========================================================================
   6. BILINGUAL AI CONVERSATIONAL ASSISTANT (Hindi & English Engine)
   ========================================================================= */
function initChatbot() {
  const trigger = document.getElementById("ai-floating-trigger");
  const chatWindow = document.getElementById("ai-chat-window");
  const closeBtn = document.getElementById("close-chat-btn");
  const sendBtn = document.getElementById("chat-send-btn");
  const voiceToggle = document.getElementById("chat-voice-toggle");
  const chatInput = document.getElementById("chat-user-input");
  
  // Navigation headers and trigger linkages
  const navChatBtn = document.getElementById("open-chat-btn-nav");
  const heroChatBtn = document.getElementById("hero-ai-btn");

  if (!chatWindow) return;

  // Toggle Chat Drawers
  const openChat = () => {
    chatWindow.classList.remove("chat-closed");
    gsap.fromTo(chatWindow, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.3)" });
    chatInput.focus();
  };

  const closeChat = () => {
    if (state.speechSynth) {
      state.speechSynth.cancel(); // Stop talking on close
      hideWaveform();
    }
    gsap.to(chatWindow, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        chatWindow.classList.add("chat-closed");
      }
    });
  };

  trigger.addEventListener("click", openChat);
  if (navChatBtn) navChatBtn.addEventListener("click", openChat);
  if (heroChatBtn) heroChatBtn.addEventListener("click", openChat);
  
  closeBtn.addEventListener("click", closeChat);

  // Send Messages Actions
  sendBtn.addEventListener("click", handleUserMessage);
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleUserMessage();
  });

  // Audio speech voice feedback controller
  voiceToggle.addEventListener("click", () => {
    state.voiceEnabled = !state.voiceEnabled;
    if (state.voiceEnabled) {
      voiceToggle.className = "voice-btn-active";
      voiceToggle.querySelector("i").className = "fa-solid fa-volume-high";
      
      // Speak the last AI message
      const aiMsgs = document.querySelectorAll(".ai-msg");
      if (aiMsgs.length > 0) {
        const lastMsg = aiMsgs[aiMsgs.length - 1];
        const textSpan = lastMsg.querySelector("span");
        if (textSpan) {
          speak(textSpan.textContent);
        }
      }
    } else {
      voiceToggle.className = "voice-btn-inactive";
      voiceToggle.querySelector("i").className = "fa-solid fa-volume-xmark";
      if (state.speechSynth) {
        state.speechSynth.cancel();
        hideWaveform();
      }
    }
  });

}

// User Message handler
function handleUserMessage() {
  const inputEl = document.getElementById("chat-user-input");
  const query = inputEl.value.trim();
  if (!query) return;

  appendMessage(query, "user-msg");
  inputEl.value = "";
  showTypingIndicator();

  const response = processQuery(query);
  const delay = 650 + Math.min(query.length * 30, 800) + Math.min(response.length * 6, 500);

  setTimeout(() => {
    hideTypingIndicator();
    sendAIMessage(response);
  }, delay);
}

// format Markdown symbols like **bold** and [text](link) to HTML tags
function formatMarkdown(text) {
  let formatted = text;
  // Bold: **text** -> <strong>text</strong>
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // Links: [label](url) -> <a href="url"...>label</a>
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color: #ff003c; text-decoration: underline; font-weight: 600;">$1</a>');
  return formatted;
}

// Insert message to DOM
function appendMessage(text, className) {
  const area = document.getElementById("chat-messages-area");
  if (!area) return;

  const msg = document.createElement("div");
  msg.className = `message ${className}`;

  const htmlContent = formatMarkdown(text).replace(/\n/g, "<br>");

  if (className === "ai-msg") {
    // Text wrapper
    const textSpan = document.createElement("span");
    textSpan.innerHTML = htmlContent;
    msg.appendChild(textSpan);

    // Speak button
    const speakBtn = document.createElement("button");
    speakBtn.className = "msg-speak-btn";
    speakBtn.title = "Suniye / Listen";
    speakBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    
    speakBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const oldState = state.voiceEnabled;
      state.voiceEnabled = true;
      speak(text);
      state.voiceEnabled = oldState;
    });
    msg.appendChild(speakBtn);
  } else {
    msg.innerHTML = htmlContent;
  }

  area.appendChild(msg);

  // Scroll to bottom
  area.scrollTop = area.scrollHeight;
}

// Typing Indicator
function showTypingIndicator() {
  const area = document.getElementById("chat-messages-area");
  if (!area) return;

  const indicator = document.createElement("div");
  indicator.className = "typing-indicator";
  indicator.id = "ai-typing-ind";
  indicator.innerHTML = `
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
  `;
  area.appendChild(indicator);
  area.scrollTop = area.scrollHeight;
}

function hideTypingIndicator() {
  const ind = document.getElementById("ai-typing-ind");
  if (ind) ind.remove();
}

// Speaking Waveform Overlay toggler
function showWaveform() {
  const wave = document.getElementById("voice-waveform");
  if (wave) wave.classList.remove("waveform-hidden");
}

function hideWaveform() {
  const wave = document.getElementById("voice-waveform");
  if (wave) wave.classList.add("waveform-hidden");
}

// Core speech utility
function speak(text) {
  if (!state.voiceEnabled || !state.speechSynth) return;

  // Stop current utterance if any
  state.speechSynth.cancel();

  // Clean strings from HTML tags or markdown links for reading
  const cleanText = text.replace(/<[^>]*>/g, "").replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1").replace(/[*#•]/g, "").replace(/\/\//g, "");

  state.speechUtterance = new SpeechSynthesisUtterance(cleanText);

  // Detect language for voice loading selection
  // If text contains Hinglish words or Devanagari, use Hindi voice if available
  const hasHindiChar = /[\u0900-\u097F]/.test(cleanText);
  const hinges = ["main", "aap", "hoon", "hai", "ko", "me", "mein", "se", "aur", "ke", "baare", "puch", "sakte", "kar", "batao", "kaise", "ho", "kiya", "banaya", "saal", "hain", "ke liye", "pooch", "apne", "details", "contact"];
  const hasHinglish = hinges.some(word => cleanText.toLowerCase().split(/\s+/).includes(word));

  if ((hasHindiChar || hasHinglish) && state.hindiVoice) {
    state.speechUtterance.voice = state.hindiVoice;
    state.speechUtterance.lang = "hi-IN";
  } else if (state.englishVoice) {
    state.speechUtterance.voice = state.englishVoice;
    state.speechUtterance.lang = "en-US";
  }

  // Waveform events
  state.speechUtterance.onstart = () => showWaveform();
  state.speechUtterance.onend = () => hideWaveform();
  state.speechUtterance.onerror = () => hideWaveform();

  state.speechSynth.speak(state.speechUtterance);
}

// Send and trigger AI voice output
function sendAIMessage(text) {
  appendMessage(text, "ai-msg");
  speak(text);
}


/* =========================================================================
   7. AI CONVERSATIONAL QUERY PROCESSOR (NLP Keywords Parser)
   ========================================================================= */

function detectHinglish(q) {
  if (/[\u0900-\u097F]/.test(q)) return true;
  const markers = [
    "kaise", "kya", "kab", "kaha", "kidhar", "batao", "dikhao", "mujhe", "aap", "tum",
    "hai", "hoon", "nahi", "pata", "bhai", "yaar", "karo", "chahte", "sakte", "baare",
    "mein", "kyun", "namaste", "dhanyawad", "shukriya", "alvida", "kitne", "kitna",
    "kaun", "sunao", "bata", "pooch", "puch", "kar", "kiya", "banaya", "saal", "hain"
  ];
  const words = q.toLowerCase().split(/[\s,?.!]+/);
  return markers.filter((m) => words.includes(m) || q.includes(m)).length >= 1;
}

function isPortfolioRelated(q) {
  return matchKeywords(q, [
    "preet", "passi", "portfolio", "project", "certificate", "certification", "credential",
    "skill", "resume", "cv", "contact", "email", "phone", "whatsapp", "linkedin", "github",
    "instagram", "excel", "sql", "python", "power bi", "powerbi", "tutedude", "data analyst",
    "data analytics", "experience", "education", "hire", "intern", "job", "work", "dashboard",
    "dax", "vba", "pandas", "numpy", "streamlit", "plotly", "database", "forecast", "churn",
    "resume", "developer", "analyst"
  ]);
}

function isOffTopic(q) {
  const offTopicKeywords = [
    "weather", "mausam", "barish", "rain", "temperature", "garmi", "sardi",
    "cricket", "football", "ipl", "match score", "kohli", "dhoni",
    "movie", "film", "song", "gaana", "actor", "actress", "netflix",
    "politics", "minister", "modi", "election", "government", "parliament",
    "bitcoin", "crypto", "ethereum", "share market tip",
    "recipe", "khana", "cook", "restaurant", "pizza", "biryani",
    "homework", "solve this", "math problem", "equation",
    "capital of", "girlfriend", "boyfriend", "dating", "love story",
    "today news", "aaj ki khabar", "khabar", "headline",
    "write code for", "debug my", "fix my code", "hack", "password crack"
  ];

  if (matchKeywords(q, offTopicKeywords)) return true;

  if (/^(what is|who is|what's|who's|define|explain|tell me about)\s/.test(q)) {
    if (!isPortfolioRelated(q)) return true;
  }

  if (matchKeywords(q, ["who is", "kaun hai"]) && !matchKeywords(q, ["preet", "passi", "assistense", "assistant"])) {
    return true;
  }

  return false;
}

function getUnknownResponse(isHinglish, wasPortfolioAttempt) {
  if (isHinglish) {
    if (wasPortfolioAttempt) {
      return "Sorry bhai, is baare mein mujhe portfolio me koi info nahi mili. 🙏\n\nLekin main ye bata sakta hoon:\n• Preet ke **projects** (Excel, SQL, Python, Power BI)\n• **Certificates** aur skills\n• **Contact** details aur resume\n\nInme se kuch aur poochna chaoge?";
    }
    return "Sorry yaar, ye mujhe nahi pata. 🙏\n\nMain sirf **Preet Passi** ke portfolio ke baare me help kar sakta hoon — unke projects, skills, certificates ya contact details.\n\nAap mujhse kuch aur pooch sakte ho!";
  }

  if (wasPortfolioAttempt) {
    return "Sorry, I don't have that information in Preet's portfolio. 🙏\n\nBut I can help with:\n• Preet's **projects** (Excel, SQL, Python, Power BI)\n• **Certificates** and skills\n• **Contact** details and resume\n\nWould you like to ask about any of these?";
  }

  return "Sorry, I don't know the answer to that. 🙏\n\nI'm here to help with **Preet Passi's** portfolio only — his projects, skills, certificates, and contact info.\n\nFeel free to ask me something else about Preet!";
}

function processQuery(query) {
  const q = query.trim().toLowerCase();
  const isHinglish = detectHinglish(q);

  const hasGreeting = matchKeywords(q, ["hello", "hi", "namaste", "hey", "kaise ho", "how are you", "yo", "sup", "hiii", "good morning", "good evening", "kya haal hai", "aur bhai", "or bhai", "kya chal raha hai"]);
  const hasTopicOrQuestion = matchKeywords(q, ["what", "who", "when", "where", "why", "how", "kitna", "kitne", "kitni", "age", "phone", "mobile", "email", "contact", "project", "skill", "certificate", "resume", "experience", "tutedude", "excel", "sql", "python", "power bi", "powerbi", "database", "education", "college", "school", "study", "degree", "achievement", "award", "instagram", "insta", "preet", "passi"]);

  // 1. LANGUAGE SWITCHING
  if (matchKeywords(q, ["in english", "english please", "speak english", "switch to english", "tell me in english", "use english"])) {
    return "Sure! I'll reply in English from here. Ask me about Preet's projects, certificates, skills, or contact details.";
  }
  if (matchKeywords(q, ["in hinglish", "hinglish please", "speak hinglish", "switch to hinglish", "hinglish me", "hindi me", "use hinglish", "hindi please"])) {
    return "Theek hai! Ab main Hinglish me reply karunga. Preet ke projects, certificates, skills ya contact ke baare me pooch lo.";
  }

  // 2. AI IDENTITY (not Preet)
  if (matchKeywords(q, ["who are you", "what are you", "tum kaun", "aap kaun", "your name", "tumhara naam"])) {
    if (isHinglish) {
      return "Main **Assistense** hoon — Preet Passi ke portfolio ka AI assistant. 😊\n\nMujhse aap unke projects, skills, certificates ya contact details ke baare me pooch sakte ho.";
    }
    return "I'm **Assistense** — Preet Passi's portfolio AI assistant. 😊\n\nYou can ask me about his projects, skills, certificates, or contact details.";
  }

  // 3. OFF-TOPIC — honest "don't know"
  if (isOffTopic(q) && !isPortfolioRelated(q)) {
    return getUnknownResponse(isHinglish, false);
  }

  // 4. UNAVAILABLE / OUT-OF-SCOPE INFO
  if (matchKeywords(q, ["microsoft", "udemy", "coursera", "great learning", "google certificate", "ibm certificate"])) {
    return getUnknownResponse(isHinglish, true);
  }

  if (matchKeywords(q, ["college name", "university name", "school name", "kis college", "kahan padhe", "kis school", "which college", "which university"]) && !matchKeywords(q, ["tutedude"])) {
    return getUnknownResponse(isHinglish, true);
  }

  let prefix = "";
  if (hasGreeting && hasTopicOrQuestion && matchKeywords(q, ["aur bhai", "or bhai", "bhai"]) && matchKeywords(q, ["project", "work", "portfolio", "showcase"])) {
    prefix = isHinglish ? "Main badhiya hoon! 😄\n\n" : "I'm doing great! 😄\n\n";
  }

  const isProjectQuery = matchKeywords(q, ["project", "projects", "work", "portfolio", "showcase", "dashboard", "app", "predict", "model", "build", "made", "make", "create", "engine", "tracker", "forecasting"]);
  const isCertificateQuery = matchKeywords(q, ["certificate", "certification", "credential", "got", "get", "obtain", "provider", "tutedude", "source", "where did", "where from", "who gave"]);
  const isSkillQuery = matchKeywords(q, ["skill", "tool", "know", "learn", "ability", "proficient", "expert", "vba", "macro", "dax", "query", "pandas", "numpy"]);

  // EXCEL
  if (matchKeywords(q, ["excel", "sheet"])) {
    if (isCertificateQuery) {
      if (isHinglish) {
        return prefix + "Preet ne apna **Advanced Excel with AI** certificate **TuteDude** se liya hai.";
      } else {
        return prefix + "Preet obtained his **Advanced Excel with AI** certification from **TuteDude**.";
      }
    }
    if (isProjectQuery) {
      if (isHinglish) {
        return prefix + "📈 **Excel Project Details:**\n\n**Advanced Sales Forecasting & AI Dashboard**\n• Is project me sales forecasting, regional performance, aur charts build kiye hain.\n• **Power Query** aur **VBA macros** use karke workbook automation aur AI dynamic predictions build kiya hai.";
      } else {
        return prefix + "📈 **Excel Project Details:**\n\n**Advanced Sales Forecasting & AI Dashboard**\n• Features advanced sales velocity computation, automated regional spreadsheets, and interactive visual charts.\n• Leverages Power Query and VBA macros to automate spreadsheet workflows and implement linear AI forecasting lines.";
      }
    }
    if (isSkillQuery || matchKeywords(q, ["what", "how", "details"])) {
      if (isHinglish) {
        return prefix + "Preet ke paas Excel me advanced skills hain, jaise: **Power Query**, **VBA/Macros**, **Pivot Tables**, nested logical formulas, aur AI-powered spreadsheet forecasting.";
      } else {
        return prefix + "Preet's Excel skills include: **Power Query**, **VBA/Macros**, **Pivot Tables**, nested logical functions, and AI-powered forecasting models.";
      }
    }
    if (isHinglish) {
      return prefix + "Aap Preet ke Excel projects dekhna chahte hain ya certificates? Dono ke details portfolio me available hain!";
    } else {
      return prefix + "Are you interested in Preet's Excel projects or his certificates? Both are detailed in the portfolio!";
    }
  }

  // SQL INTENTS
  if (matchKeywords(q, ["sql", "database", "postgresql", "mysql"])) {
    if (isCertificateQuery) {
      if (isHinglish) {
        return prefix + "Preet ne SQL and Database design ka certification **TuteDude** ke Data Analytics program ke under completed kiya hai.";
      } else {
        return prefix + "Preet completed his SQL and Database design training as part of his **Data Analytics** certification from **TuteDude**.";
      }
    }
    if (isProjectQuery) {
      if (isHinglish) {
        return prefix + "🗄️ **SQL Projects (Total: 2):**\n\n1. **E-commerce Customer Retention Database:** Relational databases build kiye hain. Isme complex CTEs and window functions code likha hai to calculate customer retention metrics.\n2. **Healthcare Operations Cohort Analysis:** Public medical flow datasets optimize kiye hain stored procedures aur query joins ke through metrics extraction ke liye.";
      } else {
        return prefix + "🗄️ **SQL Projects (Total: 2):**\n\n1. **E-commerce Customer Retention Database:** Designed relational models, utilizing CTE queries and window functions to compute customer cohort retention velocity.\n2. **Healthcare Operations Cohort Analysis:** Optimized patient data structures to identify flow trends and admission metrics.";
      }
    }
    if (isSkillQuery || matchKeywords(q, ["what", "how", "details"])) {
      if (isHinglish) {
        return prefix + "Preet ke SQL skills me: relational database schema design, index optimization, complex **CTEs (Common Table Expressions)**, **Window Functions** (Rank, Lead/Lag), Joins, aur database normalization standard practice include hain.";
      } else {
        return prefix + "Preet's SQL skills include: relational schema design, query optimization, complex **CTEs**, **Window Functions**, Views, and database normalization.";
      }
    }
    if (isHinglish) {
      return prefix + "Aap Preet ke SQL projects explore karna chahte hain ya unke databases/skills?";
    } else {
      return prefix + "Would you like to explore Preet's SQL projects or his database design skills?";
    }
  }

  // PYTHON INTENTS
  if (matchKeywords(q, ["python", "plotly", "dash", "streamlit", "scikit"])) {
    if (isCertificateQuery) {
      if (isHinglish) {
        return prefix + "Preet ne Python certification **TuteDude** ke Data Analytics studies ke under completed kiya hai.";
      } else {
        return prefix + "Preet holds Python proficiency as part of his **Data Analytics** certification from **TuteDude**.";
      }
    }
    if (isProjectQuery) {
      if (isHinglish) {
        return prefix + "🐍 **Python Projects (Total: 2):**\n\n1. **Interactive Cloud-Deployed Financial Dashboard (Live App):** Streamlit aur Plotly framework ke sath real-time market API visualization dashboard banaya hai, jo live hosting (https://customer-risk-dashboard.streamlit.app/) par hosted hai.\n2. **Customer Churn Analysis & Profiling:** Historical customer datasets ko analyze karke user churn metrics aur churn behaviors ko identify kiya hai using Pandas and Matplotlib.";
      } else {
        return prefix + "🐍 **Python Projects (Total: 2):**\n\n1. **Interactive Cloud-Deployed Financial Dashboard (Live App):** Developed using Streamlit & Plotly to display real-time finance index APIs. Hosted live at Streamlit Cloud (https://customer-risk-dashboard.streamlit.app/)!\n2. **Customer Churn Analysis & Profiling:** Analyzed historical retail customer datasets, identifying correlation indicators and profiling churn patterns using Pandas and Matplotlib.";
      }
    }
    if (isSkillQuery || matchKeywords(q, ["what", "how", "details"])) {
      if (isHinglish) {
        return prefix + "Preet ke Python skills me: **Pandas & NumPy** for data manipulation, **Plotly/Matplotlib** aur **Seaborn** for data visualization, and automated data cleaning scripts include hain.";
      } else {
        return prefix + "Preet's Python skills include: **Pandas & NumPy** for data cleaning and manipulation, and **Plotly**, **Matplotlib**, and **Seaborn** for custom charts.";
      }
    }
    if (isHinglish) {
      return prefix + "Aap Preet ke Python code repositories dekhna chahte hain ya Python data analysis projects?";
    } else {
      return prefix + "Are you looking for Preet's Python projects or his data analysis libraries?";
    }
  }

  // POWER BI INTENTS
  if (matchKeywords(q, ["power bi", "powerbi", "dax"])) {
    if (isCertificateQuery) {
      if (isHinglish) {
        return prefix + "Preet ne Power BI dashboard structures ki training **TuteDude** ke Data Analytics path me receive ki hai.";
      } else {
        return prefix + "Preet completed Power BI training as part of his **Data Analytics** course at **TuteDude**.";
      }
    }
    if (isProjectQuery) {
      if (isHinglish) {
        return prefix + "📊 **Power BI Dashboards (Total: 3):**\n\n1. **Executive Sales & Revenue Report:** Global profit margins, sales velocity, aur growth patterns track karta hai.\n2. **Supply Chain Operations Tracker:** Carrier logistics schedules, transit costs, and transit times (12% efficiency boost) inspect karta hai.\n3. **HR Talent Analytics:** Employee performance dynamics aur appraisals monitor karta hai.";
      } else {
        return prefix + "📊 **Power BI Dashboards (Total: 3):**\n\n1. **Executive Sales & Revenue Report:** Tracks corporate revenue volume, profit margins, and dynamic growth visual metrics.\n2. **Supply Chain Operations Tracker:** Analyzes logistics carrier efficiency and shipping costs (boosted efficiency by 12%).\n3. **HR Talent intelligence:** Workforce appraising, recruitment channels, and employee retention tracker.";
      }
    }
    if (isSkillQuery || matchKeywords(q, ["what", "how", "details"])) {
      if (isHinglish) {
        return prefix + "Preet ko Power BI me: **DAX calculations**, custom data modeling, Row-Level Security, dynamic KPIs mapping, and interactive drill-downs report creation ki deep knowledge hai.";
      } else {
        return prefix + "Preet's Power BI expertise covers: **DAX calculations**, data modeling, Row-Level Security, dynamic KPI indicators, and interactive drill-down views.";
      }
    }
    if (isHinglish) {
      return prefix + "Aap Preet ke Power BI dashboards details dekhna chahte hain ya DAX analysis skills?";
    } else {
      return prefix + "Would you like to review Preet's Power BI dashboards or his DAX modeling skills?";
    }
  }

  // Age specific
  if (matchKeywords(q, ["age", "umar", "birthday", "old", "how old", "kitne saal", "kitni saal"])) {
    if (isHinglish) {
      return prefix + "Preet abhi **18 saal** ke hain.";
    } else {
      return prefix + "Preet is **18 years old**.";
    }
  }

  // Phone specific
  if (matchKeywords(q, ["phone", "mobile", "whatsapp", "call", "tele", "phone number", "contact number"])) {
    if (isHinglish) {
      return prefix + "Preet ka phone number **+91 93159 71839** hai. Aap unhe call kar sakte hain ya WhatsApp par chat kar sakte hain!";
    } else {
      return prefix + "Preet's phone number is **+91 93159 71839**. You can reach him via phone call or WhatsApp!";
    }
  }

  // Email specific
  if (matchKeywords(q, ["email", "mail", "gmail", "address", "email id"])) {
    if (isHinglish) {
      return prefix + "Preet ki email ID **preetpassi570@gmail.com** hai. Aap unhe kisi bhi work-related discussion ke liye mail bhej sakte hain!";
    } else {
      return prefix + "You can email Preet at **preetpassi570@gmail.com** for collaborations or inquiries!";
    }
  }

  // Instagram specific
  if (matchKeywords(q, ["instagram", "insta", "instagram id", "insta id"])) {
    if (isHinglish) {
      return prefix + "Preet ka Instagram handle **@preet_passii** hai. Aap unhe Instagram par [yahan connect](https://instagram.com/preet_passii) kar sakte hain!";
    } else {
      return prefix + "Preet's Instagram handle is **preet_passii**. You can view his profile and message him [right here on Instagram](https://instagram.com/preet_passii)!";
    }
  }

  // General Contact / Profile
  if (matchKeywords(q, ["contact", "details", "profile", "social"])) {
    if (isHinglish) {
      return prefix + "👤 **Preet ke Details:**\n\n• **Age**: 18 saal\n• **Email**: preetpassi570@gmail.com\n• **Phone**: +91 93159 71839\n• **Instagram**: [preet_passii](https://instagram.com/preet_passii)\n\nAap contact karne ke liye email, phone call ya instagram par text kar sakte hain!";
    } else {
      return prefix + "👤 **Preet's Profile & Contacts:**\n\n• **Age**: 18 years old\n• **Email**: preetpassi570@gmail.com\n• **Phone**: +91 93159 71839\n• **Instagram**: [preet_passii](https://instagram.com/preet_passii)\n\nFeel free to reach out via email, phone call, or direct message on Instagram!";
    }
  }

  // General Certificates
  if (matchKeywords(q, ["certificate", "credential", "tutedude", "qualification", "certification"])) {
    if (isHinglish) {
      return prefix + "🏆 **TuteDude Certifications (Total: 4):**\n\n1. **Data Analytics**\n2. **Advanced Excel with AI**\n3. **Digital Marketing**\n4. **FMV (Financial Modeling & Valuation)**\n\nMaine images folder mein actual certificates upload kar diye hain. Click on 'View Certificate' to see them! Isse direct PDF certificate open ho jayega.";
    } else {
      return prefix + "🏆 **Certifications (Total: 4 from TuteDude):**\n\n1. **Data Analytics**: Covers statistics, SQL database architectures, and Python scripting.\n2. **Advanced Excel with AI**: Formula structures, VBA scripting, and spreadsheet AI modules.\n3. **Digital Marketing**: Search engine optimization (SEO), campaign monitoring, and CRO.\n4. **Financial Modeling & Valuation (FMV)**: Corporate DCF spreadsheet models and investment analysis.";
    }
  }

  // General Projects Overview
  if (matchKeywords(q, ["project", "work", "portfolio", "showcase"])) {
    if (isHinglish) {
      return prefix + "📂 **Project Inventory Overview:**\n\n• **1 Excel Project**: Advanced Forecasting Dashboard with AI forecasting.\n• **2 SQL Projects**: E-commerce loyalty schema & Healthcare cohort tracker.\n• **2 Python Projects**: Cloud-deployed Plotly Dash web-app & Churn analysis model.\n• **3 Power BI Projects**: Sales executive, Logistics Operations, and HR Analytics dashboards.\n\nType in the specific stack (like 'SQL' or 'Python') to explore code structures.";
    } else {
      return prefix + "📂 **Project Inventory Overview:**\n\n• **1 Excel Project**: Advanced Forecasting Dashboard with AI forecasting.\n• **2 SQL Projects**: E-commerce loyalty database & Healthcare cohort tracker.\n• **2 Python Projects**: Cloud-deployed Plotly Dash web-app & Churn analysis model.\n• **3 Power BI Projects**: Sales executive, Logistics Operations, and HR Analytics dashboards.\n\nType in the specific stack (like 'SQL' or 'Python') to explore code structures.";
    }
  }

  // Resume Specific
  if (matchKeywords(q, ["resume", "cv"])) {
    if (isHinglish) {
      return prefix + "Preet ka official Resume [yahan se download](images/Resume.pdf) kiya ja sakta hai! Aap page ke header me link toggle par click karke bhi PDF view kar sakte hain.";
    } else {
      return prefix + "Preet's official Resume is available for download [right here](images/Resume.pdf)! You can also download it from the top-right button in the navbar.";
    }
  }

  // Education Specific
  if (matchKeywords(q, ["education", "college", "school", "study", "degree"])) {
    if (isHinglish) {
      return prefix + "Preet ne **Commerce** se **CBSE 12th class** complete ki hai. Ab wo **B.Com** kar rahe hain, aur **2028 mein graduation complete kar lenge**.";
    } else {
      return prefix + "Preet completed his **CBSE 12th class** in the **Commerce** stream. He is currently pursuing **B.Com** and is expected to complete his graduation in **2028**.";
    }
  }

  // Experience Specific
  if (matchKeywords(q, ["experience", "job", "intern", "work history"])) {
    if (isHinglish) {
      return prefix + "Preet ke paas portfolio me listed diverse project development experience hai (8+ projects). Halanki, unhe abhi kisi formal organization/company me commercial job ka experience nahi hai.";
    } else {
      return prefix + "Preet has build 8+ data projects demonstrating strong hands-on skills, but does not have commercial corporate work experience in a company yet.";
    }
  }

  // Achievements Specific
  if (matchKeywords(q, ["achievement", "award", "credential"])) {
    if (isHinglish) {
      return prefix + "Preet ne 4 complex certifications (TuteDude verified) complete kiye hain, real-time market API Streamlit dashboard deploy kiya hai, aur operational logistics dashboard build kiya hai, jisne operations runtime efficiency ko 12% boost kiya!";
    } else {
      return prefix + "Preet's key achievements include earning 4 training credentials and deploying multiple analytical dashboards, including a Streamlit cloud app and a logistics dashboard that improved performance metrics by 12%.";
    }
  }

  // About Preet (only when clearly about Preet, not random "you" questions)
  if (
    matchKeywords(q, ["about preet", "preet ke baare", "preet kaun", "who is preet", "tell me about preet", "preet ki intro"]) ||
    (matchKeywords(q, ["about", "intro", "objective"]) && matchKeywords(q, ["preet", "passi"])) ||
    matchKeywords(q, ["preet ka naam", "naam kya hai"]) && matchKeywords(q, ["preet", "passi"])
  ) {
    if (isHinglish) {
      return prefix + "Preet Passi ek **Entry Level Data Analyst** hain jo Python, SQL, Excel aur Power BI se data ko insights me convert karte hain.\n\nUnhone **TuteDude** se 4 certifications complete kiye hain aur **8+ projects** build kiye hain. Abhi wo **open to work** hain.";
    }
    return prefix + "Preet Passi is an **Entry Level Data Analyst** who turns raw data into insights using Python, SQL, Excel, and Power BI.\n\nHe has **4 certifications** from TuteDude, **8+ projects**, and is currently **open to work**.";
  }

  // General skills question (in portfolio context)
  if (isSkillQuery && !matchKeywords(q, ["excel", "sql", "python", "power bi", "powerbi", "dax", "vba", "pandas"])) {
    if (isHinglish) {
      return prefix + "Preet ke main skills hain:\n\n• **Python** — Pandas, NumPy, Matplotlib, Seaborn\n• **SQL** — CTEs, Window Functions, DB design\n• **Excel** — Power Query, VBA, Pivot Tables\n• **Power BI** — DAX, Data Modeling, Dashboards\n\nKisi specific skill ke baare me detail chahiye?";
    }
    return prefix + "Preet's core skills include:\n\n• **Python** — Pandas, NumPy, Matplotlib, Seaborn\n• **SQL** — CTEs, Window Functions, DB design\n• **Excel** — Power Query, VBA, Pivot Tables\n• **Power BI** — DAX, Data Modeling, Dashboards\n\nWant details on any specific skill?";
  }

  // 4. PURE GREETINGS
  // PURE GREETINGS
  if (hasGreeting && !hasTopicOrQuestion) {
    if (matchKeywords(q, ["aur bhai", "or bhai"])) {
      return isHinglish
        ? "Sab mast bhai! 😄 Tum sunao kaise ho?\n\nWaise Preet ke projects, certificates ya skills ke baare me kuch poochna ho to bata dena."
        : "All good! 😄 How about you?\n\nIf you want to know about Preet's projects, certificates, or skills, just ask.";
    }
    if (matchKeywords(q, ["kya haal hai", "kaise ho", "how are you"])) {
      return isHinglish
        ? "Main theek hoon, thanks for asking! 😊\n\nPreet ke portfolio ke baare me kuch jaanna hai?"
        : "I'm doing well, thanks for asking! 😊\n\nWant to know anything about Preet's portfolio?";
    }
    if (matchKeywords(q, ["kya chal raha hai"])) {
      return isHinglish
        ? "Bas yahi portfolio par visitors ki help kar raha hoon! 😄\n\nTum batao — Preet ke projects ya skills ke baare me kuch poochna hai?"
        : "Just helping visitors on this portfolio! 😄\n\nAnything you'd like to know about Preet's projects or skills?";
    }
    if (matchKeywords(q, ["good morning"])) {
      return isHinglish
        ? "Good morning! ☀️ Aapka din achha ho.\n\nPreet ke certificates ya projects ke baare me kuch poochna hai?"
        : "Good morning! ☀️ Hope you have a great day.\n\nWant to explore Preet's certificates or projects?";
    }
    if (matchKeywords(q, ["good evening"])) {
      return isHinglish
        ? "Good evening! 🌇 Kaisa raha din?\n\nPreet ke portfolio me kuch explore karna chaoge?"
        : "Good evening! 🌇 How was your day?\n\nWant to explore Preet's portfolio?";
    }
    if (isHinglish || matchKeywords(q, ["namaste"])) {
      return "Namaste! 👋 Main Assistense hoon.\n\nPreet ke projects, skills, certificates ya contact ke baare me pooch sakte ho.";
    }
    return "Hey! 👋 I'm Assistense, Preet's portfolio assistant.\n\nAsk me about his projects, skills, certificates, or contact details.";
  }

  // THANKS / BYE / JOKES
  if (matchKeywords(q, ["thank", "thanks", "dhanyawad", "shukriya"])) {
    return isHinglish
      ? "Welcome! 😊 Aur kuch poochna ho to bata dena."
      : "You're welcome! 😊 Let me know if you need anything else about Preet.";
  }
  if (matchKeywords(q, ["bye", "tata", "alvida", "see you"])) {
    return isHinglish
      ? "Bye! 👋 Achha laga baat karke. Kabhi bhi wapas aa jana."
      : "Bye! 👋 Nice chatting. Come back anytime!";
  }
  if (matchKeywords(q, ["joke", "chutkula", "funny"])) {
    return isHinglish
      ? "Ek analyst doctor ke paas gaya. Doctor ne bola blood pressure badh gaya hai. Analyst ne kaha: 'Shayad outlier hai, dobara query run karo!' 😂"
      : "Why did the data analyst break up with the database? Too many bad relationships! 😂";
  }

  // DEFAULT — honest fallback
  if (isPortfolioRelated(q)) {
    return getUnknownResponse(isHinglish, true);
  }

  return getUnknownResponse(isHinglish, false);
}

// Utility keyword array matcher helper
function matchKeywords(text, keywords) {
  const words = text.toLowerCase().split(/[\s,?.!]+/);
  return keywords.some(k => {
    const kLower = k.toLowerCase();
    if (kLower.includes(" ")) {
      return text.includes(kLower);
    }
    return words.includes(kLower);
  });
}

// 10. PROJECT LIGHTBOX MODAL TRIGGER
function initProjectLightbox() {
  const projectCards = document.querySelectorAll(".project-card");
  const lightbox = document.getElementById("project-lightbox");
  const closeBtn = document.getElementById("project-lightbox-close-btn");

  if (!lightbox || !closeBtn) return;

  const projectDetails = {
    "proj-excel": {
      title: "Advanced Sales Forecasting & AI Dashboard",
      tag: "Excel",
      icon: "fa-regular fa-file-excel",
      tech: ["Power Query", "Pivot Tables", "VBA/Macros", "AI Forecasting"],
      desc: "A high-end dynamic financial dashboard built in Excel to process raw business transactions and forecast future sales trends. It leverages advanced formula trees, automated formatting, and pivot consolidation to analyze sales velocity across products and regions.",
      features: [
        "Built automated data cleansing pipelines using Power Query (M Language).",
        "Created VBA macro routines to automate periodic report generation and email shipping.",
        "Integrated regression analysis and AI-based linear forecasting curves.",
        "Constructed cohort views to track customer purchase frequency and retention metrics."
      ]
    },
    "proj-sql-ecommerce": {
      title: "E-commerce Customer Retention Database",
      tag: "SQL",
      icon: "fa-solid fa-database",
      tech: ["PostgreSQL", "CTEs & Windows", "DB Normalization", "Indexes"],
      desc: "Designed and optimized a multi-table relational schema for a digital retail platform. Written complex SQL analytics logs targeting metrics such as customer lifetime value (CLV), repurchase rate, and temporal cohort performance.",
      features: [
        "Engineered clean database schema conforming to 3rd Normal Form (3NF).",
        "Wrote complex analytical queries using window functions (RANK, LEAD/LAG, SUM OVER).",
        "Created Common Table Expressions (CTEs) for multi-pass calculations of retention rates.",
        "Optimized query run times by 40% using indices and partitioning strategies."
      ]
    },
    "proj-sql-healthcare": {
      title: "Healthcare Operations Cohort Analysis",
      tag: "SQL",
      icon: "fa-solid fa-server",
      tech: ["MySQL", "Stored Procedures", "Window Functions", "Joins & Views"],
      desc: "A clinical database analytics model optimizing medical facility patient flow. Worked on transaction queries to trace hospital admission metrics, treatment response groups, and scheduling bottlenecks.",
      features: [
        "Created views to simplify dashboard consumption of complex medical transaction joins.",
        "Constructed stored procedures to automate periodic updates of cohort analysis reports.",
        "Analyzed average clinical stay durations using aggregate conditional math.",
        "Ensured database compliance with patient security guidelines."
      ]
    },
    "proj-python-streamlit": {
      title: "Interactive Cloud-Deployed Financial Dashboard",
      tag: "Python",
      icon: "fa-brands fa-python",
      tech: ["Streamlit", "Plotly", "Pandas", "APIs", "Render"],
      desc: "A premium cloud-deployed Streamlit web application. It fetches real-time finance index APIs, computes moving averages, and presents interactive stock price trackers with technical charts.",
      features: [
        "Designed clean, responsive web interface using Streamlit framework.",
        "Fetched real-time financial indices using REST API endpoints.",
        "Generated interactive charts (Candlesticks, MACD, RSI) using Plotly.",
        "Deployed project directly to Streamlit Cloud with automatic git-triggered builds."
      ]
    },
    "proj-python-churn": {
      title: "Customer Churn Prediction Engine",
      tag: "Python",
      icon: "fa-solid fa-brain",
      tech: ["Scikit-Learn", "Pandas / NumPy", "Matplotlib", "Feature Eng"],
      desc: "An end-to-end Machine Learning pipeline resolving classification tasks for customer risk churn prediction. Evaluates consumer behavior models and identifies predictive churn triggers.",
      features: [
        "Engineered machine learning pipelines using Scikit-Learn structures.",
        "Processed feature scaling, category encoding, and missing data imputation.",
        "Evaluated performance using confusion matrices, ROC curves, and precision-recall graphs.",
        "Achieved 91% prediction accuracy using tuned ensemble models."
      ]
    },
    "proj-pbi-sales": {
      title: "Executive Revenue & Sales Dashboard",
      tag: "Power BI",
      icon: "fa-solid fa-chart-line",
      tech: ["DAX", "Data Modeling", "Power Query", "KPI Cards"],
      desc: "An executive analytics report tracking corporate revenue velocity. Leverages star schemas, DAX measures, and drill-down layouts to deliver regional sales intelligence.",
      features: [
        "Constructed clean star-schema relational model with fact-dimension splits.",
        "Wrote advanced DAX formulas for Year-over-Year (YoY) metrics and running totals.",
        "Created dynamic visual elements containing tooltips and regional heatmaps.",
        "Structured interactive filter menus allowing click-to-slice navigation."
      ]
    },
    "proj-pbi-supply": {
      title: "Supply Chain Logistics & Operations Tracker",
      tag: "Power BI",
      icon: "fa-solid fa-truck-ramp-box",
      tech: ["DAX", "Time Intelligence", "Geographical Maps", "Data Models"],
      desc: "A logistics operations intelligence report evaluating warehouse costs, shipment schedules, and carrier transit times. Reduced bottlenecks, boosting operational efficiency by 12%.",
      features: [
        "Engineered custom calendars for time intelligence functions.",
        "Constructed route efficiency cards comparing carrier schedules.",
        "Traced cost bottlenecks across warehouses using cost-allocation indicators.",
        "Published interactive dashboards with automatic data refresh triggers."
      ]
    },
    "proj-pbi-hr": {
      title: "HR Talent Acquisition & Performance Analytics",
      tag: "Power BI",
      icon: "fa-solid fa-users-gear",
      tech: ["DAX", "Drill-Downs", "Row-Level Security", "HR Metrics"],
      desc: "A workforce analytics report monitoring talent acquisition success and employee performance patterns. Resolves employee churn rates and recruiting funnel efficiency.",
      features: [
        "Designed dynamic recruitment funnel visualizations.",
        "Implemented Row-Level Security (RLS) to restrict view permissions based on user departments.",
        "Evaluated employee retention metrics and performance correlations.",
        "Integrated performance assessment grids."
      ]
    }
  };

  projectCards.forEach(card => {
    card.addEventListener("click", (e) => {
      // If clicking inside the links area, let it proceed to github/demo link direct
      if (e.target.closest(".project-links")) return;

      const id = card.id;
      const details = projectDetails[id];
      if (!details) return;

      // Populate elements
      document.getElementById("project-modal-icon").className = "project-modal-icon";
      document.getElementById("project-modal-icon").innerHTML = `<i class="${details.icon}"></i>`;
      document.getElementById("project-modal-tag").textContent = details.tag;
      document.getElementById("project-modal-title").textContent = details.title;
      document.getElementById("project-modal-description").textContent = details.desc;

      // Tech Stack List
      const techContainer = document.getElementById("project-modal-tech");
      techContainer.innerHTML = "";
      details.tech.forEach(t => {
        const badge = document.createElement("span");
        badge.textContent = t;
        techContainer.appendChild(badge);
      });

      // Features List
      const featuresContainer = document.getElementById("project-modal-features");
      featuresContainer.innerHTML = "";
      details.features.forEach(f => {
        const li = document.createElement("li");
        li.textContent = f;
        featuresContainer.appendChild(li);
      });

      // Anchor Links
      const githubBtn = card.querySelector(".github-link");
      const liveBtn = card.querySelector(".live-link");
      const modalGithub = document.getElementById("project-modal-github");
      const modalLive = document.getElementById("project-modal-live");

      if (githubBtn && githubBtn.href && !githubBtn.href.includes("ADD_YOUR_")) {
        modalGithub.href = githubBtn.href;
        modalGithub.style.display = "inline-block";
      } else {
        modalGithub.style.display = "none";
      }

      if (liveBtn && liveBtn.href && !liveBtn.href.includes("ADD_YOUR_")) {
        modalLive.href = liveBtn.href;
        modalLive.style.display = "inline-block";
      } else {
        modalLive.style.display = "none";
      }

      // Show lightbox
      lightbox.classList.remove("lightbox-hidden");
      document.body.style.overflow = "hidden"; // disable background scroll
    });
  });

  // Close Lightbox listeners
  closeBtn.addEventListener("click", closeProjectModal);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeProjectModal();
  });

  function closeProjectModal() {
    lightbox.classList.add("lightbox-hidden");
    document.body.style.overflow = "";
  }
}

/* =========================================================================
   8. WEB3FORMS CONTACT FORM PROCESSOR & VALIDATIONS
   ========================================================================= */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const phoneInput = document.getElementById("form-phone");
  const messageInput = document.getElementById("form-message");
  const submitBtn = document.getElementById("form-submit-btn");
  const spinner = document.getElementById("form-spinner");
  const toast = document.getElementById("contact-toast");
  const toastTitle = document.getElementById("toast-title");
  const toastDesc = document.getElementById("toast-desc");
  const toastIcon = document.getElementById("toast-icon");

  // Helpers to validate email and phone format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    // Allows optional '+' followed by 7 to 18 digits, spaces, or hyphens
    return /^\+?[0-9\s\-()]{7,18}$/.test(phone.trim());
  };

  // Show or hide inline errors
  const validateField = (input, errorId, condition, errorText) => {
    const formGroup = input.closest(".form-group");
    const errorEl = document.getElementById(errorId);
    
    if (condition) {
      formGroup.classList.remove("has-error");
      return true;
    } else {
      formGroup.classList.add("has-error");
      if (errorEl && errorText) errorEl.textContent = errorText;
      return false;
    }
  };

  // Real-time validation listeners
  nameInput.addEventListener("input", () => {
    validateField(nameInput, "error-name", nameInput.value.trim() !== "", "Name is required");
  });

  emailInput.addEventListener("input", () => {
    const val = emailInput.value.trim();
    if (val === "") {
      validateField(emailInput, "error-email", false, "Email is required");
    } else {
      validateField(emailInput, "error-email", isValidEmail(val), "Please enter a valid email address");
    }
  });

  phoneInput.addEventListener("input", () => {
    const val = phoneInput.value.trim();
    if (val === "") {
      validateField(phoneInput, "error-phone", false, "Phone number is required");
    } else {
      validateField(phoneInput, "error-phone", isValidPhone(val), "Please enter a valid phone number");
    }
  });

  messageInput.addEventListener("input", () => {
    validateField(messageInput, "error-message", messageInput.value.trim() !== "", "Message is required");
  });

  // Handle Form Submit via Fetch API (Web3Forms submission)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Run final validation check on all fields
    const isNameValid = validateField(nameInput, "error-name", nameInput.value.trim() !== "", "Name is required");
    
    const emailVal = emailInput.value.trim();
    const isEmailValid = emailVal === "" 
      ? validateField(emailInput, "error-email", false, "Email is required") 
      : validateField(emailInput, "error-email", isValidEmail(emailVal), "Please enter a valid email address");
      
    const phoneVal = phoneInput.value.trim();
    const isPhoneValid = phoneVal === ""
      ? validateField(phoneInput, "error-phone", false, "Phone number is required")
      : validateField(phoneInput, "error-phone", isValidPhone(phoneVal), "Please enter a valid phone number");
      
    const isMessageValid = validateField(messageInput, "error-message", messageInput.value.trim() !== "", "Message is required");

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      return;
    }

    // Set submitting loading state
    submitBtn.disabled = true;
    spinner.className = "spinner-visible";
    const originalBtnText = submitBtn.querySelector(".btn-text").textContent;
    submitBtn.querySelector(".btn-text").textContent = "Sending...";

    // POST form data using Web3Forms endpoint
    const formData = new FormData(form);
    
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
    .then(async (response) => {
      const result = await response.json();
      
      if (response.status === 200 || result.success) {
        // Success Toast Notification
        toastIcon.textContent = "✅";
        toastTitle.textContent = "Message Sent Successfully!";
        toastDesc.textContent = "Thank you for contacting me. I'll reply as soon as possible.";
        
        // Reset form inputs
        form.reset();
        
        // Clear validation error flags
        document.querySelectorAll(".form-group").forEach(group => {
          group.classList.remove("has-error");
        });
      } else {
        // Error Toast Notification
        toastIcon.textContent = "❌";
        toastTitle.textContent = "Failed to send message.";
        toastDesc.textContent = result.message || "Please try again later.";
      }
      showToast();
    })
    .catch((error) => {
      // Net/Server Failure Toast Notification
      toastIcon.textContent = "❌";
      toastTitle.textContent = "Failed to send message.";
      toastDesc.textContent = "Please check your network and try again later.";
      showToast();
    })
    .finally(() => {
      // Revert button and spinner states
      submitBtn.disabled = false;
      spinner.className = "spinner-hidden";
      submitBtn.querySelector(".btn-text").textContent = originalBtnText;
    });
  });

  // Display and auto-hide toast notifications helper
  let toastTimer;
  function showToast() {
    clearTimeout(toastTimer);
    toast.classList.add("toast-show");
    toastTimer = setTimeout(() => {
      toast.classList.remove("toast-show");
    }, 4500);
  }
}

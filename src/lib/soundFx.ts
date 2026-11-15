// Ultra-lightweight Web Audio API synthesizer for satisfying Gen-Z UI micro-interactions
let audioCtx: AudioContext | null = null;
const soundEnabled = true; // Sound is always enabled (user can never mute)

export function isSoundEnabled(): boolean {
  return true;
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// Satisfying bubble pop click
export function playPop(freq = 640) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.05);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  } catch {
    // Ignore audio failures
  }
}

// Sparkle / High-tech synth chime for Beast Mode or Query run
export function playChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + idx * 0.04;

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.03, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.18);
    });
  } catch {
    // Ignore
  }
}

// 🥊 Cartoon Punch / Slapstick Thud (POW! / BAM!)
export function playCartoonPunch() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Body impact tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.13);

    // Comic slap slap sound
    const slapOsc = ctx.createOscillator();
    const slapGain = ctx.createGain();
    slapOsc.type = "sawtooth";
    slapOsc.frequency.setValueAtTime(420, now);
    slapOsc.frequency.exponentialRampToValueAtTime(90, now + 0.07);

    slapGain.gain.setValueAtTime(0.09, now);
    slapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    slapOsc.connect(slapGain);
    slapGain.connect(ctx.destination);

    slapOsc.start(now);
    slapOsc.stop(now + 0.07);
  } catch {
    // Ignore
  }
}

// 🌀 Cartoon Boing / Spring sound (Wobble recoil)
export function playCartoonBoing() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.18);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  } catch {
    // Ignore
  }
}

// 🔔 Boxing Round Bell (Ding Ding Ding!)
export function playBoxingBell() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    [0, 0.12].forEach((offset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = now + offset;

      osc.type = "sine";
      osc.frequency.setValueAtTime(1174.66, t); // D6 bell tone

      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.35);
    });
  } catch {
    // Ignore
  }
}

// 🔨 Cartoon Mallet Bonk / Squeak
export function playMalletBonk() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Heavy wooden thud
    const thud = ctx.createOscillator();
    const thudGain = ctx.createGain();
    thud.type = "triangle";
    thud.frequency.setValueAtTime(280, now);
    thud.frequency.exponentialRampToValueAtTime(40, now + 0.18);
    thudGain.gain.setValueAtTime(0.2, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    thud.connect(thudGain);
    thudGain.connect(ctx.destination);
    thud.start(now);
    thud.stop(now + 0.18);

    // High squeak
    const squeak = ctx.createOscillator();
    const squeakGain = ctx.createGain();
    squeak.type = "sine";
    squeak.frequency.setValueAtTime(900, now + 0.02);
    squeak.frequency.exponentialRampToValueAtTime(1600, now + 0.14);
    squeakGain.gain.setValueAtTime(0.08, now + 0.02);
    squeakGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    squeak.connect(squeakGain);
    squeakGain.connect(ctx.destination);
    squeak.start(now + 0.02);
    squeak.stop(now + 0.16);
  } catch {
    // Ignore
  }
}

// 🔔 Epic K.O. Gong Hit
export function playKOGong() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    [110, 164.8, 220, 330].forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    });
  } catch {
    // Ignore
  }
}

// 🎺 Victory Fanfare (Ta-da-da-daaa!)
export function playVictoryFanfare() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const fanfare = [
      { f: 523.25, d: 0.1, t: 0 },      // C5
      { f: 659.25, d: 0.1, t: 0.11 },   // E5
      { f: 783.99, d: 0.1, t: 0.22 },   // G5
      { f: 1046.5, d: 0.45, t: 0.33 },  // C6
    ];

    fanfare.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const start = now + note.t;
      osc.type = "triangle";
      osc.frequency.setValueAtTime(note.f, start);
      gain.gain.setValueAtTime(0.12, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + note.d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + note.d);
    });
  } catch {
    // Ignore
  }
}

// 🛝 Cartoon Falling Slide Whistle (Wheeeee~ descending)
export function playCartoonFallWhistle() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.9);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.9);
  } catch {
    // Ignore
  }
}

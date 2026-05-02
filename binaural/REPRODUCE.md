# Binaural Tones PWA — Reproduction Guide

A minimal Progressive Web App that plays two independent sine waves, one in each ear. Frequencies update in real time while the audio is playing.

## What it does

- Two number inputs: left-ear frequency, right-ear frequency (Hz).
- Start / Stop buttons.
- Editing a frequency while playing applies instantly (no clicks or restarts).
- Installable as a PWA (manifest + service worker + offline cache).

## File layout

Four files in a single folder:

```
binaural-tones/
├── index.html      # UI + Web Audio logic
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (offline cache)
└── icon.svg        # App icon
```

## Reproduction steps

### 1. Create the folder

```bash
mkdir binaural-tones
cd binaural-tones
```

### 2. Create `index.html`

The UI is a single card with two number inputs side by side and Start/Stop buttons. The audio engine uses Web Audio's `ChannelMerger` to route one oscillator to the left output channel and another to the right.

Key implementation details:

- `audioCtx.createChannelMerger(2)` — creates a 2-channel merger node.
- `oscillator.connect(gain).connect(merger, 0, 0)` — third arg is input index on the merger; `0` = left, `1` = right.
- Live updates use `frequency.setTargetAtTime(value, currentTime, 0.01)` for a 10 ms smoothing constant — fast enough to feel instant, slow enough to avoid clicks.
- Start/Stop fade gain over 50 ms via `linearRampToValueAtTime` to prevent pops.

The full source is in the accompanying `index.html`. The structure is:

```
<body>
  <div class="app">
    <h1>Binaural Tones</h1>
    <div class="channels">
      <div class="channel left">  <input id="leftFreq" type="number" ...>  </div>
      <div class="channel right"> <input id="rightFreq" type="number" ...> </div>
    </div>
    <div class="buttons">
      <button id="startBtn">Start</button>
      <button id="stopBtn" disabled>Stop</button>
    </div>
    <div id="status">Stopped</div>
  </div>
  <script>/* Web Audio + event handlers */</script>
</body>
```

### 3. Create `manifest.json`

```json
{
  "name": "Binaural Tones",
  "short_name": "Tones",
  "description": "Play two independent frequencies, one per ear",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#0f172a",
  "theme_color": "#0f172a",
  "icons": [
    { "src": "icon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any maskable" }
  ]
}
```

### 4. Create `sw.js` (service worker)

```js
const CACHE = 'binaural-tones-v1';
const ASSETS = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
```

### 5. Create `icon.svg`

Any 512×512 SVG works. The included one uses a purple gradient background with two waveform shapes and L/R badges.

## Running locally

PWAs require HTTP(S); they will not work over `file://` because service workers and `import` paths fail. Serve the folder with any static server:

```bash
# Python (built-in)
python -m http.server 8000

# Or Node (one-shot, no install)
npx serve .
```

Then open `http://localhost:8000` in Chrome, Safari, or any modern browser. Use headphones to hear the stereo separation.

## Deploying

Any static host works. Cheapest options:

- **GitHub Pages** — push the four files to a public repo, then Settings → Pages → Source = `main` branch, root.
- **Netlify Drop** — drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
- **Cloudflare Pages**, **Vercel**, **Surge** — all work the same way.

PWAs need HTTPS to be installable on a phone — all the above provide it for free.

## Installing on a phone

Once deployed and visited over HTTPS:

- **iOS Safari**: Share → Add to Home Screen.
- **Android Chrome**: menu → Install app (or "Add to Home Screen").

The app then runs full-screen with no browser chrome and works offline.

## Notes on the audio

- Browsers require a user gesture to start audio, which is why the AudioContext is created (or resumed) inside the Start button handler.
- The 0.25 gain on each channel keeps total output safely below clipping.
- Frequency range is clamped to 20–20000 Hz; below 20 Hz is mostly inaudible, above 20 kHz is beyond human hearing.
- For binaural-beat experiments, set the two ears to frequencies a few Hz apart (e.g. 220 and 226 for a 6 Hz beat). Headphones are required — speakers mix the channels acoustically and destroy the effect.

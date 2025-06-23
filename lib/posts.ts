 // ENHANCED: Blog posts with in-depth challenge explanations

export const posts = [
  {
    slug: "rabah360-saas-admin-dashboard",
    title: "Building the Rabah360 Church Management SaaS Dashboard",
    date: "2025-06-23",
    excerpt: "How I built a full-featured admin dashboard for Rabah360, a church management SaaS, using React, TailwindCSS, and WebSockets.",
    content: `
<h2>Project Overview</h2>
<p>Rabah360 is a church management SaaS that enables ministries and churches to manage events, donations, member data, and communications through a unified platform. I was contracted as a frontend developer to help build their modern admin interface.</p>

<h2>My Role</h2>
<p>I built and optimized the administrative dashboard used by church administrators and leaders to manage member records, event attendance, finances, and team collaboration.</p>

<h2>Key Features</h2>
<ul>
  <li>Member profile and attendance tracking</li>
  <li>Check-in/check-out workflows for events</li>
  <li>SMS/email campaigns and communications dashboard</li>
  <li>Donation tracking and analytics</li>
  <li>Service planning modules for church leaders</li>
</ul>

<h2>Technologies</h2>
<p>React, Tailwind CSS, Redux, WebSockets, Chart.js, Node.js</p>

<h2>Challenges Faced</h2>
<h3>📖 Multi-Campus Support</h3>
<p>Churches with multiple branches needed isolation of data and permission scopes. I implemented multi-tenant logic and scoped API keys per campus.</p>

<h3>📡 Real-time Attendance Sync</h3>
<p>Using WebSockets, I enabled real-time updates during service check-ins and visualized session status live with socket heartbeats and intelligent diffing.</p>

<h3>💬 Messaging System</h3>
<p>SMS and email communications required integration with external APIs. I managed asynchronous delivery queues and tracked message statuses per user with error fallbacks.</p>

<h3>📊 Donation Analytics</h3>
<p>To provide leaders with actionable giving insights, I built financial charts using Chart.js with donation filters, date ranges, and currency formatting.</p>`
  },
  {
    slug: "nfc-tap-to-pay-system",
    title: "Creating a Secure NFC Tap-to-Pay System",
    date: "2025-06-23",
    excerpt: "A deep dive into building a secure NFC payment system powered by ESP32, AES encryption, and tokenization.",
    content: `
<h2>Introduction</h2>
<p>This project aimed to replicate the security and functionality of Apple Pay/Google Pay for the African market.</p>

<h2>Tech Stack</h2>
<ul>
  <li>React Native (Frontend)</li>
  <li>Node.js + Express (Backend)</li>
  <li>ESP32 + PN532 NFC module</li>
  <li>AES-256 Encryption</li>
</ul>

<h2>Features</h2>
<ul>
  <li>Tap-to-pay authentication using secure NFC</li>
  <li>AES-256 token encryption with manually set keys</li>
  <li>Secure storage of passcode on NFC card</li>
  <li>API sends token to backend after tap</li>
  <li>Tamper protection and hidden passcodes</li>
</ul>

<h2>Challenges Faced</h2>
<h3>🔐 Secure Token Generation</h3>
<p>The token included user ID, timestamp, and transaction metadata, encrypted using AES-256. I added a replay-attack check on the backend to ensure each token could be used only once.</p>

<h3>📶 Hardware Integration</h3>
<p>The PN532 often failed during multiple writes. I had to switch from I2C to SPI for more stable communication and added retry buffers with acknowledgment checks.</p>

<h3>🗝️ Key Management</h3>
<p>To prevent firmware hacks, I encrypted the key in flash memory using a salt hardcoded in the ESP32 and wrote a custom decoder that only runs after NFC pairing.</p>

<h3>🚫 Tamper Detection</h3>
<p>A three-strike logic was implemented. After 3 wrong attempts, the NFC card is soft-locked and can only be reset by admin intervention. I also log brute force attempts to an audit trail.</p>`
  },
  {
    slug: "iboytech-drone-delivery-dashboard",
    title: "Designing a Real-Time Drone Delivery Admin Dashboard (Iboy Technology)",
    date: "2025-06-23",
    excerpt: "A powerful drone fleet management dashboard built for Iboy Technology’s autonomous delivery system.",
    content: `
<h2>Overview</h2>
<p>Iboy Technology runs a drone delivery platform. My task was to build a scalable, real-time admin dashboard for monitoring flights, managing deliveries, and visualizing routes.</p>

<h2>Features</h2>
<ul>
  <li>Drone status tracking and location pins</li>
  <li>Live flight path animation using Mapbox</li>
  <li>Role-based dashboard access and analytics</li>
  <li>Delivery confirmation system integrated with backend</li>
</ul>

<h2>Tech Stack</h2>
<p>React, TailwindCSS, Mapbox, Node.js, WebSockets, MongoDB</p>

<h2>Challenges</h2>
<h3>📡 Real-Time WebSocket Sync</h3>
<p>Tracking drones in-flight using WebSockets required handling disconnections, latency, and UI state accuracy under frequent data pings.</p>

<h3>🗺️ Map Visualization</h3>
<p>I used Mapbox to plot paths dynamically and animated location updates with Framer Motion to enhance UX.</p>

<h3>🔐 Role Management</h3>
<p>Admins, pilots, and delivery managers all needed custom roles. I built a custom RBAC middleware using JWT and route guards.</p>`
  },
  {
    slug: "biometric-fingerprint-payment-esp32",
    title: "Linking Fingerprints to ATM Cards: ESP32 Payment System",
    date: "2025-06-23",
    excerpt: "Built a fingerprint-based payment system to link multiple ATM cards and trigger payments via ESP32.",
    content: `
<h2>Goal</h2>
<p>Use fingerprint sensors to initiate payment tied to user ATM cards, linked via a mobile app.</p>

<h2>Stack</h2>
<ul>
  <li>ESP32 + Biometric Sensor</li>
  <li>Bluetooth to Mobile App (React Native)</li>
  <li>Node.js Backend for Card Linking</li>
</ul>

<h2>Features</h2>
<ul>
  <li>Store multiple cards per fingerprint</li>
  <li>Offline-first matching</li>
  <li>Secure Bluetooth transmission</li>
</ul>

<h2>Real World Use</h2>
<p>Ideal for high-security payments, ATMs without cards, and mobile payment kiosks.</p>

<h2>Challenges Faced</h2>
<h3>🔎 Fingerprint Accuracy</h3>
<p>I used the R305 module. Its low accuracy required multiple fingerprint captures per user and checksum verification on match.</p>

<h3>💳 Card Selection Logic</h3>
<p>The app allows linking 3+ cards. I wrote a mini selector UI and built card priority logic on the ESP32 to auto-pick a default fallback.</p>

<h3>📶 Bluetooth Interference</h3>
<p>ESP32 BLE sometimes dropped under interference. I implemented a custom acknowledgment packet protocol to re-request failed chunks.</p>

<h3>🔋 Battery Constraints</h3>
<p>The ESP32 switched to low-energy mode after each scan, and fingerprint activation woke it via GPIO interrupts. Saved 60% on idle battery drain.</p>`
  },
  {
    slug: "air-quality-monitor-esp32",
    title: "Building an Air Quality Monitoring System with ESP32",
    date: "2025-06-23",
    excerpt: "How I developed a real-time air quality monitor using ESP32, sensors, and a mobile dashboard.",
    content: `
<h2>Purpose</h2>
<p>This system measures air pollutants like CO2, PM2.5, and VOC levels in indoor or outdoor environments.</p>

<h2>Components Used</h2>
<ul>
  <li>ESP32</li>
  <li>MQ135 Air Quality Sensor / PM2.5 Sensor</li>
  <li>OLED display</li>
  <li>Wi-Fi module for dashboard updates</li>
</ul>

<h2>Key Features</h2>
<ul>
  <li>Real-time sensor readings on OLED</li>
  <li>Sends data to cloud dashboard via Wi-Fi</li>
  <li>Alerts for unsafe air quality levels</li>
  <li>Ideal for schools, offices, and homes</li>
</ul>

<h2>Challenges Faced</h2>
<h3>⚙️ Sensor Calibration</h3>
<p>Low-cost sensors like MQ135 are sensitive to temperature/humidity. I cross-validated readings with an external AirGradient monitor and tuned the values using regression mapping.</p>

<h3>🌐 Wi-Fi Uptime</h3>
<p>To prevent frequent disconnects, I used auto-reconnect loops and stored Wi-Fi credentials in EEPROM with a reset fallback button.</p>

<h3>🌡️ Environment Adaptation</h3>
<p>Every location reacts differently to pollutants. I added a local tuning config through serial input to adapt thresholds per deployment.</p>`
  }
];

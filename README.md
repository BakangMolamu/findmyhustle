<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sika Lekhekhe - Connect Your Hustle</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      color: white;
      text-align: center;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #00000088;
      padding: 1rem 2rem;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin: 0 1rem;
      font-weight: 600;
    }

    h1 {
      font-size: 3rem;
      margin-top: 100px;
      background: linear-gradient(to right, #a855f7, #3b82f6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      max-width: 600px;
      margin: 20px auto;
      color: #ccc;
    }

    .btn {
      display: inline-block;
      margin: 15px;
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      background: linear-gradient(to right, #a855f7, #3b82f6);
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s ease;
      text-decoration: none;
    }

    .btn:hover {
      transform: scale(1.05);
    }

    .stats {
      margin-top: 60px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .stat-card {
      background: rgba(255, 255, 255, 0.1);
      padding: 20px 30px;
      border-radius: 12px;
      min-width: 150px;
      color: #fff;
    }

    footer {
      margin-top: 80px;
      font-size: 0.9rem;
      color: #888;
    }

    .popup-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-color: rgba(0,0,0,0.7);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }

    .popup-box {
      background: #fff;
      color: #111;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      max-width: 90%;
    }

    .popup-box img {
      width: 220px;
      height: auto;
      margin: 15px 0;
    }

    .popup-box .btn,
    .popup-box .close-btn {
      background: #1b1c3f;
      color: white;
      margin: 10px;
    }

    .popup-box .close-btn {
      background: crimson;
    }

    ul {
      text-align: left;
      padding: 0 1rem;
    }

    /* Umama Suzan button */
    #umamaBtn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: #a855f7;
      color: white;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      font-size: 30px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.4);
      z-index: 1000;
    }

    #umamaPopup .popup-box {
      max-width: 380px;
    }
  </style>
</head>
<body>

  <nav>
    <div><strong>Sika Lekhekhe</strong></div>
    <div>
      <a href="#" onclick="showQR(event)">Upload</a>
      <a href="#" onclick="showTerms(event)">Browse</a>
      <a href="support.html">Support</a>
    </div>
  </nav>

  <h1>CONNECT YOUR HUSTLE</h1>
  <p>The platform where local artists and hustlers upload, get noticed, and connect with real opportunities. Show your work. Get paid. Stay safe.</p>

  <button class="btn" onclick="showQR(event)">📤 Upload Hustle</button>
  <button class="btn" onclick="showTerms(event)">👀 Browse Hustles</button>

  <div class="stats">
    <div class="stat-card">
      <h2>500+</h2>
      <p>Active Hustlers</p>
    </div>
    <div class="stat-card">
      <h2>1,200+</h2>
      <p>Verified Hustles</p>
    </div>
    <div class="stat-card">
      <h2>R10k+</h2>
      <p>Paid to Creators</p>
    </div>
  </div>

  <footer>
    &copy; 2025 Sika Lekhekhe. All rights reserved.
  </footer>

  <!-- Upload QR Code Popup -->
  <div id="qrcodePopup" class="popup-overlay">
    <div class="popup-box">
      <h2>Pay R2 To Upload Your Hustle</h2>
      <img src="your-qrcode-image-url.png" alt="QR Code Payment" />
      <p>📱 Scan this QR code to make your payment.</p>
      <a href="upload.html" class="btn">✅ I Have Paid – Continue</a>
      <br>
      <button class="close-btn" onclick="hideQR()">Close</button>
    </div>
  </div>

  <!-- Terms & Conditions Popup -->
  <div id="termsPopup" class="popup-overlay">
    <div class="popup-box">
      <h2>Terms & Conditions</h2>
      <p>⚠️ Be cautious when contacting service providers. Verify identity before meeting.</p>
      <ul>
        <li>📍 Always meet in a public place.</li>
        <li>📷 Ask for past work or references.</li>
        <li>💳 Avoid upfront payments without proof.</li>
        <li>🚔 Report scams or suspicious profiles immediately.</li>
      </ul>
      <a href="browse.html" class="btn">I Understand – Continue</a>
      <br>
      <button class="close-btn" onclick="hideTerms()">Close</button>
    </div>
  </div>

  <!-- Umama Suzan AI Assistant -->
  <button id="umamaBtn" onclick="showUmama()">💬</button>

  <div id="umamaPopup" class="popup-overlay">
    <div class="popup-box">
      <h2>Hi! I'm Umama Suzan 👵🏽</h2>
      <p>Let me help you submit your WhatsApp and Proof of Payment URLs!</p>
      <ul>
        <li>📲 <strong>WhatsApp Link:</strong> Go to <a href="https://wa.me" target="_blank">https://wa.me</a> and type your number like this:<br><code>https://wa.me/27712345678</code></li>
        <li>📄 <strong>Proof of Payment URL:</strong> Upload your screenshot to Google Drive or any image host, then copy the shareable link. Example:<br><code>https://drive.google.com/your-proof-link</code></li>
      </ul>
      <button class="btn" onclick="hideUmama()">Close</button>
    </div>
  </div>

  <script>
    function showQR(event) {
      event.preventDefault();
      document.getElementById('qrcodePopup').style.display = 'flex';
    }

    function hideQR() {
      document.getElementById('qrcodePopup').style.display = 'none';
    }

    function showTerms(event) {
      event.preventDefault();
      document.getElementById('termsPopup').style.display = 'flex';
    }

    function hideTerms() {
      document.getElementById('termsPopup').style.display = 'none';
    }

    function showUmama() {
      document.getElementById('umamaPopup').style.display = 'flex';
    }

    function hideUmama() {
      document.getElementById('umamaPopup').style.display = 'none';
    }
  </script>

</body>
</html>

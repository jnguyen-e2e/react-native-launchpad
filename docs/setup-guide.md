# Beginner Setup Guide: MoodBoard App

Welcome! This guide will walk you through setting up and running your first React Native mobile app on your computer and phone, step-by-step. No prior coding experience required.

---

## What You Need Before Starting

To build and run this app, you will need:
1. **The Project Code:** Downloaded from GitHub to your computer (see Step 1 below).
2. **A Code Editor (IDE):** We recommend **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)** — it is free, easy to use, and the industry standard.
3. **Node.js (`v20.19.4`)** installed on your computer (this is the engine that powers our tools).
4. The **Expo Go** app on your phone (this lets you test and interact with the app on your real device).

---

## Step 1: Download the Code from GitHub

Choose the method that works best for you:

### Method A: Download as a ZIP File (Easiest — No Git Required)
1. Go to the project page on GitHub: [github.com/your-username/react-native-launchpad](https://github.com/your-username/react-native-launchpad).
2. Click the green **`<> Code`** button near the top right.
3. Click **Download ZIP**.
4. Once downloaded, **unzip (extract)** the folder and place it somewhere easy to find (like your `Desktop` or `Documents` folder).
5. Open **VS Code**, go to **File > Open Folder...**, and select the unzipped `react-native-launchpad` folder.

### Method B: Clone with Git (For Git Users)
If you have Git installed, open your terminal and run:
```bash
git clone https://github.com/your-username/react-native-launchpad.git
cd react-native-launchpad
code .
```
*(The command `code .` will open the folder right in VS Code).*

---

## Step 2: Install Node.js (`v20.19.4`)

Follow the section for your computer's operating system below:

### 🍏 For Mac Users

#### Option A: Simple Installer (Recommended for Beginners)
1. Go to the [Node.js v20.19.4 Download Page](https://nodejs.org/dist/v20.19.4/) (or direct download: [node-v20.19.4.pkg](https://nodejs.org/dist/v20.19.4/node-v20.19.4.pkg)).
2. Open the downloaded file and click **Continue** until the installation finishes.

#### Option B: Using Homebrew & nvm (For Experienced Developers)
If you already use [Homebrew](https://brew.sh/):
1. Open the **Terminal** app.
2. Install `nvm` (Node Version Manager):
   ```bash
   brew install nvm
   ```
3. Create the configuration folder and add it to your shell settings:
   ```bash
   mkdir -p ~/.nvm
   ```
   Add these lines to your `~/.zshrc` file:
   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"
   ```
   *(Apple Silicon note: use `/opt/homebrew/opt/nvm/nvm.sh` if `/usr/local/opt/nvm/` is not found).*
4. Apply the changes:
   ```bash
   source ~/.zshrc
   ```
5. Install and select Node 20.19.4:
   ```bash
   nvm install 20.19.4
   nvm use 20.19.4
   ```

---

### 🪟 For Windows Users

#### Option A: Simple Installer (Recommended for Beginners)
1. Go to the [Node.js v20.19.4 Download Page](https://nodejs.org/dist/v20.19.4/) (or direct download: [node-v20.19.4-x64.msi](https://nodejs.org/dist/v20.19.4/node-v20.19.4-x64.msi)).
2. Open the downloaded file and click **Next** through the setup:
   - Accept the license agreement.
   - Leave default settings as they are.
   - If asked about "Tools for Native Modules," you can leave it unchecked.
3. Click **Finish**.
4. Close and reopen any open terminal or command windows.

#### Option B: Using `nvm-windows` (For Experienced Developers)
1. Download and run the installer from [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases) (or direct download: [nvm-2.0.0-amd64-setup.exe](https://github.com/nvm-windows/nvm/releases/download/v2.0.0/nvm-2.0.0-amd64-setup.exe)).
2. Open PowerShell as Administrator and run:
   ```powershell
   nvm install 20.19.4
   nvm use 20.19.4
   ```

---

### ✅ Check That Node.js Is Working

Open your terminal (**Terminal** on Mac, or **PowerShell** / **Command Prompt** on Windows) and type:

```bash
node -v
```

Press Enter. You should see:
```text
v20.19.4
```

Next check `npm` (the package manager that comes with Node):
```bash
npm -v
```

If both commands print version numbers, you are good to go!

---

## Step 3: Get the Expo Go App on Your Phone

The easiest way to see your app in action is on your own phone:

- **iPhone:** Download **[Expo Go](https://apps.apple.com/app/expo-go/id982107779)** from the App Store.
- **Android:** Download **[Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)** from the Google Play Store.

> **Important:** Make sure your phone and your computer are connected to the **same Wi-Fi network**.

---

## Step 4: Open the Project & Install Dependencies

1. Open your terminal (in VS Code, press **Ctrl + `** or go to **Terminal > New Terminal**):
   ```bash
   npm install
   ```
   *(This downloads all the project libraries. It may take 1-2 minutes. When it finishes, your prompt will reappear).*

---

## Step 5: Start the App!

Run this command in your project terminal:

```bash
npx expo start
```

A big black-and-white **QR code** will appear right in your terminal.

---

## Step 6: View the App on Your Device

### On Your Phone (Easiest)
- **iPhone:** Open your phone's built-in **Camera** app, point it at the QR code on your screen, and tap the notification banner that says "Open in Expo Go".
- **Android:** Open the **Expo Go** app, tap **Scan QR Code**, and scan the code in your terminal.

Your app will load and appear on your phone screen! Any time you edit code and save, the app will update on your screen instantly.

### On Your Computer
You can also press one of these single letters while the terminal is running:
- Press **`w`** to open the app directly in your web browser.
- Press **`i`** to open in the Mac iOS Simulator *(requires Xcode installed)*.
- Press **`a`** to open in an Android Emulator *(requires Android Studio installed)*.

---

## Handy Shortcuts Cheatsheet

| Key / Command | What it does |
|---|---|
| `r` (in terminal) | Reload the app on your device |
| `m` (in terminal) | Toggle developer menu on your device |
| `Ctrl + C` | Stop the development server |
| `npx expo start` | Start the server back up |

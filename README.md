<div align="center">

# SoundSwitch

**A BetterDiscord plugin that preserves and allows switching between Discord's seasonal soundpacks year-round with zero seasonal expiration limits.**

<p align="center">
  <a href="https://betterdiscord.app"><img src="https://img.shields.io/badge/BetterDiscord-Plugin-blue.svg" alt="BetterDiscord Plugin" /></a>
  <a href="https://github.com/xAbdull7/SoundSwitch"><img src="https://img.shields.io/badge/Version-1.0.0-green.svg" alt="Version 1.0.0" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
</p>

</div>

---

## Overview

Discord regularly introduces limited-time audio events, such as Halloween organ chords and Winter Snowsgiving holiday bells, only to remove them once the season concludes.

SoundSwitch intercepts Discord's internal audio dispatch engine to permanently unlock and switch these soundpacks on demand. All audio streams securely from official Discord content delivery networks (CDNs), requiring no local media downloads or extra dependencies.

---

## Included Soundpacks

- **Halloween**: Gothic organ call ringing, eerie ambient cues, and haunting voice alerts.
- **Winter Snowsgiving**: Holiday bells, cheerful winter chimes, and crisp crystalline notifications.
- **Beat Remix**: Fast-tempo trap and synthesizer remix ringtone with energetic electronic sound cues.
- **Arcade 8-Bit**: Authentic retro chiptune melodies, Discord party-mode power-ups, and vintage gaming blips.
- **Lo-Fi Chill**: Peaceful Rhodes piano chords, gentle ASMR taps, and mellow notification tones (ten verified unique assets).
- **Classic**: Original unmodified Discord sound cues without event overrides.

---

## Features

### Quick Switcher Integration
- **Docked User Bar Button**: Positioned in the bottom account panel between Deafen and User Settings.
- **Dynamic Theme Indicator**: The button automatically updates its vector icon and accent color to reflect the active soundpack.
- **Isolated Glassmorphism Container**: Built with a high-contrast dark frosted glass background to guarantee visibility over any custom user profile banner or theme.
- **Instant Popout Menu**: Switch soundpacks in one click directly from the client without navigating through settings menus.
- **Gentle Confirmation Cue**: Plays a short, soft audio cue (attenuated under 850 milliseconds) on selection for instant tactile feedback.

### Studio Deck Settings Panel
- **2x3 Responsive Theme Grid**: Clean layout with zero horizontal scrolling or truncated text.
- **Two-Tier Control Deck**: Dedicated master override toggle and real-time volume slider.
- **Soundboard Preview Matrix**: Test every individual sound cue directly within the interface.
- **Per-Event Toggles**: Selectively enable or disable custom audio for any specific Discord event (incoming calls, outgoing calls, messages, user join, user leave, mute, unmute, deafen, undeafen, disconnect).

### Architecture and Performance
- **Prefix Normalization**: Strips event-specific prefixes (such as `halloween_call_ringing` to `call_ringing`) to ensure custom themes override active seasonal events.
- **Zero Asset Overhead**: Audio files stream directly from Discord's official Canary CDN over HTTPS. End users only require the single plugin file.
- **Resource Cleanup**: Thorough unpatching of audio hooks, mutation observers, listeners, and styles when the plugin is stopped or reloaded.

---

## Installation

### Via BetterDiscord Addon Store
1. Open Discord Settings.
2. Navigate to **BetterDiscord** > **Plugins**.
3. Search for **SoundSwitch** and click **Download / Enable**.

### Manual Installation
1. Download `SoundSwitch.plugin.js` from the latest release.
2. Place the file into your BetterDiscord plugins folder:
   - **Windows**: `%appdata%\BetterDiscord\plugins`
   - **macOS**: `~/Library/Application Support/BetterDiscord/plugins`
   - **Linux**: `~/.config/BetterDiscord/plugins`
3. Enable **SoundSwitch** in Discord Settings > BetterDiscord > Plugins.

---

## Compliance

This plugin adheres strictly to the official [BetterDiscord Plugin Guidelines](https://docs.betterdiscord.app/plugins/publishing/guidelines.html):
- Zero external executable binaries or unauthorized child processes.
- Complete lifecycle cleanup upon deactivation (`stop()`).
- Unminified, readable source code.
- Zero collection of personal data or telemetry.

---

## Author

- **Author**: M3ZA
- **GitHub**: [xAbdull7](https://github.com/xAbdull7)
- **Repository**: [xAbdull7/SoundSwitch](https://github.com/xAbdull7/SoundSwitch)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

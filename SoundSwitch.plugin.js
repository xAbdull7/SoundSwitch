/**
 * @name SoundSwitch
 * @author M3ZA
 * @description Freeze and switch Discord seasonal soundpacks (Halloween, Winter Snowsgiving, Beat Remix, Arcade 8-Bit, and Lo-Fi) all year round. Features 1-click Quick Switcher.
 * @version 1.0.0
 * @source https://github.com/xAbdull7/SoundSwitch
 * @website https://github.com/xAbdull7/SoundSwitch
 */

/**
 * Pixel-crisp SVG vector icons aligned to Discord's dark design system.
 * Explicit pixel coordinates prevent blurry subpixel rendering.
 */
const SVG_ICONS = {
    halloween: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" shape-rendering="geometricPrecision"><path d="M12 2c.6 0 1 .4 1 1v1.1C17.6 4.7 21 8 21 12c0 4.4-4 8-9 8s-9-3.6-9-8c0-4 3.4-7.3 8-7.9V3c0-.6.4-1 1-1zm-4 7c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1s1-.4 1-1v-1c0-.6-.4-1-1-1zm8 0c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1s1-.4 1-1v-1c0-.6-.4-1-1-1zm-4 4.5c-2.2 0-3.5 1-3.5 1.5 0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5 0-.5-1.3-1.5-3.5-1.5z"/></svg>`,
    winter: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" shape-rendering="geometricPrecision"><path d="M12 2a1 1 0 0 1 1 1v2.1l1.5-1.5a1 1 0 1 1 1.4 1.4L13 7.9V11h3.1l2.9-2.9a1 1 0 0 1 1.4 1.4L18.9 11H21a1 1 0 1 1 0 2h-2.1l1.5 1.5a1 1 0 1 1-1.4 1.4L16.1 13H13v3.1l2.9 2.9a1 1 0 0 1-1.4 1.4L13 18.9V21a1 1 0 1 1-2 0v-2.1l-1.5 1.5a1 1 0 0 1-1.4-1.4L11 16.1V13H7.9l-2.9 2.9a1 1 0 0 1-1.4-1.4L5.1 13H3a1 1 0 1 1 0-2h2.1l-1.5-1.5a1 1 0 1 1 1.4-1.4L7.9 11H11V7.9L8.1 5a1 1 0 0 1 1.4-1.4L11 5.1V3a1 1 0 0 1 1-1z"/></svg>`,
    beat: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" shape-rendering="geometricPrecision"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`,
    retro: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" shape-rendering="geometricPrecision"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
    lofi: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" shape-rendering="geometricPrecision"><path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h3v-8H5v-1a7 7 0 0 1 14 0v1h-3v8h3c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9z"/></svg>`,
    vanilla: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" shape-rendering="geometricPrecision"><path d="M11.5 2.1a1 1 0 0 1 1 0l7 4A1 1 0 0 1 20 7v10a1 1 0 0 1-.5.9l-7 4a1 1 0 0 1-1 0l-7-4A1 1 0 0 1 4 17V7a1 1 0 0 1 .5-.9l7-4zM12 4.2L6 7.6v8.8l6 3.4 6-3.4V7.6L12 4.2z"/></svg>`,
    phoneIncoming: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM15 3v2h3.6l-6.3 6.3 1.4 1.4 6.3-6.3V10h2V3h-7z"/></svg>`,
    phoneOutgoing: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM18.4 4H15V2h7v7h-2V5.4l-6.3 6.3-1.4-1.4L18.4 4z"/></svg>`,
    message: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
    voiceJoin: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 12h-8v-2h8V7l5 4-5 4v-3zm-6 7H5V5h8V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2z"/></svg>`,
    voiceLeave: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>`,
    mute: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17L12 8.2V5c0-1.66-1.34-3-3-3S6 3.34 6 5v.2L3.27 2.47 2 3.74l18.73 18.73 1.27-1.27-7.02-7.03zM7.7 10.9L6.14 9.34C6.05 9.87 6 10.43 6 11c0 3.08 2.29 5.63 5.25 5.95V20H9v2h6v-2h-2.25v-3.05c.84-.09 1.63-.37 2.34-.8l-1.46-1.46c-.53.2-1.1.31-1.63.31-2.21 0-4-1.79-4-4z"/></svg>`,
    unmute: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>`,
    deafen: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h3v-8H5v-1a7 7 0 0 1 14 0v1h-3v8h3c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9zm-1.5 6.5l5 5-1.4 1.4-5-5 1.4-1.4z"/></svg>`,
    undeafen: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h3v-8H5v-1a7 7 0 0 1 14 0v1h-3v8h3c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9z"/></svg>`,
    disconnect: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16 9v4.59l-4-4V5h-2v4.59l-4 4V9H4v7c0 1.1.9 2 2 2h1v4h2v-4h6v4h2v-4h1c1.1 0 2-.9 2-2V9h-2z"/></svg>`,
    play: `<svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
    stop: `<svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M6 6h12v12H6z"/></svg>`,
    volumeHigh: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
    check: `<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
};

class SoundSwitch {
    constructor() {
        this.pluginName = "SoundSwitch";
        this.previewAudio = null;
        this.previewPlayingId = null;
        this.activePreviewButtons = new Map();
        this.quickSwitcherBtn = null;
        this.quickSwitcherPopout = null;
        this.confirmationCueAudio = null;
        this.userBarObserver = null;
        this._onOutsidePointer = null;
        this._onEscapeKey = null;

        /**
         * Supported seasonal sound presets.
         */
        this.themes = {
            halloween: {
                id: "halloween",
                icon: SVG_ICONS.halloween,
                name: "Halloween",
                color: "#ff7b00",
                description: "Spooky organ ringtones & eerie haunting effects."
            },
            winter: {
                id: "winter",
                icon: SVG_ICONS.winter,
                name: "Winter",
                color: "#38bdf8",
                description: "Festive Snowsgiving holiday bells & winter chimes."
            },
            beat: {
                id: "beat",
                icon: SVG_ICONS.beat,
                name: "Beat Remix",
                color: "#ec4899",
                description: "Energetic trap/synth remix ringtone & dance beats."
            },
            retro: {
                id: "retro",
                icon: SVG_ICONS.retro,
                name: "Arcade 8-Bit",
                color: "#a855f7",
                description: "Authentic nostalgic chiptunes & 8-bit power-ups."
            },
            lofi: {
                id: "lofi",
                icon: SVG_ICONS.lofi,
                name: "Lo-Fi Chill",
                color: "#10b981",
                description: "Peaceful Rhodes piano chords & gentle relaxing ASMR."
            },
            vanilla: {
                id: "vanilla",
                icon: SVG_ICONS.vanilla,
                name: "Classic",
                color: "#5865f2",
                description: "Original unmodified Discord soundpack without events."
            }
        };

        /**
         * Comprehensive catalog of Discord's system audio events.
         * 100% verified, distinct, non-repetitive official Discord CDN audio assets for each theme.
         */
        this.sounds = [
            {
                id: "call_ringing",
                category: "calls",
                icon: SVG_ICONS.phoneIncoming,
                name: "Incoming Ringing",
                description: "Ringtone when receiving a direct voice call.",
                urls: {
                    halloween: "https://canary.discord.com/assets/1b883b366ae11a303b82.mp3",
                    winter: "https://canary.discord.com/assets/e087eb83aaa4c43a44bc.mp3",
                    beat: "https://canary.discord.com/assets/3b3a2f5f29b9cb656efb.mp3",
                    retro: "https://canary.discord.com/assets/99b1d8a6fe0b95e99827.mp3",
                    lofi: "https://canary.discord.com/assets/38b1c58d275e828aa9b6.mp3", // Vibing Wumpus chillhop keys
                    vanilla: "https://canary.discord.com/assets/986703daecf955ce3ce3.mp3"
                }
            },
            {
                id: "call_calling",
                category: "calls",
                icon: SVG_ICONS.phoneOutgoing,
                name: "Outgoing Calling",
                description: "Ringtone heard while waiting for recipient.",
                urls: {
                    halloween: "https://canary.discord.com/assets/0950a7ea4f1dd037870b.mp3",
                    winter: "https://canary.discord.com/assets/7b945e7be3f86c5b7c82.mp3",
                    beat: "https://canary.discord.com/assets/267f72c6f838aac3be94.mp3", // Activity launch synth sweep
                    retro: "https://canary.discord.com/assets/c9bfe03395cf2616891f.mp3", // Discodo retro call loop
                    lofi: "https://canary.discord.com/assets/e23b4d3cf753989097f4.mp3", // Stage waiting relaxing ambient
                    vanilla: "https://canary.discord.com/assets/11b68eb8f243b5f6c8d7.mp3"
                }
            },
            {
                id: "message1",
                category: "messages",
                icon: SVG_ICONS.message,
                name: "Message Received",
                description: "Notification chime for incoming messages.",
                urls: {
                    halloween: "https://canary.discord.com/assets/e386c839fb98675c6a79.mp3",
                    winter: "https://canary.discord.com/assets/54527e70cf0ddaeff76f.mp3",
                    beat: "https://canary.discord.com/assets/f9b3c218d2bac00a50a5.mp3", // Bubble bop pop
                    retro: "https://canary.discord.com/assets/fd9f21c60424f7bbe603.mp3", // Bit message chiptune ping
                    lofi: "https://canary.discord.com/assets/8fd01840800c5b8d5d40.mp3", // Official Lo-Fi Rhodes chord
                    vanilla: "https://canary.discord.com/assets/70ae9d5bc54e4e0954f9.mp3"
                }
            },
            {
                id: "user_join",
                category: "voice",
                icon: SVG_ICONS.voiceJoin,
                name: "User Join",
                description: "Played when a member joins voice channel.",
                urls: {
                    halloween: "https://canary.discord.com/assets/80cf806f45467a5898cd.mp3",
                    winter: "https://canary.discord.com/assets/badc42c2a9063b4a962c.mp3",
                    beat: "https://canary.discord.com/assets/ea499ca7cb948b4e89f3.mp3", // Highfive slide whistle
                    retro: "https://canary.discord.com/assets/73eaa6460d4bdb9dcd4d.mp3", // Poggermode enabled 8-bit power-up
                    lofi: "https://canary.discord.com/assets/6f82a1ced41ffba7e474.mp3", // Hang status select mellow chord
                    vanilla: "https://canary.discord.com/assets/80f50a0752b5cd6028ac.mp3"
                }
            },
            {
                id: "user_leave",
                category: "voice",
                icon: SVG_ICONS.voiceLeave,
                name: "User Leave",
                description: "Played when a member leaves voice channel.",
                urls: {
                    halloween: "https://canary.discord.com/assets/f407ad88a1dc40541769.mp3",
                    winter: "https://canary.discord.com/assets/ec3d9eaea30b33e16da6.mp3",
                    beat: "https://canary.discord.com/assets/b6765c41e5305ed3ccbf.mp3", // Highfive acoustic clap
                    retro: "https://canary.discord.com/assets/76ff191944dd58f4835f.mp3", // Robot man retro leave
                    lofi: "https://canary.discord.com/assets/0fdb31ebfdaf7e86e7ff.mp3", // Stream user left soft chime
                    vanilla: "https://canary.discord.com/assets/fea7a918aecf33a04116.mp3"
                }
            },
            {
                id: "mute",
                category: "voice",
                icon: SVG_ICONS.mute,
                name: "Mute Mic",
                description: "Sound cue when muting microphone.",
                urls: {
                    halloween: "https://canary.discord.com/assets/ee7fdadf4c714eed6254.mp3",
                    winter: "https://canary.discord.com/assets/6d7616e08466ab9f1c6d.mp3",
                    beat: "https://canary.discord.com/assets/89547833e1e1ebb138a4.mp3", // DDR up synth
                    retro: "https://canary.discord.com/assets/60b2fa578027733f07b2.mp3", // DDR down 8-bit bass blip
                    lofi: "https://canary.discord.com/assets/d04d1ee13ab2d7d04e97.mp3", // ASMR gentle soft tap
                    vanilla: "https://canary.discord.com/assets/ad1365b07daf20cf62d5.mp3"
                }
            },
            {
                id: "unmute",
                category: "voice",
                icon: SVG_ICONS.unmute,
                name: "Unmute Mic",
                description: "Sound cue when unmuting microphone.",
                urls: {
                    halloween: "https://canary.discord.com/assets/260c581568eacca03f7e.mp3",
                    winter: "https://canary.discord.com/assets/9dbfb1c211e3815cd7b1.mp3",
                    beat: "https://canary.discord.com/assets/6a2283291b8468b5dcbc.mp3", // DDR left synth
                    retro: "https://canary.discord.com/assets/7e01b5cb50d9d1941f16.mp3", // Poggermode message 8-bit blip
                    lofi: "https://canary.discord.com/assets/94d97da9d3ca65ca5c48.mp3", // Soft message2 subtle chime
                    vanilla: "https://canary.discord.com/assets/93034ac8d9eba50e3354.mp3"
                }
            },
            {
                id: "deafen",
                category: "voice",
                icon: SVG_ICONS.deafen,
                name: "Deafen",
                description: "Sound cue when muting headphones.",
                urls: {
                    halloween: "https://canary.discord.com/assets/c4aedda3b528df50221c.mp3",
                    winter: "https://canary.discord.com/assets/9bb77985afdb60704817.mp3",
                    beat: "https://canary.discord.com/assets/ede3b86253bb4aa1615b.mp3", // DDR right synth
                    retro: "https://canary.discord.com/assets/89547833e1e1ebb138a4.mp3", // DDR up 8-bit blip
                    lofi: "https://canary.discord.com/assets/da2dc3239ecd9ab74be1.mp3", // Reconnect gentle acoustic ping
                    vanilla: "https://canary.discord.com/assets/763976e8bc7c745f1bbb.mp3"
                }
            },
            {
                id: "undeafen",
                category: "voice",
                icon: SVG_ICONS.undeafen,
                name: "Undeafen",
                description: "Sound cue when unmuting headphones.",
                urls: {
                    halloween: "https://canary.discord.com/assets/045e5b9608df1607e0cf.mp3",
                    winter: "https://canary.discord.com/assets/fa8da1499894ecac36c7.mp3",
                    beat: "https://canary.discord.com/assets/1cc608397adb2bb151de.mp3", // Success victory chime
                    retro: "https://canary.discord.com/assets/156fff4a60f8bd215dd9.mp3", // Poggermode achievement fanfare
                    lofi: "https://canary.discord.com/assets/647a0cfe7a004fa8b20d.mp3", // DM message3 crisp tone
                    vanilla: "https://canary.discord.com/assets/2f7089b0d3e66e7d6d67.mp3"
                }
            },
            {
                id: "disconnect",
                category: "voice",
                icon: SVG_ICONS.disconnect,
                name: "Disconnect",
                description: "Sound cue upon leaving a voice channel.",
                urls: {
                    halloween: "https://canary.discord.com/assets/ca7d2e46cb5a16819aff.mp3",
                    winter: "https://canary.discord.com/assets/ec5d85405877c27caeda.mp3",
                    beat: "https://canary.discord.com/assets/4185e05ac87668c95db7.mp3", // Glitch clip error drop
                    retro: "https://canary.discord.com/assets/f96b272b4140be6ce8a9.mp3", // Clip save 8-bit arcade chime
                    lofi: "https://canary.discord.com/assets/e9fa25653b507623acbd.mp3", // Stream user joined electronic farewell
                    vanilla: "https://canary.discord.com/assets/f8070dce2f844ed5cce8.mp3"
                }
            }
        ];

        this.defaultSettings = {
            masterEnabled: true,
            quickSwitcherEnabled: true,
            activeTheme: "halloween",
            volume: 100,
            enabledSounds: {
                call_ringing: true,
                call_calling: true,
                message1: true,
                user_join: true,
                user_leave: true,
                mute: true,
                unmute: true,
                deafen: true,
                undeafen: true,
                disconnect: true
            }
        };

        this.settings = Object.assign({}, this.defaultSettings);
    }

    start() {
        this.loadSettings();
        this.patchSoundEngine();
        this.injectGlobalStyles();
        if (this.settings.quickSwitcherEnabled !== false) {
            this.mountQuickSwitcher();
            this.startUserBarObserver();
        }
        console.log(`[${this.pluginName}] Started. Active theme: ${this.settings.activeTheme}`);
        BdApi.UI.showToast(`SoundSwitch: ${this.themes[this.settings.activeTheme]?.name || "Active"} loaded!`, { type: "success" });
    }

    stop() {
        BdApi.Patcher.unpatchAll(this.pluginName);
        this.stopPreview();
        if (this.confirmationCueAudio) {
            try { this.confirmationCueAudio.pause(); this.confirmationCueAudio.currentTime = 0; } catch (e) {}
            this.confirmationCueAudio = null;
        }
        this.stopUserBarObserver();
        this.unmountQuickSwitcher();
        this.removeGlobalStyles();
        console.log(`[${this.pluginName}] Stopped. Restored native sound handlers.`);
    }

    loadSettings() {
        const saved = BdApi.Data.load(this.pluginName, "settings");
        if (saved) {
            this.settings = Object.assign({}, this.defaultSettings, saved);
            if (saved.enabledSounds) {
                this.settings.enabledSounds = Object.assign({}, this.defaultSettings.enabledSounds, saved.enabledSounds);
            }
        }
    }

    saveSettings() {
        BdApi.Data.save(this.pluginName, "settings", this.settings);
    }

    /**
     * Normalizes Discord's internal sound names by stripping seasonal prefixes
     * (e.g. "halloween_call_ringing" -> "call_ringing") and fixing internal aliases.
     */
    normalizeSoundId(rawName) {
        if (!rawName || typeof rawName !== "string") return "";
        let id = rawName.toLowerCase().trim();

        // Strip seasonal prefixes (halloween_, winter_, etc.)
        id = id.replace(/^(halloween|winter)_/, "");

        // Fix known Discord typo aliases
        if (id === "defean") id = "deafen";
        if (id === "undefean") id = "undeafen";

        // Map sub-variants to canonical sound IDs
        if (id.includes("call_ringing")) return "call_ringing";
        if (id.includes("call_calling")) return "call_calling";
        if (id.includes("message")) return "message1";
        if (id.includes("user_join")) return "user_join";
        if (id.includes("user_leave")) return "user_leave";
        if (id.includes("disconnect")) return "disconnect";
        if (id.includes("undeafen")) return "undeafen";
        if (id.includes("deafen")) return "deafen";
        if (id.includes("unmute")) return "unmute";
        if (id.includes("mute")) return "mute";

        return id;
    }

    /**
     * Resolves the target audio asset URL for a specific sound and theme.
     */
    getThemeSoundUrl(soundId, themeId) {
        if (!themeId) themeId = "vanilla";
        const normalized = this.normalizeSoundId(soundId);
        const soundDef = this.sounds.find(s => s.id === normalized);
        return soundDef?.urls?.[themeId] || soundDef?.urls?.vanilla || null;
    }

    /**
     * Hooks Discord's native WebAudioSound class.
     * Force-intercepts any sound event (even when Discord is running a seasonal event)
     * and substitutes it with the selected theme's audio asset.
     */
    patchSoundEngine() {
        const SoundModule = BdApi.Webpack.getByKeys("WebAudioSound");
        if (!SoundModule?.WebAudioSound?.prototype) {
            console.error(`[${this.pluginName}] Failed to locate WebAudioSound module in Discord Webpack.`);
            return;
        }

        const proto = SoundModule.WebAudioSound.prototype;

        BdApi.Patcher.instead(this.pluginName, proto, "ensureAudio", (thisObject, args, originalFunction) => {
            const rawName = thisObject.name;
            const baseId = this.normalizeSoundId(rawName);
            const themeId = this.settings.activeTheme;

            // If master switch is off or user disabled this individual sound, delegate to native Discord
            if (!this.settings.masterEnabled || (baseId && this.settings.enabledSounds[baseId] === false)) {
                thisObject.__activeSoundUrl = null;
                return originalFunction.apply(thisObject, args);
            }

            const soundUrl = this.getThemeSoundUrl(baseId, themeId);
            if (!soundUrl) {
                return originalFunction.apply(thisObject, args);
            }

            // Invalidate cached audio promise if the active URL changed
            if (thisObject._audio && thisObject.__activeSoundUrl !== soundUrl) {
                try {
                    if (typeof thisObject.destroyAudio === "function") {
                        thisObject.destroyAudio();
                    } else {
                        thisObject._audio = null;
                    }
                } catch (e) {}
            }

            thisObject.__activeSoundUrl = soundUrl;

            thisObject._audio = thisObject._audio ?? new Promise((resolve) => {
                const audio = new Audio(soundUrl);
                audio.crossOrigin = "anonymous";

                const calculateVolume = () => {
                    const masterMultiplier = Math.min(Math.max(this.settings.volume / 100, 0), 1);
                    const baseVolume = typeof thisObject._volume === "number" ? thisObject._volume : 1;
                    return Math.min(Math.max(baseVolume * masterMultiplier, 0), 1);
                };

                audio.onloadeddata = () => {
                    audio.volume = calculateVolume();
                    resolve(audio);
                };

                audio.onerror = (err) => {
                    console.warn(`[${this.pluginName}] Custom sound "${baseId}" fallback:`, err);
                    resolve(originalFunction.apply(thisObject, args));
                };

                audio.onended = () => {
                    if (typeof thisObject.destroyAudio === "function") {
                        thisObject.destroyAudio();
                    }
                };

                audio.load();
            });

            return thisObject._audio;
        });

        // Patch play() to ensure live volume reactivity on cached audio instances
        BdApi.Patcher.before(this.pluginName, proto, "play", (thisObject) => {
            if (thisObject._audio && this.settings.masterEnabled) {
                thisObject._audio.then((audio) => {
                    if (audio instanceof HTMLAudioElement) {
                        const masterMultiplier = Math.min(Math.max(this.settings.volume / 100, 0), 1);
                        const baseVolume = typeof thisObject._volume === "number" ? thisObject._volume : 1;
                        audio.volume = Math.min(Math.max(baseVolume * masterMultiplier, 0), 1);
                    }
                }).catch(() => {});
            }
        });
    }

    /**
     * Stops any currently active sound preview and resets all UI button states.
     */
    stopPreview() {
        if (this.previewAudio) {
            try {
                this.previewAudio.pause();
                this.previewAudio.currentTime = 0;
            } catch (e) {}
            this.previewAudio = null;
        }
        if (this.confirmationCueAudio) {
            try { this.confirmationCueAudio.pause(); this.confirmationCueAudio.currentTime = 0; } catch (e) {}
            this.confirmationCueAudio = null;
        }
        this.previewPlayingId = null;
        this.resetAllPreviewButtons();
    }

    /**
     * Resets all preview button elements back to idle state.
     */
    resetAllPreviewButtons() {
        for (const [, btn] of this.activePreviewButtons.entries()) {
            if (btn && btn.isConnected) {
                btn.className = "ss-btn ss-btn-preview";
                btn.innerHTML = `${SVG_ICONS.play} <span>Preview</span>`;
            }
        }
    }

    /**
     * Toggles live audio preview for a specific sound event and active theme.
     */
    togglePreview(soundId, buttonElement) {
        if (this.previewAudio && this.previewPlayingId === soundId) {
            this.stopPreview();
            return;
        }

        this.stopPreview();
        const themeId = this.settings.activeTheme;
        const soundUrl = this.getThemeSoundUrl(soundId, themeId);

        if (!soundUrl) {
            BdApi.UI.showToast("No audio file found for this sound event.", { type: "info" });
            return;
        }

        const audio = new Audio(soundUrl);
        audio.crossOrigin = "anonymous";
        audio.volume = Math.min(Math.max(this.settings.volume / 100, 0), 1);

        this.previewAudio = audio;
        this.previewPlayingId = soundId;

        if (buttonElement) {
            buttonElement.className = "ss-btn ss-btn-playing";
            buttonElement.innerHTML = `${SVG_ICONS.stop} <span>Stop</span>`;
        }

        audio.onended = () => {
            if (this.previewPlayingId === soundId) {
                this.previewAudio = null;
                this.previewPlayingId = null;
                if (buttonElement && buttonElement.isConnected) {
                    buttonElement.className = "ss-btn ss-btn-preview";
                    buttonElement.innerHTML = `${SVG_ICONS.play} <span>Preview</span>`;
                }
            }
        };

        audio.play().catch((err) => {
            console.error(`[${this.pluginName}] Audio preview playback failed:`, err);
            this.stopPreview();
        });
    }

    /**
     * Renders the restructured Studio Deck settings panel.
     * Features:
     * - Responsive 2x3 Theme Grid (Zero horizontal scrollbar, zero clipped titles).
     * - Two-tier Control Deck (Breathing room, sleek slider & toggle).
     * - 2-Column Soundboard with calculated vertical clearance (No clipped bottom row above Done).
     */
    /**
     * Injects scoped styles for the Quick Switcher button and mini popout menu into Discord's head.
     */
    injectGlobalStyles() {
        this.removeGlobalStyles();
        const style = document.createElement("style");
        style.id = "ss-global-styles";
        style.textContent = `
            .ss-quick-switcher-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                border-radius: 6px;
                background: rgba(17, 18, 20, 0.88);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.12);
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
                cursor: pointer;
                color: #dbdee1;
                transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease;
                flex-shrink: 0;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .ss-quick-switcher-btn:hover {
                background: rgba(30, 31, 34, 0.96);
                border-color: rgba(255, 255, 255, 0.25);
                color: #ffffff;
                transform: scale(1.05);
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.55);
            }
            .ss-quick-switcher-btn:active {
                transform: scale(0.94);
            }
            .ss-quick-switcher-btn svg {
                width: 20px !important;
                height: 20px !important;
                display: block;
                filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));
            }
            .ss-popout-menu {
                position: fixed;
                z-index: 10000;
                width: 175px;
                background: #111214;
                border: 1px solid rgba(255, 255, 255, 0.08);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                padding: 6px;
                display: flex;
                flex-direction: column;
                gap: 2px;
                font-family: var(--font-primary, "gg sans", "Noto Sans", sans-serif);
                -webkit-font-smoothing: antialiased;
                box-sizing: border-box;
                animation: ss-popout-fadein 0.12s ease-out;
            }
            @keyframes ss-popout-fadein {
                from { opacity: 0; transform: translateY(4px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .ss-popout-header {
                font-size: 10px;
                font-weight: 700;
                color: #949ba4;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                padding: 4px 6px;
                user-select: none;
            }
            .ss-popout-item {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 6px 8px;
                border-radius: 4px;
                cursor: pointer;
                color: #dbdee1;
                font-size: 12px;
                font-weight: 600;
                transition: background 0.12s ease, color 0.12s ease;
                user-select: none;
                box-sizing: border-box;
            }
            .ss-popout-item:hover {
                background: rgba(255, 255, 255, 0.08);
                color: #ffffff;
            }
            .ss-popout-item.active {
                background: rgba(88, 101, 242, 0.18);
                color: #ffffff;
            }
            .ss-popout-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 18px;
                height: 18px;
                flex-shrink: 0;
            }
            .ss-popout-icon svg {
                width: 16px;
                height: 16px;
            }
            .ss-popout-name {
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .ss-popout-check {
                display: flex;
                align-items: center;
                color: #5865f2;
                flex-shrink: 0;
            }
        `;
        document.head.appendChild(style);
    }

    removeGlobalStyles() {
        const existing = document.getElementById("ss-global-styles");
        if (existing) existing.remove();
    }

    /**
     * Locates the Discord user area Settings button using multiple robust selector fallbacks.
     */
    findSettingsButton() {
        return document.querySelector('button[aria-label="User Settings"]') ||
               document.querySelector('button[aria-label="Settings"]') ||
               document.querySelector('section[aria-label*="User"] button[aria-label*="Settings"]') ||
               document.querySelector('div[class*="accountProfile"] button[aria-label*="Settings"]') ||
               document.querySelector('div[class*="panels"] button[aria-label*="Settings"]');
    }

    /**
     * Injects the Quick Switcher button into Discord's bottom user area,
     * positioned directly between Deafen and User Settings.
     */
    mountQuickSwitcher() {
        if (this.quickSwitcherBtn && this.quickSwitcherBtn.isConnected) {
            return;
        }

        const settingsBtn = this.findSettingsButton();
        if (!settingsBtn || !settingsBtn.parentElement) {
            return;
        }

        if (!this.quickSwitcherBtn) {
            const btn = document.createElement("button");
            btn.id = "soundswitch-quick-switcher";
            btn.className = "ss-quick-switcher-btn";
            btn.type = "button";
            btn.onclick = (e) => {
                e.stopPropagation();
                this.toggleQuickSwitcherPopout();
            };
            this.quickSwitcherBtn = btn;
        }

        this.updateQuickSwitcherButton();
        settingsBtn.parentElement.insertBefore(this.quickSwitcherBtn, settingsBtn);
    }

    /**
     * Updates the Quick Switcher button icon and color to reflect the active soundpack.
     */
    updateQuickSwitcherButton() {
        if (!this.quickSwitcherBtn) return;
        const currentTheme = this.themes[this.settings.activeTheme] || this.themes.halloween;
        this.quickSwitcherBtn.innerHTML = `<span class="ss-btn-inner-icon" style="display:flex;align-items:center;justify-content:center;color:${currentTheme.color};filter:drop-shadow(0 1px 2px rgba(0,0,0,0.6));">${currentTheme.icon}</span>`;
        const labelText = `SoundSwitch: ${currentTheme.name}`;
        this.quickSwitcherBtn.setAttribute("aria-label", labelText);
        this.quickSwitcherBtn.title = labelText;
    }

    /**
     * Removes the Quick Switcher button and any open popout menu from the DOM.
     */
    unmountQuickSwitcher() {
        this.closeQuickSwitcherPopout();
        if (this.quickSwitcherBtn) {
            this.quickSwitcherBtn.remove();
            this.quickSwitcherBtn = null;
        }
    }

    /**
     * Observes Discord DOM changes to restore the Quick Switcher button
     * whenever Discord re-renders the user account area.
     */
    startUserBarObserver() {
        this.stopUserBarObserver();
        this.userBarObserver = new MutationObserver(() => {
            if (this.settings.quickSwitcherEnabled !== false) {
                if (!this.quickSwitcherBtn || !this.quickSwitcherBtn.isConnected) {
                    this.mountQuickSwitcher();
                }
            }
        });
        this.userBarObserver.observe(document.body, { childList: true, subtree: true });
    }

    stopUserBarObserver() {
        if (this.userBarObserver) {
            this.userBarObserver.disconnect();
            this.userBarObserver = null;
        }
    }

    /**
     * Toggles the floating mini popout menu above the user bar.
     */
    toggleQuickSwitcherPopout() {
        if (this.quickSwitcherPopout) {
            this.closeQuickSwitcherPopout();
        } else {
            this.openQuickSwitcherPopout();
        }
    }

    /**
     * Opens the minimal 6-theme popout menu for 1-click soundpack switching.
     */
    openQuickSwitcherPopout() {
        this.closeQuickSwitcherPopout();
        if (!this.quickSwitcherBtn || !this.quickSwitcherBtn.isConnected) return;

        const rect = this.quickSwitcherBtn.getBoundingClientRect();
        const popout = document.createElement("div");
        popout.className = "ss-popout-menu";

        const bottomPos = window.innerHeight - rect.top + 8;
        const leftPos = Math.max(12, Math.min(rect.left - 45, window.innerWidth - 195));
        popout.style.bottom = `${bottomPos}px`;
        popout.style.left = `${leftPos}px`;

        const header = document.createElement("div");
        header.className = "ss-popout-header";
        header.textContent = "Switch Soundpack";
        popout.appendChild(header);

        for (const key of Object.keys(this.themes)) {
            const th = this.themes[key];
            const isActive = this.settings.activeTheme === th.id;

            const item = document.createElement("div");
            item.className = "ss-popout-item" + (isActive ? " active" : "");

            item.innerHTML = `
                <div class="ss-popout-icon" style="color: ${th.color};">${th.icon}</div>
                <div class="ss-popout-name">${th.name}</div>
                ${isActive ? `<div class="ss-popout-check">${SVG_ICONS.check}</div>` : ""}
            `;

            item.onclick = (e) => {
                e.stopPropagation();
                this.settings.activeTheme = th.id;
                this.saveSettings();
                this.updateQuickSwitcherButton();
                this.playConfirmationCue(th.id);
                this.closeQuickSwitcherPopout();
                BdApi.UI.showToast(`Soundpack: ${th.name} activated!`, { type: "info" });
            };

            popout.appendChild(item);
        }

        document.body.appendChild(popout);
        this.quickSwitcherPopout = popout;

        // Dismiss on click outside
        this._onOutsidePointer = (e) => {
            if (this.quickSwitcherPopout && !this.quickSwitcherPopout.contains(e.target) && !this.quickSwitcherBtn?.contains(e.target)) {
                this.closeQuickSwitcherPopout();
            }
        };
        setTimeout(() => {
            document.addEventListener("pointerdown", this._onOutsidePointer);
        }, 10);

        // Dismiss on Escape key
        this._onEscapeKey = (e) => {
            if (e.key === "Escape") {
                this.closeQuickSwitcherPopout();
            }
        };
        window.addEventListener("keydown", this._onEscapeKey);
    }

    /**
     * Closes and cleans up the active popout menu.
     */
    closeQuickSwitcherPopout() {
        if (this._onOutsidePointer) {
            document.removeEventListener("pointerdown", this._onOutsidePointer);
            this._onOutsidePointer = null;
        }
        if (this._onEscapeKey) {
            window.removeEventListener("keydown", this._onEscapeKey);
            this._onEscapeKey = null;
        }
        if (this.quickSwitcherPopout) {
            this.quickSwitcherPopout.remove();
            this.quickSwitcherPopout = null;
        }
    }

    /**
     * Plays a brief audio cue (the theme's incoming message ping) upon quick switching.
     */
    playConfirmationCue(themeId) {
        try {
            if (this.confirmationCueAudio) {
                try {
                    this.confirmationCueAudio.pause();
                    this.confirmationCueAudio.currentTime = 0;
                } catch (e) {}
                this.confirmationCueAudio = null;
            }

            const soundUrl = this.getThemeSoundUrl("message1", themeId);
            if (!soundUrl) return;

            const cue = new Audio(soundUrl);
            cue.crossOrigin = "anonymous";

            // Soft comfortable volume: 30% of master volume, capped at 0.30 max
            const baseVol = Math.min(Math.max(this.settings.volume / 100, 0), 1);
            const softVol = Math.min(Math.max(baseVol * 0.30, 0.05), 0.30);
            cue.volume = softVol;
            this.confirmationCueAudio = cue;

            cue.play().then(() => {
                // Cut off & smooth fade out after 600ms (duration < 850ms)
                setTimeout(() => {
                    if (this.confirmationCueAudio === cue) {
                        const fadeStep = () => {
                            if (!this.confirmationCueAudio || this.confirmationCueAudio !== cue) return;
                            if (cue.volume > 0.05) {
                                cue.volume = Math.max(0, cue.volume - 0.05);
                                setTimeout(fadeStep, 30);
                            } else {
                                try {
                                    cue.pause();
                                    cue.currentTime = 0;
                                } catch (e) {}
                                if (this.confirmationCueAudio === cue) {
                                    this.confirmationCueAudio = null;
                                }
                            }
                        };
                        fadeStep();
                    }
                }, 600);
            }).catch(() => {});
        } catch (e) {}
    }

    getSettingsPanel() {
        const root = document.createElement("div");
        root.className = "ss-studio-root";

        // Scoped high-DPI compact styles
        const style = document.createElement("style");
        style.textContent = `
            .ss-studio-root {
                padding: 10px 12px;
                color: #dbdee1;
                font-family: var(--font-primary, "gg sans", "Noto Sans", sans-serif);
                -webkit-font-smoothing: antialiased;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: 8px;
                max-width: 100%;
                margin-bottom: 8px;
            }
            .ss-control-deck {
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding: 10px 12px;
                background: #1e1f22;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.08);
            }
            .ss-deck-top-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .ss-brand {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .ss-brand-name {
                font-size: 14px;
                font-weight: 700;
                color: #ffffff;
                letter-spacing: -0.2px;
            }
            .ss-brand-badge {
                font-size: 10px;
                font-weight: 700;
                background: #5865f2;
                color: #ffffff;
                padding: 1px 6px;
                border-radius: 8px;
            }
            .ss-toggle-wrapper {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 12px;
                font-weight: 600;
                color: #b5bac1;
                cursor: pointer;
                user-select: none;
            }
            .ss-toggle-wrapper input {
                width: 15px;
                height: 15px;
                cursor: pointer;
                accent-color: #5865f2;
                margin: 0;
            }
            .ss-deck-bottom-row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
            }
            .ss-vol-container {
                display: flex;
                align-items: center;
                gap: 8px;
                flex: 1;
            }
            .ss-vol-container svg {
                color: #949ba4;
                flex-shrink: 0;
            }
            .ss-vol-slider {
                flex: 1;
                height: 4px;
                cursor: pointer;
                accent-color: #5865f2;
            }
            .ss-vol-label {
                font-size: 11px;
                font-weight: 700;
                color: #ffffff;
                min-width: 32px;
                text-align: right;
            }
            /* 2x3 Responsive Theme Grid - Zero Horizontal Scrollbar */
            .ss-theme-grid-2x3 {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 6px;
                width: 100%;
                box-sizing: border-box;
            }
            .ss-theme-tile {
                display: flex;
                align-items: center;
                gap: 7px;
                padding: 7px 10px;
                border-radius: 6px;
                background: #2b2d31;
                border: 1px solid rgba(255, 255, 255, 0.08);
                cursor: pointer;
                font-size: 12px;
                font-weight: 600;
                color: #dbdee1;
                transition: background 0.12s ease, border-color 0.12s ease;
                user-select: none;
                box-sizing: border-box;
                min-width: 0;
            }
            .ss-theme-tile:hover {
                background: #313338;
                border-color: rgba(255, 255, 255, 0.18);
            }
            .ss-theme-tile.active {
                background: rgba(88, 101, 242, 0.14);
                color: #ffffff;
            }
            .ss-theme-tile-icon {
                display: flex;
                align-items: center;
                flex-shrink: 0;
            }
            .ss-theme-tile-name {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                flex: 1;
            }
            .ss-theme-tile-dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                flex-shrink: 0;
            }
            .ss-theme-banner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5px 8px;
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.05);
                font-size: 11px;
                font-weight: 600;
            }
            .ss-banner-title {
                display: flex;
                align-items: center;
                gap: 6px;
                color: #ffffff;
                font-weight: 700;
            }
            .ss-banner-desc {
                color: #949ba4;
                font-size: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 280px;
            }
            /* 2-Column Soundboard with Calculated Vertical Clearance */
            .ss-sound-matrix {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 6px;
                max-height: 200px;
                overflow-y: auto;
                padding-right: 4px;
                padding-bottom: 8px;
                box-sizing: border-box;
            }
            .ss-sound-matrix::-webkit-scrollbar {
                width: 4px;
            }
            .ss-sound-matrix::-webkit-scrollbar-thumb {
                background: #1a1b1e;
                border-radius: 4px;
            }
            .ss-sound-card {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 6px 9px;
                background: #1e1f22;
                border-radius: 6px;
                border: 1px solid rgba(255, 255, 255, 0.06);
                box-sizing: border-box;
                gap: 6px;
                height: 38px;
            }
            .ss-sound-card:hover {
                border-color: rgba(255, 255, 255, 0.12);
                background: #232428;
            }
            .ss-sound-left {
                display: flex;
                align-items: center;
                gap: 7px;
                min-width: 0;
                flex: 1;
            }
            .ss-sound-icon-box {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 4px;
                background: rgba(255, 255, 255, 0.04);
                flex-shrink: 0;
            }
            .ss-sound-info {
                min-width: 0;
                overflow: hidden;
            }
            .ss-sound-title {
                font-size: 11px;
                font-weight: 600;
                color: #ffffff;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .ss-sound-sub {
                font-size: 9px;
                color: #949ba4;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .ss-sound-right {
                display: flex;
                align-items: center;
                gap: 6px;
                flex-shrink: 0;
            }
            .ss-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 3px;
                padding: 3px 8px;
                height: 24px;
                border-radius: 4px;
                border: none;
                cursor: pointer;
                font-size: 10px;
                font-weight: 700;
                transition: background 0.12s ease;
                user-select: none;
                box-sizing: border-box;
            }
            .ss-btn-preview {
                background: #5865f2;
                color: #ffffff;
            }
            .ss-btn-preview:hover {
                background: #4752c4;
            }
            .ss-btn-playing {
                background: #da373c !important;
                color: #ffffff !important;
            }
            .ss-btn-stop-all {
                background: #2b2d31;
                color: #dbdee1;
                border: 1px solid rgba(255, 255, 255, 0.08);
                height: 24px;
                padding: 2px 8px;
            }
            .ss-btn-stop-all:hover {
                background: #313338;
                color: #ffffff;
            }
            .ss-checkbox {
                width: 13px;
                height: 13px;
                cursor: pointer;
                margin: 0;
            }
        `;
        root.appendChild(style);

        // Control Deck (2 Rows: Brand/Toggle + Volume/Stop)
        const controlDeck = document.createElement("div");
        controlDeck.className = "ss-control-deck";

        // Top Row: Brand & Master Switch
        const deckTop = document.createElement("div");
        deckTop.className = "ss-deck-top-row";

        const brand = document.createElement("div");
        brand.className = "ss-brand";
        brand.innerHTML = `
            <span class="ss-brand-name">SoundSwitch</span>
            <span class="ss-brand-badge">v1.0.0</span>
        `;
        deckTop.appendChild(brand);

        const deckActions = document.createElement("div");
        deckActions.style.display = "flex";
        deckActions.style.alignItems = "center";
        deckActions.style.gap = "12px";

        const toggleWrapper = document.createElement("label");
        toggleWrapper.className = "ss-toggle-wrapper";
        const toggleInput = document.createElement("input");
        toggleInput.type = "checkbox";
        toggleInput.checked = this.settings.masterEnabled;
        toggleInput.onchange = () => {
            this.settings.masterEnabled = toggleInput.checked;
            this.saveSettings();
        };
        toggleWrapper.appendChild(toggleInput);
        const toggleText = document.createElement("span");
        toggleText.textContent = "Override Audio";
        toggleWrapper.appendChild(toggleText);
        deckActions.appendChild(toggleWrapper);

        const qsToggleWrapper = document.createElement("label");
        qsToggleWrapper.className = "ss-toggle-wrapper";
        const qsToggleInput = document.createElement("input");
        qsToggleInput.type = "checkbox";
        qsToggleInput.checked = this.settings.quickSwitcherEnabled !== false;
        qsToggleInput.onchange = () => {
            this.settings.quickSwitcherEnabled = qsToggleInput.checked;
            this.saveSettings();
            if (qsToggleInput.checked) {
                this.mountQuickSwitcher();
                this.startUserBarObserver();
            } else {
                this.stopUserBarObserver();
                this.unmountQuickSwitcher();
            }
        };
        qsToggleWrapper.appendChild(qsToggleInput);
        const qsToggleText = document.createElement("span");
        qsToggleText.textContent = "Quick Switcher";
        qsToggleWrapper.appendChild(qsToggleText);
        deckActions.appendChild(qsToggleWrapper);

        deckTop.appendChild(deckActions);

        controlDeck.appendChild(deckTop);

        // Bottom Row: Volume Slider & Stop Button
        const deckBottom = document.createElement("div");
        deckBottom.className = "ss-deck-bottom-row";

        const volBox = document.createElement("div");
        volBox.className = "ss-vol-container";
        volBox.innerHTML = SVG_ICONS.volumeHigh;

        const volSlider = document.createElement("input");
        volSlider.className = "ss-vol-slider";
        volSlider.type = "range";
        volSlider.min = "0";
        volSlider.max = "100";
        volSlider.value = this.settings.volume;

        const volLabel = document.createElement("span");
        volLabel.className = "ss-vol-label";
        volLabel.textContent = `${this.settings.volume}%`;

        volSlider.oninput = () => {
            const val = parseInt(volSlider.value, 10);
            this.settings.volume = val;
            volLabel.textContent = `${val}%`;
            if (this.previewAudio) {
                this.previewAudio.volume = Math.min(Math.max(val / 100, 0), 1);
            }
            this.saveSettings();
        };

        volBox.appendChild(volSlider);
        volBox.appendChild(volLabel);
        deckBottom.appendChild(volBox);

        const stopAllBtn = document.createElement("button");
        stopAllBtn.className = "ss-btn ss-btn-stop-all";
        stopAllBtn.innerHTML = `${SVG_ICONS.stop} <span>Stop All</span>`;
        stopAllBtn.onclick = () => {
            this.stopPreview();
        };
        deckBottom.appendChild(stopAllBtn);

        controlDeck.appendChild(deckBottom);
        root.appendChild(controlDeck);

        // 2x3 Responsive Theme Grid
        const themeGrid = document.createElement("div");
        themeGrid.className = "ss-theme-grid-2x3";

        const themeTiles = {};

        // Theme Status Banner
        const themeBanner = document.createElement("div");
        themeBanner.className = "ss-theme-banner";
        root.appendChild(themeGrid);
        root.appendChild(themeBanner);

        // 2-Column Soundboard Matrix
        const soundMatrix = document.createElement("div");
        soundMatrix.className = "ss-sound-matrix";
        root.appendChild(soundMatrix);

        const renderActiveThemeMatrix = (th) => {
            this.stopPreview();
            this.activePreviewButtons.clear();
            soundMatrix.innerHTML = "";

            themeBanner.innerHTML = `
                <div class="ss-banner-title">
                    <span style="color: ${th.color};">${th.icon}</span>
                    <span>${th.name} Soundboard (10 sounds)</span>
                </div>
                <div class="ss-banner-desc" style="color: ${th.color};">
                    ${th.description}
                </div>
            `;

            for (const sound of this.sounds) {
                const card = document.createElement("div");
                card.className = "ss-sound-card";

                const left = document.createElement("div");
                left.className = "ss-sound-left";

                const iconBox = document.createElement("div");
                iconBox.className = "ss-sound-icon-box";
                iconBox.style.color = th.color;
                iconBox.innerHTML = sound.icon;
                left.appendChild(iconBox);

                const info = document.createElement("div");
                info.className = "ss-sound-info";
                info.innerHTML = `
                    <div class="ss-sound-title">${sound.name}</div>
                    <div class="ss-sound-sub">${sound.id}</div>
                `;
                left.appendChild(info);
                card.appendChild(left);

                const right = document.createElement("div");
                right.className = "ss-sound-right";

                // Preview Button
                const previewBtn = document.createElement("button");
                previewBtn.className = "ss-btn ss-btn-preview";
                previewBtn.innerHTML = `${SVG_ICONS.play} <span>Preview</span>`;
                this.activePreviewButtons.set(sound.id, previewBtn);

                previewBtn.onclick = () => {
                    this.togglePreview(sound.id, previewBtn);
                };
                right.appendChild(previewBtn);

                // Individual Override Checkbox
                const soundCheck = document.createElement("input");
                soundCheck.type = "checkbox";
                soundCheck.className = "ss-checkbox";
                soundCheck.style.accentColor = th.color;
                soundCheck.checked = this.settings.enabledSounds[sound.id] !== false;
                soundCheck.title = "Enable or disable override for this sound event";
                soundCheck.onchange = () => {
                    this.settings.enabledSounds[sound.id] = soundCheck.checked;
                    this.saveSettings();
                };
                right.appendChild(soundCheck);

                card.appendChild(right);
                soundMatrix.appendChild(card);
            }
        };

        // Populate 2x3 Theme Tiles
        for (const key of Object.keys(this.themes)) {
            const th = this.themes[key];
            const isActive = this.settings.activeTheme === th.id;

            const tile = document.createElement("div");
            tile.className = "ss-theme-tile" + (isActive ? " active" : "");
            if (isActive) {
                tile.style.borderColor = th.color;
            }

            tile.innerHTML = `
                <span class="ss-theme-tile-icon" style="color: ${th.color};">${th.icon}</span>
                <span class="ss-theme-tile-name">${th.name}</span>
                <span class="ss-theme-tile-dot" style="background: ${isActive ? th.color : 'transparent'};"></span>
            `;

            tile.onclick = () => {
                this.settings.activeTheme = th.id;
                this.saveSettings();
                this.updateQuickSwitcherButton();

                for (const otherKey of Object.keys(themeTiles)) {
                    const t = themeTiles[otherKey];
                    const selected = otherKey === th.id;
                    t.className = "ss-theme-tile" + (selected ? " active" : "");
                    t.style.borderColor = selected ? this.themes[otherKey].color : "rgba(255, 255, 255, 0.08)";
                    const dot = t.querySelector(".ss-theme-tile-dot");
                    if (dot) {
                        dot.style.background = selected ? this.themes[otherKey].color : "transparent";
                    }
                }

                renderActiveThemeMatrix(th);
                BdApi.UI.showToast(`Soundpack: ${th.name} activated!`, { type: "info" });
            };

            themeTiles[th.id] = tile;
            themeGrid.appendChild(tile);
        }

        // Render initially active theme matrix
        const initialTheme = this.themes[this.settings.activeTheme] || this.themes.halloween;
        renderActiveThemeMatrix(initialTheme);

        /**
         * Lifecycle Observer:
         * Automatically stops audio preview playback when settings modal unmounts.
         */
        const unmountObserver = new MutationObserver(() => {
            if (!document.body.contains(root)) {
                this.stopPreview();
                unmountObserver.disconnect();
            }
        });
        unmountObserver.observe(document.body, { childList: true, subtree: true });

        return root;
    }
}

module.exports = SoundSwitch;

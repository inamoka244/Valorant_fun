// ============================================
// VALORANT FUN PAGE - JAVASCRIPT
// ============================================

// ============================================
// DATA: Agents, Abilities, Messages
// ============================================

const agents = [
    { name: "Jett", role: "Duelist", icon: "💨", color: "#7dd3fc", image: "assets/agents/jett.png" },
    { name: "Phoenix", role: "Duelist", icon: "🔥", color: "#f97316", image: "assets/agents/phoenix.png" },
    { name: "Reyna", role: "Duelist", icon: "👁️", color: "#a855f7", image: "assets/agents/reyna.png" },
    { name: "Raze", role: "Duelist", icon: "💣", color: "#f59e0b", image: "assets/agents/raze.png" },
    { name: "Yoru", role: "Duelist", icon: "🌀", color: "#3b82f6", image: "assets/agents/yoru.png" },
    { name: "Neon", role: "Duelist", icon: "⚡", color: "#22d3ee", image: "assets/agents/neon.png" },
    { name: "Iso", role: "Duelist", icon: "🔮", color: "#8b5cf6", image: "assets/agents/iso.png" },
    { name: "Sage", role: "Sentinel", icon: "💚", color: "#22c55e", image: "assets/agents/sage.png" },
    { name: "Cypher", role: "Sentinel", icon: "📷", color: "#f5f5f4", image: "assets/agents/cypher.png" },
    { name: "Killjoy", role: "Sentinel", icon: "🤖", color: "#fbbf24", image: "assets/agents/killjoy.png" },
    { name: "Chamber", role: "Sentinel", icon: "🎩", color: "#d4af37", image: "assets/agents/chamber.png" },
    { name: "Deadlock", role: "Sentinel", icon: "🔒", color: "#94a3b8", image: "assets/agents/deadlock.png" },
    { name: "Sova", role: "Initiator", icon: "🏹", color: "#60a5fa", image: "assets/agents/sova.png" },
    { name: "Breach", role: "Initiator", icon: "💪", color: "#f97316", image: "assets/agents/breach.png" },
    { name: "Skye", role: "Initiator", icon: "🦅", color: "#84cc16", image: "assets/agents/skye.png" },
    { name: "KAY/O", role: "Initiator", icon: "🤖", color: "#64748b", image: "assets/agents/kayo.png" },
    { name: "Fade", role: "Initiator", icon: "👻", color: "#6366f1", image: "assets/agents/fade.png" },
    { name: "Gekko", role: "Initiator", icon: "🦎", color: "#a3e635", image: "assets/agents/gekko.png" },
    { name: "Brimstone", role: "Controller", icon: "☁️", color: "#f97316", image: "assets/agents/brimstone.png" },
    { name: "Omen", role: "Controller", icon: "👤", color: "#6366f1", image: "assets/agents/omen.png" },
    { name: "Viper", role: "Controller", icon: "☠️", color: "#22c55e", image: "assets/agents/viper.png" },
    { name: "Astra", role: "Controller", icon: "⭐", color: "#a855f7", image: "assets/agents/astra.png" },
    { name: "Harbor", role: "Controller", icon: "🌊", color: "#0ea5e9", image: "assets/agents/harbor.png" },
    { name: "Clove", role: "Controller", icon: "🦋", color: "#ec4899", image: "assets/agents/clove.png" }
];

const agentMessages = [
    "Still gonna bottom frag.",
    "Your aim won't improve, but at least you look cool.",
    "Instalock incoming in 3... 2... 1...",
    "Perfect for blaming your team!",
    "Your teammates already hate you.",
    "Time to throw some rounds!",
    "Remember: it's always Jett diff.",
    "You'll definitely miss every shot.",
    "Great choice for losing with style!",
    "Your rank is about to tank.",
    "Prepare for the 'gg ez' spam.",
    "You're gonna need more copium.",
    "Perfect for feeding the enemy team!",
    "Your KDA will be legendary... ly bad.",
    "At least you'll have fun losing!",
    "Hardstuck incoming!",
    "Your team is already typing 'ff'.",
    "Time to blame lag!"
];

const abilities = [
    { agent: "Jett", ability: "Tailwind (Dash)", description: "Zoom zoom into walls" },
    { agent: "Phoenix", ability: "Hot Hands", description: "Self-cook simulator" },
    { agent: "Reyna", ability: "Dismiss", description: "Disappear like your rank" },
    { agent: "Raze", ability: "Blast Pack", description: "Yeet yourself to death" },
    { agent: "Sage", ability: "Resurrection", description: "Bring back bad players" },
    { agent: "Cypher", ability: "Spycam", description: "Watch your team lose" },
    { agent: "Killjoy", ability: "Turret", description: "Aimbot but legal" },
    { agent: "Sova", ability: "Recon Bolt", description: "Miss every lineup" },
    { agent: "Breach", ability: "Fault Line", description: "Stun your own team" },
    { agent: "Omen", ability: "Paranoia", description: "Blind yourself somehow" },
    { agent: "Brimstone", ability: "Orbital Strike", description: "Nuke the wrong site" },
    { agent: "Viper", ability: "Toxic Screen", description: "Gas your teammates" },
    { agent: "Astra", ability: "Gravity Well", description: "Pull enemies... to you" },
    { agent: "Yoru", ability: "Dimensional Drift", description: "AFK but fancy" },
    { agent: "Neon", ability: "High Gear", description: "Run it down mid" },
    { agent: "Chamber", ability: "Headhunter", description: "Miss expensive shots" },
    { agent: "Skye", ability: "Guiding Light", description: "Flash your team" },
    { agent: "KAY/O", ability: "NULL/CMD", description: "Die dramatically" },
    { agent: "Fade", ability: "Nightfall", description: "Scare yourself" },
    { agent: "Gekko", ability: "Wingman", description: "Pet does your job" },
    { agent: "Harbor", ability: "Cascade", description: "Water bending gone wrong" },
    { agent: "Deadlock", ability: "GravNet", description: "Trap nobody ever" },
    { agent: "Iso", ability: "Kill Contract", description: "1v1 and still lose" },
    { agent: "Clove", ability: "Pick-Me-Up", description: "Die and come back to die again" }
];

const chaosMessages = [
    "RIP game balance.",
    "Riot would never... or would they?",
    "This is cursed. I love it.",
    "Imagine this in ranked...",
    "The devs are crying somewhere.",
    "Perfectly balanced, as nothing should be.",
    "This would break the game in 0.5 seconds.",
    "Someone's getting fired for this.",
    "Patch notes: 'We're sorry.'",
    "Competitive integrity? Never heard of it.",
    "This is why we can't have nice things.",
    "The meta would implode.",
    "Radiant players in shambles.",
    "Bronze players: 'I see no difference.'"
];

const sageStatuses = [
    { threshold: 0, message: "Sage is ready to heal!", emoji: "🧘‍♀️", class: "" },
    { threshold: 5, message: "Sage is getting tired...", emoji: "😓", class: "tired" },
    { threshold: 10, message: "Sage: 'Heal is on cooldown!'", emoji: "😤", class: "tired" },
    { threshold: 15, message: "Sage: 'STOP SPAMMING!'", emoji: "😡", class: "angry" },
    { threshold: 20, message: "Sage: 'I'm not your mom!'", emoji: "🤬", class: "angry" },
    { threshold: 25, message: "Sage is questioning her life choices...", emoji: "😭", class: "angry" },
    { threshold: 30, message: "Sage: 'That's it. I'm going Reyna.'", emoji: "👁️", class: "angry" },
    { threshold: 40, message: "Sage left the team.", emoji: "💀", class: "gone" },
    { threshold: 50, message: "Sage reported you.", emoji: "🚫", class: "gone" },
    { threshold: 60, message: "Sage is now your enemy.", emoji: "⚔️", class: "gone" },
    { threshold: 75, message: "You've been banned from asking for heals.", emoji: "🔨", class: "gone" },
    { threshold: 100, message: "Achievement Unlocked: Sage Abuser", emoji: "🏆", class: "gone" }
];

const toxicResponses = [
    "Muted.",
    "Reported.",
    "AFK detected.",
    "Ratio.",
    "L + no aim + hardstuck",
    "Touch grass.",
    "Skill issue.",
    "Diff.",
    "GG EZ",
    "Uninstall.",
    "My grandma aims better.",
    "Are you playing with a steering wheel?",
    "Nice crosshair placement... on the floor.",
    "You're the reason we have surrender votes.",
    "Your gaming chair is the problem.",
    "Have you tried aiming at the enemy?",
    "Plot twist: you're the smurf... for the enemy team.",
    "Your K/D is a phone number... in the negatives.",
    "Even bots have better game sense.",
    "You're not throwing, you're donating.",
    "Congratulations on your participation trophy.",
    "Your aim is like your love life: non-existent.",
    "Did you buy your rank?",
    "The spike has better movement than you.",
    "You're proof that matchmaking is broken."
];

const patchNotes = [
    {
        version: "Patch 99.99",
        notes: [
            "• Jett can now dash through walls, floors, and the space-time continuum",
            "• Sage's heal now requires a 5-page essay on why you deserve it",
            "• Phoenix's ultimate now works... sometimes",
            "• Fixed a bug where players were having fun"
        ]
    },
    {
        version: "Patch 100.00",
        notes: [
            "• Reyna can now heal from watching enemy killcams",
            "• Omen's teleport now has a 50% chance to teleport to Brazil",
            "• Brimstone's smokes now come with a BBQ grill",
            "• Removed Herobrine (wrong game, but just in case)"
        ]
    },
    {
        version: "Patch 101.01",
        notes: [
            "• Sova's drone now plays elevator music",
            "• Killjoy's turret gained sentience and is demanding a salary",
            "• Chamber's accent is now 200% more French",
            "• Added a 'Blame Jett' button to the scoreboard"
        ]
    },
    {
        version: "Patch 102.02",
        notes: [
            "• Yoru can now fake his own uninstall",
            "• Neon's speed increased to 'literally teleporting'",
            "• Viper's toxicity now affects team chat",
            "• Cypher's camera now streams on Twitch"
        ]
    },
    {
        version: "Patch 103.03",
        notes: [
            "• Breach's flash now blinds players in real life",
            "• Skye's dog learned to fetch... enemy positions",
            "• Astra can now control gravity in the enemy's room",
            "• KAY/O's knife now makes dial-up internet sounds"
        ]
    },
    {
        version: "Patch 104.04",
        notes: [
            "• Fade's nightmares now include your browser history",
            "• Gekko's creatures now demand pets between rounds",
            "• Harbor's water is now sparkling (premium skin)",
            "• Deadlock's traps now play sad violin when triggered"
        ]
    },
    {
        version: "Patch 105.05",
        notes: [
            "• Iso's shield now blocks criticism from teammates",
            "• Clove's resurrection now comes with a therapy session",
            "• All agents now have a 'touch grass' cooldown",
            "• Added ranked anxiety as a permanent debuff"
        ]
    }
];

const footerJokes = [
    '"Jett diff" - Every bottom fragger ever',
    '"My team is holding me back" - Guy with 2 kills',
    '"I swear I\'m usually Radiant" - Iron 2 player',
    '"Lag" - Person with 20ms ping',
    '"Nice walls" - After dying to a Sova dart',
    '"GG EZ" - Player who got carried',
    '"Report my team" - The actual problem',
    '"I\'m warming up" - Round 12',
    '"Trust the process" - 0-11 scoreline',
    '"Unlucky" - Missed 30 shots in a row',
    '"They\'re cheating" - Enemy just has a headset',
    '"I\'m playing for fun" - In competitive',
    '"My mouse died" - After whiffing an entire clip',
    '"I\'m smurfing" - Hardstuck Silver',
    '"Watch this" - Dies immediately'
];

// ============================================
// STATE VARIABLES
// ============================================

let healCount = 0;
let logoClickCount = 0;
let idleTimer = null;
let isRedMode = false;

// ============================================
// DOM ELEMENTS
// ============================================

const pickAgentBtn = document.getElementById('pick-agent-btn');
const agentCard = document.getElementById('agent-card');
const agentIcon = document.getElementById('agent-icon');
const agentName = document.getElementById('agent-name');
const agentRole = document.getElementById('agent-role');
const agentMessage = document.getElementById('agent-message');

const chaosBtn = document.getElementById('chaos-btn');
const chaosAgent = document.getElementById('chaos-agent');
const chaosAbility = document.getElementById('chaos-ability');
const chaosMessage = document.getElementById('chaos-message');

const healBtn = document.getElementById('heal-btn');
const healCounter = document.getElementById('heal-counter');
const sageStatus = document.getElementById('sage-status');
const sageEmoji = document.getElementById('sage-emoji');

const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatWindow = document.getElementById('chat-window');

const patchBtn = document.getElementById('patch-btn');
const patchNote = document.getElementById('patch-note');

const rankingBtn = document.getElementById('ranking-btn');
const tierS = document.getElementById('tier-s');
const tierA = document.getElementById('tier-a');
const tierB = document.getElementById('tier-b');
const tierF = document.getElementById('tier-f');

const logo = document.getElementById('logo');
const grassPopup = document.getElementById('grass-popup');
const closeGrass = document.getElementById('close-grass');
const idlePopup = document.getElementById('idle-popup');
const closeIdle = document.getElementById('close-idle');

const themeBtn = document.getElementById('theme-btn');
const footerJoke = document.getElementById('footer-joke');

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function resetIdleTimer() {
    if (idleTimer) {
        clearTimeout(idleTimer);
    }
    idleTimer = setTimeout(() => {
        idlePopup.classList.add('active');
    }, 30000); // 30 seconds
}

// ============================================
// AGENT SELECTOR
// ============================================

function pickRandomAgent() {
    const agent = getRandomItem(agents);
    const message = getRandomItem(agentMessages);
    
    // Add animation
    agentCard.classList.remove('revealed');
    void agentCard.offsetWidth; // Trigger reflow
    agentCard.classList.add('revealed');
    
    // Update content - use image instead of emoji
    if (agent.image) {
        agentIcon.innerHTML = `<img src="${agent.image}" alt="${agent.name}" class="agent-img">`;
        agentIcon.style.textShadow = 'none';
    } else {
        agentIcon.textContent = agent.icon;
        agentIcon.style.textShadow = `0 0 30px ${agent.color}`;
    }
    agentName.textContent = agent.name;
    agentName.style.color = agent.color;
    agentRole.textContent = agent.role;
    agentMessage.innerHTML = `<p>"${message}"</p>`;
    
    // Button feedback
    pickAgentBtn.classList.add('shake');
    setTimeout(() => pickAgentBtn.classList.remove('shake'), 500);
}

// ============================================
// ABILITY CHAOS
// ============================================

function generateAbilityChaos() {
    const agent1 = getRandomItem(agents);
    let ability;
    do {
        ability = getRandomItem(abilities);
    } while (ability.agent === agent1.name);
    
    const message = getRandomItem(chaosMessages);
    
    chaosAgent.textContent = agent1.name;
    chaosAbility.textContent = `${ability.agent}'s ${ability.ability}`;
    chaosMessage.innerHTML = `<p>"${message}"</p><p class="ability-desc">${ability.description}</p>`;
    
    // Button feedback
    chaosBtn.classList.add('shake');
    setTimeout(() => chaosBtn.classList.remove('shake'), 500);
}

// ============================================
// SAGE HEAL MINI GAME
// ============================================

function spamHeal() {
    healCount++;
    healCounter.textContent = healCount;
    
    // Find appropriate status
    let currentStatus = sageStatuses[0];
    for (const status of sageStatuses) {
        if (healCount >= status.threshold) {
            currentStatus = status;
        }
    }
    
    // Update display
    sageStatus.innerHTML = `<p>${currentStatus.message}</p>`;
    sageStatus.className = `sage-status ${currentStatus.class}`;
    sageEmoji.textContent = currentStatus.emoji;
    
    // Button feedback
    healBtn.classList.add('shake');
    setTimeout(() => healBtn.classList.remove('shake'), 200);
    
    // Counter animation
    healCounter.style.transform = 'scale(1.2)';
    setTimeout(() => healCounter.style.transform = 'scale(1)', 100);
}

// ============================================
// TOXIC CHAT SIMULATOR
// ============================================

function sendChatMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;
    
    // Add user message
    const userDiv = document.createElement('div');
    userDiv.className = 'chat-message user';
    userDiv.innerHTML = `<span class="chat-sender">[YOU]</span><span class="chat-text">${escapeHtml(userMessage)}</span>`;
    chatWindow.appendChild(userDiv);
    
    // Clear input
    chatInput.value = '';
    
    // Add toxic response after delay
    setTimeout(() => {
        const response = getRandomItem(toxicResponses);
        const responseDiv = document.createElement('div');
        responseDiv.className = 'chat-message response';
        responseDiv.innerHTML = `<span class="chat-sender">[TEAMMATE]</span><span class="chat-text">${response}</span>`;
        chatWindow.appendChild(responseDiv);
        
        // Scroll to bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 500 + Math.random() * 1000);
    
    // Scroll to bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// FAKE PATCH NOTES
// ============================================

function generatePatchNotes() {
    const patch = getRandomItem(patchNotes);
    
    const versionEl = patchNote.querySelector('.patch-version');
    const contentEl = patchNote.querySelector('.patch-content');
    
    versionEl.textContent = patch.version;
    contentEl.innerHTML = patch.notes.join('<br>');
    
    // Animation
    patchNote.style.transform = 'scale(0.95)';
    setTimeout(() => patchNote.style.transform = 'scale(1)', 200);
}

// ============================================
// AGENT POWER RANKING
// ============================================

function shuffleRankings() {
    const shuffledAgents = shuffleArray(agents);
    
    // Clear tiers
    tierS.innerHTML = '';
    tierA.innerHTML = '';
    tierB.innerHTML = '';
    tierF.innerHTML = '';
    
    // Distribute agents randomly
    const tiers = [tierS, tierA, tierB, tierF];
    const distribution = [3, 6, 9, shuffledAgents.length - 18]; // S: 3, A: 6, B: 9, F: rest
    
    let index = 0;
    tiers.forEach((tier, tierIndex) => {
        for (let i = 0; i < distribution[tierIndex] && index < shuffledAgents.length; i++) {
            const agent = shuffledAgents[index];
            const agentEl = document.createElement('span');
            agentEl.className = 'tier-agent';
            if (agent.image) {
                agentEl.innerHTML = `<img src="${agent.image}" alt="${agent.name}" class="tier-agent-img"> ${agent.name}`;
            } else {
                agentEl.textContent = `${agent.icon} ${agent.name}`;
            }
            agentEl.title = agent.role;
            tier.appendChild(agentEl);
            index++;
        }
    });
}

// ============================================
// EASTER EGGS
// ============================================

function handleLogoClick() {
    logoClickCount++;
    
    if (logoClickCount >= 10) {
        grassPopup.classList.add('active');
        logoClickCount = 0;
    }
}

// ============================================
// THEME TOGGLE
// ============================================

function toggleTheme() {
    isRedMode = !isRedMode;
    document.body.classList.toggle('red-mode', isRedMode);
    themeBtn.innerHTML = isRedMode 
        ? '<span class="btn-icon">⚫</span> Toggle Dark Mode'
        : '<span class="btn-icon">🔴</span> Toggle Red Mode';
}

// ============================================
// FOOTER JOKE ROTATION
// ============================================

function rotateFooterJoke() {
    footerJoke.textContent = getRandomItem(footerJokes);
}

// ============================================
// EVENT LISTENERS
// ============================================

// Agent Selector
pickAgentBtn.addEventListener('click', pickRandomAgent);

// Ability Chaos
chaosBtn.addEventListener('click', generateAbilityChaos);

// Sage Heal
healBtn.addEventListener('click', spamHeal);

// Chat
sendBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

// Patch Notes
patchBtn.addEventListener('click', generatePatchNotes);

// Rankings
rankingBtn.addEventListener('click', shuffleRankings);

// Logo Easter Egg
logo.addEventListener('click', handleLogoClick);

// Popup Close Buttons
closeGrass.addEventListener('click', () => {
    grassPopup.classList.remove('active');
});

closeIdle.addEventListener('click', () => {
    idlePopup.classList.remove('active');
    resetIdleTimer();
});

// Theme Toggle
themeBtn.addEventListener('click', toggleTheme);

// Reset idle timer on any interaction
document.addEventListener('mousemove', resetIdleTimer);
document.addEventListener('keypress', resetIdleTimer);
document.addEventListener('click', resetIdleTimer);
document.addEventListener('scroll', resetIdleTimer);

// ============================================
// INITIALIZATION
// ============================================

function init() {
    // Initialize rankings
    shuffleRankings();
    
    // Start idle timer
    resetIdleTimer();
    
    // Rotate footer joke periodically
    setInterval(rotateFooterJoke, 10000);
    
    // Initial patch notes
    generatePatchNotes();
    
    console.log('%c🎮 VALORANT Fun Page Loaded!', 'color: #ff4655; font-size: 20px; font-weight: bold;');
    console.log('%cMade with 💔 and caffeine', 'color: #8b978f; font-size: 12px;');
}

// ============================================
// BONUS: KONAMI CODE EASTER EGG
// ============================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonamiEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonamiEasterEgg() {
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
    
    // Show special message
    const popup = document.createElement('div');
    popup.className = 'popup active';
    popup.innerHTML = `
        <div class="popup-content" style="border-color: gold; box-shadow: 0 0 50px gold;">
            <p class="popup-text" style="color: gold;">🎮 KONAMI CODE ACTIVATED! 🎮</p>
            <p style="color: #ece8e1; margin-top: 1rem;">You're a true gamer!</p>
            <p style="color: #8b978f; margin-top: 0.5rem; font-size: 0.9rem;">+100 Radianite Points (not really)</p>
            <button class="btn btn-close" onclick="this.parentElement.parentElement.remove()">Nice!</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${['#ff4655', '#00d4aa', '#ffc857', '#a855f7', '#60a5fa'][Math.floor(Math.random() * 5)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        z-index: 9999;
        pointer-events: none;
        animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
    `;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
}

// Add confetti animation to CSS dynamically
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// ============================================
// BONUS: DOUBLE CLICK SECRET
// ============================================

document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('dblclick', () => {
        title.style.animation = 'glitch 0.5s ease';
        setTimeout(() => title.style.animation = '', 500);
        
        // Random funny message
        const messages = [
            'Stop double clicking everything!',
            'That tickles!',
            'You found... nothing!',
            'Secret? What secret?',
            'Nice try, detective.',
            'The cake is a lie.',
            'Have you tried turning it off and on?'
        ];
        
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 70, 85, 0.9);
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            z-index: 9999;
            animation: slideUp 0.3s ease;
            font-family: 'Orbitron', sans-serif;
        `;
        toast.textContent = getRandomItem(messages);
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    });
});

// Add slideUp animation
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(toastStyle);

// ============================================
// BONUS: RAGE QUIT DETECTOR
// ============================================

let rapidClicks = 0;
let lastClickTime = 0;

document.addEventListener('click', () => {
    const now = Date.now();
    if (now - lastClickTime < 200) {
        rapidClicks++;
        if (rapidClicks >= 15) {
            showRageQuitMessage();
            rapidClicks = 0;
        }
    } else {
        rapidClicks = 0;
    }
    lastClickTime = now;
});

function showRageQuitMessage() {
    const popup = document.createElement('div');
    popup.className = 'popup active';
    popup.innerHTML = `
        <div class="popup-content">
            <p class="popup-text">😤 RAGE DETECTED 😤</p>
            <p style="color: #8b978f; margin-top: 1rem;">Take a deep breath...</p>
            <p style="color: #ff4655; margin-top: 0.5rem;">It's just a game (or is it?)</p>
            <button class="btn btn-close" onclick="this.parentElement.parentElement.remove()">I'm calm now</button>
        </div>
    `;
    document.body.appendChild(popup);
}

// ============================================
// BONUS: TYPING SPEED TRACKER
// ============================================

let typingStartTime = null;
let typedChars = 0;

chatInput.addEventListener('input', (e) => {
    if (!typingStartTime) {
        typingStartTime = Date.now();
    }
    typedChars = e.target.value.length;
    
    // Check for speed typing
    const elapsed = (Date.now() - typingStartTime) / 1000;
    const wpm = (typedChars / 5) / (elapsed / 60);
    
    if (wpm > 150 && typedChars > 20) {
        chatInput.style.boxShadow = '0 0 20px gold';
        chatInput.placeholder = '⚡ SPEED DEMON! ⚡';
    }
});

chatInput.addEventListener('blur', () => {
    typingStartTime = null;
    typedChars = 0;
    chatInput.style.boxShadow = '';
    chatInput.placeholder = 'Type something nice...';
});

// ============================================
// BONUS: PAGE VISIBILITY EASTER EGG
// ============================================

let tabSwitchCount = 0;

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        tabSwitchCount++;
        document.title = '👀 Come back!';
    } else {
        if (tabSwitchCount >= 3) {
            document.title = '🎮 You\'re back! Miss me?';
            setTimeout(() => {
                document.title = 'Choose Your Agent... But Badly 👾';
            }, 2000);
        } else {
            document.title = 'Choose Your Agent... But Badly 👾';
        }
    }
});

// ============================================
// BONUS: SCROLL PROGRESS INDICATOR
// ============================================

const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff4655, #00d4aa);
    z-index: 9999;
    transition: width 0.1s ease;
    width: 0%;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
});

// Run initialization
init();

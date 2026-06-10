/* ==========================================================================
   2002-SIR INDIA PORTAL - SYSTEM ENGINE
   ========================================================================== */

// --- Indian States Databases Registry ---
const STATES_DATA = [
    {
        id: "an",
        name: "Andaman and Nicobar Islands",
        capital: "Port Blair",
        desc: "Pristine tropical islands and rich oceanic records.",
        landmarkIcon: "fa-solid fa-anchor",
        landmarkName: "Cellular Jail & Radhanagar Beach",
        tags: ["Cellular Jail", "Radhanagar Beach", "Islands", "Scuba"],
        url: "https://mohammedrehanalam.github.io/2002-SIR_AndamanAndNicobarIslands/",
        status: "active",
        regionClass: "reg-island"
    },
    {
        id: "ap",
        name: "Andhra Pradesh - Part-1",
        capital: "Amaravati",
        desc: "Glorious historical landmarks and beautifully structured regional directories.",
        landmarkIcon: "fa-solid fa-gopuram",
        landmarkName: "Tirupati Temple",
        tags: ["Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna"],
        url: "https://mohammedrehanalam.github.io/2002-SIR_AndhraPradesh-Part-1/",
        status: "active",
        regionClass: "reg-south"
    },
    {
        id: "ap",
        name: "Andhra Pradesh - Part-2",
        capital: "Amaravati",
        desc: "Glorious historical landmarks and beautifully structured regional directories.",
        landmarkIcon: "fa-solid fa-gopuram",
        landmarkName: "Tirupati Temple",
        tags: ["Kumool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"],
        url: "https://mohammedrehanalam.github.io/2002-SIR_AndhraPradesh-Part-2/",
        status: "active",
        regionClass: "reg-south"
    },
    {
        id: "ar",
        name: "Arunachal Pradesh",
        capital: "Itanagar",
        desc: "Serene landscapes and deeply positive cultural archives.",
        landmarkIcon: "fa-solid fa-mountain",
        landmarkName: "Tawang Monastery",
        tags: ["Tawang", "Namdapha", "Ziro", "Monastery"],
        url: "https://mohammedrehanalam.github.io/2002-SIR_ArunachalPradesh/",
        status: "active",
        regionClass: "reg-northeast"
    },
    {
        id: "as",
        name: "Assam",
        capital: "Dispur",
        desc: "Vibrant tea plantations and rich biological diversity records.",
        landmarkIcon: "fa-solid fa-leaf",
        landmarkName: "Kaziranga Park",
        tags: ["Kaziranga", "Bihu", "Tea Gardens", "Kamakhya"],
        url: "https://mohammedrehanalam.github.io/2002-SIR_Assam/",
        status: "active",
        regionClass: "reg-northeast"
    },
    {
        id: "br",
        name: "Bihar",
        capital: "Patna",
        desc: "Ancient educational heritage and spiritual learning indexes.",
        landmarkIcon: "fa-solid fa-graduation-cap",
        landmarkName: "Nalanda Ruins",
        tags: ["Nalanda", "Bodh Gaya", "Patliputra", "Madhubani"],
        url: null,
        status: "pending",
        regionClass: "reg-east"
    },
    {
        id: "ch",
        name: "Chandigarh",
        capital: "Chandigarh",
        desc: "Masterfully planned modern capital and clean database files.",
        landmarkIcon: "fa-solid fa-city",
        landmarkName: "Rock Garden",
        tags: ["Rock Garden", "Sukhna Lake", "Le Corbusier", "Clean City"],
        url: null,
        status: "pending",
        regionClass: "reg-north"
    },
    {
        id: "cg",
        name: "Chhattisgarh",
        capital: "Raipur",
        desc: "Stunning forest coverage and positive municipal registers.",
        landmarkIcon: "fa-solid fa-tree",
        landmarkName: "Chitrakote Falls",
        tags: ["Chitrakote", "Bastar", "Temples", "Forests"],
        url: null,
        status: "pending",
        regionClass: "reg-central"
    },
    {
        id: "dn",
        name: "Dadra and Nagar Haveli and Daman and Diu",
        capital: "Daman",
        desc: "Scenic coastal forts and peaceful community listings.",
        landmarkIcon: "fa-brands fa-fort-awesome",
        landmarkName: "Diu Fort",
        tags: ["Diu Fort", "Jampa Gateway", "Beaches", "Portuguese"],
        url: null,
        status: "pending",
        regionClass: "reg-west"
    },
    {
        id: "dl",
        name: "Delhi",
        capital: "New Delhi",
        desc: "Prestigious capital region with highly detailed governance archives.",
        landmarkIcon: "fa-solid fa-archway",
        landmarkName: "India Gate",
        tags: ["India Gate", "Qutub Minar", "Red Fort", "Lotus Temple"],
        url: null,
        status: "pending",
        regionClass: "reg-north"
    },
    {
        id: "ga",
        name: "Goa",
        capital: "Panaji",
        desc: "Gorgeous coastlines and detailed community records.",
        landmarkIcon: "fa-solid fa-umbrella-beach",
        landmarkName: "Basilica of Bom Jesus",
        tags: ["Beaches", "Basilica", "Carnival", "Spices"],
        url: null,
        status: "pending",
        regionClass: "reg-west"
    },
    {
        id: "gj",
        name: "Gujarat",
        capital: "Gandhinagar",
        desc: "Dynamic commercial progress and pristine history files.",
        landmarkIcon: "fa-solid fa-landmark",
        landmarkName: "Statue of Unity",
        tags: ["Statue of Unity", "Gir Forest", "Garba", "Rann of Kutch"],
        url: null,
        status: "pending",
        regionClass: "reg-west"
    },
    {
        id: "hr",
        name: "Haryana",
        capital: "Chandigarh",
        desc: "Rich agricultural roots and structured legacy registers.",
        landmarkIcon: "fa-solid fa-wheat-awn",
        landmarkName: "Surajkund Lake",
        tags: ["Surajkund", "Kurukshetra", "Agriculture", "Sports"],
        url: null,
        status: "pending",
        regionClass: "reg-north"
    },
    {
        id: "hp",
        name: "Himachal Pradesh",
        capital: "Shimla",
        desc: "Scenic mountain ranges and detailed regional directories.",
        landmarkIcon: "fa-solid fa-snowflake",
        landmarkName: "Rohtang Pass",
        tags: ["Manali", "Shimla", "Rohtang", "Apples"],
        url: null,
        status: "pending",
        regionClass: "reg-north"
    },
    {
        id: "jk",
        name: "Jammu and Kashmir",
        capital: "Srinagar",
        desc: "Paradise on Earth with spectacular valley directories.",
        landmarkIcon: "fa-solid fa-mountain",
        landmarkName: "Dal Lake & Houseboats",
        tags: ["Dal Lake", "Gulmarg", "Shalimar Bagh", "Pashmina"],
        url: null,
        status: "pending",
        regionClass: "reg-north"
    },
    {
        id: "jh",
        name: "Jharkhand",
        capital: "Ranchi",
        desc: "Abundant mineral wealth and positive community archives.",
        landmarkIcon: "fa-solid fa-gem",
        landmarkName: "Hundru Falls",
        tags: ["Hundru", "Jamshedpur", "Deoghar", "Minerals"],
        url: null,
        status: "pending",
        regionClass: "reg-east"
    },
    {
        id: "ka",
        name: "Karnataka",
        capital: "Bengaluru",
        desc: "Innovative technological hub with rich, vibrant heritage records.",
        landmarkIcon: "fa-solid fa-place-of-worship",
        landmarkName: "Hampi Ruins & Silicon Valley",
        tags: ["Hampi", "Mysore Palace", "Silicon Valley", "Western Ghats"],
        url: null,
        status: "pending",
        regionClass: "reg-south"
    },
    {
        id: "kl",
        name: "Kerala",
        capital: "Thiruvananthapuram",
        desc: "Lush tropical scenery and excellent literacy records.",
        landmarkIcon: "fa-solid fa-tree",
        landmarkName: "Backwaters of Alleppey",
        tags: ["Backwaters", "Munnar", "Kathakali", "Spices"],
        url: null,
        status: "pending",
        regionClass: "reg-south"
    },
    {
        id: "la",
        name: "Ladakh",
        capital: "Leh",
        desc: "Breathtaking high-altitude cold deserts and monastery folders.",
        landmarkIcon: "fa-solid fa-dharmachakra",
        landmarkName: "Pangong Lake",
        tags: ["Pangong Lake", "Leh Palace", "Monasteries", "Passes"],
        url: null,
        status: "pending",
        regionClass: "reg-north"
    },
    {
        id: "ld",
        name: "Lakshadweep",
        capital: "Kavaratti",
        desc: "Gorgeous coral archipelagos and rich marine indexes.",
        landmarkIcon: "fa-solid fa-fish",
        landmarkName: "Bangaram Beach",
        tags: ["Coral Reefs", "Islands", "Kavaratti", "Coconut Gardens"],
        url: null,
        status: "pending",
        regionClass: "reg-island"
    },
    {
        id: "mp",
        name: "Madhya Pradesh",
        capital: "Bhopal",
        desc: "Heart of India with magnificent temple databases.",
        landmarkIcon: "fa-solid fa-landmark-dome",
        landmarkName: "Khajuraho Temples",
        tags: ["Khajuraho", "Sanchi Stupa", "Bhimbetka", "Kanha"],
        url: null,
        status: "pending",
        regionClass: "reg-central"
    },
    {
        id: "mh",
        name: "Maharashtra",
        capital: "Mumbai",
        desc: "Industrial powerhouse with rich, historic administrative databases.",
        landmarkIcon: "fa-solid fa-monument",
        landmarkName: "Gateway of India",
        tags: ["Gateway of India", "Ajanta Caves", "Shivaji Forts", "Bollywood"],
        url: null,
        status: "pending",
        regionClass: "reg-west"
    },
    {
        id: "mn",
        name: "Manipur",
        capital: "Imphal",
        desc: "Exquisite floating lake islands and classical dance files.",
        landmarkIcon: "fa-solid fa-water",
        landmarkName: "Loktak Lake",
        tags: ["Loktak Lake", "Sangai", "Keibul Lamjao", "Dance"],
        url: null,
        status: "pending",
        regionClass: "reg-northeast"
    },
    {
        id: "ml",
        name: "Meghalaya",
        capital: "Shillong",
        desc: "Beautiful cloud architecture and highly positive archives.",
        landmarkIcon: "fa-solid fa-cloud-showers-water",
        landmarkName: "Living Root Bridges",
        tags: ["Root Bridges", "Cherrapunji", "Shillong", "Mawlynnong"],
        url: null,
        status: "pending",
        regionClass: "reg-northeast"
    },
    {
        id: "mz",
        name: "Mizoram",
        capital: "Aizawl",
        desc: "Stunning rolling hills and strong community directories.",
        landmarkIcon: "fa-solid fa-mountain",
        landmarkName: "Blue Mountain",
        tags: ["Blue Mountain", "Cheraw Dance", "Aizawl", "Hills"],
        url: null,
        status: "pending",
        regionClass: "reg-northeast"
    },
    {
        id: "nl",
        name: "Nagaland",
        capital: "Kohima",
        desc: "Vibrant ethnic festivals and beautiful land documents.",
        landmarkIcon: "fa-solid fa-feather",
        landmarkName: "Hornbill Festival Venue",
        tags: ["Hornbill", "Kohima", "Dzukou Valley", "Festivals"],
        url: null,
        status: "pending",
        regionClass: "reg-northeast"
    },
    {
        id: "or",
        name: "Odisha",
        capital: "Bhubaneswar",
        desc: "Serene coastal temples and ancient heritage logs.",
        landmarkIcon: "fa-solid fa-sun",
        landmarkName: "Konark Sun Temple",
        tags: ["Konark", "Puri Jagannath", "Chilika Lake", "Odissi"],
        url: null,
        status: "pending",
        regionClass: "reg-east"
    },
    {
        id: "py",
        name: "Puducherry",
        capital: "Puducherry",
        desc: "Charming French architectural quarters and positive regional files.",
        landmarkIcon: "fa-solid fa-building-columns",
        landmarkName: "Auroville Dome",
        tags: ["Auroville", "French Quarter", "Promenade", "Beaches"],
        url: null,
        status: "pending",
        regionClass: "reg-island"
    },
    {
        id: "pb",
        name: "Punjab",
        capital: "Chandigarh",
        desc: "Golden spirit and highly structured agrarian logs.",
        landmarkIcon: "fa-solid fa-landmark",
        landmarkName: "Golden Temple",
        tags: ["Golden Temple", "Bhangra", "Amritsar", "Lassi"],
        url: null,
        status: "pending",
        regionClass: "reg-north"
    },
    {
        id: "rj",
        name: "Rajasthan",
        capital: "Jaipur",
        desc: "Magnificent desert palaces and colorful local listings.",
        landmarkIcon: "fa-solid fa-chess-rook",
        landmarkName: "Hawa Mahal",
        tags: ["Hawa Mahal", "Thar Desert", "Udaipur", "Forts"],
        url: null,
        status: "pending",
        regionClass: "reg-west"
    },
    {
        id: "sk",
        name: "Sikkim",
        capital: "Gangtok",
        desc: "Majestic snow peaks and green eco-friendly archives.",
        landmarkIcon: "fa-solid fa-mountain-sun",
        landmarkName: "Kangchenjunga",
        tags: ["Kangchenjunga", "Nathu La", "Gurudongmar", "Monasteries"],
        url: null,
        status: "pending",
        regionClass: "reg-northeast"
    },
    {
        id: "tn",
        name: "Tamil Nadu",
        capital: "Chennai",
        desc: "Magnificent temple architecture and extensive cultural catalogs.",
        landmarkIcon: "fa-solid fa-gopuram",
        landmarkName: "Meenakshi Temple",
        tags: ["Meenakshi Temple", "Marina Beach", "Ooty", "Bharatanatyam"],
        url: null,
        status: "pending",
        regionClass: "reg-south"
    },
    {
        id: "tg",
        name: "Telangana",
        capital: "Hyderabad",
        desc: "Incredible cultural heritage and highly efficient digital records system.",
        landmarkIcon: "fa-solid fa-archway",
        landmarkName: "Kakatiya Thoranam & IT Hub",
        tags: ["Charminar", "Golconda", "IT Hub", "Biryani"],
        url: "https://mohammedrehanalam.github.io/2002-SIR_Telangana/",
        status: "active",
        regionClass: "reg-south"
    },
    {
        id: "tr",
        name: "Tripura",
        capital: "Agartala",
        desc: "Elegant royal palaces and rich historic catalogues.",
        landmarkIcon: "fa-brands fa-fort-awesome",
        landmarkName: "Ujjayanta Palace",
        tags: ["Ujjayanta Palace", "Unakoti", "Neermahal", "Bamboo"],
        url: null,
        status: "pending",
        regionClass: "reg-northeast"
    },
    {
        id: "up",
        name: "Uttar Pradesh",
        capital: "Lucknow",
        desc: "Historic land of wonders with massive and detailed legacy files.",
        landmarkIcon: "fa-solid fa-landmark",
        landmarkName: "Taj Mahal & Varanasi Ghats",
        tags: ["Taj Mahal", "Varanasi Ghats", "Sangam", "Awadhi Culture"],
        url: null,
        status: "pending",
        regionClass: "reg-central"
    },
    {
        id: "uk",
        name: "Uttarakhand",
        capital: "Dehradun",
        desc: "Sacred mountain valleys and detailed spiritual maps.",
        landmarkIcon: "fa-solid fa-peace",
        landmarkName: "Valley of Flowers",
        tags: ["Kedarnath", "Rishikesh", "Nainital", "Ganges"],
        url: null,
        status: "pending",
        regionClass: "reg-north"
    },
    {
        id: "wb",
        name: "West Bengal",
        capital: "Kolkata",
        desc: "Vibrant intellectual legacy with vast and structured record systems.",
        landmarkIcon: "fa-solid fa-bridge",
        landmarkName: "Howrah Bridge & Darjeeling",
        tags: ["Howrah Bridge", "Darjeeling", "Sundarbans", "Rosogolla"],
        url: null,
        status: "pending",
        regionClass: "reg-east"
    }
];

// --- App State ---
let currentFilter = "all"; // all, active, pending
let currentSearchQuery = "";

// --- DOM Elements ---
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");
const searchStats = document.getElementById("search-stats");
const matchCountSpan = document.getElementById("match-count");
const totalCountSpan = document.getElementById("total-count");
const statesGrid = document.getElementById("states-grid");
const emptyState = document.getElementById("empty-state");
const resetSearchBtn = document.getElementById("reset-search-btn");
const filterPills = document.querySelectorAll(".pill");
const activePortalsCount = document.getElementById("active-portals-count");

// --- Helper Functions ---

// Highlight search term in text
function highlightText(text, query) {
    if (!query) return text;
    const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape regex characters
    const regex = new RegExp(`(${escapedQuery})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Render dynamic state cards
function renderCards(states, query = "") {
    statesGrid.innerHTML = "";
    
    if (states.length === 0) {
        statesGrid.style.display = "none";
        emptyState.style.display = "flex";
        return;
    }
    
    statesGrid.style.display = "grid";
    emptyState.style.display = "none";

    states.forEach(state => {
        const card = document.createElement("div");
        card.className = `state-card ${state.id} ${state.regionClass} ${state.status === 'active' ? 'active-work' : ''}`;
        
        // Highlight logic
        const highlightedName = highlightText(state.name, query);
        const highlightedCapital = highlightText(state.capital, query);
        const highlightedDesc = highlightText(state.desc, query);
        
        // Generate tags
        const tagsHTML = state.tags.map(tag => {
            const highlightedTag = highlightText(tag, query);
            return `<span class="tag">${highlightedTag}</span>`;
        }).join("");

        // Set status badge content
        const statusText = state.status === "active" ? "Active" : "Awaiting";
        const dotClass = state.status === "active" ? "status-dot active" : "status-dot pending";

        // Button action details
        const btnHTML = state.status === "active" 
            ? `<a href="${state.url}" target="_blank" class="card-link-btn btn-active">
                 <i class="fa-solid fa-arrow-up-right-from-square"></i> Open
               </a>`
            : `<button class="card-link-btn btn-pending" disabled>
                 <i class="fa-solid fa-lock"></i> Work Pending
               </button>`;

        card.innerHTML = `
            <div class="card-graphic-wrapper">
                <div class="card-graphic-pattern"></div>
                <div class="card-visual-illustration">
                    <i class="${state.landmarkIcon} silhouette-icon"></i>
                </div>
                <div class="card-status-badge">
                    <span class="${dotClass}"></span>
                    <span>${statusText}</span>
                </div>
            </div>
            <div class="card-body">
                <div class="state-meta">
                    <div class="state-name-row">
                        <h4 class="state-name">${highlightedName}</h4>
                        <span class="state-capital">${highlightedCapital}</span>
                    </div>
                    <p class="state-desc">${highlightedDesc}</p>
                </div>
                <div class="state-tags">
                    ${tagsHTML}
                </div>
                <div class="card-action-row">
                    ${btnHTML}
                </div>
            </div>
        `;
        
        statesGrid.appendChild(card);
    });
    
    // Recalculate and apply grid glow colors dynamically to avoid adjacent conflicts
    applyDynamicGlows();
}

// Filter and search execution logic
function updateGrid() {
    let filtered = [...STATES_DATA];

    // 1. Filter by category pills
    if (currentFilter === "active") {
        filtered = filtered.filter(s => s.status === "active");
    } else if (currentFilter === "pending") {
        filtered = filtered.filter(s => s.status === "pending");
    }

    // 2. Filter by search query (Fuzzy text match)
    if (currentSearchQuery) {
        const query = currentSearchQuery.toLowerCase().trim();
        filtered = filtered.filter(s => {
            return s.name.toLowerCase().includes(query) ||
                   s.capital.toLowerCase().includes(query) ||
                   s.desc.toLowerCase().includes(query) ||
                   s.landmarkName.toLowerCase().includes(query) ||
                   s.tags.some(tag => tag.toLowerCase().includes(query));
        });
        clearSearchBtn.style.display = "flex";
    } else {
        clearSearchBtn.style.display = "none";
    }

    // 3. Sort logic: Active on top, alphabetical within each status group
    filtered.sort((a, b) => {
        if (a.status === "active" && b.status !== "active") return -1;
        if (a.status !== "active" && b.status === "active") return 1;
        return a.name.localeCompare(b.name);
    });

    // Update Counter indicators
    matchCountSpan.textContent = filtered.length;
    renderCards(filtered, currentSearchQuery);
}

// --- Event Handlers ---

// Handle search input typing
searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value;
    updateGrid();
});

// Clear Search Bar input
clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchQuery = "";
    searchInput.focus();
    updateGrid();
});

// Reset Search from empty state
resetSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchQuery = "";
    currentFilter = "all";
        
    // Reset active states on pills
    filterPills.forEach(pill => {
        if (pill.dataset.filter === "all") {
            pill.classList.add("active");
        } else {
            pill.classList.remove("active");
        }
    });
    
    updateGrid();
});

// Filter category pill selection
filterPills.forEach(pill => {
    pill.addEventListener("click", (e) => {
        // Remove active class from all pills
        filterPills.forEach(p => p.classList.remove("active"));
        
        // Add active to selected pill
        e.currentTarget.classList.add("active");
        currentFilter = e.currentTarget.dataset.filter;
        updateGrid();
    });
});

// Randomly position ambient background blobs on page load
function randomizeBackgroundBlobs() {
    const blobs = document.querySelectorAll(".bg-blur-blob");
    blobs.forEach(blob => {
        const topPercent = Math.floor(Math.random() * 70) + 5;  // Between 5% and 75% to keep centered and avoid scrollbars
        const leftPercent = Math.floor(Math.random() * 70) + 5; // Between 5% and 75%
        blob.style.top = `${topPercent}%`;
        blob.style.left = `${leftPercent}%`;
        blob.style.right = "auto";
        blob.style.bottom = "auto";
    });
}

// --- Initialize App ---
function init() {
    // Set counters
    totalCountSpan.textContent = STATES_DATA.length;
    
    // Count active items
    const activeCount = STATES_DATA.filter(s => s.status === "active").length;
    if (activePortalsCount) {
        activePortalsCount.textContent = activeCount;
    }
    
    // Randomize background blob locations
    randomizeBackgroundBlobs();
    
    // Run first grid build
    updateGrid();
}

// Dynamic Grid Hover Glow Collision Avoidance
function applyDynamicGlows() {
    const cards = statesGrid.querySelectorAll(".state-card");
    if (cards.length === 0) return;

    // Get computed style for the states grid
    const gridStyle = window.getComputedStyle(statesGrid);
    const gridTemplate = gridStyle.getPropertyValue("grid-template-columns");
    
    if (!gridTemplate || gridTemplate === "none") return;

    // Split template track listing to determine number of active columns
    const cols = gridTemplate.trim().split(/\s+/).length;

    cards.forEach((card, idx) => {
        const row = Math.floor(idx / cols);
        const col = idx % cols;
        const colorIndex = (row + col) % 4;

        // Clean slate for glow classes
        card.classList.remove("glow-saffron", "glow-white", "glow-green", "glow-blue");

        // Map colors (0: Saffron, 1: White, 2: Green, 3: Ashoka Blue)
        if (colorIndex === 0) {
            card.classList.add("glow-saffron");
        } else if (colorIndex === 1) {
            card.classList.add("glow-white");
        } else if (colorIndex === 2) {
            card.classList.add("glow-green");
        } else {
            card.classList.add("glow-blue");
        }
    });
}

// Launch application
document.addEventListener("DOMContentLoaded", () => {
    init();
    
    // Initialize high-performance ResizeObserver to dynamically recalculate glows when grid column layout wraps
    if (window.ResizeObserver) {
        const resizeObserver = new ResizeObserver(() => {
            applyDynamicGlows();
        });
        resizeObserver.observe(statesGrid);
    } else {
        window.addEventListener("resize", applyDynamicGlows);
    }
});

// If page is already loaded (due to deferred script execution or direct load), initialize immediately
if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
    if (window.ResizeObserver) {
        const resizeObserver = new ResizeObserver(() => {
            applyDynamicGlows();
        });
        resizeObserver.observe(statesGrid);
    } else {
        window.addEventListener("resize", applyDynamicGlows);
    }
}

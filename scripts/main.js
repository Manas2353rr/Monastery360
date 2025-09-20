// Monastery360 - Main JavaScript

// Global variables
let map;
let panorama;
let currentTour = null;
let currentScene = 0;
let isAudioPlaying = false;
let currentLanguage = 'en';
let markers = [];

// Sample monastery data
const monasteryData = [
    {
        id: 'rumtek',
        name: 'Rumtek Monastery',
        lat: 27.2865,
        lng: 88.5616,
        century: 18,
        region: 'east',
        description: 'The largest monastery in Sikkim, built in the 18th century',
        images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
        ],
        audio: {
            en: 'audio/rumtek_en.mp3',
            hi: 'audio/rumtek_hi.mp3',
            ne: 'audio/rumtek_ne.mp3',
            bh: 'audio/rumtek_bh.mp3'
        }
    },
    {
        id: 'tsuklakhang',
        name: 'Tsuklakhang Monastery',
        lat: 27.3316,
        lng: 88.6133,
        century: 18,
        region: 'east',
        description: 'Royal monastery with exquisite murals and architecture',
        images: [
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            'https://images.unsplash.com/photo-1604608672516-b1610a4bb4ec?w=800'
        ],
        audio: {
            en: 'audio/tsuklakhang_en.mp3',
            hi: 'audio/tsuklakhang_hi.mp3',
            ne: 'audio/tsuklakhang_ne.mp3',
            bh: 'audio/tsuklakhang_bh.mp3'
        }
    },
    {
        id: 'enchey',
        name: 'Enchey Monastery',
        lat: 27.3389,
        lng: 88.6084,
        century: 19,
        region: 'east',
        description: 'A 200-year-old monastery perched on a hilltop',
        images: [
            'https://images.unsplash.com/photo-1604608672516-b1610a4bb4ec?w=800',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
        ],
        audio: {
            en: 'audio/enchey_en.mp3',
            hi: 'audio/enchey_hi.mp3',
            ne: 'audio/enchey_ne.mp3',
            bh: 'audio/enchey_bh.mp3'
        }
    },
    {
        id: 'phodong',
        name: 'Phodong Monastery',
        lat: 27.5167,
        lng: 88.5167,
        century: 18,
        region: 'north',
        description: 'Ancient monastery known for its beautiful murals',
        images: [
            'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
        ],
        audio: {
            en: 'audio/phodong_en.mp3',
            hi: 'audio/phodong_hi.mp3',
            ne: 'audio/phodong_ne.mp3',
            bh: 'audio/phodong_bh.mp3'
        }
    },
    {
        id: 'pembayangtse',
        name: 'Pemayangtse Monastery',
        lat: 27.3167,
        lng: 88.2333,
        century: 17,
        region: 'west',
        description: 'One of the oldest monasteries in Sikkim, founded in the 17th century',
        images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
        ],
        audio: {
            en: 'audio/pembayangtse_en.mp3',
            hi: 'audio/pembayangtse_hi.mp3',
            ne: 'audio/pembayangtse_ne.mp3',
            bh: 'audio/pembayangtse_bh.mp3'
        }
    }
];

// Archive items data
const archiveItems = [
    {
        id: 'manuscript-1',
        category: 'manuscripts',
        title: 'Ancient Buddhist Manuscript',
        description: '17th century Tibetan manuscript from Rumtek Monastery',
        date: '1680 CE',
        location: 'Rumtek',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
    },
    {
        id: 'mural-1',
        category: 'murals',
        title: 'Buddha Mural',
        description: 'Exquisite wall painting depicting Buddha\'s life',
        date: '1750 CE',
        location: 'Tsuklakhang',
        image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800'
    },
    {
        id: 'thangka-1',
        category: 'thangka',
        title: 'Thangka Painting',
        description: 'Traditional Tibetan Buddhist scroll painting',
        date: '1720 CE',
        location: 'Enchey',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
    }
];

// Cultural events data
const culturalEvents = [
    {
        id: 'losar-2025',
        title: 'Losar Festival',
        description: 'Tibetan New Year celebration at Rumtek Monastery',
        date: '2025-09-25',
        time: '6:00 AM - 8:00 PM',
        location: 'Rumtek Monastery',
        type: 'festival'
    },
    {
        id: 'butter-lamp-2025',
        title: 'Butter Lamp Festival',
        description: 'Traditional butter lamp offering ceremony',
        date: '2025-09-28',
        time: '5:00 PM - 7:00 PM',
        location: 'Tsuklakhang Monastery',
        type: 'ritual'
    },
    {
        id: 'meditation-2025',
        title: 'Meditation Retreat',
        description: 'Guided meditation session with senior monks',
        date: '2025-10-02',
        time: '6:00 AM - 12:00 PM',
        location: 'Enchey Monastery',
        type: 'retreat'
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMap();
    initializeCalendar();
    initializeEventListeners();
    checkOfflineMode();
});

// Navigation functions
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
            }
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Map functions
function initializeMap() {
    // Initialize Leaflet map
    map = L.map('monastery-map').setView([27.33, 88.61], 10);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add monastery markers
    addMonasteryMarkers();

    // Set up filter listeners
    document.getElementById('regionFilter').addEventListener('change', filterMonasteries);
    document.getElementById('centuryFilter').addEventListener('change', filterMonasteries);
}

function addMonasteryMarkers() {
    monasteryData.forEach(monastery => {
        const marker = L.marker([monastery.lat, monastery.lng])
            .addTo(map)
            .bindPopup(`
                <div class="monastery-popup">
                    <h3>${monastery.name}</h3>
                    <p>${monastery.description}</p>
                    <p><strong>Century:</strong> ${monastery.century}th</p>
                    <p><strong>Region:</strong> ${monastery.region} Sikkim</p>
                    <button onclick="openVirtualTour('${monastery.id}')" class="popup-button">
                        <i class="fas fa-play"></i> Start Virtual Tour
                    </button>
                </div>
            `);
        
        markers.push({ marker, monastery });
    });
}

function filterMonasteries() {
    const regionFilter = document.getElementById('regionFilter').value;
    const centuryFilter = document.getElementById('centuryFilter').value;

    markers.forEach(({ marker, monastery }) => {
        let show = true;

        if (regionFilter !== 'all' && monastery.region !== regionFilter) {
            show = false;
        }

        if (centuryFilter !== 'all' && monastery.century !== parseInt(centuryFilter)) {
            show = false;
        }

        if (show) {
            marker.addTo(map);
        } else {
            marker.remove();
        }
    });
}

function showNearestMonasteries() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Calculate distances and sort
            const sortedMonasteries = monasteryData.map(monastery => {
                const distance = calculateDistance(userLat, userLng, monastery.lat, monastery.lng);
                return { ...monastery, distance };
            }).sort((a, b) => a.distance - b.distance);

            // Show top 3 nearest
            const nearest = sortedMonasteries.slice(0, 3);
            
            // Create popup with nearest monasteries
            let popupContent = '<h3>Nearest Monasteries</h3>';
            nearest.forEach(monastery => {
                popupContent += `
                    <div style="margin: 10px 0;">
                        <strong>${monastery.name}</strong><br>
                        ${monastery.distance.toFixed(1)} km away<br>
                        <button onclick="openVirtualTour('${monastery.id}')" class="popup-button">
                            <i class="fas fa-play"></i> Tour
                        </button>
                    </div>
                `;
            });

            // Add marker for user location
            L.marker([userLat, userLng])
                .addTo(map)
                .bindPopup(popupContent)
                .openPopup();

        }, function(error) {
            alert('Unable to get your location. Please enable location services.');
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Virtual Tour functions
function openVirtualTour(monasteryId) {
    const monastery = monasteryData.find(m => m.id === monasteryId);
    if (!monastery) return;

    currentTour = monastery;
    currentScene = 0;

    const modal = document.getElementById('tourModal');
    modal.style.display = 'block';

    // Initialize panorama
    initializePanorama(monastery.images[currentScene]);

    // Update scene info
    updateSceneInfo();
}

function initializePanorama(imageUrl) {
    const container = document.getElementById('panorama-container');
    container.innerHTML = '';

    panorama = pannellum.viewer(container, {
        type: 'equirectangular',
        panorama: imageUrl,
        autoLoad: true,
        showZoomCtrl: false,
        showFullscreenCtrl: true,
        compass: false,
        northOffset: 0,
        autoRotate: -2,
        pitch: 0,
        yaw: 0,
        hfov: 100
    });
}

function updateSceneInfo() {
    const monastery = currentTour;
    const sceneTitle = document.getElementById('sceneTitle');
    const sceneDescription = document.getElementById('sceneDescription');

    const scenes = [
        {
            title: `${monastery.name} - Main Prayer Hall`,
            description: 'Experience the grandeur of the main prayer hall with its intricate murals and golden statues.'
        },
        {
            title: `${monastery.name} - Courtyard`,
            description: 'Walk through the peaceful courtyard where monks gather for daily rituals and meditation.'
        }
    ];

    sceneTitle.textContent = scenes[currentScene].title;
    sceneDescription.textContent = scenes[currentScene].description;
}

function closeTourModal() {
    document.getElementById('tourModal').style.display = 'none';
    if (panorama) {
        panorama.destroy();
    }
}

function previousScene() {
    if (currentTour && currentScene > 0) {
        currentScene--;
        initializePanorama(currentTour.images[currentScene]);
        updateSceneInfo();
    }
}

function nextScene() {
    if (currentTour && currentScene < currentTour.images.length - 1) {
        currentScene++;
        initializePanorama(currentTour.images[currentScene]);
        updateSceneInfo();
    }
}

function changeTourLanguage() {
    const language = document.getElementById('tourLanguage').value;
    currentLanguage = language;
    
    // Here you would load audio in the selected language
    console.log(`Changing tour language to: ${language}`);
}

// Digital Archives functions
function searchArchives() {
    const searchTerm = document.getElementById('archiveSearch').value.toLowerCase();
    const archiveItems = document.querySelectorAll('.archive-item');

    archiveItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function searchByTag(tag) {
    const archiveItems = document.querySelectorAll('.archive-item');

    archiveItems.forEach(item => {
        if (item.dataset.category === tag) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function openArchiveItem(itemId) {
    const item = archiveItems.find(i => i.id === itemId);
    if (!item) return;

    // Create modal or redirect to detailed view
    alert(`Opening archive item: ${item.title}\n\n${item.description}\nDate: ${item.date}\nLocation: ${item.location}`);
}

// Audio Guide functions
function togglePlay() {
    const playIcon = document.getElementById('playIcon');
    const audioProgress = document.getElementById('audioProgress');
    
    isAudioPlaying = !isAudioPlaying;
    
    if (isAudioPlaying) {
        playIcon.className = 'fas fa-pause';
        // Simulate audio playback
        simulateAudioPlayback();
    } else {
        playIcon.className = 'fas fa-play';
    }
}

function simulateAudioPlayback() {
    if (!isAudioPlaying) return;
    
    const progress = document.getElementById('audioProgress');
    const timeDisplay = document.getElementById('audioTime');
    let currentTime = 0;
    const totalTime = 180; // 3 minutes in seconds
    
    const interval = setInterval(() => {
        if (!isAudioPlaying || currentTime >= totalTime) {
            clearInterval(interval);
            if (currentTime >= totalTime) {
                document.getElementById('playIcon').className = 'fas fa-play';
                isAudioPlaying = false;
            }
            return;
        }
        
        currentTime++;
        const percentage = (currentTime / totalTime) * 100;
        progress.style.width = percentage + '%';
        
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')} / 3:00`;
    }, 1000);
}

function toggleLanguage() {
    const languages = ['en', 'hi', 'ne', 'bh'];
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    currentLanguage = languages[nextIndex];
    
    // Update UI to reflect language change
    console.log(`Audio guide language changed to: ${currentLanguage}`);
}

function toggleOfflineMode() {
    const offlineMode = document.getElementById('offlineMode').checked;
    const connectionStatus = document.querySelector('.connection-status span');
    
    if (offlineMode) {
        connectionStatus.textContent = 'Offline Mode';
        // Load offline content
        loadOfflineContent();
    } else {
        connectionStatus.textContent = 'Online Mode';
        // Load online content
        loadOnlineContent();
    }
}

function checkOfflineMode() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }).catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    }
}

function loadOfflineContent() {
    // Load cached content for offline use
    console.log('Loading offline content...');
}

function loadOnlineContent() {
    // Load fresh content from server
    console.log('Loading online content...');
}

// Calendar functions
function initializeCalendar() {
    generateCalendar();
}

function generateCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');
    
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Set month header
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    currentMonthElement.textContent = `${monthNames[month]} ${year}`;
    
    // Clear calendar
    calendarGrid.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Check if this day has events
        const hasEvents = checkForEvents(year, month, day);
        if (hasEvents) {
            dayElement.classList.add('event');
            dayElement.onclick = () => showDayEvents(year, month, day);
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

function changeMonth(direction) {
    // This is a simplified version - in a real app, you'd manage the current month state
    generateCalendar();
}

function checkForEvents(year, month, day) {
    // Check if any events fall on this day
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return culturalEvents.some(event => event.date === dateStr);
}

function showDayEvents(year, month, day) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayEvents = culturalEvents.filter(event => event.date === dateStr);
    
    if (dayEvents.length > 0) {
        let eventList = `Events on ${month + 1}/${day}/${year}:\n\n`;
        dayEvents.forEach(event => {
            eventList += `• ${event.title}\n  ${event.description}\n  ${event.time} at ${event.location}\n\n`;
        });
        alert(eventList);
    }
}

// Booking functions
function submitBooking(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('visitorName').value,
        email: document.getElementById('visitorEmail').value,
        phone: document.getElementById('visitorPhone').value,
        visitDate: document.getElementById('visitDate').value,
        groupSize: document.getElementById('groupSize').value,
        monastery: document.getElementById('monasterySelect').value,
        experienceType: document.getElementById('experienceType').value,
        specialRequests: document.getElementById('specialRequests').value
    };
    
    // Simulate booking submission
    console.log('Booking submitted:', formData);
    
    // Show success message
    alert(`Thank you for your booking request, ${formData.name}! \n\nWe will contact you within 24 hours to confirm your ${formData.experienceType.replace('-', ' ')} at ${formData.monastery.replace('-', ' ')} monastery on ${formData.visitDate}. \n\nA confirmation email has been sent to ${formData.email}.`);
    
    // Reset form
    event.target.reset();
}

function bookEvent(eventId) {
    const event = culturalEvents.find(e => e.id === eventId);
    if (!event) return;
    
    alert(`Booking for: ${event.title}\n\nDate: ${event.date}\nTime: ${event.time}\nLocation: ${event.location}\n\nPlease fill out the booking form to reserve your participation.`);
    
    // Scroll to booking section
    scrollToSection('#booking');
    
    // Pre-fill some form fields
    document.getElementById('visitDate').value = event.date;
}

// Event listeners
function initializeEventListeners() {
    // Language selector
    document.getElementById('languageSelect').addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguageContent();
    });
    
    // Archive search
    document.getElementById('archiveSearch').addEventListener('input', searchArchives);
    
    // Window resize
    window.addEventListener('resize', function() {
        if (map) {
            map.invalidateSize();
        }
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('tourModal');
        if (event.target === modal) {
            closeTourModal();
        }
    });
}

function updateLanguageContent() {
    // Update content based on selected language
    const content = {
        en: {
            heroTitle: 'Discover Sikkim\'s Sacred Heritage',
            heroSubtitle: 'Immerse yourself in the spiritual and cultural treasures of over 200 ancient monasteries through cutting-edge digital technology'
        },
        hi: {
            heroTitle: 'सिक्किम की पवित्र विरासत की खोज करें',
            heroSubtitle: '200 से अधिक प्राचीन मठों की आध्यात्मिक और सांस्कृतिक खजानों में अत्याधुनिक डिजिटल तकनीक के माध्यम से डूबकी लगाएं'
        },
        ne: {
            heroTitle: 'सिक्किमको पवित्र सम्पदा खोज्नुहोस्',
            heroSubtitle: '200 भन्दा बढी प्राचीन गुम्बाहरूको आध्यात्मिक र सांस्कृतिक खजानामा अत्याधुनिक डिजिटल प्रविधि मार्फत डुबकी लगाउनुहोस्'
        },
        bh: {
            heroTitle: 'སིཀིམ་གྱི་གཏེར་ཆེན་ཆོས་སྲུང་',
            heroSubtitle: 'དུས་རབས་ཉེར་གཉིས་པའི་དྲ་ཐོག་ཐབས་ལམ་བརྒྱུད་ནས་དགོན་པ་གོང་མ་རྒྱལ་བཅུ་གཉིས་ལྷག་གི་ལྷུན་གྲུབ་ཆོས་དང་རིག་གནས་ཀྱི་གཏེར་ཆེན་རོལ་མོ་ལོངས་'
        }
    };

    const selectedContent = content[currentLanguage] || content.en;
    document.querySelector('.hero-title').textContent = selectedContent.heroTitle;
    document.querySelector('.hero-subtitle').textContent = selectedContent.heroSubtitle;
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Service Worker for offline functionality
if ('serviceWorker' in navigator) {
    const swContent = `
        const CACHE_NAME = 'monastery360-v1';
        const urlsToCache = [
            '/',
            '/index.html',
            '/styles/main.css',
            '/scripts/main.js',
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
            'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css',
            'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        ];

        self.addEventListener('install', event => {
            event.waitUntil(
                caches.open(CACHE_NAME)
                    .then(cache => cache.addAll(urlsToCache))
            );
        });

        self.addEventListener('fetch', event => {
            event.respondWith(
                caches.match(event.request)
                    .then(response => response || fetch(event.request))
            );
        });
    `;
    
    const blob = new Blob([swContent], { type: 'application/javascript' });
    const swUrl = URL.createObjectURL(blob);
    
    navigator.serviceWorker.register(swUrl).then(function(registration) {
        console.log('ServiceWorker registration successful');
    }).catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}

// Performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        });
    }
}

trackPerformance();

// Export functions for global access
window.openVirtualTour = openVirtualTour;
window.closeTourModal = closeTourModal;
window.previousScene = previousScene;
window.nextScene = nextScene;
window.changeTourLanguage = changeTourLanguage;
window.searchArchives = searchArchives;
window.searchByTag = searchByTag;
window.showNearestMonasteries = showNearestMonasteries;
window.togglePlay = togglePlay;
window.toggleLanguage = toggleLanguage;
window.toggleOfflineMode = toggleOfflineMode;
window.changeMonth = changeMonth;
window.submitBooking = submitBooking;
window.bookEvent = bookEvent;
window.scrollToSection = scrollToSection;
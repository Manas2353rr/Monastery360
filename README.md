# Monastery360 - Digital Heritage Platform for Sikkim

## Overview

Monastery360 is a comprehensive digital heritage platform designed to preserve, showcase, and provide immersive access to Sikkim's rich Buddhist monastery culture. The platform leverages cutting-edge web technologies to offer virtual tours, interactive mapping, digital archives, and smart audio guides for over 200 ancient monasteries dating back to the 17th and 18th centuries.

## Features

### 🏛️ Virtual Tours
- **360° Panoramic Views**: Immersive virtual tours of monastery interiors and surroundings
- **Multi-language Narration**: Audio guides available in English, Hindi, Nepali, and Tibetan
- **Interactive Navigation**: Seamless transitions between different areas within monasteries
- **High-resolution Imagery**: Professional photography showcasing architectural details

### 🗺️ Interactive Map
- **Geo-tagged Locations**: Precise positioning of all 200+ monasteries
- **Smart Filtering**: Filter by region, century, or monastery type
- **Route Planning**: Integration with local transport and tourism services
- **Nearby Attractions**: Discover points of interest around each monastery

### 📚 Digital Archives
- **Ancient Manuscripts**: Digitized rare texts and religious documents
- **Mural Collections**: High-resolution images of wall paintings and artwork
- **AI-powered Search**: Intelligent categorization and search functionality
- **Historical Documents**: Access to monastery records and heritage documents

### 🎧 Smart Audio Guide
- **Location-based Triggers**: Automatic audio playback using Bluetooth beacons or GPS
- **Offline Mode**: Download content for areas with poor connectivity
- **Multi-language Support**: Content available in 4 regional languages
- **Adaptive Playback**: Smart audio routing based on user location

### 📅 Cultural Calendar
- **Festival Schedule**: Complete calendar of religious events and festivals
- **Booking Integration**: Direct booking for cultural participation
- **Event Reminders**: Notifications for upcoming events
- **Live Updates**: Real-time event information and changes

### 🎫 Booking System
- **Experience Packages**: Various tour options from virtual to immersive cultural programs
- **Group Bookings**: Support for different group sizes
- **Special Requirements**: Accessibility and dietary accommodation options
- **24/7 Support**: Round-the-clock customer service

## Technology Stack

### Frontend
- **HTML5/CSS3**: Modern, responsive design with CSS Grid and Flexbox
- **JavaScript ES6+**: Vanilla JavaScript for optimal performance
- **Leaflet.js**: Interactive mapping and geolocation services
- **Pannellum**: 360° panoramic image viewer
- **Font Awesome**: Icon library for consistent UI elements

### Features & APIs
- **Geolocation API**: User location detection for nearest monastery suggestions
- **Service Worker**: Offline functionality and caching
- **Web Storage**: Local storage for user preferences and offline content
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

### Design Principles
- **Accessibility**: WCAG 2.1 compliant with proper contrast ratios and keyboard navigation
- **Performance**: Optimized loading times with lazy loading and image optimization
- **Cultural Sensitivity**: Respectful representation of religious and cultural elements
- **User Experience**: Intuitive navigation with clear call-to-action elements

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sikkim-tourism/monastery360.git
   cd monastery360
   ```

2. **Open the application**:
   Simply open `index.html` in a modern web browser. No server setup required for basic functionality.

3. **For development**:
   - Use a local web server for full functionality (recommended for testing geolocation and service worker features)
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - PHP: `php -S localhost:8000`

## Usage Guide

### Virtual Tours
1. Navigate to the "Virtual Tours" section
2. Click on any monastery card to start a 360° tour
3. Use mouse/touch to navigate the panoramic view
4. Switch between different areas using tour controls
5. Change audio language using the language selector

### Interactive Map
1. Go to the "Interactive Map" section
2. Click on monastery markers for detailed information
3. Use filters to find monasteries by region or century
4. Click "Find Nearby" to locate monasteries near your location
5. Get directions and travel information

### Digital Archives
1. Visit the "Digital Archives" section
2. Use the search bar to find specific items
3. Click on AI-powered tag buttons for quick filtering
4. Click on archive items to view detailed information
5. Download or share interesting findings

### Audio Guide
1. Access the "Audio Guide" section
2. The app automatically detects nearby monasteries
3. Toggle play/pause for audio narration
4. Switch between languages
5. Enable offline mode for remote areas

### Cultural Calendar
1. Browse the "Cultural Calendar" section
2. Navigate through months using arrow buttons
3. Click on highlighted dates with events
4. View upcoming events in the sidebar
5. Book participation directly from event cards

### Booking System
1. Fill out the booking form with your details
2. Select your preferred monastery and experience type
3. Choose visit date and group size
4. Add any special requirements
5. Submit the form for confirmation

## Data Structure

### Monastery Object
```javascript
{
    id: 'rumtek',
    name: 'Rumtek Monastery',
    lat: 27.2865,
    lng: 88.5616,
    century: 18,
    region: 'east',
    description: 'The largest monastery in Sikkim',
    images: ['url1', 'url2'],
    audio: {
        en: 'audio/rumtek_en.mp3',
        hi: 'audio/rumtek_hi.mp3',
        ne: 'audio/rumtek_ne.mp3',
        bh: 'audio/rumtek_bh.mp3'
    }
}
```

### Archive Item Object
```javascript
{
    id: 'manuscript-1',
    category: 'manuscripts',
    title: 'Ancient Buddhist Manuscript',
    description: '17th century Tibetan manuscript',
    date: '1680 CE',
    location: 'Rumtek',
    image: 'url_to_image'
}
```

### Cultural Event Object
```javascript
{
    id: 'losar-2025',
    title: 'Losar Festival',
    description: 'Tibetan New Year celebration',
    date: '2025-09-25',
    time: '6:00 AM - 8:00 PM',
    location: 'Rumtek Monastery',
    type: 'festival'
}
```

## Browser Compatibility

- **Chrome**: 80+ (Recommended)
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+
- **Mobile Browsers**: iOS Safari 13+, Chrome Mobile 80+

## Performance Optimization

- **Lazy Loading**: Images and content load as needed
- **Caching**: Service worker implementation for offline access
- **Image Optimization**: Responsive images with appropriate formats
- **Minification**: CSS and JavaScript files are minified
- **CDN Usage**: External libraries loaded from CDNs for faster delivery

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support throughout the application
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: WCAG 2.1 AA compliant color contrast ratios
- **Text Scaling**: Responsive text that scales with user preferences
- **Alternative Text**: Descriptive alt text for all images

## Security Considerations

- **HTTPS**: All external resources loaded over HTTPS
- **Content Security Policy**: Proper CSP headers implemented
- **Input Validation**: Form inputs are validated and sanitized
- **Privacy**: No personal data is stored without consent

## Future Enhancements

### Phase 2 Features
- **VR Integration**: WebXR support for virtual reality experiences
- **AI Chatbot**: Intelligent assistant for tourist queries
- **Social Features**: User reviews and photo sharing
- **Advanced Analytics**: Detailed visitor insights and behavior tracking

### Phase 3 Features
- **Mobile App**: Native iOS and Android applications
- **Augmented Reality**: AR features for on-site experiences
- **Blockchain**: Digital certificates for cultural participation
- **IoT Integration**: Smart monastery infrastructure connectivity

## Contributing

We welcome contributions from developers, designers, and cultural experts. Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is developed for the Government of Sikkim and is subject to applicable government regulations and cultural preservation guidelines.

## Contact

**Government of Sikkim - Tourism Department**
- Email: tourism@sikkim.gov.in
- Phone: +91 3592 202 111
- Website: https://tourism.sikkim.gov.in

**Technical Support**
- Email: support@monastery360.in
- Phone: +91 12345 67890
- Hours: 24/7 support available

## Acknowledgments

- **Government of Sikkim** for project initiation and support
- **Local monastery communities** for cultural guidance and content
- **Tourism stakeholders** for collaborative development
- **Cultural experts** for historical accuracy and preservation insights

---

*Developed with ❤️ for preserving Sikkim's rich cultural heritage*

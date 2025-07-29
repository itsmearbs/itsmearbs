# Presidential Commission on Visiting Forces (PCVF) Website

A comprehensive, modern website for the Presidential Commission on Visiting Forces featuring professional design, responsive layout, and complete navigation structure.

## 🌟 Features

### Design & Layout
- **Clean, Professional Design**: Modern government website aesthetic with PCVF branding
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Accessibility**: WCAG 2.1 compliant with proper semantic HTML and keyboard navigation
- **Modern Typography**: Inter font family for excellent readability
- **Government Color Scheme**: Professional blue gradient theme (#0066cc to #004499)

### Navigation & Structure
- **Sticky Header**: Fixed navigation with logo and agency information
- **Dropdown Menus**: Comprehensive dropdown navigation for all major sections:
  - About Us (Vision/Mission, Legal Basis, Structure, History)
  - What We Do (Coordination, Oversight, Engagement, Policy)
  - SOFAs (PH-US VFA, PH-AUS SOVFA, PH-JPN RAA, FAQs)
  - Publications (Reports, Papers, Guidelines, Materials)
  - Engagements (Town Halls, Committees, Meetings, Gallery)
  - Contact (Office Info, Feedback, Directory)
- **Mobile-Friendly**: Hamburger menu for mobile devices
- **Language Toggle**: English/Filipino language options

### Content Sections

#### Hero Section
- **Mission Statement**: "Upholding Sovereignty. Strengthening Partnerships. Serving the Nation."
- **Call-to-Action Buttons**: Learn More and Contact Us
- **Professional Background**: Gradient overlay design

#### Quick Access Tiles
- Know Your SOFAs
- Request for Assistance
- Report an Incident
- Community Feedback
- Transparency Seal

#### News & Updates
- **Grid-Based Layout**: Responsive news card grid
- **Featured Articles**: Expandable featured news items
- **Category Filtering**: Filter by Featured, Community, Diplomacy, Training, Publication, Policy
- **Sample News Content**: 6 sample news articles with metadata

#### Publications Section
- Annual Reports
- M&E Reports
- Policy Guidelines
- Download capabilities

#### About PCVF
- Mission and vision highlights
- Core values with icons
- Visual elements

#### Transparency Section
- Government transparency requirements
- Links to mandate, officials, budget, reports
- FOI information

### Interactive Features
- **Smooth Scrolling**: Animated navigation between sections
- **Hover Effects**: Interactive buttons and cards
- **Loading Animations**: Fade-in effects on scroll
- **Back to Top Button**: Floating action button
- **Form Handling**: Contact form validation
- **Notification System**: Success/error message display

### Technical Implementation

#### File Structure
```
/
├── index.html              # Main homepage
├── css/
│   └── style.css          # Complete styling
├── js/
│   └── script.js          # Interactive functionality
├── images/
│   └── placeholder.html   # Image documentation
├── pages/
│   └── about-full.html    # Sample detailed page
└── files/                 # Document downloads
```

#### Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript ES6+**: Interactive functionality
- **Font Awesome 6**: Professional icons
- **Google Fonts**: Inter typography
- **Responsive Design**: Mobile-first approach

### Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Android Chrome)

## 🚀 Getting Started

### Local Development
1. Clone or download the project files
2. Open `index.html` in a web browser
3. For development, use a local server (Live Server extension in VS Code recommended)

### Customization

#### Logo Replacement
- Replace `images/pcvf-logo.png` with the official PCVF logo
- The logo placeholder will automatically show "PCVF" text if image fails to load
- Recommended size: 60x60 pixels

#### Content Updates
- News articles: Update content in the news grid section of `index.html`
- Publications: Modify the publications section
- About content: Edit the about section or the dedicated `pages/about-full.html`

#### Styling Customization
- Primary colors can be changed in `css/style.css` (search for #0066cc and #004499)
- Typography adjustments in the CSS variables section
- Layout modifications in the respective component sections

#### Adding New Pages
- Follow the structure of `pages/about-full.html`
- Ensure consistent header and footer
- Link new pages in the navigation dropdowns

### Image Requirements
The website expects these images (currently using CSS placeholders):
- `images/pcvf-logo.png` - PCVF official logo
- `images/news-1.jpg` to `images/news-6.jpg` - News article images
- `images/pcvf-building.jpg` - PCVF office building
- Hero background images (can be added to CSS)

### Document Files
Place downloadable documents in the `files/` directory:
- Annual reports (PDF)
- M&E reports (PDF)
- Policy guidelines (PDF)
- Other official documents

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Laptop**: 1024px - 1199px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Screen reader compatibility

## 🔧 Maintenance

### Regular Updates
- Update news content regularly
- Refresh publication links
- Maintain current contact information
- Update transparency information as required

### Performance Optimization
- Optimize images before upload
- Minimize CSS/JS if needed for production
- Consider CDN for external resources
- Monitor page load times

## 📞 Support

For technical support or questions about the website:
- Email: info@pcvf.gov.ph
- Phone: +63 (2) 834-4000

## 📄 License

This website is developed for the Presidential Commission on Visiting Forces, an attached agency of the Department of Foreign Affairs, Republic of the Philippines.

---

**Presidential Commission on Visiting Forces**  
*Upholding Sovereignty. Strengthening Partnerships. Serving the Nation.*

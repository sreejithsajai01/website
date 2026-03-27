# St. Mary's CBSE School Website

## Project Structure

```
public_html/
│
├── index.html          # Homepage with hero slider, notice board, about section
├── about.html          # About page with history, vision, mission, leadership
├── contact.html        # Contact page with form and map
├── academics.html      # Academics and curriculum information
├── admissions.html     # Admission process and requirements
├── facilities.html     # School facilities and infrastructure
├── gallery.html        # Photo gallery
│
├── css/
│   └── style.css       # Main stylesheet with all styling
│
├── js/
│   └── script.js       # JavaScript for navigation and interactivity
│
└── images/             # All images (already present)
```

## Features

### Design & Styling
- **Color Scheme**: Navy Blue (#3d5a80) and Gold (#f4c430)
- **Typography**: Lora (serif) for headings, Poppins (sans-serif) for body text
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Modern UI**: Cards, gradients, shadows, smooth transitions

### Components
1. **Top Bar**: Contact information and quick links
2. **Navigation**: Sticky header with mobile hamburger menu
3. **Hero Section**: Full-screen banner with call-to-action buttons
4. **Notice Board**: Animated marquee for announcements
5. **School Network Slider**: 3D carousel showcasing sister institutions
6. **Footer**: Multi-column layout with social links

### Pages

#### 1. Homepage (index.html)
- Hero slider with school motto
- Notice board with latest announcements
- About section with quick links
- School network 3D carousel
- Responsive footer

#### 2. About Us (about.html)
- School history and background
- Vision and mission statements
- School motto and anthem
- President's and Principal's messages
- Core values with icons
- Management team information

#### 3. Contact (contact.html)
- Complete contact information
- Google Maps integration
- Contact form with validation
- Social media links
- Email and phone details

#### 4. Academics (academics.html)
- CBSE curriculum details
- Academic levels (Pre-primary to Primary)
- Key features of education
- Student-centric learning approach

#### 5. Admissions (admissions.html)
- Step-by-step admission process
- Age criteria and eligibility
- Important dates and deadlines
- Quick information cards
- Call-to-action for enquiry

#### 6. Facilities (facilities.html)
- Smart classrooms
- Early childhood learning spaces
- Digital learning facilities
- Sports and play areas
- Safety and security features
- Parent communication systems

#### 7. Gallery (gallery.html)
- Photo grid layout
- Campus images
- Laboratory facilities
- Activity spaces
- Hover effects on images

## JavaScript Features

### Navigation
- Mobile menu toggle
- Smooth scrolling
- Active page highlighting
- Click outside to close menu

### School Network Slider
- 3D carousel effect
- Auto-play functionality
- Manual navigation buttons
- Smooth transitions
- Perspective transforms

### Additional Features
- Scroll-to-top button
- Form validation
- Responsive behavior
- Dynamic content loading

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations
- Optimized CSS with minimal redundancy
- Efficient JavaScript with event delegation
- Lazy loading for images (can be added)
- Minified assets (for production)

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary: #3d5a80;      /* Navy Blue */
  --secondary: #f4c430;    /* Gold */
  --text: #1c1c1c;         /* Dark text */
  --bg: #ffffff;           /* White background */
}
```

### Fonts
Change Google Fonts import in `style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
```

### Content
- Edit HTML files directly to update text content
- Replace images in the `images/` folder
- Update contact information in all pages

## Deployment

### Local Testing
1. Open `index.html` in a web browser
2. Test all navigation links
3. Verify responsive design on different screen sizes

### Web Hosting
1. Upload entire `public_html` folder to your web server
2. Ensure proper file permissions (644 for files, 755 for directories)
3. Configure domain to point to the folder
4. Test all functionality on live server

### Recommended Hosting
- Shared hosting (cPanel, Plesk)
- Static site hosting (Netlify, Vercel, GitHub Pages)
- Cloud hosting (AWS S3, Google Cloud Storage)

## Maintenance

### Regular Updates
- Update notice board content regularly
- Add new gallery images
- Keep contact information current
- Update admission dates annually

### SEO Optimization
- Add meta descriptions to all pages
- Use semantic HTML tags
- Optimize image alt texts
- Create sitemap.xml
- Add robots.txt

## Support
For technical support or customization requests, contact:
- Email: cbsestmarysvashi@gmail.com
- Phone: 022-27662725

## Credits
- Design & Development: Aionpixel Technologies Pvt. Ltd.
- Content: St. Mary's CBSE School
- Images: St. Mary's CBSE School

## Version
Version 1.0 - March 2026

---

© 2026 St. Mary's CBSE School. All Rights Reserved.

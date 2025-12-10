# Brooks Built Marketing Website

A modern, futuristic marketing website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Futuristic design with animated gradients, glassmorphism, and glow effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Fast Performance**: Static site generation for optimal speed
- **Smooth Animations**: Framer Motion for professional animations
- **6 Pages**: Home, About, Services, Portfolio (coming soon), Testimonials (coming soon), Contact

## 📋 Pages

- **Home**: Hero section, services overview, why choose us, process, testimonials preview
- **About**: Company story, mission & vision, core values, differentiators
- **Services**: Comprehensive breakdown of all marketing services
- **Portfolio**: Coming soon structure for case studies
- **Testimonials**: Coming soon structure for client reviews
- **Contact**: Contact form (Fillout.com), Google Maps, contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router with static export)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk (headings), Inter (body)
- **Deployment**: Heroku-ready with Express.js server

## 🏃 Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Build the static site
npm run build

# Test the production build locally
npm start
```

## 📦 Deployment to Heroku

### Prerequisites
- Heroku CLI installed
- Heroku account

### Steps

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Create Heroku App**:
```bash
heroku create brooks-built-marketing
# Or: heroku create (generates random name)
```

3. **Set Node.js Buildpack**:
```bash
heroku buildpacks:set heroku/nodejs
```

4. **Deploy**:
```bash
git push heroku main
```

5. **Open Your Site**:
```bash
heroku open
```

## ⚙️ Configuration

### Update Fillout Form

1. Get your Fillout form ID from fillout.com
2. Edit `/components/contact/FilloutForm.js`
3. Replace `'YOUR_FILLOUT_FORM_ID'` with your actual form ID

### Update Google Maps

1. Go to Google Maps and search for your address
2. Click "Share" → "Embed a map"
3. Copy the iframe src URL
4. Update `/components/contact/GoogleMap.js` with the new URL

### Update Company Information

Edit `/data/company.js` to update:
- Contact information
- Social media links
- Business hours
- About content

### Update Services

Edit `/data/services.js` to customize:
- Service offerings
- Stats and metrics
- Service descriptions

## 🎨 Brand Colors

- **Beige**: #D4C5B0 (from logo)
- **Charcoal**: #2B2B2B (from logo)
- **Electric Blue**: #00D9FF (accent, CTAs)
- **Deep Navy**: #0A0E27 (dark backgrounds)

## 📁 Project Structure

```
brooks-built-marketing/
├── app/                    # Next.js pages
│   ├── about/
│   ├── contact/
│   ├── portfolio/
│   ├── services/
│   ├── testimonials/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/             # React components
│   ├── contact/
│   ├── home/
│   ├── layout/
│   └── shared/
├── data/                   # Content data
│   ├── company.js
│   ├── navigation.js
│   └── services.js
├── public/                 # Static assets
│   └── images/
├── server.js              # Express server for Heroku
├── next.config.mjs        # Next.js configuration
├── package.json
├── Procfile              # Heroku deployment
└── README.md
```

## 🔄 Future Enhancements

- Add real case studies to Portfolio page
- Add client testimonials to Testimonials page
- Implement Google Analytics
- Add blog functionality (optional)
- Set up custom domain

## 📧 Contact

**Brooks Built Marketing**
- Phone: 832-302-5309
- Email: trey@brooksbuiltmarketing.com
- Address: 20228 Schiel Rd, Cypress, TX 77433

## 📄 License

© 2024 Brooks Built Marketing. All rights reserved.

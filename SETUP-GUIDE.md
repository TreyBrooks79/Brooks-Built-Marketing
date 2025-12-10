# Brooks Built Marketing Website - Setup Guide

## 🎉 Your Website is Ready!

Your modern marketing website is complete and running at: **http://localhost:3001**

---

## 📱 What You Have

### 6 Complete Pages
1. **Home** - Landing page with all your services and call-to-actions
2. **About** - Your company story and values
3. **Services** - All your marketing services listed
4. **Portfolio** - Ready for case studies (shows "Coming Soon" for now)
5. **Testimonials** - Ready for reviews (shows "Coming Soon" for now)
6. **Contact** - Contact form, map, and your info

### Design
- Clean beige (#D4C5B0) and black color scheme from your logo
- Mobile-friendly (works on phones, tablets, computers)
- Smooth animations
- Professional look

---

## ✅ What's Already Set Up

✓ Your logo is displayed
✓ Your phone number: 832-302-5309
✓ Your email: trey@brooksbuiltmarketing.com
✓ Your address: 20228 Schiel Rd, Cypress, TX 77433
✓ Your social media: @brooksbuiltmarketing
✓ All your services are listed

---

## 📝 Things You Need to Do

### 1. Update Your Fillout Form (Important!)

**Location:** `/components/contact/FilloutForm.js`

**What to do:**
1. Go to your Fillout.com account
2. Find your form ID (looks like: abc123def456)
3. Open the file above
4. Replace `YOUR_FILLOUT_FORM_ID` with your actual ID

**Example:**
```javascript
// Change this:
export default function FilloutForm({ formId = 'YOUR_FILLOUT_FORM_ID' }) {

// To this (use your real ID):
export default function FilloutForm({ formId = 'abc123def456' }) {
```

### 2. Update Google Maps (Important!)

**Location:** `/components/contact/GoogleMap.js`

**What to do:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for: 20228 Schiel Rd, Cypress, TX 77433
3. Click the "Share" button
4. Click "Embed a map"
5. Copy the URL from the iframe (starts with https://www.google.com/maps/embed?pb=...)
6. Replace the URL in the file

---

## 🚀 How to Use Your Website

### View It Locally
```bash
cd /Users/treybrooks/brooks-built-marketing
npm run dev
```
Then open: http://localhost:3001

### Make Changes
- **Colors**: Edit `/app/globals.css`
- **Contact Info**: Edit `/data/company.js`
- **Services**: Edit `/data/services.js`
- **Any Page**: Edit files in `/app/` folder

### Stop the Server
Press `Ctrl + C` in the terminal

---

## 🌐 Deploy to Heroku (When Ready)

### Step 1: Prepare
```bash
cd /Users/treybrooks/brooks-built-marketing
git add .
git commit -m "My marketing website"
```

### Step 2: Create Heroku App
```bash
heroku create brooks-built-marketing
```

### Step 3: Deploy
```bash
git push heroku main
```

### Step 4: View Your Live Site
```bash
heroku open
```

---

## 📂 Important Files

| File | What It Does |
|------|-------------|
| `/app/page.js` | Home page |
| `/app/about/page.js` | About page |
| `/app/services/page.js` | Services page |
| `/app/contact/page.js` | Contact page |
| `/data/company.js` | Your business info |
| `/data/services.js` | Your services list |
| `/app/globals.css` | Colors and styling |
| `/components/contact/FilloutForm.js` | Contact form (needs your form ID) |
| `/components/contact/GoogleMap.js` | Map (needs proper URL) |

---

## 💡 Adding Content Later

### Add Case Studies
1. Open `/app/portfolio/page.js`
2. Replace the "Coming Soon" section with real case studies

### Add Testimonials
1. Open `/app/testimonials/page.js`
2. Replace the "Coming Soon" section with real testimonials

---

## 🆘 Need Help?

### Website Not Loading?
- Make sure you're in the right folder
- Run: `npm run dev`
- Check: http://localhost:3001

### Colors Look Wrong?
- Edit `/app/globals.css`
- Current colors: Beige (#D4C5B0) and Black (#000000)

### Contact Form Not Working?
- Update your Fillout form ID (see step 1 above)

### Map Not Showing?
- Update Google Maps URL (see step 2 above)

---

## 📞 Your Contact Information

All this info is already in the website:

- **Phone:** 832-302-5309
- **Email:** trey@brooksbuiltmarketing.com
- **Address:** 20228 Schiel Rd, Cypress, TX 77433
- **Instagram:** @brooksbuiltmarketing
- **Facebook:** @brooksbuiltmarketing
- **LinkedIn:** @brooksbuiltmarketing
- **TikTok:** @brooksbuiltmarketing

---

## ✨ Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Heroku
git push heroku main

# View Heroku site
heroku open
```

---

**Your website is ready to go! Just update the Fillout form ID and Google Maps URL, and you're all set!** 🎊

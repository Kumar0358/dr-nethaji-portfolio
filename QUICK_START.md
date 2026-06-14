# Quick Start Guide

Get your surgeon portfolio website running in 5 minutes.

## 1. Install Dependencies (1 minute)

```bash
npm install
```

## 2. Configure Environment (1 minute)

Create `.env.local`:
```bash
cp .env.example .env.local
```

Edit with your details:
```env
NEXT_PUBLIC_DOCTOR_PHONE=+91-XXXXXXXXXX
NEXT_PUBLIC_DOCTOR_EMAIL=contact@yourdomain.com
```

## 3. Update Content (2 minutes)

Edit `src/utils/constants.js`:

```javascript
export const DOCTOR_INFO = {
  name: 'Dr. Your Name',
  phone: '+91-XXXXXXXXXX',
  email: 'your@email.com',
  // Update all fields
};
```

## 4. Start Development Server (1 minute)

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 5. Add Your Photos (Optional)

1. Place images in `public/images/`
2. Update image paths in components
3. Update gallery items in `constants.js`

---

## Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production build
npm start

# Check for errors
npm run lint

# Export static site (optional)
npm run export
```

---

## Key Files to Edit

| File | What to Edit |
|------|-------------|
| `src/utils/constants.js` | Doctor info, services, testimonials |
| `src/components/Hero.jsx` | Hero section content and image |
| `tailwind.config.js` | Colors and branding |
| `.env.local` | Contact information |

---

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Push code to GitHub
2. Connect GitHub to Netlify
3. Auto-deploys on every push

### Deploy to Azure

1. Connect GitHub to Azure Static Web Apps
2. Auto-deploys on every push

---

## Next Steps

1. ✅ Install and run locally
2. ✅ Update doctor information
3. ✅ Add professional photos
4. ✅ Test on mobile
5. ✅ Deploy to production
6. ✅ Set up Google Analytics
7. ✅ Submit to Google Search Console

---

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies issue?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
npm run build --verbose
```

---

## Features Included

✅ Professional hero section
✅ About & timeline
✅ Surgical specialties
✅ Achievements showcase
✅ Experience timeline
✅ Patient testimonials
✅ Photo gallery
✅ Appointment booking form
✅ Contact information
✅ Dark mode
✅ Mobile responsive
✅ SEO optimized
✅ Floating action buttons
✅ Smooth animations

---

For detailed setup instructions, see `SETUP.md`

For full documentation, see `README.md`

---

**You're all set! 🎉**

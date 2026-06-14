# Complete Setup Guide for Dr. Nethaji's Surgeon Portfolio Website

This guide will help you set up and deploy the premium surgeon portfolio website.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Development](#development)
3. [Customization](#customization)
4. [Testing](#testing)
5. [Deployment](#deployment)
6. [Post-Launch](#post-launch)

---

## Initial Setup

### Step 1: Install Node.js

Download and install Node.js 18+ from [nodejs.org](https://nodejs.org)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install Dependencies

From the project root directory:

```bash
npm install
```

This installs all required packages including:
- Next.js 14
- React 18
- Framer Motion
- Tailwind CSS
- React Icons

### Step 3: Environment Configuration

Create `.env.local` file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your information:

```env
# Website
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Doctor Contact
NEXT_PUBLIC_DOCTOR_PHONE=+91-XXXXXXXXXX
NEXT_PUBLIC_DOCTOR_EMAIL=contact@yourdomain.com
NEXT_PUBLIC_DOCTOR_WHATSAPP=+91-XXXXXXXXXX

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Step 4: Update Doctor Information

Edit `src/utils/constants.js`:

```javascript
export const DOCTOR_INFO = {
  name: 'Dr. Your Name',
  title: 'MS General Surgery',
  specialization: 'Consultant Laparoscopic & General Surgeon',
  phone: '+91-XXXXXXXXXX',
  email: 'your@email.com',
  whatsapp: '+91-XXXXXXXXXX',
  clinic: 'Your Hospital Name, City',
  clinicAddress: 'Full address here',
  expertise: 'Your expertise',
  yearsExperience: 8,
  successfulProcedures: 1000,
};
```

---

## Development

### Starting Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

The site hot-reloads as you make changes.

### Development Tips

1. **Make changes to components** in `src/components/`
2. **Update content** in `src/utils/constants.js`
3. **Modify styles** in `src/styles/globals.css` or Tailwind classes
4. **Add animations** in `src/utils/animations.js`
5. **Check browser DevTools** for responsive testing

### Key Files to Edit

| File | Purpose |
|------|---------|
| `src/utils/constants.js` | All content and data |
| `src/components/*.jsx` | Page sections |
| `tailwind.config.js` | Design system |
| `src/styles/globals.css` | Custom styles |
| `src/app/layout.jsx` | Meta tags and SEO |

---

## Customization

### Adding Professional Photos

1. **Prepare images**:
   - Minimum 1200x800px for gallery
   - Minimum 600x800px for portrait
   - JPG format (80-90% quality)
   - Optimized file size < 500KB

2. **Save to** `public/images/`

3. **Update** `src/utils/constants.js`:

```javascript
export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Professional Portrait',
    category: 'portraits',
    image: '/images/your-image.jpg',
  },
  // ... more items
];
```

4. **Update hero image**:

Edit `src/components/Hero.jsx`:
```javascript
<img
  src="/images/your-professional-photo.jpg"
  alt="Dr. Your Name"
  className="w-full h-auto object-cover"
/>
```

### Updating Surgical Specialties

Edit `src/utils/constants.js`:

```javascript
{
  id: 1,
  name: 'Your Specialty Name',
  description: 'Description of the procedure',
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
  recovery: '1-2 weeks',
  icon: '🏥'
}
```

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  navy: {
    700: '#1a2f4a',  // Primary dark color
    // ... other shades
  },
  teal: {
    600: '#00a99d',  // Primary accent color
    // ... other shades
  }
}
```

### Updating Testimonials

Edit `src/utils/constants.js`:

```javascript
{
  name: 'Patient Name',
  role: 'Patient',
  feedback: 'Testimonial text here...',
  rating: 5,
  image: 'https://via.placeholder.com/80?text=PN'
}
```

### Updating Experience Timeline

Edit `src/utils/constants.js`:

```javascript
{
  role: 'Position Title',
  organization: 'Hospital/Institution Name',
  period: '2021 - Present',
  description: 'Brief description',
  achievements: [
    'Achievement 1',
    'Achievement 2'
  ]
}
```

---

## Testing

### Responsive Design Testing

Test on different screen sizes:

```bash
npm run dev
```

Then test with browser DevTools:
- Mobile: 375px (iPhone)
- Tablet: 768px (iPad)
- Desktop: 1920px

### Performance Testing

1. **Build for production**:
```bash
npm run build
```

2. **Check build size**:
```bash
# Should be < 50MB
ls -lh .next/
```

3. **Test with Lighthouse** (DevTools → Lighthouse)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Browser Testing

Test on:
- Chrome (Desktop & Mobile)
- Firefox
- Safari (macOS & iOS)
- Edge
- Mobile browsers

### Form Testing

1. Test appointment form submission
2. Test WhatsApp link functionality
3. Test phone call link
4. Test email link

---

## Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow prompts** to connect GitHub and configure

### Option 2: Azure Static Web Apps

1. **Create Azure account** at [azure.microsoft.com](https://azure.microsoft.com)

2. **Create Static Web App**:
   - Resource group: Create new
   - Name: dr-nethaji-portfolio
   - Build preset: Next.js
   - App location: /
   - Output location: .next

3. **Connect GitHub** and authorize

4. **Configure GitHub Actions**:
   - App build command: `npm run build`
   - Output location: `.next`

### Option 3: Netlify

1. **Connect GitHub** to Netlify

2. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

3. **Deploy** automatically on GitHub push

### Option 4: Docker

1. **Build image**:
```bash
docker build -t dr-nethaji .
```

2. **Run container**:
```bash
docker run -p 3000:3000 dr-nethaji
```

3. **Deploy to Docker Hub or cloud service**

### Environment Variables for Production

Add to your hosting platform:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_DOCTOR_PHONE=+91-XXXXXXXXXX
NEXT_PUBLIC_DOCTOR_EMAIL=contact@yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Domain Configuration

1. **Purchase domain** from registrar (GoDaddy, Namecheap, etc.)

2. **Update DNS records** to point to your hosting:
   - For Vercel: Add CNAME record
   - For Azure: Add custom domain
   - For Netlify: Add custom domain

3. **Enable SSL/HTTPS** (automatic on Vercel, Azure, Netlify)

4. **Update** `NEXT_PUBLIC_SITE_URL` in environment variables

---

## Post-Launch

### SEO Setup

1. **Add Google Search Console**:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property with your domain
   - Submit sitemap

2. **Create sitemap** (`public/sitemap.xml`):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

3. **Add robots.txt** (`public/robots.txt`):
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Analytics Setup

1. **Create Google Analytics account** at [analytics.google.com](https://analytics.google.com)

2. **Get your Measurement ID** (format: G-XXXXXXXXXX)

3. **Add to** `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. **Verify tracking** in Analytics

### Monitoring & Maintenance

1. **Check performance weekly**:
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Monitor PageSpeed Insights

2. **Monitor uptime**:
   - Use UptimeRobot or similar service
   - Set up alerts for downtime

3. **Update content regularly**:
   - Add new testimonials
   - Update gallery
   - Refresh achievements

4. **Keep dependencies updated**:
```bash
npm update
npm audit fix
```

### Backup Strategy

1. **GitHub backup**: Regular commits
2. **Database backup**: If using CMS
3. **Environment backup**: Save `.env.local`
4. **Content backup**: Regular exports

### Troubleshooting After Launch

**Site not loading**:
- Check domain DNS settings
- Verify SSL certificate
- Check hosting platform status

**Slow performance**:
- Enable caching
- Optimize images
- Enable compression
- Check Core Web Vitals

**Form not working**:
- Check server logs
- Verify API endpoints
- Test with browser console

---

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **React Icons**: https://react-icons.github.io/react-icons

## Additional Features to Consider

- [ ] Newsletter subscription
- [ ] Blog section
- [ ] Video consultations
- [ ] Patient testimonial videos
- [ ] Insurance partner logos
- [ ] Awards & certifications carousel
- [ ] Before/after gallery (with consent)
- [ ] Live chat support
- [ ] Appointment reminder emails
- [ ] SMS notifications

---

**Happy launching! 🚀**

For support, contact: contact@drnethaji.com

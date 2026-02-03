# ✨ StellaBrand - Site Web Officiel

Site web magnifique pour l'extension Chrome StellaBrand — Logo Maker & Brand Kit.

---

## 🎨 Design Features

### Visuels Impactants
- ✅ Gradients animés (orbes flottants)
- ✅ Glassmorphism (navbar)
- ✅ Animations smooth on scroll
- ✅ Parallax effet sur orbes
- ✅ Fade-in animations pour sections
- ✅ Hover effects sur cards
- ✅ Counter animations pour stats

### Design Moderne
- ✅ Typography system (Inter font)
- ✅ Color system avec CSS variables
- ✅ Responsive mobile-first
- ✅ Accessible (contraste WCAG)
- ✅ Performance optimisée

---

## 📁 Structure des Fichiers

```
stellabrand-site/
├── index.html          # Page principale
├── style.css           # Styles (16KB)
├── script.js           # Animations JS
└── README.md           # Ce fichier
```

---

## 🚀 Déploiement

### Option 1 : GitHub Pages (Gratuit, Recommandé)

**1. Créer un repo GitHub**
```bash
cd /tmp/stellabrand-site
git init
git add .
git commit -m "Initial commit - StellaBrand website"
```

**2. Pousser sur GitHub**
```bash
# Crée un nouveau repo sur github.com
# Puis :
git remote add origin https://github.com/TON-USERNAME/stellabrand-site.git
git branch -M main
git push -u origin main
```

**3. Activer GitHub Pages**
- Va dans Settings → Pages
- Source : Deploy from branch
- Branch : main / (root)
- Save

**Site live en 2 minutes** : `https://TON-USERNAME.github.io/stellabrand-site/`

---

### Option 2 : Netlify (Gratuit, Drag & Drop)

1. Va sur [netlify.com](https://netlify.com)
2. Sign up (gratuit)
3. Drag & drop le dossier `stellabrand-site/`
4. **Site live instantanément** : `https://random-name.netlify.app`

**Custom domain :**
- Achète un domaine (ex: stellabrand.com)
- Settings → Domain management → Add custom domain

---

### Option 3 : Vercel (Gratuit, GitHub Integration)

1. Va sur [vercel.com](https://vercel.com)
2. Sign up avec GitHub
3. Import le repo
4. Deploy (automatic)

**Site live** : `https://stellabrand.vercel.app`

---

### Option 4 : Serveur Personnel

**Upload via FTP/SFTP :**
```bash
# Connecte-toi à ton serveur
scp -r /tmp/stellabrand-site/* user@your-server.com:/var/www/html/
```

**Ou utilise un hosting type :**
- OVH
- Hostinger
- o2switch
- Infomaniak

---

## 🎯 Optimisations Recommandées

### 1. Ajouter des Screenshots

Créer un dossier `/images/` avec :
- `hero-screenshot.png` (screenshot de l'extension en action)
- `feature-1.png`, `feature-2.png`, etc.
- `mockup.png` (mockup device)

**Intégrer dans HTML :**
```html
<img src="images/hero-screenshot.png" alt="StellaBrand Interface" loading="lazy">
```

### 2. Ajouter Favicon

```html
<!-- Dans <head> -->
<link rel="icon" type="image/png" href="favicon.png">
```

### 3. Optimiser SEO

**Ajouter Google Analytics :**
```html
<!-- Avant </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Sitemap (sitemap.xml) :**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://stellabrand.com/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 4. Performance

**Minifier CSS/JS (avant production) :**
```bash
# Via npm
npm install -g csso-cli uglify-js

csso style.css -o style.min.css
uglifyjs script.js -o script.min.js
```

**Compresser images :**
- TinyPNG.com
- Squoosh.app
- ImageOptim

---

## 📱 Test Responsive

**Tester sur :**
- [ ] iPhone (375px)
- [ ] iPad (768px)
- [ ] Desktop (1200px+)
- [ ] Desktop large (1920px+)

**Outils :**
- Chrome DevTools (Ctrl+Shift+M)
- BrowserStack (test cross-browser)
- Responsively App

---

## 🔗 Liens Importants

- **Extension Chrome :** https://chromewebstore.google.com/detail/stellabrand-%E2%80%93-logo-maker/mcenfnbocohkpcibnjbmfbanggfbjdfi
- **Privacy Policy :** https://abdessamad-ca.github.io/stellabrand/
- **Support Email :** innovaisolution@apli.space

---

## 🎨 Customisation

### Changer les Couleurs

Modifier dans `style.css` (ligne 15+) :
```css
:root {
    --primary: #667eea;      /* Couleur principale */
    --secondary: #764ba2;    /* Couleur secondaire */
    --accent: #f093fb;       /* Couleur accent */
}
```

### Changer les Fonts

Modifier dans `<head>` (index.html) :
```html
<link href="https://fonts.googleapis.com/css2?family=AUTRE-FONT:wght@400;700&display=swap" rel="stylesheet">
```

Puis dans CSS :
```css
body {
    font-family: 'AUTRE-FONT', sans-serif;
}
```

---

## 📊 Analytics & Tracking

### Événements à Tracker

**Clics CTA :**
```javascript
// Ajouter dans script.js
document.querySelectorAll('.btn-hero').forEach(btn => {
    btn.addEventListener('click', () => {
        gtag('event', 'click_install', {
            'event_category': 'CTA',
            'event_label': 'Hero Install Button'
        });
    });
});
```

**Scroll profondeur :**
```javascript
// Tracker quand user arrive à pricing
const pricingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gtag('event', 'scroll_to_pricing', {
                'event_category': 'Engagement'
            });
        }
    });
});
pricingObserver.observe(document.querySelector('#pricing'));
```

---

## 🚀 Next Steps

### Après Déploiement

1. **Indexation Google**
   - Google Search Console
   - Soumettre sitemap.xml
   - Demander indexation

2. **Promotion**
   - Tweet le lien
   - Post sur Reddit (r/SideProject)
   - LinkedIn post
   - Product Hunt (optionnel)

3. **A/B Testing**
   - Tester différents CTA
   - Tester différents headlines
   - Optimiser conversion

4. **Contenu Additionnel**
   - Blog (articles SEO)
   - Tutoriels vidéo
   - Case studies
   - Témoignages clients

---

## 🎯 Métriques de Succès

**Semaine 1 :**
- [ ] 1000 visiteurs
- [ ] 50 clics vers Chrome Web Store
- [ ] 5% conversion rate

**Mois 1 :**
- [ ] 5000 visiteurs
- [ ] 500 installations extension
- [ ] 10% conversion rate

---

## 💡 Idées d'Amélioration

- [ ] Ajouter vidéo démo en hero
- [ ] Galerie de logos créés par users
- [ ] Testimonials section
- [ ] Blog intégré
- [ ] Comparison table (vs Canva, Figma)
- [ ] Live chat support
- [ ] Email capture (newsletter)

---

## 🐛 Support

**Problèmes ?** Contacte :
- Email : innovaisolution@apli.space
- Extension support via Chrome Web Store

---

**Créé avec ❤️ pour StellaBrand**  
**Design par Michel • 2026**

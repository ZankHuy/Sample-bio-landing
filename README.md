# Bio Link + Landing Page Template

Mot template repo hoan chinh giup ban tao bio link va landing page chi trong vai phut, khong can biet lap trinh.

## Tinh nang

- **Bio Link (`/bio`)**: Trang gioi thieu ban than voi cac social links. Background gradient customizable, icons cho moi platform, responsive tren moi thiet bi.
- **Landing Page (`/landing`)**: Trang gioi thieu dich vu voi hero section, service cards, va form thu thap lead.
- **Google Forms Integration**: Form lead tu dong dien vao Google Form cua ban - khong can backend, khong can database.
- **AI Agent Friendly**: Chi can 2 file config de chinh sua, AI Agents se tu dong cau hinh chi voi mot prompt.

## Bat dau

```bash
# Clone repo
git clone <your-repo-url>
cd Sample-bio-landing

# Cai dat
npm install

# Khoi dong dev server
npm run dev
```

Truy cap `http://localhost:3000`

## Huong dan su dung

Xem file [SETUP.md](SETUP.md) de biet chi tiet cach cau hinh website bang AI Agents.

Tuy nhien, ban co the thu lam truc tiep:

### 1. Cau hinh Bio Link

Chinh sua `src/config/personal-info.ts`:

```typescript
export const bioConfig = {
  name: "Ho Va Ten",
  title: "Mo ta / Chuc danh",
  avatar: "/avatar-placeholder.svg",
  background: {
    type: "gradient",
    colors: ["#667eea", "#764ba2"],  // doi mau gradient
  },
  links: [
    {
      id: "phone",
      label: "Dien thoai",
      value: "0912 345 678",
      icon: "phone",
      url: "tel:0912345678",
      color: "#25D366",
    },
    // them link moi o day
  ],
};
```

### 2. Cau hinh Landing Page

Chinh sua `src/config/services-config.ts`:

```typescript
export const landingConfig = {
  brand: {
    name: "Ten Brand",
    tagline: "Slogan cua ban",
  },
  hero: {
    headline: "Tieu de chinh",
    subheadline: "Mo ta phu",
    cta_text: "Dang ky ngay",
    cta_scroll_to: "lead-form",
  },
  services: [
    {
      id: "service-1",
      title: "Ten dich vu",
      description: "Mo ta chi tiet",
      icon: "star",           // lucide-react icon
      features: ["Tinh nang 1", "Tinh nang 2"],
      image: "/service-1.svg",
    },
  ],
  leadForm: {
    enabled: true,
    google_form_url: "https://docs.google.com/forms/d/e/xxx/viewform",
    field_mapping: {
      name: "entry.XXXXXXX",
      phone: "entry.XXXXXXX",
      email: "entry.XXXXXXX",
      notes: "entry.XXXXXXX",
    },
    form_title: "Dang ky tu van mien phi",
    success_message: "Cam on ban!",
    submit_button_text: "Gui thong tin",
  },
  footer: {
    copyright: "© 2026 Ten Brand",
    contact_info: "Hotline: 0912 345 678",
  },
};
```

## Deploy

```bash
npm run build
```

Output trong thu muc `out/`. Up len GitHub Pages, Netlify, hoac Vercel.

## Technology

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Google Forms API (no-backend)

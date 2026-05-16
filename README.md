# Bio Link + Landing Page Template

Mot template repo hoan chinh giup ban tao bio link va landing page chi trong vai phut, khong can biet lap trinh.

## Tinh nang

- **Bio Link (`/bio`)**: Trang gioi thieu ban than voi cac social links. Background gradient customizable, icons cho moi platform, responsive tren moi thiet bi.
- **Landing Page (`/landing`)**: Trang gioi thieu dich vu voi hero section, service cards, va form thu thap lead.
- **Google Forms Integration**: Form lead tu dong dien vao Google Form cua ban - khong can backend, khong can database.
- **AI Agent Friendly**: Chi can 2 file config de chinh sua, AI Agents se tu dong cau hinh chi voi mot prompt.

---

## Huong dan Setup (Chi 3 buoc)

### Buoc 1: Clone repo ve may

Truy cap repo tren GitHub, click nut **"Use this template"** (neu dung template) hoac clone truc tiep:

```bash
git clone https://github.com/ZankHuy/Sample-bio-landing.git
cd Sample-bio-landing
```

Hoac tai file ZIP ve va giai nen.

### Buoc 2: Mo repo bang Cursor (Antigravity)

1. Mo **Cursor** (Antigravity) len
2. Vao menu `File` -> `Open Folder` -> Chon thu muc `Sample-bio-landing`
3. Mo terminal trong Cursor: `Ctrl + `` `` hoac `View` -> `Terminal`
4. Chay lenh cai dat:

```bash
npm install
```

### Buoc 3: Khoi dong website

```bash
npm run dev
```

Truy cap `http://localhost:3000` de xem website.

---

## Cau hinh noi dung (Sau khi setup xong)

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

---

## Dua website len Internet (Deploy)

Sau khi chinh sua xong noi dung, lam theo cac buoc sau de dua website len mang:

### Buoc 1: Tao repo moi tren GitHub

1. Truy cap [github.com](https://github.com)
2. Dang nhap tai khoan GitHub
3. Click nut **"+"** (dau cong) o goc phai tren -> **"New repository"**
4. Nhap ten repo, vd: `my-brand-page`
5. Chon **Public** (de deploy duoc)
6. Click **"Create repository"**

### Buoc 2: Ket noi va push code len repo moi

Trong terminal cua Cursor, chay cac lenh sau (thay `USERNAME` bang ten tai khoan GitHub cua ban):

```bash
# Xoa remote cu
git remote remove origin

# Them remote moi voi repo cua ban
git remote add origin https://github.com/USERNAME/my-brand-page.git

# Push code
git push -u origin main
```

### Buoc 3: Deploy voi GitHub Pages (Mien phi!)

1. Sau khi push thanh cong, vao **Settings** cua repo tren GitHub
2. Cuon xuong muc **"Pages"** o than ben trai
3. Tai muc **"Source"**, chon:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **"Save"**
5. Doi 1-2 phut, website se duoc deploy tai:

```
https://USERNAME.github.io/my-brand-page
```

> Neu muon su dung ten mien rieng, co the them custom domain trong muc **Custom domain** cua GitHub Pages.

---

## Lenh hay su dung

```bash
# Cai dat thu vien (sau khi clone repo)
npm install

# Khoi dong che do phat trien (xem website)
npm run dev

# Build file san sang deploy
npm run build

# Don dep file tam
npm run clean
```

---

## Technology

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Google Forms API (no-backend)

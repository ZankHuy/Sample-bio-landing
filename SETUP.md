# Bio Link + Landing Page Template

## Huong dan Cai dat Chi tiet

Huong dan nay giup AI Agents cau hinh toan bo website chi bang cach chinh sua 2 file config. Ban khong can biet lap trinh - chi can cung cap thong tin va AI se lam phan con lai.

---

## Buoc 1: Khoi Tao Project

```bash
# Clone repo ve may
git clone <your-repo-url>
cd Sample-bio-landing

# Cai dat dependencies
npm install

# Khoi dong dev server
npm run dev
```

Truy cap `http://localhost:3000` de xem truoc website.

---

## Buoc 2: Cau Hinh voi AI Agents

Mo terminal (hoac Cursor IDE), goi prompt:

```
Hay doc va lam theo huong dan trong SETUP.md de cau hinh project nay.
```

AI Agents se tu dong:

1. Doc 2 file config: `src/config/personal-info.ts` va `src/config/services-config.ts`
2. Hoi ban lan luot cac thong tin ben duoi
3. Tu dong dien vao cac file config
4. Khong can ban lam gi them

---

## Buoc 3: Cau Hinh Bio Link (src/config/personal-info.ts)

AI se hoi ban:

### Thong tin ca nhan

| Cau hoi | Vi du |
|---------|-------|
| Ho va ten | Nguyen Van A |
| Mo ta ngan / Chuc danh | Chuyen gia tu van |
| Link avatar | Duong dan anh hoac de trong de giu placeholder |

### Thong tin lien he

| Cau hoi | Vi du |
|---------|-------|
| So dien thoai | 0912 345 678 |
| Zalo | 0912 345 678 |
| Email | email@example.com |
| Facebook link | https://facebook.com/username |
| TikTok link | https://tiktok.com/@username |

### Xac dinh cac social link

Ban co the them cac link khong gioi han. AI se hoi ban co muon them:

- YouTube
- Instagram
- Shopee / Lazada
- Website rieng
- Zalo Page
- Fanpage
- WhatsApp
- Telegram
- LinkedIn
- ...bat cu platform nao

### Tuy chinh Background

| Cau hoi | Vi du |
|---------|-------|
| Loai background | gradient / solid / image |
| 2 mau gradient (hex) | #667eea va #764ba2 |
| Hoac 1 mau solid | #1a1a2e |
| Hoac link anh nen | /bg.jpg |

---

## Buoc 4: Cau Hinh Landing Page (src/config/services-config.ts)

AI se hoi ban:

### Thong tin thuong hieu

| Cau hoi | Vi du |
|---------|-------|
| Ten dich vu / Brand | MyService |
| Slogan | Giai phap tot nhat cho ban |
| Link logo | Duong dan anh hoac de trong de giu placeholder |

### Hero Section

| Cau hoi | Vi du |
|---------|-------|
| Tieu de chinh (H1) | Giai phap chuyen nghiep cho cuoc song |
| Mo ta phu | Chung toi mang den dich vu tot nhat |
| Nut CTA | Dang ky ngay |
| Scroll toi | lead-form |

### Noi dung dich vu

Ban co the copy/paste noi dung tu:

- **File Word (.docx)** - AI doc noi dung va trich xuat
- **File PowerPoint (.pptx)** - AI doc tung slide
- **Canva** - Copy text tu Canva hoac export ra PDF

AI se hoi ban ve:

| Cau hoi | Vi du |
|---------|-------|
| So luong dich vu | 3 |
| Ten dich vu 1 | Tu van ca nhan |
| Mo ta dich vu 1 | Noi dung trich xuat tu file cua ban |
| Tinh nang dich vu 1 | Danh sach 3-5 tinh nang |
| Ten dich vu 2 | ... |
| ... | ... |

---

## Buoc 5: Cau Hinh Google Forms

Day la phan quan trong - form thu thap lead se tu dong dien vao Google Form cua ban.

### Tao Google Form

1. Di den [Google Forms](https://forms.google.com)
2. Tao form moi voi 4 truong:
   - **Ten** (Text)
   - **So dien thoai** (Text)
   - **Email** (Text)
   - **Ghi chu** (Text)
3. Nhan **Send** → chon tab **< >** (Embed HTML)
4. Copy link tu `src="https://docs.google.com/forms/..."`

### Lay Entry ID

1. Mo Google Form → nhan **Preview** (binh an mat) de xem
2. Click chuot phai → **Inspect** → tim input co `name="entry.XXXXX"`
3. moi truong` entry.XXXXX` chinh la ID cua truong do

### AI se hoi ban

| Cau hoi | Vi du |
|---------|-------|
| Link Google Form | https://docs.google.com/forms/d/e/xxx/viewform |
| Entry ID cho Ten | entry.1234567890 |
| Entry ID cho So dien thoai | entry.2345678901 |
| Entry ID cho Email | entry.3456789012 |
| Entry ID cho Ghi chu | entry.4567890123 |
| Tieu de form | Dang ky tu van mien phi |
| Text nut Submit | Gui thong tin |
| Thong bao thanh cong | Cam on ban! Chung toi se lien he som nhat. |

---

## Buoc 6: Build va Deploy

Sau khi cau hinh xong:

```bash
npm run build
```

Output se nam trong thu muc `out/`. Up thu muc nay len:

### GitHub Pages

1. Tao repo moi tren GitHub
2. Push code len
3. Settings → Pages → Source = `Deploy from a branch` → `gh-pages` / `main`
4. Hoac doi ten `out/` thanh `docs/` va chon `/docs`

### Netlify

1. Vao [netlify.com](https://netlify.com)
2. Kéo thu muc `out/` vao
3. Hoac ket noi GitHub repo

### Vercel

```bash
npx vercel --prod
```

---

## Tom Tat Cac File Can Chinh Sua

| File | Muc dich |
|------|----------|
| `src/config/personal-info.ts` | Thong tin ca nhan, social links, background |
| `src/config/services-config.ts` | Noi dung landing page, Google Forms |

## Cau Truc Route

| Route | Mo ta |
|-------|-------|
| `/` | Trang chu - chon xem Bio Link hoac Landing |
| `/bio` | Trang bio link - gioi thieu ban than + social links |
| `/landing` | Trang landing page - gioi thieu dich vu + form lead |

---

Neu gap kho khan, hay hoi AI Agents voi prompt:

```
Toi dang co van de voi [mo ta van de]. Hay giup toi xu ly.
```

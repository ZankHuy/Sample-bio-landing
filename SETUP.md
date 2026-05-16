# SETUP.md - Huong dan cau hinh cho AI Agent

Day la file huong dan chi tiet de AI Agent cau hinh website Bio Link + Landing Page.

## Nhiem vu cua AI Agent

AI Agent can thuc hien 3 nhiem vu chinh:

### 1. Cai dat dependencies va khoi dong dev server

Chay cac lenh:

```bash
npm install
npm run dev
```

### 2. Thu thap thong tin tu nguoi dung

Hoi nguoi dung cac thong tin can thiet (xem chi tiet ben duoi).

### 3. Chinh sua code

Sau khi thu thap du thong tin, cap nhat cac file config tuong ung.

---

## Phan 1: Cau hinh Bio Link

File can chinh sua: `src/config/personal-info.ts`

### Thong tin nguoi dung can cung cap

Hoi nguoi dung tung cau hoi sau:

**Thong tin co ban:**
1. Ho va ten hien thi tren trang bio
2. Mo ta ngan / Chuc danh (vi du: "Chuyen gia tu van dinh cu", "Freelancer", ...)
3. Link anh avatar (neu co, neu khong thi giu placeholder)

**Social Links - Cac nut bam tren trang bio:**

| # | Hoi nguoi dung | Vi du |
|---|----------------|-------|
| 1 | So dien thoai | 0912 345 678 |
| 2 | Link Zalo | https://zalo.me/0912345678 |
| 3 | Link Facebook ca nhan | https://facebook.com/username |
| 4 | Link TikTok | https://tiktok.com/@username |
| 5 | Link YouTube (neu co) | https://youtube.com/@username |
| 6 | Link Instagram (neu co) | https://instagram.com/username |
| 7 | Link Shopee (neu co) | https://shopee.vn/username |
| 8 | Link website rieng (neu co) | https://example.com |
| 9 | Link LinkedIn (neu co) | https://linkedin.com/in/username |
| 10 | Cac link khac nguoi dung muon them | ... |

**Tuy chinh Background:**

| # | Hoi nguoi dung | Vi du |
|---|----------------|-------|
| 1 | Ban muon background la gradient hay mot mau don? | gradient / solid |
| 2 | Neu gradient - nhap 2 ma mau (hex) | #667eea, #764ba2 |
| 3 | Neu solid - nhap 1 ma mau (hex) | #1a1a2e |

### Thuc hien

1. Doc file `src/config/personal-info.ts` hien tai
2. Thay cac gia tri trong `bioConfig` voi thong tin nguoi dung da cung cap
3. Them cac social links vao mang `links` theo cu phap cua file
4. Giu placeholder neu nguoi dung khong cung cap avatar

---

## Phan 2: Cau hinh Landing Page

File can chinh sua: `src/config/services-config.ts`

### Thong tin nguoi dung can cung cap

**Thong tin thuong hieu:**

| # | Hoi nguoi dung | Vi du |
|---|----------------|-------|
| 1 | Ten thuong hieu / Ten dich vu | MyService |
| 2 | Slogan | Giai phap tot nhat cho ban |
| 3 | Link logo (neu co) | /logo-placeholder.svg |

**Hero Section (Phan gioi thieu chinh):**

| # | Hoi nguoi dung | Vi du |
|---|----------------|-------|
| 1 | Tieu de chinh (H1) - noi dung no bat nguoi nhin thay | Giai phap chuyen nghiep cho cuoc song |
| 2 | Mo ta phu - giai thich them | Chung toi mang den dich vu tot nhat |
| 3 | Text nut goi hanh dong | Dang ky ngay |
| 4 | Link logo brand (neu co) | /logo-placeholder.svg |

**Services (Cac dich vu/gioi thieu):**

Hoi nguoi dung:

| # | Hoi nguoi dung | Vi du |
|---|----------------|-------|
| 1 | Ban muon gioi thieu bao nhieu dich vu? | 3 |
| 2 | Ten dich vu 1 | Tu van ca nhan |
| 3 | Mo ta dich vu 1 | Noi dung trich xuat tu file cua ban |
| 4 | Cac tinh nang cua dich vu 1 (3-5 cai) | Co the goi y cac tinh nang pho bien |
| 5 | Ten dich vu 2 | ... |
| 6 | ... | ... |

**Google Forms (Form thu thap thong tin khach hang):**

Day la phan quan trong - no giup form tren website tu dong dien vao Google Form cua ban.

Hoi nguoi dung:

| # | Hoi nguoi dung | Vi du |
|---|----------------|-------|
| 1 | Ban da co Google Form chua? Neu chua, huong dan tao | ... |
| 2 | Link Google Form | https://docs.google.com/forms/d/e/xxx/viewform |
| 3 | Entry ID cho truong Ho ten | entry.1234567890 |
| 4 | Entry ID cho truong So dien thoai | entry.2345678901 |
| 5 | Entry ID cho truong Email | entry.3456789012 |
| 6 | Entry ID cho truong Ghi chu | entry.4567890123 |

**Cach lay Entry ID:**
1. Mo Google Form -> nhan **Preview** de xem
2. Click chuot phai -> **Inspect** -> tim cac input co `name="entry.XXXXX"`
3. Moi truong `entry.XXXXX` chinh la ID cua truong do

**Neu nguoi dung chua co Google Form, huong dan tao nhanh:**

1. Di den [forms.google.com](https://forms.google.com)
2. Tao form moi voi 4 truong: Ten, So dien thoai, Email, Ghi chu
3. Nhan **Send** -> chon tab **<>** (Embed)
4. Copy link tu `src="https://docs.google.com/forms/..."`
5. Lay Entry ID theo cach ben tren

**Noi dung Footer:**

| # | Hoi nguoi dung | Vi du |
|---|----------------|-------|
| 1 | Text Copyright | © 2026 Ten Brand |
| 2 | Thong tin lien he hien thi | Hotline: 0912 345 678 |

### Thuc hien

1. Doc file `src/config/services-config.ts` hien tai
2. Cap nhat cac gia tri trong `landingConfig` voi thong tin nguoi dung
3. Cau hinh mang `services` voi so luong dich vu tuong ung
4. Cau hinh `leadForm` voi link va entry ID tu Google Form
5. Giu placeholder neu nguoi dung khong cung cap logo

---

## Phan 3: Hoan thanh

Sau khi hoan thanh tat ca cau hinh:

1. Chay `npm run build` de dam bao khong co loi
2. Neu co loi, thong bao cho nguoi dung va yeu cau kiem tra lai thong tin
3. Neu thanh cong, thong bao nguoi dung:

```
Cau hinh hoan tat!
Website da san sang. De xem truoc, chay npm run dev va truy cap http://localhost:3000
Khi muon dua website len mang, hay lam theo huong dan trong README.md phan "Dua website len Internet".
```

---

## Tom tat File can chinh sua

| File | Muc dich |
|------|----------|
| `src/config/personal-info.ts` | Thong tin ca nhan, social links, background |
| `src/config/services-config.ts` | Noi dung landing page, hero, dich vu, Google Forms |

## Cau truc Route

| Route | Mo ta |
|-------|-------|
| `/` | Trang chu - chon xem Bio Link hoac Landing |
| `/bio` | Trang bio link - gioi thieu ban than + social links |
| `/landing` | Trang landing page - gioi thieu dich vu + form lead |

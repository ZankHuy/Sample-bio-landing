# Bio Link + Landing Page Template

Mot template repo hoan chinh giup ban tao bio link va landing page chi trong vai phut, khong can biet lap trinh.

## Tinh nang

- **Bio Link (`/bio`)**: Trang gioi thieu ban than voi cac social links. Background gradient customizable, icons cho moi platform, responsive tren moi thiet bi.
- **Landing Page (`/landing`)**: Trang gioi thieu dich vu voi hero section, service cards, va form thu thap lead.
- **Google Forms Integration**: Form lead tu dong dien vao Google Form cua ban - khong can backend, khong can database.
- **AI Agent Friendly**: Chi can cho AI Agent doc SETUP.md, AI se tu dong cau hinh tat ca.

---

## Huong dan Setup (Chi 3 buoc)

### Buoc 1: Tao repo cua ban tu template nay

1. Truy cap: [https://github.com/ZankHuy/Sample-bio-landing](https://github.com/ZankHuy/Sample-bio-landing)
2. Click nut **"Use this template"** (nut xanh phia tren)
3. Nhap ten repo, vd: `my-brand-page`
4. Chon **Public** -> Click **"Create repository"**

### Buoc 2: Mo repo bang Cursor (Antigravity)

1. Sau khi tao xong, copy link repo cua ban (vd: `https://github.com/USERNAME/my-brand-page.git`)
2. Mo **Cursor** (Antigravity) len
3. Vao menu `File` -> `Open Folder` -> Chon thu muc `my-brand-page`
4. Mo terminal trong Cursor: nhan `Ctrl + ` `` `` `` `` hoac vao `View` -> `Terminal`

### Buoc 3: Khoi dong AI Agent

1. Trong Cursor, tim nut **"Agent"** o than ben trai (biểu tượng robot)
2. Click de mo AI Agent panel
3. Paste prompt sau vao:

```
Hay doc va lam theo huong dan trong file SETUP.md de cau hinh website nay. Bat dau ngay.
```

4. AI Agent se tu dong doc SETUP.md, hoi ban cac thong tin can thiet, va tu dong chinh sua code.

---

## Dua website len Internet (Deploy)

Sau khi AI Agent cau hinh xong, lam theo buoc sau de dua website len mang:

### Buoc 1: Push code cua ban len GitHub

Trong terminal cua Cursor, chay cac lenh sau:

```bash
# Thay USERNAME bang ten tai khoan GitHub cua ban
git remote set-url origin https://github.com/USERNAME/my-brand-page.git

# Them tat ca thay doi
git add .

# Commit
git commit -m "Cau hinh noi dung website"

# Push len GitHub
git push -u origin main
```

### Buoc 2: Deploy voi GitHub Pages (Mien phi!)

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

---

## Technology

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Google Forms API (no-backend)

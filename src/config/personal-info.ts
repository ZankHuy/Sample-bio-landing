import { BioConfig } from "@/types";

// ============================================================
// KHU VỰC CHỈNH SỬA: Thay đổi thông tin bên dưới để cá nhân hoá bio link
// ============================================================

export const bioConfig: BioConfig = {
  // THÔNG TIN CÁ NHÂN
  name: "Họ và Tên",
  title: "Mô tả ngắn / Chức danh",

  // Avatar: đường dẫn ảnh trong thư mục public/
  // hoặc URL online (ví dụ: https://example.com/avatar.jpg)
  avatar: "/avatar-placeholder.svg",

  // BACKGROUND - chọn 1 trong 3 loại:
  // "gradient": 2 màu gradient đẹp mắt (mặc định)
  // "solid": 1 màu duy nhất
  // "image": ảnh nền (đặt ảnh trong thư mục public/)
  background: {
    type: "gradient",
    colors: ["#667eea", "#764ba2"],
    // solidColor: "#1a1a2e",
    // image: "/bg-placeholder.jpg",
  },

  // SOCIAL LINKS - thêm/bớt thoải mái
  // Mỗi link là 1 object với các trường:
  // id: duy nhất, không trùng lặp
  // label: text hiển thị trên nút
  // value: giá trị hiển thị (số điện thoại, email, username...)
  // icon: tên icon từ lucide-react (https://lucide.dev/icons)
  // url: link khi click (tel:, mailto:, https://...)
  // color: màu nền của nút (dùng màu brand của platform)
  links: [
    {
      id: "phone",
      label: "Điện thoại",
      value: "0xxx xxx xxx",
      icon: "phone",
      url: "tel:0xxxxxxx",
      color: "#25D366",
    },
    {
      id: "zalo",
      label: "Zalo",
      value: "0xxx xxx xxx",
      icon: "message-circle",
      url: "https://zalo.me/0xxxxxxx",
      color: "#0068FF",
    },
    {
      id: "email",
      label: "Email",
      value: "email@example.com",
      icon: "mail",
      url: "mailto:email@example.com",
      color: "#EA4335",
    },
    {
      id: "facebook",
      label: "Facebook",
      value: "facebook.com/username",
      icon: "facebook",
      url: "https://facebook.com/username",
      color: "#1877F2",
    },
    {
      id: "tiktok",
      label: "TikTok",
      value: "@username",
      icon: "video",
      url: "https://tiktok.com/@username",
      color: "#000000",
    },
    {
      id: "website",
      label: "Website",
      value: "https://yoursite.com",
      icon: "globe",
      url: "https://yoursite.com",
      color: "#6366F1",
    },

    // ============================================================
    // HƯỚNG DẪN THÊM LINK MỚI:
    // Chỉ cần thêm 1 object như bên dưới, giữ nguyên cấu trúc.
    // Icon tham khảo: https://lucide.dev/icons
    // ============================================================
    // {
    //   id: "youtube",
    //   label: "YouTube",
    //   value: "Channel Name",
    //   icon: "youtube",
    //   url: "https://youtube.com/@channel",
    //   color: "#FF0000",
    // },
    // {
    //   id: "instagram",
    //   label: "Instagram",
    //   value: "@username",
    //   icon: "instagram",
    //   url: "https://instagram.com/username",
    //   color: "#E4405F",
    // },
    // {
    //   id: "shopee",
    //   label: "Shopee",
    //   value: "Shopee Mall",
    //   icon: "shopping-bag",
    //   url: "https://shopee.vn/username",
    //   color: "#EE4D2D",
    // },
  ],
};

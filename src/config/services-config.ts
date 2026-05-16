import { LandingConfig } from "@/types";

// ============================================================
// KHU VỰC CHỈNH SỬA: Thay đổi thông tin bên dưới để cá nhân hoá landing page
// ============================================================

export const landingConfig: LandingConfig = {
  // THÔNG TIN THƯƠNG HIỆU / DỊCH VỤ
  brand: {
    name: "Tên Dịch Vụ / Brand",
    logo: "/logo-placeholder.svg",
    tagline: "Slogan ngắn gọn của bạn",
  },

  // HERO SECTION - phần đầu tiên người dùng nhìn thấy
  hero: {
    headline: "Tiêu đề chính - H1",
    subheadline: "Mô tả phụ - Giới thiệu ngắn về dịch vụ của bạn. Ngắn gọn, súc tích, thu hút.",
    cta_text: "Đăng ký ngay",
    cta_scroll_to: "lead-form",
  },

  // SERVICE SECTIONS - mỗi object là 1 dịch vụ
  // Thêm/bớt thoải mái, mỗi service là 1 card hiển thị trên trang
  services: [
    {
      id: "service-1",
      title: "Tên Dịch Vụ 1",
      description:
        "Mô tả chi tiết dịch vụ 1. Viết ngắn gọn về lợi ích, tính năng nổi bật. AI sẽ điền nội dung từ file Word/PowerPoint/Canva của bạn.",
      icon: "star",
      features: [
        "Tính năng nổi bật 1",
        "Tính năng nổi bật 2",
        "Tính năng nổi bật 3",
      ],
      image: "/service-1.svg",
    },
    {
      id: "service-2",
      title: "Tên Dịch Vụ 2",
      description:
        "Mô tả chi tiết dịch vụ 2. Giới thiệu về dịch vụ, sản phẩm thứ 2 mà bạn cung cấp.",
      icon: "shield",
      features: ["Tính năng 1", "Tính năng 2"],
      image: "/service-1.svg",
    },
    {
      id: "service-3",
      title: "Tên Dịch Vụ 3",
      description:
        "Mô tả chi tiết dịch vụ 3. Giới thiệu thêm về các dịch vụ khác, bundle, combo...",
      icon: "zap",
      features: ["Tính năng 1", "Tính năng 2", "Tính năng 3", "Tính năng 4"],
      image: "/service-1.svg",
    },
  ],

  // LEAD FORM - GOOGLE FORMS INTEGRATION
  // Cấu hình form thu thập lead thông tin khách hàng
  leadForm: {
    enabled: true,

    // Link Google Form (dạng /viewform)
    // Cách lấy:
    // 1. Mở Google Form → Send → nhấn < > (Get embeded HTML)
    // 2. Copy link từ src="..." trong iframe
    // 3. Link dạng: https://docs.google.com/forms/d/e/xxx/viewform
    google_form_url: "https://docs.google.com/forms/d/e/xxx/viewform",

    // Mapping entry ID từ Google Form
    // Cách lấy entry ID:
    // 1. Mở Google Form → nhấn Preview (👁) để xem
    // 2. Inspect element → tìm input có name="entry.XXXXXXX"
    // 3. Hoặc xem trong source code của form
    field_mapping: {
      name: "entry.XXXXXXX",    // Trường "Tên" trong Google Form
      phone: "entry.XXXXXXX",  // Trường "Số điện thoại"
      email: "entry.XXXXXXX",  // Trường "Email"
      notes: "entry.XXXXXXX", // Trường "Ghi chú"
    },

    // Cấu hình hiển thị form
    form_title: "Đăng ký tư vấn miễn phí",
    success_message: "Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất có thể.",
    submit_button_text: "Gửi thông tin",
  },

  // FOOTER
  footer: {
    copyright: "© 2026 Tên Brand. Tất cả quyền được bảo lưu.",
    contact_info: "Hotline: 0xxx xxx xxx",
  },
};

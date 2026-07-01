# Project Knowledge - phongtranh (Maison TiA Art & Objects)

## Đây là dự án gì?

Đây **không phải** là một platform booking/listing đa nền tảng tự vận hành. Đây là bộ tài
liệu + website cho một cửa hàng vật lý duy nhất tại Hội An: **Maison TiA Art & Objects**
(phòng tranh nghệ thuật kết hợp workshop trải nghiệm), và các tài liệu hướng dẫn để đăng ký
gian hàng/tour trải nghiệm của cửa hàng này lên nhiều nền tảng OTA (Online Travel Agency)
khác nhau nhằm thu hút khách du lịch.

- **Tên**: Maison TiA Art & Objects
- **Địa chỉ**: 122 Nguyễn Phúc Tần, An Hội, Hội An — ngay cạnh Bel Marina Hoi An Resort,
  cách phố cổ Hội An ~500m.
- **Mô hình**: Gallery 2 tầng.
  - Tầng 1: trưng bày tranh nghệ thuật độc bản, khăn lụa tơ tằm vẽ tay cao cấp (sản phẩm
    giá trị cao, biên lợi nhuận lớn).
  - Tầng 2: ban công mở, dùng để tổ chức workshop trải nghiệm (vẽ gốm Thanh Hà, vẽ thiệp
    lụa/tranh lụa nhỏ) — đóng vai trò "sản phẩm mồi" giá rẻ (200-250k VNĐ/khách) để kéo
    khách vào cửa hàng, tạo hiệu ứng đám đông, rồi chuyển đổi sang bán tranh/khăn lụa cao cấp.
- **Vốn đầu tư ban đầu**: ~300 triệu VNĐ; thuê nhà 10 triệu/tháng.

Chi tiết đầy đủ về mô hình kinh doanh, giá cả, vận hành nằm trong `documents/`:
- `documents/business_info.md` — tổng quan vị trí, vốn, mô hình phễu sản phẩm.
- `documents/products_and_pricing.md` — sản phẩm & giá.
- `documents/growth_and_operations.md` — vận hành, tăng trưởng.
- `documents/offline_marketing.md` — marketing offline (ví dụ chương trình giảm giá cho
  khách sạn/homestay lân cận, tài xế xe điện buggy, hướng dẫn viên du lịch).

## Vai trò của thư mục `platforms/`

Đây là các hướng dẫn đăng ký/đưa trải nghiệm workshop của Maison TiA lên các nền tảng OTA
để tăng nguồn khách, KHÔNG phải code tích hợp API:
- `01_klook`, `02_tripadvisor_viator`, `03_airbnb_experiences`, `04_trip_com`,
  `05_agoda_booking_activities`, `06_kkday`, `07_google_maps_local_seo`

Mỗi thư mục chứa file `.md` hướng dẫn: link cổng đối tác, cách viết mô tả sản phẩm, checklist
ảnh dùng chung (từ `assets/storefront/`), cấu trúc giá/hoa hồng, quy trình đăng ký xét duyệt.
Sản phẩm được đăng ký chủ yếu là: "Workshop Vẽ Gốm Làng Cổ Thanh Hà tại Hội An" giá 250.000đ/khách.

## Cấu trúc website (root)

Có 2 website tĩnh (HTML/CSS/JS thuần, không framework) sống chung trong repo, deploy qua
Vercel/Cloudflare (`vercel.json`, `.wrangler`, `.vercel`):

1. **`index.html` + `style.css` + `script.js`** — Trang **báo cáo kinh doanh / phương án đề
   xuất** dành cho chủ đầu tư (nội bộ), trình bày ROI, vận hành, tài chính (mục `#financial`,
   `#online`, `#offline`, `#operations`). Trang này có link ra `gallery.html` ("Giao Diện
   Khách Hàng") ở cả navbar và footer.

2. **`gallery.html` + `gallery.css` + `gallery.js`** (mới thêm) — Trang **web trưng bày công
   khai hướng tới khách du lịch/khách hàng cuối**, thay thế vai trò một "customer-facing
   site" độc lập:
   - Đa ngôn ngữ (VI mặc định / EN / ZH / KO) qua dictionary `translations` trong gallery.js,
     áp dụng bằng thuộc tính `data-i18n` trên các phần tử HTML.
   - Các section: Hero cinematic slideshow, Không Gian (tầng 1/tầng 2), Bộ Sưu Tập (portfolio
     filter + lightbox modal xem chi tiết tác phẩm), Workshop (chọn khung giờ vàng, form đặt
     lịch nhiều bước 3-step với tính giá động theo số khách/loại workshop), Góc Check-in
     (photo spot ban công), Ghé Thăm (địa chỉ, giờ mở cửa, Google Maps, nút chat
     WhatsApp/Zalo nổi), và banner "Trạm nghỉ chân miễn phí cho HDV" (tour guide friendly).
   - Link quay lại `index.html` ở footer ("Xem Báo Cáo Kinh Doanh — Chủ Đầu Tư").
   - Dùng chung ảnh trong `assets/storefront/`.

Tóm lại: `index.html` = mặt B2B/nội bộ (thuyết phục nhà đầu tư), `gallery.html` = mặt B2C
(khách du lịch ghé thăm/đặt workshop trực tiếp trên web), và `platforms/` = kênh phân phối
gián tiếp qua các OTA lớn.

## Ghi chú kỹ thuật

- Không có build step / package.json — thuần HTML/CSS/JS tĩnh.
- `gallery.js` dùng `data-i18n` để dịch nội dung; khi thêm phần tử mới có `data-i18n="key"`
  trong `gallery.html`, PHẢI thêm `key` vào cả 4 dictionary (`vi`, `en`, `zh`, `ko`) trong
  `gallery.js`, nếu không ngôn ngữ thiếu key sẽ giữ nguyên text mặc định hard-code trong HTML
  (im lặng không báo lỗi). Đã từng xảy ra bug này với `ws_benefit_title`/`ws_benefit1-4`
  (dict `vi` và `ko` từng đặt sai tên thành `ws_benefits_title`/`ws_benefits1-4` — đã fix).
- `.agents/AGENTS.md`: quy tắc cho AI agent — không tự ý dùng `browser_subagent` trừ khi
  người dùng yêu cầu trực tiếp.

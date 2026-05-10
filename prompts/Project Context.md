# Ngữ cảnh Dự án: Mini Money Tracker

**Role (Vai trò Dự án):** Đây là tài liệu định hướng cốt lõi dành cho AI Agent khi thiết kế và lập trình.

**Objective (Mục tiêu):** Xây dựng một Mini App "Money Tracker" thu gọn, tinh tế, mượt mà nhằm trình diễn tính năng Ghi chép thu chi cơ bản.

**Details (Chi tiết Yêu cầu):**

1. **Phạm vi (Scope)**
   - ✅ IN-SCOPE: Thêm giao dịch (Loại, Tên, Số tiền, Danh mục), Tính Tổng số dư/Tổng thu/Tổng chi, Lưu trữ vào `localStorage`.
   - ❌ OUT-OF-SCOPE (Tuyệt đối KHÔNG làm): Lập ngân sách (Budget Planner), Biểu đồ báo cáo trực quan, Tích hợp API ngân hàng/AI.

2. **Công nghệ (Tech Stack)**
   - Cấu trúc: HTML5 Semantic.
   - Giao diện: CSS3 thuần (Vanilla CSS). KHÔNG dùng Tailwind hay Bootstrap. Thiết kế tối giản, "Apple Design" (viền bo tròn, bóng đổ nhẹ, màu tinh tế).
   - Logic: JavaScript thuần (ES5/ES6). KHÔNG dùng React, Vue hay jQuery.
   - Database: Toàn bộ ở LocalStorage (Browser). KHÔNG gọi API backend.
   - Kiến trúc file: Single Page (`index.html`, `style.css`, `app.js`).

3. **Mục tiêu Thẩm mỹ (UI/UX)**
   - Typography: Font chữ hiện đại (Inter, Roboto, hoặc San Francisco).
   - Tương tác: Có thông báo (Toast/Alert) đẹp mắt khi thành công. Form input phải có validation báo lỗi.
   - Modal Xác nhận: BẮT BUỘC dùng Custom Modal (HTML/CSS/JS). TUYỆT ĐỐI KHÔNG dùng hộp thoại mặc định của trình duyệt (`alert()`, `confirm()`).
   - Trực quan: Hiện ngay danh sách các giao dịch ở phía dưới form nhập để chứng minh LocalStorage hoạt động tốt.

**Guiding Principles (Nguyên tắc Tự ra Quyết định):**
Khi đứng trước nhiều lựa chọn mà không có chỉ thị rõ ràng, bạn (Agent) BẮT BUỘC phải ưu tiên:
1. Tối giản (Minimalist): Ít thao tác, ít nút bấm thừa nhất cho người dùng.
2. Chống lỗi (Fool-proof): Chặn lỗi ngay tại Form input (vd: cấm nhập âm, cấm để trống).
3. Độc lập & Tốc độ: Code Vanilla JS tối ưu, chạy nhanh, không dùng thư viện ngoài nếu không thực sự cần.

**Sense Check (Kiểm chứng):**
Trước khi chốt phương án, hãy tự hỏi: "Giao diện này đã đủ sang trọng như Apple chưa? Mình có lỡ tay dùng `confirm()` mặc định không? Code đã tách biệt HTML/CSS/JS rõ ràng chưa?". Nếu vi phạm, hãy tự động sửa đổi!

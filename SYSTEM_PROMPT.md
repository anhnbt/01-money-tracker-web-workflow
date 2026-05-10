Role: Bạn là một Kỹ sư Phần mềm Full-stack & Chuyên gia QA tự động (AI Agent), có khả năng phối hợp nhiều bộ kỹ năng chuyên sâu để hoàn thành dự án từ A-Z.

End Goal: Hoàn thiện ứng dụng Web "Mini Money Tracker" theo chuẩn phong cách thiết kế của Apple, có khả năng lưu trữ dữ liệu với LocalStorage và được kiểm thử tự động toàn diện.

Instructions: Hãy thực hiện dự án này một cách tuần tự. Bạn BẮT BUỘC phải đọc các file ngữ cảnh được cung cấp và tuân thủ nghiêm ngặt điểm dừng (pause) để chờ tôi phê duyệt trước khi chuyển bước.

Steps:

[GIAI ĐOẠN 1: Lên ý tưởng & Thiết kế (Planning)]
1. Đọc kỹ file ngữ cảnh `@.prompt/Project Context.md` để nắm bắt yêu cầu công nghệ.
2. Kích hoạt skill `@web-developer` ở chế độ Planning Mode và tạo một Artifact `implementation_plan`.
3. Áp dụng luồng suy luận từ `@.prompt/Chain of Thought.md`, trình bày chi tiết trong Plan:
   - Bảng màu (Color palette) mang phong cách Apple.
   - Bố cục Form nhập liệu (Loại giao dịch Thu/Chi, Danh mục, Số tiền).
   - Luồng logic Javascript để tính toán Tổng số dư.
4. Ở cuối Plan, đặt ra chính xác 3 Câu hỏi mở (Open Questions) về thiết kế hoặc tính năng để tôi quyết định.
5. 🛑 DỪNG LẠI tại đây. Chờ tôi trả lời 3 câu hỏi và phê duyệt Plan mới được đi tiếp.

[GIAI ĐOẠN 2: Thực thi Code (Execution)]
1. Sau khi nhận được sự phê duyệt của tôi, tự động tạo Artifact `task` để theo dõi tiến độ.
2. Sử dụng skill `@web-developer` để lập trình các file `index.html`, `style.css` và `app.js`.
3. Khi thao tác với LocalStorage, phải áp dụng triệt để các nguyên tắc an toàn được định nghĩa trong file `@.prompt/Few-Shot.md`.
4. Đánh dấu hoàn thành Giai đoạn 2 trên Artifact `task`.

[GIAI ĐOẠN 3: Kiểm thử Tự động (QA & Visual Audit)]
1. Sử dụng skill `@qa-tester` để kích hoạt công cụ `browser_subagent`. Yêu cầu Sub-agent mở file `index.html` vừa hoàn thiện.
2. Chỉ đạo Sub-agent thực hiện các kịch bản sau:
   - Visual Audit: Quét trực quan giao diện. Nếu phát hiện sai lệch so với phong cách Apple (nút bấm nhỏ, text lệch), AI phải tự động mở file CSS ra để tinh chỉnh lại cho đến khi đạt chuẩn.
   - User Simulation: Nhập thử 1 khoản "Thu" (VD: Lương 10,000,000đ) và 1 khoản "Chi" (VD: Cafe 50,000đ). Kiểm tra xem danh sách lịch sử và số dư có tính toán chuẩn xác không.
   - Persistence Test: F5 (Refresh) lại trình duyệt để xác nhận LocalStorage hoạt động đúng và giữ được dữ liệu.
3. Tạo Artifact `walkthrough` để tổng kết toàn bộ quá trình test, kèm theo đường dẫn Video Recording của Sub-agent để tôi nghiệm thu.

Narrowing (Ràng buộc cốt lõi):
- Tuyệt đối không tự ý code khi chưa được Approve Plan ở Giai đoạn 1.
- Mọi file code phải đảm bảo Clean Code và Responsive.

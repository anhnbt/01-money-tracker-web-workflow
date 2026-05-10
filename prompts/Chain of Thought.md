# Tiêu chuẩn Tư duy Thiết kế (Chain of Thought)

Trước khi viết code, bạn (AI Agent) BẮT BUỘC phải viết ra quá trình suy luận từng bước. Điều này giúp đảm bảo logic không có sai sót và thiết kế nhất quán.

Hãy suy luận theo các bước sau và ghi rõ ra trong kế hoạch (Implementation Plan):

1. **Phân tích UI/UX (Mỹ thuật):**
   - *Suy nghĩ:* Màu chủ đạo nên là gì để giống phong cách Apple? (Gợi ý: nền xám nhạt/trắng, màu nhấn tinh tế).
   - *Suy nghĩ:* Bố cục sắp xếp thế nào cho hợp lý (Form nhập, Danh sách)?
   - *Suy nghĩ:* Typography và khoảng trắng (Whitespace) cần áp dụng ra sao để không bị ngợp?
   - *Kết luận:* Đưa ra quyết định cuối cùng về UI (Bảng màu, Layout).

2. **Phân tích Logic Javascript:**
   - *Suy nghĩ:* Khi người dùng bấm "Thêm", dữ liệu sẽ đi qua những bước xác thực nào?
   - *Suy nghĩ:* Làm sao để lưu vào LocalStorage an toàn (tham khảo `Few-Shot.md`)?
   - *Suy nghĩ:* Khi nào cần cập nhật lại giao diện (Render) và Số dư?
   - *Kết luận:* Mô tả ngắn gọn luồng dữ liệu (Data Flow).

3. **Dự báo Lỗi (Edge Cases):**
   - *Suy nghĩ:* Nếu người dùng nhập số âm, hoặc bỏ trống tên thì sao?
   - *Suy nghĩ:* Nếu ấn F5 reload trang thì dữ liệu có bị mất không?
   - *Kết luận:* Đưa ra giải pháp phòng ngừa lỗi.

*Lưu ý: Mọi quyết định xác nhận (ví dụ xóa dữ liệu) phải dùng Custom Modal (kết hợp `backdrop-filter: blur`), tuyệt đối KHÔNG dùng `confirm()` hay `alert()` mặc định.*

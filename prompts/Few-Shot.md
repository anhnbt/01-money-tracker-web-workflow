# Tiêu chuẩn Code An toàn (Few-Shot Examples)

Dưới đây là các ví dụ (Few-Shot) BẮT BUỘC phải tuân theo khi làm việc với LocalStorage để tránh lỗi crash ứng dụng.

## 1. Khởi tạo và Lưu dữ liệu

❌ **BAD PRACTICE (Dễ gây lỗi null pointer):**
```javascript
// Nếu localStorage rỗng, việc parse sẽ gây lỗi null
let transactions = JSON.parse(localStorage.getItem('money_transactions'));
transactions.push(newTransaction); // Sẽ báo lỗi Cannot read properties of null
```

✅ **GOOD PRACTICE (An toàn, có giá trị mặc định):**
```javascript
// Luôn có giá trị mặc định là mảng rỗng nếu localStorage chưa có dữ liệu
function getTransactions() {
    const data = localStorage.getItem('money_transactions');
    return data ? JSON.parse(data) : [];
}

function saveTransaction(transaction) {
    const transactions = getTransactions();
    transactions.push(transaction);
    localStorage.setItem('money_transactions', JSON.stringify(transactions));
}
```

## 2. Render dữ liệu từ LocalStorage ra UI

✅ **GOOD PRACTICE (Cập nhật giao diện an toàn):**
```javascript
function renderTransactions() {
    const transactions = getTransactions();
    const listElement = document.getElementById('transaction-list');
    
    // Xóa trắng danh sách cũ trước khi render lại
    listElement.innerHTML = '';
    
    if (transactions.length === 0) {
        listElement.innerHTML = '<li class="empty-state">Chưa có giao dịch nào.</li>';
        return;
    }
    
    transactions.forEach(t => {
        const li = document.createElement('li');
        const isIncome = t.type === 'income';
        const sign = isIncome ? '+' : '-';
        const colorClass = isIncome ? 'text-green' : 'text-red';
        
        li.innerHTML = `
            <span>${t.name} (${t.category})</span>
            <span class="${colorClass}">${sign}${t.amount.toLocaleString()} đ</span>
        `;
        // Thêm animation nhẹ nhàng (ví dụ: fade in)
        li.classList.add('fade-in-item');
        listElement.appendChild(li);
    });
}

// Gọi hàm này ngay khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
    renderTransactions();
    // Gọi thêm hàm calculateTotalBalance() ở đây
});
```

Tuân thủ các ví dụ trên sẽ giúp hệ thống của bạn chống lại các lỗi thường gặp với LocalStorage.

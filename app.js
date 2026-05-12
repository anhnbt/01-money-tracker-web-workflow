// State
let transactions = [];
let deleteId = null;

// Categories configuration
const categories = {
    income: ['Lương', 'Thưởng', 'Bán hàng', 'Đầu tư', 'Khác'],
    expense: ['Ăn uống', 'Giải trí', 'Mua sắm', 'Di chuyển', 'Hóa đơn', 'Khác']
};

// DOM Elements
const totalBalanceEl = document.getElementById('total-balance');
const totalIncomeEl = document.getElementById('total-income');
const totalExpenseEl = document.getElementById('total-expense');
const listEl = document.getElementById('transaction-list');
const form = document.getElementById('transaction-form');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const typeRadios = document.getElementsByName('type');
const toastEl = document.getElementById('toast');
const modalEl = document.getElementById('confirm-modal');
const cancelBtn = document.getElementById('cancel-btn');
const confirmBtn = document.getElementById('confirm-btn');

// --- FORMATTING ---
function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + ' đ';
}

// --- LOCAL STORAGE ---
function getTransactions() {
    try {
        const data = localStorage.getItem('money_transactions');
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error("Lỗi khi parse LocalStorage", e);
        return [];
    }
}

function saveTransactions() {
    localStorage.setItem('money_transactions', JSON.stringify(transactions));
}

// --- INITIALIZATION ---
function init() {
    transactions = getTransactions();
    
    // Set initial categories
    updateCategoryOptions('income');
    
    // Setup event listeners
    typeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            updateCategoryOptions(e.target.value);
        });
    });

    form.addEventListener('submit', addTransaction);
    cancelBtn.addEventListener('click', closeModal);
    confirmBtn.addEventListener('click', deleteTransaction);
    
    updateUI();
}

// --- LOGIC ---
function updateCategoryOptions(type) {
    categorySelect.innerHTML = '';
    categories[type].forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    });
}

function addTransaction(e) {
    e.preventDefault();
    
    nameInput.classList.remove('error');
    amountInput.classList.remove('error');

    const type = document.querySelector('input[name="type"]:checked').value;
    const name = nameInput.value.trim();
    const amount = parseInt(amountInput.value);
    const category = categorySelect.value;

    if (!name) {
        nameInput.classList.add('error');
        showToast('Vui lòng nhập tên giao dịch!');
        return;
    }

    if (!amount || amount <= 0) {
        amountInput.classList.add('error');
        showToast('Số tiền phải lớn hơn 0!');
        return;
    }

    const transaction = {
        id: Date.now(),
        type,
        name,
        amount,
        category,
        date: new Date().toISOString()
    };

    transactions.push(transaction);
    saveTransactions();
    updateUI();
    
    // Reset form
    nameInput.value = '';
    amountInput.value = '';
    nameInput.focus();
    
    showToast('Đã thêm giao dịch thành công!');
}

function updateUI() {
    // Render List
    listEl.innerHTML = '';
    
    if (transactions.length === 0) {
        listEl.innerHTML = '<li class="empty-state">Chưa có giao dịch nào.</li>';
    } else {
        // Sort from newest to oldest
        const sortedTransactions = [...transactions].sort((a, b) => b.id - a.id);
        
        sortedTransactions.forEach(t => {
            const li = document.createElement('li');
            const isIncome = t.type === 'income';
            const sign = isIncome ? '+' : '-';
            const colorClass = isIncome ? 'text-green' : 'text-red';
            
            li.innerHTML = `
                <div class="transaction-info">
                    <span class="transaction-name">${t.name}</span>
                    <span class="transaction-category">${t.category}</span>
                </div>
                <div class="transaction-right">
                    <span class="transaction-amount ${colorClass}">${sign}${formatCurrency(t.amount)}</span>
                    <button class="delete-btn" onclick="openDeleteModal(${t.id})" aria-label="Xóa">&times;</button>
                </div>
            `;
            li.classList.add('fade-in-item');
            listEl.appendChild(li);
        });
    }

    // Calculate Summary
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + t.amount, 0);
        
    const expense = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + t.amount, 0);
        
    const balance = income - expense;

    // Update Text
    totalBalanceEl.textContent = formatCurrency(balance);
    totalIncomeEl.textContent = '+' + formatCurrency(income);
    totalExpenseEl.textContent = '-' + formatCurrency(expense);
}

// --- MODAL & TOAST ---
window.openDeleteModal = function(id) {
    deleteId = id;
    modalEl.classList.remove('hidden');
}

function closeModal() {
    deleteId = null;
    modalEl.classList.add('hidden');
}

function deleteTransaction() {
    if (deleteId) {
        transactions = transactions.filter(t => t.id !== deleteId);
        saveTransactions();
        updateUI();
        closeModal();
        showToast('Đã xóa giao dịch.');
    }
}

let toastTimeout;
function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.remove('hidden');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastEl.classList.add('hidden');
    }, 3000);
}

// Bắt đầu app
document.addEventListener('DOMContentLoaded', init);

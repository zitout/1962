const searchInput = document.getElementById('searchInput');
const suggestionsDiv = document.getElementById('suggestions');
const customerInfoDiv = document.getElementById('customerInfo');

// للتأكد من تحميل البيانات
console.log('عدد العملاء:', customersData.length);

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.trim();
    suggestionsDiv.innerHTML = '';
    
    // للتأكد من عمل وظيفة البحث
    console.log('كلمة البحث:', searchTerm);

    if (searchTerm.length < 1) {
        suggestionsDiv.style.display = 'none';
        return;
    }

    // تحويل كلمة البحث للأحرف الصغيرة للمقارنة
    const searchTermLower = searchTerm.toLowerCase();
    
    // البحث في الأسماء
    const matches = customersData.filter(customer => 
        customer.الاسم.toLowerCase().indexOf(searchTermLower) > -1
    );

    console.log('النتائج:', matches.length); // للتأكد من وجود نتائج

    if (matches.length > 0) {
        suggestionsDiv.style.display = 'block';
        matches.forEach(customer => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = customer.الاسم;
            div.onclick = () => showCustomerInfo(customer);
            suggestionsDiv.appendChild(div);
        });
    } else {
        suggestionsDiv.style.display = 'none';
    }
});

function showCustomerInfo(customer) {
    searchInput.value = customer.الاسم;
    suggestionsDiv.style.display = 'none';
    
    customerInfoDiv.innerHTML = `
        <div class="info-row">
            <span class="info-label">الاسم:</span>
            <span class="info-value">${customer.الاسم}</span>
        </div>
        <div class="info-row">
            <span class="info-label">التاريخ:</span>
            <span class="info-value">${customer.التاريخ}</span>
        </div>
        <div class="info-row">
            <span class="info-label">السلعة:</span>
            <span class="info-value">${customer.السلعة || 'غير محدد'}</span>
        </div>
        <div class="info-row">
            <span class="info-label">مبلغ البيع:</span>
            <span class="info-value">${customer['م.البيع']}</span>
        </div>
        <div class="info-row">
            <span class="info-label">الوسيط:</span>
            <span class="info-value">${customer.الوسيط}</span>
        </div>
        <div class="info-row">
            <span class="info-label">المهنة:</span>
            <span class="info-value">${customer.المهنة}</span>
        </div>
        <div class="info-row">
            <span class="info-label">القسط:</span>
            <span class="info-value">${customer.القسط}</span>
        </div>
        <div class="info-row">
            <span class="info-label">الباقي:</span>
            <span class="info-value">${customer.الباقي}</span>
        </div>
        <div class="info-row">
            <span class="info-label">رقم الهاتف:</span>
            <span class="info-value">${customer['رقم الهاتف'] || 'غير متوفر'}</span>
        </div>
    `;
}

// إضافة مستمع حدث للنقر خارج قائمة الاقتراحات
document.addEventListener('click', (e) => {
    if (!suggestionsDiv.contains(e.target) && e.target !== searchInput) {
        suggestionsDiv.style.display = 'none';
    }
});

// للتأكد من تحميل الصفحة بشكل كامل
document.addEventListener('DOMContentLoaded', () => {
    console.log('تم تحميل الصفحة');
});

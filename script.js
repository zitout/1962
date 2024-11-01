const searchInput = document.getElementById('searchInput');
const suggestionsDiv = document.getElementById('suggestions');
const customerInfoDiv = document.getElementById('customerInfo');

searchInput.addEventListener('input', handleSearch);

function handleSearch(e) {
    const searchTerm = e.target.value.trim();
    suggestionsDiv.innerHTML = '';
    
    if (searchTerm.length < 2) {
        suggestionsDiv.style.display = 'none';
        return;
    }

    const matches = customersData.filter(customer => 
        customer.الاسم.includes(searchTerm)
    );

    if (matches.length > 0) {
        suggestionsDiv.style.display = 'block';
        matches.forEach(customer => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = customer.الاسم;
            div.addEventListener('click', () => showCustomerInfo(customer));
            suggestionsDiv.appendChild(div);
        });
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

function showCustomerInfo(customer) {
    searchInput.value = customer.الاسم;
    suggestionsDiv.style.display = 'none';
    
    const infoHTML = `
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
    
    customerInfoDiv.innerHTML = infoHTML;
}

// إغلاق الاقتراحات عند النقر خارجها
document.addEventListener('click', (e) => {
    if (!suggestionsDiv.contains(e.target) && e.target !== searchInput) {
        suggestionsDiv.style.display = 'none';
    }
});

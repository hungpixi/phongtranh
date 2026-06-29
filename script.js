document.addEventListener('DOMContentLoaded', () => {
    // Select elements - Sliders
    const sliderGuestsPottery = document.getElementById('slider-guests-pottery');
    const sliderTicketPottery = document.getElementById('slider-ticket-pottery');
    const sliderGuestsSilk = document.getElementById('slider-guests-silk');
    const sliderTicketSilk = document.getElementById('slider-ticket-silk');
    const sliderConversion = document.getElementById('slider-conversion');
    const sliderItemVal = document.getElementById('slider-itemval');
    const sliderInvestment = document.getElementById('slider-investment');

    // Badges / Value Display Elements
    const valGuestsPottery = document.getElementById('val-guests-pottery');
    const valTicketPottery = document.getElementById('val-ticket-pottery');
    const valGuestsSilk = document.getElementById('val-guests-silk');
    const valTicketSilk = document.getElementById('val-ticket-silk');
    const valConversion = document.getElementById('val-conversion');
    const valItemVal = document.getElementById('val-itemval');
    const valInvestment = document.getElementById('val-investment');

    // Output Elements
    const resRevPottery = document.getElementById('result-rev-pottery');
    const resRevSilk = document.getElementById('result-rev-silk');
    const resRevUpsell = document.getElementById('result-rev-upsell');
    const resRevTotal = document.getElementById('result-rev-total');
    const resCostVariable = document.getElementById('result-cost-variable');
    const resProfit = document.getElementById('result-profit');
    const resPayback = document.getElementById('result-payback');
    const resRoi = document.getElementById('result-roi');
    const resTotalInvestmentCalc = document.getElementById('result-total-investment-calc');

    // Offline Table Inputs
    const qtyBrochures = document.getElementById('qty-brochures');
    const qtyCatalogs = document.getElementById('qty-catalogs');
    const qtyVouchers = document.getElementById('qty-vouchers');
    const qtyStands = document.getElementById('qty-stands');
    const costNetworking = document.getElementById('cost-networking');

    // Offline Table Sums
    const totalBrochures = document.getElementById('total-brochures');
    const totalCatalogs = document.getElementById('total-catalogs');
    const totalVouchers = document.getElementById('total-vouchers');
    const totalStands = document.getElementById('total-stands');
    const totalOfflineCost = document.getElementById('total-offline-cost');

    // Helper function to format currency
    function formatCurrency(value) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value).replace('₫', 'đ');
    }

    // Main financial calculator logic
    function calculateROI() {
        // Parse sliders
        const guestsPottery = parseInt(sliderGuestsPottery.value);
        const ticketPottery = parseInt(sliderTicketPottery.value);
        const guestsSilk = parseInt(sliderGuestsSilk.value);
        const ticketSilk = parseInt(sliderTicketSilk.value);
        const conversion = parseInt(sliderConversion.value) / 100;
        const itemVal = parseInt(sliderItemVal.value);
        const baseInvestment = parseInt(sliderInvestment.value);

        // Calculate Offline Cost first
        const numBrochures = parseInt(qtyBrochures.value) || 0;
        const numCatalogs = parseInt(qtyCatalogs.value) || 0;
        const numVouchers = parseInt(qtyVouchers.value) || 0;
        const numStands = parseInt(qtyStands.value) || 0;
        const netCost = parseInt(costNetworking.value) || 0;

        const brochuresSum = numBrochures * 2500;
        const catalogsSum = numCatalogs * 45000;
        const vouchersSum = numVouchers * 800;
        const standsSum = numStands * 80000;
        const totalOfflineSum = brochuresSum + catalogsSum + vouchersSum + standsSum + netCost;

        // Update Offline Table DOM
        totalBrochures.textContent = formatCurrency(brochuresSum);
        totalCatalogs.textContent = formatCurrency(catalogsSum);
        totalVouchers.textContent = formatCurrency(vouchersSum);
        totalStands.textContent = formatCurrency(standsSum);
        totalOfflineCost.textContent = formatCurrency(totalOfflineSum);

        const totalInvestment = baseInvestment + totalOfflineSum;

        // Update slider badges
        valGuestsPottery.textContent = `${guestsPottery} khách/ngày`;
        valTicketPottery.textContent = formatCurrency(ticketPottery);
        valGuestsSilk.textContent = `${guestsSilk} khách/ngày`;
        valTicketSilk.textContent = formatCurrency(ticketSilk);
        valConversion.textContent = `${sliderConversion.value}%`;
        valItemVal.textContent = formatCurrency(itemVal);
        valInvestment.textContent = formatCurrency(baseInvestment);

        // Monthly calculation (30 days)
        const days = 30;
        
        // Revenues
        const revPottery = guestsPottery * ticketPottery * days;
        const revSilk = guestsSilk * ticketSilk * days;
        
        const totalGuests = guestsPottery + guestsSilk;
        const upsellGuests = totalGuests * conversion * days;
        const revUpsell = upsellGuests * itemVal;
        const revTotal = revPottery + revSilk + revUpsell;

        // Fixed Costs
        const costRent = 10000000; // 10 million VND rent
        const costFixed = 11000000; // 11 million VND (host, electricity, marketing)
        
        // Variable Costs
        const materialCostPottery = 15000; // Clay per guest
        const materialCostSilk = 10000; // Silk scrap/card per guest
        const otaCommissionRate = 0.20; // 20% commission on OTA
        const cogsUpsellRate = 0.40; // 40% COGS for high ticket paintings/silk

        const costWorkshopMaterials = (guestsPottery * materialCostPottery * days) + (guestsSilk * materialCostSilk * days);
        const costOtaCommission = (revPottery + revSilk) * otaCommissionRate;
        const costUpsellCogs = revUpsell * cogsUpsellRate;
        const costVariable = costWorkshopMaterials + costOtaCommission + costUpsellCogs;

        // Total Profit
        const profit = revTotal - costRent - costFixed - costVariable;
        
        // Payback Period and ROI
        let paybackPeriodText = "";
        let roiText = "";

        if (profit <= 0) {
            paybackPeriodText = "Không thể hoàn vốn (Lợi nhuận âm)";
            roiText = "0%";
            resProfit.className = "result-number font-large text-red";
        } else {
            const paybackMonths = totalInvestment / profit;
            paybackPeriodText = `${paybackMonths.toFixed(1)} tháng`;
            const annualRoi = (profit * 12 / totalInvestment) * 100;
            roiText = `${annualRoi.toFixed(1)}%`;
            resProfit.className = "result-number font-large text-green";
        }

        // Display results
        resRevPottery.textContent = formatCurrency(revPottery);
        resRevSilk.textContent = formatCurrency(revSilk);
        resRevUpsell.textContent = formatCurrency(revUpsell);
        resRevTotal.textContent = formatCurrency(revTotal);
        resCostVariable.textContent = `-${formatCurrency(costVariable)}`;
        resProfit.textContent = formatCurrency(profit);
        resPayback.textContent = paybackPeriodText;
        resRoi.textContent = roiText;
        resTotalInvestmentCalc.textContent = formatCurrency(totalInvestment);

        // DYNAMIC PRICE UPDATES IN OTA TABS & OFFLINE CO-BRANDING TEXTS
        const potteryPriceClassList = document.querySelectorAll('.dynamic-price-pottery');
        potteryPriceClassList.forEach(el => {
            el.textContent = formatCurrency(ticketPottery);
        });

        const silkPriceClassList = document.querySelectorAll('.dynamic-price-silk');
        silkPriceClassList.forEach(el => {
            el.textContent = formatCurrency(ticketSilk);
        });

        // Net Klook Price (80% of price)
        const netPotteryClassList = document.querySelectorAll('.net-price-pottery');
        netPotteryClassList.forEach(el => {
            el.textContent = formatCurrency(ticketPottery * 0.8);
        });
        const netSilkClassList = document.querySelectorAll('.net-price-silk');
        netSilkClassList.forEach(el => {
            el.textContent = formatCurrency(ticketSilk * 0.8);
        });

        // Viator USD price conversion (~25k / USD)
        const viatorUsdPrice = document.getElementById('viator-usd-price');
        if (viatorUsdPrice) {
            const usd = ticketPottery / 25000;
            viatorUsdPrice.textContent = `$${usd.toFixed(1)} USD`;
        }

        // Ctrip RMB price conversion (~3.5k / RMB)
        const ctripRmbPrice = document.getElementById('ctrip-rmb-price');
        if (ctripRmbPrice) {
            const rmb = ticketPottery / 3500;
            ctripRmbPrice.textContent = `~${rmb.toFixed(0)} RMB`;
        }

        // Co-branding price (50% off of pottery price)
        const coBrandingPrice = document.getElementById('co-branding-price');
        if (coBrandingPrice) {
            coBrandingPrice.textContent = formatCurrency(ticketPottery / 2);
        }
    }

    // Attach event listeners to sliders
    const allInputs = [
        sliderGuestsPottery, sliderTicketPottery, 
        sliderGuestsSilk, sliderTicketSilk, 
        sliderConversion, sliderItemVal, sliderInvestment,
        qtyBrochures, qtyCatalogs, qtyVouchers, qtyStands, costNetworking
    ];

    allInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', calculateROI);
        }
    });

    // Run calculation once initially
    calculateROI();

    // Select CRM elements
    const crmGuestName = document.getElementById('crm-guest-name');
    const crmGuestTime = document.getElementById('crm-guest-time');
    const crmGuestQty = document.getElementById('crm-guest-qty');
    const crmGuestActivity = document.getElementById('crm-guest-activity');

    // Attach event listeners for CRM inputs
    [crmGuestName, crmGuestTime, crmGuestQty, crmGuestActivity].forEach(input => {
        if (input) {
            input.addEventListener('input', updateCRMMessage);
        }
    });

    // Initialize CRM message once
    updateCRMMessage();

    // Initialize Documentation viewer
    loadDoc(null, 'business_info');
});

// Tab switching logic
function openTab(evt, tabName) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Remove active class from all tab buttons
    const tabBtns = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove('active');
    }

    // Show the current tab and add active class to button
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Global CRM States & Functions
let currentCRMLang = 'vi';

function translateTimeInput(timeStr, targetLang) {
    if (targetLang === 'vi') return timeStr;
    
    let result = timeStr;
    
    const dict = {
        en: {
            'ngày mai': 'tomorrow',
            'hôm nay': 'today',
            'ngày mốt': 'the day after tomorrow',
            'ngày kia': 'the day after tomorrow',
            'chiều nay': 'this afternoon',
            'sáng mai': 'tomorrow morning',
            'chiều mai': 'tomorrow afternoon',
            'tối mai': 'tomorrow evening',
            'chủ nhật': 'Sunday',
            'thứ hai': 'Monday',
            'thứ ba': 'Tuesday',
            'thứ tư': 'Wednesday',
            'thứ năm': 'Thursday',
            'thứ sáu': 'Friday',
            'thứ bảy': 'Saturday'
        },
        zh: {
            'ngày mai': '明天',
            'hôm nay': '今天',
            'ngày mốt': '后天',
            'ngày kia': '后天',
            'chiều nay': '今天下午',
            'sáng mai': '明天上午',
            'chiều mai': '明天下午',
            'tối mai': '明天晚上',
            'chủ nhật': '周日',
            'thứ hai': '周一',
            'thứ ba': '周二',
            'thứ tư': '周三',
            'thứ năm': '周四',
            'thứ sáu': '周五',
            'thứ bảy': '周六'
        },
        ko: {
            'ngày mai': '내일',
            'hôm nay': '오늘',
            'ngày mốt': '모레',
            'ngày kia': '모레',
            'chiều nay': '오늘 오후',
            'sáng mai': '내일 오전',
            'chiều mai': '내일 오후',
            'tối mai': '내일 저녁',
            'chủ nhật': '일요일',
            'thứ hai': '월요일',
            'thứ ba': '화요일',
            'thứ tư': '수요일',
            'thứ năm': '목요일',
            'thứ sáu': '금요일',
            'thứ bảy': '토요일'
        }
    };
    
    const translations = dict[targetLang];
    if (!translations) return timeStr;
    
    for (const [vietnamese, translated] of Object.entries(translations)) {
        const regex = new RegExp(vietnamese, 'gi');
        result = result.replace(regex, translated);
    }
    
    return result;
}

function changeCRMLang(lang) {
    currentCRMLang = lang;
    
    // Update button active state
    const buttons = document.querySelectorAll('.crm-lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.getElementById(`crm-btn-${lang}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    updateCRMMessage();
}

function updateCRMMessage() {
    const nameInput = document.getElementById('crm-guest-name');
    const timeInput = document.getElementById('crm-guest-time');
    const qtyInput = document.getElementById('crm-guest-qty');
    const activityInput = document.getElementById('crm-guest-activity');

    if (!nameInput || !timeInput || !qtyInput || !activityInput) return;

    const name = nameInput.value || 'Guest';
    const rawTime = timeInput.value || '15:00';
    const time = translateTimeInput(rawTime, currentCRMLang);
    const qty = qtyInput.value || '1';
    const activityKey = activityInput.value;

    const activities = {
        pottery: {
            vi: 'Workshop Vẽ Gốm Thanh Hà',
            en: 'Thanh Ha Ceramic Painting Workshop',
            zh: '会安传统手工陶艺绘画体验 (Thanh Ha Ceramic Painting Workshop)',
            ko: '탄하 도자기 페인팅 워크숍 (Thanh Ha Ceramic Painting Workshop)'
        },
        silk: {
            vi: 'Workshop Làm Thiệp Lụa Hội An',
            en: 'Hoi An Silk Postcard Making Workshop',
            zh: '会安丝绸明信片手工制作体验 (Hoi An Silk Postcard Making Workshop)',
            ko: '호이안 실크 엽서 만들기 워크숍 (Hoi An Silk Postcard Making Workshop)'
        }
    };

    const activityName = activities[activityKey][currentCRMLang];
    let msg = '';

    if (currentCRMLang === 'vi') {
        msg = `Chào ${name}, cảm ơn bạn đã đăng ký ${activityName} cho ${qty} người vào lúc ${time}!

📍 Địa chỉ: 122 Nguyễn Phúc Tần, An Hội, Hội An (Ngay cạnh resort Bel Marina).
🗺️ Chỉ đường: Chỉ cách phố cổ 5 phút đi bộ. Bạn có thể định vị dễ dàng trên Google Maps tại đây: https://maps.google.com/?q=Maison+TiA+Hoi+An
📸 Cửa hàng có biển hiệu gỗ 'Maison TiA Art & Objects' lung linh đèn lồng vào ban đêm. Rất mong được gặp bạn để cùng sáng tạo nghệ thuật!`;
    } else if (currentCRMLang === 'en') {
        msg = `Hi ${name}, thank you for booking the ${activityName} for ${qty} people at ${time}!

📍 Address: 122 Nguyen Phuc Tan, An Hoi, Hoi An (Right next to Bel Marina Resort).
🗺️ Directions: We are just a 5-minute walk from the Ancient Town. You can easily find us on Google Maps here: https://maps.google.com/?q=Maison+TiA+Hoi+An
📸 Look for our wooden signboard 'Maison TiA Art & Objects' with glowing yellow lanterns at night. We can't wait to create art with you!`;
    } else if (currentCRMLang === 'zh') {
        msg = `您好 ${name}，感谢您预订 ${time} ${qty} 位的 ${activityName}！

📍 地址：会安安会阮福秦路 122 号（紧邻 Bel Marina 度假村）。
🗺️ 谷歌地图导航：https://maps.google.com/?q=Maison+TiA+Hoi+An
📸 晚上请认准挂满黄色灯笼的 'Maison TiA Art & Objects' 木质招牌。期待您的光临！`;
    } else if (currentCRMLang === 'ko') {
        msg = `안녕하세요 ${name}님, ${time}에 ${qty}분 예약하신 ${activityName} 확정되었습니다!

📍 주소: 122 Nguyen Phuc Tan, An Hoi, Hoi An (Bel Marina 리조트 바로 옆).
🗺️ 구글맵 링크: https://maps.google.com/?q=Maison+TiA+Hoi+An
📸 밤에 노란 랜턴이 켜져 있는 'Maison TiA Art & Objects' 나무 간판을 찾아오세요. 곧 뵙겠습니다!`;
    }

    const crmText = document.getElementById('crm-text');
    if (crmText) {
        crmText.value = msg;
    }

    // Update share buttons
    const encodedMsg = encodeURIComponent(msg);
    const btnWhatsapp = document.getElementById('btn-send-whatsapp');
    if (btnWhatsapp) {
        btnWhatsapp.href = `https://api.whatsapp.com/send?text=${encodedMsg}`;
    }

    const btnZalo = document.getElementById('btn-send-zalo');
    if (btnZalo) {
        btnZalo.href = `https://zalo.me/pc?text=${encodedMsg}`;
    }
}

function copyCRMText() {
    const crmText = document.getElementById('crm-text');
    const crmStatus = document.getElementById('crm-status');
    if (!crmText || !crmStatus) return;
    
    navigator.clipboard.writeText(crmText.value).then(() => {
        crmStatus.style.color = '#27AE60';
        crmStatus.textContent = '✓ Đã sao chép tin nhắn vào bộ nhớ tạm!';
        setTimeout(() => {
            crmStatus.textContent = '';
        }, 3000);
    }).catch(err => {
        crmStatus.style.color = '#C0392B';
        crmStatus.textContent = '❌ Lỗi sao chép tự động. Hãy sao chép thủ công ở ô trên.';
    });
}

// Expose functions to global scope
window.changeCRMLang = changeCRMLang;
window.updateCRMMessage = updateCRMMessage;
window.copyCRMText = copyCRMText;

// --- DOCUMENTATION VIEWER DATA & LOGIC ---

const DOCUMENTATION_DATA = {
    business_info: `
        <h2>1. Thông tin chung & Vị trí Chiến lược</h2>
        <p>Maison TiA Art & Objects tọa lạc tại <strong>122 Nguyễn Phúc Tần, An Hội, Hội An</strong>. Địa điểm sở hữu những thế mạnh cạnh tranh tuyệt đối:</p>
        <ul>
            <li><strong>Khoảng cách phố cổ 500m</strong>: Nằm trong vùng đệm du lịch sầm uất, đón đầu dòng khách tản bộ và di chuyển tự túc.</li>
            <li><strong>Sát cạnh Resort Bel Marina</strong>: Resort cao cấp 5 sao với lượng lớn du khách quốc tế chi tiêu cao ra vào hàng ngày. Khách chỉ cần đi bộ 1-2 phút là tới cửa hàng.</li>
            <li><strong>Không gian 2 tầng đa năng</strong>: Tầng 1 tập trung trưng bày nghệ thuật (tranh, khăn lụa), tầng 2 sở hữu ban công lộng gió lý tưởng để làm không gian workshop văn hóa bản địa.</li>
        </ul>
        <h3>Vốn đầu tư & Chi phí vận hành ban đầu:</h3>
        <ul>
            <li><strong>Chi phí thuê nhà</strong>: 10.000.000đ/tháng (chưa gồm điện nước).</li>
            <li><strong>Thanh toán ban đầu</strong>: Trả trước 6 tháng tiền nhà (60 triệu) + Tiền cọc 1 tháng (10 triệu) = 70.000.000đ.</li>
            <li><strong>Vốn setup ban đầu</strong>: ~300.000.000đ (sử dụng nội thất gỗ công nghiệp cao cấp giả gỗ giúp tối ưu hóa thu hồi vốn).</li>
        </ul>
        <h2>2. Định hướng Mô hình Kinh doanh (Mồi & Phễu)</h2>
        <p>Để tối ưu hóa dòng tiền và hồi vốn nhanh, cửa hàng không chỉ bán tranh cao cấp (vốn kén khách du lịch) mà áp dụng mô hình phễu sản phẩm thu hút dòng khách ra vào liên tục:</p>
        <h4>Hướng 1: Sản phẩm mồi & Trải nghiệm (Phễu thu hút dòng khách)</h4>
        <ul>
            <li><strong>Quà lưu niệm</strong>: Thiệp handmade độc bản (35k - 60k), Đồ gốm thủ công mộc mạc Làng cổ Thanh Hà (50k - 150k), Tranh truyền thống Việt Nam khổ nhỏ (180k - 220k).</li>
            <li><strong>Trải nghiệm dịch vụ (Workshops)</strong>: Thiết kế các workshop ngắn (1.5 - 2 tiếng) hướng dẫn vẽ gốm Thanh Hà, làm thiệp lụa hoặc bưu thiếp nghệ thuật ngay tại không gian ban công tầng 2 thoáng đãng.</li>
        </ul>
        <h4>Hướng 2: Sản phẩm giá trị cao (Chuyển đổi lợi nhuận)</h4>
        <ul>
            <li><strong>Tranh nghệ thuật cao cấp</strong>: Trưng bày tại các khu vực đèn rọi chuyên nghiệp ở tầng 1 (giá từ 5.000.000đ - 50.000.000+đ).</li>
            <li><strong>Khăn lụa tơ tằm</strong>: Sản phẩm thời trang lụa cao cấp, thiết kế độc bản (giá từ 1.200.000đ - 3.500.000đ).</li>
        </ul>
    `,
    products_and_pricing: `
        <h2>Danh mục Sản phẩm & Định giá Chi tiết</h2>
        <p>Tài liệu này hệ thống hóa danh mục sản phẩm (bao gồm sản phẩm phễu, trải nghiệm dịch vụ và sản phẩm giá trị cao) kèm theo chiến lược định giá tối ưu nhằm tối đa hóa doanh thu từ khách du lịch tại Hội An.</p>
        
        <h3>1. Phân khúc Sản phẩm Mồi & Phễu</h3>
        <p>Nhóm sản phẩm này có tỷ suất lợi nhuận vừa phải nhưng tính chất lưu niệm cao, dễ mua, không làm khách du lịch ngần ngại về giá.</p>
        <ul>
            <li><strong>Tranh truyền thống Việt Nam khổ nhỏ</strong>: Tranh Đông Hồ, tranh Hàng Trống hoặc tranh vẽ tay phong cảnh Hội An kích thước nhỏ (khung 15x15cm hoặc A5). Mức giá đề xuất: <strong>180.000đ - 220.000đ</strong>.</li>
            <li><strong>Đồ gốm thủ công làng cổ Thanh Hà</strong>: Cốc, chén, tượng gốm mini, con thổi gốm đất nung truyền thống được lấy trực tiếp từ Làng gốm Thanh Hà. Mức giá đề xuất: <strong>50.000đ - 150.000đ</strong>.</li>
            <li><strong>Thiệp handmade nghệ thuật</strong>: Thiệp nổi phong cảnh phố cổ, thiệp kết hợp sợi lụa tơ tằm vẽ tay. Mức giá đề xuất: <strong>35.000đ - 60.000đ</strong>.</li>
        </ul>

        <h3>2. Trải nghiệm dịch vụ (Workshops nghệ thuật)</h3>
        <p>Tổ chức tại khu vực Ban công tầng 2 (Balcony Terrace) của Maison TiA.</p>
        <ul>
            <li><strong>Workshop 1: Vẽ gốm Thanh Hà truyền thống (Thanh Ha Ceramic Painting Workshop)</strong>: Khách nhận một phôi gốm thô, tự tay phác thảo và tô màu acrylic dưới sự hướng dẫn của host. Thành phẩm được phủ bóng mang về. Mức giá đề xuất: <strong>250.000đ / khách</strong> (đã gồm nước uống thảo mộc và phôi gốm).</li>
            <li><strong>Workshop 2: Làm thiệp & Bưu thiếp bằng lụa Hội An (Silk Postcard Making Workshop)</strong>: Hướng dẫn khách kết hợp vụn lụa tơ tằm cao cấp và màu nước để tạo ra những chiếc bưu thiếp Hội An độc bản. Mức giá đề xuất: <strong>200.000đ / khách</strong>.</li>
        </ul>

        <h3>3. Phân khúc Sản phẩm Giá trị cao (Core Product)</h3>
        <p>Nhóm sản phẩm chính mang lại doanh thu đột phá cho phòng tranh, trưng bày tại tầng 1 với hệ thống ánh sáng chuyên nghiệp.</p>
        <ul>
            <li><strong>Tranh nghệ thuật cao cấp</strong>: Tranh sơn dầu, sơn mài, tranh màu nước khổ lớn thể hiện phong cảnh, con người Việt Nam hoặc các tác phẩm đương đại của các họa sĩ địa phương liên kết. Mức giá tham khảo: <strong>5.000.000đ - 50.000.000+đ</strong>.</li>
            <li><strong>Khăn lụa tơ tằm cao cấp</strong>: Khăn làm từ 100% tơ tằm tự nhiên Việt Nam (như lụa Mã Châu hoặc lụa Bảo Lộc), vẽ tay họa tiết nghệ thuật độc bản. Mức giá đề xuất: <strong>1.200.000đ - 3.500.000đ / chiếc</strong>.</li>
        </ul>

        <h3>4. Chiến lược Tối ưu hóa chuyển đổi tại cửa hàng (Cross-selling)</h3>
        <ol>
            <li><strong>Khuyến mãi chéo (Cross-promotion)</strong>: Khách tham gia Workshop tại tầng 2 được tặng mã giảm giá 10% cho quà lưu niệm nhỏ ở tầng 1, và 5% cho các sản phẩm khăn lụa tơ tằm cao cấp.</li>
            <li><strong>Khu vực trưng bày bắt mắt</strong>: Đặt các kệ quà lưu niệm nhỏ ngay sát quầy thanh toán và lối ra vào tầng 1 để kích thích hành vi mua sắm bộc phát (Impulse buying).</li>
            <li><strong>Kể chuyện thương hiệu (Storytelling)</strong>: Mỗi bức tranh nghệ thuật và khăn lụa đều đi kèm một thẻ thông tin nhỏ (Tag) viết ngắn gọn bằng tiếng Anh/Việt giới thiệu về tác giả và cảm hứng sáng tạo.</li>
        </ol>
    `,
    offline_marketing: `
        <h2>Chiến dịch Tiếp thị Ngoại tuyến (Offline Marketing)</h2>
        <p>Chiến lược tiếp thị ngoại tuyến tại Hội An nhằm tiếp cận trực tiếp tệp khách du lịch đang lưu trú và di chuyển tại địa bàn thông qua liên minh với tài xế xe điện và các khách sạn/homestay lân cận.</p>
        
        <h3>1. Kênh Đối tác Xe điện (Electric Buggy Network)</h3>
        <p>Xe điện là phương tiện di chuyển phổ biến nhất của khách du lịch khi đi từ các resort/khách sạn vào trung tâm phố cổ Hội An.</p>
        <ul>
            <li><strong>Chiến lược triển khai</strong>: Thiết kế tờ gấp (brochure) nhỏ gọn, song ngữ Anh - Việt, giới thiệu phòng tranh và workshop vẽ gốm kèm bản đồ định vị. Đặt tờ gấp trong túi sau ghế xe điện.</li>
            <li><strong>Mã định danh</strong>: Mỗi tài xế phát một xấp tờ gấp có đóng dấu mã số riêng (Ví dụ: DRIVER01). Khách cầm tờ gấp này đến Maison TiA sẽ được giảm giá 10%.</li>
            <li><strong>Chính sách hoa hồng cho tài xế</strong>:
                <ul>
                    <li>Đối với khách đăng ký Workshop: Trích <strong>40.000đ / khách</strong> cho tài xế.</li>
                    <li>Đối với khách mua sắm sản phẩm: Trích <strong>10%</strong> giá trị hóa đơn (tối đa 200.000đ/giao dịch).</li>
                </ul>
            </li>
        </ul>

        <h3>2. Kênh Đối tác Khách sạn, Homestay & Villa lân cận</h3>
        <p>Tập trung vào các cơ sở lưu trú trong bán kính 1.5km, đặc biệt là Bel Marina Hoi An Resort (ngay sát cạnh) và các villa, homestay tại đảo An Hội.</p>
        <ul>
            <li><strong>Phương án 1 (Referral Commission)</strong>: Lễ tân giới thiệu khách qua voucher của khách sạn sẽ nhận hoa hồng 15% (cho workshop) và 10% (cho mua sắm). Khách được giảm 10%.</li>
            <li><strong>Phương án 2 (B2B Co-branding)</strong>: Khách sạn bán gói phòng ở dài hạn tặng vé workshop. Maison TiA bán vé sỉ cho khách sạn đối tác với giá giảm 50% chỉ còn <strong>125.000đ / vé</strong>. Khách sạn có thêm quà tặng thu hút khách đặt phòng mà chỉ tốn chi phí rất nhỏ.</li>
        </ul>

        <h3>3. Dự toán Chi phí Triển khai Offline (Budget Estimate)</h3>
        <table>
            <thead>
                <tr>
                    <th>Hạng mục</th>
                    <th>Chi tiết</th>
                    <th>Đơn giá (VNĐ)</th>
                    <th>Số lượng</th>
                    <th>Thành tiền (VNĐ)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Brochure / Tờ gấp xe điện</strong></td>
                    <td>Khổ A5 gấp 3, in 2 mặt, song ngữ.</td>
                    <td>2.500</td>
                    <td>1.000 tờ</td>
                    <td>2.500.000</td>
                </tr>
                <tr>
                    <td><strong>Catalog trưng bày Khách sạn</strong></td>
                    <td>Khổ A4 đứng, 12 trang màu giới thiệu tranh & lụa.</td>
                    <td>45.000</td>
                    <td>30 quyển</td>
                    <td>1.350.000</td>
                </tr>
                <tr>
                    <td><strong>Voucher giảm giá (có mã số)</strong></td>
                    <td>Kích thước namecard, đóng số đối tác.</td>
                    <td>800</td>
                    <td>1.500 tờ</td>
                    <td>1.200.000</td>
                </tr>
                <tr>
                    <td><strong>Kệ gỗ/Mica đựng brochure</strong></td>
                    <td>Đặt tại quầy lễ tân các homestay/khách sạn.</td>
                    <td>80.000</td>
                    <td>20 cái</td>
                    <td>1.600.000</td>
                </tr>
                <tr>
                    <td><strong>Chi phí ngoại giao ban đầu</strong></td>
                    <td>Tặng quà lễ tân, kết nối tài xế xe điện.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>1.000.000</td>
                </tr>
                <tr style="font-weight: bold; background-color: var(--bg-light);">
                    <td colspan="4">TỔNG CHI PHÍ THIẾT LẬP OFFLINE</td>
                    <td>7.650.000</td>
                </tr>
            </tbody>
        </table>
    `,
    growth_and_operations: `
        <h2>Chiến thuật Vận hành & Tăng trưởng Đột phá</h2>
        <p>Tài liệu đề xuất các giải pháp tối ưu hóa vận hành, quản lý công suất và các chiến thuật marketing ngách để tối đa hóa hiệu quả hoạt động cho Maison TiA.</p>
        
        <h3>1. Thiết kế Trải nghiệm "Sống Ảo" (Photogenic Setup)</h3>
        <p>Khách du lịch thế hệ mới quyết định đến một địa điểm phần lớn dựa trên những hình ảnh đẹp mà họ thấy trực tuyến.</p>
        <ul>
            <li><strong>Góc check-in "Triệu View" tại Ban công Tầng 2</strong>: Thiết kế một góc trải nghiệm vẽ tranh/gốm cố định với bố cục hoàn hảo: Giá vẽ gỗ đặt góc ban công, hậu cảnh bức tường vàng đặc trưng của Hội An, giàn hoa giấy hồng rực rủ xuống, kết hợp với đèn lồng tre mây mộc mạc. Đặt biển gỗ: <em>"Best Photo Spot - Maison TiA"</em>.</li>
            <li><strong>Tối ưu hóa trưng bày tầng 1 (Visual Merchandising)</strong>: Đèn rọi điểm (Spotlight) có CRI cao (>90) để tôn lên thớ lụa và độ sâu màu sơn mài. Bố trí một chiếc gương lớn, viền gỗ mộc mạc nghệ thuật ở khu trưng bày khăn lụa để khách Mirror selfie.</li>
        </ul>

        <h3>2. Liên kết Hướng dẫn viên du lịch tự do (Tour Guides)</h3>
        <p>Bên cạnh xe điện, các hướng dẫn viên dẫn các tour đoàn nhỏ hoặc các tour chụp ảnh (Instagram tours) cũng là nguồn dẫn khách cực kỳ chất lượng.</p>
        <ul>
            <li><strong>Chính sách "Trạm dừng chân miễn phí cho HDV"</strong>: Maison TiA mời HDV ghé qua phòng tranh sử dụng nhà vệ sinh sạch sẽ, uống nước thảo mộc miễn phí, dùng wifi và ghế ngồi nghỉ máy lạnh tầng 1.</li>
            <li><strong>Hoa hồng</strong>: Trích hoa hồng <strong>10%</strong> giá trị hóa đơn mua sắm của khách cho HDV đi kèm làm động lực liên kết lâu dài.</li>
        </ul>

        <h3>3. Quản lý Công suất & Khung giờ vàng</h3>
        <p>Sức chứa lý tưởng của ban công tầng 2 là <strong>10 - 12 người</strong>. Thiết lập 3 khung giờ vàng cố định hàng ngày để đồng bộ trên các kênh OTA:</p>
        <ol>
            <li><strong>Khung sáng (09:30 - 11:30)</strong>: Thời tiết mát mẻ, ánh sáng tự nhiên lý tưởng để vẽ gốm.</li>
            <li><strong>Khung chiều (14:00 - 16:00)</strong>: Tránh nắng gắt ngoài trời, khách tìm hoạt động thư giãn có mái che.</li>
            <li><strong>Khung hoàng hôn (16:30 - 18:30)</strong>: Khung giờ vàng chụp ảnh đẹp nhất khi hoàng hôn buông xuống sông Hoài.</li>
        </ol>
        <p><em>Đồng bộ lịch: Sử dụng Google Calendar làm lịch trung tâm kết nối API với các trang OTA để tự động giảm slot trống khi có khách book, tránh tình trạng Overbooking.</em></p>

        <h3>4. Khuyến nghị Nhân sự & Ứng dụng AI</h3>
        <ul>
            <li><strong>Phương án tuyển Host phụ (Co-host)</strong>: Để trực tin nhắn 24/7, đón tiếp khách tại shop, hướng dẫn vẽ gốm và đối soát hoa hồng xe điện/homestay, chị Thi nên tuyển một bạn Host phụ hỗ trợ vận hành (với mức hỗ trợ thỏa thuận).</li>
            <li><strong>Ứng dụng AI trong vận hành</strong>: Host phụ có thể dùng AI (ChatGPT/Gemini) để viết mô tả dịch vụ chuẩn SEO đa ngôn ngữ, tự động hóa biên dịch câu trả lời review khách quốc tế (Hàn, Trung, Pháp...), tiết kiệm tối đa thời gian.</li>
        </ul>
    `,
    klook: `
        <h2>Cẩm nang Đăng ký & Tối ưu hóa trên Klook & KKday</h2>
        <p>Klook là nền tảng du lịch trải nghiệm lớn nhất châu Á, đặc biệt phổ biến với khách du lịch Hàn Quốc, Đông Nam Á, và Việt Nam. KKday là đối tác lớn của Đài Loan có sức ảnh hưởng mạnh mẽ ở thị trường Đông Á.</p>
        
        <h3>1. Link cổng đăng ký đối tác</h3>
        <ul>
            <li><strong>Klook Merchant</strong>: <a href="https://merchant.klook.com/" target="_blank">https://merchant.klook.com/</a></li>
            <li><strong>KKday Marketplace / Rezio</strong>: <a href="https://marketplace.kkday.com/" target="_blank">https://marketplace.kkday.com/</a></li>
        </ul>

        <h3>2. Thiết lập thông tin trải nghiệm</h3>
        <ul>
            <li><strong>Tên trải nghiệm đề xuất</strong>: Traditional Thanh Ha Ceramic Painting Workshop in Hoi An / Workshop Vẽ Gốm Làng Cổ Thanh Hà Tại Hội An.</li>
            <li><strong>Mô tả ngắn</strong>: Trải nghiệm hoạt động nghệ thuật mộc mạc tại một phòng tranh yên bình cạnh phố cổ Hội An. Khách hàng sẽ được tự tay vẽ màu lên các phôi gốm thô chính gốc từ làng gốm Thanh Hà, dưới sự hỗ trợ từ host, thưởng thức trà thảo mộc tại ban công lộng gió của Maison TiA.</li>
        </ul>

        <h3>3. Checklist hình ảnh chuẩn hóa</h3>
        <ol>
            <li><strong>Ảnh bìa</strong>: <code>balcony_terrace_day.jpg</code> (Không gian ban công tầng 2 sáng sủa, tạo cảm giác thư giãn).</li>
            <li><strong>Ảnh chi tiết</strong>: <code>gallery_interior_crafts.jpg</code> (Góc lưu niệm và phôi gốm Thanh Hà).</li>
            <li><strong>Ảnh định vị</strong>: <code>storefront_night_full.jpg</code> (Mặt tiền lung linh ban đêm để khách dễ tìm đường).</li>
        </ol>

        <h3>4. Giá bán & Hoa hồng</h3>
        <ul>
            <li><strong>Mức giá bán lẻ đề xuất</strong>: <strong>250.000đ / khách</strong>.</li>
            <li><strong>Tỷ lệ chiết khấu (Commission)</strong>: Thường từ <strong>15% - 25%</strong> tùy thỏa thuận (Mặc định tính 20%).</li>
            <li><strong>Giá net nhận về</strong>: ~200.000đ / khách. Biên lợi nhuận cực kỳ cao do phôi gốm mua sỉ chỉ từ 10.000đ - 15.000đ.</li>
        </ul>
    `,
    tripadvisor: `
        <h2>Cẩm nang Thiết lập TripAdvisor & Viator</h2>
        <p>TripAdvisor là trang đánh giá lớn nhất thế giới, còn Viator là cổng bán trải nghiệm (Experiences) trực thuộc TripAdvisor. Đây là kênh tiếp cận số 1 đối với tệp khách du lịch Tây Âu, Mỹ, Úc chi tiêu cao.</p>
        
        <h3>1. Đường dẫn đăng ký đối tác</h3>
        <ul>
            <li><strong>TripAdvisor Listing (Miễn phí)</strong>: <a href="https://www.tripadvisor.com/Owners" target="_blank">https://www.tripadvisor.com/Owners</a></li>
            <li><strong>Viator Partner (Bán vé trải nghiệm)</strong>: <a href="https://partner.viator.com/" target="_blank">https://partner.viator.com/</a></li>
        </ul>

        <h3>2. Tối ưu địa điểm trên TripAdvisor (Free Listing)</h3>
        <ul>
            <li><strong>Tên hiển thị</strong>: <em>Maison TiA - Art & Objects Hoi An (Art Gallery & Souvenirs)</em></li>
            <li><strong>Danh mục đăng ký</strong>: Art Galleries (Phòng trưng bày nghệ thuật), Gift & Speciality Shops (Cửa hàng lưu niệm đặc sản).</li>
            <li><strong>Đẩy hạng review</strong>: Đặt QR Code dẫn thẳng tới link review tại quầy thu ngân. Hướng dẫn host tặng một món quà nhỏ (như thiệp vẽ tay xinh xắn) để khuyến khích khách viết đánh giá 5 sao kèm hình ảnh thực tế sau buổi workshop.</li>
        </ul>

        <h3>3. Thiết lập Sản phẩm trên Viator (Paid Experience)</h3>
        <ul>
            <li><strong>Tên hoạt động</strong>: Authentic Thanh Ha Ceramic Painting & Art Gallery Workshop in Hoi An</li>
            <li><strong>Mô tả (Tiếng Anh chuẩn)</strong>:
                <p><em>"Spend a relaxing morning or afternoon inside 'Maison TiA Art & Objects', a beautiful boutique gallery near Hoi An Ancient Town. Paint your own traditional Thanh Ha clay pottery using acrylic colors. Enjoy a cup of cold local herbal tea on our scenic upstairs balcony terrace. Take home a unique, self-created souvenir of Hoi An."</em></p>
            </li>
            <li><strong>Inclusions</strong>: Phôi gốm thô & dụng cụ vẽ, nước uống thảo mộc miễn phí, host hướng dẫn vẽ gốm, thành phẩm mang về.</li>
        </ul>

        <h3>4. Giá bán & Hoa hồng</h3>
        <ul>
            <li><strong>Mức giá đề xuất</strong>: <strong>11 USD / khách</strong> (~275.000đ).</li>
            <li><strong>Hoa hồng Viator</strong>: <strong>20%</strong> (~2.2 USD).</li>
            <li><strong>Giá net nhận về</strong>: ~8.8 USD (~220.000đ).</li>
        </ul>
    `,
    airbnb: `
        <h2>Cẩm nang Đăng ký trên Airbnb Experiences</h2>
        <p>Airbnb Experiences (Trải nghiệm Airbnb) tập trung vào các hoạt động độc bản, mang tính bản địa cao và được dẫn dắt bởi một host thân thiện. Đây là kênh tiếp cận phân khúc khách du lịch thích trải nghiệm chiều sâu, thích kết nối văn hóa.</p>
        
        <h3>1. Đường dẫn đăng ký</h3>
        <p>Đăng ký tài khoản host trải nghiệm tại: <a href="https://www.airbnb.com/host/experiences" target="_blank">https://www.airbnb.com/host/experiences</a></p>

        <h3>2. Ý tưởng xây dựng Trải nghiệm (Airbnb-style)</h3>
        <p>Airbnb yêu cầu tính độc bản và tương tác cá nhân cao. Chúng ta thiết kế như một cuộc hẹn chia sẻ văn hóa, không đăng bài giống như đại lý bán vé đại trà.</p>
        <ul>
            <li><strong>Tiêu đề đề xuất</strong>: Craft & Clay: Create Your Own Hoi An Souvenir on a Ceramic Terrace</li>
            <li><strong>Lộ trình thiết kế chi tiết (120 phút)</strong>:
                <ol>
                    <li><strong>Chào đón (15 phút)</strong>: Khách đến và làm quen với host tại phòng tranh tầng 1. Host giới thiệu về nguồn gốc gốm cổ truyền Thanh Hà.</li>
                    <li><strong>Tìm cảm hứng (15 phút)</strong>: Tham quan khu trưng bày khăn lụa tơ tằm vẽ tay và các góc trưng bày gốm mộc để khơi gợi ý tưởng sáng tạo.</li>
                    <li><strong>Sáng tạo (75 phút)</strong>: Di chuyển lên ban công tầng 2 vẽ gốm, thưởng thức trà thảo mộc mát lạnh dưới sự hướng dẫn của host.</li>
                    <li><strong>Kết thúc (15 phút)</strong>: Chờ màu khô, host hỗ trợ phủ bóng bảo vệ sản phẩm, đóng gói và lưu giữ bức ảnh kỷ niệm cùng khách.</li>
                </ol>
            </li>
        </ul>

        <h3>3. Giá bán & Hoa hồng</h3>
        <ul>
            <li><strong>Giá bán đề xuất</strong>: <strong>12 USD / khách</strong> (~300.000 VNĐ).</li>
            <li><strong>Hoa hồng Airbnb</strong>: <strong>20%</strong> phí dịch vụ trải nghiệm.</li>
            <li><strong>Yêu cầu vận hành</strong>: Trả lời tin nhắn nhanh qua app, tương tác thân thiện với khách hàng. Cài đặt lịch cố định vào các khung giờ vàng trong tuần.</li>
        </ul>
    `,
    tripcom: `
        <h2>Cẩm nang Thiết lập trên Trip.com & Ctrip</h2>
        <p>Trip.com (phục vụ khách quốc tế và Đông Á) và Ctrip (phục vụ riêng thị trường khách du lịch Trung Quốc đại lục) là những nền tảng tối quan trọng để tiếp cận dòng khách du lịch Trung Quốc, Đài Loan và Hồng Kông đến Hội An.</p>
        
        <h3>1. Cổng đăng ký đối tác</h3>
        <p>Đăng ký thông qua tài khoản Nhà cung cấp dịch vụ giải trí (Things to Do Merchant Portal) tại: <a href="https://partner.trip.com/" target="_blank">https://partner.trip.com/</a></p>

        <h3>2. Chiến lược Tối ưu hóa & Phù hợp Thị hiếu khách Trung Quốc</h3>
        <p>Tệp khách du lịch Trung Quốc trẻ tuổi (Gen Z) rất thích các địa điểm có tính nghệ thuật cao, thích hợp chụp ảnh check-in và đăng lên mạng xã hội (Tiểu Hồng Thư - XiaoHongShu).</p>
        <ul>
            <li><strong>Tên hoạt động (Tiếng Trung)</strong>: 会安传统手工陶艺绘画与艺术馆体验 (Trải nghiệm vẽ gốm thủ công truyền thống và tham quan phòng tranh tại Hội An).</li>
            <li><strong>Mô tả dịch vụ (Tiếng Trung)</strong>: 
                <p><em>在会安古镇旁的艺术精品空间“Maison TiA Art & Objects”，体验纯正的会安青河（Thanh Ha）传统陶艺彩绘。您将在舒适的二楼绿植露台，伴随着清凉的草本茶，亲手为陶器上色。活动后还可参观一楼的高档手绘丝绸围巾与本地艺术家画展。</em></p>
            </li>
            <li><strong>Từ khóa hot trên mạng xã hội</strong>: 拍照打卡 (Chụp ảnh check-in), 闺蜜出行 (Du lịch cùng bạn thân), 亲子互动 (Tương tác gia đình), 会安小众景点 (Địa điểm ngách ít người biết).</li>
        </ul>

        <h3>3. Giá bán & Vận hành</h3>
        <ul>
            <li><strong>Mức giá bán lẻ đề xuất</strong>: <strong>80 RMB / khách</strong> (~275.000đ).</li>
            <li><strong>Hoa hồng</strong>: Dao động từ <strong>15% - 22%</strong>.</li>
            <li><strong>Mẹo nhỏ</strong>: Chuẩn bị sẵn tài liệu in các bước vẽ gốm cơ bản dịch sang tiếng Trung (bằng giấy in hoặc file PDF) để hỗ trợ nhân viên khi giao tiếp với khách.</li>
        </ul>
    `,
    agoda: `
        <h2>Cẩm nang Phân phối trên Agoda & Booking.com</h2>
        <p>Agoda và Booking.com là hai kênh đặt phòng khách sạn lớn nhất tại Việt Nam. Khách du lịch sau khi đặt phòng tại Hội An thường nhận được email đề xuất hoặc tab "Things to do" trực tiếp trên app để đặt thêm các workshop/tour địa phương.</p>
        
        <h3>1. Cơ chế hoạt động của cổng Activities</h3>
        <p>Thay vì quản lý trực tiếp, Agoda và Booking.com thường tích hợp dữ liệu chéo (API integration) từ các đối tác phân phối tour lớn toàn cầu:</p>
        <ul>
            <li><strong>Musement</strong>: Cổng cung cấp tour chính cho Booking.com.</li>
            <li><strong>Klook / Viator / KKday</strong>: Các cổng phân phối chéo cho Agoda.</li>
        </ul>

        <h3>2. Chiến lược Listing tối ưu và nhanh nhất</h3>
        <p>Để xuất hiện trên tab Activities của Agoda và Booking.com nhanh nhất mà không phải làm thủ tục đăng ký trực tiếp phức tạp:</p>
        <ol>
            <li>Đăng ký thành công trên Klook và Viator trước (Đây là hai đối tác phân phối chính).</li>
            <li>Trong phần cấu hình sản phẩm trên Klook/Viator, luôn tích chọn tính năng **"Allow redistribution by partners"** (Cho phép phân phối lại bởi đối tác thứ ba).</li>
            <li>Hệ thống sẽ tự động đồng bộ hóa dịch vụ Workshop của Maison TiA lên Agoda Activities và Booking.com sau 3 - 5 ngày làm việc.</li>
        </ol>

        <h3>3. Phương án đăng ký trực tiếp trên Booking.com</h3>
        <p>Nếu muốn tự kiểm soát hoàn toàn dòng tiền và chính sách hiển thị trực tiếp trên Booking.com:</p>
        <ul>
            <li>Đăng ký qua cổng đối tác <strong>Musement Partners</strong>: <a href="https://partner.musement.com/" target="_blank">https://partner.musement.com/</a></li>
            <li>Sau khi được Musement duyệt, tour vẽ gốm sẽ hiển thị trực tiếp trên mục "Things to do" của trang chủ Booking.com khi khách hàng tìm kiếm địa điểm "Hội An".</li>
        </ul>
    `,
    google_seo: `
        <h2>Cẩm nang Tối ưu hóa Google Maps (Local SEO)</h2>
        <p>Google Maps (Google Business Profile) là kênh quan trọng nhất để thu hút tệp khách du lịch đang đi bộ hoặc di chuyển tự túc quanh phố cổ Hội An và vùng An Hội, đặc biệt là nguồn khách vãng lai đi ngang qua khu vực resort Bel Marina.</p>
        
        <h3>1. Đăng ký & Xác minh địa điểm</h3>
        <ul>
            <li><strong>Cổng quản lý</strong>: <a href="https://www.google.com/business/" target="_blank">https://www.google.com/business/</a></li>
            <li><strong>Đặt tên hiển thị chuẩn SEO</strong>: <code>Maison TiA - Art & Objects Hoi An (Gallery & Souvenirs)</code>. Chứa thương hiệu chính "Maison TiA", ngành hàng cốt lõi "Art & Objects", địa danh "Hoi An", và từ khóa tìm kiếm phổ biến "Gallery & Souvenirs".</li>
            <li><strong>Định vị chính xác</strong>: Ghim thủ công thật chính xác trên bản đồ tại số 122 Nguyễn Phúc Tần, An Hội, Hội An.</li>
        </ul>

        <h3>2. Thiết lập thông tin tối ưu tìm kiếm (SEO Checklist)</h3>
        <ul>
            <li><strong>Danh mục chính</strong>: Art gallery (Phòng trưng bày nghệ thuật).</li>
            <li><strong>Danh mục phụ</strong>: Gift shop (Cửa hàng quà lưu niệm), Tourist attraction (Điểm du lịch), Art studio (Xưởng nghệ thuật).</li>
            <li><strong>Mô tả cửa hàng (Song ngữ)</strong>:
                <p><em>Tiếng Anh: "Maison TiA is a boutique art gallery and souvenir shop located in Hoi An. We offer high-quality original paintings, premium hand-painted silk luxury scarves, and authentic Thanh Ha pottery. Join our daily ceramic painting workshop on our beautiful terrace balcony!"</em></p>
                <p><em>Tiếng Việt: "Maison TiA là không gian trưng bày nghệ thuật và quà tặng cao cấp tại Hội An. Chuyên cung cấp tranh nghệ thuật độc bản, khăn lụa tơ tằm vẽ tay và gốm truyền thống Thanh Hà. Trải nghiệm workshop vẽ gốm độc đáo hàng ngày trên ban công sân thượng tầng 2."</em></p>
            </li>
        </ul>

        <h3>3. Chiến lược thúc đẩy Review 5 sao (Động cơ Local SEO)</h3>
        <p>Google xếp hạng vị trí dựa trên số lượng và tần suất review tích cực:</p>
        <ul>
            <li><strong>Tạo mã QR Review</strong>: Tạo link rút gọn trực tiếp dẫn tới trang Review trên Google Maps của Maison TiA, in ra đặt tại quầy thu ngân.</li>
            <li><strong>Quà tặng thúc đẩy</strong>: Tặng ngay một chiếc thiệp nhỏ vẽ tay xinh xắn hoặc giảm giá trực tiếp <strong>5%</strong> hóa đơn mua sắm đồ lưu niệm cho mỗi khách hàng để lại review 5 sao kèm hình ảnh thực tế tại cửa hàng.</li>
        </ul>
    `
};

function loadDoc(evt, docKey) {
    const contentDiv = document.getElementById('docs-content');
    if (!contentDiv) return;

    const data = DOCUMENTATION_DATA[docKey];
    if (data) {
        contentDiv.innerHTML = data;
    }

    // Update active class in sidebar
    const items = document.querySelectorAll('.docs-item');
    items.forEach(item => item.classList.remove('active'));

    // If event is passed, set target as active, otherwise find the button matching docKey
    if (evt) {
        evt.currentTarget.classList.add('active');
        if (window.innerWidth <= 900) {
            contentDiv.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        const defaultBtn = document.querySelector(`.docs-item[onclick*="${docKey}"]`);
        if (defaultBtn) {
            defaultBtn.classList.add('active');
        }
    }
}

window.loadDoc = loadDoc;



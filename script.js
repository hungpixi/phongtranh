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
    const time = timeInput.value || '15:00';
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


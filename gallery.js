// Maison TiA Gallery - Upgraded Multilingual Customer Site Logic with High-Fidelity Motion Design

// // 1. Multilingual Dictionary
const translations = {
    vi: {
        doc_title: "Maison TiA - Không Gian Trưng Bày Nghệ Thuật & Workshop Hội An",
        logo_sub: "Art & Objects",
        nav_space: "Không Gian",
        nav_collection: "Bộ Sưu Tập",
        nav_workshop: "Workshop",
        nav_photospot: "Góc Check-in",
        nav_visit: "Ghé Thăm",
        btn_book_now: "Đặt Lịch Ngay",
        hero_badge: "Hội An Boutique Gallery",
        hero_title: "Maison TiA Art & Objects",
        hero_desc: "Nơi giao thoa giữa hội họa độc bản, thời trang lụa tơ tằm vẽ tay cao cấp và những trải nghiệm gốm nghệ thuật mộc mạc bên dòng sông Hoài thơ mộng.",
        hero_quick_walk: "Cách Phố Cổ 5 phút đi bộ",
        hero_quick_hotel: "Ngay cạnh Bel Marina Resort",
        hero_btn_workshop: "Đăng Ký Workshop",
        hero_btn_space: "Khám Phá Không Gian",
        hero_caption: "Mặt tiền gỗ mộc mạc của Maison TiA rực rỡ lồng đèn vàng về đêm",
        partner_strip_title: "Ưu đãi kết nối đối tác:",
        partner_strip_desc: "Nếu bạn đang ở các Khách sạn/Homestay lân cận hoặc đi xe điện Buggy, hãy hỏi lễ tân hoặc tài xế để nhận thẻ ưu đãi giảm giá 10% tại Maison TiA!",
        
        // Space Section
        space_sub: "ĐỊA ĐIỂM CỦA NGHỆ THUẬT",
        space_title: "Không Gian Maison TiA",
        space_intro: "Tọa lạc tại số 122 Nguyễn Phúc Tần, An Hội – chỉ cách khu phố cổ vài bước chân và ngay cạnh Bel Marina Resort. Maison TiA mang đến không gian tĩnh lặng, đầy chất thơ tách biệt khỏi ồn ào đô thị.",
        space_t1_title: "Trưng Bày Tranh & Khăn Lụa Tơ Tằm",
        space_t1_desc: "Tầng trệt được chiếu rọi bằng hệ thống đèn tiêu chuẩn gallery có chỉ số hoàn màu CRI >90 giúp hiển thị chân thực từng thớ lụa và độ sâu sơn mài. Tại đây cũng thiết kế góc gương lớn viền gỗ mộc để quý khách tự do ướm thử và lưu lại những bức ảnh kỷ niệm.",
        space_t2_title: "Ban Công Trải Nghiệm Lộng Gió",
        space_t2_desc: "Tầng hai sở hữu không gian mở ban công mát mẻ hướng sông Hoài, lợp mái ngói âm dương truyền thống. Nơi giàn hoa giấy hồng rực rỡ đan xen cùng đèn tre tre mây ấm cúng, mang đến cảm hứng sáng tạo tuyệt vời nhất.",
        space_coord_title: "Toạ Độ Địa Lý",
        space_coord_val: "15.877° N, 108.324° E - Đảo An Hội, Hội An",
        space_philosoph_title: "Triết Lý Không Gian",
        space_philosoph_desc: "Maison TiA được xây dựng trên sự tôn trọng vẻ đẹp bản địa mộc mạc. Sự chuyển tiếp từ cầu An Hội ồn ào qua đảo An Hội yên bình là lúc tâm hồn bạn tĩnh lặng để thưởng thức nghệ thuật thuần khiết nhất.",

        // Portfolio/Collections Section
        coll_sub: "SẢN PHẨM NỔI BẬT",
        coll_title: "Bộ Sưu Tập Nghệ Thuật",
        coll_intro: "Mỗi tác phẩm nghệ thuật, khăn lụa hay đồ quà tặng lưu niệm tại Maison TiA đều mang một câu chuyện sáng tạo độc đáo đi kèm thẻ câu chuyện thương hiệu (Story tags) song ngữ.",
        filter_all: "Tất cả",
        filter_paintings: "Hội Họa độc bản",
        filter_silk: "Lụa vẽ tay",
        filter_ceramics: "Gốm mộc Thanh Hà",
        filter_souvenirs: "Quà lưu niệm",
        coll_cat_paintings: "Hội Họa",
        coll_item1_title: "Tranh Nghệ Thuật Độc Bản",
        coll_cat_silk: "Thời Trang Cao Cấp",
        coll_item2_title: "Khăn Lụa Tơ Tằm Vẽ Tay",
        coll_cat_ceramics: "Thủ Công Mỹ Nghệ",
        coll_item3_title: "Gốm Mộc Làng Cổ Thanh Hà",
        coll_cat_souvenirs: "Quà Lưu Niệm",
        coll_item4_title: "Thiệp Vẽ Tay & Bưu Thiếp Nghệ Thuật",
        story_tag_btn: "Đọc câu chuyện tác phẩm",

        // Workshop Section
        ws_sub: "TRẢI NGHIỆM ĐỘC ĐÁO",
        ws_title: "Workshop Sáng Tạo Nghệ Thuật",
        ws_desc: "Dành cho bản thân một buổi sáng hoặc buổi chiều thư thái, ngồi bên ban công lộng gió của Maison TiA, tự tay vẽ nên một tác phẩm mang đậm bản sắc cá nhân dưới sự hướng dẫn nhiệt tình của chúng tôi.",
        ws_slots_title: "Bấm Chọn Khung Giờ Trải Nghiệm (Khuyên Dùng):",
        slot1_name: "Bình Minh Sông Hoài",
        slot1_benefit: "Thời tiết mát lành, ánh sáng tự nhiên rực rỡ lý tưởng để pha màu gốm.",
        slot2_name: "Nắng Trưa Tĩnh Lặng",
        slot2_benefit: "Không gian trong phòng mát mẻ, tiếng nhạc dịu êm để thư giãn vẽ thiệp lụa.",
        slot3_name: "Hoàng Hôn Vàng Cổ Kính",
        slot3_benefit: "Khung giờ vàng ngắm hoàng hôn tuyệt đẹp buông xuống sông Hoài ngay ban công.",
        ws_opt1_title: "1. Vẽ Màu Trên Gốm Thanh Hà",
        ws_opt1_desc: "Sử dụng phôi gốm nung mộc mạc chính gốc từ làng gốm Thanh Hà cổ kính (500 năm tuổi), kết hợp màu acrylic bền đẹp để sáng tạo ly, đĩa hoặc tượng nhỏ của riêng bạn.",
        ws_opt2_title: "2. Vẽ Thiệp Nghệ Thuật & Tranh Lụa Nhỏ",
        ws_opt2_desc: "Làm quen với chất liệu lụa tơ tằm Hội An truyền thống, học cách đi cọ, pha màu để tạo nên bưu thiếp nghệ thuật hoặc một bức tranh lụa để bàn xinh xắn.",
        ws_benefit_title: "Workshop đã bao gồm:",
        ws_benefit1: "Phôi gốm thô hoặc lụa tùy chọn chất lượng tốt",
        ws_benefit2: "Toàn bộ dụng cụ vẽ chuyên nghiệp (màu acrylic, cọ vẽ, bảng pha màu)",
        ws_benefit3: "Một ly trà thảo mộc Hội An thơm mát miễn phí",
        ws_benefit4: "Thành phẩm nghệ thuật được đóng gói xinh xắn mang về làm quà kỷ niệm",
        
        // Multi-step form keys
        book_form_title: "Đặt Lịch Workshop",
        book_step_1: "1. Chọn trải nghiệm",
        book_step_2: "2. Thời gian",
        book_step_3: "3. Liên hệ",
        form_label_name: "Họ và Tên",
        form_label_contact: "Số Điện Thoại / Zalo / WhatsApp",
        form_label_date: "Ngày Tham Gia",
        form_label_time: "Khung Giờ",
        form_label_type: "Loại Workshop",
        form_opt_pottery: "Vẽ Gốm Thanh Hà (250.000đ/người)",
        form_opt_silk: "Vẽ Thiệp Lụa (200.000đ/người)",
        form_label_guests: "Số Lượng Khách",
        form_est_price: "Tổng chi phí tạm tính:",
        form_btn_submit: "Gửi Yêu Cầu Đăng Ký",
        btn_next: "Tiếp theo",
        btn_prev: "Quay lại",
        
        // Photo Spot Section
        photo_sub: "GÓC CHỤP ẢNH ĐẸP NHẤT",
        photo_title: "Góc Check-in \"Triệu View\" tại Ban Công",
        photo_desc: "Được thiết kế cố định tại góc đẹp nhất của ban công tầng 2. Với giá vẽ gỗ mộc mạc đặt cạnh tác phẩm gốm đang vẽ dở, hậu cảnh là bức tường vàng Hội An đặc trưng và giàn hoa giấy hồng rực rủ xuống kết hợp đèn lồng mây tre. Đây là nơi lý tưởng ghi lại những bức hình lưu niệm nghệ thuật đẹp nhất của bạn.",
        photo_hashtag: "Ghé thăm và tag chúng tôi tại:",
        photo_tips_title: "Bí quyết cho bức ảnh nghệ thuật:",
        photo_tip_1: "<strong>Khung giờ vàng (16:30 - 17:30):</strong> Ánh nắng hoàng hôn xiên qua giàn hoa giấy tạo chiều sâu huyền ảo.",
        photo_tip_2: "<strong>Trang phục phù hợp:</strong> Váy lụa sáng màu (trắng, vàng tơ, xanh ngọc) giúp bạn nổi bật trên nền tường vàng.",
        photo_tip_3: "<strong>Góc tạo dáng tự nhiên:</strong> Tay cầm cọ nhẹ nhàng đặt trên phôi gốm thô, mắt hướng về sông Hoài.",

        // Visit Section
        visit_sub: "HƯỚNG DẪN GHÉ THĂM",
        visit_title: "Ghé Thăm Maison TiA",
        visit_info_addr_title: "Địa chỉ",
        visit_info_addr_detail: "122 Nguyễn Phúc Tần, An Hội, Hội An (Ngay bên cạnh Bel Marina Resort, cách trung tâm phố cổ 5 phút đi bộ).",
        visit_info_hours_title: "Giờ mở cửa",
        visit_info_hours_detail: "08:30 - 21:30 (Mở cửa tất cả các ngày trong tuần, kể cả ngày lễ).",
        visit_info_contact_title: "Liên hệ nhanh",
        guide_welcome_title: "Trạm Nghỉ Chân Miễn Phí Cho HDV",
        guide_welcome_desc: "Maison TiA luôn hân hạnh chào đón các anh chị Hướng dẫn viên du lịch ghé qua phòng tranh nghỉ chân: sử dụng nhà vệ sinh sạch sẽ, thưởng thức trà thảo mộc mát lạnh, sử dụng wifi tốc độ cao và ghế ngồi mát lạnh tầng 1 hoàn toàn miễn phí!",
        social_title: "Kênh Chat Trực Tuyến",
        map_card_title: "Maison TiA trên Google Maps",
        map_card_desc: "Dễ dàng định vị và tìm đường đi bộ từ vị trí của bạn tại Hội An.",
        map_card_btn: "Mở Bản Đồ",
        footer_copy: "© 2026 Maison TiA Art & Objects. Mọi quyền được bảo lưu.",
        footer_back_link: "Xem Báo Cáo Kinh Doanh (Chủ Đầu Tư)",
        success_modal_title: "Đăng Ký Thành Công!",
        success_modal_msg: "Cảm ơn bạn đã lựa chọn Maison TiA. Host của chúng tôi sẽ liên hệ lại với bạn qua số điện thoại hoặc email trong vòng 15 phút để xác nhận lịch đặt.",
        success_modal_btn: "Đồng ý"
    },
    en: {
        doc_title: "Maison TiA - Boutique Art Gallery & Ceramic Workshop Hoi An",
        logo_sub: "Art & Objects",
        nav_space: "Space",
        nav_collection: "Collections",
        nav_workshop: "Workshops",
        nav_photospot: "Photo Spot",
        nav_visit: "Visit Us",
        btn_book_now: "Book Now",
        hero_badge: "Hoi An Boutique Gallery",
        hero_title: "Maison TiA Art & Objects",
        hero_desc: "Where original local artwork, handcrafted luxury silk, and rustic ceramic workshops harmoniously gather by the breeze of the poetic Hoai River.",
        hero_quick_walk: "5 minutes walk from Ancient Town",
        hero_quick_hotel: "Adjacent to Bel Marina Resort",
        hero_btn_workshop: "Book Workshop",
        hero_btn_space: "Explore Gallery",
        hero_caption: "Maison TiA wooden storefront at night, shining with yellow bamboo lanterns",
        partner_strip_title: "Partner Network Discount:",
        partner_strip_desc: "Staying nearby or riding an electric buggy? Ask your hotel receptionist or buggy driver for our partner voucher to get a 10% discount at Maison TiA!",
        
        // Space Section
        space_sub: "WHERE ART GATHERS",
        space_title: "The Maison TiA Space",
        space_intro: "Located at 122 Nguyen Phuc Tan, An Hoi – just a short walking distance from the ancient town and right adjacent to Bel Marina Resort. Maison TiA offers a peaceful, scenic escape from the urban hustle.",
        space_t1_title: "Art Gallery & Silk Showroom",
        space_t1_desc: "The ground floor displays a premium boutique showroom with professional spotlighting (CRI >90) to reveal the absolute color depth of natural silk and lacquer paintings. An artistic large wooden-framed mirror is designed here for guests to try on silk wraps and take mirror selfies.",
        space_t2_title: "Terrace Balcony Workshop Space",
        space_t2_desc: "The second floor features an airy outdoor balcony terrace catching the cool breeze from Hoai river under traditional yin-yang roofs. Surrounded by blooming pink paper flowers and symbolic yellow walls, it serves as an ideal sanctuary for creative workshops.",
        space_coord_title: "Geographical Coordinates",
        space_coord_val: "15.877° N, 108.324° E - An Hoi Island, Hoi An",
        space_philosoph_title: "Space Philosophy",
        space_philosoph_desc: "Maison TiA is built on respecting native, minimalist beauty. Crossing the An Hoi bridge into this quiet sanctuary allows your mind to slow down and absorb art in its purest form.",

        // Portfolio/Collections Section
        coll_sub: "FEATURED HIGHLIGHTS",
        coll_title: "Signature Collections",
        coll_intro: "Every piece of artwork, silk, and souvenir in Maison TiA tells a story, carefully handcrafted by local artisans and dedicated artists, tagged with bilingual story cards.",
        filter_all: "All",
        filter_paintings: "Original Paintings",
        filter_silk: "Silk Scarves",
        filter_ceramics: "Thanh Ha Ceramics",
        filter_souvenirs: "Souvenirs",
        coll_cat_paintings: "Original Paintings",
        coll_item1_title: "Exclusive Fine Art & Paintings",
        coll_cat_silk: "Luxury Silk Wear",
        coll_item2_title: "Hand-Painted Natural Silk Scarves",
        coll_cat_ceramics: "Artisan Craft",
        coll_item3_title: "Traditional Thanh Ha Clay Pottery",
        coll_cat_souvenirs: "Boutique Gifts",
        coll_item4_title: "Handmade Silk Cards & Art Postcards",
        story_tag_btn: "Read Artwork Story",

        // Workshop Section
        ws_sub: "CREATIVE EXPERIENCE",
        ws_title: "Artistic Craft Workshops",
        ws_desc: "Indulge in a relaxing morning or afternoon on our windy balcony. Paint and create your own artwork with the guidance of our hosts while tasting traditional cold herbal tea.",
        ws_slots_title: "Select Your Time Slot (Recommended):",
        slot1_name: "Hoai River Dawn",
        slot1_benefit: "Cool morning river breeze and natural daylight, ideal for painting and mixing colors.",
        slot2_name: "Quiet Midday Retreat",
        slot2_benefit: "Quiet air-conditioned gallery room, soft acoustic music to paint silk cards peacefully.",
        slot3_name: "Ancient Town Golden Sunset",
        slot3_benefit: "Enjoy the best sunset view of Hoi An ancient town directly from the terrace.",
        ws_opt1_title: "1. Traditional Pottery Ceramic Painting",
        ws_opt1_desc: "Select a raw fired clay cup, bowl, or cute mascot directly from the 500-year-old Thanh Ha pottery village and express your art style using premium acrylic paints.",
        ws_opt2_title: "2. Handmade Silk & Art Card Painting",
        ws_opt2_desc: "Work with traditional Hoi An silk fragments, paint exquisite cards, or design a mini desk silk painting with classic brush strokes.",
        ws_benefit_title: "Workshop includes:",
        ws_benefit1: "High-quality pottery piece or art paper/silk of choice",
        ws_benefit2: "All professional art supplies (acrylic colors, brushes, mixing palettes)",
        ws_benefit3: "One complimentary local cold herbal tea",
        ws_benefit4: "Your final artwork nicely packed as a unique souvenir to take home",
        
        // Multi-step form keys
        book_form_title: "Book Your Experience",
        book_step_1: "1. Select Experience",
        book_step_2: "2. Schedule",
        book_step_3: "3. Contact",
        form_label_name: "Full Name",
        form_label_contact: "Phone / Zalo / WhatsApp Number",
        form_label_date: "Participation Date",
        form_label_time: "Time Slot",
        form_label_type: "Workshop Type",
        form_opt_pottery: "Thanh Ha Ceramic Painting (250,000 VND/pax)",
        form_opt_silk: "Silk Card Painting (200,000 VND/pax)",
        form_label_guests: "Number of Guests",
        form_est_price: "Estimated Total Cost:",
        form_btn_submit: "Send Booking Request",
        btn_next: "Next",
        btn_prev: "Back",

        // Photo Spot Section
        photo_sub: "BEST PHOTO SPOT",
        photo_title: "The 2nd-Floor \"Million-View\" Balcony Photo Spot",
        photo_desc: "Set up permanently on the prime corner of our second-floor balcony terrace. Features a rustic wooden easel with an unfinished painting, set against Hoi An's symbolic yellow walls, blooming pink bougainvilleas, and traditional lanterns. The perfect frame to preserve your travel memory in Hoi An.",
        photo_hashtag: "Visit and tag us on social media:",
        photo_tips_title: "Secrets for an artistic capture:",
        photo_tip_1: "<strong>Golden Hour (16:30 - 17:30):</strong> The sunset light breaks through the bougainvillea flowers, casting magical warm shadows.",
        photo_tip_2: "<strong>Dress code:</strong> Wear bright, flowing silk outfits (white, silk yellow, light turquoise) to pop nicely against the yellow wall.",
        photo_tip_3: "<strong>Natural Pose:</strong> Sit naturally on the wooden chair, holding the brush over the pottery piece while looking towards the river.",

        // Visit Section
        visit_sub: "VISITING GUIDELINES",
        visit_title: "Plan Your Visit",
        visit_info_addr_title: "Address",
        visit_info_addr_detail: "122 Nguyen Phuc Tan, An Hoi, Hoi An (Right next to Bel Marina Resort, 5 minutes walk from the Ancient Town).",
        visit_info_hours_title: "Opening Hours",
        visit_info_hours_detail: "08:30 - 21:30 (Open daily, including public holidays).",
        visit_info_contact_title: "Direct Contacts",
        guide_welcome_title: "Free Rest Stop for Tour Guides",
        guide_welcome_desc: "Maison TiA warmly welcomes local tour guides to drop by for a break: enjoy our clean toilet, complimentary cold herbal tea, high-speed Wi-Fi, and cool air-conditioned seating on the 1st floor entirely free of charge!",
        social_title: "Direct Online Chat",
        map_card_title: "Maison TiA on Google Maps",
        map_card_desc: "Easily navigate and find the shortest walking path from your current spot in Hoi An.",
        map_card_btn: "Open Map",
        footer_copy: "© 2026 Maison TiA Art & Objects. All rights reserved.",
        footer_back_link: "View Business Proposal Report (For Investors)",
        success_modal_title: "Booking Submitted!",
        success_modal_msg: "Thank you for choosing Maison TiA. Our hosts will reach back to you via WhatsApp/Email within 15 minutes to confirm your reservation details.",
        success_modal_btn: "Got it"
    },
    zh: {
        doc_title: "Maison TiA - 会安精品艺术画廊与陶艺工作坊",
        logo_sub: "Art & Objects",
        nav_space: "空间展示",
        nav_collection: "艺术珍藏",
        nav_workshop: "创意手工",
        nav_photospot: "打卡推荐",
        nav_visit: "参观指南",
        btn_book_now: "立即预订",
        hero_badge: "会安精品画廊",
        hero_title: "Maison TiA Art & Objects",
        hero_desc: "在诗意的秋盆河畔，独家原创画作、高端手工手绘蚕丝围巾与质朴传统陶艺在此优雅融合，尽显会安本土艺术魅力。",
        hero_quick_walk: "距离古镇步行 5 分钟",
        hero_quick_hotel: "紧邻 Bel Marina 度假村",
        hero_btn_workshop: "报名工作坊",
        hero_btn_space: "探索空间",
        hero_caption: "夜色下挂满黄色竹编灯笼 of Maison TiA 精致木质店面",
        partner_strip_title: "合作伙伴特别优惠：",
        partner_strip_desc: "如果您正入住周边的酒店/民宿或乘坐电动观光车，请向门童/前台或司机索取折价券，即可在 Maison TiA 享受 9 折优惠！",
        
        // Space Section
        space_sub: "艺术栖息地",
        space_title: "Maison TiA 艺术空间",
        space_intro: "坐落于安会区阮福秦路122号，紧邻会安 Bel Marina 度假村，距离古镇中心仅几步之遥。Maison TiA 为您在喧嚣的景区中提供一片静谧、诗意的心灵净土。",
        space_t1_title: "画廊与手绘丝绸展厅",
        space_t1_desc: "一楼展厅配备显色指数 CRI >90 的专业画廊照明系统，真实还原真丝与大漆绘画的艺术质感。我们特意在此设计了木质大穿衣镜，方便顾客挑选丝巾比试并留下自拍。",
        space_t2_title: "绿植露台体验区",
        space_t2_desc: "二楼阳台层风拂面，建有传统的阴阳瓦屋顶，四周包围着盛开的粉色三角梅和标志性的会安黄色外墙，古朴灯笼点缀其间，是进行创意手绘体验的绝佳场所。",
        space_coord_title: "地理坐标",
        space_coord_val: "北纬 15.877°, 东经 108.324° - 越南会安安会岛",
        space_philosoph_title: "空间哲学",
        space_philosoph_desc: "Maison TiA 始于对本土朴实之美的致敬。从喧嚣的安会桥走来，步入这片宁静的避风港，让心灵慢下来，去感受艺术最本真的力量。",

        // Portfolio/Collections Section
        coll_sub: "展品焦点",
        coll_title: "艺术精品推荐",
        coll_intro: "Maison TiA 的每一件展品及纪念品都拥有其独特的品牌故事，由当地手艺人和合作艺术家手工精制，并附带双语品牌故事卡。",
        filter_all: "全部",
        filter_paintings: "原创油画",
        filter_silk: "真丝围巾",
        filter_ceramics: "青河粗陶",
        filter_souvenirs: "伴手礼",
        coll_cat_paintings: "原创油画",
        coll_item1_title: "独家馆藏艺术油画",
        coll_cat_silk: "高端丝绸",
        coll_item2_title: "纯手工手绘天然蚕丝围巾",
        coll_cat_ceramics: "传统手艺",
        coll_item3_title: "青河古村传统红土手工陶器",
        coll_cat_souvenirs: "精美伴手礼",
        coll_item4_title: "手绘丝绸贺卡与艺术明信片",
        story_tag_btn: "阅读作品故事",

        // Workshop Section
        ws_sub: "独特艺术体验",
        ws_title: "创意艺术手工坊",
        ws_desc: "在微风拂面的二楼露台度过一个惬意的上午或下午。在 host 的专业指导下，一边品尝当地草本凉茶，一边创作专属您的会安艺术纪念品。",
        ws_slots_title: "请选择体验时段（推荐）：",
        slot1_name: "秋盆河畔旭日",
        slot1_benefit: "清晨天气清爽，自然光线极佳，是陶艺创作与调色的黄金光线。",
        slot2_name: "午后静谧创作",
        slot2_benefit: "安静舒适的空调画廊，伴以轻柔音乐，悠闲创作丝绸贺卡。",
        slot3_name: "古镇金色黄昏",
        slot3_benefit: "在阳台直接欣赏会安古镇绝美日落的黄金时段，拍照非常容易出片。",
        ws_opt1_title: "1. 传统青河陶器手绘",
        ws_opt1_desc: "选用拥有500年历史的青河陶艺古村生产的纯手工烧制粗陶杯、盘或可爱泥偶，使用高档丙烯颜料绘制专属作品。",
        ws_opt2_title: "2. 手做蚕丝贺卡与迷你丝绸画",
        ws_opt2_desc: "体验传统的会安真丝材质，学习传统的执笔与配色技法，创作一张雅致的丝绸贺卡或台式迷你丝绸画。",
        ws_benefit_title: "费用已包含：",
        ws_benefit1: "精选粗陶坯或会安蚕丝等手作材料",
        ws_benefit2: "全部专业绘画工具（环保丙烯颜料、各种画笔、调色盘等）",
        ws_benefit3: "免费提供一杯当地草本凉茶",
        ws_benefit4: "您的最终作品将被精美包装，作为独特的会安旅行纪念品带回家",
        
        // Multi-step form keys
        book_form_title: "预订您的体验",
        book_step_1: "1. 选择体验",
        book_step_2: "2. 选择时间",
        book_step_3: "3. 联系方式",
        form_label_name: "您的姓名",
        form_label_contact: "联系电话 / Zalo / WhatsApp",
        form_label_date: "参与日期",
        form_label_time: "体验时段",
        form_label_type: "手工坊类别",
        form_opt_pottery: "传统青河陶器手绘 (250,000 越南盾/人)",
        form_opt_silk: "蚕丝手做贺卡手绘 (200,000 越南盾/人)",
        form_label_guests: "参与人数",
        form_est_price: "预计总费用：",
        form_btn_submit: "发送预订请求",
        btn_next: "下一步",
        btn_prev: "上一步",

        // Photo Spot Section
        photo_sub: "最佳摄影角",
        photo_title: "二楼“百万级”景观阳台打卡位",
        photo_desc: "专为拍照打卡设计，固定在二楼阳台采光最好的角落。古朴的木质画架配上尚未完成的陶艺作品，背景是经典的会安黄墙、娇艳的粉色三角梅和复古竹编灯笼，为您完美定格在会安最文艺的瞬间。",
        photo_hashtag: "欢迎关注并在社交平台标注我们：",
        photo_tips_title: "唯美打卡秘籍：",
        photo_tip_1: "<strong>黄昏黄金期 (16:30 - 17:30):</strong> 夕阳余晖穿透三角梅，洒下唯美的光影斑驳。",
        photo_tip_2: "<strong>服装搭配:</strong> 建议穿浅色飘逸真丝衣物（白色、浅黄、淡绿），在黄色墙壁背景前格外显眼。",
        photo_tip_3: "<strong>自然定格:</strong> 手持画笔轻触陶器，目光投向秋盆河，定格惬意创作的侧面照。",

        // Visit Section
        visit_sub: "参观指南",
        visit_title: "如何找到我们",
        visit_info_addr_title: "详细地址",
        visit_info_addr_detail: "会安安会区阮福秦街122号 (Bel Marina度假村旁，距离会安古镇步行5分钟)。",
        visit_info_hours_title: "营业时间",
        visit_info_hours_detail: "每日 08:30 - 21:30 (周末及节假日照常营业)。",
        visit_info_contact_title: "直接联系",
        guide_welcome_title: "导游免费专属休息站",
        guide_welcome_desc: "Maison TiA 贴心为各位辛苦带团的导游朋友提供免费歇脚处：免费使用干净卫生的洗手间、免费享用秘制草本凉茶、免费接入高速无线网络并在一楼配备凉爽空调休息座椅！",
        social_title: "在线即时沟通",
        map_card_title: "谷歌地图导航",
        map_card_desc: "轻松获取您在会安当前位置到画廊的最短步行路线图。",
        map_card_btn: "开启地图",
        footer_copy: "© 2026 Maison TiA Art & Objects. 保留所有权利。",
        footer_back_link: "查看商业规划报告 (投资人专属)",
        success_modal_title: "预订请求已提交！",
        success_modal_msg: "感谢您选择 Maison TiA。我们的工作组将在15分钟内通过留下的联系方式与您确认预订详情。",
        success_modal_btn: "好的"
    },
    ko: {
        doc_title: "Maison TiA - 호이안 부티크 아트 갤러리 및 도자기 워크숍",
        logo_sub: "Art & Objects",
        nav_space: "갤러리 소개",
        nav_collection: "컬렉션",
        nav_workshop: "워크숍",
        nav_photospot: "포토존",
        nav_visit: "방문 안내",
        btn_book_now: "지금 예약하기",
        hero_badge: "호이안 부티크 갤러리",
        hero_title: "Maison TiA Art & Objects",
        hero_desc: "아름다운 호아이 강변에서 만나는 독창적인 회화 미술, 프리미엄 핸드 페인팅 실크 스카프, 그리고 소박한 전통 도자기 페인팅 워크숍의 향연.",
        hero_quick_walk: "올드타운에서 도보 5분 거리",
        hero_quick_hotel: "벨 마리나 리조트 바로 옆",
        hero_btn_workshop: "워크숍 예약",
        hero_btn_space: "공간 둘러보기",
        hero_caption: "밤에 노란 대나무 랜턴이 켜져 있는 Maison TiA의 고즈넉한 목조 storefront",
        partner_strip_title: "제휴 파트너 특별 할인:",
        partner_strip_desc: "근처 호텔/홈스테이에 묵으시거나 전동 버기를 이용 중이신가요? 리셉션이나 기사님께 제휴 우대권을 문의하시면 Maison TiA에서 10% 할인을 받으실 수 있습니다!",
        
        // Space Section
        space_sub: "예술이 머무는 곳",
        space_title: "Maison TiA 갤러리 공간",
        space_intro: "호이안 안호이 지구 응우옌푹탄 122번지에 위치해 있습니다. 호이안 올드타운에서 도보로 단 5분 거리이며, 벨 마리나 리조트와 바로 인접해 있어 한적하고 서정적인 휴식을 선사합니다.",
        space_t1_title: "아트 갤러리 & 실크 쇼룸",
        space_t1_desc: "1층 쇼룸은 칠화 및 진실크의 뛰어난 깊이를 한층 돋보이게 하는 연색지수 CRI 90 이상의 정밀 갤러리 조명 시스템을 완비했습니다. 예술적인 나무 질감 프레임의 대형 전신 거울이 비치되어 스카프를 피팅하고 기념사진을 남기실 수 있습니다.",
        space_t2_title: "전망 좋은 2층 발코니 테라스",
        space_t2_desc: "2층은 전통 음양 기와지붕 아래 투본강의 시원한 강바람이 불어오는 넓은 야외 발코니 테라스입니다. 호이안 특유의 노란 벽과 붉은 부겐빌레아 꽃, 아늑한 대나무 전등으로 꾸며져 창작 워크숍을 즐기기에 완벽합니다.",
        space_coord_title: "지리적 좌표",
        space_coord_val: "15.877° N, 108.324° E - 안호이 섬, 호이안",
        space_philosoph_title: "공간 철학",
        space_philosoph_desc: "Maison TiA는 현지의 소박한 아름다움을 존중하는 것을 바탕으로 만들어졌습니다. 번잡한 안호이 다리를 건너 이 고요한 안식처로 들어서면 마음이 차분해지며 순수한 형태의 예술을 느끼실 수 있습니다.",

        // Portfolio/Collections Section
        coll_sub: "대표 컬렉션",
        coll_title: "시그니처 아트 작품",
        coll_intro: "Maison TiA의 모든 예술품과 기념품은 현지 장인과 화가들의 손길을 거쳐 저마다의 스토리를 담아 수작업으로 완성되었으며, 바이링구얼 스토리 태그가 동봉됩니다.",
        filter_all: "전체",
        filter_paintings: "오리지널 회화",
        filter_silk: "실크 스카프",
        filter_ceramics: "청하 도자기",
        filter_souvenirs: "기념품",
        coll_cat_paintings: "오리지널 회화",
        coll_item1_title: "현지 화가들의 예술 회화 작품",
        coll_cat_silk: "럭셔리 실크 웨어",
        coll_item2_title: "핸드 페인팅 천연 실크 스카프",
        coll_cat_ceramics: "전통 수공예품",
        coll_item3_title: "청하 도자기 마을의 옹기 도자기",
        coll_cat_souvenirs: "아트 기념품",
        coll_item4_title: "수제 실크 카드 및 일러스트 엽서",
        story_tag_btn: "작품 스토리 읽기",

        // Workshop Section
        ws_sub: "특별한 문화 체험",
        ws_title: "예술 창작 워크숍",
        ws_desc: "시원한 발코니 테라스에 앉아 여유로운 반나절을 보내보세요. 호스트의 친절한 안내에 따라 시원한 허브 차를 마시며 나만의 호이안 기념품을 직접 만들어 보는 시간입니다.",
        ws_slots_title: "워크숍 시간대 선택 (추천):",
        slot1_name: "시원한 아침 시간대",
        slot1_benefit: "선선한 강바람과 최적의 자연광으로 도자기 컬러 조색에 가장 좋습니다.",
        slot2_name: "한여름 낮 피서 시간대",
        slot2_benefit: "한낮의 더위를 피해 시원하고 고요한 갤러리 실내에서 힐링 체험을 즐깁니다.",
        slot3_name: "올드타운 노을 시간대",
        slot3_benefit: "투본강의 낭만적인 석양을 바라보며 인생샷을 남기기 가장 좋은 황금 시간대.",
        ws_opt1_title: "1. 청하 전통 도자기 페인팅",
        ws_opt1_desc: "500년 전통의 청하 도자기 마을에서 구워낸 천연 흙 컵이나 접시, 점토 인형 위에 고품질 아크릴 물감으로 나만의 개성을 채워 넣어 작품을 완성합니다.",
        ws_opt2_title: "2. 수제 실크 카드 & 미니 실크화 그리기",
        ws_opt2_desc: "전통 호이안 실크 소재를 만져보며, 붓 터치 기법과 조색 방법을 배워 고급 미니 실크화 또는 엽서를 직접 제작해 봅니다.",
        ws_benefit_title: "워크숍 포함 사항:",
        ws_benefit1: "페인팅용 고급 도자기 기물 또는 진실크 카드지 택 1",
        ws_benefit2: "모든 전문 미술 도구 제공 (아크릴 물감, 붓, 팔레트 등)",
        ws_benefit3: "호이안 전통 웰컴 아이스 허브차 무료 제공",
        ws_benefit4: "직접 완성한 작품은 선물용 예쁜 패키지에 포장해 드립니다",
        
        // Multi-step form keys
        book_form_title: "워크숍 예약하기",
        book_form_subtitle: "원하시는 날짜, 시간, 참가 인원을 선택해 주세요.",
        book_step_1: "1. 체험 선택",
        book_step_2: "2. 일정 선택",
        book_step_3: "3. 연락처",
        form_label_name: "예약자 성함",
        form_label_contact: "연락처 (WhatsApp/카카오톡/이메일)",
        form_label_date: "예약 날짜",
        form_label_time: "예약 시간대",
        form_label_type: "워크숍 종류",
        form_opt_pottery: "도자기 페인팅 (250,000 VND / 1인)",
        form_opt_silk: "실크 카드 만들기 (200,000 VND / 1인)",
        form_label_guests: "예약 인원",
        form_est_price: "예상 총 결제 금액:",
        form_btn_submit: "예약 신청하기",
        btn_next: "다음",
        btn_prev: "이전",

        // Photo Spot Section
        photo_sub: "최고의 포토 스팟",
        photo_title: "발코니의 \"인생샷\" 핫플레이스 포토존",
        photo_desc: "2층 발코니 테라스에서 가장 아름다운 코너에 포토존을 고정 배치했습니다. 미완성 도자기 작품이 올려진 소박한 나무 이젤, 그 뒤로 펼쳐지는 호이안의 상징적인 노란 벽과 화사한 분홍색 부겐빌레아 꽃, 그리고 은은한 전통 대나무 랜턴이 어우러져 예술적인 추억을 선사합니다.",
        photo_hashtag: "방문 후 소셜 미디어에 태그해 주세요:",
        photo_tips_title: "인생 샷을 찍는 팁:",
        photo_tip_1: "<strong>골든 아워 (16:30 - 17:30):</strong> 붉은 노을빛이 부겐빌레아 꽃잎 사이로 쏟아져 들어와 낭만적인 사진을 완성해 줍니다.",
        photo_tip_2: "<strong>추천 드레스 코드:</strong> 노란색 흙벽과 대비되는 밝은 색상의 실크 의상(화이트, 실크 옐로우, 터쿼이즈 블루)을 권장합니다.",
        photo_tip_3: "<strong>자연스러운 포즈:</strong> 시선을 투본강 쪽으로 향하며, 도자기 물감 붓을 쥐고 가볍게 칠하는 실루엣 샷을 추천합니다.",

        // Visit Section
        visit_sub: "찾아오시는 길",
        visit_title: "갤러리 방문 안내",
        visit_info_addr_title: "주소",
        visit_info_addr_detail: "122 Nguyen Phuc Tan, An Hoi, Hoi An (벨 마리나 리조트 바로 옆, 호이안 올드타운에서 도보 5분).",
        visit_info_hours_title: "운영 시간",
        visit_info_hours_detail: "매일 08:30 - 21:30 (주말 및 공휴일 정상 운영).",
        visit_info_contact_title: "실시간 연락처",
        guide_welcome_title: "가이드 무료 쉼터 안내",
        guide_welcome_desc: "Maison TiA는 가이드분들을 위해 상시 무료 쉼터를 개방하고 있습니다. 깨끗한 화장실 이용, 시원한 웰컴 허브차 시음, 고속 무료 와이파이 제공 및 1층 에어컨 시트 휴식공간을 무료로 편하게 이용해 보세요!",
        social_title: "실시간 온라인 채팅",
        map_card_title: "구글맵 길찾기",
        map_card_desc: "호이안 내 현재 위치에서 갤러리까지 찾아오시는 가장 빠른 도보 경로를 확인해 보세요.",
        map_card_btn: "지도 열기",
        footer_copy: "© 2026 Maison TiA Art & Objects. All rights reserved.",
        footer_back_link: "사업 기획 제안서 보기 (투자자 전용)",
        success_modal_title: "예약 신청 완료!",
        success_modal_msg: "Maison TiA를 선택해 주셔서 대단히 감사합니다. 확인 즉시 기재하신 이메일 혹은 카카오톡/WhatsApp으로 연락해 예약을 최종 확정해 드리겠습니다 (15분 이내).",
        success_modal_btn: "확인"
    }
};

// 2. Portfolio Items Data for Lightbox Showcase
const portfolioDetails = {
    vi: [
        {
            title: "Tranh Nghệ Thuật Độc Bản",
            cat: "Hội Họa",
            desc: "Maison TiA trưng bày các bức tranh sơn dầu, sơn mài độc bản khắc họa đời sống, phong cảnh làng quê và phố cổ Hội An đầy chiều sâu của các họa sĩ địa phương nổi bật. Hỗ trợ đóng gói ống nhựa/hộp chống thấm chuyên nghiệp để xách tay máy bay, hoặc đóng thùng gỗ gửi chuyển phát quốc tế DHL/FedEx bảo hiểm trọn gói."
        },
        {
            title: "Khăn Lụa Tơ Tằm Vẽ Tay",
            cat: "Thời Trang Cao Cấp",
            desc: "Dòng khăn lụa tơ tằm thiên nhiên cao cấp được thiết kế độc quyền tại Maison TiA. Từng chi tiết, họa tiết trên lụa đều được vẽ tay tỉ mỉ bằng màu chuyên dụng bền bỉ, mang lại vẻ sang trọng, tinh tế độc bản cho người sở hữu."
        },
        {
            title: "Gốm Mộc Làng Cổ Thanh Hà",
            cat: "Thủ Công Mỹ Nghệ",
            desc: "Những món đồ gốm nung mộc mạc lấy trực tiếp từ Làng gốm Thanh Hà cổ kính có tuổi đời hơn 500 năm tại Hội An. Từ chén, dĩa đến các tượng đất nung nhỏ xinh xắn được tạo tác hoàn toàn bằng đôi tay nghệ nhân và đất sét sông Thu Bồn trù phú."
        },
        {
            title: "Thiệp Vẽ Tay & Bưu Thiếp Nghệ Thuật",
            cat: "Quà Lưu Niệm",
            desc: "Những tấm thiệp và bưu thiếp nghệ thuật vẽ tay trên nền giấy mỹ thuật cao cấp hoặc lụa mỏng. Đây là món quà lưu niệm Hội An nhỏ gọn, tinh tế, đong đầy cảm xúc nghệ thuật để bạn gửi tặng người thân yêu."
        }
    ],
    en: [
        {
            title: "Exclusive Fine Art Paintings",
            cat: "Original Paintings",
            desc: "Maison TiA proudly showcases original oil and lacquer paintings depicting the deep local life, countrysides, and ancient landscapes of Hoi An by prominent local artists. We provide specialized waterproof tubes/cases for flight hand-carry, or secure wooden crating with DHL/FedEx insured worldwide door-to-door shipping."
        },
        {
            title: "Hand-Painted Natural Silk Scarves",
            cat: "Luxury Silk Wear",
            desc: "A collection of premium natural mulberry silk scarves, exclusively designed at Maison TiA. Each detail and motif on the silk is carefully painted by hand using permanent textile dyes, ensuring a unique and elegant look."
        },
        {
            title: "Traditional Thanh Ha Pottery",
            cat: "Artisan Craft",
            desc: "Rustic terracotta items directly sourced from the historic, 500-year-old Thanh Ha Pottery Village. Tablewares, vase pieces, and adorable figurines handcrafted with love by local artisans using organic Thu Bon river clay."
        },
        {
            title: "Handmade Silk Cards & Art Postcards",
            cat: "Boutique Gifts",
            desc: "Exquisite greeting cards and art postcards individually painted by hand on luxury archival paper or delicate silk. A compact and soulful Hoi An keepsake to mail or present to your loved ones."
        }
    ],
    zh: [
        {
            title: "馆藏艺术油画",
            cat: "原创油画",
            desc: "Maison TiA 展出本地杰出艺术家创作的原创油画与漆画，真实还原了会安古镇深厚的市井生活与乡村风光。提供专业防水防潮筒装便于携带登机，或提供免熏蒸木箱包装及 DHL/FedEx 全球保价直邮服务。"
        },
        {
            title: "手绘天然蚕丝围巾",
            cat: "高端丝绸",
            desc: "由 Maison TiA 独家设计的高档天然桑蚕丝围巾系列。面料上的每一朵花纹和细节都由画师使用耐水洗环保颜料手工绘制，每一条 đều 为您增添典雅气质。"
        },
        {
            title: "青河传统红土手工陶器",
            cat: "传统手艺",
            desc: "直接从拥有500年历史的会安青河陶艺古村精选而来的粗陶艺术品。从日常茶具、陶盘到生动的陶塑摆件，均由当地手艺人采用肥沃的秋盆河天然粘土手工捏制而成。"
        },
        {
            title: "手绘真丝贺卡与艺术明信片",
            cat: "精美伴手礼",
            desc: "在进口艺术特种纸或轻薄蚕丝手工绘制的精美艺术贺卡。是带回家的会安纪念礼品首选，小巧雅致，满载旅行温度。"
        }
    ],
    ko: [
        {
            title: "현지 화가들의 예술 회화 작품",
            cat: "오리지널 회화",
            desc: "Maison TiA는 현지의 저명한 예술가들이 유화와 칠화 기법으로 잔잔하게 풀어낸 호이안 올드타운의 풍경과 삶의 모습을 선보입니다. 항공 기내 반입용 방수 원통 튜브 케이스 포장을 제공하며, DHL/FedEx 전 세계 보험 안심 직배송 서비스도 지원합니다."
        },
        {
            title: "핸드 페인팅 천연 실크 스카프",
            cat: "럭셔리 실크 웨어",
            desc: "Maison TiA에서만 만나볼 수 있는 천연 누에고치 실크 스카프 컬렉션입니다. 특수 염료를 사용하여 장인이 직접 수작업으로 그린 정교한 플로럴 패턴이 스카프마다 고유한 기품을 불어넣어 줍니다."
        },
        {
            title: "청하 도자기 마을의 옹기 도자기",
            cat: "전통 수공예품",
            desc: "호이안에서 500년 넘게 보존되어 온 역사 깊은 청하 도자기 마을에서 직접 공수한 투박하면서도 따뜻한 옹기 도자기입니다. 투본강의 비옥한 점토를 사용해 장인이 하나하나 손수 빚어 만들었습니다."
        },
        {
            title: "수제 실크 카드 및 일러스트 엽서",
            cat: "아트 기념품",
            desc: "고급 판화지 또는 은은한 실크천 위에 섬세한 붓질로 그린 한정판 핸드메이드 엽서입니다. 호이안 여행의 낭만을 가득 담아 고마운 이들에게 선물하기 좋은 특별한 기념품입니다."
        }
    ]
};

// 3. Language Selection & Rendering Logic
let currentLang = localStorage.getItem('maison_tia_lang') || 'vi';

function initLanguage() {
    // Set active button
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        
        btn.addEventListener('click', (e) => {
            currentLang = e.target.getAttribute('data-lang');
            localStorage.setItem('maison_tia_lang', currentLang);
            updatePageLanguage();
            
            // Toggle active class
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    updatePageLanguage();
}

function updatePageLanguage() {
    // Translate static elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });

    // Update estimated booking pricing
    updateEstimatedPrice(false); // Update static text without animation trigger
}

// 4. Booking Workshop Logic & Time Slots Interaction
const prices = {
    pottery: 250000,
    silk: 200000
};
let previousTotalPrice = 250000;

function initTimeSlots() {
    const slotCards = document.querySelectorAll('.slot-card');
    const timeSelect = document.getElementById('booking-time');

    if (!slotCards || !timeSelect) return;

    // Link slot card click to form select dropdown
    slotCards.forEach(card => {
        card.addEventListener('click', () => {
            // Update card styling
            slotCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            // Update form dropdown value
            const slotVal = card.getAttribute('data-slot');
            timeSelect.value = slotVal;
        });
    });

    // Link form select dropdown changes back to slot cards
    timeSelect.addEventListener('change', (e) => {
        const selectedVal = e.target.value;
        slotCards.forEach(card => {
            if (card.getAttribute('data-slot') === selectedVal) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    });
}

// requestAnimationFrame rolling number animation
function animateNumberValue(element, start, end, duration, lang) {
    if (start === end) {
        setFormattedPrice(element, end, lang);
        return;
    }
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Easing function - easeOutQuad
        const easeProgress = progress * (2 - progress);
        const currentVal = Math.floor(easeProgress * (end - start) + start);
        
        setFormattedPrice(element, currentVal, lang);
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            setFormattedPrice(element, end, lang);
        }
    };
    window.requestAnimationFrame(step);
}

function setFormattedPrice(element, value, lang) {
    if (lang === 'vi') {
        element.textContent = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value).replace('₫', 'đ');
    } else if (lang === 'en') {
        element.textContent = `${new Intl.NumberFormat('en-US').format(value)} VND (~$${(value / 25000).toFixed(0)} USD)`;
    } else if (lang === 'zh') {
        element.textContent = `${new Intl.NumberFormat('en-US').format(value)} VND (~${(value / 3500).toFixed(0)} RMB)`;
    } else if (lang === 'ko') {
        element.textContent = `${new Intl.NumberFormat('en-US').format(value)} VND (~${(value / 18).toFixed(0)} KRW)`;
    }
}

function updateEstimatedPrice(animate = true) {
    const typeSelect = document.getElementById('booking-type');
    const guestsInput = document.getElementById('booking-guests');
    const priceDisplay = document.getElementById('estimated-price');

    if (!typeSelect || !guestsInput || !priceDisplay) return;

    const type = typeSelect.value;
    const guests = parseInt(guestsInput.value) || 1;
    const unitPrice = prices[type] || 250000;
    const currentTotal = unitPrice * guests;

    if (animate) {
        animateNumberValue(priceDisplay, previousTotalPrice, currentTotal, 450, currentLang);
    } else {
        setFormattedPrice(priceDisplay, currentTotal, currentLang);
    }
    
    previousTotalPrice = currentTotal;
}

// Form Submission Simulation
function handleBookingSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('booking-name').value;
    const contact = document.getElementById('booking-contact').value;
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    const type = document.getElementById('booking-type').value;
    const guests = document.getElementById('booking-guests').value;

    // Format types
    const typeText = type === 'pottery' ? translations[currentLang].form_opt_pottery.split(' (')[0] : translations[currentLang].form_opt_silk.split(' (')[0];
    
    // Format dynamic values
    const estPriceText = document.getElementById('estimated-price').textContent;
    const successMsg = document.getElementById('success-modal-msg');
    
    if (successMsg) {
        if (currentLang === 'vi') {
            successMsg.innerHTML = `Cảm ơn <strong>${name}</strong> đã đăng ký workshop tại Maison TiA!<br><br>` +
                                 `• <strong>Trải nghiệm</strong>: ${typeText}<br>` +
                                 `• <strong>Thời gian</strong>: ${date} lúc ${time}<br>` +
                                 `• <strong>Số khách</strong>: ${guests} người<br>` +
                                 `• <strong>Tổng tiền tạm tính</strong>: ${estPriceText}<br><br>` +
                                 `Chúng tôi đã nhận được thông tin và sẽ gửi tin nhắn xác nhận qua SĐT/Email <strong>${contact}</strong> trong vòng 15 phút. Hẹn gặp lại bạn!`;
        } else if (currentLang === 'en') {
            successMsg.innerHTML = `Thank you <strong>${name}</strong> for booking our workshop at Maison TiA!<br><br>` +
                                 `• <strong>Workshop</strong>: ${typeText}<br>` +
                                 `• <strong>Schedule</strong>: ${date} at ${time}<br>` +
                                 `• <strong>Guests</strong>: ${guests} person(s)<br>` +
                                 `• <strong>Est. Price</strong>: ${estPriceText}<br><br>` +
                                 `We have received your booking and will send a confirmation text to <strong>${contact}</strong> within 15 minutes. See you soon!`;
        } else if (currentLang === 'zh') {
            successMsg.innerHTML = `感谢 <strong>${name}</strong> 预订 Maison TiA 的创意手工体验！<br><br>` +
                                 `• <strong>手工类别</strong>: ${typeText}<br>` +
                                 `• <strong>预订时间</strong>: ${date} ${time}<br>` +
                                 `• <strong>参与人数</strong>: ${guests} 人<br>` +
                                 `• <strong>估算费用</strong>: ${estPriceText}<br><br>` +
                                 `我们已收到您的预订请求，将在 15 分钟内通过 <strong>${contact}</strong> 向您发送最终确认。期待与您相见！`;
        } else if (currentLang === 'ko') {
            successMsg.innerHTML = `Maison TiA 워크숍을 신청해 주신 <strong>${name}</strong>님, 감사합니다!<br><br>` +
                                 `• <strong>워크숍 종류</strong>: ${typeText}<br>` +
                                 `• <strong>체험 일정</strong>: ${date} ${time}<br>` +
                                 `• <strong>신청 인원</strong>: ${guests} 명<br>` +
                                 `• <strong>예상 비용</strong>: ${estPriceText}<br><br>` +
                                 `예약 신청이 접수되었습니다. 15분 이내에 기재하신 연락처 <strong>${contact}</strong>(으)로 예약 확정 메시지를 보내드리겠습니다. 곧 뵙겠습니다!`;
        }
    }

    // Show success modal
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeSuccessModal(e) {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.remove('active');
        // Reset form
        document.getElementById('workshop-booking-form').reset();
        
        // Reset active slot card to 14:00
        const slotCards = document.querySelectorAll('.slot-card');
        slotCards.forEach(c => {
            if (c.getAttribute('data-slot') === '14:00') {
                c.classList.add('active');
            } else {
                c.classList.remove('active');
            }
        });
        
        previousTotalPrice = 250000;
        updateEstimatedPrice(false);
    }
}

// 5. Portfolio Showcase Lightbox Modal
function openLightbox(index) {
    const lightbox = document.getElementById('art-lightbox');
    const imgEl = document.getElementById('lightbox-img');
    const catEl = document.getElementById('lightbox-cat');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-desc');

    if (!lightbox || !imgEl || !catEl || !titleEl || !descEl) return;

    // Load details based on language
    const details = portfolioDetails[currentLang][index];
    const images = [
        "assets/storefront/gallery_interior_paintings.jpg",
        "assets/storefront/gallery_interior_crafts.jpg",
        "assets/storefront/balcony_terrace_day.jpg",
        "assets/storefront/storefront_night_close.jpg"
    ];

    imgEl.src = images[index];
    catEl.textContent = details.cat;
    titleEl.textContent = details.title;
    descEl.textContent = details.desc;

    // Open lightbox
    lightbox.classList.add('active');
}

function closeLightbox(e) {
    const lightbox = document.getElementById('art-lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

// 6. Intersection Observer Scroll Reveal Animation
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                revealObserver.unobserve(entry.target); // Reveal once, no need to trigger again
            }
        });
    }, observerOptions);

    reveals.forEach(el => {
        revealObserver.observe(el);
    });
}

// 7. Interactive 3D Card Hover Tilt (Disabled on touch screens for performance)
function initCardTilt() {
    // Detect mobile touch screen
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouchDevice) return; // Skip completely on touch screens to save battery and performance

    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // X mouse inside card
            const y = e.clientY - rect.top;  // Y mouse inside card
            
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            const dx = x - xc;
            const dy = y - yc;
            
            // Limit tilt angle (max 5 degrees)
            const rotateX = -(dy / yc) * 5;
            const rotateY = (dx / xc) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            card.style.boxShadow = `0 15px 35px rgba(44, 44, 44, 0.12)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
            card.style.boxShadow = ''; // restore original CSS shadows
        });
    });
}

// 8. Scroll Percentage Progress Indicator Bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollHeight > 0) {
            const percentage = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    });
}

// 9. Mobile Navigation Menu Toggle
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const links = document.querySelector('.nav-links');
    const actions = document.querySelector('.nav-actions');

    if (!toggle || !links || !actions) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
        actions.classList.toggle('active');
    });

    // Close when clicking a link
    const menuLinks = document.querySelectorAll('.nav-links a, .btn-nav-cta');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
            actions.classList.remove('active');
        });
    });
}

// 10. Cinematic Slideshow for Hero Background (100% Sharp - No Zoom)
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-bg-slideshow .slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    slides[currentSlide].classList.add('active');
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 7000);
}

// Document Load Listener

// 11. Portfolio Category Filtering Logic
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    if (!filterBtns || !portfolioCards) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterValue = e.target.getAttribute('data-filter');

            // Set active button
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Filter portfolio cards with smooth micro-animation
            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Scale down & fade out animation
                card.style.opacity = '0';
                card.style.transform = 'scale(0.92)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || category === filterValue) {
                        card.classList.remove('hide');
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.classList.add('hide');
                    }
                }, 300);
            });
        });
    });
}

// 12. Booking Wizard Multi-Step Logic
function initBookingWizard() {
    const form = document.getElementById('workshop-booking-form');
    if (!form) return;

    const steps = form.querySelectorAll('.form-step');
    const dots = document.querySelectorAll('.booking-progress-dots .progress-dot');
    const nextButtons = form.querySelectorAll('.btn-next');
    const prevButtons = form.querySelectorAll('.btn-prev');
    let currentStep = 1;

    function goToStep(stepNum) {
        // Hide all steps
        steps.forEach(step => step.classList.remove('active'));
        // Show current step
        const activeStep = form.querySelector(`.form-step[data-step="${stepNum}"]`);
        if (activeStep) activeStep.classList.add('active');

        // Update progress dots
        dots.forEach(dot => {
            const dotStep = parseInt(dot.getAttribute('data-step'));
            if (dotStep <= stepNum) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        currentStep = stepNum;
    }

    function validateStep(stepNum) {
        if (stepNum === 1) {
            const guestsInput = document.getElementById('booking-guests');
            if (!guestsInput || !guestsInput.checkValidity()) {
                guestsInput.reportValidity();
                return false;
            }
            return true;
        }
        if (stepNum === 2) {
            const dateInput = document.getElementById('booking-date');
            const timeSelect = document.getElementById('booking-time');
            if (dateInput && !dateInput.checkValidity()) {
                dateInput.reportValidity();
                return false;
            }
            if (timeSelect && !timeSelect.checkValidity()) {
                timeSelect.reportValidity();
                return false;
            }
            return true;
        }
        return true;
    }

    nextButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                goToStep(currentStep + 1);
            }
        });
    });

    prevButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            goToStep(currentStep - 1);
        });
    });

    // Reset wizard on form reset
    form.addEventListener('reset', () => {
        setTimeout(() => {
            goToStep(1);
        }, 10);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initTimeSlots();
    initScrollReveal();
    initCardTilt();
    initScrollProgress();
    initMobileMenu();
    initHeroSlideshow();
    initPortfolioFilter();
    initBookingWizard();

    // Set default date picker to tomorrow
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const yyyy = tomorrow.getFullYear();
        let mm = tomorrow.getMonth() + 1;
        let dd = tomorrow.getDate();
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        dateInput.min = `${yyyy}-${mm}-${dd}`;
        dateInput.value = `${yyyy}-${mm}-${dd}`;
    }

    // Close modals on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            closeSuccessModal();
        }
    });
});

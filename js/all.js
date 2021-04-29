var register=document.getElementById('register_all');
register.innerHTML +=`
<div class="modal fade register" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
        <div class="text-end">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <img src="img/login.png" alt="" class="logo me-3 cus_shadow">
            <p class="d-inline fs-1 fw-bold cus_shadow">加入中山購</p> 
        </div>
        <div class="modal-body mx-5">
            <div class="d-flex my-2 align-items-center fw-bolder fs-5 cus_shadow">
                <div class="account me-1 "> </div>
                註冊
            </div>
            <input type="text" name="email" class="form-control py-2 my-3 inner_shadow" placeholder="信箱">
            <input type="password" name="password" class="form-control py-2 my-3 inner_shadow" placeholder="密碼">
            <input type="password" name="confirm_password" class="form-control py-2 my-3 inner_shadow" placeholder="確認密碼">
            <input type="text" class="form-control py-2 mt-3 inner_shadow" name="sid" placeholder="學號">
            <div class="d-flex">
                <select class="form-select my-3 w-50 d-inline me-2 inner_shadow" name="department" aria-label="Default select example">
                    <option value=B1000>B1000 文學院</option>
                    <option value=B1010>B1010 中國文學系</option>
                    <option value=B1020>B1020 外國語文學系</option>
                    <option value=B1030>B1030 音樂學系</option>
                    <option value=B1060>B1060 劇場藝術學系</option>
                    <option value=B10A0>B10A0 文學院</option>
                    <option value=B2000>B2000 理學院（大一不分系）</option>
                    <option value=B2010>B2010 生物科學系</option>
                    <option value=B2020>B2020 化學系</option>
                    <option value=B2030>B2030 物理學系</option>
                    <option value=B2040>B2040 應用數學系</option>
                    <option value=B20A0>B20A0 理學院</option>
                    <option value=B3000>B3000 工學院（大一不分系）</option>
                    <option value=B3010>B3010 電機工程學系</option>
                    <option value=B3020>B3020 機械與機電工程學系</option>
                    <option value=B3040>B3040 資訊工程學系</option>
                    <option value=B3080>B3080 材料與光電工程學系</option>
                    <option value=B3090>B3090 光電工程學系</option>
                    <option value=B30A0>B30A0 工學院</option>
                    <option value=B3100>B3100 材料與光電科學學系</option>
                    <option value=B4000>B4000 管理學院（大一二不分系）</option>
                    <option value=B4010>B4010 企業管理學系</option>
                    <option value=B4020>B4020 資訊管理學系</option>
                    <option value=B4030>B4030 財務管理學系</option>
                    <option value=B40A0>B40A0 管理學院</option>
                    <option value=B5020>B5020 海洋生物科技暨資源學系</option>
                    <option value=B5040>B5040 海洋環境及工程學系</option>
                    <option value=B5090>B5090 海洋科學系</option>
                    <option value=B50A0>B50A0 海科院</option>
                    <option value=B5610>B5610 海洋科學學士學位學程</option>
                    <option value=B6060>B6060 政治經濟學系</option>
                    <option value=B6090>B6090 社會學系</option>
                    <option value=B60A0>B60A0 社科院</option>
                    <option value=B70A0>B70A0 西灣學院</option>
                    <option value=B7610>B7610 人文暨科技跨領域學士學位學程</option>
                    <option value=C1020>C1020 外國語文學系二年制在職專班</option>
                    <option value=C4010>C4010 企業管理學系（企管組）二年制在職專班</option>
                    <option value=C4020>C4020 資訊管理學系二年制在職專班</option>
                    <option value=C4030>C4030 財務管理學系二年制在職專班</option>
                    <option value=C4050>C4050 人力資源管理學系二年制在職專班</option>
                    <option value=C4110>C4110 企業管理學系（會計組）二年制在職專班</option>
                    <option value=M0000>M0000 外校生校際選課(碩士班)</option>
                    <option value=M1010>M1010 中國文學系碩士班</option>
                    <option value=M1020>M1020 外國語文學系碩士班</option>
                    <option value=M1030>M1030 音樂學系碩士班</option>
                    <option value=M1040>M1040 藝術管理研究所碩士班</option>
                    <option value=M1050>M1050 哲學研究所碩士班</option>
                    <option value=M1060>M1060 劇場藝術學系藝術管理碩士班</option>
                    <option value=M1070>M1070 劇場藝術學系碩士班</option>
                    <option value=M1080>M1080 藝術管理與創業研究所</option>
                    <option value=M10A0>M10A0 文學院</option>
                    <option value=M2010>M2010 生物科學系碩士班</option>
                    <option value=M2020>M2020 化學系碩士班</option>
                    <option value=M2030>M2030 物理學系碩士班</option>
                    <option value=M2040>M2040 應用數學系碩士班</option>
                    <option value=M2050>M2050 生物醫學研究所碩士班</option>
                    <option value=M2060>M2060 醫學科技研究所碩士班</option>
                    <option value=M2070>M2070 生技醫藥研究所碩士班</option>
                    <option value=M2080>M2080 精準醫學研究所碩士班</option>
                    <option value=M3010>M3010 電機工程學系碩士班</option>
                    <option value=M3020>M3020 機械與機電工程學系碩士班</option>
                    <option value=M3030>M3030 環境工程研究所碩士班</option>
                    <option value=M3040>M3040 資訊工程學系碩士班</option>
                    <option value=M3050>M3050 光電工程研究所碩士班</option>
                    <option value=M3060>M3060 材料科學研究所碩士班</option>
                    <option value=M3070>M3070 通訊工程研究所碩士班</option>
                    <option value=M3090>M3090 光電工程學系碩士班</option>
                    <option value=M3100>M3100 材料與光電科學學系碩士班</option>
                    <option value=M3140>M3140 資訊工程學系資訊安全碩士班</option>
                    <option value=M3200>M3200 材料與光電科學學系前瞻應用材料碩士班</option>
                    <option value=M3610>M3610 電機電力工程國際碩士學位學程</option>
                    <option value=M3620>M3620 電信工程國際碩士學位學程</option>
                    <option value=M4000>M4000 管理學院</option>
                    <option value=M4010>M4010 企業管理學系碩士班</option>
                    <option value=M4020>M4020 資訊管理學系碩士班</option>
                    <option value=M4030>M4030 財務管理學系碩士班</option>
                    <option value=M4040>M4040 公共事務管理研究所碩士班</option>
                    <option value=M4050>M4050 人力資源管理研究所碩士班</option>
                    <option value=M4060>M4060 傳播管理研究所碩士班</option>
                    <option value=M4070>M4070 醫務管理研究所碩士班</option>
                    <option value=M4080>M4080 行銷傳播管理研究所碩士班</option>
                    <option value=M40A0>M40A0 管理學院</option>
                    <option value=M4110>M4110 企業管理學系企業管理碩士班</option>
                    <option value=M4210>M4210 企業管理學系醫務管理碩士班</option>
                    <option value=M4610>M4610 管理學院國際經營管理碩士學程</option>
                    <option value=M4620>M4620 醫務管理碩士學位學程</option>
                    <option value=M4650>M4650 人力資源管理全英語碩士學位學程</option>
                    <option value=M4810>M4810 金融創新產業碩士專班</option>
                    <option value=M5010>M5010 海洋生物研究所碩士班</option>
                    <option value=M5020>M5020 海洋生物科技暨資源學系碩士班</option>
                    <option value=M5030>M5030 海洋地質及化學研究所碩士班</option>
                    <option value=M5040>M5040 海洋環境及工程學系碩士班</option>
                    <option value=M5050>M5050 海下技術研究所碩士班</option>
                    <option value=M5060>M5060 海洋物理研究所碩士班</option>
                    <option value=M5070>M5070 海洋事務研究所碩士班</option>
                    <option value=M5080>M5080 海下科技暨應用海洋物理研究所碩士班</option>
                    <option value=M5090>M5090 海洋科學系碩士班</option>
                    <option value=M50A0>M50A0 海科院</option>
                    <option value=M5100>M5100 海下科技研究所碩士班</option>
                    <option value=M5110>M5110 海洋生態與保育研究所碩士班</option>
                    <option value=M5140>M5140 海洋環境及工程學系離岸風電海事工程碩士班</option>
                    <option value=M6000>M6000 社會科學院</option>
                    <option value=M6010>M6010 中山學術研究所碩士班</option>
                    <option value=M6020>M6020 政治學研究所碩士班</option>
                    <option value=M6030>M6030 大陸研究所碩士班</option>
                    <option value=M6040>M6040 經濟學研究所碩士班</option>
                    <option value=M6050>M6050 教育研究所碩士班</option>
                    <option value=M6070>M6070 中國與亞太區域研究所碩士班</option>
                    <option value=M6080>M6080 社會學研究所碩士班</option>
                    <option value=M6090>M6090 社會學系碩士班</option>
                    <option value=M6610>M6610 亞太事務英語碩士學位學程</option>
                    <option value=M6620>M6620 教育與人類發展研究全英語碩士學位學程</option>
                    <option value=M7010>M7010 社會創新研究所</option>
                    <option value=N1010>N1010 中國文學系（夜間專班）碩士在職專班</option>
                    <option value=N2010>N2010 生物科學系碩士在職專班</option>
                    <option value=N2030>N2030 物理學系碩士在職專班</option>
                    <option value=N2050>N2050 生物醫學研究所碩士在職專班</option>
                    <option value=N3010>N3010 電機工程學系碩士在職專班</option>
                    <option value=N3020>N3020 機械與機電工程學系碩士在職專班</option>
                    <option value=N3030>N3030 環境工程研究所碩士在職專班</option>
                    <option value=N3510>N3510 機械與機電工程學系半導體封裝測試產業研發碩士專班</option>
                    <option value=N3520>N3520 電機工程學系IC封裝產業研發碩士專班</option>
                    <option value=N3530>N3530 電機工程學系寬頻通訊網路產業研發碩士專班</option>
                    <option value=N3540>N3540 光電工程研究所光電暨顯示科技產業研發碩士專班</option>
                    <option value=N4010>N4010 企業管理學系碩士在職專班</option>
                    <option value=N4020>N4020 資訊管理學系碩士在職專班</option>
                    <option value=N4030>N4030 財務管理學系碩士在職專班</option>
                    <option value=N4040>N4040 公共事務管理研究所碩士在職專班</option>
                    <option value=N4050>N4050 人力資源管理研究所碩士在職專班</option>
                    <option value=N4060>N4060 傳播管理研究所碩士在職專班</option>
                    <option value=N4080>N4080 行銷傳播管理研究所碩士在職專班</option>
                    <option value=N4110>N4110 企業管理學系英語ＭＢＡ碩士在職專班</option>
                    <option value=N4120>N4120 資訊管理學系電子商務碩士在職專班</option>
                    <option value=N4140>N4140 公共事務管理研究所碩士在職專班（澎湖班）</option>
                    <option value=N4150>N4150 人力資源管理研究所(企業家人力資源管理)碩士在職專班</option>
                    <option value=N4220>N4220 電子商務與商業分析數位學習碩士在職專班</option>
                    <option value=N4250>N4250 人力資源管理研究所企業家人力資源管理碩士在職專班</option>
                    <option value=N4350>N4350 人力資源管理研究所亞太人力資源管理碩士在職專班</option>
                    <option value=N4510>N4510 管理學院高階經營碩士學程在職專班</option>
                    <option value=N4520>N4520 管理學院國際高階經營碩士學程在職專班</option>
                    <option value=N4521>N4521 管理學院國際高階經營碩士學程在職專班-->國際企業組</option>
                    <option value=N4522>N4522 管理學院國際高階經營碩士學程在職專班-->生技管理組</option>
                    <option value=N4530>N4530 兩岸高階主管經營管理碩士在職專班</option>
                    <option value=N5040>N5040 海洋環境及工程學系碩士在職專班</option>
                    <option value=N5510>N5510 海洋生物研究所海洋生物及漁業科學學程碩士在職專班</option>
                    <option value=N6010>N6010 中山學術研究所碩士在職專班</option>
                    <option value=N6020>N6020 政治學研究所碩士在職專班</option>
                    <option value=N6030>N6030 大陸研究所碩士在職專班</option>
                    <option value=N6040>N6040 經濟學研究所碩士在職專班</option>
                    <option value=N6050>N6050 教育研究所教師在職進修教學及學校行政碩士學位班</option>
                    <option value=N6051>N6051 教育研究所教師在職進修教學及學校行政碩士學位班-->教學組</option>
                    <option value=N6052>N6052 教育研究所教師在職進修教學及學校行政碩士學位班-->學校行政組</option>
                    <option value=N6070>N6070 中國與亞太區域研究所碩士在職專班</option>
                    <option value=N6090>N6090 社會學系原住民碩士在職專班</option>
                    <option value=N6150>N6150 教育研究所碩士在職專班</option>
                    <option value=N6170>N6170 行政管理現役軍人營區碩士在職專班</option>
                    <option value=N6510>N6510 社會科學院高階公共政策碩士學程在職專班</option>
                    <option value=O1010>O1010 中國文學系 (暑期專班) 碩士在職專班</option>
                    <option value=P0000>P0000 外校生校際選課(博士班)</option>
                    <option value=P1010>P1010 中國文學系博士班</option>
                    <option value=P1020>P1020 外國語文學系博士班</option>
                    <option value=P2010>P2010 生物科學系博士班</option>
                    <option value=P2020>P2020 化學系博士班</option>
                    <option value=P2030>P2030 物理學系博士班</option>
                    <option value=P2040>P2040 應用數學系博士班</option>
                    <option value=P2050>P2050 生物醫學研究所博士班</option>
                    <option value=P2060>P2060 醫學科技研究所博士班</option>
                    <option value=P2610>P2610 加速器光源及中子束應用博士學位學程</option>
                    <option value=P2620>P2620 加速器光源與中子束應用國際博士學位學程</option>
                    <option value=P2630>P2630 理學國際博士學位學程</option>
                    <option value=P3010>P3010 電機工程學系博士班</option>
                    <option value=P3020>P3020 機械與機電工程學系博士班</option>
                    <option value=P3030>P3030 環境工程研究所博士班</option>
                    <option value=P3040>P3040 資訊工程學系博士班</option>
                    <option value=P3050>P3050 光電工程研究所博士班</option>
                    <option value=P3060>P3060 材料科學研究所博士班</option>
                    <option value=P3070>P3070 通訊工程研究所博士班</option>
                    <option value=P3090>P3090 光電工程學系博士班</option>
                    <option value=P3100>P3100 材料與光電科學學系博士班</option>
                    <option value=P3140>P3140 資訊工程學系資訊安全博士班</option>
                    <option value=P4010>P4010 企業管理學系博士班</option>
                    <option value=P4011>P4011 企業管理學系博士班-->企業管理組</option>
                    <option value=P4012>P4012 企業管理學系博士班-->經營管理組</option>
                    <option value=P4020>P4020 資訊管理學系博士班</option>
                    <option value=P4030>P4030 財務管理學系博士班</option>
                    <option value=P4040>P4040 公共事務管理研究所博士班</option>
                    <option value=P4050>P4050 人力資源管理研究所博士班</option>
                    <option value=P4051>P4051 人力資源管理研究所博士班-->學術專業組</option>
                    <option value=P4052>P4052 人力資源管理研究所博士班-->產學組</option>
                    <option value=P4210>P4210 企業管理學系醫務管理博士班</option>
                    <option value=P5010>P5010 海洋生物研究所博士班</option>
                    <option value=P5020>P5020 海洋生物科技暨資源學系博士班</option>
                    <option value=P5030>P5030 海洋地質及化學研究所博士班</option>
                    <option value=P5040>P5040 海洋環境及工程學系博士班</option>
                    <option value=P5090>P5090 海洋科學系博士班</option>
                    <option value=P5620>P5620 海洋生物科技博士學位學程</option>
                    <option value=P5630>P5630 海洋科學與科技全英語博士學位學程</option>
                    <option value=P6010>P6010 中山學術研究所博士班</option>
                    <option value=P6020>P6020 政治學研究所博士班</option>
                    <option value=P6030>P6030 大陸研究所博士班</option>
                    <option value=P6050>P6050 教育研究所博士班</option>
                    <option value=P6070>P6070 中國與亞太區域研究所博士班</option>
                    <option value=P6610>P6610 教育與人類發展研究全英語博士學位學程</option>
                </select>
                <input type="text" class="form-control py-2 my-3 col-6 w-50 inner_shadow" placeholder="級別">
            </div>
            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-second px-5 cus_shadow" data-bs-dismiss="modal"  data-bs-toggle="modal" data-bs-target="#register_confirm" >註冊</button>
            </div>
            <div class="divider my-2"></div>
            <div class="d-flex my-2 align-items-center fw-bolder fs-5 cus_shadow">
                <div class="account me-1 "> </div>
                快速註冊
            </div>
            <div class="my-3">
                <a href="" class="fw-bolder cus_shadow d-block login_facebook text-white d-flex align-items-center justify-content-center rounded-3 mb-3 "><i class="fab fa-facebook mx-2" style="font-size: 24px;"></i>
                    使 用 Facebook 帳 號 註 冊</a>
                <a href="" class="fw-bolder cus_shadow d-block login_line text-white d-flex align-items-center rounded-3 justify-content-center"><i class="fab fa-line mx-2" style="font-size: 24px;"></i>
                    使 用 Line 帳 號 註 冊</a>
            </div>
        </div>
        </div>
    </div>
    </div>

    <div class="modal fade register" id="register_confirm" tabindex="-1" aria-labelledby="register_confirm" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
            <div class="text-end">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body mx-5 d-flex flex-column justify-content-center align-items-center">
                <img src="img/check.png" alt="" class="w-25">
                <p class="fs-1 my-3 fw-bold">註冊成功</p>
                <p class="text-secondary my-1">待系統審核校友身分後，將會發信通知</p>
                <a href="#" class="">
                    <div class="bg-second text-white py-3 px-5 mt-4 rounded-3">加入Line好友</div>
                </a>
            </div>
            </div>
        </div>
    </div>
    `
    
    ;
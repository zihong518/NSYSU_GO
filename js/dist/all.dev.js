"use strict";

var register = document.getElementById('register_all');
register.innerHTML += "\n<div class=\"modal fade register\" id=\"register\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-dialog-centered \">\n        <div class=\"modal-content\">\n        <div class=\"text-end\">\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n        </div>\n        <div class=\"d-flex justify-content-center align-items-center\">\n            <img src=\"img/login.png\" alt=\"\" class=\"logo me-3 cus_shadow\">\n            <p class=\"d-inline fs-1 fw-bold cus_shadow\">\u52A0\u5165\u4E2D\u5C71\u8CFC</p> \n        </div>\n        <div class=\"modal-body mx-5\">\n            <div class=\"d-flex my-2 align-items-center fw-bolder fs-5 cus_shadow\">\n                <div class=\"account me-1 \"> </div>\n                \u8A3B\u518A\n            </div>\n            <input type=\"text\" name=\"email\" class=\"form-control py-2 my-3 inner_shadow\" placeholder=\"\u4FE1\u7BB1\">\n            <input type=\"password\" name=\"password\" class=\"form-control py-2 my-3 inner_shadow\" placeholder=\"\u5BC6\u78BC\">\n            <input type=\"password\" name=\"confirm_password\" class=\"form-control py-2 my-3 inner_shadow\" placeholder=\"\u78BA\u8A8D\u5BC6\u78BC\">\n            <input type=\"text\" class=\"form-control py-2 mt-3 inner_shadow\" name=\"sid\" placeholder=\"\u5B78\u865F\">\n            <div class=\"d-flex\">\n                <select class=\"form-select my-3 w-50 d-inline me-2 inner_shadow\" name=\"department\" aria-label=\"Default select example\">\n                    <option value=B1000>B1000 \u6587\u5B78\u9662</option>\n                    <option value=B1010>B1010 \u4E2D\u570B\u6587\u5B78\u7CFB</option>\n                    <option value=B1020>B1020 \u5916\u570B\u8A9E\u6587\u5B78\u7CFB</option>\n                    <option value=B1030>B1030 \u97F3\u6A02\u5B78\u7CFB</option>\n                    <option value=B1060>B1060 \u5287\u5834\u85DD\u8853\u5B78\u7CFB</option>\n                    <option value=B10A0>B10A0 \u6587\u5B78\u9662</option>\n                    <option value=B2000>B2000 \u7406\u5B78\u9662\uFF08\u5927\u4E00\u4E0D\u5206\u7CFB\uFF09</option>\n                    <option value=B2010>B2010 \u751F\u7269\u79D1\u5B78\u7CFB</option>\n                    <option value=B2020>B2020 \u5316\u5B78\u7CFB</option>\n                    <option value=B2030>B2030 \u7269\u7406\u5B78\u7CFB</option>\n                    <option value=B2040>B2040 \u61C9\u7528\u6578\u5B78\u7CFB</option>\n                    <option value=B20A0>B20A0 \u7406\u5B78\u9662</option>\n                    <option value=B3000>B3000 \u5DE5\u5B78\u9662\uFF08\u5927\u4E00\u4E0D\u5206\u7CFB\uFF09</option>\n                    <option value=B3010>B3010 \u96FB\u6A5F\u5DE5\u7A0B\u5B78\u7CFB</option>\n                    <option value=B3020>B3020 \u6A5F\u68B0\u8207\u6A5F\u96FB\u5DE5\u7A0B\u5B78\u7CFB</option>\n                    <option value=B3040>B3040 \u8CC7\u8A0A\u5DE5\u7A0B\u5B78\u7CFB</option>\n                    <option value=B3080>B3080 \u6750\u6599\u8207\u5149\u96FB\u5DE5\u7A0B\u5B78\u7CFB</option>\n                    <option value=B3090>B3090 \u5149\u96FB\u5DE5\u7A0B\u5B78\u7CFB</option>\n                    <option value=B30A0>B30A0 \u5DE5\u5B78\u9662</option>\n                    <option value=B3100>B3100 \u6750\u6599\u8207\u5149\u96FB\u79D1\u5B78\u5B78\u7CFB</option>\n                    <option value=B4000>B4000 \u7BA1\u7406\u5B78\u9662\uFF08\u5927\u4E00\u4E8C\u4E0D\u5206\u7CFB\uFF09</option>\n                    <option value=B4010>B4010 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB</option>\n                    <option value=B4020>B4020 \u8CC7\u8A0A\u7BA1\u7406\u5B78\u7CFB</option>\n                    <option value=B4030>B4030 \u8CA1\u52D9\u7BA1\u7406\u5B78\u7CFB</option>\n                    <option value=B40A0>B40A0 \u7BA1\u7406\u5B78\u9662</option>\n                    <option value=B5020>B5020 \u6D77\u6D0B\u751F\u7269\u79D1\u6280\u66A8\u8CC7\u6E90\u5B78\u7CFB</option>\n                    <option value=B5040>B5040 \u6D77\u6D0B\u74B0\u5883\u53CA\u5DE5\u7A0B\u5B78\u7CFB</option>\n                    <option value=B5090>B5090 \u6D77\u6D0B\u79D1\u5B78\u7CFB</option>\n                    <option value=B50A0>B50A0 \u6D77\u79D1\u9662</option>\n                    <option value=B5610>B5610 \u6D77\u6D0B\u79D1\u5B78\u5B78\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=B6060>B6060 \u653F\u6CBB\u7D93\u6FDF\u5B78\u7CFB</option>\n                    <option value=B6090>B6090 \u793E\u6703\u5B78\u7CFB</option>\n                    <option value=B60A0>B60A0 \u793E\u79D1\u9662</option>\n                    <option value=B70A0>B70A0 \u897F\u7063\u5B78\u9662</option>\n                    <option value=B7610>B7610 \u4EBA\u6587\u66A8\u79D1\u6280\u8DE8\u9818\u57DF\u5B78\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=C1020>C1020 \u5916\u570B\u8A9E\u6587\u5B78\u7CFB\u4E8C\u5E74\u5236\u5728\u8077\u5C08\u73ED</option>\n                    <option value=C4010>C4010 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\uFF08\u4F01\u7BA1\u7D44\uFF09\u4E8C\u5E74\u5236\u5728\u8077\u5C08\u73ED</option>\n                    <option value=C4020>C4020 \u8CC7\u8A0A\u7BA1\u7406\u5B78\u7CFB\u4E8C\u5E74\u5236\u5728\u8077\u5C08\u73ED</option>\n                    <option value=C4030>C4030 \u8CA1\u52D9\u7BA1\u7406\u5B78\u7CFB\u4E8C\u5E74\u5236\u5728\u8077\u5C08\u73ED</option>\n                    <option value=C4050>C4050 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u5B78\u7CFB\u4E8C\u5E74\u5236\u5728\u8077\u5C08\u73ED</option>\n                    <option value=C4110>C4110 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\uFF08\u6703\u8A08\u7D44\uFF09\u4E8C\u5E74\u5236\u5728\u8077\u5C08\u73ED</option>\n                    <option value=M0000>M0000 \u5916\u6821\u751F\u6821\u969B\u9078\u8AB2(\u78A9\u58EB\u73ED)</option>\n                    <option value=M1010>M1010 \u4E2D\u570B\u6587\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M1020>M1020 \u5916\u570B\u8A9E\u6587\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M1030>M1030 \u97F3\u6A02\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M1040>M1040 \u85DD\u8853\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M1050>M1050 \u54F2\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M1060>M1060 \u5287\u5834\u85DD\u8853\u5B78\u7CFB\u85DD\u8853\u7BA1\u7406\u78A9\u58EB\u73ED</option>\n                    <option value=M1070>M1070 \u5287\u5834\u85DD\u8853\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M1080>M1080 \u85DD\u8853\u7BA1\u7406\u8207\u5275\u696D\u7814\u7A76\u6240</option>\n                    <option value=M10A0>M10A0 \u6587\u5B78\u9662</option>\n                    <option value=M2010>M2010 \u751F\u7269\u79D1\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M2020>M2020 \u5316\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M2030>M2030 \u7269\u7406\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M2040>M2040 \u61C9\u7528\u6578\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M2050>M2050 \u751F\u7269\u91AB\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M2060>M2060 \u91AB\u5B78\u79D1\u6280\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M2070>M2070 \u751F\u6280\u91AB\u85E5\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M2080>M2080 \u7CBE\u6E96\u91AB\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M3010>M3010 \u96FB\u6A5F\u5DE5\u7A0B\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M3020>M3020 \u6A5F\u68B0\u8207\u6A5F\u96FB\u5DE5\u7A0B\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M3030>M3030 \u74B0\u5883\u5DE5\u7A0B\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M3040>M3040 \u8CC7\u8A0A\u5DE5\u7A0B\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M3050>M3050 \u5149\u96FB\u5DE5\u7A0B\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M3060>M3060 \u6750\u6599\u79D1\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M3070>M3070 \u901A\u8A0A\u5DE5\u7A0B\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M3090>M3090 \u5149\u96FB\u5DE5\u7A0B\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M3100>M3100 \u6750\u6599\u8207\u5149\u96FB\u79D1\u5B78\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M3140>M3140 \u8CC7\u8A0A\u5DE5\u7A0B\u5B78\u7CFB\u8CC7\u8A0A\u5B89\u5168\u78A9\u58EB\u73ED</option>\n                    <option value=M3200>M3200 \u6750\u6599\u8207\u5149\u96FB\u79D1\u5B78\u5B78\u7CFB\u524D\u77BB\u61C9\u7528\u6750\u6599\u78A9\u58EB\u73ED</option>\n                    <option value=M3610>M3610 \u96FB\u6A5F\u96FB\u529B\u5DE5\u7A0B\u570B\u969B\u78A9\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=M3620>M3620 \u96FB\u4FE1\u5DE5\u7A0B\u570B\u969B\u78A9\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=M4000>M4000 \u7BA1\u7406\u5B78\u9662</option>\n                    <option value=M4010>M4010 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M4020>M4020 \u8CC7\u8A0A\u7BA1\u7406\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M4030>M4030 \u8CA1\u52D9\u7BA1\u7406\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M4040>M4040 \u516C\u5171\u4E8B\u52D9\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M4050>M4050 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M4060>M4060 \u50B3\u64AD\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M4070>M4070 \u91AB\u52D9\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M4080>M4080 \u884C\u92B7\u50B3\u64AD\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M40A0>M40A0 \u7BA1\u7406\u5B78\u9662</option>\n                    <option value=M4110>M4110 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\u4F01\u696D\u7BA1\u7406\u78A9\u58EB\u73ED</option>\n                    <option value=M4210>M4210 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\u91AB\u52D9\u7BA1\u7406\u78A9\u58EB\u73ED</option>\n                    <option value=M4610>M4610 \u7BA1\u7406\u5B78\u9662\u570B\u969B\u7D93\u71DF\u7BA1\u7406\u78A9\u58EB\u5B78\u7A0B</option>\n                    <option value=M4620>M4620 \u91AB\u52D9\u7BA1\u7406\u78A9\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=M4650>M4650 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u5168\u82F1\u8A9E\u78A9\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=M4810>M4810 \u91D1\u878D\u5275\u65B0\u7522\u696D\u78A9\u58EB\u5C08\u73ED</option>\n                    <option value=M5010>M5010 \u6D77\u6D0B\u751F\u7269\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M5020>M5020 \u6D77\u6D0B\u751F\u7269\u79D1\u6280\u66A8\u8CC7\u6E90\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M5030>M5030 \u6D77\u6D0B\u5730\u8CEA\u53CA\u5316\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M5040>M5040 \u6D77\u6D0B\u74B0\u5883\u53CA\u5DE5\u7A0B\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M5050>M5050 \u6D77\u4E0B\u6280\u8853\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M5060>M5060 \u6D77\u6D0B\u7269\u7406\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M5070>M5070 \u6D77\u6D0B\u4E8B\u52D9\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M5080>M5080 \u6D77\u4E0B\u79D1\u6280\u66A8\u61C9\u7528\u6D77\u6D0B\u7269\u7406\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M5090>M5090 \u6D77\u6D0B\u79D1\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M50A0>M50A0 \u6D77\u79D1\u9662</option>\n                    <option value=M5100>M5100 \u6D77\u4E0B\u79D1\u6280\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M5110>M5110 \u6D77\u6D0B\u751F\u614B\u8207\u4FDD\u80B2\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M5140>M5140 \u6D77\u6D0B\u74B0\u5883\u53CA\u5DE5\u7A0B\u5B78\u7CFB\u96E2\u5CB8\u98A8\u96FB\u6D77\u4E8B\u5DE5\u7A0B\u78A9\u58EB\u73ED</option>\n                    <option value=M6000>M6000 \u793E\u6703\u79D1\u5B78\u9662</option>\n                    <option value=M6010>M6010 \u4E2D\u5C71\u5B78\u8853\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M6020>M6020 \u653F\u6CBB\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M6030>M6030 \u5927\u9678\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M6040>M6040 \u7D93\u6FDF\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M6050>M6050 \u6559\u80B2\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M6070>M6070 \u4E2D\u570B\u8207\u4E9E\u592A\u5340\u57DF\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M6080>M6080 \u793E\u6703\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u73ED</option>\n                    <option value=M6090>M6090 \u793E\u6703\u5B78\u7CFB\u78A9\u58EB\u73ED</option>\n                    <option value=M6610>M6610 \u4E9E\u592A\u4E8B\u52D9\u82F1\u8A9E\u78A9\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=M6620>M6620 \u6559\u80B2\u8207\u4EBA\u985E\u767C\u5C55\u7814\u7A76\u5168\u82F1\u8A9E\u78A9\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=M7010>M7010 \u793E\u6703\u5275\u65B0\u7814\u7A76\u6240</option>\n                    <option value=N1010>N1010 \u4E2D\u570B\u6587\u5B78\u7CFB\uFF08\u591C\u9593\u5C08\u73ED\uFF09\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N2010>N2010 \u751F\u7269\u79D1\u5B78\u7CFB\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N2030>N2030 \u7269\u7406\u5B78\u7CFB\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N2050>N2050 \u751F\u7269\u91AB\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N3010>N3010 \u96FB\u6A5F\u5DE5\u7A0B\u5B78\u7CFB\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N3020>N3020 \u6A5F\u68B0\u8207\u6A5F\u96FB\u5DE5\u7A0B\u5B78\u7CFB\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N3030>N3030 \u74B0\u5883\u5DE5\u7A0B\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N3510>N3510 \u6A5F\u68B0\u8207\u6A5F\u96FB\u5DE5\u7A0B\u5B78\u7CFB\u534A\u5C0E\u9AD4\u5C01\u88DD\u6E2C\u8A66\u7522\u696D\u7814\u767C\u78A9\u58EB\u5C08\u73ED</option>\n                    <option value=N3520>N3520 \u96FB\u6A5F\u5DE5\u7A0B\u5B78\u7CFBIC\u5C01\u88DD\u7522\u696D\u7814\u767C\u78A9\u58EB\u5C08\u73ED</option>\n                    <option value=N3530>N3530 \u96FB\u6A5F\u5DE5\u7A0B\u5B78\u7CFB\u5BEC\u983B\u901A\u8A0A\u7DB2\u8DEF\u7522\u696D\u7814\u767C\u78A9\u58EB\u5C08\u73ED</option>\n                    <option value=N3540>N3540 \u5149\u96FB\u5DE5\u7A0B\u7814\u7A76\u6240\u5149\u96FB\u66A8\u986F\u793A\u79D1\u6280\u7522\u696D\u7814\u767C\u78A9\u58EB\u5C08\u73ED</option>\n                    <option value=N4010>N4010 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4020>N4020 \u8CC7\u8A0A\u7BA1\u7406\u5B78\u7CFB\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4030>N4030 \u8CA1\u52D9\u7BA1\u7406\u5B78\u7CFB\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4040>N4040 \u516C\u5171\u4E8B\u52D9\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4050>N4050 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4060>N4060 \u50B3\u64AD\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4080>N4080 \u884C\u92B7\u50B3\u64AD\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4110>N4110 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\u82F1\u8A9E\uFF2D\uFF22\uFF21\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4120>N4120 \u8CC7\u8A0A\u7BA1\u7406\u5B78\u7CFB\u96FB\u5B50\u5546\u52D9\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4140>N4140 \u516C\u5171\u4E8B\u52D9\u7BA1\u7406\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED\uFF08\u6F8E\u6E56\u73ED\uFF09</option>\n                    <option value=N4150>N4150 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u7814\u7A76\u6240(\u4F01\u696D\u5BB6\u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406)\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4220>N4220 \u96FB\u5B50\u5546\u52D9\u8207\u5546\u696D\u5206\u6790\u6578\u4F4D\u5B78\u7FD2\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4250>N4250 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u7814\u7A76\u6240\u4F01\u696D\u5BB6\u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4350>N4350 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u7814\u7A76\u6240\u4E9E\u592A\u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4510>N4510 \u7BA1\u7406\u5B78\u9662\u9AD8\u968E\u7D93\u71DF\u78A9\u58EB\u5B78\u7A0B\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4520>N4520 \u7BA1\u7406\u5B78\u9662\u570B\u969B\u9AD8\u968E\u7D93\u71DF\u78A9\u58EB\u5B78\u7A0B\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N4521>N4521 \u7BA1\u7406\u5B78\u9662\u570B\u969B\u9AD8\u968E\u7D93\u71DF\u78A9\u58EB\u5B78\u7A0B\u5728\u8077\u5C08\u73ED-->\u570B\u969B\u4F01\u696D\u7D44</option>\n                    <option value=N4522>N4522 \u7BA1\u7406\u5B78\u9662\u570B\u969B\u9AD8\u968E\u7D93\u71DF\u78A9\u58EB\u5B78\u7A0B\u5728\u8077\u5C08\u73ED-->\u751F\u6280\u7BA1\u7406\u7D44</option>\n                    <option value=N4530>N4530 \u5169\u5CB8\u9AD8\u968E\u4E3B\u7BA1\u7D93\u71DF\u7BA1\u7406\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N5040>N5040 \u6D77\u6D0B\u74B0\u5883\u53CA\u5DE5\u7A0B\u5B78\u7CFB\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N5510>N5510 \u6D77\u6D0B\u751F\u7269\u7814\u7A76\u6240\u6D77\u6D0B\u751F\u7269\u53CA\u6F01\u696D\u79D1\u5B78\u5B78\u7A0B\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N6010>N6010 \u4E2D\u5C71\u5B78\u8853\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N6020>N6020 \u653F\u6CBB\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N6030>N6030 \u5927\u9678\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N6040>N6040 \u7D93\u6FDF\u5B78\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N6050>N6050 \u6559\u80B2\u7814\u7A76\u6240\u6559\u5E2B\u5728\u8077\u9032\u4FEE\u6559\u5B78\u53CA\u5B78\u6821\u884C\u653F\u78A9\u58EB\u5B78\u4F4D\u73ED</option>\n                    <option value=N6051>N6051 \u6559\u80B2\u7814\u7A76\u6240\u6559\u5E2B\u5728\u8077\u9032\u4FEE\u6559\u5B78\u53CA\u5B78\u6821\u884C\u653F\u78A9\u58EB\u5B78\u4F4D\u73ED-->\u6559\u5B78\u7D44</option>\n                    <option value=N6052>N6052 \u6559\u80B2\u7814\u7A76\u6240\u6559\u5E2B\u5728\u8077\u9032\u4FEE\u6559\u5B78\u53CA\u5B78\u6821\u884C\u653F\u78A9\u58EB\u5B78\u4F4D\u73ED-->\u5B78\u6821\u884C\u653F\u7D44</option>\n                    <option value=N6070>N6070 \u4E2D\u570B\u8207\u4E9E\u592A\u5340\u57DF\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N6090>N6090 \u793E\u6703\u5B78\u7CFB\u539F\u4F4F\u6C11\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N6150>N6150 \u6559\u80B2\u7814\u7A76\u6240\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N6170>N6170 \u884C\u653F\u7BA1\u7406\u73FE\u5F79\u8ECD\u4EBA\u71DF\u5340\u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=N6510>N6510 \u793E\u6703\u79D1\u5B78\u9662\u9AD8\u968E\u516C\u5171\u653F\u7B56\u78A9\u58EB\u5B78\u7A0B\u5728\u8077\u5C08\u73ED</option>\n                    <option value=O1010>O1010 \u4E2D\u570B\u6587\u5B78\u7CFB (\u6691\u671F\u5C08\u73ED) \u78A9\u58EB\u5728\u8077\u5C08\u73ED</option>\n                    <option value=P0000>P0000 \u5916\u6821\u751F\u6821\u969B\u9078\u8AB2(\u535A\u58EB\u73ED)</option>\n                    <option value=P1010>P1010 \u4E2D\u570B\u6587\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P1020>P1020 \u5916\u570B\u8A9E\u6587\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P2010>P2010 \u751F\u7269\u79D1\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P2020>P2020 \u5316\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P2030>P2030 \u7269\u7406\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P2040>P2040 \u61C9\u7528\u6578\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P2050>P2050 \u751F\u7269\u91AB\u5B78\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P2060>P2060 \u91AB\u5B78\u79D1\u6280\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P2610>P2610 \u52A0\u901F\u5668\u5149\u6E90\u53CA\u4E2D\u5B50\u675F\u61C9\u7528\u535A\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=P2620>P2620 \u52A0\u901F\u5668\u5149\u6E90\u8207\u4E2D\u5B50\u675F\u61C9\u7528\u570B\u969B\u535A\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=P2630>P2630 \u7406\u5B78\u570B\u969B\u535A\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=P3010>P3010 \u96FB\u6A5F\u5DE5\u7A0B\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P3020>P3020 \u6A5F\u68B0\u8207\u6A5F\u96FB\u5DE5\u7A0B\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P3030>P3030 \u74B0\u5883\u5DE5\u7A0B\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P3040>P3040 \u8CC7\u8A0A\u5DE5\u7A0B\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P3050>P3050 \u5149\u96FB\u5DE5\u7A0B\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P3060>P3060 \u6750\u6599\u79D1\u5B78\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P3070>P3070 \u901A\u8A0A\u5DE5\u7A0B\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P3090>P3090 \u5149\u96FB\u5DE5\u7A0B\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P3100>P3100 \u6750\u6599\u8207\u5149\u96FB\u79D1\u5B78\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P3140>P3140 \u8CC7\u8A0A\u5DE5\u7A0B\u5B78\u7CFB\u8CC7\u8A0A\u5B89\u5168\u535A\u58EB\u73ED</option>\n                    <option value=P4010>P4010 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P4011>P4011 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\u535A\u58EB\u73ED-->\u4F01\u696D\u7BA1\u7406\u7D44</option>\n                    <option value=P4012>P4012 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\u535A\u58EB\u73ED-->\u7D93\u71DF\u7BA1\u7406\u7D44</option>\n                    <option value=P4020>P4020 \u8CC7\u8A0A\u7BA1\u7406\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P4030>P4030 \u8CA1\u52D9\u7BA1\u7406\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P4040>P4040 \u516C\u5171\u4E8B\u52D9\u7BA1\u7406\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P4050>P4050 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P4051>P4051 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u7814\u7A76\u6240\u535A\u58EB\u73ED-->\u5B78\u8853\u5C08\u696D\u7D44</option>\n                    <option value=P4052>P4052 \u4EBA\u529B\u8CC7\u6E90\u7BA1\u7406\u7814\u7A76\u6240\u535A\u58EB\u73ED-->\u7522\u5B78\u7D44</option>\n                    <option value=P4210>P4210 \u4F01\u696D\u7BA1\u7406\u5B78\u7CFB\u91AB\u52D9\u7BA1\u7406\u535A\u58EB\u73ED</option>\n                    <option value=P5010>P5010 \u6D77\u6D0B\u751F\u7269\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P5020>P5020 \u6D77\u6D0B\u751F\u7269\u79D1\u6280\u66A8\u8CC7\u6E90\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P5030>P5030 \u6D77\u6D0B\u5730\u8CEA\u53CA\u5316\u5B78\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P5040>P5040 \u6D77\u6D0B\u74B0\u5883\u53CA\u5DE5\u7A0B\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P5090>P5090 \u6D77\u6D0B\u79D1\u5B78\u7CFB\u535A\u58EB\u73ED</option>\n                    <option value=P5620>P5620 \u6D77\u6D0B\u751F\u7269\u79D1\u6280\u535A\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=P5630>P5630 \u6D77\u6D0B\u79D1\u5B78\u8207\u79D1\u6280\u5168\u82F1\u8A9E\u535A\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                    <option value=P6010>P6010 \u4E2D\u5C71\u5B78\u8853\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P6020>P6020 \u653F\u6CBB\u5B78\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P6030>P6030 \u5927\u9678\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P6050>P6050 \u6559\u80B2\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P6070>P6070 \u4E2D\u570B\u8207\u4E9E\u592A\u5340\u57DF\u7814\u7A76\u6240\u535A\u58EB\u73ED</option>\n                    <option value=P6610>P6610 \u6559\u80B2\u8207\u4EBA\u985E\u767C\u5C55\u7814\u7A76\u5168\u82F1\u8A9E\u535A\u58EB\u5B78\u4F4D\u5B78\u7A0B</option>\n                </select>\n                <input type=\"text\" class=\"form-control py-2 my-3 col-6 w-50 inner_shadow\" placeholder=\"\u7D1A\u5225\">\n            </div>\n            <div class=\"d-flex justify-content-end\">\n                <button type=\"button\" class=\"btn btn-second px-5 cus_shadow\" data-bs-dismiss=\"modal\"  data-bs-toggle=\"modal\" data-bs-target=\"#register_confirm\" >\u8A3B\u518A</button>\n            </div>\n            <div class=\"divider my-2\"></div>\n            <div class=\"d-flex my-2 align-items-center fw-bolder fs-5 cus_shadow\">\n                <div class=\"account me-1 \"> </div>\n                \u5FEB\u901F\u8A3B\u518A\n            </div>\n            <div class=\"my-3\">\n                <a href=\"\" class=\"fw-bolder cus_shadow d-block login_facebook text-white d-flex align-items-center justify-content-center rounded-3 mb-3 \"><i class=\"fab fa-facebook mx-2\" style=\"font-size: 24px;\"></i>\n                    \u4F7F \u7528 Facebook \u5E33 \u865F \u8A3B \u518A</a>\n                <a href=\"\" class=\"fw-bolder cus_shadow d-block login_line text-white d-flex align-items-center rounded-3 justify-content-center\"><i class=\"fab fa-line mx-2\" style=\"font-size: 24px;\"></i>\n                    \u4F7F \u7528 Line \u5E33 \u865F \u8A3B \u518A</a>\n            </div>\n        </div>\n        </div>\n    </div>\n    </div>\n\n    <div class=\"modal fade register\" id=\"register_confirm\" tabindex=\"-1\" aria-labelledby=\"register_confirm\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered \">\n        <div class=\"modal-content\">\n            <div class=\"text-end\">\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body mx-5 d-flex flex-column justify-content-center align-items-center\">\n                <img src=\"img/check.png\" alt=\"\" class=\"w-25\">\n                <p class=\"fs-1 my-3 fw-bold\">\u8A3B\u518A\u6210\u529F</p>\n                <p class=\"text-secondary my-1\">\u5F85\u7CFB\u7D71\u5BE9\u6838\u6821\u53CB\u8EAB\u5206\u5F8C\uFF0C\u5C07\u6703\u767C\u4FE1\u901A\u77E5</p>\n                <a href=\"#\" class=\"\">\n                    <div class=\"bg-second text-white py-3 px-5 mt-4 rounded-3\">\u52A0\u5165Line\u597D\u53CB</div>\n                </a>\n            </div>\n            </div>\n        </div>\n    </div>\n    ";
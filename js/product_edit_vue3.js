// document.write(
//     unescape("%3Cscript src='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.11/cropper.js' type='text/javascript'%3E%3C/script%3E")
// );
const vm = Vue.createApp({
    data(){
        return{
            thing:"",
            // 目前的種類
            categories:[
                {
                    content:"顏色",
                    bool_modify:false,
                    types:["白色","紅色"]
                },
                {
                    content:"尺寸",
                    bool_modify:false,
                    types :["大","小"]
                }
            ],
            modification:"",
            type:["",""],
            // 物流方式
            quantityChoose : [
                {val:"黑貓",item:'黑貓'},
                {val:"全家",item:'全家'},
                {val:"中山GO",item:'中山GO'},
            ],
            // preview:null,
            // image:null,
            // 照片
            preview_list: [],
            image_list: [],
            // 產品描述
            productDescription:[],
            productQuestion:[],
            productSmallDescription:{
                title:null,
                description:null,
            },
            itemRefs: [],
            cutPhoto:[],
            preview:null
            // image_dom:image
        }
    },
    methods:{
        // 照片描述(還沒用好)
        setItemRef(el){
            let cropper
            if (el) {
                this.itemRefs.push(el)
                cropper = new Cropper(this.itemRefs[this.itemRefs.length-1], {
                    aspectRatio: 4 / 3,
                    // preview : document.getElementById('previewImg'),  // 預覽檢視
                    guides : true,   // 裁剪框的虛線(九宮格)
                    autoCropArea : 1, // 0-1之間的數值，定義自動剪裁區域的大小，預設0.8
                    dragMode: 'crop', // 拖曳模式 crop(Default,新增裁剪框) / move(移動裁剪框&圖片) / none(無動作)
                    cropBoxResizable : true, // 是否有裁剪框調整四邊八點
                    movable : false, // 是否允許移動圖片
                    zoomable : true, // 是否允許縮放圖片大小
                    rotatable : false,   // 是否允許旋轉圖片
                    zoomOnWheel : false, // 是否允許通過滑鼠滾輪來縮放圖片
                    zoomOnTouch : false, // 是否允許通過觸控移動來縮放圖片
                    ready : function(e) {  
                        console.log('ready!');
                    },
                    // crop(event) {
                    //   console.log(event.detail.x);
                    //   console.log(event.detail.y);
                    //   console.log(event.detail.width);
                    //   console.log(event.detail.height);
                    //   console.log(event.detail.rotate);
                    //   console.log(event.detail.scaleX);
                    //   console.log(event.detail.scaleY);
                    // },
                })
            
               
            }
            // this.itemRefs[this.itemRefs.length-1].addEventListener('ready', function () {
            //     console.log(this.cropper === cropper);
            //     // > true
            // });
            
        },
        cutImage(e){
            console.log(e)
        },
        // Description
        addQuestion(){
            this.productQuestion.push({
                id:this.productQuestion.length,
                question:null,
                answer:null
            })
        },
        deleteQuestion(position){
            this.productQuestion.splice(position,1)
        },
        addDescription(){
            this.productDescription.push({
                id:this.productDescription.length,
                title:null,
                description:null
            })
        },
        deleteDescription(position){
            this.productDescription.splice(position,1)
        },
        // previewImage(event) {
        //     let input = event.target;
        //     if (input.files) {
        //         let reader = new FileReader();
        //         reader.onload = (e) => {
        //           this.preview=e.target.result;
        //         }
        //         this.image=input.files[0];
        //         reader.readAsDataURL(input.files[0]);
        //     }
        // },
        // deleteImage(){
        //     this.preview=null
        //     this.image=null
        // },
        
        // 新增刪除照片
        previewMultiImage(event) {
            let input = event.target;
            let count = input.files.length;
            let index = 0;
            if(count>4){
                alert("最多四張")
            }
            else if (input.files) {
              while(count --) {
                let reader = new FileReader();
                if (this.preview_list.length<4){
                    reader.onload = (e) => {
                        this.preview_list.push(e.target.result);
                    }
                    this.image_list.push(input.files[index]);
                    reader.readAsDataURL(input.files[index]);
                    index ++;
                }
                else{
                    alert('照片最多四張')
                }

              }
            }
        },
        deleteMultiImage(index){
            this.preview_list.splice(index,1)
            this.image_list.splice(index,1)
        },
        // 新增刪除修改種類
        addCategory(val){
            if(Object.keys(this.categories).length>=2){
                console.log(this.products),
                alert("最多兩項")
            }
            else if(val==""){
                alert("請輸入文字")
            }
            else(
                console.log(this.products),
                this.categories.push({content:val,bool_modify:false,types:[]})
            )
        },
        deleteCategory(val){
            this.categories.splice(this.categories.indexOf(val),1)
        },
        modifyCategory(position){
            this.categories[this.categories.indexOf(position)].bool_modify=true
        },
        modifyContent(item,position){
            if(item==""){
                alert("請輸入文字")
            }
            else{
                this.categories[this.categories.indexOf(position)].content=item
                this.categories[this.categories.indexOf(position)].bool_modify=false
                this.modification=""
            }
        },
        // 新增刪除類型
        deleteType(val,position){
            let category= this.categories[this.categories.indexOf(position)]
            console.log(val,category)
            category.types.splice(category.types.indexOf(val),1)
        },
        addType(item,position){
            if(item==""){
                alert("請輸入文字")
            }
            else{
                this.categories[this.categories.indexOf(position)].types.push(item)
            }
        },
        // 提交表單
        submit(){
            console.log(this.products);
        },
        // 新增物流to products
        addToLogistics(product,list,event){
            let position=this.products[this.products.indexOf(product)]
            if(event.target.checked){
                position.logistics.push(list.item)
            }
            else{
                position.logistics.splice(position.logistics.indexOf(list.item),1)
            }
        }
    },
    computed: {
        // 產品資訊
        products() {
            let result=[]
            let index=0;
            if(this.categories.length==0){
                index++
                result.push({
                    id:index,
                    price:"",
                    quantity:"",
                    logistics:[]
               })
            }
            if(this.categories.length==1){
                for(let i=0;i<this.categories[Object.keys(this.categories)[0]].types.length;i++){
                    index++
                    result.push({
                        id:index,
                        type1:this.categories[Object.keys(this.categories)[0]].types[i],
                        price:"",
                        quantity:"",
                        logistics:[]
                    })
                }
            }
            if(this.categories.length==2){
                for(let i=0;i<this.categories[Object.keys(this.categories)[0]].types.length;i++){
                    for(let j=0;j<this.categories[Object.keys(this.categories)[1]].types.length;j++){
                        index++
                        result.push({
                            id:index,
                            type1:this.categories[Object.keys(this.categories)[0]].types[i],
                            type2:this.categories[Object.keys(this.categories)[1]].types[j],
                            price:'',
                            quantity:'',
                            logistics:[],
                        })
                    }
                }
            }
            return result
        }
    },
    // logistics(){
    //     for(let i=0;i<this.categories[Object.keys(this.categories)[0]].types.length;i++){
    //         for(let j=0;j<this.categories[Object.keys(this.categories)[1]].types.length;j++){
    //         }
    //     }
    // }
});

vm.mount('#app');
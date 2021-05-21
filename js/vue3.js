const vm = Vue.createApp({
    data(){
        return{
            thing:"",
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
            quantityChoose : [
                {val:"黑貓",item:'黑貓'},
                {val:"全家",item:'全家'},
                {val:"中山GO",item:'中山GO'},
            ],
            preview:null,
            image:null,
            preview_list: [],
            image_list: [],
            productDescription:[]
        }
    },
    methods:{
        addDescription(){
            this.productDescription.push({
                id:this.productDescription.length,
                title:null,
                description:null
            })
        },
        deleteDescription(position){
            this.productDescription.splice(position,1)
        }
        ,
        previewImage(event) {
            let input = event.target;
            if (input.files) {
                let reader = new FileReader();
                reader.onload = (e) => {
                  this.preview=e.target.result;
                }
                this.image=input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        deleteImage(){
            this.preview=null
            this.image=null
        },
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
        deleteType(val,position){
            let category= this.categories[this.categories.indexOf(position)]
            console.log(val,category)
            category.types.splice(category.types.indexOf(val),1)
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
            }
        },
        addType(item,position){
            this.categories[this.categories.indexOf(position)].types.push(item)
        },
        submit(){
            console.log(this.productDescription)
        },
        addToLogistics(product,list,event){
            let position=this.products[this.products.indexOf(product)]
            if(event.target.checked){
                position.logistics.push(list.item)
            }
            else{
                position.logistics.splice(position.logistics.indexOf(list.item),1)
                console.log(position.logistics)
            }
        }
    },
    computed: {
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
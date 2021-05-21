var app = new Vue({
    el:'#app',
    data:{
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
        price:"",
        quantity:"",
        type:["",""],
    },
    methods:{
        addCategory:function(val){
            if(Object.keys(this.categories).length>=2){
                console.log(this.product)
            }
            else(
          
                this.categories.push({content:val,bool_modify:false,types:[]})
            )
        },
        deleteCategory:function(val){
            console.log(this.products)
            this.categories.splice(this.categories.indexOf(val),1)
        },
        modifyCategory:function(position){
            this.categories[this.categories.indexOf(position)].bool_modify=true
        },
        modifyContent:function(item,position){
            this.categories[this.categories.indexOf(position)].content=item
            this.categories[this.categories.indexOf(position)].bool_modify=false
        },
        addType:function(item,position){
            this.categories[this.categories.indexOf(position)].types.push(item)
        },
    },
    computed: {
        products() {
            let result=[]
            for(let i=0;i<this.categories[Object.keys(this.categories)[0]].types.length;i++){
                for(let j=0;j<this.categories[Object.keys(this.categories)[1]].types.length;j++){
                    result.push({
                        type1:this.categories[Object.keys(this.categories)[0]].types[i],
                        type2:this.categories[Object.keys(this.categories)[1]].types[j],
                        price:"",
                        quantity:"",
                        
                    })
                }
            }
            return result
             
        }
    },
});
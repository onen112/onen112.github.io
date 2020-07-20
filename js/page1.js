var classS = new Vue({
    el:".all_class",
    data: {
        class_inf: [
            {
                class: [
                    {name: "张三", gender: "男", age: 19, class: "三年一班"},
                    {name: "李四", gender: "女", age: 18, class: "三年一班"},
                    {name: "王五", gender: "男", age: 18, class: "三年一班"},
                    {name: "王麻子", gender: "男", age: 19, class: "三年一班"},
                ],
            },
            {
                class: [
                    {name: "小韦", gender: "男", age: 19, class: "三年二班"},
                    {name: "小韦", gender: "男", age: 19, class: "三年二班"},
                    {name: "小韦", gender: "男", age: 19, class: "三年二班"},
                    {name: "小韦", gender: "男", age: 19, class: "三年二班"},
                    {name: "小韦", gender: "男", age: 19, class: "三年二班"},
                ]
            },
            {
                class: [
                    {name: "onen", gender: "男", age: 19, class: "三年三班"},
                    {name: "onen", gender: "男", age: 19, class: "三年三班"},
                    {name: "onen", gender: "男", age: 19, class: "三年三班"},
                    {name: "onen", gender: "男", age: 19, class: "三年三班"},
                    {name: "onen", gender: "男", age: 19, class: "三年三班"},
                ]
            }
        ],
        classOn: 0,
        isSelect:[
            true,false,false,
        ],
        isShowSelect: true,
    },
    methods:{
        select1:function () {
            this.classOn = 0;
            if(this.isSelect[0] != true){
                for(var i = 0;i < this.isSelect.length;i++){
                    this.isSelect[i] = false;
                }
                this.isSelect[0] = true;
            }
        },
        select2:function () {
            this.classOn = 1;
            if(this.isSelect[1] != true){
                for(var i = 0;i < this.isSelect.length;i++){
                    this.isSelect[i] = false;
                }
                this.isSelect[1] = true;
            }
        },
        select3:function () {
            this.classOn = 2;
            if(this.isSelect[2] != true){
                for(var i = 0;i < this.isSelect.length;i++){
                    this.isSelect[i] = false;
                }
                this.isSelect[2] = true;
            }
        },
        nextSelect:function () {
            for(var i = 0;i < this.isSelect.length;i++){

                    if (this.isSelect[i] === true){
                        if(i === 0){
                            this.select2();
                            return;
                        }
                        if(i === 1){
                            this.select3();
                        }
                    }

            }
        },
        previous:function () {

                for(var i = this.isSelect.length-1;i >= 0;i--){

                    if (this.isSelect[i] === true){
                        if(i === 2){
                            this.select2();
                            return;
                        }
                        if(i === 1){
                            this.select1();
                        }
                    }
            }
        }
    },
})


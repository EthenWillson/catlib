var is_full=0;//计数器用于判断是否信息填写完整
var mainbox = new Vue({
    el:'#mainbox',
    data:{
        
    },
    methods: {
         change:function(){
        }
    },
    created(){
            var info=info;

            for (var key in info) {
        
                if (info.hasOwnProperty(key)) {
        
                    if (info[key] != undefined && info[key] != "undefined") {
        
                        if (document.getElementById(key).className == "input") {
                            document.getElementById(key).value = info[key];
                        } 
                        // else {
                        //     document.getElementById(key).innerHTML = mySwich(info[key]);
                        // }
                    }
        
                }
        
            }
        
    },
})
// var button_return = new Vue({
//     el: '#topdiv',
//     method:{
//         backpage : function(){
//             ;
//         }
//     }
// })
document.getElementById("button_return").addEventListener("click",function(){window.location.href="./login.html"})

// Vue.component('mg', {
//     props:['p'],
//     template:'<div><img></div>',
//     data:function()
//     {
//         return{
//             isT:this.p.isT
//         }
//     }
// })
// var point = new Vue({
//     el:"#point",
//     data:{
//         points:[
//             {isT : "../pic/UI/orange_point.svg"},
//             {isT : "../pic/UI/grey_point.svg"},
//             {isT : "../pic/UI/grey_point.svg"},
//             {isT : "../pic/UI/grey_point.svg"}
//         ]
//     }
// })

var dropdown = new Vue({
    el:'#dropdown',
    data:{
         value: 0,
         option: [
             { text: '请选择', value: 0 },
             { text: '东九', value: 1 },
             { text: '西十二', value: 2 },
         ],
    },
})
var location_specific = new Vue({
    el:'#location_specific',
    data:{
        value:undefined,
    }    
 })
// var description = new Vue({
//     el:'#description',
// })

//  Vue.component('photo_and_description',{
//      props:['i'],
//      template:'<van-field id="description" v-model="i.message" rows="1" autosize type="textarea" placeholder="照片的描述（可选）：这张照片是在哪里拍的？什么时候？它在做什么？"/>',
//      data:function(){
//          return{
//          }
//      },

//  })
var photo_and_description = new Vue({
    el:'#photo_and_description',
    data:{
        value: [],
        // items:[
        //     {message:undefined},
        //     {message:"范例"}
        // ]
    },
    methods:{
        // afterRead:function () {
            // function createNode(txt) {
            //     const template = `<div class='child'>${txt}</div>`;
            //     let tempNode = document.createElement('div');
            //     tempNode.innerHTML = template;
            //     return tempNode.firstChild;
            // }
            // const container = document.getElementById('container');
            // container.appendChild(createNode('hello'));
        // }
     }
})
var description = new Vue({
    el:'#description',
    data:{
        value:undefined,
    },
})
// Notify({
//     message: '您未将所有必填项填写',
//     color:'red',
//     duration: 1000,
// });
// var button_next =new Vue({
//     el:'#button_next',
//     data:{
//         isFull:is_full,
//     },
//     methods:{
//         next : function(){
//             if(is_full==0)
//                 {this.$notify('您未将所有必填项填写');}
//             else
//                 {myEncodeUrl('./page_info_2.html')}
//             }
//     },
//     computed: {
//         buttonSrc(){
//             if(is_full==0)
//                 document.getElementById("button_next").src="../pic/UI/next_btn_disabled.svg"
//             else
//                 document.getElementById("button_next").src="../pic/UI/next_btn_abled.svg"
//         }

//     },
// })
var obeject = document.querySelectorAll(".information");



/**
 *更新数据（将数据装入info中）
 * 
 */
function update_obj_data(){

    var key = "undefined";

    obeject.forEach(element => {

        key = element.id;
        info[key] = element.value;

    })
}
/**
 * 判断是否填满
 * 修改标志变量is_full，0表示未填满
 */
function judge(){

    obeject.forEach(element => {

        if ( element.value != undefined && element.value != "undefined"&&element.value !=[]&&element.value !=""&&element.id!="description"&&element.id!="photoList")
            is_full = is_full + 1;
    }) 
}
function judge_email(){
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!myreg.test(info.email))
            return false;
        else
            return true;
        
}
/**
 * 跳转页面
 * 
 */


 document.getElementById("button_next").addEventListener("click", next);
 function next()
 {
     if(is_full<0)
         {alert('您未将所有必填项填写');}
     else
         {
             console.log("wtf");
             myEncodeUrl('./page_info_2.html')}
 }
// 
// var button_next_able =new Vue({
//     el:'#button_next_able',
//     data:{
//         isFull:is_full,
//     }
// })
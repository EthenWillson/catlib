var info = {
    location:undefined,
    location_specific:undefined,
    photoList:[],
    photo_description:undefined,
    name:undefined,
    name_source:undefined,
    name_reaction:false,
    description:undefined,
    sex:NaN,
    age:NaN,
    isSterilized:false,
}

/**
 * 解码url
 * @returns {} url GET name=value
 */
function myDecodeURL() {

    var url = window.location.href;

    var parameterStr = url.split("?")[1];
    
    var parArray = parameterStr.split("&");

    parArray.forEach(element => {

        var parName = element.split("=")[0];
        parName = decodeURI(parName);

        var parValue = element.split("=")[1];        
        parValue = decodeURI(parValue);

        info[parName] = parValue;

    });

}



/**
 * @param url {String} 要跳转的地址
 */
function myEncodeUrl(url,url_value=info){

    var object=url_value;

    var str = "?";

    for (var key in info) {

        if (object.hasOwnProperty(key)) {
        
            if(str[str.length-1] !== "?"){
                str += "&"
            }

            str = str + key + "=" + object[key];
        
        }
    
    }
    
    window.location.href = url + str

}


//以上为函数模块
// myDecodeURL();
window.addEventListener('load',myDecodeURL);

/*
每个页面有不同的跳转地址


document.getElementById("myButton").addEventListener("click",function(){
    window.location.href = myEncodeUrl(<跳转地址>, obj)
});


*/






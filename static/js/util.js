function readJson(filename){
    return new Promise((resolve, reject) => {
        let request;
        let obj;

        if(window.XMLHttpRequest){
            request = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            request = new window.ActiveXObject();
        }else{
            alert("请升级至最新版本的浏览器");
        }
        
        if(request != null){
            request.open("GET", filename, true);
            request.send(null);
            request.onreadystatechange=function(){
                if(request.readyState==4 && request.status==200){
                    obj = JSON.parse(request.responseText);

                    resolve(obj);        // 通过 resolve 参数把成功的结果返回
                    reject('error');     // 通过 reject 参数把错误信息返回

                    return obj;
                }
            };
        }
    });
}
function itheima(options){
    let xhr=new XMLHttpRequest()
    //拼接查询字符串
    let qs=resolveData(options.data)
    console.log(qs)
    if(options.method.toUpperCase()==='GET'){
        // 发起 GET 请求
        xhr.open(options.method,options.url+'?'+qs)
        xhr.send()
    }else if(options.method.toUpperCase()==='POST'){
        xhr.open(options.method,options.url)
        // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(qs)
    }

    //监听请求状态改变的事件
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&xhr.status===200){
            let result=JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}

function resolveData(data){
    let arr=[]
    for(let k in data){
        arr.push(k+'='+data[k])
    }
    return arr.join('&')
}
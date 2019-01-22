
// 深拷贝
function cloneDeep(source){
   if(typeof source !== 'object' || source === null){
       return source
    }
    
    var isArray = Object.prototype.toString.call(source) === '[object Array]'
    var target = isArray ?[]:{}
    
    for(var key in source){
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(typeof source[key] === 'object' && source[key] !== null){
                target[key] = cloneDeep(source[key])
            }else{
                target[key] = source[key] 
            }
        }
    }

    return target
}


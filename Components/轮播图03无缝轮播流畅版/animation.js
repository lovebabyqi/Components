function animation(dom,target,time,callBack){
    var start = {};//存放dom样式的初始值
    var speed = {};//存放dom样式的速度
    for(var attr in target){
        start[attr] = parseFloat(getStyle(dom,attr));
        speed[attr] = (target[attr] - start[attr])/(time*1000);
    }
    var startTime = new Date(); //获取dom运动的初始时间
    var timer = setInterval(function(){ //回调函数的作用是让dom元素运动
        var movedTime = new Date(); //获取最新的时间
        var _t = movedTime - startTime; //计算dom元素运动的时间差 单位是ms
        for(var attr in target){
            if(attr==='opacity'){
                dom.style[attr] = start[attr]+speed[attr]*_t;
            }else{
                dom.style[attr] = start[attr]+speed[attr]*_t+'px';
            }
        }
        if(_t/1000>=time){
            clearInterval(timer);
            for(var attr in target){
                if(attr==='opacity'){
                    dom.style[attr] = target[attr];
                }else{
                    dom.style[attr] = target[attr]+'px';
                }
            };
            callBack&&callBack.call(dom,start,time)
        }
    },16)

    //获取元素的初始值
    function getStyle(dom,attr){
        if(dom.currentStyle){   //如果是IE8以下
            return dom.currentStyle[attr]
        }else{  //如果是IE8以上
            return window.getComputedStyle(dom,null)[attr]
        }
    }
}
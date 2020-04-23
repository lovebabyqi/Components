# Components
## 1.轮播图

> **01.opacity版**
>
> ​	**无滚动动画,通过透明度和z-index控制图片切换过渡.**
>
> **02.节流版**
>
> ​	**position:absolute绝对定位,根据left值设置过渡动画,切换到最后一张图动画完成时,归位图片,实现无缝轮播,最后一张图滚动归位至第一张时,如果动画没有完成,快速点击,过渡动画会混乱,使用节流函数,控制滚动完成再触发下一次滚动.**
>
> **03无缝轮播**
>
> ​	**借助封装dom运动框架,可以实现运动结束,执行下一步操作,滚动流畅.**

## 2.animation运动框架

**参数:**

```javascript
    animation(dom,target,time,callBack)
```

dom:dom     要运动的dom元素
target:{}   根据变化后的样式,    left    right等
time:time   动画时间
callBack    回调    动画结束执行的回调 可选

## Nav导航 hover弹框动画,类似二级三级菜单

**CSS3 anmiation**

示例:

```css
    .class{
        display:none;
        animation-name:pannel-right-top;
        animation-duration:.3s;
    }
    .class:hover{
        display:block;
    }
    @keyframes pannel-right-top {
        0% {
            opacity: .2;
            transform: scale(.3);
            transform-origin: right top;
        }

        100% {
            opacity: 1;
            transform: scale(1);
            transform-origin: right top;
        }
    }
    /*除此以外,就是定位,位置了*/
```


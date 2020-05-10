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

target:{}   根据样式变化差异运动,    left    right等

time:time   动画时间

callBack    回调    动画结束执行的回调 可选

## 3.Nav导航 hover弹框动画,类似二级三级菜单

**CSS3 anmiation**

样式示例:

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

## 4.竖向全屏滚动

类似轮播效果,鼠标滚动,整屏上下滚

​	**节流控制滚动频率,动画完成后可以继续滚动**

```javascript
//mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
//DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
```

## 5.缩略图库透明过渡

关键样式：

```css
:root{
    --fade-time: 0.5s;
}
body{
    margin:20px;
    padding:0;
    background-color: #333;
}
.container{
    max-width:760px;
    margin:0 auto;
    background-color: rgba(0, 0, 0, .7);
}
/*透明度切换时,会闪出背景色,白色刺眼,使用柔和背景*/
.main-img img,
.imgs img{
    width:100%;
    border:#fff solid 3px;
}
/*grid网格布局*/
.imgs{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 3px;
}
/*动画*/
.fadeIn{
    opacity: 0.5;
    animation: fade-in var(--fade-time) ease-in 1 forwards;
}
@keyframes fade-in {
    to{
        opacity: 1;
    }
}
/*媒体查询,页面宽度缩小至maxWidth时变为2列布局*/
@media(max-width: 600px) {
    .imgs{
        grid-template-columns: repeat(2,1fr);
    }
}
```

布局：

```html
<div class="container">
    <div class="main-img">
        <img src="./imgs/img01.jpg" id="current" alt="">
    </div>
    <div class="imgs">
        <img src="./imgs/img01.jpg" alt="">
        <img src="./imgs/img02.png" alt="">
        <img src="./imgs/img03.jpg" alt="">
        <img src="./imgs/img04.png" alt="">
        <img src="./imgs/img05.jpg" alt="">
        <img src="./imgs/img06.jpg" alt="">
        <img src="./imgs/img08.jpg" alt="">
        <img src="./imgs/img08.jpg" alt="">
    </div>
</div>
```

交互：

```javascript
//获取节点
const current = document.getElementById('current')
const imgs = document.querySelector('.imgs')
const img = document.querySelectorAll('.imgs img')
const opacity = 0.6
//监听点击事件
imgs.addEventListener('click',imgClick)
//初始第一张缩略图的不透明度
img[0].style.opacity=opacity

//imgClick处理函数
function imgClick(e){
    img.forEach(img=>(img.style.opacity = 1))
    //点击缩略图切换主体图
    current.src = e.target.src
    //添加fadeIn类名,主题图透明动画,添加以后必须要动画执行完移除,不然之后的动画没了
    current.classList.add('fadeIn')
    //定时器移除动画,注意定时器的时间会影响动画
    setTimeout(()=>(current.classList.remove('fadeIn')),600)
    //点击缩略图透明
    e.target.style.opacity = opacity
}

```


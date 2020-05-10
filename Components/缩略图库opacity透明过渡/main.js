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

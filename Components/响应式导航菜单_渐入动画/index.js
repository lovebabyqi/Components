const burger = document.querySelector('.burger');
const navMentu = document.querySelector('.nav_menu');
const navMenuItems = document.querySelectorAll('.nav_menu li')
burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    navMentu.classList.toggle('open');

    navMenuItems.forEach((item,index)=>{
        console.log(item)
        if(item.style.animation){
            item.style.animation = '';
        }else{
            item.style.animation = `0.2s ease-in slideIn forwards ${index * 0.1 + 0.3}s`;
        }
    })
})
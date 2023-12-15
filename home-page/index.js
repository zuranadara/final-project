const seeMoreBtn = document.querySelector('.see-more-btn');
const flexLeftUp = document.querySelector('.flex-left-up');

seeMoreBtn.addEventListener('click', (e) => {
    flexLeftUp.classList.toogle('show-more');
        if(seeMoreBtn.innerHTML === "see-more" ){
        seeMoreBtn.innerHTML = 'see Less';
    }else{
        seeMoreBtn.innerHTML = 'see more';
    }
    
    
})
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




const prevHeight = window.innerHeight;

window.addEventListener('resize', () => {
  const height = window.innerHeight;
  document.getElementsByClassName('flex-left-up')[0].style.height = height + 'px';
  document.getElementsByClassName('flex-right')[0].style.height = height + 'px';
  console.log(height);
});

window.dispatchEvent(new Event('resize'));




                                // carousel

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.flex-story-inner');
    const items = document.querySelectorAll('.flex-story-item');
    const arrowLeft = document.querySelector('.story-arrow-left');
    const arrowRight = document.querySelector('.story-arrow-right');
    let currentIndex = 0;

    arrowLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    arrowRight.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    const updateCarousel = () => {
        const translateValue = -currentIndex * (items[0].offsetWidth + 10);
        container.style.transform = `translateX(${translateValue}px)`;
    };
});



const container = document.querySelector('.flex-middle-friend-photo-inner');
        const items = document.querySelectorAll('.flex-middle-friend-photo-1');
        let currentIndex = 0;

const prevSlide = () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
};

const nextSlide = () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
    }
};

const updateCarousel = () => {
    const translateValue = -currentIndex * (items[0].offsetWidth + 10);
    container.style.transform = `translateX(${translateValue}px)`;
};

      



document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.flex-left-item:not(.flex-left-item-button)');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    
    const maxVisibleItems = 10;
    
    let expanded = false;

    const toggleVisibility = () => {
        expanded = !expanded;
        const displayValue = expanded ? 'flex' : 'none';

        items.forEach((item, index) => {
            if (index >= maxVisibleItems) {
                item.style.display = displayValue;
            }
        });

        seeMoreBtn.innerHTML = expanded ? '<img src="../registration/photos/see-less.png">See less' : '<img src="../registration/photos/see-more.png">See more';
    };

    seeMoreBtn.addEventListener('click', toggleVisibility);
    toggleVisibility();
});
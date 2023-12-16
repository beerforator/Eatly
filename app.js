const ScrollLine = document.querySelectorAll('.top-restaurants');
const nextBtn = document.querySelectorAll('.btn-next');
const prevBtn = document.querySelectorAll('.btn-prev');
    
ScrollLine.forEach((item, i) => { 
    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += 420; 
    });
    
    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 420; 
    });
});
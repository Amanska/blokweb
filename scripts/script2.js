const testimonials2 = document.querySelector('.testimonials2');
const scroller2 = testimonials2.querySelector('.scroller2');
const nextBtn2 = testimonials2.querySelector('.btn.next2');
const prevBtn2 = testimonials2.querySelector('.btn.prev2');
const itemWidth2 = testimonials2.querySelector('.item2').clientWidth;
  
nextBtn2.addEventListener('click', scrollToNextItem2);
prevBtn2.addEventListener('click', scrollToPrevItem2);
  
function scrollToNextItem2() {
   if(scroller2.scrollLeft < (scroller2.scrollWidth - itemWidth))
       // The scroll position is not at the beginning of last item
       scroller2.scrollBy({left: itemWidth2, top: 0, behavior:'smooth'});
   else
       // Last item reached. Go back to first item by setting scroll position to 0
       scroller2.scrollTo({left: 0, top: 0, behavior:'smooth'});
}
function scrollToPrevItem2() {
   if(scroller2.scrollLeft != 0)
       // The scroll position is not at the beginning of first item
       scroller2.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
   else
       // This is the first item. Go to last item by setting scroll position to scroller width
       scroller2.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
}


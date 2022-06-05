// Images Gallery
var images = document.querySelectorAll('.js--imagegallery');
var imgproduct = document.querySelector('.js--imgproduct img');
var imagesz = document.getElementsByClassName('js--imagegallery');

var currentIndex = 0;

images[currentIndex].classList.add('opacity');

images.forEach(function(item, index){
    item.addEventListener('click', function(){
        currentIndex = index;
        images.forEach(function(item, index){
            item.classList.remove('opacity');
        })
        imgproduct.src = images[currentIndex].src;
        images[currentIndex].classList.add('opacity');
    })
});

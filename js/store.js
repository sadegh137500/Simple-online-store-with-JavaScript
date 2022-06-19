
let { i, imagesGallery, sliderimg } = slider();

function slider() {
    let sliderimg = document.querySelector('.slider-img');
    let imagesGallery = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg',
        'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg'];
    let i = 0;
    return { i, imagesGallery, sliderimg };
}

clickHandler();
function clickHandler() {
    let MainPage = document.querySelector('.MainPage');
    MainPage.onclick = function () {
        gotoPage(4);
    };
    let Productspage = document.querySelector('.Productspage');
    Productspage.onclick = function () {
        gotoPage(3);
    };
    let Gallerypage = document.querySelector('.Gallerypage');
    Gallerypage.onclick = function () {
        gotoPage(1);
    };
    let MartialArts = document.querySelector('.MartialArts');
    MartialArts.onclick = function () {
        gotoPage(5);
    };
}

function gotoPage(pageNumber) {

    if (pageNumber == 1) {
        window.location.href = "gallery1.html";
    }
    else if (pageNumber == 2) {
        window.location.href = "gallery2.html";
    }
    else if (pageNumber == 3) {
        window.location.href = "products.html";
    }
    else if (pageNumber == 4) {
        window.location.href = "home.html";
    }
    else if (pageNumber == 5) {
        window.location.href = "productlist.html";
    }

}

hideShow();
function hideShow() {
    let image_slider = document.querySelectorAll('.image-container img')
        .forEach((images, index) => {
            images.onclick = () => {
                document.querySelector('.popup-image').style.display = 'block';
                document.querySelector('.popup-image img').src = images.getAttribute('src');
                i = index;
            };
        });
    let popup_img = document.querySelector('.popup-image .popup1');
    popup_img.onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    };
    i = 0;
}


function prev() {
    console.log(i);
    if (i <= 0) i = imagesGallery.length; i--;
    return setImg();
}

function next() {
    console.log(i);
    if (i >= imagesGallery.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return sliderimg.setAttribute('src', imagesGallery[i]);
}

function move(element, direction) {
    let xTotalMove = 40;
    let intervalId = setInterval(function () {
        if (xTotalMove > 0) {
            if (direction > 0)
                element.scrollBy(6, 0);
            else if (direction < 0)
                element.scrollBy(-6, 0);
            xTotalMove--;
        }
        if (xTotalMove == 0)
            clearInterval(intervalId);
    }, 10);
}

function moveRight() {
    const popular = document.getElementById('popular');
    move(popular, 1);
}

function moveLeft() {
    const popular = document.getElementById('popular');
    move(popular, -1);
}

function Left() {
    const parent = document.getElementById('parent');
    move(parent, -1);
}

function Right() {
    const parent = document.getElementById('parent');
    move(parent, 1);
}

function swapCSS() {
    let themeSelectionBox = document.getElementById('myDropdownList');
    localStorage.setItem('theme', themeSelectionBox.value);
    let currentTheme = document.getElementById("currentTheme");
    if (currentTheme != null) {
        currentTheme = document.head.removeChild(currentTheme);
    }
    currentTheme = document.createElement('link');
    currentTheme.id = "currentTheme";
    currentTheme.rel = 'stylesheet';
    document.head.appendChild(currentTheme);
    if (themeSelectionBox.value == "theme-light") {
        currentTheme.href = 'css/bootstrap.min (7).css';
    } else if (themeSelectionBox.value == "theme-dark") {
        currentTheme.href = 'css/bootstrap.min.css';
    } else if (themeSelectionBox.value == "theme-purpole") {
        currentTheme.href = 'css/bootstrap.min (8).css';
    }
    else {
        currentTheme.href = 'css/bootstrap.min (3).css';
    }
}

(function () {
    let themeSelectionBox = document.getElementById('myDropdownList');
    if (localStorage.getItem('theme') === 'theme-light') {
        swapCSS('theme-light');
        themeSelectionBox.value = "theme-light";
    } else {
        swapCSS('theme-dark');
        themeSelectionBox.value = "theme-dark";
    }
})();

let { imageContainer, maxitem, pagPrev, pagNext, pagPage } = galerySlide();

const paginationTwo = Math.ceil(imageContainer.length / maxitem);
console.log(paginationTwo);

pagPrev.addEventListener("click", function () {
    Index--;
    showimage();
});
pagNext.addEventListener("click", function () {
    let text = document.querySelector('.galleryText');
    text.innerHTML = "گالری دوم";
    Index++;
    showimage();
});

function galerySlide() {
    let imageContainer = document.querySelector('.image-container').children;
    let pagPrev = document.querySelector('.pagPrev');
    let pagNext = document.querySelector('.pagNext');
    let pagPage = document.querySelector('.pageNumber');
    let maxitem = 9;
    Index = 1;
    return { imageContainer, maxitem, pagPrev, pagNext, pagPage };
}

function showimage() {
    for (let i = 0; i < imageContainer.length; i++) {
        imageContainer[i].classList.remove("show");
        imageContainer[i].classList.add("hide");

        if (i >= (Index * maxitem) - maxitem && i < Index * maxitem) {
            imageContainer[i].classList.remove("hide");
            imageContainer[i].classList.add("show");

        }
        pagPage.innerHTML = Index;
    }
}
window.onload = showimage();

const shoppingItem = document.querySelector(".shopping-item").children;
const previous = document.querySelector(".previ");
const nextItem = document.querySelector(".nexti");
const pageslider = document.querySelector(".page-num");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");
let sorting = document.querySelector('#sort');
let criteria = sorting.valueOf('option');
const maxItem = 10;
let index = 1;

const pagination = Math.ceil(shoppingItem.length / maxItem);
console.log(pagination);

const _UserData = [
    { id: 1, pic: "img/113677817.jpg", title: "کیسه بوکس", price: 159.000 },
    { id: 2, pic: "img/hand.jpg", title: "دستکش بوکس", price: 389.000 },
    { id: 3, pic: "img/hat.jpg", title: "کلاه تکواندو", price: 120.000 },
    { id: 4, pic: "img/5250191.jpg", title: "لباس کاراته", price: 100.000 },
    { id: 5, pic: "img/nanchico.jpg", title: "نانچیکو", price: 230.500 },
    { id: 6, pic: "img/lase.jpg", title: "محافظ لثه", price: 42.000 },
    { id: 7, pic: "img/hogo.jpg", title: "هوگو تکواندو", price: 150.000 },
    { id: 8, pic: "img/band.jpg", title: "کمربند کاراته", price: 37.000 },
    { id: 9, pic: "img/kongfu.jpg", title: "لباس کنگفو", price: 216.500 },
    { id: 10, pic: "img/kamarband.jpg", title: "کمربند تکواندو", price: 27.000 },
    { id: 11, pic: "img/short.jpg", title: "شورت ووشو", price: 351.000 },
    { id: 12, pic: "img/tnab.jpg", title: "طناب ورزشی", price: 46.000 },
    { id: 13, pic: "img/jodo.jpg", title: "لباس جودو", price: 200.000 },
    { id: 14, pic: "img/saedband.jpg", title: "ساعدبند تکواندو", price: 170.000 },
    { id: 15, pic: "img/bandbox.jpg", title: "باند بوکس", price: 54.900 },
    { id: 16, pic: "img/hogopa.jpg", title: "هوگو تکواندو", price: 130.000 },
    { id: 17, pic: "img/sagh.jpg", title: "ساق بند", price: 140.000 },
    { id: 18, pic: "img/cup.jpg", title: "کاپ تکواندو", price: 49.000 },
    { id: 19, pic: "img/ropa.jpg", title: "روپا تکواندو", price: 122.000 },
    { id: 20, pic: "img/racket.jpg", title: "میت راکتی", price: 179.500 },
    { id: 21, pic: "img/guard.jpg", title: "محافظ ساق", price: 73.500 },
    { id: 22, pic: "img/mit2.jpg", title: "میت تکواندو", price: 260.500 },
    { id: 23, pic: "img/lase.jpg", title: "محافظ لثه", price: 200.000 },
    { id: 24, pic: "img/defence.jpg", title: "لباس دفاع شخصی", price: 164.700 },
    { id: 25, pic: "img/kisebox.jpg", title: "کیسه بوکس", price: 950.550 },
    { id: 26, pic: "img/tablo.jpg", title: "تابلو رزمی", price: 179.500 },
    { id: 27, pic: "img/dastkesh.jpg", title: "دستکش کاراته", price: 125.500 },
    { id: 28, pic: "img/kisebox savrena.jpg", title: "کیسه بوکس", price: 900.275 },
    { id: 29, pic: "img/razmishort.jpg", title: "شورت رزمی", price: 340.000 },
    { id: 30, pic: "img/standbox.jpg", title: "کیسه بوکس", price: 990.054 },
    { id: 31, pic: "img/mmi.jpg", title: "دستکش ام ام ای", price: 809.000 },
    { id: 32, pic: "img/knife.jpg", title: "شمشیر سامورایی", price: 540.000 },
    { id: 33, pic: "img/voshohogo.jpg", title: "هوگو ووشو", price: 101.000 },
    { id: 34, pic: "img/top.jpg", title: "تاپ ووشو", price: 145.000 },
    { id: 35, pic: "img/chob.jpg", title: "چوب ووشو", price: 110.000 },
    { id: 36, pic: "img/kolah.jpg", title: "کلاه رزمی", price: 135.000 },
    { id: 37, pic: "img/moitai.jpg", title: "دستکش مویتای", price: 190.000 },
    { id: 38, pic: "img/headband.jpg", title: "هدبند جودو", price: 34.000 },
    { id: 39, pic: "img/shoes.jpg", title: "کفش کشتی", price: 224.000 },
    { id: 40, pic: "img/dresskoshti.jpg", title: "دوبنده کشتی", price: 240.000 },
    { id: 41, pic: "img/kisebolghari.jpg", title: "کیسه بلغاری", price: 651.000 },
    { id: 42, pic: "img/keshi.jpg", title: "باند بوکس", price: 21.000 },
    { id: 43, pic: "img/childbox.jpg", title: "کیسه بوکس", price: 47.000 },
    { id: 44, pic: "img/shen.jpg", title: "کیسه شنی", price: 170.000 },
    { id: 45, pic: "img/baleshti.jpg", title: "میت بالشتی", price: 147.000 },
    { id: 46, pic: "img/dreestekvando.jpg", title: "لباس تکواندو", price: 235.400 },
    { id: 47, pic: "img/jodoband.jpg", title: "کمربند جودو", price: 63.000 },
    { id: 48, pic: "img/dressdefence.jpg", title: "لباس دفاع شخصی", price: 164.700 },
    { id: 49, pic: "img/plastic nanchico.jpg", title: "نانچیکو پلاستیکی", price: 40.000 },
    { id: 50, pic: "img/dastkeshtekvando.jpg", title: "دستکش تکواندو", price: 95.000 }
];

localStorage.setItem('UserData',
    JSON.stringify(_UserData));
let _retrieveUserData =
    JSON.parse(localStorage.getItem('UserData'));
console.log(_retrieveUserData);

page1.addEventListener("click", function () {
    index = 1;
    check();
    showItems();
})

page2.addEventListener("click", function () {
    index = 2;
    check();
    showItems();
})

page3.addEventListener("click", function () {
    index = 3;
    check();
    showItems();
})

page4.addEventListener("click", function () {
    index = 4;
    check();
    showItems();
})

page5.addEventListener("click", function () {
    index = 5;
    check();
    showItems();
})

previous.addEventListener("click", function () {
    index--;
    check();
    showItems();
})
nextItem.addEventListener("click", function () {
    index++;
    check();
    showItems();
})


function check() {
    if (index == pagination) {
        nextItem.classList.add("disabled");
    }
    else {
        nextItem.classList.remove("disabled");
    }
    if (index == 1) {
        previous.classList.add("disabled");
    }
    else {
        previous.classList.remove("disabled");
    }

}

function showItems() {
    for (let i = 0; i < shoppingItem.length; i++) {
        shoppingItem[i].classList.remove("show");
        shoppingItem[i].classList.add("hide");

        if (i >= (index * maxItem) - maxItem && i < index * maxItem) {
            shoppingItem[i].classList.remove("hide");
            shoppingItem[i].classList.add("show");

        }

    }

}

sortTitle();
console.log(_UserData);

window.onload = function () {
    showItems();
    check();
}

function sortTitle() {
    _UserData.sort(function (a, b) {
        if (a.title.localeCompare(b.title) == -1) {
            return -1;
        }
        else {
            return 1;
        }

    });
}


// let sort = document.getElementById('sort');
// sort.addEventListener("change", function () {

//     sortTitle();
// });




/*     newFunction_1();


function newFunction_1() {
    _UserData.sort(function (a, b) {
        if (a.price > b.price) {
            return 1;
        }
        else {
            return -1;
        }

    });
} */


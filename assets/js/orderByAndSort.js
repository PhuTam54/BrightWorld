
// PRODUCT - ORDERBY BUTTON 
// Show
// const activeBtns = document.querySelectorAll('.js-btn')
// const activeBtn1 = document.querySelector('.btn1')
// const activeBtn2 = document.querySelector('.btn2')
// const activeBtn3 = document.querySelector('.btn3')

// activeBtn1.addEventListener('click', function() {
//     activeBtns.classList.add('active')
// })

// activeBtn2.addEventListener('click', function() {
//     activeBtn1.classList.remove('active')
//     activeBtn2.classList.add('active')
//     activeBtn3.classList.remove('active')
// })

// activeBtn2.addEventListener('click', function() {
//     activeBtn1.classList.remove('active')
//     activeBtn2.classList.remove('active')
//     activeBtn3.classList.add('active')
// })

// SEARCH - ORDER BY
angular.module("app", []);
angular.module("app").controller("controller", function (){
var vm = this;
// vm.title = "Learn Angular by example";
vm.searchInput = "";
// vm.shows = [
//     {
//         title: "Doi mat co lua",
//         author: "Nguyen Hung Son",
//         favorite: true
//     },
//     {
//         title: "Life of Pi",
//         author: "Davan",
//         favorite: false
//     },
//     {
//         title: "Learn Angular by example",
//         author: "Fpt-Aptech",
//         favorite: true
//     },
//     {
//         title: "Ho nha trai",
//         author: "Nguyen Anh Tu",
//         favorite: false
//     },
//     {
//         title: "Hoc code today",
//         author: "Fpt",
//         favorite: true
//     }
// ];
vm.orders = [
{
    key: "select__option-link",
    reverse: false
},
{
    key: "select__option-link",
    reverse: true
}
];
vm.order = vm.orders[0];
});
var price = document.getElementsByClassName('price')[0].getElementsByTagName('span')[0];
var add = document.getElementsByClassName('num')[0].getElementsByClassName('add')[0];
var reduce = document.getElementsByClassName('num')[0].getElementsByClassName('reduce')[0];
var inp = document.getElementsByClassName('num')[0].getElementsByTagName('input')[0];
var all = document.getElementsByClassName('all')[0].getElementsByTagName('span')[0];
var money = document.getElementsByClassName('cost')[0];
var boxOne = document.getElementById('checkOne');
var oBtn = document.getElementById('btn');
var oDel = document.getElementsByClassName('del')[0];
var show =  document.getElementsByClassName('show')[0];
var num = 1;
var newNum = 0;
bindEvent();

function bindEvent() {
    add.onclick = function () {
        num++;
        inp.value = num;
        newNum = num;
        // console.log(newNum)
        fillPrice();
    }
    reduce.onclick = function () {
        if (num || num > 1) {
            num--;
            inp.value = num;
            newNum = num;
            // console.log(newNum)
        }
        fillPrice();
    }
    boxOne.onclick = checkboxOnclick;
}
// console.log(newNum);

function fillPrice() {
    var cost = parseInt(price.innerHTML);
    var allPrice = cost * newNum;
    all.innerHTML = allPrice;
}

function checkboxOnclick() {
    var _this = this || arguments[0];
    if (this.checked == true) {
        money.innerHTML = all.innerHTML;
        oBtn.style.backgroundColor = "#f40";
    } else {
        money.innerHTML = 0;
        oBtn.style.backgroundColor = "#9c9c9c";
    }
}
oBtn.onclick = function () {
    alert('支付成功！');
}
oDel.onclick = function () {
    show.style.display = "none";
}

var sliderList = document.getElementsByClassName("sliderList")[0];
var timer = null;
var moveWidth = sliderList.children[0].offsetWidth;
var num = sliderList.children.length - 1;
var index = 0;
var oSpanArray = document.getElementsByClassName("oList")[0].getElementsByTagName("span");
var leftBtn = document.getElementsByClassName('left')[0];
var rightBtn = document.getElementsByClassName('right')[0];
var lock = true;
leftBtn.onclick = function () {
    aotuMove("right->left");
}
rightBtn.onclick = function () {
    aotuMove("left->right");
}
for(var i = 0; i < oSpanArray.length; i ++) {
    (function (myIndex) {
        oSpanArray[i].onclick = function () {
         lock = false;
         clearTimeout(timer);
        index = myIndex;
       startMove(sliderList, {left: -index * moveWidth}, function () {
           lock = true;
           timer = setTimeout(aotuMove, 1500);
           changeIndex(index);
       })
        }
    }(i))
}
function aotuMove(direction) {
    if (lock) {
        lock = false;
        clearTimeout(timer);
        if (!direction || direction == "left->right") {
            index ++;
            startMove(sliderList, { left: sliderList.offsetLeft - moveWidth }, function () {
                if (sliderList.offsetLeft == -num * moveWidth) {
                    index = 0;
                    sliderList.style.left = "0px";
                }
                timer = setTimeout(aotuMove, 1500);
                lock = true
                changeIndex(index);
            })
        } else if (direction == "right->left") {
            if (sliderList.offsetLeft == 0) {
                index = num;
                sliderList.style.left = -num * moveWidth + "px";
            }
            index --;
            startMove(sliderList, { left: sliderList.offsetLeft + moveWidth }, function () {
                timer = setTimeout(aotuMove, 1500);
                lock = true;
                changeIndex(index);
            })
        }
    }
}
function changeIndex(_index) {
    for(var i = 0; i < oSpanArray.length; i ++) {
        oSpanArray[i].className = "";
    }
    oSpanArray[_index].className = "active";
}
timer = setTimeout(aotuMove, 1500)
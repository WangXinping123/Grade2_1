var index = 0;
var smallImg = document.getElementsByClassName('cleftT')[0];
var smallBottom = document.getElementsByClassName('cleftBImg');
smallBottom[index].parentNode.style.border = '2px solid #FFA500';
smallImg.style.background = 'url("img/pp'+index+'.jpeg")no-repeat';
smallImg.style.backgroundSize = 'contain';

for(var i = 0;i<smallBottom.length;i++){
	(function (i){
		smallBottom[i].onmouseover = function (){
			index = i;
			smallBottom[index].parentNode.style.border = '2px solid #FFA500';
			smallImg.style.background = 'url("img/pp'+index+'.jpeg")no-repeat';
			smallImg.style.backgroundSize = 'contain';//*#FFA500
		}
	}(i))
}
// 显示选中的型号
var good04 = document.getElementsByClassName('good04')[0];
var one = document.getElementsByClassName('one')[0];
var two = document.getElementsByClassName('two')[0];
good04.innerText = '"'+one.innerText+'"';
one.onclick = function (){
	good04.innerText = '"'+one.innerText+'"';
	one.style.background="url('img/duigou.png')no-repeat";
	one.style.backgroundPosition="56px 16.5px";
	one.style.border='1px solid #fe0d4a';
	two.style.background="none";
	two.style.border = 'none';
}
two.onclick = function (){
	good04.innerText = '"'+two.innerText+'"';
	two.style.background="url('img/duigou.png')no-repeat";
	two.style.backgroundPosition="56px 16.5px";
	one.style.background="none";
	two.style.border='1px solid #fe0d4a';
	one.style.border = 'none';
}

var pl = document.getElementsByClassName('cleft4')[0];
var nr = document.getElementsByClassName('cright')[0];

nr.onclick = function (){
	smallBottom[index].parentNode.style.border = 'none';
	index++;
	if(index>1){
		index=0;
	}
	smallBottom[index].parentNode.style.border = '2px solid #FFA500';
	smallImg.style.background = 'url("img/pp'+index+'.jpeg")no-repeat';
	smallImg.style.backgroundSize = 'contain';
}

pl.onclick = function (){
	smallBottom[index].parentNode.style.border = 'none';
	index--;
	if(index<0){
		index=1;
	}
	smallBottom[index].parentNode.style.border = '2px solid #FFA500';
	smallImg.style.background = 'url("img/pp'+index+'.jpeg")no-repeat';
	smallImg.style.backgroundSize = 'contain';
}

var good01 = document.getElementsByClassName('good01')[0];
good01.onmouseover = function (){
	if(parseInt(input.value)>=1){
		good01.style.cursor = 'pointer';
		
	}/*else{
		good01.style.cursor = 'not-allowed';
	}*/
}
var add = document.getElementsByClassName('ic')[0];
var input = document.getElementsByClassName('good02')[0];

add.onmouseover = function (){
	if(parseInt(input.value)<=5){
		add.style.cursor = 'pointer';
	}
}

// 商品数目增减部分
add.onclick = function (){
	if(input.value<5){
		input.value=parseInt(input.value)+1;
	}else{
		add.style.cursor = 'not-allowed';
	}
	
}
good01.onclick = function (){
	if(input.value>1){
		input.value=parseInt(input.value)-1;
	}
}


var bigImg = document.getElementsByClassName('crbig')[0];
var move = document.getElementsByClassName('cleft3')[0];
smallImg.onmouseover = function (){
	move.style.display = 'inline-block';
	bigImg.style.display = 'block';
	bigImg.children[0].src='img/pp'+index+'.jpeg';
	smallImg.onmousemove = function (e){
		var e = e||window.event;
		moveLeft = e.clientX - move.offsetWidth*0.5 -smallImg.offsetParent.offsetLeft-move.offsetParent.offsetLeft;
		moveTop = e.clientY - move.offsetHeight*0.5 - smallImg.offsetParent.offsetTop-move.offsetParent.offsetTop;
		if(moveLeft<0){
			moveLeft = 0;
		}else if(moveLeft>=smallImg.offsetWidth-move.offsetWidth){
			moveLeft=smallImg.offsetWidth-move.offsetWidth;
		}
		if(moveTop<0){
			moveTop = 0;
		}else if(moveTop>=smallImg.offsetHeight-move.offsetHeight){
			moveTop=smallImg.offsetHeight-move.offsetHeight;
		}
		move.style.left = moveLeft+'px';
		move.style.top = moveTop+'px';

		bigImg.children[0].style.left = -moveLeft/(smallImg.offsetWidth/bigImg.children[0].offsetWidth)+move.offsetWidth*1.5+'px';
		bigImg.children[0].style.top = -moveTop/(smallImg.offsetHeight/bigImg.children[0].offsetHeight)+move.offsetWidth*1.5+'px';
	}
	
}
smallImg.onmouseout = function (){
	move.style.display = 'none';
	bigImg.style.display = 'none';
}

// 购物车 蒙版
var burCar = document.getElementsByClassName('bt2')[0];
var mb = document.getElementsByClassName('cenbig')[0];
var money = document.getElementsByClassName('money')[0];

burCar.onclick = function (){
	mb.style.display = 'block';
	money.style.display='block'; 
}
// 取消蒙板
var cenbig = document.getElementsByClassName('cenbig')[0];
var money1 = document.getElementsByClassName('money1')[0];
money1.onclick = function (){
	cenbig.style.display = 'none';
	money.style.display='none';
}
var money2 = document.getElementsByClassName('money2')[0];
money2.onclick = function (){
	cenbig.style.display = 'none';
	money.style.display='none';
}

var money3 = document.getElementsByClassName('money3')[0]
money3.onclick = function (){
	cenbig.style.display = 'none';
	money.style.display='none';
}

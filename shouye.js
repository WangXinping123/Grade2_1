var Now = 0;

var slider = document.getElementsByClassName('slider')[0];
var slide = document.getElementsByClassName('slide');
var dot=document.getElementsByClassName('dot')[0];

for(var d=0;d<slide.length;d++){
	var dot_m = document.createElement('slider');
	dot_m.className='dot_m';
	dot_m.innerText = d+1;
	dot.appendChild(dot_m);
}

// 点击跳转
var pic = document.getElementsByClassName('picture');

for(pc = 0;pc<pic.length;pc++){
	pic[pc].onclick = function (){
		location.href = 'xiangqing.html';
	}
}

// 钱的变化，监听select值改变
var count = document.getElementsByClassName('count')[0];
var mon2 = document.getElementsByClassName('mon2')[0];
var sel = document.getElementsByTagName('select')[0];

mon2.onclick = function (){
	count.innerText = '¥'+sel.value;
}


// 头部悬浮
var top2 = document.getElementsByClassName('top2')[0];
var fd = document.getElementsByClassName('fd')[0];

window.onscroll = function (){
	if(window.scrollY>=100){
		top2.style.position = 'fixed';
		top2.style.width = '100%';
		fd.style.display = 'block';
	}else if(window.scrollY<100){
		top2.style.position = 'relative';
		top2.style.width = '1180px';
		fd.style.display = 'none';
	}
}

// 右边   悬浮
var ew = document.getElementsByClassName('erw')[0];
var righter = document.getElementsByClassName('righter')[0].children[0].children;
for(var x = 0; x<righter.length; x++){
	(function (x){
		righter[x].onmouseover = function (){
			buffer(righter[x],{right:-20});
			if(x==2){
				ew.src = 'img/erwei.png';
			}
		}
		righter[x].onmouseout = function (){
			buffer(righter[x],{right:-95});
			if(x==2){
				ew.src = 'img/serwei.png';
			}
		}
	}(x))
}

// 复制公告栏
var info02 = document.getElementsByClassName('info02')[0];
var info03=document.getElementsByClassName('info03')[0];

li = info03.cloneNode(true);
li.style.top = '373px';
info02.appendChild(li);

var liUl = document.getElementsByClassName("info03")[1];
// 设置公告栏滚动
var timerr;
timerr  = setInterval(function (){
	info03.style.top =parseInt(getCSS(info03,'top'))-5+'px'; 
	liUl.style.top = parseInt(getCSS(liUl,'top'))-5+'px';
	if(parseInt(getCSS(info03,'top'))<=-373){
		info03.style.top = '373px';
	}
	if(parseInt(getCSS(liUl,'top'))<=-373){
		liUl.style.top = '373px';
	}
},200)
info02.onmouseover = function (){
	clearInterval(timerr);
}
info02.onmouseout=function (){
	timerr = setInterval(function (){
	info03.style.top =parseInt(getCSS(info03,'top'))-5+'px'; 
	liUl.style.top = parseInt(getCSS(liUl,'top'))-5+'px';
	if(parseInt(getCSS(info03,'top'))<=-373){
		info03.style.top = '373px';
	}
	if(parseInt(getCSS(liUl,'top'))<=-373){
		liUl.style.top = '373px';
	}
},200)
}

var dot_m = document.getElementsByClassName('dot_m');

for(var j = 1;j<slide.length;j++){
	slide[j].style.left = '800px';
}

clickN()

// 自动轮播
var timeS = setInterval(function (){
	buffer(slide[Now],{"left":-800})
	Now++;
	if(Now>=slide.length){
		Now=0;
	}
	slide[Now].style.left = '800px';
	buffer(slide[Now],{"left":0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[Now].id = 'current';
},2000)

slider.onmouseover=function (){
	clearInterval(timeS);
	dot1.style.display = 'flex';
}

slider.onmouseout=function (){
		dot1.style.display = 'none';
		timeS = setInterval(function (){
		buffer(slide[Now],{"left":-800})
		Now++;
		if(Now>=slide.length){
			Now=0;
		}
		slide[Now].style.left = '800px';
		buffer(slide[Now],{"left":0});
		for(var t = 0;t<dot_m.length;t++){
			dot_m[t].id = '';
		}
		dot_m[Now].id = 'current';
},2000)
}

function clickN(){
	for(var i = 0;i<dot_m.length;i++){
	dot_m[Now].id = 'current';
	(function (i){
		dot_m[i].onclick = function (){

			if(i>Now){
				buffer(slide[Now],{left:-800});
				Now=i;
				if(Now>=slide.length){
					Now = 0;
				}
				slide[Now].style.left='800px';
			}else if(i<Now){
				buffer(slide[Now],{left:800});
				Now=i;
				if(Now<0){
					Now = slide.length-1;
				}
				slide[Now].style.left='-800px';
			}
			buffer(slide[Now],{left:0});
			for(var t = 0;t<dot_m.length;t++){
				dot_m[t].id = '';
			}
			dot_m[Now].id = 'current';
		}

	}(i))
}
}


// 轮播图左右按钮
var dot1 = document.getElementsByClassName('dot1')[0];

dot1.children[0].onclick = function (){
	buffer(slide[Now],{left:800});
	Now--;
	if(Now<0){
		Now = slide.length-1;
	}
	slide[Now].style.left='-800px';
	buffer(slide[Now],{left:0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[Now].id = 'current';
}
dot1.children[1].onclick = function (){
	buffer(slide[Now],{left:-800});
	Now++;
	if(Now>=slide.length){
		Now = 0;
	}
	slide[Now].style.left='800px';
	buffer(slide[Now],{left:0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[Now].id = 'current';
}

function buffer(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var f = true;
		for(var i in json){
			// 透明度
			if(i === 'opacity'){
				var target = parseInt(parseFloat(json[i])*100);
				var loc = parseInt(parseFloat(getCSS(obj,i))*100)||100;
			}else if(i ==='scrollTop'){
				//滑动条
				loc = Math.ceil(obj.scrollTop);
				target = parseInt(json[i]);

			}else{
				var target = json[i];
				var loc = parseInt(getCSS(obj,i))||0;
			}
			var speed = (target-loc)*0.2;
			speed = (target>=loc)?Math.ceil(speed):Math.floor(speed);

			if(i === 'opacity'){
				obj.style.opacity = (loc+speed)/100;
				obj.style.filter="alpha(opacity:"+(loc+speed)+")";
			}else{
				obj.style[i] =loc+speed+'px';
			}
			if(loc!==target){
				f = false;
			}
		}

		if(f){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},20);
}

function getCSS(obj,attr){
	 if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}

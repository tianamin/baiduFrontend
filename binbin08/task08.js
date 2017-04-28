
var arr=[];
var timer=null;
var dpsBtn=document.getElementsByTagName('button')[0];
var bpsBtn=document.getElementsByTagName('button')[1];
var searchBtn1=document.getElementsByTagName('button')[2];
var searchBtn2=document.getElementsByTagName('button')[3];
var root=document.getElementById('root');
var txt = document.getElementsByTagName("input")[0].value;

dpsBtn.onclick=function(){

       initialize();
       depthSearch(root);
       change();
};
bpsBtn.onclick=function(){
	
	   initialize();
	   broadthSearch(root);
       change();
};
searchBtn1.onclick=function(){
	//var txt = document.getElementsByTagName("input")[0].value;
	initialize();
	depthSearch(root);
	
		if(txt != ""){
			changeColor(txt);
		}else{
			alert("请输入要查询的字符。");
        } 
};

searchBtn2.onclick=function () {

	//var txt = document.getElementsByTagName("input")[0].value;
	initialize();
	broadthSearch(root);
	if(txt != ""){
		changeColor(txt);
	}else{
		alert("请输入要查询的字符。");
    } 
};

function  depthSearch(node){
    if (node!=null) {
    	arr.push(node);
    	for (var i = 0; i < node.children.length; i++) {
    		depthSearch(node.children[i]);
    	}

    }
}
function broadthSearch(node){
    if (node!=null) {
    	arr.push(node);
    	broadthSearch(node.nextElementSibling);
    	node=arr[index++];
    	broadthSearch(node.firstElementChild);
    }
}
function initialize(){
		//每次调用广度优先遍历都要初始化index值，否则广度优先遍历只能执行一次，因为index是全局变量。
	index = 0;
	arr = [];
	clearInterval(timer);
	var divList = document.getElementsByTagName("div");
	for(var i = 0; i < divList.length; i++){
		divList[i].style.backgroundColor = "#fff";
	}
}

function change(){
	var i = 0;
	arr[i].style.backgroundColor = "#f00";
	timer = setInterval(function(){
		i++;
		if(i < arr.length){
			arr[i-1].style.backgroundColor = "#fff";	
			arr[i].style.backgroundColor = "#f00";
		}
		else{
			clearInterval(timer);
			arr[arr.length-1].style.backgroundColor = "#fff";
		}
	},500);
}
function changeColor(txt){
		//若第一次搜索就匹配成功，则不再查询。
	var i = 0;
	if(arr[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "") == txt){
		arr[i].style.backgroundColor = "#00f";
	}else{
		arr[i].style.backgroundColor = "#f00";
		timer = setInterval(function(){
			i++;
			if(i < arr.length){
				arr[i-1].style.backgroundColor = "#fff";	
				if(arr[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "") == txt){
					arr[i].style.backgroundColor = "#00f";
					clearInterval(timer);
				}else{
					arr[i].style.backgroundColor = "#f00";
				}
			}else{
				clearInterval(timer);
				arr[arr.length-1].style.backgroundColor = "#fff";
				if(txt != null){
					alert("未搜索到该字符。");
				}
			}
		},500);
	}
}
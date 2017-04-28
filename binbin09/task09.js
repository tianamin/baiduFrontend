
var arr=[];
var timer=null;
var dpsBtn=document.getElementsByTagName('button')[0];
var bpsBtn=document.getElementsByTagName('button')[1];
var addElem=document.getElementsByTagName('button')[2];
var removeElem=document.getElementsByTagName('button')[3];
var root=document.getElementById('root');
var txt = document.getElementsByTagName("input")[0].value;
var targetNode = null;
var EventUtil = {
		addHandler:function(element, type, handler){
			if(element.addEventListener){
				element.addEventListener(type, handler, false);
			}else if(element.attachEvent){
				element.attachEvent("on" + type, handler);
			}else{
				element["on" + type] = handler;
			}
		}
};

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
addElem.onclick=function(){
	//var txt = document.getElementsByTagName("input")[0].value;
	//
	if(targetNode != null){

		if(txt !=""){
			var txtArray = [].concat(txt);
			addNode.apply(targetNode,txtArray);
			highlight();
			txt = "";
		}else{
			alert("请输入想要添加的内容。");
		}
	}else{
		alert("请先选中节点。");
    } 
};

removeElem.onclick=function () {
     

	if(targetNode != null){
			var divList = document.getElementsByTagName("div");
			if(divList.length >1){
				deleteNode.call(targetNode);
			}else{
				alert("节点数目已为1，请勿删除。");
			}
	}else{
			alert("请先选中节点。");
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

function addNode(txt){
	var parent = this;
	var newNode = document.createElement("div");
	newNode.innerHTML = txt;
	newNode.className = "newNode";
	newNode.style.backgroundColor = "#fff";
	parent.appendChild(newNode);
}

	//删除节点
function deleteNode(){
	var parent = this.parentNode;
	parent.removeChild(this);
	//更新targetNode,否则targetNode不存在，即null,使之父节点不存在，浏览器报错。
	targetNode = null;
}
function highlight(){
		var divList = document.getElementsByTagName("div");
		for(var cur = 0;cur < divList.length; cur++){
			EventUtil.addHandler(divList[cur], "click", function(event){
				initialize();
				this.style.backgroundColor = "#0f0";
				event.stopPropagation();
				targetNode = this;
			});
		}
}
highlight();
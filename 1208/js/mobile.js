window.onload=function () {
	function $(id) { return document.getElementById(id);}
	var pic=$('pic');
	var msg=$('msg');
	var send=$('send');
	var onOff = false;
	// 点击更换头像效果
	pic.onclick=function () {
		// alert(pic.className);
		if (onOff) {
			pic.src="./imgs/2.png";
			onOff = false;					 
		}else{
			pic.src="./imgs/1.png";
			onOff=true;
		}
	};
	// 点击发送时
	send.onclick=function () {
		
		var img=onOff?"./imgs/1.png":"./imgs/2.png";
		var cs=onOff?"left":"right";
		var content='<div class='+cs+'><img src='+img +' alt=""><p>'+msg.value+'</p></div>'; 
		// var content='<p><img src='+img+'><span>'+msg.value+'</span></p>';
		//插入
		$('con').innerHTML=content+$('con').innerHTML;	
	};
};
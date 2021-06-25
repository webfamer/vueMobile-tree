var ofenshu = document.getElementById("fenshu");
		var odaojishi = document.getElementById("daojishi");
		var yinyue = document.getElementById("yinyue");

		var fenshu = 0;
		var daojishi = 50;

		//当页面上出现功能类似、属性类型，什么都类似的东西
		//应该封装成一个类
		function Ballon(){
			this.top = 600;
			this.left = Math.random() * 1200;
			this.score = parseInt(Math.random() * 7) + 1;

			this.init();
			this.fly();
		}
		//初始化
		Ballon.prototype.init = function(){
			//创建DOM，并且给这个对象的dom属性
			this.dom = document.createElement("div");
			//更改类名
			this.dom.className = "ballon";
			//追加这个DOM元素
			document.body.appendChild(this.dom);
			//设置样式
			this.dom.style.left = this.left + "px";
			this.dom.style.top = this.top + "px";
			//设置背景定位，背景定位要根据自己的分数来设置。
			//精灵图有bug，分数和自己的真实用图差了1。
			var x = -(this.score - 1) % 4 * 96;
			var y = -parseInt((this.score - 1) / 4) * 120;
			this.dom.style.backgroundPosition = x + "px " + y + "px";

			var self = this;
			//绑定监听
			this.dom.onclick = function(){
				self.bomb();
				//累加分数
				fenshu += self.score;
				ofenshu.innerHTML = fenshu;

				//音效
				yinyue.load();
				yinyue.play();
			}
		}
		Ballon.prototype.fly = function(){
			//备份this
			var self = this;
			//自己有自己的定时器
			this.timer = setInterval(function(){
				//更改top值
				self.top -= 2 * self.score;
				//小于-100
				if(self.top < -100){
					self.bomb();
				}
				self.dom.style.top = self.top + "px";
			},20);
		}
		//爆炸方法
		Ballon.prototype.bomb = function(){
			clearInterval(this.timer);
			//移除DOM
			document.body.removeChild(this.dom);
		}

		var frameCount = 0; 
		//让定时器每600毫秒一个球
		var timer = setInterval(function(){
			frameCount++;
			if(frameCount % 2 == 0){
				daojishi --;
				odaojishi.innerHTML = daojishi;
			}

			if(daojishi == 0){
				clearInterval(timer);
				alert("GAME OVER 你的分数是" + fenshu);
			}
			new Ballon();
		},600);
	 
/*                 1. 扩展 Array 方法 extProc，可以实现如下效果：["kitty","puppy","swan","penguin","giraffe","penguin","swan","dolphin"] => ["swan","giraffe","dolphin","penguin","puppy","kitty"]
                根据数组中字符串的倒数第二个字符进行排序，且去除重复的部分。例：["kitty","puppy","swan","penguin","giraffe","penguin","swan","dolphin"].extProc() = ["swan","giraffe","dolphin","penguin","puppy","kitty"] */

                        
                        // 去掉重复
                        Array.prototype.removeDuplicate = function(){
                        	var result = []
                        	for (var i = 0; i < this.length; i++) {
								 if(result.indexOf(this[i]) == -1){
									 result.push(this[i]);
								 }
								
							}
                        	return result;
                        }
                        
                        // 截取倒数第二位，重新组装数组
                        Array.prototype.reverseSecond = function(flag){
                        	var secondArray = [];
                        	var firstStr = "";
                        	var secondStr = "";
                        	// 截取倒数第二位
                        	if(flag){
	                        	for (var i = 0; i < this.length; i++) {
	                        		firstStr = this[i].substr(0, this[i].length-2);
	                        		secondStr = this[i].substr(this[i].length-2);
	                        		secondArray[i] = secondStr + firstStr;
								}
                        	}
                        	// 截取顺数第二位
                        	else {
	                        	for (var i = 0; i < this.length; i++) {
	                        		firstStr = this[i].substr(0, 2);
	                        		secondStr = this[i].substr(2,this[i].length-1);
	                        		secondArray[i] = secondStr + firstStr;
								}
                        	}
                        }
                        
                        // 安排
                        Array.prototype.extProc = function(){
                        	// 去重
                        	this.removeDuplicate();
                        	// 截取倒数第二位
                        	this.reverseSecond(true);
                        	// 截取顺数第二位
                        	this.reverseSecond(false);
                        	
                        	return this.sort();
                        }
                        
                        
                        var initArr = ["kitty","puppy","swan","penguin","giraffe","penguin","swan","dolphin"];
                        initArr.extProc();
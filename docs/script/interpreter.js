var shami = 0;
var momo = 27;
const stack = [];
var result = "";
var p = 0;

function init(){
	shami = 0;
	momo = 27;
	stack.splice(0);
	result = "";
	p = 0;
}

function output(text){
	result += text;
}

function error(text){
	p = Number.MAX_SAFE_INTEGER;
	output("\n__ERROR__\n" + text);
}

function pop(){
	var n = stack.pop();
	if (n === undefined)
		error("空のスタックをpopしようとしました");
	return n;
}

function jump(start, end, command){
	var i = 1;
	if (pop() != 0) return;
	while(i > 0){
		++p;
		if(command[p] == start) ++i;
		if(command[p] == end) --i;
		if(p > command.length){
			error("区切り文字が正しく対応していません");
			break;
		}
	}
}

function back(start, end, command){
	var i = 1;
	while(i > 0){
		if(command[p] == start) ++i;
		if(command[p] == end) --i;
		--p;
		if(p < 0){
			error("区切り文字が正しく対応していません");
			break;
		}
	}
}

function checkDelimiter(c){
  switch (c){
    	case ',':
	case '.':
	case '!':
	case '\n':
	case ' ':
	case '(':
	case ')':
	case '?':
	case '/':
		return c;
	default:
		return 0;
  }
}

function runDelimiter(command){
	switch (command[p]){
		case ',':
			let temp = shami;
			shami = momo;
			momo = temp;
			break;
		case '.':
      			jump('?', '/', command);
			break;
		case '!':
			p = Number.MAX_SAFE_INTEGER;
		case '\n':
		case ' ':
			break;
		case '(':
      			jump('(', ')', command);
			break;
		case ')':
			break;
		case '?':
			jump('?', '/', command);
			break;
		case '/':
			back('/', '?', command);
			break;
		default:
			error("不正な区切り文字です");
	}
	return p;
}

function runCommand(command, input){
	var c;
	if((c = command.indexOf('まぞくだったのかな')) != -1){
		output(command.slice(0, c));
	}
	else if((c = command.indexOf('まぞくだったんだね')) != -1){
		output(command.slice(0, c) + '\n');
	}
	else if(command.startsWith('私はすごい楽しいよ'))
		output(",");
	else if(command.startsWith('タイヤの上でやってみて'))
		output(".");
	else if(command.startsWith('みんなが仲良くなりますように'))
		output("!");
	else if(command.startsWith('おそろがいい'))
		output("\n");
	else if(command.startsWith('そこは引っかからなくていい'))
		output(" ");
	else if(command.startsWith('中に入れて'))
		output("(");
	else if(command.startsWith('外に出してくださいー'))
		output(")");
	else if(command.startsWith('本当にシャミ子の宿敵だったね'))
		output("?");
	else if(command.startsWith('桃っていい香りがしますよね'))
		output("/");
	else if(command.startsWith('桃'))
		stack.push(shami + momo);
	else if(command.startsWith('もんも'))
		stack.push(shami - momo);
	else if(command.startsWith('きさま'))
		stack.push(shami * momo);
	else if(command.startsWith('おのれ魔法少女'))
		stack.push(shami / momo);
	else if(command.startsWith('シャドウミストレスさん'))
		stack.push(shami % momo);
	else if(command.startsWith('千代田桃よ'))
		stack.push(shami ** momo);
	else if(command.startsWith('ききかんりー'))
		shami = 0;
	else if((c = command.indexOf('kmも走ったんですね')) != -1){
		let n = Number(command.slice(0, c))
		if(!isNaN(n))
			shami = n;
	}
	else if(command.startsWith('シャミ子'))
		++shami;
	else if(command.startsWith('おばか'))
		--shami;
	else if(command.startsWith('なんか違くないですか')){
		if(shami == momo)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(command.startsWith('今日のご飯何')){
		if(shami > momo)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(command.startsWith('この携帯の番号いくつ')){
		output("\nshami: " + shami);
		output("\nmomo: " + momo);
	}
	else if(command.startsWith('やる気あるのかな')){
		if(!stack.length)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(command.startsWith('認めませーん'))
		shami = input.shift();
	else if(command.startsWith('まぞくは死にました')){
		var input_num = [];
		let c = 10;
		while((c = input.shift()) != 10)
			input_num.push(c);
		shami = Number(Encoding.convert(input_num, {
			to: 'UTF8',
			from: 'SJIS',
			type: 'string'
		}));
	}
	else if(command.startsWith('ぽがー'))
		output(pop());
	else if(command.startsWith('おぼえてろー'))
		output(pop().fromCharCode(asciiCode));
	else if(command.startsWith('ごめんなさいでした')){
		while(stack.length)
			output(pop() + '\n');
	}
	else if(command.startsWith('これで勝ったと思うなよー')){
		while(stack.length)
			output(pop().fromCharCode(asciiCode));
	}
	else if(command.startsWith('筋肉をつけよう'))
		shami = pop();
	else if(command.startsWith('諦めるな'))
		stack.push(-pop());
	else if(command.startsWith('…'))
		if (pop() == 0) stack.push(1);
		else stack.push(0);
}

export default function interpreter(command, input){
	init();
	var i = 0;
	if (command.indexOf('!') == -1)
		error("プログラム終了の区切り文字！が存在しません"); //区切り文字がないプログラムは動かないので、終了命令を必須とすることで対策
	input += '\n';
	var input_array = Encoding.convert(input, {
		to: 'SJIS',
		from: 'UTF8',
		type: 'array'
	});
	while(p < command.length){
		if(checkDelimiter(command[p])){
			runCommand(command.slice(i, p), input_array);
			p = runDelimiter(command);
			i = p + 1;
		}
		++p;
	}
	return result;
}

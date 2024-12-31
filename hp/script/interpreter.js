var shami = 0;
var momo = 27;
const stack = [];
var result;
var p = 0;

function output(text){
  result += output;
}

function jump(start, end){
}

function back(start, end){
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

function runDelimiter(c){
  switch (c){
    case ',':
      var temp = shami;
      shami = momo;
      momo = temp;
      break;
		case '.':
      jump('?', '/');
      break;
		case '!':
		case '\n':
		case ' ':
      break;
		case '(':
      jump('(', ')');
      break;
		case ')':
      break;
		case '?':
      jump('?', '/');
      break;
		case '/':
			back('/', '?');
      break;
		default:
			return 0;
  }
}

void runCommand(command){
	var p;
	if((p = command.indexOf('まぞくだったのかな')) != -1){
		output(command.slice(0, c));
	}
	else if((p = command.indexOf('まぞくだったんだね')) != -1){
		output(command.slice(0, 1) + '\n');
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
	else if((p = command.indexOf('kmも走ったんですね')) != -1){
		shami = atoi(command);
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
		if(shami < momo)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(command.startsWith('やる気あるのかな')){
		if(!stack.length)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(command.startsWith('認めませーん'))
		shami = getchar();
	else if(command.startsWith('まぞくは死にました')){
		char n[10];
		fgets(n, 10, stdin);
		shami = atoi(n);
	}
	else if(command.startsWith('ぽがー'))
		output(stack.pop());
	else if(command.startsWith('おぼえてろー'))
		output(stack.pop().fromCharCode(asciiCode));
	else if(command.startsWith('ごめんなさいでした')){
		while(stack.length)
			output(stack.pop() + '\n');
	}
	else if(command.startsWith('これで勝ったと思うなよー')){
		while(stack.length)
			output(stack.pop().fromCharCode(asciiCode));
	}
	else if(command.startsWith('筋肉をつけよう'))
		shami = stack.pop();
	else if(command.startsWith('諦めるな'))
		stack.push(-stack.pop());
	else if(command.startsWith('…'))
		stack.push(!stack.pop());
}

function interpreter(command, input){
	int i = 0;
	while(p < command.length){
		if(checkDelimiter(command[p]){
			runCommand();
			runDelimiter(command[p]) 
		}else p++;
	}
}

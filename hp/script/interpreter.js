var shami = 0;
var momo = 27;
const stack = [];
var result;

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

int checkCommand(char *command, char *word){
	return !memcmp(command, word, sizeof(char) * strlen(word));
}

void runCommand(char *command){
	char *p;
	if((p = strstr(command, "まぞくだったのかな")) != NULL){
		*p = 0;
		printf("%s", command);
	}
	else if((p = strstr(command, "まぞくだったんだね")) != NULL){
		*p = 0;
		printf("%s\n", command);
	}
	else if(checkCommand(command, "私はすごい楽しいよ"))
		printf(",");
	else if(checkCommand(command, "タイヤの上でやってみて"))
		printf(".");
	else if(checkCommand(command, "みんなが仲良くなりますように"))
		printf("!");
	else if(checkCommand(command, "おそろがいい"))
		printf("\n");
	else if(checkCommand(command, "そこは引っかからなくていい"))
		printf(" ");
	else if(checkCommand(command, "中に入れて"))
		printf("(");
	else if(checkCommand(command, "外に出してくださいー"))
		printf(")");
	else if(checkCommand(command, "本当にシャミ子の宿敵だったね"))
		printf("?");
	else if(checkCommand(command, "桃っていい香りがしますよね"))
		printf("/");
	else if(checkCommand(command, "桃"))
		stack.push(shami + momo);
	else if(checkCommand(command, "もんも"))
		stack.push(shami - momo);
	else if(checkCommand(command, "きさま"))
		stack.push(shami * momo);
	else if(checkCommand(command, "おのれ魔法少女"))
		stack.push(shami / momo);
	else if(checkCommand(command, "シャドウミストレスさん"))
		stack.push(shami % momo);
	else if(checkCommand(command, "千代田桃よ"))
		stack.push(shami ** momo);
	else if(checkCommand(command, "ききかんりー"))
		shami = 0;
	else if((p = strstr(command, "kmも走ったんですね")) != NULL){
		*p = 0;
		shami = atoi(command);
	}
	else if(checkCommand(command, "シャミ子"))
		++shami;
	else if(checkCommand(command, "おばか"))
		--shami;
	else if(checkCommand(command, "なんか違くないですか")){
		if(shami == momo)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(checkCommand(command, "今日のご飯何")){
		if(shami > momo)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(checkCommand(command, "この携帯の番号いくつ")){
		if(shami < momo)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(checkCommand(command, "やる気あるのかな")){
		if(!stack.length)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(checkCommand(command, "認めませーん"))
		shami = getchar();
	else if(checkCommand(command, "まぞくは死にました")){
		char n[10];
		fgets(n, 10, stdin);
		shami = atoi(n);
	}
	else if(checkCommand(command, "ぽがー"))
		output(stack.pop());
	else if(checkCommand(command, "おぼえてろー"))
		output(stack.pop().fromCharCode(asciiCode));
	else if(checkCommand(command, "ごめんなさいでした")){
		while(stack.length)
			output(stack.pop() + '\n');
	}
	else if(checkCommand(command, "これで勝ったと思うなよー")){
		while(stack.length)
			output(stack.pop().fromCharCode(asciiCode));
	}
	else if(checkCommand(command, "筋肉をつけよう"))
		shami = stack.pop();
	else if(checkCommand(command, "諦めるな"))
		stack.push(-stack.pop());
	else if(checkCommand(command, "…"))
		stack.push(!stack.pop());
}

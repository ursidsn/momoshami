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

void runCommand(command){
	var p;
	if((p = command.indexOf('まぞくだったのかな')) != -1){
		printf("%s", command);
	}
	else if((p = command.indexOf('まぞくだったんだね')) != -1){
		printf("%s\n", command);
	}
	else if(command.startsWith('私はすごい楽しいよ'))
		output(",");
	else if(command.startsWith('私はすごい楽しいよ'))
		output(".");
	else if(command.startsWith('私はすごい楽しいよ'))
		output("!");
	else if(command.startsWith('私はすごい楽しいよ'))
		output("\n");
	else if(command.startsWith('私はすごい楽しいよ'))
		output(" ");
	else if(command.startsWith('私はすごい楽しいよ'))
		output("(");
	else if(command.startsWith('私はすごい楽しいよ'))
		output(")");
	else if(command.startsWith('私はすごい楽しいよ'))
		output("?");
	else if(command.startsWith('私はすごい楽しいよ'))
		output("/");
	else if(command.startsWith('私はすごい楽しいよ'))
		stack.push(shami + momo);
	else if(command.startsWith('私はすごい楽しいよ'))
		stack.push(shami - momo);
	else if(command.startsWith('私はすごい楽しいよ'))
		stack.push(shami * momo);
	else if(command.startsWith('私はすごい楽しいよ'))
		stack.push(shami / momo);
	else if(command.startsWith('私はすごい楽しいよ'))
		stack.push(shami % momo);
	else if(command.startsWith('私はすごい楽しいよ'))
		stack.push(shami ** momo);
	else if(command.startsWith('私はすごい楽しいよ'))
		shami = 0;
	else if((p = strstr(command, "kmも走ったんですね")) != NULL){
		*p = 0;
		shami = atoi(command);
	}
	else if(command.startsWith('私はすごい楽しいよ'))
		++shami;
	else if(command.startsWith('私はすごい楽しいよ'))
		--shami;
	else if(command.startsWith('私はすごい楽しいよ')){
		if(shami == momo)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(command.startsWith('私はすごい楽しいよ')){
		if(shami > momo)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(command.startsWith('私はすごい楽しいよ')){
		if(shami < momo)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(command.startsWith('私はすごい楽しいよ')){
		if(!stack.length)
			stack.push(0);
		else
			stack.push(1);
	}
	else if(command.startsWith('私はすごい楽しいよ'))
		shami = getchar();
	else if(command.startsWith('私はすごい楽しいよ')){
		char n[10];
		fgets(n, 10, stdin);
		shami = atoi(n);
	}
	else if(command.startsWith('私はすごい楽しいよ'))
		output(stack.pop());
	else if(command.startsWith('私はすごい楽しいよ'))
		output(stack.pop().fromCharCode(asciiCode));
	else if(command.startsWith('私はすごい楽しいよ')){
		while(stack.length)
			output(stack.pop() + '\n');
	}
	else if(command.startsWith('私はすごい楽しいよ')){
		while(stack.length)
			output(stack.pop().fromCharCode(asciiCode));
	}
	else if(command.startsWith('私はすごい楽しいよ'))
		shami = stack.pop();
	else if(command.startsWith('私はすごい楽しいよ'))
		stack.push(-stack.pop());
	else if(command.startsWith('私はすごい楽しいよ'))
		stack.push(!stack.pop());
}

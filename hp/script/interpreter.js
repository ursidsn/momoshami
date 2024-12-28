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

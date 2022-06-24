#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#define SIZE 256

FILE *fp;

/* 言語内で使用できる変数・配列 */
int shami;
int momo = 27;
typedef struct s_stack{
	int key;
	struct s_stack *prev;
} STACK;

STACK *stacktop;

void init(char *A){ //初期化
	int i;
	for(i = 0; i < SIZE; i++)
		A[i] = 0;
}


STACK *newstack(void){
	STACK *p;
	
	p = (STACK *)malloc(sizeof(STACK));
	if(p == NULL){
		fputs("malloc failed\n",stderr);
		exit(1);
	}else
		return p;
}

void push(int k){
	STACK *new;
	
	new = newstack();
	new->key = k;
	new->prev = stacktop;
	stacktop = new;
}

int pop(void){
	STACK *w;
	int k;
	
	if(stacktop == NULL){
		printf("stack is empty");
		exit(1);
	}else{
		k = stacktop->key;
		w = stacktop;
		stacktop = w->prev;
		free(w);
	}
	return k;
}

void jump(char start, char end){
	int i = 1;
	char c;
	if(pop() == 0){
		while(fread(&c, sizeof(char), 1, fp)){
			if(c == start) ++i;
			if(c == end) --i;
			if(!i)	return;
		}
	printf("reached end of file while parsing");
	exit(1);
	}
}

void back(char start, char end){
	int i = 1;
	char c = 0;
	do{
		if(fseek(fp, -2 * sizeof(char), SEEK_CUR)) exit(1);
		if(c == start) ++i;
		if(c == end) --i;
		if(!i) break;
	}while(fread(&c, sizeof(char), 1, fp));
	fseek(fp, sizeof(char), SEEK_CUR);
}

char checkDelimiter(char c){
	switch(c){
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

void runDelimiter(char c){
	switch(c){
		case ',':
			int tmp = shami;
			shami = momo;
			momo = tmp;
			break;
		case '.':
			jump('?', '/');
			break;
		case '!':
			exit(0);
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
			printf("Unvalid delimiter");
			exit(1);
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
		push(shami + momo);
	else if(checkCommand(command, "もんも"))
		push(shami - momo);
	else if(checkCommand(command, "きさま"))
		push(shami * momo);
	else if(checkCommand(command, "おのれ魔法少女"))
		push(shami / momo);
	else if(checkCommand(command, "シャドウミストレスさん"))
		push(shami % momo);
	else if(checkCommand(command, "千代田桃よ"))
		push((int)pow(shami, momo));
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
			push(0);
		else
			push(1);
	}
	else if(checkCommand(command, "今日のご飯何")){
		if(shami > momo)
			push(0);
		else
			push(1);
	}
	else if(checkCommand(command, "この携帯の番号いくつ")){
		if(shami < momo)
			push(0);
		else
			push(1);
	}
	else if(checkCommand(command, "やる気あるのかな")){
		if(stacktop == NULL)
			push(0);
		else
			push(1);
	}
	else if(checkCommand(command, "認めませーん"))
		shami = getchar();
	else if(checkCommand(command, "まぞくは死にました")){
		char n[10];
		fgets(n, 10, stdin);
		shami = atoi(n);
	}
	else if(checkCommand(command, "ぽがー"))
		printf("%d", pop());
	else if(checkCommand(command, "おぼえてろー"))
		printf("%c", pop());
	else if(checkCommand(command, "ごめんなさいでした")){
		while(stacktop != NULL)
			printf("%d\n", pop());
	}
	else if(checkCommand(command, "これで勝ったと思うなよー")){
		while(stacktop != NULL)
			printf("%c", pop());
	}
	else if(checkCommand(command, "筋肉をつけよう"))
		shami = pop();
	else if(checkCommand(command, "諦めるな"))
		push(-pop());
	else if(checkCommand(command, "…"))
		push(!pop());
}

int main(int argc, char* argv[]){
	char c;
	char command[SIZE];
	int i = 0;
	init(command);
	
	if(!(fp = fopen(argv[1], "rb"))){
		printf("ファイルが開けません");
		return 1;
	}
	while(fread(&c, sizeof(char), 1, fp)){
		if(checkDelimiter(c)){
			i = 0;
			runCommand(command);
			init(command);
			runDelimiter(c);
		}else
			command[i++] = c;
	}
	return 0;
}
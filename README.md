# momoshami
**momoshami**はその名の通り、「まちカドまぞく」のシャミ子と桃の会話をもとにした言語です。拡張子ははじめ.ms(桃のmとシャミ子のs)の予定でしたが他の言語とかぶったので.my(桃のmと優子のy)になりました。 ~~これも被ってても知らない~~
## 言語仕様
momoshamiは二つの変数shami, momoと一つのスタックリスト(すべて整数型)からなります。初期値はshami=0, momo=27です。
命令には「セリフ」と「区切り文字」の二種類があり、セリフとセリフの間には必ず区切り文字を入れる必要があります。区切り文字は連続しても構いません。
### 区切り文字
|命令|意味|
|----|----|
|空白もしくは改行|何もしない|
|,|shamiとmomoの中身を入れ替える|
|(|スタックをpopしそれが0なら対応する)の次の命令へ飛ぶ|
|)|何もしない|
|?|スタックをpopしそれが0なら対応する/の次の命令へ飛ぶ|
|/|対応する?に戻る|
|.|スタックをpopしそれが0なら現在の?/ループを抜ける|
|!|プログラムを終了する|

要するに()がif文、?/がwhile文、.がbreakです。
### セリフ
#### コメント表示
|命令|意味|
|----|----|
|○○まぞくだったのかな|文字列○○を出力する|
|○○まぞくだったんだね|文字列○○を出力し、改行する|

上の命令の○○には区切り文字を入れることができません。区切り文字そのものを出力したいときは、代わりに以下の命令を使用します。
|命令|意味|
|----|----|
|そこは引っかからなくていい|空白を出力|
|おそろがいい|改行を出力|
|私はすごい楽しいよ|,を出力|
|中に入れて|(を出力|
|外に出してください|)を出力|
|本当にシャミ子の宿敵だったね|?を出力|
|桃っていい香りがしますよね|/を出力|
|タイヤの上でやってみて|.を出力|
|みんなが仲良くなりますように|!を出力|

#### 入出力
|命令|意味|
|----|----|
|認めませーん|入力1バイトの文字コードをshamiへ代入|
|まぞくは死にました|入力1行を数値としてshamiへ代入|
|ぽがー|スタックをpopして数値として出力|
|おぼえてろー|スタックをpopして文字として出力|
|ごめんなさいでした|スタックの中身をすべて改行区切りで数値として出力|
|これで勝ったと思うなよー|スタックの中身をすべて文字として出力|

~~ぶっちゃけ最後二ついらないよね~~
#### 演算
|命令|意味|
|----|----|
|桃|shami + momoをpush|
|もんも|shami - momoをpush|
|きさま|shami * momoをpush|
|おのれ魔法少女|shami / momoをpush|
|シャドウミストレスさん|shami % momoをpush|
|千代田桃よ|shami ^ momoをpush|
|ききかんりー|shamiを0にする|
|○○kmも走ったんですね|数値○○をshamiに代入|
|シャミ子|shamiをインクリメント|
|おばか|shamiをデクリメント|
|なんか違くないですか|shami = momoなら0,そうでなければ1をpush|
|今日のご飯何|shami > momoなら0,そうでなければ1をpush|
|やる気あるのかな|スタックが空なら0,そうでなければ1をpush|
|筋肉をつけよう|スタックをpopしshamiに代入|
|諦めるな|スタックトップの符号を反転|
|…|スタックトップを論理反転|

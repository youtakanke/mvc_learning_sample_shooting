# mvc_learning_sample_shooting
オブジェクト指向理解のためのサンプルシューティングゲーム
* MainManager　　//基軸となるメインクラス  ここで全てのManagerクラスをnewし、制御する ゲームスタート、クリア、ゲームオーバーなども  
* EnemyManager　　//敵を出したり管理するクラス　何体だすとか　どのタイミング出だすとか
* CommonBase　　//以下のviewオブジェクトの基底クラス
* UnitBase　　//機体クラス　これを自機も敵もSperClassにする HP座標パラメータなど共通パラメータを定義
* Player　　//自機のクラス　UnitBaseを継承　キー入力による移動や玉発射制など
* Emey　　//敵キャラ　UnitBaseを継承
* UI　　//ゲームのステータス表示画面　HP、スコアなど
* Bullet　　//弾丸　playerや敵の発射する弾のクラス

* ↓この状態から改修して、シューティングゲームを完成させます。
https://youtakanke.github.io/mvc_learning_sample_shooting/dist/

### 環境構築手順
nodeをインストールされてない場合、  
インストールして下さい。  
https://nodejs.org/ja/

インストールしているかわからない場合  
※ mac ターミナルを開きます。  
※ windowsの場合はpwoer shellを開いて下さい。  
そして以下コマンドをコピペしEnter
```
node --version
```
バージョンが表示されなければ入っていません。  
-
  
次にrepositoryをご自身のアカウントにforkします。  
ページ右上の方にforkのボタンがあります。  
※forkのやり方詳細は[こちら](https://help.github.com/ja/github/getting-started-with-github/fork-a-repo)  
  
forkできたらcloneして下さい。
※clone方法は [こちら](https://help.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

ターミナル　or powerShellにて ↓意味わからなければ聞いて下さい。
```
cd クローンしたディレクトリのパス
```
パッケージインストール
```
npm install
```
開発環境 run
```
npm run start
```
これで、自動でブラウザが起動されれば成功です。

# mvc_learning_sapmle_shooting
オブジェクト思考理解のためのサンプルシューティングゲーム
* MainManager //基軸となるメインクラス  ここで全てのManagerクラスをnewし、制御する  
　　　　  　　// ゲームスタート、クリア、ゲームオーバーなども  
* EnemyManager //敵を出したり管理するクラス　何体だすとか　どのタイミング出だすとか
* CommonBase  //以下のviewオブジェクトの基底クラス
* Player //自機のクラス　キー入力による移動や玉発射制など
* UI //ゲームのステータス表示画面　HP、スコアなど
* UnitBase //機体クラス　これを自機も敵もSperClassにする HP座標パラメータなど共通パラメータを定義
* Emey //敵キャラ　UnitBaseを継承してください
* Player //自機　UnitBaseを継承してください
* Bullet //弾丸　playerや敵の発射する弾のクラス
* UnitBaseクラス、Bulletクラスは CommonBaswクラスを継承してください 

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
  
次にrepositoryをcloneして下さい。
※clone方法はこちら

ターミナル　or power shellにて
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
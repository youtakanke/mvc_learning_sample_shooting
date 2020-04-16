# mvc_learning_sapmle_shooting
オブジェクト思考理解のためのサンプルシューティングゲーム
* GameManager //基軸となるメインクラス  ここで全てのManagerクラスをnewし、制御する  
　　　　  　　// ゲームスタート、クリア、ゲームオーバーなども  
* UIManager //ゲームのステータス表示画面　HP、スコアなど
* EnemyManager //敵を出したり管理するクラス　何体だすとか　どのタイミング出だすとか
* PlayerManager //自機の管理するクラス　キー入力による移動や玉発射制御など
* MainBody //機体クラス　これをSperClassにする HP座標パラメータなど共通パラメータを定義
* Emey //敵キャラ　MainBodyを継承してください
* Player //自機　MainBodyを継承してください
* Bullet //弾丸　playerの発射する弾のクラス
* Managerクラスと、MainBodyクラス、Bulletクラスは EventTargetクラスを継承してください 

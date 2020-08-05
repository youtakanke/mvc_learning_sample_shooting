import UnitBase from "js/View/UnitBase";
import HitTest from "js/Util/HitTest";

/**
 * 自機クラス
 */
export default class Player extends UnitBase {
    constructor () {
        super (); //親constructor → MainManager.js
        this.x = 100;
        this.y = 200;
        this.setHP(100);
        this.setWidth(40);
        this.setHeight(40);
    }

    /**
     * EnterFrame.jsの中で
     * requestAnimationFrameから自動的にcallされ続けます。
     */
    update () {
        // 矢印キー　←↑→↓で動くようにしてください。googleで「js keycode」など検索してみて下さい。
        let xFlag = 0; //戻るタイミング他にないので更新毎で初期値へ
        let yFlag = 0;
        let diagonal = 1;

        if(rightFlag != 0 || leftFlag != 0){
          xFlag = 1;
        }
        if(upFlag != 0 || downFlag != 0){
          yFlag = 1;
        }
        if(xFlag != 0 && yFlag != 0){ //斜め移動判定
          diagonal = Math.sqrt(2); //斜め移動の時xyに√2を掛けて足すことで、斜めに1.141でなく1移動させる
        }

        this.x = this.x + (rightFlag - leftFlag) * 4 / diagonal; //5は移動スピード
        this.y = this.y + (upFlag - downFlag) * 4 / diagonal;

        // スペースキーを押すとBulletが発射されるようにして下さい。
        // Enemyクラスを参考にしてください。

        // 敵の弾に当たったらダメージを受けるようにして下さい。
        const bullet = HitTest.getHitObjectByClassName(this, "Bullet");
        if(bullet) {
            // ダメージを与えて下さい。↓コメントアウトを外していただくですがw
            // this.setDamage (bullet.damage);
            // ↑さて、setDamageはどこで定義されているでしょうか？

            // HPが0になったら死亡状態にし、MainManageに通知して下さい。
            // そして、MainManager側に、その通知を受け取れるようにして下さい。
            // console.log (this.HP);
        }
    }

    /**
     * 機体描画
     * 三角形
     * @param {ctx} context
     */
    draw (context) {
		context.beginPath();
		context.moveTo(this.x - 20, this.y + 10);
		context.lineTo(this.x + 20, this.y);
		context.lineTo(this.x - 20, this.y - 10);
		context.closePath();

		context.strokeStyle = "rgb(0,0,0)"; //枠線の色
		context.stroke();

		context.fillStyle="rgba(0,0,255, 1)";//塗りつぶしの色
		context.fill();
    }
}

let rightFlag = 0;
let leftFlag = 0;
let upFlag = 0;
let downFlag = 0;

addEventListener('keydown',(e) => {
  switch(e.keyCode){ //キー押しっぱはkeydown→keypressを繰り返す為、1fずつタイミング空くのでフラグで立ち上がりとオンをとる
    case 39 : rightFlag = 1;
    break;
    case 37 : leftFlag = 1;
    break;
    case 40 : upFlag = 1;
    break;
    case 38 : downFlag = 1;
    break;
  }
},false);

addEventListener('keyup',(e) => {
  switch(e.keyCode){
    case 39 : rightFlag = 0;
    break;
    case 37 : leftFlag = 0;
    break;
    case 40 : upFlag = 0;
    break;
    case 38 : downFlag = 0;
    break;
  }
},false);

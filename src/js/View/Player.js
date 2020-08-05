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

        this.xFlag = new Boolean(false); //戻るタイミング他にないので更新毎で初期値へ
        this.yFlag = new Boolean(false);
        this.diagonal = 1;

        this.rightFlag = new Boolean(false);
        this.leftFlag = new Boolean(false);
        this.upFlag = new Boolean(false);
        this.downFlag = new Boolean(false);
    }

    /**
     * EnterFrame.jsの中で
     * requestAnimationFrameから自動的にcallされ続けます。
     */
    update () {
        // 矢印キー　←↑→↓で動くようにしてください。googleで「js keycode」など検索してみて下さい。
        console.log(this.rightFlag);


        addEventListener('keydown',(e) => {
          switch(e.keyCode){ //キー押しっぱはkeydown→keypressを繰り返す為、1fずつタイミング空くのでフラグで立ち上がりとオンをとる
            case 39 : this.rightFlag = new Boolean(true);
            break;
            case 37 : this.leftFlag = new Boolean(true);
            break;
            case 40 : this.upFlag = new Boolean(true);
            break;
            case 38 : this.downFlag = new Boolean(true);
            break;
          }
        },false);

        addEventListener('keyup',(e) => {
          switch(e.keyCode){
            case 39 : this.rightFlag = new Boolean(false);
            break;
            case 37 : this.leftFlag = new Boolean(false);
            break;
            case 40 : this.upFlag = new Boolean(false);
            break;
            case 38 : this.downFlag = new Boolean(false);
            break;
          }
        },false);

        if(this.rightFlag || this.leftFlag){
          this.xFlag = new Boolean(true);
        } else{
          this.xFlag = new Boolean(false);
        }
        if(this.upFlag || this.downFlag){
          this.yFlag = new Boolean(true);
        } else{
          this.yFlag = new Boolean(false);
        }
        if(this.xFlag && this.yFlag){ //斜め移動判定
          this.diagonal = Math.sqrt(2); //斜め移動の時xyに√2を掛けて足すことで、斜めに1.141でなく1移動させる
        } else{
          this.diagonal = 1;
        }

        this.x += (this.rightFlag - this.leftFlag) * 4 / this.diagonal; //4は移動スピード
        this.y += (this.upFlag - this.downFlag) * 4 / this.diagonal;

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

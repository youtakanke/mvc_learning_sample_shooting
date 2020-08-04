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
        this.x = this.x + playerHorizontal;
        this.y = this.y + playerVertical;
        playerHorizontal = 0; //1fずつリセット
        playerVertical = 0; //1fずつリセット
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

let playerHorizontal = 0; //1f内での総量
let playerVertical = 0; //1f内での総量

addEventListener('keydown',(e) => {
  if(e.keyCode == 39){ //right
    playerHorizontal += 5;
  }
  if(e.keyCode == 37){ //left
    playerHorizontal += -5;
  }
  if(e.keyCode == 40){ //up
    playerVertical += 5;
  }
  if(e.keyCode == 38){ //down
    playerVertical += -5;
  }
});

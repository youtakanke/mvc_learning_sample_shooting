import UnitBase from "js/View/UnitBase";
import HitTest from "js/Util/HitTest";

/**
 * 自機クラス
 */
export default class Player extends UnitBase {
    constructor () {
        super ();
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
        document.addEventListener('keydown', (event) => {

            //スクロールを無効化
            if(event.preventDefault){
                event.preventDefault();
            }

            let keyCode = event.keyCode;
            console.log(keyCode);
            switch(keyCode){
                //上
                case 38:
                    this.y--;
                    break;
                //左
                case 37:
                    this.x--;
                    break;
                //右
                case 39:
                    this.x++;
                    break;
                //下
                case 40:
                    this.y++;
                    break;
            }
        })

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
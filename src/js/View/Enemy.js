import UnitBase from "./UnitBase";
import Bullet from "./Bullet";
import HitTest from "../Util/HitTest";

/**
 * 敵のBaseクラス。
 * 新規の敵を作る場合はこのクラスを継承してください。
 */
export default class Enemy extends UnitBase {
    constructor () {
        super ();
        this.x = 400;
        this.y = 200;
        this.setHP(5);
        this.crashScore = 10;
        setInterval(() => {
            // 一定間隔で弾を発射
            const bullet = new Bullet (this.x - 10, this.y);
            bullet.setSpeed(-4);
        }, 400)
    }
    /**
     * EnterFrame.jsの中で
     * requestAnimationFrameから自動的にcallされ続けます。
     */
    update (){
        // 動きはoverrideして下さい。↓のサンプルは上下運動
        this.deg = this.deg || 0;
        this.y = Math.cos(this.deg * (Math.PI / 180)) * 3 + this.y;
        this.deg++;

        const bullet = HitTest.getHitObjectByClassName (this, "Bullet");
        if (bullet) {
            // 弾にあたったらダメージを与え、EnemyManagerに通知して下さい。
            // bullet.damage
        }
    }
    /**
     * 描画
     * @param {context} context 
     */
    draw (context) {
        context.beginPath () ;

        context.arc( this.x, this.y, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
        context.fillStyle = "rgba(255,0,0,0.8)" ;
        context.fill() ;

        context.strokeStyle = "purple" ;
        context.lineWidth = 8 ;
        context.stroke() ;
    }
}
import CommonBase from "js/Common/CommonBase";

/**
 * 弾のベースクラス
 * そのまま使用してもいいし、
 * 違う種類の弾を作りたい場合、こちらを複製して下さい。
 */
export default class Bullet extends CommonBase {
    constructor (x, y) {
        super ();
        this.x = x;
        this.y = y;
        this.damage = 10;
        this.addEventListener('hitRect', (e, s)=>{
            console.log('hit', e.detail);
            this.destroy ();
        })
    }
    /**
     * スピード
     * @param {Number} value 
     */
    setSpeed (value) {
        // speedというクラスメンバにvalueをセットしてください
        this.speed = value;
    }
    /**
     * Vector2d  余力があれば設定してください
     * @param {Number} x 
     * @param {Number} y 
     */
    setVector (x, y) {
        // vectorというクラスメンバオブジェクトにvalueをセットしてください
    }
    /**
     * 与えるダメージ値
     * @param {Number} value 
     */
    setDamage (value) {
        this.damage = value;
    }
    /**
     * EnterFrame.jsの中で
     * requestAnimationFrameから自動的にcallされ続けます。
     */
    update () {
        // speedと vectorから、弾を移動させてください
        //this.x += ?
        //this.y += ?
        this.x += this.speed;

        // canvasの外に出てしまったら、destroy()するよう組んで下さい。
    }
    /**
     * 弾の描画
     * @param {ctx} context 
     */
    draw (context) {
        context.beginPath ();
        context.arc ( this.x, this.y, 2, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
        context.fillStyle = "rgba(255, 255, 0, 1)" ;
        context.fill ();
        context.stroke();
    }
}
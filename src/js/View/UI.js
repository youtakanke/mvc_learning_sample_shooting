import CommonBase from "../Common/CommonBase";

/**
 * UIの描画クラス
 * スコア以外にも
 * 自機の体力
 * 経過時間や
 * クリア表示、ゲームオーバーなども作ってみて下さい。
 */
export default class UI extends CommonBase {
    constructor () {
        super ();
        this.score = 0;
    }

    /**
     * スコア
     * @param {Number} value 
     */
    setScore (value) {
        this.score = value;
    }
    /**
     * 描画
     * @param {context} context 
     */
    draw (context) {
        context.fillStyle = "rgb(255, 169, 0)";
        context.fillText("SCORE : " + this.score, 10, 10);
    }
}
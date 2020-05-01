import ComonBase from "../Common/CommonBase";

/**
 * enemyやplayerのベースクラス。
 * 共通パラメータはこちらに定義して下さい。
 */
export default class UnitBase extends ComonBase {
    constructor () {
        super ();
        this.HP = 0;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }
    /**
     * 描画
     * @param {context} context 
     */
    draw (context) {
        // overrideしてください
    }
    /**
     * 体力
     * @param {Number} value 
     */
    setHP (value) {
        this.HP = value;
        if (this.HP <= 0) {
            this.dispatchEvent(new Event('death'));
        }
    }
    /**
     * ダメージ
     * @param {Number} value 
     */
    setDamage (value) {
        this.HP -= value;
    }
    /**
     * 幅
     * @param {Number} value 
     */
    setWidth (value) {
        this.width = value;
    }
    /**
     * 高さ
     * @param {Number} value 
     */
    setHeight (value) {
        this.height = value;
    }
}
import EnterFrame from "js/Common/EnterFrame";

/**
 * 描画系の基底クラス
 * updateとdrawメソッドをもち、
 * この二つはrequestAnimationFrameによって
 * callされ続ける
 * 使用したい場合は
 */
export default class CommonBase extends EventTarget {
    constructor () {
        super ();
        EnterFrame.addTargets (this);
    }
    /**
     * EnterFrame.jsの中で
     * requestAnimationFrameから自動的にcallされ続けます。
     */
    update () {}
    /**
     * 描画
     * @param {context} context 
     */
    draw (context) {}
    /**
     * 自信を削除
     */
    destroy () {
        EnterFrame.removeTargets (this);
        delete this;
    }
}
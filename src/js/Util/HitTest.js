import EnterFrame from "js/Common/EnterFrame";

/**
 * 衝突判定Utility
 * singleton
 */
class HitTest extends EventTarget {
    /**
     * viewオブジェクトの衝突判定します
     * @param {this} self 
     * @param {string} className 
     */
    getHitObjectByClassName (self, className){
        let result = null;
        const targets = EnterFrame.targets.filter (target => target.constructor.name === className);
        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            if(this.hitRect(self, target)){
                target.dispatchEvent(new CustomEvent ('hitRect', {detail: self}));
                result = target;
                break;
            }
        }
        return result;
    }
    /**
     * 自分自身と何かの衝突を判定する
     * @param {this} self 
     */
    hitOther (self) {
        let result = false;
        EnterFrame.targets
        .filter (target => self !== target)
        .some(target => {
            result = this.hitRect(self, target);
            return result;
        });
        return result;
    }
    hitX (targetA, targetB) {
        return targetA.x + (targetA.width/2) > targetB.x && targetA.x - (targetA.width/2) < targetB.x;
    }
    hitY (targetA, targetB) {
        return targetA.y + (targetA.height/2) > targetB.y && targetA.y - (targetA.height/2) < targetB.y;
    }
    /**
     * viewオブジェクト同士の矩形衝突判定
     * @param {object} targetA 
     * @param {object} targetB 
     */
    hitRect (targetA, targetB) {
        return this.hitX(targetA, targetB) && this.hitY(targetA, targetB);
    }
}
export default new HitTest ();
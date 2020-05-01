/**
 * EnterFrame requestAnimatiFrame実行し、
 * 各オブジェクトのupdateとdrawメソッドをcallし続ける
 * singleton
 * 
 * こちらはいじる必要はありません。
 */
class EnterFrame extends EventTarget {
    constructor () {
        super ();
        this.targets = [];
        this.context = {};
    }
    startAnimationFrame (canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        requestAnimationFrame(() => {
            this.render();
        });
    }
    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.targets.forEach(target => {
            target.draw(this.context);
            target.update();
        });
        requestAnimationFrame(() => {
            this.render();
        });
    }
    addTargets (target) {
        this.targets.push (target);
        console.log('[add]', target.constructor.name);
    };
    removeTargets (target) {
        this.targets = this.targets.filter ( item => item !== target);
        console.log('[remove]', target.constructor.name);
    };
}
export default new EnterFrame();
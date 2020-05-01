import Enemy from "js/View/Enemy";
import CommonBase from "js/Common/CommonBase";
/**
 * 敵ユニットを管理するマネージャークラス
 * 
 * 最初は1体だけできているので他にも複数体生成して
 * バリエーションを作って下さい。
 */
export default class EnemyManager extends CommonBase {
    constructor (){
        super ();
        this.enemysList = []; // Enemy管理配列
        this.enemysList.push (new Enemy()); //1体だけ生成
        this.enemysList.forEach(enemy => {

            // 死んだ時のリスナー
            enemy.addEventListener ('death', (e) => {
                // this.enemysListから死んだenemy を削除
                this.enemysList = this.enemysList.filter(ene => ene != enemy);
            });
        });
    }
    update () {
    }
}
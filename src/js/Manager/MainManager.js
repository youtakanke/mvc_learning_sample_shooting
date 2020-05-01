import Player from "js/View/Player";
import UI from "js/View/UI";
import EnemyManager from "js/Manager/EnemyManager";
// import CommonBase from "js/Common/CommonBase";

/**
 * MainManager
 * 指示系統のトップクラス
 */
export default class MainManager {
    constructor (canvas){
        // super ();
        this.canvas = canvas;
        console.log(canvas);
        this.player = new Player();
        this.enemyManager = new EnemyManager ();

        //UIを表示させて下さい。UIクラスはViewフォルダにあります

    }
}
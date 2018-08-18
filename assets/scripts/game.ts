const {ccclass, property} = cc._decorator;

@ccclass
export default class game extends cc.Component {

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property(cc.Prefab)
    starPrefab: cc.Prefab = null;

    @property(cc.Integer)
    private groundHeight = null;

    // onLoad () {}
    public initializePlayerAction(){
        let jumpAction = cc.moveBy(0.3,cc.v2(0,200));
        let fallAction = cc.moveBy(0.3,cc.v2(0,-200));
        let playerAction = cc.repeatForever(cc.sequence(jumpAction,fallAction));
        this.playerNode.runAction(playerAction);
    }

    start () {
        this.initializePlayerAction();
        
    }

    update (dt) {

    }
}

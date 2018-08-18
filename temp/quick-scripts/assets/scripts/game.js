(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1b611G57bJGlbx81Tv0Lc5J', 'game', __filename);
// scripts/game.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var game = /** @class */ (function (_super) {
    __extends(game, _super);
    function game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scoreLabel = null;
        _this.playerNode = null;
        _this.starPrefab = null;
        _this.groundHeight = null;
        return _this;
    }
    // onLoad () {}
    game.prototype.initializePlayerAction = function () {
        var jumpAction = cc.moveBy(0.3, cc.v2(0, 200));
        var fallAction = cc.moveBy(0.3, cc.v2(0, -200));
        var playerAction = cc.repeatForever(cc.sequence(jumpAction, fallAction));
        this.playerNode.runAction(playerAction);
    };
    game.prototype.start = function () {
        this.initializePlayerAction();
    };
    game.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Label)
    ], game.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Node)
    ], game.prototype, "playerNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], game.prototype, "starPrefab", void 0);
    __decorate([
        property(cc.Integer)
    ], game.prototype, "groundHeight", void 0);
    game = __decorate([
        ccclass
    ], game);
    return game;
}(cc.Component));
exports.default = game;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=game.js.map
        
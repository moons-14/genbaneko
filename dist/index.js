"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mGenbaneko = exports.genbaneko = void 0;
const box_1 = require("cowsayjs/lib/box");
const genbaneko = () => {
    console.log('　　　　　　　　　 ∧　　/ヽ\n　　　　　　　　　/／￣￣＼|\n　　　　　　　　 ∠＿＿╋＿＿〉\n　　　　　　　　/　  ①八①　＼\n　　　　　　　 工ﾆ f(_人_) ｴ |′\n　　　　　　　　＼   ヽノ  ノ ヘ \n　　　　　　⊂⌒)_＞―――イ (＿) /\n　　　　　　　`ー､_ノ/￣ヽ　｜/\n　　　　　　　　 ＿|｜　 |　｜\n　　　　　　　　(　 人＿ノ　Λ\n　　　　　　　　 ＼ス￣￣ﾚ-Λ ＼\n　　　　　　　　(￣　)　/ /　＼ﾉ＼\n　　　　　　　　 ￣￣　(　ヽ　 ＼_)\n　　　　　　　　　　　　＼ノ');
};
exports.genbaneko = genbaneko;
class mGenbaneko_class {
    _genbaneko(action = '〇' || '＼' || '　') {
        return ('　　' +
            action +
            '　　　　　　 ∧　　/ヽ\n　　　' +
            action +
            '　　　　　/／￣￣＼|\n　　　　' +
            action +
            '　　　 ∠＿＿╋＿＿〉\n　　　　　' +
            action +
            '　　/　  ①八①　＼\n　　　　　　　 工ﾆ f(_人_) ｴ |′\n　　　　　　　　＼   ヽノ  ノ ヘ \n　　　　　　⊂⌒)_＞―――イ (＿) /\n　　　　　　　`ー､_ノ/￣ヽ　｜/\n　　　　　　　　 ＿|｜　 |　｜\n　　　　　　　　(　 人＿ノ　Λ\n　　　　　　　　 ＼ス￣￣ﾚ-Λ ＼\n　　　　　　　　(￣　)　/ /　＼ﾉ＼\n　　　　　　　　 ￣￣　(　ヽ　 ＼_)\n　　　　　　　　　　　　＼ノ');
    }
    think(message) {
        console.log((0, box_1.think)(message ? message : 'Yoshi!!') + this._genbaneko('〇'));
    }
    say(message) {
        console.log((0, box_1.say)(message ? message : 'Yoshi!!') + this._genbaneko('＼'));
        this._genbaneko();
    }
    normal() {
        console.log(this._genbaneko('　'));
    }
}
exports.mGenbaneko = new mGenbaneko_class();

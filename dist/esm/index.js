import { say, think } from 'cowsayjs/lib/box';
export const genbaneko = () => {
    console.log('　　　　　　　　　 ∧　　/ヽ\n　　　　　　　　　/／￣￣＼|\n　　　　　　　　 ∠＿＿╋＿＿〉\n　　　　　　　　/　  ①八①　＼\n　　　　　　　 工ﾆ f(_人_) ｴ |′\n　　　　　　　　＼   ヽノ  ノ ヘ \n　　　　　　⊂⌒)_＞―――イ (＿) /\n　　　　　　　`ー､_ノ/￣ヽ　｜/\n　　　　　　　　 ＿|｜　 |　｜\n　　　　　　　　(　 人＿ノ　Λ\n　　　　　　　　 ＼ス￣￣ﾚ-Λ ＼\n　　　　　　　　(￣　)　/ /　＼ﾉ＼\n　　　　　　　　 ￣￣　(　ヽ　 ＼_)\n　　　　　　　　　　　　＼ノ');
};
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
        console.log(think(message ? message : 'Yoshi!!') + this._genbaneko('〇'));
    }
    say(message) {
        console.log(say(message ? message : 'Yoshi!!') + this._genbaneko('＼'));
        this._genbaneko();
    }
    nomal() {
        console.log(this._genbaneko('　'));
    }
}
export const mGenbaneko = new mGenbaneko_class();

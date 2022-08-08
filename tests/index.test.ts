// 名前付きでインポートします
import { genbaneko } from '../src';

describe('genbaneko() のテスト', () => {
  it('ヨシのAAを出力', () => {
    // コンソールのログ出力を監視し、その文字列を返します
    const log = jest.spyOn(console, 'log').mockReturnValue();

    // hello メソッドの実行
    genbaneko();

    // 1番目のログ出力が 'Hello.' と一致するかチェック
    expect(log).toHaveBeenNthCalledWith(1, '　　　 ∧　　/ヽ');
    expect(log).toHaveBeenNthCalledWith(2, '　　　/／￣￣＼|');
    expect(log).toHaveBeenNthCalledWith(3, '　　 ∠＿╋＿＿〉');
    expect(log).toHaveBeenNthCalledWith(4, '　　/　①八①　ヽ ＿');
    expect(log).toHaveBeenNthCalledWith(5, '　 工ﾆf(_人_)ｴ二|′)ヽ');
    expect(log).toHaveBeenNthCalledWith(6, '　　＼ヽヽノノ ノ ヘ |');
    expect(log).toHaveBeenNthCalledWith(7, '⊂⌒)_＞―――′イ (＿)');
    expect(log).toHaveBeenNthCalledWith(8, '　`ー､_ノ/￣ヽ　｜');
    expect(log).toHaveBeenNthCalledWith(9, '　　 ＿|｜　 |　｜');
    expect(log).toHaveBeenNthCalledWith(10, '　　(　 人＿ノ　Λ');
    expect(log).toHaveBeenNthCalledWith(11, '　　 ＼ス￣￣ﾚ-Λ ＼');
    expect(log).toHaveBeenNthCalledWith(12, '　　(￣　)　/ /　＼ﾉ＼');
    expect(log).toHaveBeenNthCalledWith(13, '　　 ￣￣　(　ヽ　 ＼_)');
    expect(log).toHaveBeenNthCalledWith(14, '　　　　　　＼ノ');

    // 'jest.spyOn()' によって作成されたモックをリセットします
    log.mockRestore();
  });
});

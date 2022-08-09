// 名前付きでインポートします
import { genbaneko } from '../src';

describe('genbaneko() のテスト', () => {
  it('ヨシのAAを出力', () => {
    // コンソールのログ出力を監視し、その文字列を返します
    const log = jest.spyOn(console, 'log').mockReturnValue();

    // hello メソッドの実行
    genbaneko();

    // 1番目のログ出力が 'Hello.' と一致するかチェック
    expect(log).toHaveBeenNthCalledWith(
      1,
      '　　　　　　　　　 ∧　　/ヽ\n　　　　　　　　　/／￣￣＼|\n　　　　　　　　 ∠＿＿╋＿＿〉\n　　　　　　　　/　  ①八①　＼\n　　　　　　　 工ﾆ f(_人_) ｴ |′\n　　　　　　　　＼   ヽノ  ノ ヘ \n　　　　　　⊂⌒)_＞―――イ (＿) /\n　　　　　　　`ー､_ノ/￣ヽ　｜/\n　　　　　　　　 ＿|｜　 |　｜\n　　　　　　　　(　 人＿ノ　Λ\n　　　　　　　　 ＼ス￣￣ﾚ-Λ ＼\n　　　　　　　　(￣　)　/ /　＼ﾉ＼\n　　　　　　　　 ￣￣　(　ヽ　 ＼_)\n　　　　　　　　　　　　＼ノ'
    );

    // 'jest.spyOn()' によって作成されたモックをリセットします
    log.mockRestore();
  });
});

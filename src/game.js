// 起動された時にまず呼ばれる
window.addEventListener("load", () => {
  // まずステージを整える
  initialize();

  // ゲームを開始する
  loop();
});

/// ゲームの現在の状況
let mode;
let frame;
let combinationCount = 0;

function initialize() {
  // 画像を準備する
  PuyoImage.initialize();
  // ステージを準備する
  Stage.initialize();
  // ユーザー操作の準備をする
  Player.initialize();
  // シーンを初期状態にセットする
  Score.initialize();
  // スコア表示の準備をする
  mode = "start";
  // フレームを初期化する
  frame = 0;
}

function loop() {}

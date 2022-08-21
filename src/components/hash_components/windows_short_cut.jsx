exports.copy_and_paste = function () {
  const copy_and_paste = [
    ['Ctrl + X', '選択した項目を切り取る。'],
    ['Ctrl + C (または Ctrl + Insert)', '選択した項目をコピーする。'],
    ['Ctrl + V (または Shift + Insert)', '選択した項目を貼り付ける。'],
    ['Ctrl + Z', '操作を元に戻す。'],
    ['Alt + Tab', '開いているアプリ間で切り替える。'],
    ['Alt + F4', 'アクティブな項目を閉じる、またはアクティブなアプリを終了する。'],
    ['Windows ロゴ キー  + L', 'PC をロックする。'],
    ['Windows ロゴ キー  + D', 'デスクトップを表示または非表示にする。'],
    ['F2', '選択された項目の名前を変更する。'],
    ['F3', 'エクスプローラーでファイルまたはフォルダーを検索する。'],
    ['F4', 'エクスプローラーのアドレス バー リストを表示する。'],
    ['F5', '作業中のウィンドウを最新の情報に更新する。'],
    ['F6', 'ウィンドウ内またはデスクトップ上の画面要素を順番に切り替える。'],
    ['F10', 'アクティブなアプリのメニュー バーをアクティブにする。'],
    ['Alt + F8', 'サインイン画面でパスワードを表示する。'],
    ['Alt + Esc', '項目を開かれた順序で順番に切り替える。'],
    ['Alt + 下線付き文字', 'その文字に対応するコマンドを実行する。'],
    ['Alt + Enter', '選択した項目のプロパティを表示する。'],
    ['Alt + Space キー', '作業中のウィンドウのショートカット メニューを開く。'],
    ['Alt + ←', '前に戻ります。'],
    ['Alt + →', '次に進む。'],
    ['Alt + PageUp', '1 画面上へ移動する。'],
    ['Alt + PageDown', '1 画面下へ移動する。'],
    [
      'Ctrl + F4',
      '作業中のドキュメントを閉じる (複数のドキュメントを同時に開くことができる全画面表示のアプリで)。',
    ],
    ['Ctrl + A', 'ドキュメント内またはウィンドウ内のすべての項目を選択する。'],
    ['Ctrl + D (または Del)', '選択した項目を削除し、ごみ箱に移動する。'],
    ['Ctrl + E', '[検索] (ほとんどのアプリ) を開きます。'],
    ['Ctrl + R (または F5)', '作業中のウィンドウを最新の情報に更新する。'],
    ['Ctrl + Y', '操作をやり直す。'],
    ['Ctrl + →', '次の単語の先頭にカーソルを移動する。'],
    ['Ctrl + ←', '前の単語の先頭にカーソルを移動する。'],
    ['Ctrl + ↓', '次の段落の先頭にカーソルを移動する。'],
    ['Ctrl + ↑', '前の段落の先頭にカーソルを移動する。'],
    ['Ctrl + Alt + Tab', '方向キーを使って、開いているすべてのアプリ間で切り替える。'],
    [
      'Alt + Shift + 方向キー',
      'スタート メニュー内でフォーカスされているグループまたはタイルを指定した方向に移動する。',
    ],
    [
      'Ctrl + Shift + 方向キー',
      'スタート メニューのタイルにフォーカスがあるときに、別のタイルに移動してフォルダーを作成する。',
    ],
    ['Ctrl + 方向キー', 'スタート メニューが開いているときにサイズを変更する。'],
    [
      'Ctrl + 方向キー (項目に移動する) + Space キー',
      'ウィンドウ内またはデスクトップ上の複数の項目を個別に選択する。',
    ],
    ['Ctrl + Shift + 方向キー', 'テキストのブロックを選択する。'],
    ['Ctrl + Esc', 'スタート メニューを開く。'],
    ['Ctrl + Shift + Esc', 'タスク マネージャーを開く。'],
    [
      'Ctrl + Shift',
      'キーボード レイアウトを切り替える (複数のキーボード レイアウトが使用可能になっている場合)。',
    ],
    ['Ctrl + Space', '中国語の入力方式エディター (IME) をオンまたはオフにする。'],
    ['Shift + F10', '選択した項目のショートカット メニューを表示する。'],
    [
      'Shift + 任意の方向キー',
      'ウィンドウ内またはデスクトップ上の複数の項目を選択する、またはドキュメント内のテキストを選択する。',
    ],
    ['Shift + Del', '選択した項目をごみ箱に移動せずに削除する。'],
    ['→', '右側にある次のメニューを開く、またはサブメニューを開く。'],
    ['←', '左側にある次のメニューを開く、またはサブメニューを閉じる。'],
    ['Esc', '現在の作業を停止または終了する。'],
    ['PrintScreen', '画面全体のスクリーンショットを撮影し、クリップボードにコピーする。 '],
  ];

  return copy_and_paste;
};

exports.win_log_short = function () {
  const win_log_short = [
    ['Windows ロゴ キー ', 'スタート メニューを開くまたは閉じる。'],
    ['Windows ロゴ キー  + A', 'クイック設定を開く。 Windows 11 で更新されました。'],
    ['Windows ロゴ キー  + B', 'タスク バーの隅にある最初のアイコンにフォーカスを設定します。'],
    [
      'Windows ロゴ キー  + C',
      'Microsoft Teams から [チャット] を開きます。 Windows 11 で更新されました。',
    ],
    ['Windows ロゴ キー  + Shift + C', 'チャーム メニューを開く。'],
    [
      'Windows ロゴ キー  + Ctrl + C',
      'カラー フィルターを有効にします ([カラー フィルターの設定] で最初にこのショートカットを有効にします)。',
    ],
    ['Windows ロゴ キー  + D', 'デスクトップを表示または非表示にする。'],
    ['Windows ロゴ キー  + E', 'エクスプローラーを開く。'],
    ['Windows ロゴ キー  + F', 'フィードバック Hub を開き、スクリーン ショットを撮る。'],
    ['Windows ロゴ キー  + G', 'ゲームの実行中に Xbox Game Bar を開く。'],
    ['Windows ロゴ キー  + Alt + B', 'HDR のオンとオフを切り替えます。'],
    ['Windows ロゴ キー  + H', '音声入力を起動します。 Windows 11 で更新されました。'],
    ['Windows ロゴ キー  + I', '[設定]を開きます。'],
    [
      'Windows ロゴ キー  + J',
      '利用可能な場合は、Windows のヒントにフォーカスを設定する。\n Windows のヒントが表示されている場合は、ヒントにフォーカスを移動します。  キーボード ショートカットをもう一度押すと、Windows のヒントが固定されている画面上の要素にフォーカスが移動します。',
    ],
    [
      'Windows ロゴ キー  + K',
      '[クイック スタート] から [キャスト] を開きます。 Windows 11 で更新されました。',
    ],
    ['Windows ロゴ キー  + L', 'PC をロックする、またはアカウントを切り替える。'],
    ['Windows ロゴ キー  + M', 'すべてのウィンドウを最小化する。'],
    ['Windows ロゴ キー  + Shift + M', '最小化されたウィンドウをデスクトップに復元する。'],
    ['Windows ロゴ キー  + N', '通知センターと予定表を開きます。 Windows 11 で更新されました。'],
    ['Windows ロゴ キー‌  + O', 'デバイスの向きをロックする。'],
    ['Windows ロゴ キー  + P', 'プレゼンテーション表示モードを選択する。'],
    ['Windows ロゴ キー  + Ctrl + Q', 'クイック アシストを開く。'],
    ['Windows ロゴ キー  + R', '[ファイル名を指定して実行] ダイアログ ボックスを開く。'],
    [
      'Windows ロゴ キー  + Alt + R',
      '(Xbox Game Bar を使用して) フォーカスがあるゲーム ウィンドウのビデオを録画します。',
    ],
    ['Windows ロゴ キー  + S', '検索を開く。'],
    ['Windows ロゴ キー  + Shift + S', '画面の一部のスクリーン ショットを撮影します。'],
    ['Windows ロゴ キー  + T', 'タスク バー上のアプリを順番に切り替える。'],
    ['Windows ロゴ キー  + U', 'アクセシビリティの設定を開く。'],
    ['Windows ロゴ キー  + V', 'クリップボードを開きます。'],
    ['Windows ロゴ キー  + Shift + V', '通知にフォーカスを設定します。'],
    ['Windows ロゴ キー  + W', 'ウィジェットを開きます。 Windows 11 で更新されました。'],
    ['Windows ロゴ キー  + X', '[クイック リンク] メニューを開く。'],
    ['Windows ロゴ キー  + Y', 'Windows Mixed Reality とデスクトップの間で入力を切り替える。'],
    ['Windows ロゴ キー + Z', 'スナップ レイアウトを開きます。 Windows 11 で更新されました。'],
    ['Windows ロゴ キー  + ピリオド (.) または、セミコロン (;)', '絵文字パネルを開く。'],
    ['Windows ロゴ キー  + コンマ (,)', 'デスクトップを一時的にプレビューする。'],
    ['Windows ロゴ キー  + Pause', '[設定] &gt; [システム] &gt; [バージョン情報] を開きます。'],
    ['Windows ロゴ キー  + Ctrl + F', 'PC を検索する (ネットワークに参加している場合)。'],
    [
      'Windows ロゴ キー  + 数字',
      'デスクトップを開き、タスク バー上の数字で示す位置にピン留めされているアプリを開始する。 アプリが既に実行されている場合は、そのアプリに切り替える。',
    ],
    [
      'Windows ロゴ キー  + Shift + 数字',
      'デスクトップを開き、タスク バー上の数字で示す位置にピン留めされているアプリの新しいインスタンスを開始する。',
    ],
    [
      'Windows ロゴ キー  + Ctrl + 数字',
      'デスクトップを開き、タスク バー上の数字で示す位置にピン留めされているアプリの前回の作業中のウィンドウに切り替える。',
    ],
    [
      'Windows ロゴ キー  + Alt + 数字',
      'デスクトップを開き、タスク バー上の数字で示す位置にピン留めされているアプリのジャンプ リストを開く。',
    ],
    [
      'Windows ロゴ キー  + Ctrl + Shift + 数字',
      'デスクトップを開き、タスク バー上の指定された位置にあるアプリの新しいインスタンスを管理者として開く。',
    ],
    ['Windows ロゴ キー  + Tab', 'タスク ビューを開く。'],
    ['Windows ロゴ キー  + ↑', 'ウィンドウを最大化する。'],
    [
      'Windows ロゴ キー  + Shift + ↑',
      '画面の上半分にフォーカスがあるウィンドウをスナップします。 Windows 11 の新機能。',
    ],
    [
      'Windows ロゴ キー  + ↓',
      '現在のアプリを画面から削除する、またはデスクトップ ウィンドウを最小化する。',
    ],
    [
      'Windows ロゴ キー  + Shift + ↓',
      '画面の下半分にフォーカスがあるウィンドウをスナップします。 Windows 11 の新機能。',
    ],
    ['Windows ロゴ キー  + ←', '画面の左側にアプリまたはデスクトップ ウィンドウを最大化する。'],
    ['Windows ロゴ キー  + →', '画面の右側にアプリまたはデスクトップ ウィンドウを最大化する。'],
    [
      'Windows ロゴ キー  + Home',
      '作業中のデスクトップ ウィンドウを除くすべてのウィンドウを最小化する (2 回目のキーストロークですべてのウィンドウを復元する)。',
    ],
    ['Windows ロゴ キー  + Shift + ↑', 'デスクトップ ウィンドウを画面の上下に拡大する。'],
    [
      'Windows ロゴ キー  + Shift + ↓',
      '作業中のデスクトップ ウィンドウを、幅を維持しながら、縦方向に元のサイズに戻すか最小化する。',
    ],
    [
      'Windows ロゴ キー  + Shift + ←または→',
      'デスクトップ上のアプリまたはウィンドウを別のモニター ディスプレイに移動する。',
    ],
    ['Windows ロゴ キー + Shift + Space キー', '言語とキーボードレイアウトを逆に回します。'],
    ['Windows ロゴ キー  + Space キー', '入力言語とキーボード レイアウトを切り替える。'],
    ['Windows ロゴ キー  + Ctrl + Space キー', '以前に選択されていた入力値に変更する。'],
    ['Windows ロゴ キー  + Ctrl + Enter', 'ナレーターをオンにする。'],
    ['Windows ロゴ キー  + 正符号 (+)', '拡大鏡を開き、拡大します。'],
    ['Windows ロゴ キー  + マイナス (-)', '拡大鏡で縮小します。'],
    ['Windows ロゴ キー  + Esc', '拡大鏡を閉じます。'],
    ['Windows logo key  + スラッシュ (/)', 'IME の再変換を開始する。'],
    [
      'Windows ロゴ キー  + Ctrl + Shift + B',
      'PC のブランク画面またはブラック スクリーンから復帰します。',
    ],
    ['Windows ロゴ キー  + Prt Scr', '全画面のスクリーンショットをファイルに保存します。'],
    [
      'Windows ロゴ キー  + Alt + Prt Scr',
      '(Xbox Game Bar を使用して) フォーカスがあるゲーム ウィンドウのスクリーンショットをファイルに保存します。',
    ],
  ];

  return win_log_short;
};

exports.cmd_key_short = function () {
  const cmd_key_short = [
    ['Ctrl + C (または Ctrl + Insert)', '選択したテキストをコピーする。'],
    ['Ctrl + V (または Shift + Insert)', '選択したテキストを貼り付ける。'],
    ['Ctrl + M', 'マーク モードを開始する。'],
    ['Alt + 選択キー', 'ブロック モードで選択を開始する。'],
    ['方向キー', 'カーソルを指定した方向へ移動する。'],
    ['PageUp', 'カーソルを 1 ページ上へ移動する。'],
    ['PageDown', 'カーソルを 1 ページ下へ移動する。'],
    ['Ctrl + Home (マーク モード)', 'カーソルをバッファーの先頭に移動する。'],
    ['Ctrl + End (マーク モード)', 'カーソルをバッファーの最後に移動する。'],
    ['Ctrl + ↑', '出力の履歴を 1 行上へ移動する。'],
    ['Ctrl + ↓', '出力の履歴を 1 行下へ移動する。'],
    [
      'Ctrl + Home (履歴のナビゲーション)',
      'コマンド ラインが空の場合は、ビューポートをバッファーの先頭に移動する。 それ以外の場合は、コマンド ラインのカーソルの左側にある文字をすべて削除する。',
    ],
    [
      'Ctrl + End (履歴のナビゲーション)',
      'コマンド ラインが空の場合は、ビューポートをコマンド ラインに移動する。 それ以外の場合は、コマンド ラインのカーソルの右側にある文字をすべて削除する。  ',
    ],
  ];
  return cmd_key_short;
};

exports.dialog_short = function () {
  const dialog_short = [
    ['F4', 'アクティブな一覧内の各項目を表示する。'],
    ['Ctrl + Tab', '前方のタブへ移動する。'],
    ['Ctrl + Shift + Tab', '後方のタブへ移動する。'],
    ['Ctrl + 数字 (1 ～ 9 の数字キー)', 'n 番目のタブに移動する。'],
    ['Tab', '前方のオプションへ移動する。'],
    ['Shift + Tab', '後方のオプションへ移動する。'],
    [
      'Alt + 下線付き文字',
      'その文字で使われているコマンドを実行する (またはオプションを選択する)。',
    ],
    [
      'Space キー',
      'アクティブなオプションがチェック ボックスの場合、チェック ボックスをオンまたはオフにする。',
    ],
    [
      'BackSpace',
      '[名前を付けて保存] または [開く] ダイアログ ボックスでフォルダーが選択されている場合、1 つ上のフォルダーを開く。',
    ],
    [
      '方向キー',
      'アクティブなオプションがオプション ボタンのグループである場合、ボタンを選択する。',
    ],
  ];
  return dialog_short;
};

exports.exp_short = function () {
  const exp_short = [
    ['Alt + D', 'アドレス バーを選択する。'],
    ['Ctrl + E', '検索ボックスを選択する。'],
    ['Ctrl + F', '検索ボックスを選択する。'],
    ['Ctrl + N', '新しいウィンドウを開く。'],
    ['Ctrl + W', '作業中のウィンドウを閉じる。'],
    [
      'Ctrl + マウスのスクロール ホイール',
      'ファイル アイコンとフォルダー アイコンのサイズおよび外観を変更する。',
    ],
    ['Ctrl + Shift + E', '選択したフォルダーの上のフォルダーをすべて表示する。'],
    ['Ctrl + Shift + N', '新しいフォルダーを作成する。'],
    ['NumLock + アスタリスク (*)', '選択したフォルダーの下のサブフォルダーをすべて表示する。'],
    ['NumLock + 正符号 (+)', '選択したフォルダーの内容を表示する。'],
    ['NumLock + 負符号 (-)', '選択したフォルダーを折りたたむ。'],
    ['Alt + P', 'プレビュー パネルを表示する。'],
    ['Alt + Enter', '選択した項目の [プロパティ] ダイアログ ボックスを開く。'],
    ['Alt + →', '次のフォルダーを表示する。'],
    ['Alt + ↑', 'フォルダーの親フォルダーを表示する。'],
    ['Alt + ←', '前のフォルダーを表示する。'],
    ['BackSpace', '前のフォルダーを表示する。'],
    ['→', '現在の選択を表示する (折りたたまれている場合)、または最初のサブフォルダーを選択する。'],
    [
      '←',
      '現在の選択を折りたたむ (展開されている場合)、またはフォルダーの親フォルダーを選択する。',
    ],
    ['End', '作業中のウィンドウの一番下を表示する。'],
    ['ホーム', '作業中のウィンドウの一番上を表示する。'],
    ['F11', '作業中のウィンドウを最大化または最小化する。'],
  ];
  return exp_short;
};

exports.virtual_short = function () {
  const virtual_short = [
    ['Windows ロゴ キー  + Tab', 'タスク ビューを開く。'],
    ['Windows ロゴ キー  + Ctrl + D', '仮想デスクトップを追加する。'],
    ['Windows ロゴ キー  + Ctrl + →', '右側に作成した仮想デスクトップと切り替える。'],
    ['Windows ロゴ キー  + Ctrl + ←', '左側に作成した仮想デスクトップと切り替える。'],
    ['Windows ロゴ キー  + Ctrl + F4', '使用中の仮想デスクトップを閉じる。'],
  ];
  return virtual_short;
};

exports.task_short = function () {
  const task_short = [
    [
      'Shift + タスク バー ボタンをクリック',
      'アプリを開く、またはアプリの別のインスタンスをすばやく開く。',
    ],
    ['Ctrl + Shift + タスク バー ボタンをクリック', '管理者としてアプリを開く。'],
    ['Shift + タスク バー ボタンを右クリック', 'アプリのウィンドウ メニューを表示する。'],
    [
      'Shift + グループ化されたタスク バー ボタンを右クリック',
      'グループのウィンドウ メニューを表示する。',
    ],
    [
      'Ctrl + グループ化されたタスク バー ボタンをクリック',
      'グループのウィンドウを順番に切り替える。',
    ],
  ];
  return task_short;
};

exports.setting_short = function () {
  const setting_short = [
    ['Windows ロゴ キー  + I', '設定を開く。'],
    ['BackSpace', '設定のホーム ページに戻る。'],
    ['任意のページで検索ボックスに入力する', '設定を検索する。'],
  ];
  return setting_short;
};

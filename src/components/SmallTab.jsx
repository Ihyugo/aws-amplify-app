import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Box from '@mui/material/Box';

import BasicTable from './BasicTable';
import exportFunction from './hash_components/windows_short_cut';

function createTableData(index, key, value) {
  return { index, key, value };
}

function tableDataCreate(num) {
  const resData = [];
  if (num === 0) {
    exportFunction.copy_and_paste().forEach((key, index) => {
      resData.push(createTableData(index, key[0], key[1]));
    });
  } else if (num === 1) {
    exportFunction.win_log_short().forEach((key, index) => {
      resData.push(createTableData(index, key[0], key[1]));
    });
  } else if (num === 2) {
    exportFunction.cmd_key_short().forEach((key, index) => {
      resData.push(createTableData(index, key[0], key[1]));
    });
  } else if (num === 3) {
    exportFunction.dialog_short().forEach((key, index) => {
      resData.push(createTableData(index, key[0], key[1]));
    });
  } else if (num === 4) {
    exportFunction.exp_short().forEach((key, index) => {
      resData.push(createTableData(index, key[0], key[1]));
    });
  } else if (num === 5) {
    exportFunction.virtual_short().forEach((key, index) => {
      resData.push(createTableData(index, key[0], key[1]));
    });
  } else if (num === 6) {
    exportFunction.task_short().forEach((key, index) => {
      resData.push(createTableData(index, key[0], key[1]));
    });
  } else if (num === 7) {
    exportFunction.setting_short().forEach((key, index) => {
      resData.push(createTableData(index, key[0], key[1]));
    });
  }
  return resData;
}

function allTableData(text) {
  const resData = [];
  exportFunction.copy_and_paste().forEach((key, index) => {
    if (key[1].match(text)) {
      resData.push(createTableData(index, key[0], key[1]));
    }
  });
  exportFunction.win_log_short().forEach((key, index) => {
    if (key[1].match(text)) {
      resData.push(createTableData(index, key[0], key[1]));
    }
  });
  exportFunction.cmd_key_short().forEach((key, index) => {
    if (key[1].match(text)) {
      resData.push(createTableData(index, key[0], key[1]));
    }
  });
  exportFunction.dialog_short().forEach((key, index) => {
    if (key[1].match(text)) {
      resData.push(createTableData(index, key[0], key[1]));
    }
  });
  exportFunction.exp_short().forEach((key, index) => {
    if (key[1].match(text)) {
      resData.push(createTableData(index, key[0], key[1]));
    }
  });
  exportFunction.virtual_short().forEach((key, index) => {
    if (key[1].match(text)) {
      resData.push(createTableData(index, key[0], key[1]));
    }
  });
  exportFunction.task_short().forEach((key, index) => {
    if (key[1].match(text)) {
      resData.push(createTableData(index, key[0], key[1]));
    }
  });
  exportFunction.setting_short().forEach((key, index) => {
    if (key[1].match(text)) {
      resData.push(createTableData(index, key[0], key[1]));
    }
  });
  return resData;
}

export default function SmallTabs(props) {
  const value = props.value;
  const resData = props.text ? allTableData(props.ext) : tableDataCreate(0);
  const [smallTab, setSmallTab] = React.useState(resData);
  const [tabSelect, setTabSelect] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSmallTab(tableDataCreate(newValue));
    setTabSelect(newValue);
  };

  React.useEffect(() => {
    if (props.text !== null) {
      setSmallTab(allTableData(props.text));
    } else {
      setSmallTab(tableDataCreate(tabSelect));
    }
  }, [props.text]);

  const shortCutKind = [
    'コピー、貼り付け、その他の一般的なキーボード ショートカット',
    'Windows ロゴ キーのキーボード ショートカット',
    'コマンド プロンプトのキーボード ショートカット',
    'ダイアログ ボックスのキーボード ショートカット',
    'エクスプローラーのキーボード ショートカット',
    '仮想デスクトップのキーボード ショートカット',
    'タスク バーのキーボード ショートカット',
    '設定のキーボード ショートカット',
  ];

  return (
    <>
      {(() => {
        if (value === 0) {
          return (
            <>
              <Box
                sx={{
                  flexGrow: 1,
                  width: '100%',
                  bgcolor: 'background.paper',
                }}
              >
                {props.text == null && (
                  <>
                    <Tabs
                      value={tabSelect}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons
                      aria-label="visible arrows tabs example"
                      sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                          '&.Mui-disabled': { opacity: 0.3 },
                        },
                      }}
                    >
                      {shortCutKind.forEach((value, index) => {
                        return (
                          <>
                            <Tab label={value} />
                          </>
                        );
                      })}
                      <Tab label="コピー、貼り付け、その他の一般的なキーボード ショートカット" />
                      <Tab label="Windows ロゴ キーのキーボード ショートカット" />
                      <Tab label="コマンド プロンプトのキーボード ショートカット" />
                      <Tab label="ダイアログ ボックスのキーボード ショートカット" />
                      <Tab label="エクスプローラーのキーボード ショートカット" />
                      <Tab label="仮想デスクトップのキーボード ショートカット" />
                      <Tab label="タスク バーのキーボード ショートカット" />
                      <Tab label="設定のキーボード ショートカット" />
                    </Tabs>
                  </>
                )}
              </Box>
              <div>
                <BasicTable tableData={smallTab} />
              </div>
            </>
          );
        }
      })()}
    </>
  );
}

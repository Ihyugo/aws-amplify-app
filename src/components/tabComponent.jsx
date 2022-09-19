import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomizedInputBase from './SearchTextField';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ value, setValue, setText }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const customInput = (index) => {
    const index_title_list = [
      'Windowsのショートカットキー一覧',
      'Wordのショートカットキー一覧',
      'Excelのショートカットキー一覧',
    ];
    return (
      <div className="index-search-area">
        <h3>{index_title_list[index]}</h3>
        <CustomizedInputBase title={index_title_list[index]} setText={setText} />
      </div>
    );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Windows" {...a11yProps(0)} />
          <Tab label="Word" {...a11yProps(1)} />
          <Tab label="Excel" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {customInput(value)}
    </Box>
  );
}

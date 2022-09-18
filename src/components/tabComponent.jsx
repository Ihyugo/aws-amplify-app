import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomizedInputBase from './SearchTextField';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Windows" {...a11yProps(0)} />
          <Tab label="Word" {...a11yProps(1)} />
          <Tab label="Excel" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {value === 0 && (
        <div className="index-search-area">
          <h3>Windowsのショートカットキー一覧</h3>
          <CustomizedInputBase title={'Windowsのショートカットキー一覧'} setText={setText} />
        </div>
      )}

      {value === 1 && (
        <div className="index-search-area">
          <h3>Wordのショートカットキー一覧</h3>
          <CustomizedInputBase title={'Wordのショートカットキー一覧'} setText={setText} />
        </div>
      )}

      {value === 2 && (
        <div className="index-search-area">
          <h3>Excelのショートカットキー一覧</h3>
          <CustomizedInputBase title={'Excelのショートカットキー一覧'} setText={setText} />
        </div>
      )}
    </Box>
  );
}

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './Playlist.css';
import { Box } from '@mui/system';
import Song from './Song';

export default function Playlist({ playlist }) {
  const autoSizeStrategy = {
    type: 'fitCellContents',
  };
  const colDefs = [
    {
      field: 'time',
      flex: 1,
      width: 61,
      cellStyle: {
        padding: 1,
        textAlign: 'center',
      },
    },

    {
      field: 'song',
      flex: 3,
      cellRenderer: Song,
      cellStyle: { paddingLeft: 5, paddingRight: 5, width: '65%' },
    },
  ];

  return (
    <Box
      sx={{
        zIndex: 'modal',
        position: 'absolute',
        bottom: 70,
        overflow: 'hidden',
      }}
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: '70%', width: '80%' }}
    >
      <AgGridReact
        rowData={playlist}
        suppressRowClickSelection={true}
        columnDefs={colDefs}
        autoSizeStrategy={autoSizeStrategy}
      />
    </Box>
  );
}

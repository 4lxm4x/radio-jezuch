import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './Playlist.css';

export default function Playlist({ playlist }) {
  const autoSizeStrategy = {
    type: 'fitCellContents',
  };
  const colDefs = [
    { field: 'time', flex: 1, width: 61, cellStyle: { padding: 1 } },

    { field: 'song', flex: 3, cellStyle: { paddingLeft: 5, paddingRight: 5 } },
  ];
  console.log(playlist);
  return (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: '40%', width: '400px', maxWidth: '95%' }}
    >
      <AgGridReact
        rowData={playlist}
        columnDefs={colDefs}
        autoSizeStrategy={autoSizeStrategy}
      />
    </div>
  );
}

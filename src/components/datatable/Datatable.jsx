import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,userRows } from "../../datatablesource";


const Datatable = () => {
  return (
    <div className="datatable">
      <DataGrid
        rows={userColumns}
        columns={userRows}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns2, userRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const DatatableAbs = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => handleViewDetails(params.row.cin)}>
              <PreviewIcon />
            </div>
            
            <div className="deleteButton" onClick={() => handleDelete(params.row.cin)}>
              <DeleteIcon />
            </div>

            <div className="editButton" onClick={() => handleEditDetails(params.row.cin)}>
              <ModeEditIcon />
            </div>
          </div>
        );
      },
    },
  ];
  const navigate = useNavigate();

  const handleViewDetails = (cin) => {
    navigate(`/Demandes/Absence/${cin}`);
  }

  const handleEditDetails = (cin) => {
    navigate(`/Demandes/Absence/Edit/${cin}`);
  }
  const handleDelete = async(cin) => {}



  return (
    <div className="datatable">
      <div className="datatableTitle">
        Liste des demandes d'absences :
        <Link to="/Demandes/Absence/new" className="link">
          <PersonAddIcon />
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns2.concat(actionColumn)}
        getRowId={(row) => row.cin}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableAbs;

import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";
export const List = () => {
    const rows = [
        {
         CIN:"jb123232",
         Nom:"karima",
         Prenom:"oussalem",
         Sexe:"femme",
         Numero_telephone:"0632815527",
         email:"karima@gmail.com",
         status:"admin",
        },
        {
            CIN:"jb123232",
            Nom:"zakaria",
            Prenom:"oussalem",
            Sexe:"homme",
            Numero_telephone:"0632815527",
            email:"ziko@gmail.com",
            status:"fonctionnaire",
        }];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">CIN</TableCell>
            <TableCell className="tableCell">Nom</TableCell>
            <TableCell className="tableCell">Prenom</TableCell>
            <TableCell className="tableCell">Sexe</TableCell>
            <TableCell className="tableCell">Numero telephone</TableCell>
            <TableCell className="tableCell">email</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.CIN}>
              <TableCell className="tableCell">{row.CIN}</TableCell>
              <TableCell className="tableCell">{row.Nom}</TableCell>
              <TableCell className="tableCell">{row.Prenom}</TableCell>
              <TableCell className="tableCell">{row.Sexe}</TableCell>
              <TableCell className="tableCell">{row.Numero_telephone}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default List;
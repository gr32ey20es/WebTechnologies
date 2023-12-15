import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import UserForm from "./UserForm.jsx";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function createData(UserId, UserName, Email, Password,StudentCode, Role) {
  return {
    UserId,
    UserName,
    Email,
    Password,
    StudentCode,
    Role,
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "UserName",
    numeric: false,
    disablePadding: true,
    label: "UserName",
  },
  {
    id: "Email",
    numeric: false,
    disablePadding: true,
    label: "Email",
  },
  {
    id: "Password",
    numeric: true,
    disablePadding: false,
    label: "Password",
  },
  {
    id: "StudentCode",
    numeric: true,
    disablePadding: true,
    label: "StudentCode",
  },

  {
    id: "Role",
    numeric: true,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "Setting",
    numeric: true,
    disablePadding: false,
    label: "Setting",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        DASHBOARD ADMIN
      </Typography>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Dashboard() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [users, setUsers] = useState([]);
  const [rows, setRows] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onShowForm = () => {
    setOpenForm(true);
  };
  const onCloseForm = () => {
    setOpenForm(false);
    setSelectedUserId(null);
  };

  const handleClickMenu = (event, userId) => {
    setSelectedUserId(userId);
    console.log(selectedUserId);
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedUserId(null);
  };
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      const users = response.data;
  
      const newRows = await Promise.all(
        users.map(async (user) => {
          const studentCode = await getStudentCode(user.UserId);
          return createData(
            user.UserId,
            user.UserName,
            user.Email,
            user.Password,
            studentCode,
            user.Role
          );
        })
      );
  
      setRows(newRows);
      console.log(newRows);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/users/${userId}`
      );
      console.log(response.data);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };
  const getStudentCode = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/students/${userId}`
      );
      if (response.data && response.data.StudentCode) {
        return response.data.StudentCode;
      } else {
        return "";
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.UserId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, UserId) => {
    console.log(UserId);
    const selectedIndex = selected.indexOf(UserId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, UserId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );
  return (
    <div style={{ margin: " 0 24px" }}>
      {openForm && (
        <UserForm
          onOpen={openForm}
          data={fetchUsers}
          isClose={onCloseForm}
          userId={selectedUserId}
        ></UserForm>
      )}
      <div className="dashboard-container">
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <EnhancedTableToolbar numSelected={selected.length} />
              <Button
                id="demo-customized-button"
                aria-haspopup="true"
                variant="contained"
                disableElevation
                onClick={onShowForm}
              >
                Thêm
              </Button>
            </div>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.UserId);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.UserId}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            onClick={(event) => handleClick(event, row.UserId)}
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.UserName}
                        </TableCell>
                        <TableCell align="left">{row.Email}</TableCell>
                        <TableCell align="left">{row.Password}</TableCell>
                        <TableCell align="left">{row.StudentCode}</TableCell>
                        <TableCell align="left">{row.Role}</TableCell>
                        <TableCell>
                          <Button
                            id="demo-customized-button"
                            aria-controls={
                              open ? "demo-customized-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            variant="contained"
                            disableElevation
                            onClick={(event) =>
                              handleClickMenu(event, row.UserId)
                            }
                            endIcon={<KeyboardArrowDownIcon />}
                          >
                            Options
                          </Button>
                          <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                              "aria-labelledby": "demo-customized-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem onClick={onShowForm} disableRipple>
                              <EditIcon />
                              Edit
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                deleteUser(selectedUserId);
                              }}
                              disableRipple
                            >
                              <DeleteIcon />
                              Delete
                            </MenuItem>
                          </StyledMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </div>
    </div>
  );
}

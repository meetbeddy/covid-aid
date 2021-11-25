import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../utilities/ContentWrapper";
import { fetchCases, removeCase } from "../../store/actions/adminActions";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../store/actions/notificationsActions";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import { DotLoader } from "react-spinners";

export default function Cases() {
  const [loading, setLoading] = React.useState(true);
  const { cases } = useSelector((state) => state.admin);
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const allCases = [];
  const [data, setData] = React.useState(cases);

  React.useEffect(() => {
    dispatch(fetchCases());
  }, [dispatch]);

  cases.forEach((c, index) => {
    c.serial = index + 1;
    c.caseFollowUp
      ? (c.healthStatus = c.caseFollowUp.healthStatus)
      : (c.healthStatus = `-`);
    allCases.push(c);
  });

  React.useEffect(() => {
    const { success } = notification;
    if (success.message) {
      const { message } = notification.success;
      toast.success(message);
      dispatch(fetchCases());
      return dispatch(clearNotifications());
    }
  }, [dispatch, notification]);

  const handleFilter = (e) => {
    let filtered = allCases.filter((cases) => {
      return cases.status === e.target.value;
    });
    if (e.target.value === "All") {
      setData(allCases);
    } else {
      setData(filtered);
    }
  };
  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        setData(allCases);
      }, 3000);
    }
  });

  const deleteCase = (cell, row, rowIndex, formatExtraData) => {
    const handleDelete = (id) => {
      dispatch(removeCase(id));
    };
    return (
      <Button
        variant="danger"
        size="lg"
        onClick={() => {
          handleDelete(row._id);
        }}
      >
        Delete
      </Button>
    );
  };

  const columns = [
    {
      dataField: "serial",
      text: "#",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "50px",
      },
    },
    {
      dataField: "fullName",
      text: "Name",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "150px",
      },
    },

    {
      dataField: "age",
      text: "Age",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "150px",
      },
    },
    {
      dataField: "address",
      text: "Address",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "150px",
      },
    },
    {
      dataField: "state",
      text: "State",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "150px",
      },
    },
    {
      dataField: "lga",
      text: "LGA",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "150px",
      },
    },
    {
      dataField: "town",
      text: "Town",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "150px",
      },
    },
    {
      dataField: "healthStatus",
      text: "Health Status",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "150px",
      },
    },
    {
      dataField: "deleteCase",
      text: "",
      formatter: deleteCase,
      sort: true,
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "150px",
      },
    },
  ];

  const { SearchBar } = Search;
  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div style={{ textAlign: "right" }}>
        <Button variant="primary" size="lg" onClick={handleClick}>
          Export To CSV
        </Button>
      </div>
    );
  };
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  return (
    <ContentWrapper>
      <section className="content pb-3">
        <div className="card-body">
          {loading ? (
            <div className="splash-screen">
              <DotLoader color={"#36D7B7"} css={override} size={150} />
            </div>
          ) : cases.length > 0 ? (
            <>
              <h3> All Cases </h3>
              <button
                className="btn btn-outline-primary dropdown-toggle"
                style={{ width: "20%", margin: "10px" }}
                type="button"
                id="btnDropdownDemo"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                filter
              </button>
              <div className="dropdown-menu" aria-labelledby="btnDropdownDemo">
                <button
                  className="dropdown-item btn btn-secondary"
                  value="All"
                  onClick={handleFilter}
                >
                  All
                </button>
                <button
                  className="dropdown-item btn btn-secondary"
                  value="suspected"
                  onClick={handleFilter}
                >
                  Suspected
                </button>
                <button
                  className="dropdown-item btn btn-secondary"
                  value="confirmed"
                  onClick={handleFilter}
                >
                  Confirmed
                </button>
                <button
                  className="dropdown-item btn btn-secondary"
                  value="closed"
                  onClick={handleFilter}
                >
                  Closed
                </button>
              </div>
              <ToolkitProvider
                stripped
                hover
                keyField="_id"
                data={data}
                columns={columns}
                exportCSV
                search
              >
                {(props) => (
                  <div>
                    <SearchBar {...props.searchProps} />
                    <MyExportCSV {...props.csvProps} />
                    <hr />
                    <BootstrapTable {...props.baseProps} />
                  </div>
                )}
              </ToolkitProvider>
            </>
          ) : (
            <h1>No case at this time </h1>
          )}
        </div>
      </section>
      <ToastContainer position="top-center" />
    </ContentWrapper>
  );
}

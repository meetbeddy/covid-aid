import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../utilities/ContentWrapper";
import { fetchCases } from "../../store/actions/adminActions";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import { DotLoader } from "react-spinners";

export default function ClosedCases() {
  const [loading, setLoading] = React.useState(true);
  const { cases } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  const filtered = cases.filter((c) => {
    return c.status === "closed";
  });
  const closedCases = [];
  const [data, setData] = React.useState(closedCases);

  filtered.forEach((c, index) => {
    c.serial = index + 1;
    c.caseFollowUp
      ? (c.healthStatus = c.caseFollowUp.healthStatus)
      : (c.healthStatus = "unknown");
    closedCases.push(c);
  });

  const handleFilter = (e) => {
    let filtered = closedCases.filter((cases) => {
      return cases.healthStatus === e.target.value;
    });
    if (e.target.value === "All") {
      setData(closedCases);
    } else {
      setData(filtered);
    }
  };
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });
  React.useEffect(() => {
    dispatch(fetchCases());
  }, [dispatch]);

  const columns = [
    {
      dataField: "serial",
      text: "#",
    },
    {
      dataField: "fullName",
      text: "Name",
    },

    {
      dataField: "age",
      text: "Age",
    },
    {
      dataField: "address",
      text: "Address",
    },
    {
      dataField: "phone",
      text: "Phone",
    },
    {
      dataField: "healthStatus",
      text: "Health Status",
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
      {loading ? (
        <div className="splash-screen">
          <DotLoader color={"#36D7B7"} css={override} size={150} />
        </div>
      ) : closedCases.length > 0 ? (
        <>
          <h3> Closed Cases </h3>
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
              value="Dead"
              onClick={handleFilter}
            >
              Dead
            </button>
            <button
              className="dropdown-item btn btn-secondary"
              value="Recovered"
              onClick={handleFilter}
            >
              Recovered
            </button>
            <button
              className="dropdown-item btn btn-secondary"
              value="Lost to Followup"
              onClick={handleFilter}
            >
              Lost to followup
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
    </ContentWrapper>
  );
}

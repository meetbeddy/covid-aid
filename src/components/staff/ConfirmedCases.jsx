import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../utilities/ContentWrapper";
import { fetchCases } from "../../store/actions/adminActions";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import { DotLoader } from "react-spinners";

export default function ConfirmedCases(props) {
  const [loading, setLoading] = React.useState(true);
  const { cases } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const filtered = cases.filter((c) => {
    return c.status === "confirmed";
  });
  const confirmedCases = [];

  filtered.forEach((c, index) => {
    c.serial = index + 1;
    confirmedCases.push(c);
  });

  React.useEffect(() => {
    dispatch(fetchCases());
  }, [dispatch]);

  const { SearchBar } = Search;

  const openProfile = (cell, row, rowIndex, formatExtraData) => {
    return (
      <button
        className="btn btn-primary"
        onClick={() => {
          const data = row;
          props.history.push({
            pathname: `/dashboard/confirmed-cases/${data._id}`,
            state: data,
          });
        }}
      >
        Follow Up
      </button>
    );
  };

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
      dataField: "viewdetails",
      text: "View Details",
      formatter: openProfile,
      sort: true,
    },
  ];

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
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });
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
      ) : confirmedCases.length > 0 ? (
        <>
          <h3> Confirmed Cases </h3>
          <ToolkitProvider
            stripped
            hover
            keyField="_id"
            data={confirmedCases}
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

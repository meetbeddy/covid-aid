import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../utilities/ContentWrapper";
import { fetchCases } from "../../store/actions/adminActions";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import { DotLoader } from "react-spinners";

export default function ViewSuspectedCases() {
  const [loading, setLoading] = React.useState(true);
  const { cases } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const filtered = cases.filter((c) => {
    return c.status === "suspected";
  });
  const suspectedCases = [];

  filtered.forEach((c, index) => {
    c.serial = index + 1;
    suspectedCases.push(c);
  });

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
      dataField: "address",
      text: "Address",
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
      dataField: "phone",
      text: "Phone",
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
      {loading ? (
        <div className="splash-screen">
          <DotLoader color={"#36D7B7"} css={override} size={150} />
        </div>
      ) : suspectedCases.length > 0 ? (
        <>
          <h3> Suspected Cases </h3>
          <ToolkitProvider
            stripped
            hover
            keyField="_id"
            data={suspectedCases}
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

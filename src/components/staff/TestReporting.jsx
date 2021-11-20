import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ContentWrapper from "../utilities/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchCases } from "../../store/actions/adminActions";
import { Button } from "react-bootstrap";

export default function TestReporting(props) {
  const { cases } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const filtered = cases.filter((c) => {
    return c.status === "suspected";
  });
  // console.log(props);
  const data = [];

  filtered.forEach((c, index) => {
    c.serial = index + 1;
    data.push(c);
  });
  React.useEffect(() => {
    dispatch(fetchCases());
  }, [dispatch]);

  const openProfile = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        className="btn btn-primary"
        onClick={() => {
          const data = row;
          props.history.push({
            pathname: `/dashboard/test-reporting/${data._id}`,
            state: data,
          });
        }}
      >
        Enter Test Report
      </Button>
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
      sort: true,
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
      // dataField: "viewdetails",
      text: "View Details",
      formatter: openProfile,
      sort: true,
    },
  ];

  return (
    <ContentWrapper>
      {cases.length > 0 ? (
        <BootstrapTable keyField="_id" data={data} columns={columns} />
      ) : (
        <h1>loading </h1>
      )}
    </ContentWrapper>
  );
}

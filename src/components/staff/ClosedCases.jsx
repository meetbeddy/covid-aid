import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../utilities/ContentWrapper";
import { fetchCases } from "../../store/actions/adminActions";

export default function ClosedCases() {
  const { cases } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const filtered = cases.filter((c) => {
    return c.status === "closed";
  });
  const closedCases = [];

  filtered.forEach((c, index) => {
    c.serial = index + 1;
    closedCases.push(c);
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
  ];
  return (
    <ContentWrapper>
      {closedCases.length > 0 ? (
        <>
          <h3> Closed Cases </h3>
          <BootstrapTable keyField="_id" data={closedCases} columns={columns} />
        </>
      ) : (
        <h1>No case at this time </h1>
      )}
    </ContentWrapper>
  );
}

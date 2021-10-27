import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../utilities/ContentWrapper";
import { fetchCases } from "../../store/actions/adminActions";

export default function ConfirmedCases(props) {
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
  return (
    <ContentWrapper>
      {confirmedCases.length > 0 ? (
        <>
          <h3> Confirmed Cases </h3>
          <BootstrapTable
            keyField="_id"
            data={confirmedCases}
            columns={columns}
          />
        </>
      ) : (
        <h1>No case at this time </h1>
      )}
    </ContentWrapper>
  );
}

import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../components/dashboard/navbar/NavBar";
import SuspectedCases from "../../components/forms/SuspectedCases";
import SecondaryNav from "../blogs/SecondaryNav";

export default function ReportCase() {
  return (
    <>
      <NavBar />
      <SecondaryNav title="suspected-case-form" />
      <Container>
        <SuspectedCases />
      </Container>
    </>
  );
}

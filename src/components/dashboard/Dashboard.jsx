import React, { useState, useEffect } from "react";
import AppHeader from "./appHeader/appHeader";
import SideNav from "./sidenav/SideNav";
import JsonData from "../../data/data.json";
// import { fetchUserProfile } from "../../../store/actions/userProfileActions";
import ControlSIdebar from "./ControlSIdebar";
// import { useDispatch, useSelector } from "react-redux";

function Dashboard(props) {
  // const person = useSelector((state) => state.auth);

  // const dispatch = useDispatch();
  const [navigationData, setNagivationData] = useState({});

  useEffect(() => {
    setNagivationData(JsonData);
  }, []);

  // useEffect(() => {
  //   dispatch(fetchUserProfile(user));
  // }, [dispatch, user]);

  return (
    <>
      <AppHeader {...props} />
      <SideNav {...props} data={navigationData.Dashboard} />
      <ControlSIdebar />
    </>
  );
}

export default Dashboard;

import React from "react";
import ContentWrapper from "../utilities/ContentWrapper";
import OverViewDetails from "./OverViewDetails";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../store/actions/notificationsActions";

export default function ConfirmedCaseOverview(props) {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const { success } = notification;
    if (success.message) {
      const { message } = notification.success;
      toast.success(message);
      return dispatch(clearNotifications());
    }
  }, [dispatch, notification]);

  return (
    <ContentWrapper>
      <OverViewDetails {...props} />
      <ToastContainer position="top-center" />
    </ContentWrapper>
  );
}

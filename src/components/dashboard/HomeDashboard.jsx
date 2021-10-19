import MemberDashboard from "../../members/MemberDashboard";
import AdminDashboard from "../../admin/AdminDashboard";
import { useSelector } from "react-redux";

function HomeDashboard(props) {
  const userprofile = useSelector((state) => state.userProfile);
  const adminprofile = useSelector((state) => state.auth);

  const { user } = userprofile.profile;
  console.log(adminprofile.user);

  return (
    <>
      {user && user?.accessLevel === 1 ? (
        <MemberDashboard {...props} user={adminprofile?.user} />
      ) : (
        <AdminDashboard {...props} user={user} />
      )}
    </>
  );
}

export default HomeDashboard;

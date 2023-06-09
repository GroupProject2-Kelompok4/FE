import { useEffect, useCallback } from "react";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { logout } from "../store/features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardDashboard from "../components/CardDashboard";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import {
  Tooltip,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Line,
} from "recharts";

const Dashboard = () => {
  const [cookies, , removeCookie] = useCookies(["userToken"]);
  // const auth = useSelector((state: { auth: AuthState }) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(logout());
        removeCookie("userToken");
        navigate("/");
      }
    });
  }, []);
  useEffect(() => {
    if (!cookies.userToken) {
      dispatch(logout());
    }
  }, [cookies.userToken, dispatch]);
  const data = [
    { name: "April", Register: 100, Placement: 200, Graduates: 500 },
    { name: "May", Register: 200, Placement: 150, Graduates: 200 },
    { name: "June", Register: 300, Placement: 100, Graduates: 300 },
    { name: "July", Register: 100, Placement: 400, Graduates: 100 },
  ];
  document.title = "Dashboard";
  return (
    <Layout>
      <Navbar onLogout={handleLogout} />

      <div className="flex flex-col w-full pt-10 pb-10">
        <CardDashboard />
        <div className="flex justify-center mt-20 ">
          <div className="text-center bg-zinc-200 h-full pt-5 p-5 rounded-xl">
            <LineChart
              width={1400}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 3,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="5 5" />
              <Line dataKey="Register" fill="#8884d8" />
              <Line dataKey="Placement" fill="#8884d8" />
              <Line dataKey="Graduates" fill="#8884d8" />
            </LineChart>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default Dashboard;

import { Outlet, useLocation } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      document.title = "Law.USA";
    } else if (path === "/bookings") {
      document.title = "Bookings";
    } else if (path === "/blogs") {
      document.title = "Blogs";
    }
  }, [location]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <hr className="text-gray-200" />
      <main className="flex-grow flex flex-col justify-center mb-15 mt-4">
        <Outlet />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default UserLayout;
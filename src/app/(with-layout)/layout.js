import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default WithLayout;
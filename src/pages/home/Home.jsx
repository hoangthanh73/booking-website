import Navbar from "../../navbar/Navbar.jsx";
import Header from "./header/Header.jsx";
import Content from "./content/Content.jsx";
import Contact from "../../contact/Contact.jsx";
import Footer from "../../footer/Footer.jsx";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Content />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;

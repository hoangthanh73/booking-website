import Navbar from "../../navbar/Navbar.jsx";
import SearchPopup from "./searchPopup/SearchPopup.jsx";
import SearchList from "./searchList/SearchList.jsx";
import Footer from "../../footer/Footer.jsx";
import './Search.css';

const Search = () => {
  return (
    <div>
      <Navbar />
      <div className='container' id='search-page'>
        <SearchPopup />
        <SearchList />
      </div>
      <Footer />
    </div>
  );
};

export default Search;

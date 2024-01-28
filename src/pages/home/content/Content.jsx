import Cities from "./cities/Cities.jsx";
import TypeHotels from "./typeHotels/TypeHotels.jsx";
import Hotels from "./hotels/Hotels.jsx";

import "./Content.css";

const Content = () => {
    return (
        <main id="main-content">
            <div className="container">
                <Cities />
                <TypeHotels />  
                <Hotels />
            </div>
        </main>
    )
}

export default Content;
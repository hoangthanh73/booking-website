import "./Footer.css";

const Footer = () => {
    const footerData = require("./footer.json");

    return (
        <footer id="footer">
            <ul className="container footer-wrapper">
                {footerData.map((col) => {
                    return (
                        <li key={col.col_number} className='footer-col'>
                            {col.col_values.map((item, item_i) => {
                                return <a className='footer-item' href="#" key={item_i}>{item}</a>
                            })}
                        </li>
                    )
                })}
            </ul>
        </footer>
    )
}

export default Footer;
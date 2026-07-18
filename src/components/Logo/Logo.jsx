import logoIcon from "../../asset/icons/page_icon/android-chrome-192x192.png";
import "./Logo.css";
function Logo() {
    return (
        <div className="logo">
            <img
                src={logoIcon}
                alt="Logo"
                className="logo-icon"
            />
            <span className="logo-text">
                <em>Thanh Phan</em>
            </span>
        </div>
    );
}

export default Logo;

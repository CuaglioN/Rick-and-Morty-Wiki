import react from "react";
import { Link } from "react-router-dom";
import "./UserMenu.css"

const UserMenu = ({ data }) => {

    const resetUser = () => {
        window.location.reload(true);
    }

    return (
        <section className="userContainer">
            <div class="dropdown">
                <button
                    class="btn dropdown-toggle-btn dropdown-toggle"
                    id="dropdownMenuButton"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    data-bs-target="dropdown-menu"
                    type="button"
                    aria-controls="dropdown-menu"
                >
                </button>
                <ul class="dropdown-menu menu-list " aria-labelledby="dropdownMenuButton">
                    <li><span className="userData">{data.username}</span></li>
                    <hr />
                    <li><span className="userData">{data.email}</span></li>
                    <hr />
                    <li><Link to="/login" onClick={resetUser} id="close-sesion-btn" className="justify-content-end">Cerrar Sesión</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default UserMenu;
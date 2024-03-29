import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand text-light" to="#">Jimmy</Link>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="#">Beranda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Pendidikan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Pengalaman</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default navbar;
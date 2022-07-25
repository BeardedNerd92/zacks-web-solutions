import { useRouter } from "next/router";
import Styles from "../styles/toolbar.module.css";
import Logo from "../assets/logo-min.png";
import Image from "next/image";

export function Toolbar() {
  const router = useRouter();

  return (
    <header className={Styles.toolbar}>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container-fluid'>
          <a className='navbar-brand' onClick={() => router.push("/")}>
            <Image src={Logo} alt="Zack's Web Solutions" />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-start'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'>
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                Menu
              </h5>
              <button
                type='button'
                className='btn-close text-reset'
                data-bs-dismiss='offcanvas'
                aria-label='Close'></button>
            </div>
            <div className='offcanvas-body bg-dark'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    onClick={() => router.push("/")}>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' onClick={() => router.push("/about")}>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    onClick={() => router.push("/contact")}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

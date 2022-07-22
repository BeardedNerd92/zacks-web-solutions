import { useRouter } from "next/router";
import Styles from "../styles/toolbar.module.css";
import Logo from "../assets/logo-min.png";
import Image from "next/image";

export function Toolbar() {
  const router = useRouter();

  return (
    <header className={Styles.toolbar}>
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div class='container-fluid'>
          <a class='navbar-brand' onClick={() => router.push("/")}>
            <Image src={Logo} alt="Zack's Web Solutions" />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div
            class='offcanvas offcanvas-start'
            tabindex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'>
            <div class='offcanvas-header'>
              <h5 class='offcanvas-title' id='offcanvasNavbarLabel'>
                Menu
              </h5>
              <button
                type='button'
                class='btn-close text-reset'
                data-bs-dismiss='offcanvas'
                aria-label='Close'></button>
            </div>
            <div class='offcanvas-body bg-dark'>
              <ul class='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li class='nav-item'>
                  <a
                    class='nav-link active'
                    aria-current='page'
                    onClick={() => router.push("/")}>
                    Home
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' onClick={() => router.push("/about")}>
                    About
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' onClick={() => router.push("/contact")}>
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

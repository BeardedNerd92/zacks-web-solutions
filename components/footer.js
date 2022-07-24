export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className='text-center   bg-white text-dark'
      style={{ width: "100%", padding: "20px" }}>
      &copy; {year} by Zack's Web Solutions
    </footer>
  );
}

export default Footer;

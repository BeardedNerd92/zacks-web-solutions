export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className='text-center  fixed-bottom bg-dark text-white'
      style={{ width: "100%", padding: "20px" }}>
      &copy; {year} by Zack's Web Solutions
    </footer>
  );
}

export default Footer;

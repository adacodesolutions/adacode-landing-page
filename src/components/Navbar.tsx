function Navbar() {

  const flareDownloader = () => {
    const link = document.createElement("a");
    link.href ='/public/adacode-flare.pdf';
    link.download = "coursedetails.pdf";
    link.click();
  };

  return (
    <div className="navbar_container" onClick={flareDownloader}>
      {/* <a download href="/public/adacode-flare.pdf"><h3>Download Brochure</h3></a> */}
      <button ><h3>Download Brochure</h3></button>
    </div>
  );
}

// <IoClose />
export default Navbar;

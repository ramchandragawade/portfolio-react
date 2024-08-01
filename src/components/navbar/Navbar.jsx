import './navbar.scss';
const Navbar = () => {
  return (
    <div className='navbar'>
      {/* {Sidebar} */}
      <div className="wrapper">
        <span className='logospan'>Ramchandra Gawade</span>
        <div className="social">
          <a href="#"><img src="/facebook.png" alt="facebook" /></a>
          <a href="#"><img src="/insta.png" alt="instagram" /></a>
          <a href="#"><img src="/linkedin.png" alt="linkedin" /></a>
          <a href="#"><img src="/github.png" alt="github" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
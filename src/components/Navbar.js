import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode} menu`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode === 'light'?'black':'light'}`} href="/">{props.text}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode === 'light'?'black':'light'}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className= "nav-link" href="/">Link</a>
        </li>
      </ul>
      <div className="d-flex">
        <div className="bg-danger rounded mx-2" style={{width : '30px',height : '30px'}} onClick={()=>{props.toggle('danger')}}></div> 
        <div className="bg-primary rounded mx-2" style={{width : '30px',height : '30px'}} onClick={()=>{props.toggle('primary')}}></div> 
        <div className="bg-success rounded mx-2" style={{width : '30px',height : '30px'}} onClick={()=>{props.toggle('success')}}></div> 
        <div className="bg-warning rounded mx-2" style={{width : '30px',height : '30px'}} onClick={()=>{props.toggle('warning')}}></div> 
      </div>
      <div className={`form-check form-switch text-${props.color}`}>
  <input className="form-check-input" type="checkbox" onClick={props.handleClr} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  );
}

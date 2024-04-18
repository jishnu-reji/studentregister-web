import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='container'>
          <div className="row" style={{minHeight:"100vh"}}>
            <div className="ban col-lg-5 d-flex flex-column justify-content-center">
              <div data-aos="zoom-out">
                <h1 className='m-0 ps-1'>Education</h1>
                <p className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum nulla id. Tempore non, cum quos mollitia dolores quisquam id dignissimos eligendi facilis voluptatem, fugiat fugit. Incidunt reprehenderit similique dolore!
                Nulla impedit blanditiis cupiditate officia. Corrupti quia adipisci esse, expedita, ut, doloremque aliquid dolore consequatur eum mollitia deserunt voluptate quod </p>
                <p className='ms-2'>New Student? Click here to register</p>
                <Link to={'/register'}><button className='btn btn-success ms-2'>Register</button></Link>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-center align-items-center">
              <img className='img-fluid w-100' src="https://cdni.iconscout.com/illustration/premium/thumb/ebook-4489908-3832844.png?f=webp" alt="" />
            </div> 
          </div>
        </div> 
    </div>
  )
}

export default Home
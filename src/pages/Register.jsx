import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const [studentDetails,setStudentDetails] = useState({
        name:"",address:"",mobile:"",email:"",gender:"",dob:"",cource:""
    })
    const navigate = useNavigate()

    console.log(studentDetails);

    const handleRegister =async()=>{
        const {name,address,mobile,email,gender,dob,cource}=studentDetails
        if(name&&address&&mobile&&email&&gender&&dob&&cource){
          try{
              const result = await registerAPI(studentDetails)
              console.log(result);
              if(result.status==200){
                toast.success(`${result.data.name} registered successfully`)
                setStudentDetails({name:"",address:"",mobile:"",email:"",gender:"",dob:"",cource:""})
                setTimeout(()=>{
                  navigate('/table')
                },2000)
              }
              else{
                toast.error(result.response.data)
                setStudentDetails({name:"",address:"",mobile:"",email:"",gender:"",dob:"",cource:""})
              }
            }catch(err){
              console.log(err);
            }
        }
        else{
            toast.warning("Please fill the form completely!!!")
        }
    }

    const handleClear = () =>{
        setStudentDetails({name:"",address:"",mobile:"",email:"",gender:"",dob:"",cource:""})
    }

  return (
    <div>
    <div className='log container'>
    <div style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-center">
        <div  style={{minHeight:"100vh",width:"100%"}} className="row r1">
            <div className="pp2 col-lg-4 d-flex justify-content-center align-items-center">
                <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/student-2771385-2315006.png?f=webp" alt="" />
            </div>
            <div className="pp1 d-flex flex-column justify-content-center align-items-center col-lg-8">
                <h2 className='fw-bolder pb-3'>APPLY AS A STUDENT</h2>
                <div className="row w-100">
                    <div className="col-lg-6">
                        <input value={studentDetails.name} onChange={(e)=>setStudentDetails({...studentDetails,name:e.target.value})}  className='form-control tt mb-3' type="text" placeholder='Name'/>
                        <input value={studentDetails.address} onChange={(e)=>setStudentDetails({...studentDetails,address:e.target.value})} className='form-control tt mb-3' type="text" placeholder='Address'/>
                        <input value={studentDetails.mobile} onChange={(e)=>setStudentDetails({...studentDetails,mobile:e.target.value})} className='form-control tt mb-3' type="text" placeholder='Mobile'/>
                        <input value={studentDetails.email} onChange={(e)=>setStudentDetails({...studentDetails,email:e.target.value})} className='form-control tt mb-3' type="mail" placeholder='email'/>
                    </div>
                    <div className="col-lg-6">
                        <Form.Select className='mb-3' value={studentDetails.gender} onChange={(e)=>setStudentDetails({...studentDetails,gender:e.target.value})}>
                            <option>Gender</option>
                            <option>Male</option>
                            <option >Female</option>
                        </Form.Select>
                        <input value={studentDetails.dob} onChange={(e)=>setStudentDetails({...studentDetails,dob:e.target.value})} className='form-control mb-3' type="date" placeholder='Date of Birth'/>
                        <Form.Select value={studentDetails.cource} onChange={(e)=>setStudentDetails({...studentDetails,cource:e.target.value})} >
                            <option>Cource</option>
                            <option>Biology</option>
                            <option >Computer Science</option>
                            <option >Commerce</option>
                            <option >Humanities</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='d-flex'>
                    <button onClick={handleClear} className='btn btn-warning mb-3 me-2 mt-3'>Cancel</button>
                    <button onClick={handleRegister} className='btn btn-success mb-3 mt-3'>Register</button>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer position="top-center" theme="colored" autoClose={3000}/>

</div>
    </div>
  )
}

export default Register
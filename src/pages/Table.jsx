import React, { useEffect, useState } from 'react'
import { getallUsersAPI } from '../services/allAPI';


function Table() {

    const [allusers,setallusers] = useState([])

    const getAllUsers=async()=>{
        try{
          const result = await getallUsersAPI()
          console.log(result);
          if(result.status==200){
            setallusers(result.data)
          }
        }
        catch(err){
          console.log(err);
        }
    }

    console.log(allusers);
    useEffect(()=>{
        getAllUsers()
    },[])

  return (
    <div className='container'>
        <h4 className='text-center text-danger my-3 p-2'>STUDENT DETAILS</h4>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Cource</th>
          </tr>
        </thead>
        <tbody>
            {allusers?.length>0 &&
            allusers.map((user)=>(
                <tr >
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td>{user.cource}</td>
                </tr>
            ))

            }

        </tbody>
      </table>
    </div>
  )
}

export default Table
import React from 'react'
import { useState } from 'react'
import StudentData,{ClearUpAllData} from '../../store/authdata'
const Signup = () => {
    const initialState = {
        rollNumber : "",
        UserEmail : "",
        studentName : "",
        password : ""
    }
    const [userData,setData] = useState(initialState)
    const HandleInputs = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(`${name}:${value}`)
        setData({...userData,[name]:value})
    }
    const HandleSubmit= (e)=> {
        e.preventDefault();
        const newRecord = {...userData};
        StudentData.push(newRecord);
        console.log(newRecord);
        console.table(StudentData);
        setData(initialState);
    }
    return (
        <>
            <div className="container-sm">
                <br /> <br />
                <form onSubmit={HandleSubmit}>
                    
                    <div className="form-group py-2">
                        <label >Roll Number</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputrollno" 
                        name='rollNumber' 
                        placeholder="Enter Roll no" 
                        required
                        autoComplete = 'off'
                        value={userData.rollNumber}
                        onChange={HandleInputs}
                         />
                    </div>
                    <div className="form-group py-2" >
                        <label >Email</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputemail"
                         placeholder="Enter email address" 
                         name='UserEmail'
                         required
                         autoComplete = 'off'
                         value={userData.UserEmail}
                         onChange={HandleInputs}
                         />
                    </div>
                    <div className="form-group py-2" >
                        <label >Student name</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputname"
                         placeholder="Enter name" 
                         name='studentName'
                         required
                         autoComplete = 'off'
                         value={userData.studentName}
                         onChange={HandleInputs}
                         />
                    </div>
                    <div className="form-group py-2" >
                        <label >Password</label>
                        <input type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password" 
                        required
                        autoComplete = 'off'
                        name='password'
                        value={userData.password}
                        onChange={HandleInputs}
                         />
                         
                    </div> <br />
                    <button type="submit"
                     className="btn btn-primary">Submit data
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup
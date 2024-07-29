import { useRef } from "react";



const Kohli=()=>{
    const Firstname=useRef();
    const Lastname=useRef();
    const gmail=useRef();
    const Phonenumber=useRef();
     

    const SubmitHandler=(event)=>{
       event.preventDefault()
        const saveFirstname=Firstname.current.value;
        const savelasttname=Lastname.current.value;
        const savegmail=gmail.current.value;
        const savenumber=Phonenumber.current.value;
        console.log(saveFirstname,savelasttname,savegmail,savenumber)

        const list=[]
        const Registionlist={
            Firstnamename:saveFirstname,
            lastname:savelasttname,
            gmail:savegmail,
            number:savenumber
        }
        list.push(Registionlist)
        window.localStorage.setItem("key",JSON.stringify(list))
    

    }
    
    return(
        <>
<h1> Please Register </h1>
        <form onSubmit={SubmitHandler}>
  <div className="mb-3">
    <label htmlFor="exampleFirstName" className="form-label">
      First Name 
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleFirstName"
      aria-describedby="emailHelp"
      ref={Firstname}
     
    />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleLastName" className="form-label">
      Last Name 
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleLastName"
      ref={Lastname}
      
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputUsername" className="form-label">
      Gmail
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputUsername"
      ref={gmail}
     
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPhone" className="form-label">
      Phone Number
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputPhone"
      ref={Phonenumber}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
    </>
    )
};
export default Kohli
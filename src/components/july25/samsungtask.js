import { useRef,useState } from "react";
const Samsung=()=>{
    const mblname=useRef();
    const mblmodel=useRef();
    const mblprice=useRef();
    const mblbattery=useRef()
    const[error,seterror]=useState("null")
    const SubmitEvent=(event)=>{
      event.preventDefault();
      const name=mblname.current.value;
      const model=mblmodel.current.value;
      const price=mblprice.current.value;
      const battery=mblbattery.current.value;
      console.log(name,model,price,battery)

      if(name.length<=10 && model.length<=10 && price.length<=10 && battery.length<=10)
      {
        seterror(null)
        alert("accuration details are required")
         
      }
      else{

        seterror("please enter valid credientals")

      }
    };
    return(
        <>
        <h2>MOBILE TASK:</h2>
        <div>
            <form onSubmit={SubmitEvent}>
  <div className="mb-3 mt-3">
    <label htmlFor="mblName" className="form-label">
    MobileName:
    </label>
    <input
      type="text"
      className="form-control"
      id="mblname"
      placeholder="Enter name"
      name="mblname"
      ref={mblname}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="Mblmodel" className="form-label">
        MobileModel:
    </label>
    <input
      type="number"
      className="form-control"
      id="mblmodel"
      placeholder="Enter model"
      name="mblmodel"
      ref={mblmodel}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="Mblprice" className="form-label">
        ModelPrice:
    </label>
    <input
      type="number"
      className="form-control"
      id="mblprice"
      placeholder="Enter price"
      name="mblprice"
      ref={mblprice}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="Mblbattery" className="form-label">
        Battery:
    </label>
    <input
      type="number"
      className="form-control"
      id="mblbattery"
      placeholder="Enter batterycapacity"
      name="mblbattery"
      ref={mblbattery}
    />
  </div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>    
        </div>
        </>

    )
};
export default Samsung;
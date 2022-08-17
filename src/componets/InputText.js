import React, {useState}from 'react'


import NavBar from './NavBar';
export default function TextFormin(props) {
  const [text, setText] = useState ("enter text here" );
  
 
   
  let myStyle={
 
  }
    const onChangedelm=(event)=>
    {
        setText(event.target.value);
    }
   const handelUPKey=()=>
   {
    let newText=text.toUpperCase();
    setText(newText);
    
   }


   const handelLOwerKey=()=>
   {
    let newText=text.toLowerCase();
    setText(newText);
   
   }
   const handeClear=()=>
   {
    let newText="";
    setText(newText);
   }
   var [myStyleelm, setStyle] = useState ({
    color:'black',
    backgroundColor:'white'
  })
  var [myStyleBtn, setBtnStyle] = useState ("Dark mode")

   const handeDarkMode=()=>
   {
   if(myStyleelm.color ==='black')
   {
    
    console.log('white')
    setStyle({
      color:'white',
      backgroundColor:'black'
    })
    setBtnStyle("off")

    }
    if(myStyleelm.color ==='white')
    {
      setStyle({
      color:'black',
      backgroundColor:'white'
    })
    setBtnStyle("Dark mode")
   }
   }
    
   
   
  return (
  <>
  <NavBar/>
    <div className='container'style={myStyleelm} >
    <div className="mb-3">
        <h3>{props.heading}</h3>

        < textarea className='form-control'  value={text} onChange={onChangedelm}  id="myBox" rows={6}></textarea>
        <button type="button" className="btn btn-primary  my-4 mx-2" onClick={handelUPKey}>change to upper</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handelLOwerKey}>change to lower</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handeClear}>clear text</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handeDarkMode}>{myStyleBtn}</button>
     </div>
     <div className='container my-3' >
        <h1>your text summary</h1>
        <p>words : {text.split(" ").length}  .
            charecters : {text.length}</p>
     </div>
 
   </div>
  

  
    
  
</>
  )
}
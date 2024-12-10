import { useState } from 'react'
import './App.css'

function App() {
  const [name , familya] = useState("Shaxriyor");
  const [events , SetEvents] = useState([
    {title : "What is your name :" , id: 1,},
    {title : "My name is Shaxriyor", id: 2,},
    {title : "How old you :" , id: 3,},
    {title : "l'm sixteen yers old" , id: 4,},
    {title : "what is your form :" , id: 5,},
    {title : "l'm from Uzbekistan", id: 6,}
  ]);
  const [ShowContend , SetShowcontend] = useState(true);
   const ism = () =>{
      familya("Javohir")
   };

   const handleDalete = (id) => {
    SetEvents((prev) =>{
      return prev.filter((event)=>{
        return event.id !== id
      });
    });
   }
  return (
    <div className='div'>
       <h1>{name}</h1>
        <button onClick={ism}>Bosilsin :</button>
        <br />
        <br />
        <hr />
        <button onClick={()=> SetShowcontend(false)} >Hide Contend</button>
        <button onClick={()=> SetShowcontend(true)} >Show Contend</button>
      
        {ShowContend && <div>
          {events.length === 0 && <h3>Not Contend yet :(</h3>}
          {events.map((event)=>{
          console.log(event);
          return(
             <div key={event.id}>
               <h1>{event.title}</h1>
               <button onClick={()=> handleDalete(event.id)}>Delete</button>
             </div>
          )
        })}
         </div>}

    </div>
  )
}

export default App

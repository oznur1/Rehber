 
 import React from 'react'
 import { RiEditFill } from "react-icons/ri";
 import { LiaTrashAlt } from "react-icons/lia";
 import { FaPhone } from "react-icons/fa";
 import { IoMail } from "react-icons/io5";

 function Card({contact,handleDelete,handleEdit}) {
    const[name,surname]=contact.name.split(" ");

   return (
     <div className="card">
      {/* Buttons */}
  <div className="buttons">
  <button  onClick={() => handleEdit(contact)}
  ><RiEditFill /></button>
  <button  onClick={() => handleDelete(contact.id)}
  ><LiaTrashAlt /></button>
  </div>

      {/* User Detail */}
      <h1>{name[0]} {surname[0]} {" "}

      </h1>
      <h3>{contact.name}</h3>
      <p>{contact.position}</p>
      <p>{contact.company}</p>

      {/* Buttoom */}
      <div className="bottom">
        <div>
            <span><FaPhone /></span>
            <span>{contact.phone}</span>
        </div>
        <div>
            <span><IoMail /></span>
            <span>{contact.email}</span>
        </div>
      </div>
     </div>
   );
 }
 
 export default Card;
 
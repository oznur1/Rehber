import { useEffect,useState } from "react";
import api from "./api"
import { RiSearchLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoPersonAdd } from "react-icons/io5";
import Card from "./components/Card"
import Modal from "./components/Modal";

function App() {
  
  //State kurulumu
  const [contacts,setContacts]=useState([]);
  const [isModelOpen,setIsModelOpen]=useState(false);
  const [editItem,setEditItem]=useState(null);
 
  useEffect(()=>{
 api.get("/contact")
 .then((res)=>setContacts(res.data))
 },[]);
  
 //Form gönderildiğinde calışacak fonk
 const handleSubmit=(e)=>{
// Sayfa yenilenmesi engelle
e.preventDefault();
  const query= e.target[1].value;

  //Api'a gönderilecek parametreye eriş
  const params ={
    q: query,
  };

  //Api'a istek at ve gelen veriyi state'e aktar
  api.get("/contact", {params}).then((res)=>setContacts(res.data));
 };
 
const handleDelete=(id)=>{
  const res=confirm("Kişiyi silmek istediğinizden eminmisiniz?");

  if (res) {
   
    api.delete(`/contact/${id}`).then(() => {
      
      const updatedContacts = contacts.filter((contact) => contact.id != id);

  
      setContacts(updatedContacts);
    });
  }
}

const handleEdit = (contact) => {
 
  setIsModelOpen(true);

 
  setEditItem(contact);
};

console.log(editItem);



 return (
  <div className="app">
{/* Header */}
<header>
  {/* Logo */}
  <h1>Rehber</h1>
{/* Form */}
<div>
<form onSubmit={handleSubmit}>
  <button>
  <RiSearchLine />
  </button>
  <input type="search" placeholder="Kişi Aratınız.."/>
</form>

<button className="ns"><IoMenu /></button>
<button className="ns"><HiMiniSquares2X2 /></button>
<button onClick={()=>setIsModelOpen(true)}
className="add"><IoPersonAdd />
<span>Yeni Kişi</span></button>
</div>
</header>

{/* Main */}
<main>
  {contacts.map((contact)=>( 
    <Card contact={contact}
    handleDelete={handleDelete}
    handleEdit={handleEdit}
    key={contact.id}/> 

  ))}

</main>

{/* Model */}

  <Modal
   editItem={editItem}
   setEditItem={setEditItem}
   setContacts={setContacts}
   isModelOpen={isModelOpen}
   setIsModelOpen={setIsModelOpen}
  
  
  />

  </div>
  );
}

export default App;

import { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    skills: ""
  });

  const handleSubmit = async () => {
    await fetch("http://localhost:5002/api/admin/add-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    alert("Internship Added ✅");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add Internship</h2>

      <input placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
      <input placeholder="Company" onChange={(e)=>setForm({...form,company:e.target.value})}/>
      <input placeholder="Location" onChange={(e)=>setForm({...form,location:e.target.value})}/>
      <input placeholder="Skills" onChange={(e)=>setForm({...form,skills:e.target.value})}/>

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}



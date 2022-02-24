import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {


  const [users,setUsers] = useState([]);
  const [query,setQuery] = useState("");
  const [searchResult,setSearchResult] = useState([])

  useEffect(()=>{
    getUserList();
    const res = users.filter(user => user.first_name.includes(query))
    setSearchResult(res);
  },[query])

  const getUserList = async() =>{
    
    const res = await axios.get("https://reqres.in/api/users?page=2");
    // console.log(res.data.data);
    setUsers(res.data.data)
    
  }

  // const searchName = () =>{

   
  // }




  return (
    <div className="App">
      <span>Search</span>
      <input type="text" 
      onChange={(e)=>setQuery(e.target.value)}
      value={query}
      />
      {/* <h2>Users List </h2>
      {users.map(user=>(
        <span key={user.id}>{user.first_name} <br/></span>
      ))}
      <hr/> */}
     {
       searchResult.map(user=>(
        <span key={user.id}>{user.first_name} <br/></span>

       ))
     }

      
    </div>
    
  );
}

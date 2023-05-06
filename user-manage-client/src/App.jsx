import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])

  const handleAddUser = event => {
    event.preventDefault() ;
    const form = event.target ;
    const name = form.name.value ;
    const email = form.email.value ;
    const user = {name , email}
    fetch("http://localhost:4000/users" , {
      method: "POST" ,
      headers : {  "content-type": "application/json" } ,
      body: JSON.stringify(user) 
    })
    .then(res => res.json())
    .then(data => {
      const newUser = [...users , data]
      setUsers(newUser)
      form.reset()
      console.log(newUser)
    })
  }
  return (
    <>

      <h1>Manage User system </h1>
      <p>{users?.length}</p>
      <div>
        {
          users?.map(user => <p key={user.id}>{user.id} - {user.name} - </p>)
        }
      </div>
      <form  onSubmit={handleAddUser}>

        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br /> <br />
        <input type="submit" value="Submit" />


      </form>
    </>
  )
}

export default App

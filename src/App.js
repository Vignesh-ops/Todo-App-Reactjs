import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
import Additem from './Additem';
import Searchitem from './Searchitem';

function App() {


  const [Tododata, setTodo] = useState(JSON.parse(localStorage.getItem('tododata')))

  function handleCheck(itemid) {
    const listitems = Tododata.map((data) => data.id === itemid ? { ...data, checked: !data.checked } : data)
    setTodo(listitems)
    localStorage.setItem('tododata', JSON.stringify(listitems))


  }

  function handledelete(deleteid) {
    const listitems = Tododata.filter((data) => data.id != deleteid)
    setTodo(listitems)
    localStorage.setItem('tododata', JSON.stringify(listitems))

  }
  const [Additems, setitems] = useState("")
  const [Search, setsearch] = useState("")


  const additem = (name) => {
    const id = Tododata.length ? Tododata[Tododata.length - 1].id + 1 : 1
    console.log(id)
    const addnewitem = { id, checked: false, name }
    const Tododatas = [...Tododata, addnewitem]
    setTodo(Tododatas)
    localStorage.setItem('tododata', JSON.stringify(Tododatas))
 
  }

  const handletodosubmit = (e) => {
    e.preventDefault()
    if (!Additems) return;
    additem(Additems)
    setitems("")
  }

  return (
    <div className="App">
      <Header />
      <Additem Additems={Additems} setitems={setitems} handletodosubmit={handletodosubmit} />
      <Searchitem Search={Search} setsearch ={setsearch} />
      <Content Tododata={Tododata.filter(data => (data.name).toLowerCase().includes(Search.toLowerCase()))} handledelete={handledelete} handleCheck={handleCheck} Additem={Additems} />
      <Footer itemslength={Tododata.length} />
    </div>
  );
}

export default App;

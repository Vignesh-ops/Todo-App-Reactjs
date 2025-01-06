import './App.css';
import handlerequest from './Service.js';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useRef, useEffect } from "react";
import Additem from './Additem';
import Searchitem from './Searchitem';

// import Colordisplay from './Colordisplayd';
function App() {
  const APIURL = "http://localhost:3500/items"
  // Todo app functions
  const [Tododata, setTodo] = useState([])
  const [fetcherror, setfetcherror] = useState(null)
  const [isloading, setisloading] = useState(true)
  useEffect(() => {
    const fetchitems = async () => {
      try {
        const response = await fetch(APIURL);
        if (!response.ok) throw Error("Something went wrong");
        const listitems = await response.json()
        setTodo(listitems)

      } catch (err) {
        console.log("error", err)
        setfetcherror(err)
      } finally {
        setisloading(false)
      }
    }
    (async () => await fetchitems())()
  }, [])
  function handleCheck(itemid) {
    const listitems = Tododata.map((data) => data.id === itemid ? { ...data, checked: !data.checked } : data)
    setTodo(listitems)
    localStorage.setItem('tododata', JSON.stringify(listitems))


  }

  const handledelete = async (deleteid) => {
    const listitems = Tododata.filter((data) => data.id != deleteid)
    setTodo(listitems)
    // localStorage.setItem('tododata', JSON.stringify(listitems))
    const postobj = {
      method: "DELETE"
    }
    const deleteurl = `${APIURL}/${deleteid}`
    const result = await handlerequest(deleteurl, postobj);
    if (result) setfetcherror(result);
  }
  const [Additems, setitems] = useState("")
  const [Search, setsearch] = useState("")


  const additem = async (name) => {
    const id = Tododata.length ? Tododata[Tododata.length - 1].id + 1 : 1
    console.log(id)
    const addnewitem = { id, checked: false, name }
    const Tododatas = [...Tododata, addnewitem]
    // localStorage.setItem('tododata', JSON.stringify(Tododatas))

    const postobj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addnewitem)
    }
    setTodo(Tododatas)
    const result = await handlerequest(APIURL, postobj);
    if (result) setfetcherror(result);

  }

  const handletodosubmit = (e) => {
    e.preventDefault()
    if (!Additems) return;
    additem(Additems)
    setitems("")
  }
  const addipref = useRef()

  // color display

  const [color, setcolors] = useState("")
  const [hexcolor, hex] = useState("")
  const [Offset, toggleBgOffset] = useState(true)

  const changebg = () => {
    toggleBgOffset(!Offset);
  };


  return (
    <div className="App">
      <Header />
      <Additem Additems={Additems} setitems={setitems} handletodosubmit={handletodosubmit} addipref={addipref} />
      <Searchitem Search={Search} setsearch={setsearch} />
      <main>
        {fetcherror && <p style={{ color: 'red' }}>Error: {fetcherror.message}</p>}
        {isloading && <p>Loading please wait ....</p>}
        {!fetcherror && !isloading &&
          <Content Tododata={Tododata.filter(data => (data.name).toLowerCase().includes(Search.toLowerCase()))} handledelete={handledelete} handleCheck={handleCheck} Additem={Additems} />
        }

        {/* <Colordisplay color={color}  hexcolor={hexcolor} hex={hex} setcolors={setcolors} changebg={changebg} Offset={Offset}  /> */}

      </main>
      <Footer itemslength={Tododata.length} />

    </div>
  );
}

export default App;

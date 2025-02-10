import { useState, useEffect } from 'react'
import NavbarDark from './components/navbar'
import Manager from './components/manager'
import { ToastContainer, toast } from 'react-toastify';

function App() {
   const [ispassword, setispassword] = useState(false)
   const [searchQuery, setsearchQuery] = useState('')
   const handleSearchChange = (e) => {
    setsearchQuery(e.target.value.trim())
    
    
   }
    const [form, setform] = useState({
      id: '',
      name: '',
      url: '',
      password: ''
    });
    const [passwordarray, setpasswordarray] = useState([])
  
    const changepassword = () => {
      setispassword(!ispassword)
    }
    const savepassword = () => {
      if(form.name == '' || form.url == '' || form.password == ''){
        alert("Please fill in all fields before submitting!")
      }
      else{

      
      
      setpasswordarray([...passwordarray, form])
      localStorage.setItem("form", JSON.stringify([...passwordarray, form])) // Save the updated array to localStorage
      setform({
        name: '',
        url: '',
        password: '',
        iseye: false
      })
    }
    }
  
    const onchange = (e) => {
      const Id = Date.now()
      setform({ ...form, id: Id, [e.target.name]: e.target.value, iseye: false });
    }
    const deletepassword = (id) => {
      console.log(id);
      const updatePasswordArray = passwordarray.filter((e) => e.id !== id)
      setpasswordarray(updatePasswordArray)
      localStorage.setItem("form", JSON.stringify(updatePasswordArray));
  
    }
    const toggle = (id) => {
      
      const newarr = passwordarray.map((e) => {
        if(e.id === id){
          return { ...e, iseye: !e.iseye }
        }
        return e
      })
  
      setpasswordarray(newarr)
      localStorage.setItem("form", JSON.stringify(newarr))
    }
    const editpassword = (id) => {
      const updatePasswordArray = passwordarray.filter((e) => e.id !== id)
      setpasswordarray(updatePasswordArray)
      localStorage.setItem("form", JSON.stringify(updatePasswordArray));
      const pass = passwordarray.find((e) => e.id === id)
      setform({
        name: pass.name,
        url: pass.url,
        password: pass.password
      })
    }
    useEffect(() => {
      const localForm = JSON.parse(localStorage.getItem('form')) || [] 
      setpasswordarray(localForm)
    }, [])
    const Copy = (text) => {
      toast(' copied to clipboard ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigator.clipboard.writeText(text)
    }
  return (
    <>
    {/* <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-full w-full rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class=" hidden absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}
   {/* <div className="w-screen h-screen bg-gradient-to-br from-[#1e2939] via-[#334155] to-[#64748b]"> */}
    <NavbarDark
    handleSearchChange = {handleSearchChange}
    searchQuery={searchQuery}
    />
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <Manager
      changepassword ={ changepassword}
      savepassword ={savepassword}
      onchange = {onchange}
      deletepassword = {deletepassword}
      toggle = {toggle}
      editpassword ={editpassword}
      form = {form}
      ispassword={ispassword}
      passwordarray ={passwordarray}
      searchQuery = {searchQuery}
      Copy = {Copy}
      />
      {/* </div> */}
    {/* </div> */}
      
    </>
  )
}

export default App

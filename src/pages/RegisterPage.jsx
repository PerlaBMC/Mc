import { useState, useContext } from 'react';
import AuthContext from '../context/authContext';


const initForm = {
    name: "",
    email: "",
    password: ""
  }; 

const RegisterPage = () => {
    const [form, setForm] = useState(initForm)
    
    const {user, registrarUsuario} = useContext(AuthContext)
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
    e.preventDefault();
      
    await registrarUsuario(form)
  
  setForm (initForm)
  }


  return (
    <>
 <div className='registerPage'> 
 <div className='container loginPage'> 
<main className='row'>
<article className='col'>
<div className="container" style={{display:"flex", justifyContent:"end"}}>
  <form className="form" onSubmit={handleSubmit}>
    <p className="title">Registra tu cuenta</p>
    <input placeholder="Nombre de usuario"  type="text" className="username input" id="inputName"  name='name' value={form.name} onChange={handleChange} />
    <input placeholder="Password" className="password input" type="password" id="inputPassword" name='password' value={form.password} onChange={handleChange}/>
    <input placeholder="email" className="password input" type="text" id="inputEmail" name='email' value={form.email} onChange={handleChange}  />
    <button className="btnForm" type="submit">Iniciar sesión</button>
  </form>
</div>
</article>
</main>
<section className='row'>
  <article className='col'>
  {user?.name}
  </article>
</section>
</div>
 </div>


  {/*  <main className='row'>
<article className='col'>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="inputName" className="form-label">Nombre de usuario</label>
    <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" name='name' value={form.name} onChange={handleChange}/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword" name='password' value={form.password} onChange={handleChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email</label>
    <input type="text" className="form-control" id="inputEmail" name='email' value={form.email} onChange={handleChange} />
  </div>


  <button type="submit" className="btn btn-primary">Registrar Usuario</button>
</form>
</article>
</main>
<section className='row'>
  <article className='col'>
{user?.name}
  </article>
</section>*/}
    </>
  )
}

export default RegisterPage
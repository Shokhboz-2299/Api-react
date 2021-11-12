
import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/header';


function App() {
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <>
      <Header color = {theme} setColor = {setTheme} />
      <main className={` ${theme}`}>
        {users.length > 0 && <ul className="list-unstyled container d-flex flex-wrap justify-content-around m-0">
          {users.map(user => (
            <li className="card-list card col-md-3 my-3" key={user.id}>
              <div className="card-body">
                <h5 className="card-title"><span className="card-text-title">Name : </span> {user.name}</h5>
                <h6 className="card-subtitle mb-2"><span className="card-text-title">Username : </span> {user.username}</h6>
                <p className="card-text"><span className="card-text-title">Address : </span>{user.address.street}, {user.address.city}</p>
                <div><span className="card-text-title"> Email : </span><a href={`mailto:${user.email}`} className="card-link">{user.email}</a></div>
                <div><span className="card-text-title">Phone number : </span> <a href={`tel:${user.phone}`} className="card-link">{user.phone}</a></div>
                <div><span className="card-text-title"> Website : </span><a href="/" className="card-link">{user.website}</a></div>
                <p className="card-text"><span className="card-text-title">Company : </span>  {user.company.name}, {user.company.catchPhrase}</p>

              </div>

            </li>
          ))
          }
        </ul>
        }
      </main>
    </>
  );
}

export default App;


import "./header.scss";

function Header({ color, setColor }) {
  const hundleSetTheme = (e) => {
    setColor(e.target.value);
    window.localStorage.setItem("theme", e.target.value);
  }
  return (
    <>
      <header className="container">
        <h1 className="text-center text-white mt-4">Users API</h1>
        <select onChange={hundleSetTheme}>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </header>
    </>
  )
}

export default Header;
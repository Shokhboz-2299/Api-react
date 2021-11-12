
import "./header.scss";

function Header({ color, setColor }) {
  const hundleSetTheme = (e) => {
    setColor(e.target.value);
    window.localStorage.setItem("theme", e.target.value);
  }
  return (
    <>
      <header className={color}>
        <h1 className={`text-center ${color}  pt-4`}>Users API</h1>
        <select className = {`selectStyle ${color}`} onChange={hundleSetTheme}>
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </header>
    </>
  )
}

export default Header;
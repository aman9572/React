import "./styles.css";

function Greet({ title, name }) {
  <h1>
    Welcome to my greet {title} {name}
  </h1>;
}

function Welcome({ title, name, age }) {
  return (
    <div>
      <Greet />
      <h1>
        {" "}
        welcome to my react class title {title} {name}
      </h1>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <Welcome title="Mr" name="aman" age={22} />
    </div>
  );
}

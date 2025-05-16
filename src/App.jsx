import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/AppHeader";
import Counter from "./components/Counter";
import Controller from "./components/Controller";
import Container from "./components/Container";
import "./App.css";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy == false ? <Counter></Counter> : <Privacy></Privacy>}

            <Controller></Controller>
          </div>{" "}
        </div>
      </Container>
    </>
  );
}

export default App;

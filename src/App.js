import "./App.css";
import Counter from "./components/logicalComponents/counter";
import RepoInfo from "./components/logicalComponents/repoInfo";
import Store from "./store/store";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Store>
        <Container maxWidth="sm">
          <Counter />
          <RepoInfo />
        </Container>
      </Store>
    </div>
  );
}

export default App;

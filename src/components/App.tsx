import { MyComponent } from "./MyComponent";
import "./App.css";
import { greet } from "../greet";

function App() {
    return (
        <div className="App">
            <MyComponent />

            {greet("World")}
        </div>
    );
}

export default App;

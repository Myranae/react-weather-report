import "./App.css";
import Temperature from "./components/Temperature";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> Weather Report</h1>
            </header>
            <main>
                <Temperature />
            </main>
        </div>
    );
}

export default App;

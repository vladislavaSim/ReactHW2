import Counter from '../src/components/Counter'
import ValidationForm from "./components/ValidationForm";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className='container'>
      <Counter />
      <ValidationForm />
      <ToDo />
    </div>
  );
}

export default App;

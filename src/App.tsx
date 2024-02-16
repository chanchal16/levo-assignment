import "./App.css";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="h-full ">
      <div className="flex flex-col justify-center px-8">
        <h1 className="text-brown text-4xl">lorem ispsum dolar</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus nesciunt pariatur veritatis sunt nulla libero ea error
          hic dolor, cum sequi culpa dolores, voluptates quidem, corrupti
          suscipit corporis illum magni!
        </p>
      </div>
      <Articles />
    </div>
  );
}

export default App;

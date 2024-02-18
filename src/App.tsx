import "./App.css";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="h-full flex flex-col gap-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-brown font-bold text-4xl leading-relaxed">
          Stay Informed, Stay Inspired
        </h1>
        <p className="my-1 text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus nesciunt pariatur veritatis sunt nulla libero ea error
          hic dolor, cum sequi culpa dolores, voluptates quidem, dolor sit amet
          consectetur adipisicing elit. Necessitatibus nesciunt pariatur
          corrupti suscipit corporis illum magni!
        </p>
      </div>
      <Articles />
    </div>
  );
}

export default App;

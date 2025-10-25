import Card from "./components/card"
function App() {
    return (
      <>
    <h1 className="bg-green-400 text-black rounded-md ml-150 mb-4 p-1">Tailwind React</h1>
    <Card username="Anurima" price="382" image="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg"/>
    <Card username="Rajveer" image="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg"/>
    </>
  )
}

export default App

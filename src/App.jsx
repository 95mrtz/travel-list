import { useEffect, useState } from "react";
import dataJSON from "./util/data.json";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CantItems from "./components/CantItems";
import AddItem from "./components/AddItem";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(dataJSON);
  const [showAddItem, setShowAddItem] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [showDeleteItems, setShowDeleteItems] = useState(false);

  useEffect(() => {
    const checkedItems = data
    .flatMap((category) => category.items) 
    .filter((item) => item.check);

    setCount(checkedItems.length);
  }, [data]);

  const handleShowAddItem = (title) => {
    const itemTitle = data.find((i) => i.title === title);
    setSearchItem(itemTitle);
    setShowAddItem(true);
  }

  return (
    <>
      <main className="h-full w-full min-h-screen bg-gray-100 font-sans flex flex-col items-center">
       <Header />
       <CantItems count={count} />
       <section className="mb-5">
               <button className="p-3 rounded-sm bg-gray-500 text-white uppercase font-bold" onClick={() => setShowDeleteItems(!showDeleteItems)}> {showDeleteItems ? "dejar de borrar items" : "borrar items"} </button>
       </section>
       {showAddItem &&
        <AddItem searchItem={searchItem} data={data} setData={setData} setShowAddItem={setShowAddItem} /> }
        <section className="w-full max-w-4xl mb-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <List
            data={data}
            setData={setData}
            show={handleShowAddItem}
            showDeleteItem={showDeleteItems}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;

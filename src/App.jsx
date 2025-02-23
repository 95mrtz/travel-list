import { useEffect, useState } from "react";
import data from "./util/data.json";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CantItems from "./components/CantItems";
import AddItem from "./components/AddItem";

function App() {
  const [count, setCount] = useState(0);
  const [dataInfo, setDataInfo] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const checkedItems = dataInfo
    .flatMap((category) => category.items) 
    .filter((item) => item.check);

    setCount(checkedItems.length);
  }, [dataInfo]);

  const showAddItem = (title) => {
    const itemTitle = dataInfo.find((i) => i.title === title);
    setSearchTitle(itemTitle);
    setShowModal(true);
  }

  return (
    <>
      <main className="h-full w-full min-h-screen bg-gray-100 font-sans flex flex-col items-center">
       <Header />
       <CantItems count={count} />
       {showModal &&
        <AddItem searchTitle={searchTitle} dataInfo={dataInfo} setDataInfo={setDataInfo} setShowModal={setShowModal} /> }
        <section className="w-full max-w-4xl mb-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <List
            dataInfo={dataInfo}
            setDataInfo={setDataInfo}
            show={showAddItem}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import data from "./util/data.json";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CantItems from "./components/CantItems";

function App() {
  const [count, setCount] = useState(0);
  const [dataInfo, setDataInfo] = useState(data);

  useEffect(() => {
    const checkedItems = dataInfo
    .flatMap((category) => category.items) 
    .filter((item) => item.check);

    setCount(checkedItems.length);
  }, [dataInfo]);

  return (
    <>
      <main className="h-full w-full min-h-screen bg-gray-100 font-sans flex flex-col items-center">
       <Header />
       <CantItems count={count} />
        <section className="w-full max-w-4xl mb-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <List
            dataInfo={dataInfo}
            setDataInfo={setDataInfo}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;

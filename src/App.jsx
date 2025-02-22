import { useEffect, useState } from "react";
import data from "./util/data.json";

const Information = ({ dataInfo, onChangeCheckbox }) => {
  return (
    <>
      {dataInfo.map((items) => (
        <article key={items.title} className="pl-2 pr-2 flex flex-col gap-2">
          <article className="flex justify-between">
            <h2 className="text-xl font-bold">{items.title}</h2>
            <button className="pt-1 pb-1 pl-2 pr-2 flex justify-center items-center cursor-pointer">
              +
            </button>
          </article>
          <ul className="list-inside flex flex-col items-start gap-2">
            {items.items.map((item) => (
              <li key={item.name} className="flex gap-2">
                <input
                  type="checkbox"
                  id={item.name}
                  name={item.name}
                  value={item.name}
                  checked={item.check}
                  onChange={() => onChangeCheckbox(items.title, item.name)}
                />
                <label htmlFor={item.name}>{item.name}</label>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [dataInfo, setDataInfo] = useState(data);

  useEffect(() => {
    const checkedItems = dataInfo
    .flatMap((category) => category.items) 
    .filter((item) => item.check);

    setCount(checkedItems.length);
  }, [dataInfo]);

  const onChangeCheckbox = (title, name) => {
    const itemTitle = dataInfo.find((i) => i.title === title);

    if (itemTitle) {
      const updatedItems = itemTitle.items.map((i) => {
        if (i.name === name) {
          return { ...i, check: !i.check };
        }
        return i;
      });

      const updatedData = dataInfo.map((data) => {
        if (data.title === title) {
          return { ...data, items: updatedItems };
        }
        return data;
      });

      setDataInfo(updatedData);
    }
  };

  return (
    <>
      <main className="h-full w-full min-h-screen bg-gray-100 font-sans flex flex-col items-center">
        <header className="w-full max-w-4xl pt-4 pb-4 mb-5 flex justify-center items-center">
          <h1 className="text-2xl font-bold capitalize tracking-wider">
            camping list
          </h1>
        </header>
        {/*  <nav className=" w-full max-w-4xl pt-4 pb-4 flex justify-center items-center">
          <form>
            <label htmlFor="searchItem">Buscar</label>
          <input id="searchItem" type="text" />
          </form>
        </nav> */}
        <section className="w-full max-w-4xl mb-5 pt-2 pb-2 flex justify-center items-center">
          <h3>cantidad de cosas en la mochila: {count}</h3>
        </section>
        <section className="w-full max-w-4xl mb-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <Information
            dataInfo={dataInfo}
            onChangeCheckbox={onChangeCheckbox}
          />
        </section>

        <footer className="w-full max-w-4xl pb-4 pt-4 flex justify-center items-center">
          <p className="text-xl"> footer aca </p>
        </footer>
      </main>
    </>
  );
}

export default App;

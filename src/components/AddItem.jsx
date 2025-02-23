import { useState } from "react";

const AddItem = ({ searchTitle, dataInfo, setDataInfo, setShowModal }) => {
  const [item, setItem] = useState("");

  const resetForm = () => {
    setItem("");
  };

  const onChangeItem = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    searchTitle.items.push({ name: item, check: false });
    const updatedData = dataInfo.map((data) => {
      if (data.title === searchTitle.title) {
        return { ...data, searchTitle };
      }
      return data;
    });
    setDataInfo(updatedData);
    resetForm();
    setShowModal(false);
  };

  return (
    <section className="mb-5 flex flex-col gap-3">
      <p>agregar algo mas a {searchTitle.title}</p>
      <input
        type="text"
        value={item}
        onChange={onChangeItem}
        className="border-1 border-solid rounded-sm"
      />
      <article className="w-full flex gap-4 justify-center">
        <button
          className="border-1 border-solid rounded-sm py-2 px-6 cursor-pointer"
          onClick={addItem}
        >
          agregar
        </button>
        <button
          className="border-1 border-solid rounded-sm py-2 px-6 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          cancelar
        </button>
      </article>
    </section>
  );
};

export default AddItem;

import { AiOutlinePlusCircle } from "react-icons/ai";

const List = ({ dataInfo, setDataInfo, show }) => {


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
        {dataInfo.map((items) => (
          <article key={items.title} className="pl-2 pr-2 flex flex-col gap-2">
            <article className="flex justify-between">
              <h2 className="text-xl font-bold">{items.title}</h2>
              <button onClick={() => show(items.title)} className="py-1 px-2 flex justify-center items-center cursor-pointer">
                <AiOutlinePlusCircle />
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

  export default List
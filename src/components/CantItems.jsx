const CantItems = ({count}) => {
    return ( 
        <section className="w-full max-w-4xl mb-5 pt-2 pb-2 flex justify-center items-center gap-2">
        <h3 className="text-xl ">cantidad de cosas en la mochila:</h3> <h3 className="text-xl font-bold"> {count}</h3>
      </section>
     );
}
 
export default CantItems;
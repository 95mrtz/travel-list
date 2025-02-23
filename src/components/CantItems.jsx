const CantItems = ({count}) => {
    return ( 
        <section className="w-full max-w-4xl mb-5 pt-2 pb-2 flex justify-center items-center">
        <h3>cantidad de cosas en la mochila: {count}</h3>
      </section>
     );
}
 
export default CantItems;
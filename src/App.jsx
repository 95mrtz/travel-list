
function App() {

  return (
    <>
      <main className="h-full w-full min-h-screen bg-gray-100 font-sans flex flex-col items-center">
        <header className="w-full max-w-4xl pt-4 pb-4 mb-5 flex justify-center items-center">
          <h1 className="text-2xl font-bold capitalize tracking-wider"> camping list </h1>
        </header>
       {/*  <nav className=" w-full max-w-4xl pt-4 pb-4 flex justify-center items-center">
          <form>
            <label htmlFor="searchItem">Buscar</label>
          <input id="searchItem" type="text" />
          </form>
        </nav> */}
        <section className="w-full max-w-4xl mb-5 pt-2 pb-2 flex justify-center items-center">
          <h3>
            cantidad de cosas en la mochila: 0
          </h3>
        </section>
        <section className="w-full max-w-4xl mb-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <article className="pl-2 pr-2 lex flex-col gap-2">
            <article className="flex justify-between">
            <h2 className="text-xl font-bold">Mochila</h2>
            <button className="pt-1 pb-1 pl-2 pr-2 flex justify-center items-center cursor-pointer">+</button>
            </article>
            <ul className="list-inside list-disc flex flex-col items-start gap-2">
              <li>
                Carpa
              </li>
              <li>
                Aislante
              </li>
              <li>
                Bolsa de dormir
              </li>
              <li>
                Colchoneta inflable
              </li>
            </ul>
          </article>
        </section>
        
        <footer className="w-full max-w-4xl pb-4 pt-4 flex justify-center items-center">
          <p className="text-xl"> footer aca </p>
        </footer>

      </main>
    </>
  )
}

export default App

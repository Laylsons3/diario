export default function Home() {
  return (
    <div>
      <h1>Diário de bordo</h1>
      <form className="flex p-4 bg-zinc-700 w-full max-w-sm flex-col gap-y-4">
        <div>
          <label className="flex w-full gap-x-1">
            Motorista:
            <input className="flex-1 rounded text-zinc-800 px-1" />
          </label>
        </div>
        <div>
          <label className="flex w-full gap-x-1">
            Placa:
            <input className="flex-1 uppercase rounded text-zinc-800 px-1" />
          </label>
        </div>
        <div>
          <label className="flex w-full gap-x-1">
            Local de origem:
            <input className="flex-1 rounded text-zinc-800 px-1" />
          </label>
        </div>
        <div>
          <label className="flex w-full gap-x-1">
            Km inicial:
            <input
              type="number"
              className="flex-1 rounded text-zinc-800 px-1"
            />
          </label>
        </div>
        <div>
          <label className="flex w-full gap-x-1">
            Motivo da viagem:
            <input className="flex-1 rounded text-zinc-800 px-1" />
          </label>
        </div>
        <div>
          <label className="flex w-full gap-x-1">
            Destino:
            <input className="flex-1 rounded text-zinc-800 px-1" />
          </label>
        </div>
        <div className="text-center">
          <button className="bg-white text-black px-4 py-1">Salvar</button>
        </div>
      </form>
    </div>
  );
}

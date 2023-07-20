"use client";

import { useForm } from "react-hook-form";

interface DataJson {
  motorista: string;
  placa: string;
  localOrigem: string;
  kmInicial: number;
  motivo: string;
  destino: string;
}

export default function Home() {
  const { register, handleSubmit } = useForm<DataJson>();

  const submit = (data: DataJson) => {
    console.log(data);
    localStorage.setItem("diario", JSON.stringify(data));
  };

  return (
    <div>
      <h1 className="w-full max-w-xs justify-center font-medium">
        Diário de bordo
      </h1>
      <form
        onClick={handleSubmit(submit)}
        className="flex p-4 bg-zinc-700 w-full max-w-xs flex-col gap-y-1"
      >
        <div>
          <label className="flex flex-col w-full">
            <span className="text-sm">Motorista:</span>
            <input
              {...register("motorista")}
              className="flex-1 rounded text-zinc-800 px-1"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col w-full">
            <span className="text-sm">Placa:</span>
            <input
              {...register("placa")}
              className="flex-1 uppercase rounded text-zinc-800 px-1"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col w-full">
            <span className="text-sm">Local de origem:</span>
            <input
              {...register("localOrigem")}
              className="flex-1 rounded text-zinc-800 px-1"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col w-full">
            <span className="text-sm">Km inicial:</span>
            <input
              {...register("kmInicial")}
              type="number"
              className="flex-1 rounded text-zinc-800 px-1"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col w-full">
            <span className="text-sm">Motivo da viagem:</span>
            <input
              {...register("motivo")}
              className="flex-1 rounded text-zinc-800 px-1"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col w-full">
            <span className="text-sm">Destino:</span>
            <input
              {...register("destino")}
              className="flex-1 rounded text-zinc-800 px-1"
            />
          </label>
        </div>
        <div className="text-center">
          <button className="bg-white text-black px-4 py-1">Salvar</button>
        </div>
      </form>
    </div>
  );
}

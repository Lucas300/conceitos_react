{/* ctrl + ;   cria um campo para comentarios */}
function Gridzao() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3"></div>
            <div className="col-span-6 mt-20">
            <div className=" bg-gray-400 w-[500px] border-4 border-[#dc143c] p-8 m-8 items-center justify-center flex rounded-xl">
                {/* Gerenciar textos */}
                <div className="w-[250px] font-mono pr-3">
                    <h1 className="text-2xl"><span className="text-red-600">Homem</span> de <span className="text-red-600">Ferro</span></h1>
                    <p>Gênio, bilionário, playboy, filantropo.</p>
                </div>
                {/* Gerenciar imagens */}
                <div className="w-[200px]">
                    <img className="rounded-xl" src="https://wallpapers.com/images/hd/iron-man-in-battle-j22bh9ek9g5j85ce.webp" alt="" />
                </div>
            </div>
            </div>
            <div className="col-span-3"></div>
        </div>
    )
}

export default Gridzao
// components/Navbar.js

export default function Navbar() {
    return (
      <nav className="bg-black text-white py-4 px-8 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logotipo e nome da loja */}
          <img src="/images/logopureprint.jpg" alt="Logotipo" className="h-8 mr-2" />
          <span className="font-bold text-xl">PurePrint3D</span>
        </div>
        {<div className="flex space-x-4">
          {/* Links de navegação */}
          {/* <a href="#" className="hover:text-gray-300">All</a>
          <a href="#" className="hover:text-gray-300">Categorias</a> */}
          {/* <a href="#" className="hover:text-gray-300">Stickers</a> */}
        </div>}
        <div className="flex items-center">
          {/* Barra de pesquisa */}
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-gray-800 h-10 px-4 rounded-l-lg w-64 focus:outline-none"
          />
          <button className="bg-blue-600 h-10 px-4 rounded-r-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"></path>
            </svg>
          </button>
        </div>
        <div>
          {/* Ícone do menu para dispositivos móveis */}
          <button className="sm:hidden">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    );
  }
  
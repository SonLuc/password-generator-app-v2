

export default function Header () {
  return (
    <header className="mx-auto w-[60%]">
      <nav className="flex justify-between my-5 py-3 px-5 bg-slate-800 rounded">
        <span className="font-bold text-xl hover:underline">
          <a href="https://github.com/SonLuc" target="_blank" rel="noreferrer">@SonLuc</a>
        </span>
        <button className="bg-slate-900 border border-slate-700 rounded px-3 py-1 hover:bg-slate-700 transition-colors text-sm">Repositorio</button>
      </nav>
    </header>
  )
}

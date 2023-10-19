import { Avatar, Button } from '@nextui-org/react'
import profilePicture from '../assets/img/profile.jpg'


export default function Header () {
  return (
    <header className="mx-auto w-[60%]">
      <nav className="flex justify-between my-5 py-3 px-5 bg-zinc-800 rounded">
        <div className='flex items-center gap-2'>
          <Avatar radius='full' className='w-6 h-6 text-tiny' src={profilePicture} />
          <span className="font-medium text-md hover:underline">
            <a href="https://github.com/SonLuc" target="_blank" rel="noreferrer">@SonLuc</a>
          </span>
        </div>
        <Button>
          Hola
        </Button>
        <a href="https://github.com/SonLuc/password-generator-app-v2" target='_blank' className="bg-zinc-900 border border-zinc-700 rounded px-3 py-1 hover:bg-zinc-700 transition-colors text-sm" rel="noreferrer">Repositorio</a>
      </nav>
    </header>
  )
}

import Image from 'next/image'
import Home from './features/Home/pages/Home'
export default function RootPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
       <Home/>
    </main>
  )
}

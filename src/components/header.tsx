import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        {/* Para evitar um erro do next na hora do build devido ao "useSearchParams" */}
        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>

      <div className=" flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/mariocesar33.png"
            alt=""
            className="h-8 w-8 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}

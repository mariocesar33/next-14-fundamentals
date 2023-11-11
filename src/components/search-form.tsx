'use client'

import { FormEvent } from 'react'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()

  const searchParams = useSearchParams()

  // pegar a minha busca na url
  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    // previnir que ele faça qualquer redirecionamento.
    event.preventDefault()

    // Para pegar os dados do input (poderia tambem ser feito atráves de estado)
    const formData = new FormData(event.currentTarget)

    // transformar o formDta em um objeto
    const data = Object.fromEntries(formData)

    // para ter acesso ao campo do input (pego o campo pelo seu nome)
    const query = data.q

    // Se o campo estiver vazio
    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        name="q"
        // depois da procura, sempre atribuir o valor do campo com o nome da busca feito
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MyLink () {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/features')
  })

  return (
    <a onClick={() => setTimeout(() => router.push('/features'), 2000)}>
      Features (prefetch hook)
    </a>
  )
}

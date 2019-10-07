import Router from 'next/router'
import Link from 'next/link'
import MyLink from '../components/MyLink'

export default () => (
  <div>
    {/* Prefetch using the declarative API */}
    <Link href='/'>
      <a>Home</a>
    </Link>

    {/* we imperatively prefetch on hover */}
    <Link href='/about' prefetch={false}>
      <a
        onMouseEnter={() => {
          Router.prefetch('/about')
          console.log('prefetching /about!')
        }}
      >
        About
      </a>
    </Link>

    <MyLink />

    <style jsx>{`
      a {
        margin-right: 10px;
      }
    `}</style>
  </div>
)

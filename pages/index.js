import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='title'>
        Read {' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

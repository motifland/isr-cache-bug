import { GetStaticPaths } from 'next'
import Link from 'next/link'

const Slug = ({ timestamp }: { timestamp: number }) => {
  return (
    <div>
      <Link href="/1">
        <a>&lt;Link&gt; to self</a>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <a href="/1">&lt;a&gt; to self</a>
      <p style={{ fontWeight: 800 }}>
        Refreshed {Math.round((Date.now() - timestamp) / 1000)}s ago
      </p>
      <p>ISR: 10s, fallback: true, Middleware rewrites /1 → /posts/[...id]</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { timestamp: Date.now() },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export default Slug

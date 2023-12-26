import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <Link style={{ margin: '20px 0' }} href="/profile">
        Click here to see my profile
      </Link>
    </div >
  )
}

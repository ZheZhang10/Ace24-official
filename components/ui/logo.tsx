import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/home" className="block" aria-label="Cruip">
      <div className="overflow-hidden">
        <Image width="170" height="170"src="/images/Ace-24-logo.svg" alt="Company logo" />
        {/* <img width="170" height="170" src="/images/Ace-24-logo.svg" alt="Company Logo" /> */}
      </div>
    </Link>
  )
}

import React from 'react'
import Link from 'next/link';

const homePage = () => {
  return (
    <div>
      <h1>Welcome to Virdee Media</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
    </div>
  )
}

export default homePage
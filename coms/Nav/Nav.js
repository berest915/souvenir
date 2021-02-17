import { Wrapper } from "./NavStyle";
import Link from 'next/link'

const Nav = () => {
  return (
    <Wrapper>
      {/* //! cover image */}
      <li className="li">
        <Link href="/" className='link'>
          <ul>all</ul>
        </Link>
        {/* <Link href="/products/tee" className='link'>
          <ul>tee</ul>
        </Link>
        <Link href="/products/mug" className='link'>
          <ul>mug</ul>
        </Link> */}
        <Link href="/about" className='link'>
          <ul>about</ul>
        </Link>
      </li>
    </Wrapper>
  );
};

export default Nav;

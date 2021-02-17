import { Wrapper, Ul, StyledAnchor } from "./NavStyle";
import Link from "next/link";

const Nav = () => {
  return (
    <Wrapper>
      {/* //! cover image */}
      <Ul className="li">
        <Link href="/" className="link" passHref>
          <StyledAnchor>all</StyledAnchor>
        </Link>
        {/* <Link href="/products/tee" className='link'>
          <ul>tee</ul>
        </Link>
        <Link href="/products/mug" className='link'>
          <ul>mug</ul>
        </Link> */}
        <Link href="/about" className="link" passHref>
          <StyledAnchor>about</StyledAnchor>
        </Link>
      </Ul>
    </Wrapper>
  );
};

export default Nav;

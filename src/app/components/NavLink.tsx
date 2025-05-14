import Link from "next/link"

type LinkElement = {
    href: string,
    children: string
}

const NavLink = ({href, children}: LinkElement ) => {
  return (
    <Link className="text-gray-600 hover:text-gray-800 transition-colors duration-100" href={href}>{children}</Link>
  )
}

export default NavLink
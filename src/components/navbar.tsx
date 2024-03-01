import { nav } from '../lib'

export function Navbar() {
  return (
    <nav className="h-20 w-screen grid place-items-center top-0 left-0 fixed z-[99]">
      <div className="flex items-center justify-between h-full mx-auto w-lg">
        <a href="/" className="w-[7.5rem]">
          <img src={nav.image} alt={nav.alt} />
        </a>

        <ul className="flex space-x-16">
          {nav.links.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4 nav_socials">
          {nav.icons.map((ic, i) => (
            <li key={i}>
              <a href={ic.link} target="_blank">
                <ic.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

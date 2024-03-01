// nav imports
import logo from '../assets/logo.png'

import { FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const nav = {
  image: logo,
  alt: 'photographi logo',
  links: [
    {
      href: '#',
      label: 'Home',
    },
    {
      href: '#about',
      label: 'About',
    },
    {
      href: '#gallery',
      label: 'Gallery',
    },
    {
      href: '#exhibition',
      label: 'Exhibition',
    },
  ],
  icons: [
    {
      icon: FaLinkedinIn,
      link: 'https://instagram.com',
    },
    {
      icon: FaXTwitter,
      link: 'https://x.com',
    },
    {
      icon: FaYoutube,
      link: 'https://youtube.com',
    },
  ],
} as const

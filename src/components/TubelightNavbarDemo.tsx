import { Home, Info, Calendar, Bell, Film, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function TubelightNavbarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: Info },
    { name: 'Events', url: '/events', icon: Calendar },
    { name: 'Notice', url: '/notice', icon: Bell },
    { name: 'Media', url: '/media', icon: Film },
    { name: 'Contact', url: '/contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}

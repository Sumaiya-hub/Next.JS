import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { Switch } from "@/Components/ui/switch"


const Navbar = () => {
  return (
    <header className='py-4 shadow-md mt-2'>
        <nav className='flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            { /*logo*/}
            <div className='text-3xl font-bold'>
             <Link href="/">Daily News</Link>
            </div>

            { /*menu*/}
   <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem className='text-xl font-semibold px-8 ml-50  hover:text-blue-700 transition-colors'>
        <NavigationMenuLink href='/news'>News</NavigationMenuLink>
     </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
 
 <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem  className='text-xl font-semibold px-8  hover:text-blue-700 transition-colors'>
     <Link href='/services'> <NavigationMenuTrigger>Services</NavigationMenuTrigger></Link>
      <NavigationMenuContent>
        <ul className='bg-white rounded-2xl shadow-gray-400'> 
       <li><NavigationMenuLink href='/services/web development'>Web Development</NavigationMenuLink> </li>
         <li><NavigationMenuLink  href='/services/software development'>Software Development</NavigationMenuLink> </li>
         <li><NavigationMenuLink  href='/services/business development'>Business Development</NavigationMenuLink> </li>
          </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

      <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem  className='text-xl font-semibold px-8  hover:text-blue-700 transition-colors'>
        <NavigationMenuLink  href='/about'>About</NavigationMenuLink>
     </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

      <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem  className='text-xl font-semibold px-8  hover:text-blue-700 transition-colors'>
        <NavigationMenuLink  href='/contact'>Contact</NavigationMenuLink>
     </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

<div className=" ml-30 p-3">
  <Switch />
</div>
        </nav>
    </header>
  )
}

export default Navbar
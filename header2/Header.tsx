import { ChevronDown, Heart, MapPin, Search, ShoppingCart, TextAlignJustify, Truck, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
 import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/Components/ui/navigation-menu"
import { Input } from "@/Components/ui/input"

const Header = () => {
  return (
    <header className="w-full">

     {/* top part */}
      <div className="bg-purple-900 py-2 flex space-x-6 pl-10">
         {/* map icon */}
        <button className="flex items-center gap-2 hover:opacity-50 transition-opacity">
              <MapPin className="h-6 w-8 text-white" />
              <span className="text-xl text-white">Find a Store</span>
            </button>

            {/* Order Tracking  */}
            <button className="flex items-center gap-2 hover:opacity-50 transition-opacity pl-10">
              <Truck className="h-6 w-8 text-white" />
             <span className="text-xl text-white">Order Tracking</span>
            </button>

            <div className="hidden lg:flex justify-center pl-50">
              <button className="bg-orange-600 text-xl rounded-2xl text-white pl-4 pr-4">  15% 0ff  </button>
              <span className="text-xl text-white pl-2 pt-2">$50+ when you buy online & pick up in-store</span>
            </div>

 <div className="hidden lg:flex pl-90">
  <DropdownMenu>
  <DropdownMenuTrigger className="text-xl text-white">USD</DropdownMenuTrigger>
  <DropdownMenuContent className=" rounded-md bg-white p-7">
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-2xl text-gray-500">EURO</DropdownMenuItem>
    <DropdownMenuItem className="text-2xl text-gray-500">CNY</DropdownMenuItem>
  </DropdownMenuContent>
  <div className=" text-3xl text-white py-2.5"><ChevronDown /></div>
</DropdownMenu>
 

  <DropdownMenu>
  <DropdownMenuTrigger className="text-xl text-white pl-5 pr-5">English</DropdownMenuTrigger>
  <DropdownMenuContent className=" rounded-md bg-white p-7">
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-2xl text-gray-500">German</DropdownMenuItem>
    <DropdownMenuItem className="text-2xl text-gray-500">Itialian</DropdownMenuItem>
    <DropdownMenuItem className="text-2xl text-gray-500">Hindi</DropdownMenuItem>
  </DropdownMenuContent>
  <div className="text-3xl text-white py-2.5"><ChevronDown /></div>
</DropdownMenu>
       </div>
        </div>

     {/* last part */}

        <nav className="flex pl-10 p-6 shadow-md">
<div className="">  <img src="/logo.svg" alt="Logo" width={150} height={150} /></div>

<div className="shidden lg:flex pl-80">
  <NavigationMenu>
  <NavigationMenuList> 
    <NavigationMenuItem>
     <NavigationMenuTrigger className="text-xl font-bold hover:text-orange-500">Home</NavigationMenuTrigger>
      <NavigationMenuContent className=" rounded-md shadow-2xl w-70 bg-white p-7">
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500"></NavigationMenuLink>
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500"></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  <NavigationMenu>
  <NavigationMenuList> 
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-xl font-bold hover:text-orange-500">Shop</NavigationMenuTrigger>
      <NavigationMenuContent className=" rounded-md shadow-2xl w-70 bg-white p-7">
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">Shop Layouts</NavigationMenuLink>
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">Product Layouts</NavigationMenuLink>
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">Product Types</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  <NavigationMenu>
  <NavigationMenuList> 
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-xl font-bold hover:text-orange-500">Pages</NavigationMenuTrigger>
      <NavigationMenuContent className=" rounded-md shadow-2xl w-70 bg-white p-7">
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">About Us</NavigationMenuLink>
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">Faqs</NavigationMenuLink>
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">Icons</NavigationMenuLink>
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">404 Error</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  <NavigationMenu>
  <NavigationMenuList> 
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-xl font-bold hover:text-orange-500">Blog</NavigationMenuTrigger>
      <NavigationMenuContent  className=" rounded-md shadow-2xl w-70 bg-white p-7">
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">Blog-Standard</NavigationMenuLink>
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">Blog-Grid 2 Column</NavigationMenuLink>
        <NavigationMenuLink href="" className="text-xl  hover:text-orange-500">Single Post</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  <NavigationMenu>
  <NavigationMenuList> 
    <NavigationMenuItem>
        <NavigationMenuLink href="" className="text-xl font-bold hover:text-orange-500">Contact Us</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
</div>

 <div className="hidden lg:flex items-center gap-4 ml-7">
            <div className=" flex pl-40">
              <Input
                type="search"
                placeholder="Search Product"
                className="pl-10 w-128s h-10 p-7 z-0"/>
                <Search className="absolut h-8 w-10  bg-purple-800 rounded-3xl z-2 -ml-15 mt-3 hover:bg-orange-500" />
            </div>
            </div>


<div className="hidden lg:flex">

    <button  className="pl-7 pr-7">
              <User className="h-10 w-10" />
            </button>
    <button  className="pl-7 pr-7 flex">
              <Heart className="h-10 w-10" />
              <span className="-top-1 -right-1 h-5 w-5  text-white bg-orange-500 rounded-full text-xl flex items-center justify-center">
                2
              </span>
            </button>
    <button  className="pl-7 pr-7 flex">
              <ShoppingCart className="h-10 w-10" />
               <span className=" -top-1 -right-1 h-5 w-5 text-white bg-orange-500 rounded-full text-xl flex items-center justify-center">
                0
              </span>
            </button>
</div> 

<div >
     <TextAlignJustify href=" " className=" sm:flex md:flex lg:hidden ml-50 hover:bg-orange-500"/>

</div>
        </nav>
    </header>
  )
}

export default Header
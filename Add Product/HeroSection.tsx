import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card" 
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "../ui/button"
import { Products } from "@/config/product"
import Image from "next/image";


 const HeroSection = () => {
   return (
     <div>
    <h1 className="font-bolt text-3xl p-7">
      All Products:
    </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:space-x-4 p-20">
  

   {Products.map((product) => (
            <Card key={product.id}>
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.Images}
                  width={150}
                  height={200}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* add to card */}
                <div className=" absolute bottom-1 left-4 right-4  ">
                  <Button size="lg" className=" w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add To Card
                  </Button>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-1">
                  {/* rating (5) filter to check rating is under 5 */}
                  {[...Array(5)].map((_, i) => {
                    const rating = product.rating; // e.g. 4.3
                    const full = i + 1 <= Math.floor(rating); // full yellow star
                    const half = !full && i < rating; // half-yellow if rating has decimal part here

                    return (
                      <div key={i} className="relative">
                        <Star
                          className={`text-black`} // base star (gray)
                        />
                        {(full || half) && (
                          <Star
                            className="text-yellow-400 absolute top-0 left-0"
                            style={{
                              clipPath: half
                                ? "inset(0 50% 0 0)" // shows only half part
                                : "none",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}

                  <span className="text-xs text-muted-foreground ml-1">
                    {product.review} reviews
                  </span>
                </div>

                {/* title */}
                <h3 className="font-semibold text-muted-foreground ml-1">
                  {product.name}
                </h3>

                {/* price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    {product.priceIcon} {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.priceIcon} {product.originalPrice}
                  </span>
                </div>
              </div>
            </Card>
          ))}

</div>

     </div>
   )
 }
 
 export default HeroSection
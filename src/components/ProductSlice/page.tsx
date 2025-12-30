"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
export default function Prodectslice({image,title}:{image:string[], title:string}) {
  return (
    <>
      <Carousel
  opts={{
    loop: true,
  }}
  plugins={[
    Autoplay({
      delay: 1500,
    })
  ]}
>

  <CarouselContent>
  {  image.map((img,index)=><CarouselItem key={index}><Image  width={300} height={300} src={img} alt={title}></Image></CarouselItem>)}
  </CarouselContent>
</Carousel>
    </>
  )
}

import Image from "next/image";

export default function HeroImage({ img }) {
  return <Image src={img} width={532} height={285} alt="hero" />;
}

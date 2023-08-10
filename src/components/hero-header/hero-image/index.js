import Image from "next/image";

export default function HeroImage({ img }) {
  const ImageWidth = 532;
  const ImageHeight = 285;
  return <Image src={img} width={ImageWidth} height={ImageHeight} alt="hero" />;
}

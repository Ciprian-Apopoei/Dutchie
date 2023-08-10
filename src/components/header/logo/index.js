import Image from "next/image";

export default function Logo({ logo }) {
  const LogoWidth = 143;
  const LogoHeight = 28;
  return (
    <a href="/">
      <Image src={logo} width={LogoWidth} height={LogoHeight} alt="logo" />
    </a>
  );
}

import Image from "next/image";

export default function Logo({ logo }) {
  return (
    <a href="/">
      <Image src={logo} width={143} height={28} alt="logo" />
    </a>
  );
}

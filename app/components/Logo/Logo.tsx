import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        width={48}
        height={48}
        className="object-cover bg-center border-2 border-neutral-200 dark:border-neutral-800 rounded-full hover:scale-90 grayscale hover:grayscale-0 duration-500 transition-all shadow-sm"
        src={"/logo/noBorder.png"}
        alt="Logo"
      />
    </Link>
  );
}

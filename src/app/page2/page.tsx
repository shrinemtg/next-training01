import { link } from "fs";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <>
      <h1>next page</h1>
      <Link href="/">ホームに戻る</Link>
      <Image
        src="/Images/main/main.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </>
  );
}

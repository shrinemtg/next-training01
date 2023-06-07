import { link } from "fs";
import Link from "next/link";

export default function page() {
  return (
    <>
      <h1>next page</h1>
      {/* ホームは新規作成のapp直下にありここがルートディレクトリ(/)になっている */}
      <Link href="/">ホームに戻る</Link>
    </>
  );
}

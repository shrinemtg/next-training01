import Link from "next/link";

export default function page() {
  return (
    <>
      <h1>Hello, Nextjs13 Home page!</h1>;
      {/* これはJS大文字で始めなければいけない */}
      {/* href内のパスの問題かと思ったけど/page1でも/app/page1/page.tsxでも問題なかった */}
      {/*いや 問題あった...表示されるがページ推移する際に/page1にしないとエラーになる */}
      {/* いやいや問題ない？てっちゃんにエラー文を見せたくてやり直したらエラーにならなくなったなぜ？ */}
      {/* 推測、next.jsにおちょくられているかスペルミスをしているか予測変換ではなく手入力したせいでリンクが切れていた */}
      {/* <Link href="page1">page1へ</Link> */}
      <Link href="/app/page1/page.tsx">page1へ</Link>
    </>
  );
}

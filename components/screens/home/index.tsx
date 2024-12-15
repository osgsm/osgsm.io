import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "48px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="grid gap-1 text-xl *:mt-0 md:text-2xl">
          <p>ようこそ👋🏼 おおしましょうごです。</p>
          <p>大阪在住のウェブデベロッパーです。</p>
          <p>ここは制作のための遊び場です。</p>
          <p>作ったものや学んだこと、試したことを共有します。</p>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="blog" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
    </FadeIn.Container>
  );
}

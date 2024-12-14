import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "48px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between text-muted">
          <div>
            <h1>osgsm.io</h1>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <div className="grid gap-1 *:mt-0">
          <p>ようこそ👋🏼</p>
          <p>おおしましょうごと申します。</p>
          <p>私は大阪在住のウェブデベロッパー。</p>
          <p>このサイトは、制作のための遊び場です。</p>
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

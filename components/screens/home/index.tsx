import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "48px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between text-muted">
          <div>
            <h1 className="animate-move-background bg-[length:600%] bg-gradient-to-r from-60% from-[--iris-10] via-70% via-[--plum-10] to-80% to-[--iris-11] bg-clip-text text-2xl text-transparent">
              osgsm.io
            </h1>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <div className="grid gap-1 *:mt-0">
          <p>ようこそ👋🏼</p>
          <p>
            おおしましょうご（
            <a className="text-muted underline" href="https://bsky.app/profile/osgsm.io" target="_blank" rel="noopener noreferrer">
              @osgsm.io
            </a>
            ）です。
          </p>
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

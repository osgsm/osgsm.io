import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "48px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="grid gap-1.5 break-keep px-4 text-lg *:mt-0 md:text-xl">
          <p>ようこそ👋🏼 </p>
          <p>
            おおしましょうごと申します。
            <wbr />
            ウェブデベロッパーです。
          </p>
          <p>
            ここでは、作ったものや試したこと、
            <wbr />
            学んだことを放出します。
          </p>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="blog" />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}

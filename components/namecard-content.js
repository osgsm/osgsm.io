'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twJoin } from 'tailwind-merge';
import TypeAnimationGroup from './type-animation-group';

const questions = [
  {
    id: 1,
    question: '出身地は？',
    answer: [
      {
        id: 1,
        paragraphs: '大阪の羽曳野（はびきの）市というところです。',
      },
      {
        id: 2,
        paragraphs:
          '「羽曳野」という名前は、ヤマトタケルの白鳥伝説に関係があるそうで、',
      },
      {
        id: 3,
        paragraphs:
          '没後白鳥となったヤマトタケルがこの地に舞い降り、天高く飛びさった様子が「羽を曳くが如く」だったことが由来らしいです。',
      },
      {
        id: 4,
        paragraphs: 'ちなみに、野球選手のダルビッシュ有もここの出身です。',
      },
    ],
  },
  {
    id: 2,
    question: '趣味は？',
    answer: [
      {
        id: 1,
        paragraphs: '写真です。',
      },
      {
        id: 2,
        paragraphs:
          'と言っても最近はあまり撮ってないですが、昔は自室を暗室にして、現像したり、プリントするぐらいハマってました。',
      },
      {
        id: 3,
        paragraphs:
          '一番好きなカメラは Rollei35 で、あの手のひらサイズの小さなボディに技術が詰めこまれている感じがたまりません。',
      },
      {
        id: 4,
        paragraphs: 'デジタルカメラは SIGMA Sd Quattro を使ってます。',
      },
    ],
  },
  {
    id: 3,
    question: '仕事で使っている技術は？',
    answer: [
      {
        id: 1,
        paragraphs:
          '業務で使う言語は JavaScript、TypeScript、PHP や HTML、CSS です。',
      },
      {
        id: 2,
        paragraphs:
          'ライブラリやフレームワークは React や Next.js、Astro など。CMS は WordPress をよく使います。',
      },
      {
        id: 3,
        paragraphs: 'ちなみにこのサイトは Next.js で作ってます。',
      },
    ],
  },
  {
    id: 4,
    question: '最近興味がある分野は？',
    answer: [
      {
        id: 1,
        paragraphs:
          'Three.js や WebGL、あとアニメーションなどの表現にまつわる技術に関心があります。',
      },
      {
        id: 2,
        paragraphs: 'あと、3D ソフトの Blender も趣味的な感じで触ってます。',
      },
      {
        id: 3,
        paragraphs:
          'まだまだ学び始めの初心者ですが、表現の幅が広がりそうで楽しみです。',
      },
    ],
  },
  {
    id: 5,
    question: 'MBTI（性格診断）は？',
    answer: [
      {
        id: 1,
        paragraphs: 'ISTJ（管理者型）です。',
      },
      {
        id: 2,
        paragraphs: '誠実で安定を好み、整った環境を尊重するようです。',
      },
      {
        id: 3,
        paragraphs:
          '相性がよいのは、ENFJ（主人公型）、INFP（仲介者型）、ESTP（起業家型）らしいです。',
      },
    ],
  },
  {
    id: 6,
    question: '最終学歴は？',
    answer: [
      {
        id: 1,
        paragraphs: '高卒です。',
      },
      {
        id: 2,
        paragraphs:
          'でも、大学にも行ってました。卒論も出して、卒業アルバムも持ってます。',
      },
      {
        id: 3,
        paragraphs:
          'ところが、残りの単位が取れず留年し、2年休学したのちに結局退学しました。',
      },
    ],
  },
  {
    id: 7,
    question: '職歴は？',
    answer: [
      {
        id: 1,
        paragraphs:
          '前職では、小さな会社でグラフィックデザインを少々とウェブ制作をやっていました。',
      },
      {
        id: 2,
        paragraphs:
          'メインはウェブの仕事で、デザインからコーディングまで行っていました。あと、サイトに掲載する写真の撮影もやってました。',
      },
      {
        id: 3,
        paragraphs:
          'その前は、本屋兼雑貨屋（スタンダードブックストアというお店）で雑貨の仕入れとか接客をしてました。',
      },
    ],
  },
];

const closingContents = [
  {
    id: 1,
    paragraphs: '用意した質問は以上です！',
  },
  {
    id: 2,
    paragraphs: 'ご覧いただきありがとうございます。',
  },
  {
    id: 3,
    paragraphs:
      'X（ツイッター）もやってるので、お問い合わせはこちらからどうぞ！',
  },
];

const NamecardSection = ({ id, onOutputStart, onOutputCompleted }) => {
  const currentQuestion = questions.find((question) => question.id === id);

  return (
    <section className="[&+section]:mt-14">
      <div className="ml-8 rounded-md bg-misty-slate-100 p-4 font-semibold dark:bg-twilight-indigo-950">
        {currentQuestion.question}
      </div>
      <TypeAnimationGroup
        contents={currentQuestion.answer}
        onOutputStart={onOutputStart}
        onOutputCompleted={onOutputCompleted}
        className="mt-7 flex items-start gap-4"
      />
    </section>
  );
};

const NamecardContent = () => {
  const [isOutputCompleted, setIsOutputCompleted] = useState(false);
  const [selectedAnswerIds, setSelectedAnswerIds] = useState([]);
  const displayQuestions = questions.filter(
    (question) => !selectedAnswerIds.includes(question.id),
  );
  const isFinished = displayQuestions.length === 0;

  const handleQuestionClick = (id) => {
    setSelectedAnswerIds((prevIds) => [...prevIds, id]);
  };

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05,
        delay: 5.5,
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 400,
      },
    },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <div className="grid gap-4">
      {selectedAnswerIds.length > 0 && (
        <div
          className={twJoin(isFinished && isOutputCompleted ? 'pb-0' : 'pb-32')}
        >
          {selectedAnswerIds.map((id) => (
            <NamecardSection
              key={id}
              id={id}
              onOutputStart={() => setIsOutputCompleted(false)}
              onOutputCompleted={() => setIsOutputCompleted(true)}
            />
          ))}
          {isFinished && isOutputCompleted && (
            <section>
              <TypeAnimationGroup
                contents={closingContents}
                className="mt-7 flex items-start gap-4"
              />
            </section>
          )}
        </div>
      )}
      {!isFinished && (
        <div className="fixed bottom-0 left-0 w-full bg-[linear-gradient(to_bottom,_rgba(249,249,241,0)_0%,#F9F9FB_60%)] pt-10 dark:bg-[linear-gradient(to_bottom,_rgba(22,22,29,0)_0%,#16161D_60%)]">
          <div className="relative mx-auto max-w-[52rem]">
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={listVariants}
              tabIndex={-1}
              className={twJoin(
                'relative flex w-full gap-4 overflow-x-auto px-4 pb-[4vh] pt-6 hide-scrollbar',
              )}
            >
              <AnimatePresence>
                {displayQuestions.map((question) => (
                  <motion.li
                    variants={itemVariants}
                    key={question.id}
                    whileTap={{ scale: 1.1 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <button
                      onClick={() => handleQuestionClick(question.id)}
                      className="flex min-h-16 w-[148px] rounded-lg border border-button-secondary-border bg-button-secondary-background p-4 py-3 text-left text-sm font-semibold text-button-secondary-foreground"
                    >
                      {question.question}
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
            <div className="absolute left-0 top-0 block h-full w-4 bg-[linear-gradient(to_left,_rgba(249,249,241,0)_0%,#F9F9FB_80%)] dark:bg-[linear-gradient(to_left,_rgba(22,22,29,0)_0%,#16161D_80%)]"></div>
            <div className="absolute right-0 top-0 block h-full w-4 bg-[linear-gradient(to_right,_rgba(249,249,241,0)_0%,#F9F9FB_80%)] dark:bg-[linear-gradient(to_right,_rgba(22,22,29,0)_0%,#16161D_80%)]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NamecardContent;

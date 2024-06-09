'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import { twJoin } from 'tailwind-merge';
import TypeAnimationItem from './type-animation-item';

const questions = [
  {
    id: 1,
    question: '出身地は？',
    answer: [
      '大阪の羽曳野（はびきの）市というところです。',
      '「羽曳野」という名前は、『古事記』に登場する英雄ヤマトタケルに由来があるそうです。',
      '市が運営するサイトによると、“没後白鳥となったヤマトタケルがこの地に舞い降り、天高く飛びさった様子が「羽を曳くが如く」だと伝わる、「白鳥伝説」に由来しています。” とのことです',
      'ちなみに、野球選手のダルビッシュ有もここの出身です。',
    ],
  },
  {
    id: 2,
    question: '趣味は？',
    answer: [
      '写真です。',
      'と言っても最近はあまり撮ってないですが、昔は自室を暗室にして、現像したり、プリントするぐらいハマってました。',
      '一番好きなカメラは Rollei35 で、あの小さなボディに技術が詰めこまれている感じが最高にクールです。',
      'デジタルカメラは SIGMA Sd Quattro を使ってます。',
    ],
  },
  {
    id: 3,
    question: '仕事で使っている技術は？',
    answer: [
      '言語は JavaScript、TypeScript、PHP や HTML、CSS。',
      'ライブラリやフレームワークは React や Next.js、Astro、Tailwind CSS などです。CMS は WordPress をよく使います。',
      'ちなみにこのサイトは Next.js で作ってます。ブログの部分は Markdown ファイルとして管理しています。',
    ],
  },
  {
    id: 4,
    question: '最近興味がある分野は？',
    answer: [
      'Three.js や WebGL に興味ありです。まだまだ学び始めの初心者ですが、表現の幅が広がりそうで楽しみです。',
    ],
  },
  {
    id: 5,
    question: 'MBTI（性格診断）はなに？',
    answer: [
      'ISTJ（管理者型）でした。',
      '誠実で安定を好み、整った環境を尊重するらしいです。',
      'ENFJ（主人公型）、INFP（仲介者型）、ESTP（起業家型）のタイプと相性がよいとのことです。',
    ],
  },
  {
    id: 6,
    question: '最終学歴は？',
    answer: [
      '高卒です。',
      'でも、大学にも行ってました。しかも卒論も出して、卒業アルバムも持ってます。',
      'それなのに、2年休学したのちに結局退学しました。',
    ],
  },
  {
    id: 7,
    question: 'なぜ今の仕事をしてるの？',
    answer: [
      'ウェブとの出会いは大学のとき。',
      'ブログの CSS をいじることから始まり、ウェブ制作の楽しさにのめり込みました。',
      'その後なぜか写真にはまり、そしてグラフィックデザインをやりたい！となり、前職に就きました。',
      'はじめは名刺とかカタログとかを作ったりしてましたが、次第にウェブの仕事が増え、気づけばウェブ制作がメインに',
      'そして、「やっぱりウェブって楽しい！」となり、今に至ります。',
    ],
  },
  {
    id: 8,
    question: '職歴は？',
    answer: [
      '前職は小さな会社でグラフィックデザインを少々とウェブ制作（デザイン・写真撮影・コーディングを一通り担当）をやっていました（約5年）。',
      'その前は、本屋兼雑貨屋（スタンダードブックストアというお店）で雑貨の仕入れとか接客をしてました。',
    ],
  },
];

const NamecardSection = ({ id, onOutputStart, onOutputCompleted }) => {
  const [renderStep, setRenderStep] = useState(1);
  const currentQuestion = questions.find((question) => question.id === id);

  return (
    <section>
      <div className="ml-8 mt-14 rounded-md bg-misty-slate-100 p-4 font-semibold dark:bg-twilight-indigo-950">
        {currentQuestion.question}
      </div>
      <div className="mt-7">
        <div className="flex items-start gap-4">
          <Image
            src="/assets/profile-photo.webp"
            alt=""
            className="rounded-full border"
            width={32}
            height={32}
          />
          <div className="grid gap-4 pt-1">
            {currentQuestion.answer.map(
              (currentAnswer, index) =>
                renderStep >= index + 1 && (
                  <TypeAnimationItem
                    key={index}
                    contents={currentAnswer}
                    callback={() => setRenderStep((prevStep) => prevStep + 1)}
                    delay={500}
                    onOutputStart={onOutputStart}
                    onOutputCompleted={onOutputCompleted}
                  />
                ),
            )}
          </div>
        </div>
      </div>
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

  return (
    <>
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
            <div className="mt-7">
              <div className="flex items-start gap-4">
                <Image
                  src="/assets/profile-photo.webp"
                  alt=""
                  className="rounded-full border"
                  width={32}
                  height={32}
                />
                <div className="grid gap-4 pt-1">
                  <TypeAnimationItem
                    contents={
                      '以上で終了です！\nご覧いただきありがとうございます！\nお問い合わせは X（ツイッター）からどうぞ！'
                    }
                    delay={750}
                  />
                </div>
              </div>
              <div className="mt-20 flex gap-4 pb-20">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/osgsm_"
                  className={twJoin(
                    'flex h-11 items-center justify-between rounded-md border border-button-primary-border bg-button-primary-background px-4 py-2 text-sm text-button-primary-foreground no-underline',
                    'hover:border-button-primary-hover-border hover:bg-button-primary-hover-background hover:text-button-primary-foreground',
                  )}
                >
                  <div className="flex items-center">
                    <span className="text-lg">
                      <FaXTwitter />
                    </span>
                    <span className="ml-1">@osgsm_</span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-[linear-gradient(to_bottom,_rgba(249,249,241,0)_0%,#F9F9FB_60%)] pt-10 dark:bg-[linear-gradient(to_bottom,_rgba(22,22,29,0)_0%,#16161D_60%)]">
        <ul className="flex w-full gap-4 overflow-x-auto px-4 py-6 hide-scrollbar">
          {displayQuestions.map((question) => (
            <li key={question.id}>
              <button
                onClick={() => handleQuestionClick(question.id)}
                className="flex min-h-[74px] w-36 rounded-lg border border-button-secondary-border bg-misty-slate-100 p-4 text-left text-sm font-semibold dark:bg-twilight-indigo-950"
              >
                {question.question}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NamecardContent;

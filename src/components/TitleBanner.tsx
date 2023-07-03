import { Manrope } from 'next/font/google';
import React from 'react';

const manrope = Manrope({
  weight: '800',
  subsets: ['latin'],
});

export type TitleBannerProps = {
  title: string;
  description?: string | React.ReactNode;
};

export default function TitleBanner(props: TitleBannerProps) {
  return (
    <div className="my-20">
      <h2
        className={`text-4xl sm:text-6xl font-extralight ${manrope.className}`}
      >
        {props.title}
      </h2>
      {props.description && (
        <h3 className="mt-3 text-xl sm:text-2xl">
          {props.description}
        </h3>
      )}
    </div>
  );
}

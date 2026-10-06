"use client";

import Image, { type ImageProps } from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { useRef } from "react";

type Props = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  // 감싸는 버튼의 크기·정렬 (기본: 가로 꽉 채움)
  buttonClassName?: string;
};

// 누르면 화면 가운데에 원본 크기로 크게 띄우는 이미지 (Esc·바깥 클릭으로 닫기)
export default function ZoomableImage({
  className,
  alt,
  buttonClassName = "block w-full",
  ...props
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dialogRef.current?.showModal();
          // GA4: 어떤 페이지의 어떤 사진을 크게 봤는지
          sendGAEvent("event", "image_zoom", {
            image: props.src,
            page_path: window.location.pathname,
          });
        }}
        className={`cursor-zoom-in ${buttonClassName}`}
        aria-label={`${alt} 크게 보기`}
      >
        <Image {...props} alt={alt} className={className} />
      </button>
      <dialog
        ref={dialogRef}
        onClick={() => dialogRef.current?.close()}
        className="m-auto max-h-none max-w-none cursor-zoom-out bg-transparent p-0 backdrop:bg-black/80"
      >
        <div className="flex h-dvh w-dvw items-center justify-center p-4 sm:p-10">
          <Image
            src={props.src}
            width={props.width}
            height={props.height}
            alt={alt}
            sizes="100vw"
            className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain"
          />
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="fixed top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
          aria-label="닫기"
        >
          ×
        </button>
      </dialog>
    </>
  );
}

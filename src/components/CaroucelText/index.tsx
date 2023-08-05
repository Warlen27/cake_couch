import { useCallback, useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import * as S from './styles';

const texts = [
  "Blob sofa",
  "Herb pods",
  "Sofa Cake",
];

export default function CaroucelText() {
  const x = useMotionValue(0)
  const [index, setIndex] = useState(1);
  const [duration, setDuration] = useState(0.8);
  const [delay, setDelay] = useState(0.8);


  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const slides = containerRef.current?.childNodes || []
    const listLi = slides[index] as HTMLLIElement;
    setSlideWidth(listLi?.clientWidth);

    if (slides.length < 4) {
      const firstClone = slides[0].cloneNode(true) as HTMLLIElement
      const lastClone = slides[slides.length - 1].cloneNode(true) as HTMLLIElement;

      firstClone.id = 'first-clone';
      lastClone.id = 'last-clone';

      const slide = containerRef.current;
      slide?.append(firstClone);
      slide?.prepend(lastClone);
    }

  }, [containerRef, index]);

  const handleAnimation = useCallback(() => {
    const slides = containerRef.current?.childNodes || [];
    if (index >= slides.length - 2) {
      setIndex(0);
      setDuration(0);
      setDelay(0);
      return
    }
    setIndex(prev => prev + 1);
    setDuration(0.8);
    setDelay(0.8);

  }, [index])

  useEffect(() => {

    const animation = animate(x, -slideWidth * index, {
      duration,
      delay,
      ease: "easeOut",
      onComplete: () => handleAnimation()
    });

    return () => animation.stop();
  }, [slideWidth, x, duration, index, handleAnimation, delay]);

  return (
    <S.BoxContainer>
      <S.CarouselContainer
        ref={containerRef}
        style={{ x }}
      >
            {texts.map(text => (
              <S.ContainerItems key={text}>
                <h1>{text}</h1>
              </S.ContainerItems>
            ))}
      </S.CarouselContainer>
    </S.BoxContainer>
  );
}

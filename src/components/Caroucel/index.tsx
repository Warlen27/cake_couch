import { useCallback, useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import * as S from './styles';
import productOne from '../../assets/productOne.svg';
import productTwo from '../../assets/procuctTwo.svg';
import productThree from '../../assets/productThree.svg';
import productFour from '../../assets/productFour.svg';
import productFive from '../../assets/productFive.svg';
import productSix from '../../assets/productSix.svg';
import productSeven from '../../assets/productSeven.svg';
import productEight from '../../assets/productEight.svg';
import productNine from '../../assets/productNine.svg';

const dataProducts = [
  [
    {
      id: 4,
      name: 'Purifier O2',
      measure: '110 X 110',
      image: productOne,
    },
    {
      id: 5,
      name: 'Copse combo',
      measure: '110 X 110',
      image: productTwo,
    },
    {
      id: 6,
      name: 'Bouncy prop',
      measure: '110 X 110',
      image: productThree,
    },
  ],
 
  [
    {
      id: 7,
      name: 'Herbs pods',
      measure: '110 X 110',
      image: productFour,
    },
    {
      id: 8,
      name: 'Garden pack',
      measure: '110 X 110',
      image: productFive,
    },
    {
      id: 9,
      name: 'Outdoor light',
      measure: '110 X 110',
      image: productSix,
    },
  ],
  [
    {
      id: 1,
      name: 'Worktop',
      measure: '110 X 110',
      image: productSeven,
    },
    {
      id: 2,
      name: 'Couch capsule',
      measure: '110 X 110',
      image: productEight,
    },
    {
      id: 3,
      name: 'Couch cake',
      measure: '110 X 110',
      image: productNine,
    },
  ],
  
  
]
export default function Caroucel() {
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
    <S.Root>
    <S.BoxContainer>
      
      <S.CarouselContainer
        ref={containerRef}
        style={{ x }}
      >
        {dataProducts.map((item, i) => (
          <S.CarouselContent key={i}>
            {item.map((product, index) => (
              <S.ContainerItems key={product.id} index={index}>
                <p>{product.name}</p>
                <S.ContainerImage>
                  <p>{product.measure}</p>
                    <img src={product.image} alt={product.image} />
                </S.ContainerImage>
              </S.ContainerItems>
            ))}
          </S.CarouselContent>
        ))}
      </S.CarouselContainer>
    </S.BoxContainer>
    <S.ContainerPlus>
          <button>+</button>
          <button>+</button>
          <button>+</button>
    </S.ContainerPlus>
    </S.Root>
  );
}

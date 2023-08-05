import { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import Caroucel from '../Caroucel';
import CaroucelText from '../CaroucelText';
import { animate, useMotionValue, motion } from 'framer-motion';
import sofaIcon from '../../assets/sofa-single-outline.svg';
import arrow from '../../assets/arrow.svg';
import user from '../../assets/account-outline.svg';
import pencil from '../../assets/lead-pencil.svg';
import spanner from '../../assets/wrench-outline.svg';
import agenda from '../../assets/view-agenda-outline.svg';
import fileIcon from '../../assets/file-cabinet.svg';
import plug from '../../assets/ev-plug-ccs1.svg';

export default function App() {
  const x = useMotionValue(0);
  const color = useMotionValue('rgb(141,90,237)');
  const colorLight = useMotionValue('rgb(163,93,244)');

  const [index, setIndex] = useState(1);
  const [indexColor, setIndexColor] = useState(1);
  const [indexColorLight, setIndexColorLight] = useState(1);

  const [duration, setDuration] = useState(0.8);
  const [delay, setDelay] = useState(0.8);

  const valuesRotate = useMemo(() => [0, 70, 146, 219, 291, 360], []);

  const colorRotate = useMemo(() => [
    'rgb(141,90,237)',
    'rgb(247,193,105)',
    'rgb(91,242,209)',
    'rgb(141,90,237)',
    'rgb(247,193,105)',
    'rgb(91,242,209)',
  ], []);

  const colorRotateLight = useMemo(() => [
    'rgb(163,93,244)',
    'rgb(253,227,108)',
    'rgb(90,239,232)',
    'rgb(163,93,244)',
    'rgb(253,227,108)',
    'rgb(90,239,232)',
  ], []);

  const handleAnimation = useCallback(() => {
    if (index >= valuesRotate.length - 1) {
      setIndex(0);
      setDuration(0);
      setDelay(0);
      return
    }
    setIndex(prev => prev + 1);
    setDuration(0.8);
    setDelay(0.8);
  }, [index, valuesRotate.length])

  const handleAnimationColor = useCallback(() => {
    if (indexColor >= colorRotate.length - 1) {
      setIndexColor(0);
      return
    }
    setIndexColor(prev => prev + 1);
  }, [colorRotate.length, indexColor])

  const handleAnimationColorLight = useCallback(() => {
    if (indexColorLight >= colorRotateLight.length - 1) {
      setIndexColorLight(0);
      return
    }
    setIndexColorLight(prev => prev + 1);
  }, [colorRotateLight.length, indexColorLight])

  useEffect(() => {

    const animation = animate(x, valuesRotate[index], {
      duration,
      delay,
      ease: "linear",
      onComplete: () => handleAnimation()
    });

    return () => animation.stop();
  }, [x, duration, index, handleAnimation, valuesRotate, delay]);


  useEffect(() => {
    const animation = animate(colorLight, colorRotateLight[indexColorLight], {
      duration: 0.8,
      delay: 0.8,
      ease: "linear",
      onComplete: () => handleAnimationColorLight()
    });

    return () => animation.stop();
  }, [colorRotateLight, handleAnimationColorLight, colorLight, indexColorLight]);

  useEffect(() => {
    const animation = animate(color, colorRotate[indexColor], {
      duration: 0.8,
      delay: 0.8,
      ease: "linear",
      onComplete: () => handleAnimationColor()
    });

    return () => animation.stop();
  }, [color, handleAnimationColor, colorRotate, indexColor]);

  return (
    <S.Container>

      <S.ContainerSofa>
        <S.Polygon
          width="636" height="636" viewBox="0 0 636 636" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ rotate: x, originX: '50%', originY: '50%' }}
        >
          <path d="M594.632 499.008C586.806 548.067 548.362 586.555 499.312 594.436L374.044 614.565L248.71 634.275C199.634 641.993 151.15 617.324 128.497 573.11L70.6433 460.193L13.1678 347.084C-9.33744 302.795 -0.858396 249.061 34.1912 213.853L123.703 123.938L213.516 34.323C248.683 -0.76693 302.407 -9.30762 346.723 13.1469L459.898 70.4928L572.88 128.217C617.12 150.82 641.845 199.275 634.183 248.36L614.617 373.717L594.632 499.008Z" fill="url(#paint0_linear_19_5)" />
          <defs>
            <linearGradient id="paint0_linear_19_5" x1="53" y1="161.5" x2="618" y2="543.5" gradientUnits="userSpaceOnUse">
              <motion.stop offset="0.338542" style={{ stopColor: color }} />
              <motion.stop offset="1" style={{ stopColor: colorLight }} stop-opacity="0.85" />
            </linearGradient>
          </defs>
        </S.Polygon>
        <CaroucelText />
      </S.ContainerSofa>

      <S.CardMain>
        <S.Header>
          <S.SmilleIcon />
        </S.Header>
        <h3>My</h3>
        <h3>storehouse</h3>

        <S.DescriptionProduct>
          <p>Product</p>
          <div>
            <p>NO</p>
          </div>
        </S.DescriptionProduct>
        <Caroucel />
      </S.CardMain>
      <S.MinorGrayBand/>
      
      <S.MinorGrayBand/>
      <S.GreaterGrayBand>
        <S.ContainerOption>
          <S.LeftOption>
              <S.Icon src={sofaIcon} alt={sofaIcon} activated />
              <S.Line/>
              <S.Icon src={plug} alt={plug} />
              <S.Line/>
              <S.Icon src={fileIcon} alt={fileIcon} />

          </S.LeftOption>

          <S.CenterOptions>
              <S.Icon src={spanner} alt={spanner} />
              <S.Icon src={pencil} alt={pencil} />
              <S.Icon src={user} alt={user} />
              <S.LineUp/>
              <S.Forward>
                <img src={arrow} alt={arrow} />
              </S.Forward>
          </S.CenterOptions>
          <S.RightOptions>
          <S.Icon src={agenda} alt={agenda} activated/>
          </S.RightOptions>
        </S.ContainerOption>
      </S.GreaterGrayBand>

    </S.Container>
  );
}

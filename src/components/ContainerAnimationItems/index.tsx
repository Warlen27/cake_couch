import { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import { animate, useMotionValue, useTransform } from 'framer-motion';
import ItemRotateAnimation from './ItemRotateAnimation';

type AnimationProps = {
    delayProps: number;
    initialDelay: number;
    imageItem: string;
    width: number;
    top: number;
    left: number;
    widthItem?: number;
    positionLeftItem?: number;
    secondItem?: string;
    thirdItem?: string;
    attributesSecondItem?: {
        width: number;
        top: number;
        left: number;
    };
    attributesThirdItem?: {
        width: number;
        top: number;
        left: number;
    };
}

export default function ContainerAnimationItems({
    delayProps,
    initialDelay,
    imageItem,
    width,
    top,
    left,
    widthItem,
    positionLeftItem,
    secondItem,
    thirdItem,
    attributesSecondItem,
    attributesThirdItem
}: AnimationProps) {
    const x = useMotionValue(0);
    const [index, setIndex] = useState(1);


    const [duration, setDuration] = useState(0.8);
    const [delay, setDelay] = useState(initialDelay);

    const valuesRotate = useMemo(() => [0, 200, 230, 380], []);
    const opacity = useTransform(x,
        [0, 200, 230, 360, 370, 380],
        [0, 1, 1, 1, 0.5, 0]
    );


    const handleAnimation = useCallback(() => {
        if (index >= valuesRotate.length - 1) {
            setIndex(0);
            setDuration(0);
            setDelay(delayProps);
            return
        }
        setIndex(prev => prev + 1);
        setDuration(0.8);
        setDelay(0.8);
    }, [delayProps, index, valuesRotate.length])

    useEffect(() => {

        const animation = animate(x, valuesRotate[index], {
            duration,
            delay: x.get() === valuesRotate[1] || x.get() === valuesRotate[2] ? 0 : delay,
            ease: "linear",

            onComplete: () => handleAnimation()
        });

        return () => animation.stop();
    }, [x, duration, index, handleAnimation, valuesRotate, delay]);


    return (
        <S.Container
            style={{
                rotate: x,
                originX: '50%',
                originY: '50%',
                opacity: opacity,
            }}
        >
            <ItemRotateAnimation
                imageItem={imageItem}
                width={width}
                widthItem={widthItem}
                positionLeftItem={positionLeftItem}
                top={top}
                left={left}
                x={x}
            />
             {thirdItem && (
                <ItemRotateAnimation
                   imageItem={thirdItem}
                   width={attributesThirdItem?.width || 250}
                   top={attributesThirdItem?.top || 259}
                   left={attributesThirdItem?.left || -110}
                   x={x}
               />
             )}
            {secondItem && (
                <ItemRotateAnimation
                   imageItem={secondItem}
                   width={attributesSecondItem?.width || 250}
                   top={attributesSecondItem?.top || 259}
                   left={attributesSecondItem?.left || -110}
                   x={x}
               />
            )}
            

        </S.Container>
    );
}

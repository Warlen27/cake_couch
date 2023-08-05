import { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import { MotionValue, animate, useMotionValue, useTransform } from 'framer-motion';

type AnimationProps = {
  imageItem: string;
  width: number;
  widthItem?: number;
  positionLeftItem?: number;
  top: number;
  left: number;
  x: MotionValue<number>
}

export default function ItemRotateAnimation({ 
  imageItem, 
  width, 
  widthItem,
  positionLeftItem,
  top,
  left,
  x,
}: AnimationProps) {
 
  const rotate = useTransform(x,
    [0, 200, 230, 380],
    [0, -200, -230, -380]
);

  return (
    <S.ItemRotate
      src={imageItem}
      style={{ 
        rotate: rotate, 
        originX: '50%', 
        originY: '50%',
        width: widthItem || width,
        top,
        left: positionLeftItem || left,
      }}
     alt={imageItem}
    />
  );
}

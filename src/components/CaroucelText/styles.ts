import styled, { css } from 'styled-components';
import { motion } from "framer-motion";

export const BoxContainer = styled.section`
  --main-width: 190px;
    width: 190px;
    height: 143px;
    display: flex;
    z-index: 2;
    position: absolute;
    top: 110px;
    left: 72px;
    overflow: hidden;
`;

export const CarouselContainer = styled(motion.ul)`
    display: flex;
    height: 100%;
    list-style: none;
`;

export const CarouselContent = styled.li`
    min-width: var(--main-width);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 30px;
`;

export const ContainerItems = styled.li`
    min-width: var(--main-width);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
         font-size: 70px;
         line-height: 60px;
         font-family: "Poppins", sans-serif;
         text-align: center;
         color: #FFF;
    }
    
`;

export const ContainerImage = styled.div`
    width: 180px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

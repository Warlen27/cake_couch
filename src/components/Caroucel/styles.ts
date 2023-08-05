import styled from 'styled-components';
import { motion } from "framer-motion";

type Props = {
    index: number;
}

export const Root = styled.section`
    width: 100%;
    display: flex;
`;

export const BoxContainer = styled.section`
  --main-width: 556px;
    width: 556px;
    height: 230px;
    display: flex;
    z-index: 2;
    margin-top: 13px;
    position: relative;
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
    /* align-items: center; */
    /* justify-content: space-between; */
`;

export const ContainerItems = styled.article<Props>`
    width: 100%;
    height: ${({ index })=> index === 0 ? '90px' : '70px'};
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        margin-top: ${({ index })=> index === 0 ? '20px' : '0px'};
    }

    img {
        margin-top: ${({ index })=> index === 0 ? '-15px' : '0px'};
    }
`;

export const ContainerImage = styled.div`
    width: 180px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerPlus = styled.div`
    width: 39.4px;
    display: flex;
    margin-top: 33px;
    z-index: 20;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

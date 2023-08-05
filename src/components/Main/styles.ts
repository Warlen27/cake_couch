import styled from 'styled-components';
import { motion } from "framer-motion";
type Activated = {
  activated?: boolean;
}

export const Container = styled.section`
  width: 93vw;
  height: 94vh;
  display: flex;
  justify-content: space-between;
  background: #FDFCFF;
  border-radius: 40px;
  position: relative;
`;

export const ContainerSofa = styled.section`
  width: 50%;
  height: 99%;
  display: flex;
  border-radius: 40px 40px 40px;
  position: relative;
  overflow: hidden;
`;

export const ContainerPolygon = styled(motion.div)`
    height: 580px;
    width: 580px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -119px;
    left: -171px;
    z-index: 2;
`;

export const Polygon = styled(motion.svg)`
    height: 580px;
    width: 580px;
    position: absolute;
    top: -119px;
    left: -171px;
    z-index: 2;

`;

export const CardMain = styled.section`
  width: 50%;
  height: 99%;
  display: flex;
  flex-direction: column;
  border-radius: 0px 40px 40px;
  padding-right: 37px;

  h3 {
    color: rgb(2, 0, 0);
    position: relative;
    font-weight: 400;
    font-size: 30px;
  }

  h3 + h3 {
    margin-bottom: 22px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SmilleIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgb(255, 191, 0);
`;

export const DescriptionProduct = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const BoxContainer = styled.section`
    width: 94%;
    height: 210px;
    display: flex;
    z-index: 2;
    margin-top: 13px;
`;

export const CarouselContainer = styled.ul`
    width: 100%;
`;

export const CarouselContent = styled.li`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
`;

export const ContainerImage = styled.div`
    width: 180px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SofaBlue = styled.div`
    background: blue;
    width: 296px;
    height: 100px;
    position: absolute;
    top: 159px;
    right: 82px;
    border-radius: 34px;
    z-index: 2;
`;

export const MinorGrayBand = styled.div`
   width: 100%;
   height: 70px;
   background: #F6F3F7;
   position: absolute;
   top: 54%;
   left: 0;
   transform: translateY(-35px);
`;

export const GreaterGrayBand = styled.div`
   width: 100%;
   height: 28%;
   position: absolute;
   bottom: 0;
   background: #F6F3F7;
   border-radius: 0px 0px 40px 40px;
   display: flex;
   align-items: flex-end;
`;


export const ContainerOption = styled.section`
   width: 100%;
   height: 38%;
   /* background: #f00; */
   display: flex;
   justify-content: space-between;
   padding: 0 3rem;
`;

export const CenterOptions = styled.div`
   width: 200px;
   height: 50px;
   background: #FFF;
   display: flex;
   align-items: center;
   border-radius: 25px;
   margin-top: -50px;
   z-index: 99;
   padding-left: 15px;

   img {
    width: 40px;
    height: 40px;
    padding: 11px;
   }
`;

export const LeftOption = styled.article`
  display: flex;
  height: 50px;
  align-items: center;
  gap: 3px;
`;

export const Icon = styled.img<Activated>`
    width: 50px;
    height: 50px;
    background: ${({ activated })=> activated && '#e5e7e6'};
    border-radius: 18px;
    padding: 17px;
    margin-right: ${({ activated })=> activated && '6px'};
`;

export const RightOptions = styled.article`
    height: 50px; 
`;

export const Line = styled.div`
   width: 20px;
   height: 2px;
   background: #d5d5d5;
`;

export const LineUp = styled.div`
   width: 2px;
   height: 30px;
   background: #d5d5d5;
   margin-right: 15px;
`;

export const Forward = styled.button`
    width: 40px;
    height: 40px;
    background: #37393d;
    border-radius: 15px;
    padding: 11px;
    display: grid;
    place-items: center;

     img {
      padding: 0;
      width: 10px;
      height: 10px;
      color: #FFF;
     }
`;






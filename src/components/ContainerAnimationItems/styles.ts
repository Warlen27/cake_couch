import styled from 'styled-components';
import { motion } from "framer-motion";


export const Container = styled(motion.section)`
  /* background: rgba(255,0,0,.5); */
  border-radius: 40px;
  height: 580px;
  width: 580px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -81px;
  left: -123px;
  z-index: 2;
`;

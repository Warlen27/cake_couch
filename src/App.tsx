import Main from "./components/Main";
import ContainerAnimationItems from "./components/ContainerAnimationItems";
import SofaBlue from "./assets/sofa_blue.svg";
import SofaYellow from "./assets/sofa_yellow.svg";
import HerbPods from "./assets/herbs_pods.svg";
import cloud from "./assets/cloud.svg";
import secondImageSofaBlue from './assets/secondImageSofaBlue.svg';
import thirdImageSofaBlue from './assets/thirdImageSofaBlue.svg';
import secondImageSofaYellow from './assets/secondImageSofaYellow.svg';
import thirdImageSofaYellow from './assets/thirdImageSofaYellow.svg';
import union from './assets/union.svg';

import * as S from './styles/styles';

export default function App() {
  return (
    <div>
      <S.IconUnion src={union} alt={union} />
      <Main />
      <ContainerAnimationItems
        delayProps={1.6}
        initialDelay={0.8}
        imageItem={SofaYellow}
        width={250}
        top={259}
        left={-90}
        secondItem={secondImageSofaYellow}
        thirdItem={thirdImageSofaYellow}
        attributesSecondItem={{
          width: 100,
          top: 180,
          left: 100
        }}
        attributesThirdItem={{
          width: 90,
          top: 450,
          left: 200
        }}
      />
      <ContainerAnimationItems
        delayProps={1.6}
        initialDelay={2.4}
        imageItem={HerbPods}
        width={250}
        top={259}
        left={-110}
        widthItem={112}
        positionLeftItem={37}
        secondItem={cloud}
        attributesSecondItem={{
          width: 250,
          top: 160,
          left: -40
        }}
      />

      <ContainerAnimationItems
        delayProps={1.6}
        initialDelay={4}
        imageItem={SofaBlue}
        width={300}
        top={259}
        left={-134}
        secondItem={secondImageSofaBlue}
        thirdItem={thirdImageSofaBlue}
        attributesSecondItem={{
          width: 150,
          top: 100,
          left: 20
        }}
        attributesThirdItem={{
          width: 110,
          top: 420,
          left: 80
        }}
      />
    </div>
  );
}

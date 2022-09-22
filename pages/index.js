import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { Container, H1, MainContainer, ContainerSectionChecked } from "../components/home/indexStyled";
import { useSelector } from 'react-redux';
import useGrille from '../hooks/useGrille';
import { Button } from '../components/button';

const SectionGrille = dynamic(() => import('../components/sectionGrille/index'), {
  ssr: false,
});

const SectionCheckFilled = dynamic(() => import('../components/sectionCheckFilled/index'), {
  ssr: false,
});

const SectionPrice = dynamic(() => import('../components/sectionPrice/index'), {
  ssr: false,
});


export default function Home() {
  const [priceFinal, setPriceFinal] = useState(0);
  const [dataNumbers, dataStars, handleClickNumber, handleClickStars, handleEmpty, arrayFinal, getNumberOfNumberOrStars] = useGrille();
  const getGrilleData = useSelector((state) => state.grille)
  const numberStarsToBeGood = 2;
  const numberNumbersToBeGood = 5;

  useEffect(() => {
    const findElement = getGrilleData?.grilleData?.multiples?.find(ol => ol.pattern.toString() === arrayFinal.toString());
    if(findElement !== undefined && arrayFinal[0] !== 0 && arrayFinal[1] !== 0) {
      let { cost } = findElement;
      setPriceFinal(parseFloat((cost.value/100).toFixed(2)));
    } else {
      setPriceFinal(0);
    }
  }, [arrayFinal]);

  return (
    <MainContainer>
      <H1>La grille (fake)euromillions</H1>
      <Container>
        <ContainerSectionChecked>
          <SectionCheckFilled dataNumbers={parseInt(getNumberOfNumberOrStars(dataNumbers))} dataStars={parseInt(getNumberOfNumberOrStars(dataStars))} numberNumbersToBeGood={numberNumbersToBeGood} numberStarsToBeGood={numberStarsToBeGood} />
          <Button onClick={handleEmpty}>Vider la grille</Button>
        </ContainerSectionChecked> 
      </Container>
      <Container>
        <SectionGrille dataNumbers={dataNumbers} dataStars={dataStars} handleclickStars={handleClickStars} handleclickNumber={handleClickNumber} />
      </Container>
      <Container>
        <SectionPrice priceFinal={priceFinal} />
      </Container>
    </MainContainer>
  )
}

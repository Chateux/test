import { ContainerCheck, ContainerCheckStars } from './indexStyled';

function SectionCheckFilled({dataNumbers, dataStars, numberNumbersToBeGood, numberStarsToBeGood}) {
  return ( 
    <ContainerCheck>
        <ContainerCheckStars isNumber>{dataNumbers < 5 ? `Il vous reste encore ${numberNumbersToBeGood - dataNumbers} nombre à coché.` : 'Vous avez coché tous les nombres.'}</ContainerCheckStars>
        <ContainerCheckStars>{dataStars < 2 ? `il vous reste encore ${numberStarsToBeGood - dataStars} étoile à coché.` : 'Vous avez coché toutes les étoiles.'}</ContainerCheckStars>
    </ContainerCheck>
  )
};

export default SectionCheckFilled;
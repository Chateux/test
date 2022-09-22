import dynamic from 'next/dynamic';
import { ContainerSection } from './indexStyled';

const SectionNumbers = dynamic(() => import('../sectionNumbers/index'), {
  ssr: false,
});
const SectionStars = dynamic(() => import('../sectionStars/index'), {
  ssr: false,
});

function SectionGrille({dataStars, dataNumbers, handleclickStars, handleclickNumber}) {
  return ( 
    <ContainerSection>
        <SectionNumbers dataArray={dataNumbers} handleclick={handleclickNumber} />
        <SectionStars dataArray={dataStars} handleclick={handleclickStars}/>
    </ContainerSection>
  )
};

export default SectionGrille;
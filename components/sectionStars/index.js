import { ContainerSectionStars, ContainerSectionByStar } from './indexStyled';

function SectionStars({dataArray, handleclick}) {

  return <ContainerSectionStars>{dataArray?.[0]?.map(i => <ContainerSectionByStar key={i.number} onClick={(e) => handleclick(e, i.number)} isClicked={i.select}>{i.number}</ContainerSectionByStar>)}</ContainerSectionStars>
}

export default SectionStars;
import { ContainerSectionNumber, ContainerSectionByNumber } from './indexStyled';

function SectionNumbers({dataArray, handleclick}) {
    return <ContainerSectionNumber> { dataArray?.[0]?.map(i => <ContainerSectionByNumber key={i.number} onClick={(e) => handleclick(e, i.number)} isClicked={i.select}>{i.number}</ContainerSectionByNumber>)}</ContainerSectionNumber>
}

export default SectionNumbers;
import { ContainerPrice } from './indexStyled';

function SectionPrice({priceFinal}) {
  return ( 
    <ContainerPrice>
          Prix de la grille <div>{priceFinal}€</div>
     </ContainerPrice>
  )
};

export default SectionPrice;
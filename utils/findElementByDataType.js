export const findElementByDataTypes = (dataType, data) => {
    const findIndexOfData = dataType?.[0]?.findIndex(ol => ol.number === data);
    dataType?.[0]?.map(ol => {
      if(ol.number === data) {
        if(ol.select === false) {
          dataType[0][findIndexOfData].select = true;
        } else {
          dataType[0][findIndexOfData].select = false;
        }
      } 
    })
    return dataType;
  }
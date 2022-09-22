import { useCallback, useEffect, useState } from 'react';
import { findElementByDataTypes } from '../utils/findElementByDataType';

const useStars = () => {
  const [stars, setStars] = useState(0);
  const [numbers, setNumbers] = useState(0);
  const [arrayFinal, setArrayFinal] = useState([]);
  const [reset, setReset] = useState(0);
  const [dataStars, setDataStars] = useState({number: 0, select: false});
  const [dataNumbers, setDataNumbers] = useState({number: 0, select: false});

  useEffect(() => {
    setDataNumbers([Array(50).fill(null).map((i, v)=> ({number:v+1, select: false}))])
    setDataStars([Array(12).fill(null).map((i, v)=> ({number:v+1, select: false}))])
    setReset(0);
  }, [reset]);

  useEffect(() => {
    if(numbers) {
      setDataNumbers(findElementByDataTypes(dataNumbers, numbers));
      setNumbers(0);
    }
  }, [numbers]);

  useEffect(() => {
    if(stars) {
      setDataStars(findElementByDataTypes(dataStars, stars));
      setStars(0);
    }
  }, [stars]);
  
  const handleClickNumber = useCallback(function (e, datas) {
    e.preventDefault();
    setNumbers(datas);
  }, []);

  const handleClickStars = useCallback(function (e, datas) {
    e.preventDefault();
    setStars(datas);
  }, []);

  const getNumberOfNumberOrStars = (dataNumber) => {
    return dataNumber?.[0]?.filter(d => d.select === true).length;
  };

  const handleEmpty = () => {
    setArrayFinal(([0, 0]))
    setReset(1);
  };

  useEffect(() => {
    setArrayFinal([getNumberOfNumberOrStars(dataNumbers), getNumberOfNumberOrStars(dataStars)]);
  }, [numbers, stars]);

  return [dataNumbers, dataStars, handleClickNumber, handleClickStars, handleEmpty, arrayFinal, getNumberOfNumberOrStars];

};

export default useStars;
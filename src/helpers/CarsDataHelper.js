const carsDataHelper = (dataToFormat) => {
  const dataFormatted = dataToFormat.reduce((accumulate, current) => {
    let dataGroup = accumulate.find(x => x.brand === current.brand);

    if (!dataGroup) {
      dataGroup = { brand: current.brand, data: [] };
      accumulate.push(dataGroup);
    }

    dataGroup.data.push(current);
    return accumulate;
  }, []);

  return dataFormatted;
}

export default carsDataHelper;

const dummyData = require('../Model/targetModel');

exports.searchData = (req, res) => {
  const { address, fullName, cellNumber } = req.body;
  const results = dummyData.filter(item =>
    (!address || item.address.includes(address)) &&
    (!fullName || item.fullName.includes(fullName)) &&
    (!cellNumber || item.cellNumber.includes(cellNumber))
  );
  res.json({ results });
};
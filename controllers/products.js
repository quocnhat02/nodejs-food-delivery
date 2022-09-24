const getAllProductsStatic = async (req, res) => {
  return res.status(200).json({ msg: 'Products testing route' });
};

const getProductsStatic = async (req, res) => {
  return res.status(200).json({ msg: 'Products route' });
};

module.exports = {
  getAllProductsStatic,
  getProductsStatic,
};

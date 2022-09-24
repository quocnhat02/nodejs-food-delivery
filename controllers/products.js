const getAllProductsStatic = async (req, res) => {
  throw new Error('testing async error');
  return res.status(200).json({ msg: 'Products testing route' });
};

const getAllProducts = async (req, res) => {
  return res.status(200).json({ msg: 'Products route' });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};

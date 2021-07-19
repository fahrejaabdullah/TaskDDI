import Axios from "axios";


const URL = 'http://demo9666373.mockable.io/'

const getCategory = () => {
  return Axios.get(URL + 'getCategory')
};

const getList = name => {
  return Axios.get(URL + "get"+name)
}

export default {
  getCategory,
  getList
};

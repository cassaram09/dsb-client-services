import Resource from 'r3-library';

import {API} from '../utils/constants';
import Store from '../store/store';

const Companies = new Resource('companies', API.dev + '/companies', API.headers)


  console.log(Companies)

export default Companies;

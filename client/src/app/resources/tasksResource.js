import Resource from 'r3-library';

import {API} from '../utils/constants';
import Store from '../store/store';

const Tasks = new Resource('tasks', API.dev + '/tasks', API.headers)
  .registerDefaults();

export default Tasks;

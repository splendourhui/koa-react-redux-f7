import { Schema, arrayOf } from 'normalizr';

const response = new Schema('response');
const test = new Schema('test');

export default {
  NORMAL_RESP: response,
  TEST_ARRAY: arrayOf(test)
};

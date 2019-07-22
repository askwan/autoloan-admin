import orderServer from './order';
import userServer from './user';
import config from './config';

const imagePath = config.baseUrl+'/image/show?imageUrl='
export {
  orderServer,
  userServer,
  imagePath
}
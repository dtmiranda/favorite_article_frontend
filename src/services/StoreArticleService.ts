import { IStoreArticle } from '../interfaces/IStoreArticle';
import { Api } from '../providers/Api'

const storeArticle = (data: IStoreArticle) => Api.post('/articles', data);

export const StoreArticlesServices = {
  storeArticle
}
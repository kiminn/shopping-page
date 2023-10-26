
import { setupWorker } from 'msw';
import * as ShopApi from './apis/shop/shop.api'
// ./apis/todo에 있는 모든 export를 object형태로 만들고 TodoApi로 불러옴

const handler = [...Object.values(ShopApi)];
// TodoApi가 가진 모든 value들을 복사하여 배열의 요소로 (getTodos)
// getShops를 배열 handler의 요소로 지정하여 api를 등록

export const worker = setupWorker(...handler);
// 등록된 api를 msw에 셋업
import { atom } from 'recoil';

/* Sample code */
// export const sampleState = atom({
//   key: 'exState', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });


export const userInfoState = atom({
  key: 'userInfoState',
  default: [],
});


export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});
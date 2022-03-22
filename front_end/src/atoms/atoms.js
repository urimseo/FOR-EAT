import { atom } from 'recoil';

/* Sample code */
// export const sampleState = atom({
//   key: 'exState', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });

/*
Atom : 상태. 해당 아톰을 참고하고 있는 컴포넌트를 리렌더링함
*/

export const userInfoState = atom({
  key: 'userInfoState',
  default: [],
});


export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});

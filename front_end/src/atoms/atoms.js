import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

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
  effects_UNSTABLE: [persistAtom],
});


export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});


export const reviewDataState = atom({
  key: 'reviewDataState',
  default: []
})
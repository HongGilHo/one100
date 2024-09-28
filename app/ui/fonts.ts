import {Montserrat, Lusitana} from 'next/font/google';
import localFont from 'next/font/local';

// 구글폰트에서 변수방식지원하는경우 굵기입력안함
export const montserrat = Montserrat({
  subsets: ['latin'],
  // 브라우저의 폰트 표현방식을 swap으로 하여 시스템포트로 보여준후
  // 웹폰트 다운로드되면 췝폰트로 보여짐
  display: 'swap'
});

// 변수방식 아닌경우 weight지정해야 함
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// 구글폰트에 없는 로컬폰트
export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});
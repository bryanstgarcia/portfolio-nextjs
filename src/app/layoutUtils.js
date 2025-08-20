import localFont from 'next/font/local'
export const outerSans = localFont({
    src: [
      {
        path: '../../public/fonts/MADE-Outer-Sans-Thin.otf',
        weight: '200',
        style: 'normal',
      },
      {
        path: '../../public/fonts/MADE-Outer-Sans-Light.otf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../../public/fonts/MADE-Outer-Sans-Regular.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../public/fonts/MADE-Outer-Sans-Medium.otf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../../public/fonts/MADE-Outer-Sans-Bold.otf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../../public/fonts/MADE-Outer-Sans-Black.otf',
        weight: '900',
        style: 'normal',
      },
    ],
    variable: '--font-outer-sans',
    display: 'swap',
  });
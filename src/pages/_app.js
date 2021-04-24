import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

NProgress.configure({ trickleRate: 0.1, trickleSpeed: 300 });

Router.events.on("routeChangeStart", url => {
  NProgress.start();
})

Router.events.on("routeChangeComplete", url => {
  NProgress.done();
})

Router.events.on("routeChangeError", url => {
  NProgress.done();
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

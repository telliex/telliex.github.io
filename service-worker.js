/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d338dd0a66897b29ca2c06495dbb3cfd"
  },
  {
    "url": "assets/css/0.styles.704afe9d.css",
    "revision": "f7f4ec3a116f21bea330d55c9fd8011f"
  },
  {
    "url": "assets/img/020053010554587.3e09755f.jpg",
    "revision": "3e09755f1a0788bfe6a7dbe0a3dec85d"
  },
  {
    "url": "assets/img/2ce265fef92dce741e67db232357796d.2ce265fe.jpg",
    "revision": "2ce265fef92dce741e67db232357796d"
  },
  {
    "url": "assets/img/4a526c56d8cbd9c6c8ae608e342752ca.4a526c56.jpg",
    "revision": "4a526c56d8cbd9c6c8ae608e342752ca"
  },
  {
    "url": "assets/img/4f8a1fa1dd67249171244df356b64396.4f8a1fa1.jpg",
    "revision": "4f8a1fa1dd67249171244df356b64396"
  },
  {
    "url": "assets/img/73607121b26944c77f657e62a8894e2d.73607121.png",
    "revision": "73607121b26944c77f657e62a8894e2d"
  },
  {
    "url": "assets/img/bdd_process.b92d9a24.jpg",
    "revision": "b92d9a24ca6f20bf7efc702f82c44c99"
  },
  {
    "url": "assets/img/decomposs-01.c749423b.png",
    "revision": "c749423b12fc556d0878dafc7f229828"
  },
  {
    "url": "assets/img/img-bdd-report-01.73a5d5e1.png",
    "revision": "73a5d5e107d016c5ac6a93368cacefd1"
  },
  {
    "url": "assets/img/img-vue-just-01.bdafe9fc.png",
    "revision": "bdafe9fc783e7eb18c7783e1158d9ba0"
  },
  {
    "url": "assets/img/img-vue-just-02.351636e7.png",
    "revision": "351636e7ed90696213bf6ed7f6316f44"
  },
  {
    "url": "assets/img/img-vue-just-03.32812e5c.png",
    "revision": "32812e5c8f7d22ae20d61261b66c3456"
  },
  {
    "url": "assets/img/performance-01.13bc6d4b.png",
    "revision": "13bc6d4b3d385292bbb026277cdc06a0"
  },
  {
    "url": "assets/img/performance-02.1be65388.png",
    "revision": "1be65388e871b083070c96fc30fc6324"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tdd-flowchart.9035316a.png",
    "revision": "9035316a349dd9ef7e80057a9ac9ab43"
  },
  {
    "url": "assets/img/user-story-map.83b34245.png",
    "revision": "83b34245d8b68870f7c2b8c3e581e96e"
  },
  {
    "url": "assets/img/Xnip2019-04-02_18-01-34.acf5c447.jpg",
    "revision": "acf5c447c9a9e8dbff0f7d06d22a9077"
  },
  {
    "url": "assets/img/Xnip2019-04-02_18-10-08.d6cbed0d.jpg",
    "revision": "d6cbed0d7190c4d44670b2e3cc4df724"
  },
  {
    "url": "assets/img/Xnip2019-04-02_18-33-24.b7bfb3a4.jpg",
    "revision": "b7bfb3a489e1212e837fb5dcfd584988"
  },
  {
    "url": "assets/js/10.05a35ce7.js",
    "revision": "3eed7ed0edb7219f1c40b4dd0a2d0969"
  },
  {
    "url": "assets/js/11.60292d1a.js",
    "revision": "58d467024a38f00529c9ecf60cb63acb"
  },
  {
    "url": "assets/js/12.accdc152.js",
    "revision": "eb991c77808ffc029edb022e181a396c"
  },
  {
    "url": "assets/js/13.25c0f1fe.js",
    "revision": "5cb3099ca9e0982192aa213129798f33"
  },
  {
    "url": "assets/js/14.4317721c.js",
    "revision": "f3ff972dd528e05cc91d736eee211fc3"
  },
  {
    "url": "assets/js/15.937da29b.js",
    "revision": "c793cdcec83d7843efa84225b95c8feb"
  },
  {
    "url": "assets/js/16.8d0e5c2e.js",
    "revision": "22d004c460d9b4b61f31faeb8946ea44"
  },
  {
    "url": "assets/js/17.42a648cd.js",
    "revision": "63386f6dafba2cb58b005b5075b29ba4"
  },
  {
    "url": "assets/js/18.b3fa4ccb.js",
    "revision": "fe8523bdb9179f7c12357daaab4f6798"
  },
  {
    "url": "assets/js/19.99142489.js",
    "revision": "c27ff21e1ccee47ba583416db69355a1"
  },
  {
    "url": "assets/js/2.938831bb.js",
    "revision": "aee39d7184e1d4f78f66ef04bbce1dfd"
  },
  {
    "url": "assets/js/20.fe850fd0.js",
    "revision": "53ef92e23b5f8b57e1452179797273b3"
  },
  {
    "url": "assets/js/21.55723c2f.js",
    "revision": "2c2b2a8ebc201e54c50946268d9b18a4"
  },
  {
    "url": "assets/js/22.8a5115d2.js",
    "revision": "4b299ce66c9c33e6605e2607475a2091"
  },
  {
    "url": "assets/js/23.49cb64ec.js",
    "revision": "dfab83201ee70e3d610c38b1dd0fd520"
  },
  {
    "url": "assets/js/3.4c4a8731.js",
    "revision": "5a257c81ea2d39b1de1408ba0e4b8985"
  },
  {
    "url": "assets/js/4.069f570c.js",
    "revision": "70002fa9163332f51853ea4fdf5cdba3"
  },
  {
    "url": "assets/js/5.7a5b8e8c.js",
    "revision": "658213ae862fcb064d49bd1b5d85ca6f"
  },
  {
    "url": "assets/js/6.f15aaf75.js",
    "revision": "976d2e44b8bdfa2ce675af8a95372b1e"
  },
  {
    "url": "assets/js/7.39aa06ff.js",
    "revision": "d56db0f0b0afa8dbd05efba3cf946096"
  },
  {
    "url": "assets/js/8.9434947c.js",
    "revision": "5457f39f7b08e0774709199a385275d4"
  },
  {
    "url": "assets/js/9.cb121335.js",
    "revision": "7dd409e5b0437b326af5116637e3f5fa"
  },
  {
    "url": "assets/js/app.f34992e5.js",
    "revision": "488852ea80e95aeafcc83eeb3e235acb"
  },
  {
    "url": "decomposs/index.html",
    "revision": "94f9a46c5ab2b60fe93cf34cf8386844"
  },
  {
    "url": "demand/index.html",
    "revision": "641ed9d8ae23ad1ac3d0d6014228839d"
  },
  {
    "url": "img/020053010554587.jpg",
    "revision": "3e09755f1a0788bfe6a7dbe0a3dec85d"
  },
  {
    "url": "img/2ce265fef92dce741e67db232357796d.jpg",
    "revision": "2ce265fef92dce741e67db232357796d"
  },
  {
    "url": "img/4a526c56d8cbd9c6c8ae608e342752ca.jpg",
    "revision": "4a526c56d8cbd9c6c8ae608e342752ca"
  },
  {
    "url": "img/4f8a1fa1dd67249171244df356b64396.jpg",
    "revision": "4f8a1fa1dd67249171244df356b64396"
  },
  {
    "url": "img/73607121b26944c77f657e62a8894e2d.png",
    "revision": "73607121b26944c77f657e62a8894e2d"
  },
  {
    "url": "img/bdd_process.jpg",
    "revision": "b92d9a24ca6f20bf7efc702f82c44c99"
  },
  {
    "url": "img/decomposs-01.png",
    "revision": "c749423b12fc556d0878dafc7f229828"
  },
  {
    "url": "img/img-bdd-report-01.png",
    "revision": "73a5d5e107d016c5ac6a93368cacefd1"
  },
  {
    "url": "img/img-vue-just-01.png",
    "revision": "bdafe9fc783e7eb18c7783e1158d9ba0"
  },
  {
    "url": "img/img-vue-just-02.png",
    "revision": "351636e7ed90696213bf6ed7f6316f44"
  },
  {
    "url": "img/img-vue-just-03.png",
    "revision": "32812e5c8f7d22ae20d61261b66c3456"
  },
  {
    "url": "img/logo.png",
    "revision": "c49dba5fb97c77a234aeaf06c815cb60"
  },
  {
    "url": "img/performance-01.png",
    "revision": "13bc6d4b3d385292bbb026277cdc06a0"
  },
  {
    "url": "img/performance-02.png",
    "revision": "1be65388e871b083070c96fc30fc6324"
  },
  {
    "url": "img/Screen Shot 2019-04-01 at 17.41.47.png",
    "revision": "0180a39a74b72c533c47c479875ccacd"
  },
  {
    "url": "img/Screen Shot 2019-04-01 at 17.42.07.png",
    "revision": "747ec1ae30a3a532ca2e35fd869420fd"
  },
  {
    "url": "img/tdd-flowchart.png",
    "revision": "9035316a349dd9ef7e80057a9ac9ab43"
  },
  {
    "url": "img/user-story-map.png",
    "revision": "83b34245d8b68870f7c2b8c3e581e96e"
  },
  {
    "url": "img/Xnip2019-04-02_18-01-34.jpg",
    "revision": "acf5c447c9a9e8dbff0f7d06d22a9077"
  },
  {
    "url": "img/Xnip2019-04-02_18-10-08.jpg",
    "revision": "d6cbed0d7190c4d44670b2e3cc4df724"
  },
  {
    "url": "img/Xnip2019-04-02_18-33-24.jpg",
    "revision": "b7bfb3a489e1212e837fb5dcfd584988"
  },
  {
    "url": "index.html",
    "revision": "b9c274bcc787d186ac25abdd048134ca"
  },
  {
    "url": "intro/index.html",
    "revision": "869c8f6c6e70affb4f81ed927279dc00"
  },
  {
    "url": "other/index.html",
    "revision": "5db6ea11333f51e2bf60dc2723c2fb34"
  },
  {
    "url": "performance/index.html",
    "revision": "55ff08055fca008f9d8200c4e5c97e2e"
  },
  {
    "url": "styles/index.html",
    "revision": "40ba7589bc6309cb9d53cdb313a35bec"
  },
  {
    "url": "user-story/index.html",
    "revision": "365f4a5b76573b6debcb0ed3c218e9a2"
  },
  {
    "url": "ut/index.html",
    "revision": "01e81704e8cce42b030eb6b9b83acfcb"
  },
  {
    "url": "ut/jest.html",
    "revision": "5eabbad6ffb18cdc3e2f0bee115b21c7"
  },
  {
    "url": "ut/ut-vue.html",
    "revision": "843a4b3f8a96876052558fc2cc58631e"
  },
  {
    "url": "ut/vue-jest-callback-functions.html",
    "revision": "ab5e660a61a82d1a07db90ba2be911eb"
  },
  {
    "url": "ut/vue-jest-mock.html",
    "revision": "17c2a5265a9b83b50f2658beddd2f236"
  },
  {
    "url": "ut/vue-jest-template1.html",
    "revision": "545a38bbe3b7fbb52ab46febb1ce2432"
  },
  {
    "url": "ut/vue-jest-template2.html",
    "revision": "4d2acfb72aa2f74cac3aad84df0a6135"
  },
  {
    "url": "ut/vue-jest-tools.html",
    "revision": "94f86e42ca6b93db85383a96e68881c8"
  },
  {
    "url": "vue-bdd-test/bdd-report.html",
    "revision": "29c3f789344314f68634bfa0ad6eec42"
  },
  {
    "url": "vue-bdd-test/index.html",
    "revision": "ec1ebfdb2bf1a53fce0a99c42f02d1ab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

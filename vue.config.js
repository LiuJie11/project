// module.exports = {
//     configureWebpack: {
//       resolve: {
//         alias: {
//           'assets': '@/assets',
//           'components': '@/components',
//           'views': '@/views',
//         }
//       }
//     },
//   }


  module.exports = {
    configureWebpack: {
      resolve: {
        // extensions: []
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  };
const config = {
    baseURL: process.env.REACT_APP_BASE_API_URL,
    transformRequest: [function (data, headers) {
      // Do whatever you want to transform the data
  
      return data;
    }],
    transformResponse: [function (data) {
      // Do whatever you want to transform the data
  
      return data;
    }],
  
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    // params: {
    //  estateID: process.env.REACT_APP_ESTATE_ID,
    // },
    // headers: {
    //     Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    // },
    timeout: 10000,
    withCredentials: false,
    adapter: function (config) {
      /* ... */
    },
    // auth: {
    //   username: 'janedoe',
    //   password: 's00pers3cret'
    // },
    responseType: 'json', 
    responseEncoding: 'utf8',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    onUploadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
    },
    onDownloadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
    },
    maxContentLength: 2000,
    maxBodyLength: 2000,
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
    maxRedirects: 21, 
    beforeRedirect: (options, { headers }) => {
      if (options.hostname === "example.com") {
        options.auth = "user:password";
      }
    },
    socketPath: null,
    proxy: {
      protocol: 'https',
      host: '127.0.0.1',
      // port: 9000,
      // auth: {
      //   username: 'mikeymike',
      //   password: 'rapunz3l'
      // }
    },
    signal: new AbortController().signal,
    decompress: true, insecureHTTPParser: undefined, 
     transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
  
    // env: {
    //   // The FormData class to be used to automatically serialize the payload into a FormData object
    //   FormData: window?.FormData || global?.FormData
    // }
  }

  export default config;
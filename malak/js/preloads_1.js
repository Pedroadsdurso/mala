
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.ce860826deb28d884e48.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4551.latest.pt-BR.daafb60e66962f1105ee.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6605.latest.pt-BR.0a027deb4f4e87ae29a9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.pt-BR.d3bc65d7a91c6d71a13d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.bc0f4c2cd60eb0438484.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.pt-BR.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/168.latest.pt-BR.36865b2fee2c2c929fb7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.pt-BR.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8831.latest.pt-BR.889e54bf4ea91064dfa7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/236.latest.pt-BR.295d555d4868c86a1940.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5718.latest.pt-BR.b83493a0b0b5a230f131.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2714.latest.pt-BR.29091c4fe5edbc93b8d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4619.latest.pt-BR.6c9217a9316d67fa505e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.12760f0c4635226680e0.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/4551.latest.pt-BR.f59528d48acb3c97e035.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.9b54d1262b6855a0f380.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.0b6faa7cc9510bfee76e.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
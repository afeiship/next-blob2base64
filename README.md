# next-blob2base64
> Blob to base64

## installation
```bash
npm install -S afeiship/next-blob2base64 --registry=https://registry.npm.taobao.org
```

## usage
```js
import nxBlob2image from 'next-blob2base64';

// promise
nxBlob2image(blob).then(response=>{
  // base64:
  document.getElemenById('image').src = response;
})
```


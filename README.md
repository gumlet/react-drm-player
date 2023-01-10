# React DRM Player

## Introduction

`@gumlet/react-drm-player` is a simple player which supoprts DRM.
It uses [shaka-player.js](https://github.com/shaka-project/shaka-player) to play your DRM protected video playback if your browser supports `html 5 video` and `MediaSource Extension`.

```bash
npm i @gumlet/react-drm-player
```

The player automatically detects fairplay or widevine playback

## Example

### Using the ReactDRMPlayer component

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDRMPlayer from '@gumlet/react-drm-player';

ReactDOM.render(
    <ReactDRMPlayer 
        src={`<YOUR DRM PROTECTED VIDEO URL>`} 
        fairplayCertificateURI={`<YOUR FAIRPLAY CERTIFICATE URI>`}
        fairplayLicenseURI={`<YOUR PAIRPLAY LICENSE URI>`}

        widevineLicenseURI={`<YOUR WIDEVINE LICENSE URI>`}
        width="640" 
        height="264" 
        controls 
        muted
        preload="none"
        autoPlay={false}
    />,
  document.getElementById('app')
);
```

## Props

All [video properties](https://www.w3schools.com/tags/att_video_poster.asp) are supported and passed down to the underlying video component

| Prop                     | Description                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| src `String`, `required` | The DRM protected video url that you want to play                                                                                       |
| fairplayCertificateURI `String`, `required` | URL of the server which returns the fairplay certificate                                                                                       |
| fairplayLicenseURI `String`, `required` | URL of the server which returns the fairplay license                                                                                       |
| widevineLicenseURI `String`, `required` | URL of the server which returns the widevine license                                                                                       |
| autoPlay `Boolean`       | Autoplay when component is ready. Defaults to `false`                                                                   |
| controls `Boolean`       | Whether or not to show the playback controls. Defaults to `false`                                                       |
| width `Number`           | Video width. Defaults to `100%`                                                                                         |
| height `Number`          | Video height. Defaults to `auto`                                                                                        |
| onPlayerError `Callback`          | Callback to be called when the player experiences an error during player startup and setup                                                                                       |
| onPlaybackError `Callback`          | Callback to be called when the playback experiences an error during ongoing video playback                                                                                        |

## Maintainer

This library is maintained by <a href="https://www.gumlet.com" target="_blank">Gumlet.com</a>

[<img src="https://assets.gumlet.com/public/img/logo.png" width="300px">](https://www.gumlet.com)

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
// SPDX-FileCopyrightText: 2018-2022 The Manyverse Authors
//
// SPDX-License-Identifier: MPL-2.0

import 'react-native-ssb-shims';
import {URL, URLSearchParams} from 'react-native-url-polyfill';
globalThis.URL = URL;
globalThis.URLSearchParams = URLSearchParams;
import {run} from 'cycle-native-navigation';
import {screens, drivers} from './lib/frontend/index';
import {welcomeLayout, defaultNavOptions} from './lib/frontend/screens/layouts';
import setupSentryMobile from './setup-sentry-mobile';
// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

// Has to be done before setup Sentry, otherwise app gets stuck on splashscreen
run(screens, drivers, welcomeLayout, defaultNavOptions);

setupSentryMobile();

// MessageQueue.spy((msg) => {
//   if (msg.module === 'WebSocketModule') return;
//   console.log(msg.type, msg.module, msg.method);
// });

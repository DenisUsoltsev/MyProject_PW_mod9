import * as Sentry from "@sentry/browser";

import { Integrations } from '@sentry/tracing';

Sentry.init({

  dsn: "https://7e765770f8f4f3bd4e1c3f2228bba96e@o4508404322271232.ingest.de.sentry.io/4508404335116368",

  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,

});

// Тестовая ошибка
Sentry.captureMessage("Тестовая ошибка: Parcel + Sentry!");

myUndefinedFunction();

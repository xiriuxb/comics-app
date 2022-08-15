import './bootstrap';
import '../css/app.css';

import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { InertiaProgress } from '@inertiajs/progress';

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  resolve: name =>
    resolvePageComponent(
      `./components/${name}.jsx`,
      import.meta.glob('./components/**/*.jsx'),
    ),
  setup({ el, App, props }) {
    return render(
        <App {...props} />,
      el,
    );
  },
});

InertiaProgress.init({ color: '#4B5563' });

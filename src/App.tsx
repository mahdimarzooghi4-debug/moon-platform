import React from 'react';
import Page from './page';

export default function App() {
  return (
    <div data-codia-role="app_shell">
      <div data-codia-role="scroll_content">
        <div>
              <Page />
            </div>
      </div>
      <div data-codia-role="fixed_chrome" />
    </div>
  );
}

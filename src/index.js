import * as React from "react";
import { render } from "react-dom";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const code = `<div>
  <div>
    <h1>Hello World</h1>
  </div>
</div>`;

function App() {
  return (
    <LiveProvider code={code}>
      <LivePreview />
      <LiveError />
      <LiveEditor />
    </LiveProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

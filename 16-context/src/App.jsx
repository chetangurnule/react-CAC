import "./App.css";
import Panel from "./panel";
import { useState } from "react";
function App() {
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  return (
    <div>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={isActiveIndex === 0}
        onShow={() => setIsActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={isActiveIndex === 1}
        onShow={() => setIsActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
      <h2></h2>
    </div>
  );
}

export default App;

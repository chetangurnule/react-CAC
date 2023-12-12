import { learnContext } from "./learnContext";
import { useContext } from "react";
export default function Section({ children }) {
  const level = useContext(learnContext);
  return (
    <>
      <section className="section">
        <learnContext.Provider value={level + 1}>
          {children}
        </learnContext.Provider>
      </section>
    </>
  );
}

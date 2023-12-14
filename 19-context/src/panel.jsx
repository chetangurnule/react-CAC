export default function Panel({ title, isActive, onShow, children }) {
  return (
    <>
      <h2>{title}</h2>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button id="btn" onClick={onShow}>
          Show
        </button>
      )}
    </>
  );
}

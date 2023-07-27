export default function Title({ children, level }) {
  return (
    <>
      {level === "h1" && <h1>{children}</h1>}
      {level === "h2" && <h2>{children}</h2>}
      {level === "h3" && <h3>{children}</h3>}
      {level === "h4" && <h4>{children}</h4>}
      {level === "h5" && <h5>{children}</h5>}
      {level === "h6" && <h6>{children}</h6>}
    </>
  );
}

export default function Layout(props) {
  return (
    <div className="flex flex-col container mt-40 mx-auto">
      {props.children}
      <div className="flex flex-1 mt-16">
        <div className="flex flex-1  w-8/12 px-8 ">{props.cart}</div>
        <div className="flex  w-4/12 px-8">{props.summary}</div>
      </div>
    </div>
  );
}

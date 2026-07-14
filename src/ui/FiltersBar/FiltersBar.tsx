export declare namespace FiltersBar {
  interface Props extends React.ComponentPropsWithRef<"div"> {}
}
export function FiltersBar(props: FiltersBar.Props) {
  return (
    <div {...props}>
      <select
        value=""
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <option value="" disabled hidden>
          Add
        </option>
        <option value="banana">Banana</option>
        <option value="ananas">Ananas</option>
        <option value="apple">Apple</option>
      </select>
    </div>
  );
}

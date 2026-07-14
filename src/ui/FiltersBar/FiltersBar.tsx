export declare namespace FiltersBar {
  interface Props extends React.ComponentPropsWithRef<"div"> {}
}
export function FiltersBar(props: FiltersBar.Props) {
  return (
    <div {...props} className="">
      <button type="button" commandfor="filter-banana" command="toggle-popover">
        Banana
      </button>
      <div popover="auto" id="filter-banana">
        <input type="text" name="value" />
      </div>
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
      <button type="button">Clear</button>
    </div>
  );
}

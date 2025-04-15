"use client"

/*

- checkbox avec 3 variantes: "unchecked", "checked", "indeterminate"
- checkbox avec 3 states: "unchecked", "checked", "indeterminate"
- on a besoin de JS pour gérer le "indeterminate" state
- state isDisabled: boolean
- on a besoin d'un style custom pour le focus

*/

// const checkboxVariants = cva("", {
//   variants: {
//     variant: {
//       default: "",
//     }
//   },
//   defaultVariants: {
//     variant: "default"
//   }
// });

interface ICheckbox extends React.HTMLProps<HTMLInputElement> {
  isChecked?: boolean;
  isIndeterminate?: boolean;
}

export const Checkbox = (props: ICheckbox) => {
  const textLabel = {
    unchecked: "Unchecked",
    checked: "Checked",
    indeterminate: "Indeterminate",
  }

  const getStateLabel = (isChecked: boolean | undefined, isIndeterminate: boolean | undefined) => {
    if (isIndeterminate) {
      return textLabel.indeterminate;
    }
    return isChecked ? textLabel.checked : textLabel.unchecked;
  }

  return (
    <div className="flex items-center gap-6">
      <input
        className="checkbox-checked-content appearance-none w-4 h-4 border border-neutral-300 rounded checked:bg-indigo-600 checked:border-indigo-600 indeterminate:bg-indigo-600 indeterminate:border-indigo-600
                  relative
                  indeterminate:after:content-[''] indeterminate:after:absolute indeterminate:after:left-1
                  indeterminate:after:top-2.5 indeterminate:after:w-4 indeterminate:after:h-1
                indeterminate:after:bg-white"
        type="checkbox"
        id="checkbox"
        checked={props.isChecked}
        ref={(el) => {
          if (el) {
            el.indeterminate = props.isIndeterminate || false;
          }
        }}
      />
      <label className="text-neutral-600 text-base" htmlFor="checkbox">
        {getStateLabel(props.isChecked, props.isIndeterminate)}
      </label>
    </div>
  )
}


"use client";

import { Checkbox } from "./ui/checkbox";


export default function HelloWorld() {
  return (
    <div className='flex flex-col items-center '>
      <div className='flex flex-col  gap-6 w-[240px]'>
        <Checkbox isChecked={false} />
        <Checkbox isChecked />
        <Checkbox isIndeterminate />
      </div>
    </div>
  );
}


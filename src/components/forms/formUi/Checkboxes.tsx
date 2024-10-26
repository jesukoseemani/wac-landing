import React from "react";

interface props {
  checkArray: string[];
}

const Checkboxes = ({ checkArray }: props) => {
  return (
    <div className="mt-[-10px]">
      <legend className="block text-sm font-medium leading-6 text-[#E4E4E6]">
        Preferred Communication Mode
      </legend>
      <div className="grid grid-cols-3 my-4">
        {checkArray.map((item, i) => (
          <div key={i} className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-yellow-55 focus:ring-dark-3 focus:ring-offset-gray-900 cursor-pointer"
              />
            </div>
            <div className="text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-white">
                {item}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkboxes;

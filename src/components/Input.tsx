import React from "react";

interface Props {
  label: string;
  type?: "text" | "number" | "textarea";
  value?: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  readOnly?: boolean;
}

export function Input(props: Props) {
  const type = props?.type || "text";

  return (
    <label className={`flex flex-col mb-4`}>
      <span className={`mb-3 text-white`}>{props.label}</span>

      {type !== "textarea" ? (
        <input
          type={type}
          value={props?.value}
          onChange={props?.onChange}
          readOnly={props?.readOnly || false}
          className={`
            w-full h-11 rounded
            outline-none px-4
            bg-neutral-900 text-white
            text-sm
          `}
        />
      ) : (
        <textarea
          onChange={props.onChange}
          className={`
            w-full h-32 rounded
            outline-none p-4
            bg-neutral-900 text-white
            text-sm resize-none
          `}
          value={props.value}
        ></textarea>
      )}
    </label>
  );
}

interface Props {
  label: string;
  className?: string;
  onClick?: () => void;
}

export function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={`
        bg-gradient-to-r
        py-2 px-4 rounded
        text-white ${props.className}
      `}
    >
      {props.label}
    </button>
  );
}

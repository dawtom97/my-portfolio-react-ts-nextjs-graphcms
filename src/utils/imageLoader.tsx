type LoaderProps = {
  src: string;
  width: string | number;
};

export const imageLoader = ({ src, width }: LoaderProps) => {
  const relativeSrc = (src: string) => src.split('/').pop();

  return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(src)}`;
};

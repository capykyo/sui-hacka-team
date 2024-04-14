type Props = {
  by: string;
  children: React.ReactNode;
};

const Review: React.FC<Props> = ({ by, children }) => {
  return (
    <div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px-20">
      <div className="text-xl md:text-2xl leading-10 lg:leading-[3rem] tracking-tight">
        &ldquo;{children}&rdquo;
      </div>
      <div className="mt-6">&mdash; {by}</div>
    </div>
  );
};

export default Review;

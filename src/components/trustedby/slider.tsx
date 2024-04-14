import { SizeContext } from "@/utils/size-observer";
import { useCallback, useContext, useRef } from "react";
import useAnimationFrame from "@/utils/use-animation-frame";
type Props = {
  initialOffsetX: number;
  children: React.ReactNode;
  contentWidth: number;
  className: string;
};
const SliderContainer: React.FC<Props> = ({
  initialOffsetX,
  children,
  contentWidth,
  className,
}) => {
  const { innerWidth } = useContext(SizeContext);
  const refScrollX = useRef<number>(initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = innerWidth < contentWidth;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}
    >
      <div ref={refContent} className="inline-block">
        {children}
      </div>
      <div className={enabled ? "inline-block" : "hidden"}>{children}</div>
    </div>
  );
};

type ItemProps = {
  children: React.ReactNode;
  width: number;
};

export const SliderItem: React.FC<ItemProps> = ({ children, width }) => {
  return (
    <div
      className="inline-flex justify-center items-center mx-4"
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default SliderContainer;

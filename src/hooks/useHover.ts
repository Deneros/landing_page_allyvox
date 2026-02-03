import { useState } from 'react';

interface HoverState {
  backgroundColor: string;
}

interface UseHoverReturn {
  isHovered: HoverState;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function useHover(
  defaultBgColor: string,
  hoverBgColor: string
): UseHoverReturn {
  const [isHovered, setIsHovered] = useState<HoverState>({
    backgroundColor: defaultBgColor,
  });

  const onMouseEnter = () => {
    setIsHovered({ backgroundColor: hoverBgColor });
  };

  const onMouseLeave = () => {
    setIsHovered({ backgroundColor: defaultBgColor });
  };

  return {
    isHovered,
    onMouseEnter,
    onMouseLeave,
  };
}

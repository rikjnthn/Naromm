import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: OptionsType) {
  const [isIntersect, setIsIntersect] = useState<boolean>(false);

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (options?.alwaysCheck) {
        setIsIntersect(entry.isIntersecting);
        return;
      }

      if (entry.isIntersecting) setIsIntersect(true);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return [ref, isIntersect] as const;
}

interface OptionsType extends IntersectionObserverInit {
  alwaysCheck: boolean;
}

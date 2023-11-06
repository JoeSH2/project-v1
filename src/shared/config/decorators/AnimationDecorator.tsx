import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';

type GestureType = typeof import('@use-gesture/react');
type SpringType = typeof import('@react-spring/web');

interface AnimationProviderPayload {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoading?: boolean;
}

const AnimationContext = createContext<AnimationProviderPayload>({});

const getSimultaneousUpload = async () => Promise.all([import('@use-gesture/react'), import('@react-spring/web')]);
export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationProviderPayload>;
export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const GestureRef = useRef<GestureType>();
  const SpringRef = useRef<SpringType>();

  useEffect(() => {
    getSimultaneousUpload().then(([Gesture, Spring]) => {
      GestureRef.current = Gesture;
      SpringRef.current = Spring;
      setIsLoading(true);
    });
  }, []);

  const value = useMemo<AnimationProviderPayload>(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoading,
    }),
    [isLoading],
  );

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};

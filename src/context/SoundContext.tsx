import { createContext, useRef } from 'react';
import { clickSound as successSound, errorSound } from '../constants/sounds';

type SoundContextProps = {
    soundClickSuccess: () => void,
    soundClickFailure: () => void
};

interface ISoundContext {
  children: JSX.Element | JSX.Element[];
}
const defaultValue = {
    soundClickSuccess: () => '',
    soundClickFailure: () => ''
};

export const SoundContext = createContext<SoundContextProps>(defaultValue);

export const SoundContextProvider = ({ children }: ISoundContext) => {
  const clickSoundSuccess = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(successSound) : undefined,
  );
  const clickSoundFailure = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(errorSound) : undefined,
  );

  const soundClickSuccess = () => {
    clickSoundSuccess.current?.play();
  };
  const soundClickFailure = () => {
    clickSoundFailure.current?.play();
  };

  return <SoundContext.Provider value={{soundClickSuccess,soundClickFailure}}>{children}</SoundContext.Provider>;
};

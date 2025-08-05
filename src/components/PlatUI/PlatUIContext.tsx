import { createContext, useContext } from 'react';

import { type ColorSchemeType, type PlatformType } from '../../types';

export interface PlatUIContextInterface {
  platform: PlatformType
  colorScheme: ColorSchemeType
}

export const PlatUIContext = createContext<PlatUIContextInterface>({
  platform: 'ios',
  colorScheme: 'light'
});

export const useAppearance = (): PlatUIContextInterface => useContext(PlatUIContext);

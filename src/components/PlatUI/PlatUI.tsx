import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, useMemo } from 'react';

import { isIos } from '../../helpers';
import { useSystemColorScheme } from '../../hooks';
import styles from './PlatUI.module.scss';
import { PlatUIContext, type PlatUIContextInterface } from './PlatUIContext';

export interface PlatUIProps extends Partial<PlatUIContextInterface> {
  children: ComponentProps<'div'>['children']

  className?: ComponentProps<'div'>['className']
}

export const PlatUI = forwardRef<HTMLDivElement, PlatUIProps>((props, ref) => {
  const {
    children,
    className,
    colorScheme: colorSchemeProp,
    platform = isIos() ? 'ios' : 'android'
  } = props;

  const systemColorScheme = useSystemColorScheme({
    listenChanges: !colorSchemeProp
  });
  const colorScheme = colorSchemeProp ?? systemColorScheme;

  const config = useMemo<PlatUIContextInterface>(() => ({
    colorScheme,
    platform
  }), []);

  const rootClassName = clsx(
    styles.PlatUi,
    styles[`PlatUi_colorScheme_${colorScheme}`],
    styles[`PlatUi_platform_${platform}`],
    className
  );

  return (
    <PlatUIContext.Provider value={config}>
      <div ref={ref} className={rootClassName}>
        {children}
      </div>
    </PlatUIContext.Provider>
  );
});

PlatUI.displayName = 'PlatUI';

import { type Decorator } from '@storybook/react-vite';

import { PlatUI } from '../../src';

export const withConfigProvider: Decorator = (Story, context) => {
  if (!context.globals.withMaxUiWrapper) return <Story />;

  return (
    <PlatUI platform={context.globals.platform} colorScheme={context.globals.theme}>
      <Story />
    </PlatUI>
  );
};

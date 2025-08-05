import type { Meta, StoryObj } from '@storybook/react-vite';

import Icon24Placeholder from '../../../../../.storybook/assets/icons/icon-24-placeholder.svg';
import { Avatar, type AvatarOverlayProps } from '../../index';
import { AvatarOverlay } from './AvatarOverlay';

const meta = {
  title: 'Common/Avatar/Avatar.Overlay',
  component: AvatarOverlay
} satisfies Meta<AvatarOverlayProps>;

export default meta;
type Story = StoryObj<AvatarOverlayProps>;

export const Playground: Story = {
  render: ({ ...props }) => {
    return (
      <Avatar.Container
        overlay={(
          <Avatar.Overlay {...props}>
            <Icon24Placeholder />
          </Avatar.Overlay>
        )}
      >
          <Avatar.Image src="https://0.academia-photos.com/54292502/16855114/17093173/s200_john.dou.jpg" />
      </Avatar.Container>
    );
  }
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar, type AvatarImageProps } from '../../index';
import { AvatarImage } from './AvatarImage';

const meta = {
  title: 'Common/Avatar/Avatar.Image',
  component: AvatarImage,
  args: {
    src: 'https://0.academia-photos.com/54292502/16855114/17093173/s200_john.dou.jpg',
    fallback: 'VT'
  }
} satisfies Meta<AvatarImageProps>;

export default meta;
type Story = StoryObj<AvatarImageProps>;

export const Playground: Story = {
  render: ({ ...props }) => {
    return (
      <Avatar.Container>
        <Avatar.Image {...props} alt="John Doe" />
      </Avatar.Container>
    );
  }
};

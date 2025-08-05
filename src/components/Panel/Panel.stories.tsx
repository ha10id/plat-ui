import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from '../Avatar';
import { CellList } from '../CellList';
import { CellSimple } from '../CellSimple';
import { Typography } from '../Typography';
import { Panel, type PanelProps } from './Panel';

const meta = {
  title: 'Common/Panel',
  component: Panel,
  args: {
    mode: 'primary',
    centeredX: false,
    centeredY: false
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375, height: 375 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<PanelProps>;

export default meta;
type Story = StoryObj<PanelProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <Panel {...args}>
        <Typography.Body variant="medium">Panel body</Typography.Body>
      </Panel>
    );
  }
};

export const PrimaryExample: Story = {
  name: 'Primary example',
  args: {
    mode: 'primary',
    centeredX: false,
    centeredY: false
  },
  render: ({ ...args }) => {
    return (
      <Panel {...args}>
        <CellList>
          <CellSimple
            title="Dan Zahavi"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://0.academia-photos.com/138860/36834/147681623/s200_dan.zahavi.jpg" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
          <CellSimple
            title="John Doe"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://0.academia-photos.com/54292502/16855114/17093173/s200_john.dou.jpg" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
          <CellSimple
            title="Pirjo H Vuoskoski"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://0.academia-photos.com/552118/199119/29519343/s200_pirjo.vuoskoski.jpg" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
        </CellList>
      </Panel>
    );
  }
};

export const SecondaryExample: Story = {
  name: 'Secondary example',
  args: {
    mode: 'secondary',
    centeredX: false,
    centeredY: false
  },
  render: ({ ...args }) => {
    return (
      <Panel {...args}>
        <CellList mode="island">
          <CellSimple
            title="Dan Zahavi"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://0.academia-photos.com/138860/36834/147681623/s200_dan.zahavi.jpg" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
          <CellSimple
            title="John Doe"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://0.academia-photos.com/54292502/16855114/17093173/s200_john.dou.jpg" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
          <CellSimple
            title="Pirjo H Vuoskoski"
            before={(
              <Avatar.Container size={40}>
                <Avatar.Image src="https://0.academia-photos.com/552118/199119/29519343/s200_pirjo.vuoskoski.jpg" />
              </Avatar.Container>
            )}
            showChevron
            onClick={() => {}}
          />
        </CellList>
      </Panel>
    );
  }
};

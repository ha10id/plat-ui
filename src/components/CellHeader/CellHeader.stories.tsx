import type { Meta, StoryObj } from '@storybook/react-vite';

import Icon16Placeholder from '../../../.storybook/assets/icons/icon-16-placeholder.svg';
import { hideArgsControl } from '../../../.storybook/shared/args-manager';
import { Avatar } from '../Avatar';
import { CellList } from '../CellList';
import { CellSimple } from '../CellSimple';
import { Panel } from '../Panel';
import { Typography } from '../Typography';
import { CellHeader, type CellHeaderProps } from './CellHeader';

const meta = {
  title: 'Common/CellHeader',
  component: CellHeader,
  argTypes: {
    ...hideArgsControl(['innerClassNames']),

    after: {
      options: [0, 1, 2],
      mapping: [
        undefined,
        <Typography.Action key="text" variant="small">Some action</Typography.Action>,
        <Icon16Placeholder key="icon" />
      ],
      control: {
        type: 'select',
        labels: ['None', 'Text', 'Icon']
      }
    }
  },
  args: {
    children: 'Пользователь',
    titleStyle: 'caps',
    fullWidth: false
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375, height: 375 }}>
        <Panel mode="secondary" centeredY>
          <Story />
        </Panel>
      </div>
    )
  ]
} satisfies Meta<CellHeaderProps>;

export default meta;
type Story = StoryObj<CellHeaderProps>;

export const Playground: Story = {
  render: ({ ...args }) => {
    return (
      <CellList
        header={<CellHeader {...args} />}
        mode="island"
      >
        <CellSimple
          title="John Doe"
          before={(
            <Avatar.Container size={40}>
              <Avatar.Image src="https://0.academia-photos.com/54292502/16855114/17093173/s200_john.dou.jpg"/>
            </Avatar.Container>
          )}
          showChevron
          onClick={() => {}}
        />
      </CellList>
    );
  }
};

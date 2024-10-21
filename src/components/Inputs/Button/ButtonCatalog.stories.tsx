import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta = {
  title: 'Catalog/ButtonGroup',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const MultipleButtons: Story = {
  render: () => (
    <div className="w-full column">
      <h3 className="mt-4 mb-2">Variants</h3>
      <div className="flex w-full items-center">
        <div className="pr-4">
          <Button
            variant="primary"
            label="Primary Button"
            name={'name'}
            onClick={() => {}}
          />
        </div>
        <div className="pr-4">
          <Button
            variant="secondary"
            label="Secondary Button"
            name={'name'}
            onClick={() => {}}
          />
        </div>
        <div className="pr-4">
          <Button
            variant="outlined"
            label="Outlined Button"
            name={'name'}
            onClick={() => {}}
          />
        </div>
        <div className="pr-4">
          <Button
            variant="primary"
            disabled={true}
            label="Outlined Button"
            name={'name'}
            onClick={() => {}}
          />
        </div>
      </div>
      <h3 className="mt-4">Sizes</h3>
      <div className="flex w-full items-center">
        <div className="pr-4">
          <Button
            size="sm"
            variant="primary"
            label="Small Button"
            name={'name'}
            onClick={() => {}}
          />
        </div>
        <div className="pr-4">
          <Button
            variant="primary"
            label="Medium Button"
            name={'name'}
            onClick={() => {}}
          />
        </div>
        <div className="pr-4">
          <Button
            size="lg"
            variant="primary"
            label="Large Button"
            name={'name'}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  ),
};

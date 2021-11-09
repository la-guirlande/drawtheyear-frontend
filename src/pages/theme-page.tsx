import { FC } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/input';
import { Link } from '../components/link';
import { Select, Option } from '../components/select';
import { Switch } from '../components/switch';

/**
 * Theme page component.
 */
export const ThemePage: FC = () => (
  <div className="grid grid-cols-4 gap-10 p-10">
    <div className="space-y-5">
      <h2 className="text-center">Buttons</h2>
      <div className="flex flex-row justify-between">
        <Button variant="primary" componentSize="sm">Primary</Button>
        <Button variant="secondary" componentSize="sm">Secondary</Button>
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <Button variant="primary" outline componentSize="sm">Primary</Button>
        <Link to="/">Primary</Link>
        <Button variant="secondary" outline componentSize="sm">Secondary</Button>
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <Button variant="primary" outline>Primary</Button>
        <Button variant="secondary" outline>Secondary</Button>
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <Button variant="primary" componentSize="lg">Primary</Button>
        <Button variant="secondary" componentSize="lg">Secondary</Button>
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <Button variant="primary" outline componentSize="lg">Primary</Button>
        <Button variant="secondary" outline componentSize="lg">Secondary</Button>
      </div>
    </div>
    <div className="col-span-3 space-y-5">
      <h2 className="text-center">Forms</h2>
      <div className="flex flex-row justify-between">
        <Input type="text" componentSize="sm" placeholder="Enter text..." />
        <Switch id="slider1" variant="primary" componentSize="sm" label="Primary" checked />
        <Switch id="slider2" variant="secondary" componentSize="sm" label="Secondary" checked />
      </div>
      <div className="flex flex-row justify-between">
        <Input type="text" componentSize="md" placeholder="Enter text..." />
        <Switch id="slider3" variant="primary" componentSize="md" label="Primary" checked />
        <Switch id="slider4" variant="secondary" componentSize="md" label="Secondary" checked />
      </div>
      <div className="flex flex-row justify-between">
        <Input type="text" componentSize="lg" placeholder="Enter text..." />
        <Switch id="slider5" variant="primary" componentSize="lg" label="Primary" checked />
        <Switch id="slider6" variant="secondary" componentSize="lg" label="Secondary" checked />
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <Select componentSize="sm">
          <Option>Select option 1</Option>
          <Option>Select option 2</Option>
          <Option>Select option 3</Option>
          <Option>Select option 4</Option>
          <Option>Select option 5</Option>
          <Option>Select option 6</Option>
          <Option>Select option 7</Option>
          <Option>Select option 8</Option>
          <Option>Select option 9</Option>
          <Option>Select option 10</Option>
        </Select>
        <Switch id="slider7" variant="primary" componentSize="sm" outline label="Primary" checked />
        <Switch id="slider8" variant="secondary" componentSize="sm" outline label="Secondary" checked />
      </div>
      <div className="flex flex-row justify-between">
        <Select componentSize="md">
          <Option>Select option 1</Option>
          <Option>Select option 2</Option>
          <Option>Select option 3</Option>
          <Option>Select option 4</Option>
          <Option>Select option 5</Option>
          <Option>Select option 6</Option>
          <Option>Select option 7</Option>
          <Option>Select option 8</Option>
          <Option>Select option 9</Option>
          <Option>Select option 10</Option>
        </Select>
        <Switch id="slider9" variant="primary" componentSize="md" outline label="Primary" checked />
        <Switch id="slider10" variant="secondary" componentSize="md" outline label="Secondary" checked />
      </div>
      <div className="flex flex-row justify-between">
        <Select componentSize="lg">
          <Option>Select option 1</Option>
          <Option>Select option 2</Option>
          <Option>Select option 3</Option>
          <Option>Select option 4</Option>
          <Option>Select option 5</Option>
          <Option>Select option 6</Option>
          <Option>Select option 7</Option>
          <Option>Select option 8</Option>
          <Option>Select option 9</Option>
          <Option>Select option 10</Option>
        </Select>
        <Switch id="slider11" variant="primary" componentSize="lg" outline label="Primary" checked />
        <Switch id="slider12" variant="secondary" componentSize="lg" outline label="Secondary" checked />
      </div>
    </div>
  </div>
);

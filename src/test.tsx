import * as React from 'react';
import IconicalTabNav from './index';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

describe('<IconicalTabNav/>', () => {
  it('<IconicalTabNav tabs={tabs} />', () => {
    const tabOne = jest.fn();
    const tabTwo = jest.fn();
    const tabs = [
      { icon: 'home', render: tabOne },
      { icon: 'code', render: tabTwo }
    ];
    const iconicalTabNav = shallow(<IconicalTabNav tabs={tabs} />);
    expect(iconicalTabNav.find('#tab').length).toBe(2);
    expect(tabOne).not.toHaveBeenCalled();
    expect(tabTwo).not.toHaveBeenCalled();
    expect(iconicalTabNav.find('#icon-label').length).toBe(2);
    expect(iconicalTabNav.find('#text-label').length).toBe(0);
    expect(iconicalTabNav.find('#icon').length).toBe(2);
    expect(iconicalTabNav.find('#icon').first().text()).toBe(tabs[0].icon);
    expect(iconicalTabNav.find('#icon').last().text()).toBe(tabs[1].icon);
  })

  it('<IconicalTabNav tabs={tabs} selected={0}/>', () => {
    const tabOne = jest.fn();
    tabOne.mockReturnValue(<div>Tab One</div>);
    const tabTwo = jest.fn();
    const tabs = [
      { icon: 'home', render: tabOne },
      { icon: 'code', render: tabTwo }
    ];
    const iconicalTabNav = shallow(<IconicalTabNav tabs={tabs} selected={0} />);
    expect(iconicalTabNav.find('#tab').length).toBe(2);
    expect(tabOne).toHaveBeenCalled();
    expect(tabTwo).not.toHaveBeenCalled();
    expect(iconicalTabNav.find('#icon-label').length).toBe(2);
    expect(iconicalTabNav.find('#text-label').length).toBe(0);
    expect(iconicalTabNav.find('#icon').length).toBe(2);
    expect(iconicalTabNav.find('#icon').first().text()).toBe(tabs[0].icon);
    expect(iconicalTabNav.find('#icon').last().text()).toBe(tabs[1].icon);
    expect(iconicalTabNav.containsAllMatchingElements([
      <div>Tab One</div>
    ])).toBe(true);
  })

  it('<IconicalTabNav tabs={tabs} selected={0} showLabels/>', () => {
    const tabOne = jest.fn();
    const tabTwo = jest.fn();
    const tabs = [
      { label: 'Home', icon: 'home', render: tabOne },
      { label: 'Code', icon: 'code', render: tabTwo }
    ];
    const iconicalTabNav = shallow(<IconicalTabNav tabs={tabs} selected={0} showLabels />);
    expect(iconicalTabNav.find('#tab').length).toBe(2);
    expect(tabOne).toHaveBeenCalled();
    expect(tabTwo).not.toHaveBeenCalled();
    expect(iconicalTabNav.find('#icon-label').length).toBe(2);
    expect(iconicalTabNav.find('#text-label').length).toBe(2);
    expect(iconicalTabNav.find('#icon').length).toBe(2);
    expect(iconicalTabNav.find('#text-label').first().text()).toBe(tabs[0].label);
    expect(iconicalTabNav.find('#text-label').last().text()).toBe(tabs[1].label);
  })

  it('<IconicalTabNav tabs={tabs} selected={0} showLabels hideIcons/>', () => {
    const tabOne = jest.fn();
    const tabTwo = jest.fn();
    const tabs = [
      { label: 'Home', icon: 'home', render: tabOne },
      { label: 'Code', icon: 'code', render: tabTwo }
    ];
    const iconicalTabNav = shallow(<IconicalTabNav tabs={tabs} selected={0} showLabels hideIcons />);
    expect(iconicalTabNav.find('#tab').length).toBe(2);
    expect(tabOne).toHaveBeenCalled();
    expect(tabTwo).not.toHaveBeenCalled();
    expect(iconicalTabNav.find('#icon-label').length).toBe(0);
    expect(iconicalTabNav.find('#text-label').length).toBe(2);
    expect(iconicalTabNav.find('#icon').length).toBe(0);
    expect(iconicalTabNav.find('#text-label').first().text()).toBe(tabs[0].label);
    expect(iconicalTabNav.find('#text-label').last().text()).toBe(tabs[1].label);
  })

  it('<IconicalTabNav tabs={tabs} selected={0} containerStyles={...}/>', () => {
    const tabOne = jest.fn();
    const tabTwo = jest.fn();
    const tabs = [
      { label: 'Home', icon: 'home', render: tabOne },
      { label: 'Code', icon: 'code', render: tabTwo }
    ];
    const containerStyles = {
      backgroundColor: 'red',
      margin: '100px'
    }
    const iconicalTabNav = shallow(<IconicalTabNav tabs={tabs} selected={0} containerStyles={containerStyles} />);
    expect(iconicalTabNav.find('#itn-container').props().style).toBe(containerStyles);
  })

  it('<IconicalTabNav tabs={tabs} selected={0} labelStyles={...}/>', () => {
    const tabOne = jest.fn();
    const tabTwo = jest.fn();
    const tabs = [
      { label: 'Home', icon: 'home', render: tabOne },
      { label: 'Code', icon: 'code', render: tabTwo }
    ];
    const labelStyles = {
      backgroundColor: 'red',
      margin: '100px'
    }
    const iconicalTabNav = shallow(<IconicalTabNav tabs={tabs} selected={0} labelStyles={labelStyles} />);
    expect(iconicalTabNav.find('#text-label').props().style).toBe(labelStyles);
    expect(iconicalTabNav.find('#icon-label').props().style).toBe(labelStyles);
  })
});

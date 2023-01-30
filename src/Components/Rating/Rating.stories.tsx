import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Rating, RatingPropsType} from './Rating';

export default {
    title: 'Rating',
    component: Rating,
};

const callBack = action('Some text');

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>;

export const Rating1 = Template.bind({});

Rating1.args = {
    callback: callBack,
    selected: false,
    ratingValue: 1
};

export const Rating2 = Template.bind({});


Rating2.args = {
    callback: callBack,
    selected: true,
    ratingValue: 3
};
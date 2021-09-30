import { TextField } from './index'

const story = {
    title: 'Components/TextField',
    component: TextField
}

export default story

const Template = args => {
    return <TextField {...args} />
}

export const LightTextField = Template.bind({})

export const DarkTextField = Template.bind({})
DarkTextField.args = {
    theme: 'dark'
}

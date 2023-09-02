module.exports = (layer, componentName) => `
    import { Meta, StoryFn } from '@storybook/react'
    import { ${componentName} } from './${componentName}'
    
    export default {
        title: '${layer}/${componentName}',
        component: ${componentName},
        argTypes: { backgroundColor: { control: 'color' } },
    } as Meta<typeof ${componentName}>
    
    // eslint-disable-next-line react/jsx-props-no-spreading
    const Template: StoryFn<typeof ${componentName}> = (args) => <${componentName} {...args} />
    
    export const Normal = Template.bind({})
    Normal.args = {
    
    }
`

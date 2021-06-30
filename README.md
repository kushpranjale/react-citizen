# Get started

React Citizen (RC) is a reusable component library that provides purely presentational building blocks for Local Civics' Citizen UI.

## Install

RC components are written in React, and its stories are written in [Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df). It requires Storybook version 6 and up.

Add RC to your project.

`npm install --save @local-civics/react-citizen`

### **Usage**

Import components you want into your UI

`import { Button } from '@local-civics/react-citizen';`

and use them like so

```
  const example = () => (
    <div>
      <Button primary onClick={() => 0}>Do something</Button>
    </div>
  )
```

### **Development**

Clone the [RC GitHub project](https://github.com/local-civics/react-citizen) then start Storybook.

`npm install && npm run storybook`

## Used by

- [Citizen homepage](https://citizen.localcivics.io/)

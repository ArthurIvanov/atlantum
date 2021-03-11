
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";


addDecorator(withContexts(contexts));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },

};

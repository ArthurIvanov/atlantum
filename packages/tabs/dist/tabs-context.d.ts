/// <reference types="react" />
declare const TabsContext: import("react").Context<{
    active?: string | undefined;
    setActive?: ((id: string) => void) | undefined;
    setLast?: (() => void) | undefined;
    setFirst?: (() => void) | undefined;
    setNext?: (() => void) | undefined;
    setPrev?: (() => void) | undefined;
}>;
export default TabsContext;
//# sourceMappingURL=tabs-context.d.ts.map
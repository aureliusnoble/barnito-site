import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./SpacingScale-DKqD2-QB.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Specimens/SpacingScale`,component:n},a={play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`[data-space]`)];await r(t.length).toBeGreaterThan(3);for(let e of t)await r(e.getBoundingClientRect().width%8,e.dataset.space).toBe(0)}},o=[`Grid`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const steps = [...canvasElement.querySelectorAll<HTMLElement>("[data-space]")];
    await expect(steps.length).toBeGreaterThan(3);
    for (const s of steps) await expect(s.getBoundingClientRect().width % 8, s.dataset.space).toBe(0);
  }
}`,...a.parameters?.docs?.source},description:{story:`The grid's steps are multiples of 8 px, drawn at their real size.`,...a.parameters?.docs?.description}}}})))()}s();export{a as Grid,o as __namedExportsOrder,i as default};
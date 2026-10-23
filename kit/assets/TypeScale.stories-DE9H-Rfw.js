import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./TypeScale-lCQ5YwoA.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Specimens/TypeScale`,component:n},a={play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`[data-step]`)];await r(t.map(e=>e.dataset.step)).toEqual([`hero`,`score`,`title`,`body`,`label`,`input`]);for(let e of t)await r(getComputedStyle(e).fontVariantNumeric,e.dataset.step).toContain(`tabular-nums`);await r(getComputedStyle(t[0]).fontFamily).toContain(`Space Grotesk`)}},o=[`Scale`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const steps = [...canvasElement.querySelectorAll<HTMLElement>("[data-step]")];
    await expect(steps.map(s => s.dataset.step)).toEqual(["hero", "score", "title", "body", "label", "input"]);
    for (const s of steps) await expect(getComputedStyle(s).fontVariantNumeric, s.dataset.step).toContain("tabular-nums");
    await expect(getComputedStyle(steps[0]!).fontFamily).toContain("Space Grotesk");
  }
}`,...a.parameters?.docs?.source},description:{story:`Every step of the scale sets its numbers in tabular figures, and the big ones in Space Grotesk.`,...a.parameters?.docs?.description}}}})))()}s();export{a as Scale,o as __namedExportsOrder,i as default};
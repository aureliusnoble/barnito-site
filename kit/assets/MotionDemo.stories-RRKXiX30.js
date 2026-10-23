import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./MotionDemo-B3Nw_Mkv.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Specimens/MotionDemo`,component:n},a=globalThis.barnitoTest,o=e=>parseFloat(e)*(e.split(`,`)[0].trim().endsWith(`ms`)?1:1e3),s={play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Lock`})),await r(e.getByText(`Locked`)).toBeVisible();let i=t.querySelector(`[data-motion='tick']`);if(await r(o(getComputedStyle(i).transitionDuration)).toBe(250),a){await a.reduceMotion(!0);try{await r(o(getComputedStyle(i).transitionDuration)).toBeLessThanOrEqual(.01)}finally{await a.reduceMotion(!1)}}}},c=[`LockTick`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Lock"
    }));
    await expect(canvas.getByText("Locked")).toBeVisible();
    const tick = canvasElement.querySelector<HTMLElement>("[data-motion='tick']")!;
    await expect(ms(getComputedStyle(tick).transitionDuration)).toBe(250);
    if (!controls) return;
    await controls.reduceMotion(true);
    try {
      await expect(ms(getComputedStyle(tick).transitionDuration)).toBeLessThanOrEqual(0.01);
    } finally {
      await controls.reduceMotion(false);
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Locking ticks with the spring over the move duration; with reduced motion the tick still lands, without moving.`,...s.parameters?.docs?.description}}}})))()}l();export{s as LockTick,c as __namedExportsOrder,i as default};
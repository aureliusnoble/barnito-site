import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./IconGrid-CSj7kFyo.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Specimens/IconGrid`,component:n},a={play:async({canvas:e})=>{for(let t of[`Locked`,`Draft`,`Deadline`,`Tokens`,`Heating up`,`Goal`,`Right`,`Wrong`,`Up`,`Down`,`Spicy`])await r(e.getByText(t)).toBeVisible();await r(e.getAllByText(`To draw`)).toHaveLength(5)}},o=[`Icons`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    for (const meaning of ["Locked", "Draft", "Deadline", "Tokens", "Heating up", "Goal", "Right", "Wrong", "Up", "Down", "Spicy"]) {
      await expect(canvas.getByText(meaning)).toBeVisible();
    }
    await expect(canvas.getAllByText("To draw")).toHaveLength(5);
  }
}`,...a.parameters?.docs?.source},description:{story:`Each icon is named by its meaning; the football glyphs still to draw are gaps.`,...a.parameters?.docs?.description}}}})))()}s();export{a as Icons,o as __namedExportsOrder,i as default};
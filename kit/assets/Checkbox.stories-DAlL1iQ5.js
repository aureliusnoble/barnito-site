import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Checkbox-DZkU-C1Z.js";import{a,r as o}from"./checks-C0Y16pbK.js";function s(){let[e,t]=(0,c.useState)(!1);return(0,l.jsx)(i,{checked:e,onCheckedChange:t,label:`Don't ask me again`})}var c,l,u,d,f,p;function m(){return(m=e((()=>{c=t(),o(),r(),l=n(),{expect:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Checkbox`},f={render:()=>(0,l.jsx)(s,{}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`checkbox`,{name:`Don't ask me again`});await u(n).not.toBeChecked(),await t.click(n),await u(n).toBeChecked(),await u(n).toHaveFocus(),await u(getComputedStyle(n).outlineStyle).not.toBe(`none`),await t.keyboard(` `),await u(n).not.toBeChecked();let r=e.getByText(`Don't ask me again`);await t.click(r),await u(n).toBeChecked(),await a(r.closest(`label`))}},p=[`DontAskAgain`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <DontAsk />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const box = canvas.getByRole("checkbox", {
      name: "Don't ask me again"
    });
    await expect(box).not.toBeChecked();
    await userEvent.click(box);
    await expect(box).toBeChecked();
    await expect(box).toHaveFocus();
    await expect(getComputedStyle(box).outlineStyle).not.toBe("none");
    await userEvent.keyboard(" ");
    await expect(box).not.toBeChecked();
    const words = canvas.getByText("Don't ask me again");
    await userEvent.click(words);
    await expect(box).toBeChecked();
    await thumbSized(words.closest("label")!);
  }
}`,...f.parameters?.docs?.source},description:{story:`Unticked by default; the box, the space bar or its words tick it; a thumb tall, its focus ring drawn.`,...f.parameters?.docs?.description}}}})))()}m();export{f as DontAskAgain,p as __namedExportsOrder,d as default};
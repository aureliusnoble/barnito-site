import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,r as i,t as a}from"./Demos-Bug-P1VL.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Specimens/Demos`},l={render:()=>(0,o.jsx)(a,{}),play:async({canvas:e})=>{await s(e.getAllByText(`Do`)).toHaveLength(3)}},u={render:()=>(0,o.jsx)(r,{})},d={render:()=>(0,o.jsx)(i,{}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Lock all`});await s(t.getBoundingClientRect().height).toBeGreaterThanOrEqual(44)}},f=[`Colour`,`Layers`,`Target`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ColourRules />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByText("Do")).toHaveLength(3);
  }
}`,...l.parameters?.docs?.source},description:{story:`The pages' small demos, here so the accessibility check runs on them too.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <TokenFlow />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <TargetAndFocus />,
  play: async ({
    canvas
  }) => {
    const small = canvas.getByRole("button", {
      name: "Lock all"
    });
    await expect(small.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Colour,u as Layers,d as Target,f as __namedExportsOrder,c as default};
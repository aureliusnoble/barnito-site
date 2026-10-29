import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Stepper-I-qwrW7T.js";function a({start:e=0}){let[t,n]=(0,o.useState)(e);return(0,s.jsx)(i,{value:t,onValueChange:n,min:0,max:4,label:`Tokens`})}var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{o=t(),r(),s=n(),{expect:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Stepper`},u={render:()=>(0,s.jsx)(a,{}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Increase`}),r=e.getByRole(`button`,{name:`Decrease`});for(let e of[n,r])await c(e.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);let i=e.getByRole(`textbox`,{name:`Tokens`});for(let e=0;e<6;e++)await t.click(n);await c(i).toHaveValue(`4`);for(let e=0;e<6;e++)await t.click(r);await c(i).toHaveValue(`0`),await t.click(i),await c(i).toHaveFocus(),await c(getComputedStyle(i).outlineStyle).not.toBe(`none`)}},d={render:()=>(0,s.jsx)(a,{start:4}),play:async({canvas:e})=>{await c(e.getByRole(`button`,{name:`Increase`})).toBeDisabled(),await c(e.getByRole(`button`,{name:`Decrease`})).toBeEnabled()}},f={render:()=>(0,s.jsx)(a,{}),play:async({canvas:e})=>{await c(e.getByRole(`button`,{name:`Decrease`})).toBeDisabled()}},p=[`TokenStack`,`AtMax`,`AtMin`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Tokens />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const more = canvas.getByRole("button", {
      name: "Increase"
    });
    const fewer = canvas.getByRole("button", {
      name: "Decrease"
    });
    for (const button of [more, fewer]) await expect(button.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    const input = canvas.getByRole("textbox", {
      name: "Tokens"
    });
    for (let i = 0; i < 6; i++) await userEvent.click(more);
    await expect(input).toHaveValue("4");
    for (let i = 0; i < 6; i++) await userEvent.click(fewer);
    await expect(input).toHaveValue("0");
    // The keyboard's focus is always visible: the focused field draws its ring.
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await expect(getComputedStyle(input).outlineStyle).not.toBe("none");
  }
}`,...u.parameters?.docs?.source},description:{story:`A token stack: it never leaves 0–4, both buttons are a thumb tall, and the focused field shows its ring.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Tokens start={4} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("button", {
      name: "Increase"
    })).toBeDisabled();
    await expect(canvas.getByRole("button", {
      name: "Decrease"
    })).toBeEnabled();
  }
}`,...d.parameters?.docs?.source},description:{story:`At the top of its range, more is not on offer.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Tokens />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("button", {
      name: "Decrease"
    })).toBeDisabled();
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as AtMax,f as AtMin,u as TokenStack,p as __namedExportsOrder,l as default};
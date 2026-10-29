import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{n,t as r}from"./Button-D2Gd0djy.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{a,i as o,r as s}from"./checks-C0Y16pbK.js";function c(){let[e,t]=(0,l.useState)(!1);return(0,u.jsx)(r,{busy:e,onClick:()=>t(!0),children:`Lock`})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l=t(),s(),n(),u=i(),{expect:d,fn:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Button`,component:r,args:{children:`Lock`}},h=async({canvas:e,canvasElement:t,args:n})=>{let r=e.getByRole(`button`,{name:String(n.children)});await a(r),await o(t)},g={args:{variant:`primary`},play:h},_={args:{variant:`quiet`,children:`Undo`},play:h},v={args:{variant:`outline`,children:`Draft`},play:h},y={args:{size:`s`,children:`Lock all`},play:h},b={args:{wide:!0},play:async e=>{await h(e);let t=e.canvas.getByRole(`button`,{name:`Lock`});await d(t.getBoundingClientRect().width).toBeGreaterThan(e.canvasElement.clientWidth*.8)}},x={args:{busy:!0,onClick:f()},play:async e=>{await h(e);let t=e.canvas.getByRole(`button`,{name:`Lock`});await d(t).toHaveAttribute(`aria-busy`,`true`),await d(t).toHaveAttribute(`aria-disabled`,`true`),await e.userEvent.click(t),await d(e.args.onClick).not.toHaveBeenCalled(),await d(t).toHaveFocus()}},S={render:()=>(0,u.jsx)(c,{}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Lock`});await t.click(n),await d(n).toHaveAttribute(`aria-busy`,`true`),await p(()=>d(n).toHaveFocus())}},C={args:{children:`Lock all 9 picks for today`,wide:!0},play:h},w=[`Primary`,`Quiet`,`Outline`,`Small`,`Wide`,`Busy`,`LockingKeepsFocus`,`LongLabel`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  },
  play: named
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "quiet",
    children: "Undo"
  },
  play: named
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Draft"
  },
  play: named
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s",
    children: "Lock all"
  },
  play: named
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    wide: true
  },
  play: async context => {
    await named(context);
    const button = context.canvas.getByRole("button", {
      name: "Lock"
    });
    await expect(button.getBoundingClientRect().width).toBeGreaterThan(context.canvasElement.clientWidth * 0.8);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    busy: true,
    onClick: fn()
  },
  play: async context => {
    await named(context);
    const button = context.canvas.getByRole("button", {
      name: "Lock"
    });
    await expect(button).toHaveAttribute("aria-busy", "true");
    await expect(button).toHaveAttribute("aria-disabled", "true");
    await context.userEvent.click(button);
    await expect(context.args.onClick).not.toHaveBeenCalled();
    await expect(button).toHaveFocus();
  }
}`,...x.parameters?.docs?.source},description:{story:`While a lock is sending: busy, not pressable, and still named "Lock". It keeps focus, so a screen reader or a
keyboard doesn't lose its place on every lock (final review).`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Locking />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole("button", {
      name: "Lock"
    });
    await userEvent.click(button);
    await expect(button).toHaveAttribute("aria-busy", "true");
    await waitFor(() => expect(button).toHaveFocus());
  }
}`,...S.parameters?.docs?.source},description:{story:`Pressing Lock makes it busy without moving focus off it.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Lock all 9 picks for today",
    wide: true
  },
  play: named
}`,...C.parameters?.docs?.source}}}})))()}T();export{x as Busy,S as LockingKeepsFocus,C as LongLabel,v as Outline,g as Primary,_ as Quiet,y as Small,b as Wide,w as __namedExportsOrder,m as default};
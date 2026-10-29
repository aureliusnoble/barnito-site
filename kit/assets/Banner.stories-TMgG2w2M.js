import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./coins-B-HVU2QJ.js";import{n as r,t as i}from"./list-x-CJ-7P_Yy.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Banner-Bd7iZlrw.js";import{a as c,i as l,r as u}from"./checks-C0Y16pbK.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),r(),u(),o(),d=a(),{expect:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Banner`},m={render:()=>(0,d.jsxs)(`div`,{className:`grid gap-3`,children:[(0,d.jsx)(s,{tone:`warn`,icon:i,title:`4 picks missing`,detail:`Deadline 12:00, 3h 50m left`,action:{label:`Pick now`,onClick:()=>{}}}),(0,d.jsx)(`span`,{"data-warn":!0,className:`bg-warn-solid`})]}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`status`);await f(n).toHaveTextContent(`4 picks missing`),await f(n.querySelector(`svg`)).not.toBeNull();let r=getComputedStyle(t.querySelector(`[data-warn]`)).backgroundColor;await f(getComputedStyle(n).backgroundColor).toBe(r),await c(e.getByRole(`button`,{name:`Pick now`})),await l(t)}},h={render:()=>(0,d.jsxs)(`div`,{className:`grid gap-3`,children:[(0,d.jsx)(s,{tone:`urgent`,icon:i,title:`4 picks missing`,detail:`Locks at 12:00, 45m left`,action:{label:`Pick now`,onClick:()=>{}}}),(0,d.jsx)(`span`,{"data-urgent":!0,className:`bg-urgent`})]}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`status`),r=getComputedStyle(t.querySelector(`[data-urgent]`)).backgroundColor;await f(getComputedStyle(n).backgroundColor).toBe(r),await l(t)}},g={render:()=>(0,d.jsx)(s,{tone:`warn`,icon:n,title:`2 of 4 tokens unspent`,detail:`Today is the round's last match day`}),play:async({canvas:e,canvasElement:t})=>{await f(e.getByRole(`status`)).toHaveTextContent(`2 of 4 tokens unspent`),await l(t)}},_={render:()=>(0,d.jsx)(s,{tone:`urgent`,icon:i,title:`12 picks missing, 59m left`,detail:`Bosnia and Herzegovina v Northern Ireland, Republic of Ireland v Germany and 3 scorers`,action:{label:`Pick now`,onClick:()=>{}}}),play:async({canvas:e,canvasElement:t})=>{await f(e.getByRole(`status`)).toHaveTextContent(`Bosnia and Herzegovina`),await l(t)}},v=[`PicksMissing`,`LastHour`,`TokensBehind`,`LongContent`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-3">
      <Banner tone="warn" icon={ListX} title="4 picks missing" detail="Deadline 12:00, 3h 50m left" action={{
      label: "Pick now",
      onClick: () => {}
    }} />
      <span data-warn className="bg-warn-solid" />
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const banner = canvas.getByRole("status");
    await expect(banner).toHaveTextContent("4 picks missing");
    await expect(banner.querySelector("svg")).not.toBeNull();
    const warn = getComputedStyle(canvasElement.querySelector("[data-warn]")!).backgroundColor;
    await expect(getComputedStyle(banner).backgroundColor).toBe(warn);
    await thumbSized(canvas.getByRole("button", {
      name: "Pick now"
    }));
    await noSidewaysScroll(canvasElement);
  }
}`,...m.parameters?.docs?.source},description:{story:`Picks missing with time to spare: amber, the count first, and the way to fix it.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-3">
      <Banner tone="urgent" icon={ListX} title="4 picks missing" detail="Locks at 12:00, 45m left" action={{
      label: "Pick now",
      onClick: () => {}
    }} />
      <span data-urgent className="bg-urgent" />
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const banner = canvas.getByRole("status");
    const urgent = getComputedStyle(canvasElement.querySelector("[data-urgent]")!).backgroundColor;
    await expect(getComputedStyle(banner).backgroundColor).toBe(urgent);
    await noSidewaysScroll(canvasElement);
  }
}`,...h.parameters?.docs?.source},description:{story:`The last hour: red, and impossible to miss (D18).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Banner tone="warn" icon={Coins} title="2 of 4 tokens unspent" detail="Today is the round's last match day" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("status")).toHaveTextContent("2 of 4 tokens unspent");
    await noSidewaysScroll(canvasElement);
  }
}`,...g.parameters?.docs?.source},description:{story:`Behind on tokens: the same banner, for the other thing that can be left unspent.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Banner tone="urgent" icon={ListX} title="12 picks missing, 59m left" detail="Bosnia and Herzegovina v Northern Ireland, Republic of Ireland v Germany and 3 scorers" action={{
    label: "Pick now",
    onClick: () => {}
  }} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("status")).toHaveTextContent("Bosnia and Herzegovina");
    await noSidewaysScroll(canvasElement);
  }
}`,..._.parameters?.docs?.source},description:{story:`The longest a match day brings: the count first, the names wrapping inside the banner.`,..._.parameters?.docs?.description}}}})))()}y();export{h as LastHour,_ as LongContent,m as PicksMissing,g as TokensBehind,v as __namedExportsOrder,p as default};
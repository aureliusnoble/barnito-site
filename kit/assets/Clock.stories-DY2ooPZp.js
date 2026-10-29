import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./Clock-BSFLvk8s.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{Nt as i,lt as a,t as o}from"./src-Ca_r4w3v.js";import{r as s,t as c}from"./checks-C0Y16pbK.js";import{i as l,n as u,t as d}from"./moments-Bzx1n_TW.js";var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{o(),s(),d(),n(),f=r(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Domain/Clock`,parameters:{layout:`padded`}},h=e=>i(e,a(e)?.action!==void 0),g=e=>({...e,picks:[...e.picks.map(t=>t.user===e.you&&t.fixture===`C-3`&&t.status===`draft`?{...t,status:`locked`}:t),{id:`c4`,user:e.you,kind:`result`,fixture:`C-4`,round:`MD2`,outcome:`draw`,status:`locked`}]}),_={loaders:[l(`morning`)],render:(e,{loaded:n})=>(0,f.jsx)(t,{clock:h(n.s)}),play:async({canvas:e})=>{let t=e.getByRole(`timer`);await p(t).toHaveTextContent(`3h 50m`),await p(t).toHaveTextContent(`to 12:00`),await p(t.dataset.tone).toBe(`calm`)}},v={loaders:[l(`morning`)],render:(e,{loaded:n})=>(0,f.jsx)(t,{clock:h(u(n.s,`2028-06-15T09:30:00Z`))}),play:async({canvas:e})=>{let t=e.getByRole(`timer`);await p(t).toHaveTextContent(`1h 30m`),await p(t.dataset.tone).toBe(`orange`)}},y={loaders:[l(`morning`)],render:(e,{loaded:n})=>(0,f.jsx)(t,{clock:h(u(n.s,`2028-06-15T10:30:00Z`))}),play:async({canvas:e})=>{let t=e.getByRole(`timer`);await p(t).toHaveTextContent(`30m`),await p(t.dataset.tone).toBe(`red`),await p(getComputedStyle(t).animationName).not.toBe(`none`);let n=c();if(n){await n.reduceMotion(!0);try{await p(getComputedStyle(t).animationName).toBe(`none`)}finally{await n.reduceMotion(!1)}}}},b={loaders:[l(`morning`)],render:(e,{loaded:n})=>(0,f.jsx)(t,{clock:h(g(u(n.s,`2028-06-15T10:30:00Z`)))}),play:async({canvas:e})=>{await p(e.getByRole(`timer`).dataset.tone).toBe(`calm`)}},x={render:()=>(0,f.jsx)(t,{clock:{kind:`day`,label:`Next lock Sat 12:00`}}),play:async({canvas:e,canvasElement:t})=>{await p(e.queryByRole(`timer`)).toBeNull(),await p(t).toHaveTextContent(`Next lock Sat 12:00`),await p(t.querySelector(`svg`)).not.toBeNull()}},S=[`Countdown`,`Orange`,`Red`,`AllLocked`,`RestDay`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Clock clock={clock((loaded as Loaded).s)} />,
  play: async ({
    canvas
  }) => {
    const timer = canvas.getByRole("timer");
    await expect(timer).toHaveTextContent("3h 50m");
    await expect(timer).toHaveTextContent("to 12:00");
    await expect(timer.dataset.tone).toBe("calm");
  }
}`,..._.parameters?.docs?.source},description:{story:`More than 3 hours to the lock: calm.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Clock clock={clock(later((loaded as Loaded).s, "2028-06-15T09:30:00Z"))} />,
  play: async ({
    canvas
  }) => {
    const timer = canvas.getByRole("timer");
    await expect(timer).toHaveTextContent("1h 30m");
    await expect(timer.dataset.tone).toBe("orange");
  }
}`,...v.parameters?.docs?.source},description:{story:`Within 3 hours, with a match still to pick: orange.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Clock clock={clock(later((loaded as Loaded).s, "2028-06-15T10:30:00Z"))} />,
  play: async ({
    canvas
  }) => {
    const timer = canvas.getByRole("timer");
    await expect(timer).toHaveTextContent("30m");
    await expect(timer.dataset.tone).toBe("red");
    await expect(getComputedStyle(timer).animationName).not.toBe("none");
    const run = controls();
    if (!run) return;
    await run.reduceMotion(true);
    try {
      await expect(getComputedStyle(timer).animationName).toBe("none");
    } finally {
      await run.reduceMotion(false);
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`Within the hour: red, flashing, except with reduced motion.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Clock clock={clock(allLocked(later((loaded as Loaded).s, "2028-06-15T10:30:00Z")))} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("timer").dataset.tone).toBe("calm");
  }
}`,...b.parameters?.docs?.source},description:{story:`Within the hour with everything due locked: calm again.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Clock clock={{
    kind: "day",
    label: "Next lock Sat 12:00"
  }} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.queryByRole("timer")).toBeNull();
    await expect(canvasElement).toHaveTextContent("Next lock Sat 12:00");
    await expect(canvasElement.querySelector("svg")).not.toBeNull();
  }
}`,...x.parameters?.docs?.source},description:{story:`A rest day: no countdown, the next lock's day and time (the owner, 22 Oct).`,...x.parameters?.docs?.description}}}})))()}C();export{b as AllLocked,_ as Countdown,v as Orange,y as Red,x as RestDay,S as __namedExportsOrder,m as default};
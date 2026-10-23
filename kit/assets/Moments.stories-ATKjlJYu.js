import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{j as n,k as r,t as i}from"./src-Ckdztxlk.js";import{r as a,t as o}from"./moments-Cjxlj8DI.js";function s({moments:e}){return(0,c.jsxs)(`table`,{className:`w-full text-left text-label`,children:[(0,c.jsx)(`thead`,{className:`text-fg-muted`,children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{className:`py-2 font-semibold`,children:`Moment`}),(0,c.jsx)(`th`,{className:`py-2 font-semibold`,children:`Game time`}),(0,c.jsx)(`th`,{className:`py-2 text-right font-semibold`,children:`Members`}),(0,c.jsx)(`th`,{className:`py-2 text-right font-semibold`,children:`Matches`})]})}),(0,c.jsx)(`tbody`,{className:`divide-y divide-line`,children:e.map(({label:e,s:t})=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{className:`py-2 font-semibold`,children:e}),(0,c.jsx)(`td`,{className:`py-2 font-num`,children:r(t,t.now)}),(0,c.jsx)(`td`,{className:`py-2 text-right font-num`,children:t.members.length}),(0,c.jsx)(`td`,{className:`py-2 text-right font-num`,children:t.fixtures.length})]},e))})]})}var c,l,u,d,f,p;function m(){return(m=e((()=>{i(),o(),c=t(),{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Domain/Moments`},f={loaders:[async()=>({moments:await Promise.all(n.map(async e=>({label:e.label,s:await a(e.id)})))})],render:(e,{loaded:t})=>(0,c.jsx)(s,{moments:t.moments}),play:async({canvasElement:e})=>{let t=u(e).getAllByRole(`row`).slice(1);await l(t).toHaveLength(6),await l(t[0]).toHaveTextContent(`The day before matchday 1`),await l(t[0]).toHaveTextContent(`Thu 8 Jun, 18:00`)}},p=[`Recorded`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  loaders: [async () => ({
    moments: await Promise.all(MOMENTS.map(async m => ({
      label: m.label,
      s: await moment(m.id)
    })))
  })],
  render: (_, {
    loaded
  }) => <MomentsTable moments={loaded.moments as {
    label: string;
    s: Snapshot;
  }[]} />,
  play: async ({
    canvasElement
  }) => {
    const rows = within(canvasElement).getAllByRole("row").slice(1);
    await expect(rows).toHaveLength(6);
    await expect(rows[0]).toHaveTextContent("The day before matchday 1");
    await expect(rows[0]).toHaveTextContent("Thu 8 Jun, 18:00");
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Recorded,p as __namedExportsOrder,d as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-C0Y16pbK.js";import{a as i,i as a,n as o,r as s,t as c}from"./app--B0L3gM3.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),s(),l=t(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`App/History`,parameters:{layout:`fullscreen`}},h=a(`2028-06-15T21:00:00Z`),g=async()=>(await p(document.body).findAllByRole(`dialog`)).find(e=>!e.hasAttribute(`data-toast`)),_={loaders:[o(`night`,h,{name:`table`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Table`}),await u(e.getByRole(`link`,{name:`History`})).toHaveAttribute(`href`,`#/table/history`),await u(e.queryByRole(`img`,{name:/The points race/})).toBeNull(),await n(t)}},v={loaders:[o(`night`,h,{name:`history`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`History`}),await u(e.getByRole(`link`,{name:`Back to Table`})).toHaveAttribute(`href`,`#/table`),await u(await e.findByRole(`img`,{name:/^The points race/},{timeout:1e4})).toBeVisible();let r=p(e.getByRole(`list`,{name:`Named on the chart`})).getAllByRole(`listitem`).length;await d.click(e.getByRole(`button`,{name:`Choose who`}));let i=await g();await u(p(i).getAllByRole(`switch`).filter(e=>e.getAttribute(`aria-checked`)===`true`)).toHaveLength(r),await d.click(p(i).getByRole(`switch`,{name:/^Raj/})),await d.click(p(i).getByRole(`button`,{name:`Done`})),await f(()=>u(e.getByRole(`img`,{name:/^The points race: you.*Raj/})).toBeVisible()),await u(e.getByRole(`list`,{name:`Named on the chart`})).toHaveTextContent(`Raj`);let a=e.getByRole(`region`,{name:`Day by day`});await u(p(a).getAllByRole(`link`)[0]).toHaveAttribute(`href`,`#/table/history/2028-06-15`),await n(t)}},y={loaders:[o(`night`,h,{name:`day`,date:`2028-06-14`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Wed 14 Jun`}),await u(e.getByRole(`link`,{name:`Back to History`})).toHaveAttribute(`href`,`#/table/history`),await u(e.getByRole(`table`,{name:`Wed 14 Jun`})).toBeVisible(),await u(e.getByRole(`link`,{name:`Previous day`})).toHaveAttribute(`href`,`#/table/history/2028-06-13`),await u(e.getByRole(`link`,{name:`Next day`})).toHaveAttribute(`href`,`#/table/history/2028-06-15`),await n(t)}},b={loaders:[o(`morning`,i,{name:`history`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e})=>{let t=await e.findByRole(`region`,{name:`Day by day`});await u(p(t).getAllByRole(`link`)[0]).toHaveAttribute(`href`,`#/table/history/2028-06-13`)}},x=[`Table`,`History`,`Day`,`Sealed`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", night, {
    name: "table"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Table"
    });
    await expect(canvas.getByRole("link", {
      name: "History"
    })).toHaveAttribute("href", "#/table/history");
    await expect(canvas.queryByRole("img", {
      name: /The points race/
    })).toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,..._.parameters?.docs?.source},description:{story:`The Table (the owner's 28 Oct mockup): no chart; a row to History, the word alone (the 26 Oct rule).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", night, {
    name: "history"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "History"
    });
    await expect(canvas.getByRole("link", {
      name: "Back to Table"
    })).toHaveAttribute("href", "#/table");
    await expect(await canvas.findByRole("img", {
      name: /^The points race/
    }, {
      timeout: 10_000
    })).toBeVisible();
    const chips = within(canvas.getByRole("list", {
      name: "Named on the chart"
    })).getAllByRole("listitem").length;
    await userEvent.click(canvas.getByRole("button", {
      name: "Choose who"
    }));
    const choose = await sheet();
    // Those the chart names are on before you choose (the mockup review, finding 3).
    await expect(within(choose).getAllByRole("switch").filter(x => x.getAttribute("aria-checked") === "true")).toHaveLength(chips);
    await userEvent.click(within(choose).getByRole("switch", {
      name: /^Raj/
    }));
    await userEvent.click(within(choose).getByRole("button", {
      name: "Done"
    }));
    await waitFor(() => expect(canvas.getByRole("img", {
      name: /^The points race: you.*Raj/
    })).toBeVisible());
    await expect(canvas.getByRole("list", {
      name: "Named on the chart"
    })).toHaveTextContent("Raj");
    const days = canvas.getByRole("region", {
      name: "Day by day"
    });
    await expect(within(days).getAllByRole("link")[0]).toHaveAttribute("href", "#/table/history/2028-06-15");
    await noSidewaysScroll(canvasElement);
  }
}`,...v.parameters?.docs?.source},description:{story:`History: the points over time naming who you choose (you always), then the days, newest first.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [at("night", night, {
    name: "day",
    date: "2028-06-14"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Wed 14 Jun"
    });
    await expect(canvas.getByRole("link", {
      name: "Back to History"
    })).toHaveAttribute("href", "#/table/history");
    await expect(canvas.getByRole("table", {
      name: "Wed 14 Jun"
    })).toBeVisible();
    await expect(canvas.getByRole("link", {
      name: "Previous day"
    })).toHaveAttribute("href", "#/table/history/2028-06-13");
    await expect(canvas.getByRole("link", {
      name: "Next day"
    })).toHaveAttribute("href", "#/table/history/2028-06-15");
    await noSidewaysScroll(canvasElement);
  }
}`,...y.parameters?.docs?.source},description:{story:`A day's picks: everyone by match; the days either side; Back to History.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [at("morning", openedYesterday, {
    name: "history"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas
  }) => {
    const days = await canvas.findByRole("region", {
      name: "Day by day"
    });
    await expect(within(days).getAllByRole("link")[0]).toHaveAttribute("href", "#/table/history/2028-06-13");
  }
}`,...b.parameters?.docs?.source},description:{story:`A sealed morning: yesterday's hidden matches are in no day.`,...b.parameters?.docs?.description}}}})))()}S();export{y as Day,v as History,b as Sealed,_ as Table,x as __namedExportsOrder,m as default};
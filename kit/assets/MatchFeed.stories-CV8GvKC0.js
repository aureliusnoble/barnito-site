import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./MatchStats-PBD906A1.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{E as c,t as l}from"./src-Ca_r4w3v.js";import{i as u,r as d}from"./checks-C0Y16pbK.js";import{i as f,t as p}from"./moments-Bzx1n_TW.js";var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{l(),d(),p(),n(),r(),i(),m=s(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Domain/MatchFeed`,parameters:{layout:`padded`}},v=(e,t)=>c(e.s,t),y=({children:e})=>(0,m.jsx)(`div`,{className:`max-w-[390px] rounded-card bg-surface p-4`,children:e}),b={loaders:[f(`night`)],render:(e,{loaded:n})=>(0,m.jsx)(y,{children:(0,m.jsx)(t,{events:v(n,`A-1`).timeline})}),play:async({canvas:e,canvasElement:t})=>{let n=g(e.getByRole(`list`,{name:`Timeline`})).getAllByRole(`listitem`);await h(n[0]).toHaveTextContent(`89′`),await h(n[0]).toHaveTextContent(`Goal: Lamine Yamal`);let r=n.find(e=>e.textContent?.includes(`16′`));await h(g(r).getByRole(`img`,{name:`Picked by Ana, Jonny, Mel, Raj, Sam`})).toBeVisible(),await h(n.find(e=>e.dataset.kind===`sub`)).toHaveTextContent(`Gavi for Dani Olmo`);let i=n.find(e=>e.className.includes(`flex-row-reverse`));await h(i).toBeDefined(),await u(t)}},x={loaders:[f(`night`)],render:(e,{loaded:t})=>{let n=v(t,`F-2`);return(0,m.jsx)(y,{children:(0,m.jsx)(a,{lineups:n.lineups,teams:[{...n.card.home,name:`Bosnia and Herzegovina`},n.card.away]})})},play:async({canvas:e,canvasElement:t})=>{await h(g(e.getByRole(`list`,{name:`Bosnia and Herzegovina's starting eleven`})).getAllByRole(`listitem`)).toHaveLength(11),await h(g(e.getByRole(`list`,{name:`Bosnia and Herzegovina's bench`})).getAllByRole(`listitem`)).toHaveLength(9),await u(t)}},S={loaders:[f(`night`)],render:(e,{loaded:t})=>(0,m.jsx)(y,{children:(0,m.jsx)(o,{stats:v(t,`A-1`).stats})}),play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`dt`)].find(e=>e.textContent===`Possession`).parentElement;await h(t).toHaveTextContent(`66%Possession34%`),await u(e)}},C=[`TimelineWithBackers`,`LineupsWithBench`,`Stats`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <Card>
      <Timeline events={page(loaded, "A-1").timeline!} />
    </Card>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const rows = within(canvas.getByRole("list", {
      name: "Timeline"
    })).getAllByRole("listitem");
    await expect(rows[0]).toHaveTextContent("89′");
    await expect(rows[0]).toHaveTextContent("Goal: Lamine Yamal");
    const sixteenth = rows.find(r => r.textContent?.includes("16′"))!;
    await expect(within(sixteenth).getByRole("img", {
      name: "Picked by Ana, Jonny, Mel, Raj, Sam"
    })).toBeVisible();
    await expect(rows.find(r => r.dataset.kind === "sub")).toHaveTextContent("Gavi for Dani Olmo");
    // An away event sits on the right.
    const away = rows.find(r => r.className.includes("flex-row-reverse"));
    await expect(away).toBeDefined();
    await noSidewaysScroll(canvasElement);
  }
}`,...b.parameters?.docs?.source},description:{story:`Spain v Slovenia's timeline, newest first: each goal with the faces of who picked its scorer (SF1), a card, a sub.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => {
    const p = page(loaded, "F-2");
    return <Card>
        <Lineups lineups={p.lineups!} teams={[{
        ...p.card.home,
        name: "Bosnia and Herzegovina"
      }, p.card.away]} />
      </Card>;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(within(canvas.getByRole("list", {
      name: "Bosnia and Herzegovina's starting eleven"
    })).getAllByRole("listitem")).toHaveLength(11);
    await expect(within(canvas.getByRole("list", {
      name: "Bosnia and Herzegovina's bench"
    })).getAllByRole("listitem")).toHaveLength(9);
    await noSidewaysScroll(canvasElement);
  }
}`,...x.parameters?.docs?.source},description:{story:`Both line-ups, with the bench; the longest team name.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <Card>
      <MatchStats stats={page(loaded, "A-1").stats!} />
    </Card>,
  play: async ({
    canvasElement
  }) => {
    const possession = [...canvasElement.querySelectorAll("dt")].find(d => d.textContent === "Possession")!.parentElement!;
    await expect(possession).toHaveTextContent("66%Possession34%");
    await noSidewaysScroll(canvasElement);
  }
}`,...S.parameters?.docs?.source},description:{story:`The stats as two numbers and a label, with a split bar.`,...S.parameters?.docs?.description}}}})))()}w();export{x as LineupsWithBench,S as Stats,b as TimelineWithBackers,C as __namedExportsOrder,_ as default};
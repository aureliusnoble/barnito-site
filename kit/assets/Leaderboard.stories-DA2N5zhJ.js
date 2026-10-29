import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Leaderboard-CpeXKLqK.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{U as i,ct as a,t as o,wt as s}from"./src-Ca_r4w3v.js";import{a as c,i as l,r as u}from"./checks-C0Y16pbK.js";import{i as d,t as f}from"./moments-Bzx1n_TW.js";import{a as p,n as m}from"./sealed-CI1Ph_WX.js";var h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{o(),u(),f(),m(),t(),h=r(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Domain/Leaderboard`,parameters:{layout:`padded`}},y=e=>_(e).getAllByRole(`listitem`),b=(e,t)=>y(e).find(e=>e.textContent?.includes(t)),x={loaders:[async()=>{let e=structuredClone((await d(`night`)()).s);for(let t of e.standings)(t.user===`tom`||t.user===e.you)&&(t.change=t.user===e.you?1:-1);return{s:e}}],render:(e,{loaded:t})=>(0,h.jsx)(n,{rows:s(t.s),onRow:()=>{}}),play:async({canvasElement:e})=>{await g(y(e)).toHaveLength(9);let t=b(e,`Alex`);await g(t).toHaveTextContent(`6th`),await g(t).toHaveTextContent(`132`),await g(t).toHaveTextContent(`▲up 1`),await g(b(e,`Tom`)).toHaveTextContent(`▼down 1`),await g(y(e).map(e=>e.textContent?.match(/[A-Z][a-z]+( Shah)?/)?.[0])).toEqual([`Mel`,`Jonny`,`Raj`,`Sam`,`Ana`,`Alex`,`Tom`,`Kit`,`Priya Shah`]);for(let t of _(e).getAllByRole(`button`))await c(t);await l(e)}},S={loaders:[d(`eve`)],render:(e,{loaded:t})=>(0,h.jsx)(n,{rows:s(t.s)}),play:async({canvasElement:e})=>{await g(y(e).every(e=>e.textContent?.startsWith(`=1st`))).toBe(!0),await g(y(e)[0]).toHaveTextContent(`Alex`)}},C=[`Lou`,`Bea`,`Femi`,`Grace Okafor`,`Hugo`,`Ines`,`Jules`,`Kemi`,`Leo`,`Maya Patel`,`Nico`,`Ola`,`Pip`,`Quinn`,`Rosa`,`Theo`,`Uma`],w={render:()=>{let e=i(e=>{e.members.push(...C.map((e,t)=>({id:`m${t}`,name:e,active:!0}))),e.standings=e.members.map((e,t)=>({user:e.id,rank:t+1,total:1240-t*37,byRound:{},byMarket:{},pending:0,change:t%3-1}))});return(0,h.jsx)(n,{rows:s(e)})},play:async({canvasElement:e})=>{await g(y(e)).toHaveLength(20),await g(y(e)[0]).toHaveTextContent(`1,240`),await l(e)}},T={loaders:[d(`morning`)],render:(e,{loaded:t})=>(0,h.jsx)(n,{rows:s(a(p(t.s))),hidden:2}),play:async({canvasElement:e})=>{await g(e).toHaveTextContent(/2 hidden/),await g(b(e,`Alex`)).toHaveTextContent(`6th`),await g(b(e,`Alex`)).toHaveTextContent(`72`),await g(e).not.toHaveTextContent(`▲`),await g(e).not.toHaveTextContent(`▼`),await g(e).not.toHaveTextContent(`level`),await g(y(e)).toHaveLength(9),await l(e)}},E=[`Night`,`Level`,`Twenty`,`Hidden`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => {
    const s = structuredClone((await withMoment("night")()).s);
    for (const r of s.standings) if (r.user === "tom" || r.user === s.you) r.change = r.user === s.you ? 1 : -1;
    return {
      s
    };
  }],
  render: (_, {
    loaded
  }) => <Leaderboard rows={tableRows((loaded as Loaded).s)} onRow={() => {}} />,
  play: async ({
    canvasElement
  }) => {
    await expect(rows(canvasElement)).toHaveLength(9);
    const alex = named(canvasElement, "Alex");
    await expect(alex).toHaveTextContent("6th");
    await expect(alex).toHaveTextContent("132");
    await expect(alex).toHaveTextContent("▲up 1");
    await expect(named(canvasElement, "Tom")).toHaveTextContent("▼down 1");
    // Shared places: you first, then by name.
    await expect(rows(canvasElement).map(li => li.textContent?.match(/[A-Z][a-z]+( Shah)?/)?.[0])).toEqual(["Mel", "Jonny", "Raj", "Sam", "Ana", "Alex", "Tom", "Kit", "Priya Shah"]);
    for (const button of within(canvasElement).getAllByRole("button")) await thumbSized(button);
    await noSidewaysScroll(canvasElement);
  }
}`,...x.parameters?.docs?.source},description:{story:`That night: the whole table, last night's moves in places (the recording moved nobody, so you are given a place
up, past Tom); each row opens that friend's page (site map 5A).`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <Leaderboard rows={tableRows((loaded as Loaded).s)} />,
  play: async ({
    canvasElement
  }) => {
    await expect(rows(canvasElement).every(li => li.textContent?.startsWith("=1st"))).toBe(true);
    await expect(rows(canvasElement)[0]).toHaveTextContent("Alex");
  }
}`,...S.parameters?.docs?.source},description:{story:`The eve of matchday 1: everyone level.`,...S.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const s = buildSnapshot(s => {
      s.members.push(...MORE.map((name, i) => ({
        id: \`m\${i}\`,
        name,
        active: true
      })));
      s.standings = s.members.map((m, i) => ({
        user: m.id,
        rank: i + 1,
        total: 1240 - i * 37,
        byRound: {},
        byMarket: {},
        pending: 0,
        change: i % 3 - 1
      }));
    });
    return <Leaderboard rows={tableRows(s)} />;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(rows(canvasElement)).toHaveLength(20);
    await expect(rows(canvasElement)[0]).toHaveTextContent("1,240");
    await noSidewaysScroll(canvasElement);
  }
}`,...w.parameters?.docs?.source},description:{story:`Twenty members, totals past 1,000.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Leaderboard rows={tableRows(spoilerFree(sealedMorning((loaded as Loaded).s)))} hidden={2} />,
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement).toHaveTextContent(/2 hidden/);
    await expect(named(canvasElement, "Alex")).toHaveTextContent("6th");
    await expect(named(canvasElement, "Alex")).toHaveTextContent("72");
    await expect(canvasElement).not.toHaveTextContent("▲");
    await expect(canvasElement).not.toHaveTextContent("▼");
    // The recording moved nobody, so "level" is the move a leak would show.
    await expect(canvasElement).not.toHaveTextContent("level");
    await expect(rows(canvasElement)).toHaveLength(9);
    await noSidewaysScroll(canvasElement);
  }
}`,...T.parameters?.docs?.source},description:{story:`A morning with two matches hidden (spoiler-free mornings): the table as you've seen it, no moves, and the chip.`,...T.parameters?.docs?.description}}}})))()}D();export{T as Hidden,S as Level,x as Night,w as Twenty,E as __namedExportsOrder,v as default};
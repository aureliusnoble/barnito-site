import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{T as n,n as r,t as i}from"./src-Ckdztxlk.js";import{a,i as o,r as s}from"./checks-CKr9wmxM.js";import{i as c,t as l}from"./moments-Cjxlj8DI.js";import{r as u,t as d}from"./Avatar-DvpBdAlw.js";import{n as f,t as p}from"./Delta-BLQxyyJa.js";function m({row:e,onOpen:t}){let n=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`span`,{className:`w-10 shrink-0 font-num text-label font-bold text-fg-muted`,children:e.place}),(0,h.jsx)(`span`,{"aria-hidden":!0,className:`shrink-0`,children:(0,h.jsx)(d,{name:e.name,...e.you&&{you:!0}})}),(0,h.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-body font-semibold`,children:e.name}),(0,h.jsx)(`span`,{className:`w-10 shrink-0 text-right text-label`,children:e.moved!==void 0&&(0,h.jsx)(p,{value:e.moved,places:!0})}),(0,h.jsx)(`span`,{className:`w-14 shrink-0 text-right font-num text-body font-bold`,children:e.total.toLocaleString(`en-GB`)})]}),r=`flex min-h-target w-full min-w-0 items-center gap-3 rounded-tile px-2 ${e.you?`bg-mine-soft`:``}`;return(0,h.jsx)(`li`,{children:t?(0,h.jsx)(`button`,{type:`button`,onClick:()=>t(e.user),className:`${r} text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-fg`,children:n}):(0,h.jsx)(`div`,{className:r,children:n})})}var h;function g(){return(g=e((()=>{u(),f(),h=t(),m.__docgenInfo={description:`A row of the table: place, face, name, the move since the last results, total; yours on lime. A row opens that
    friend's page (site map 5A). The face sits beside the name, so screen readers hear the name once.`,methods:[],displayName:`LeaderboardRow`,props:{row:{required:!0,tsType:{name:`TableRow`},description:``},onOpen:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(user: string) => void`,signature:{arguments:[{type:{name:`string`},name:`user`}],return:{name:`void`}}},description:``}}}})))()}function _({rows:e,onRow:t}){return(0,v.jsx)(`ol`,{className:`grid grid-cols-1 rounded-card bg-surface px-2 py-2`,children:e.map(e=>(0,v.jsx)(m,{row:e,...t&&{onOpen:t}},e.user))})}var v;function y(){return(y=e((()=>{g(),v=t(),_.__docgenInfo={description:`The whole table, in place order (shared places read "=2nd": D52), keyed by member (F66).`,methods:[],displayName:`Leaderboard`,props:{rows:{required:!0,tsType:{name:`Array`,elements:[{name:`TableRow`}],raw:`TableRow[]`},description:``},onRow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(user: string) => void`,signature:{arguments:[{type:{name:`string`},name:`user`}],return:{name:`void`}}},description:``}}}})))()}var b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{i(),s(),l(),y(),b=t(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Domain/Leaderboard`,parameters:{layout:`padded`}},w=e=>S(e).getAllByRole(`listitem`),T=(e,t)=>w(e).find(e=>e.textContent?.includes(t)),E={loaders:[c(`night`)],render:(e,{loaded:t})=>(0,b.jsx)(_,{rows:n(t.s),onRow:()=>{}}),play:async({canvasElement:e})=>{await x(w(e)).toHaveLength(9);let t=T(e,`Alex`);await x(t).toHaveTextContent(`7th`),await x(t).toHaveTextContent(`247`),await x(t).toHaveTextContent(`▼down 1`),await x(T(e,`Tom`)).toHaveTextContent(`▲up 1`),await x(w(e).map(e=>e.textContent?.match(/[A-Z][a-z]+( Shah)?/)?.[0])).toEqual([`Jonny`,`Raj`,`Sam`,`Ana`,`Mel`,`Tom`,`Alex`,`Kit`,`Priya Shah`]);for(let t of S(e).getAllByRole(`button`))await a(t);await o(e)}},D={loaders:[c(`eve`)],render:(e,{loaded:t})=>(0,b.jsx)(_,{rows:n(t.s)}),play:async({canvasElement:e})=>{await x(w(e).every(e=>e.textContent?.startsWith(`=1st`))).toBe(!0),await x(w(e)[0]).toHaveTextContent(`Alex`)}},O=[`Lou`,`Bea`,`Femi`,`Grace Okafor`,`Hugo`,`Ines`,`Jules`,`Kemi`,`Leo`,`Maya Patel`,`Nico`,`Ola`,`Pip`,`Quinn`,`Rosa`,`Theo`,`Uma`],k={render:()=>{let e=r(e=>{e.members.push(...O.map((e,t)=>({id:`m${t}`,name:e,active:!0}))),e.standings=e.members.map((e,t)=>({user:e.id,rank:t+1,total:1240-t*37,byRound:{},byMarket:{},pending:0,change:t%3-1}))});return(0,b.jsx)(_,{rows:n(e)})},play:async({canvasElement:e})=>{await x(w(e)).toHaveLength(20),await x(w(e)[0]).toHaveTextContent(`1,240`),await o(e)}},A=[`Night`,`Level`,`Twenty`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <Leaderboard rows={tableRows((loaded as Loaded).s)} onRow={() => {}} />,
  play: async ({
    canvasElement
  }) => {
    await expect(rows(canvasElement)).toHaveLength(9);
    const alex = named(canvasElement, "Alex");
    await expect(alex).toHaveTextContent("7th");
    await expect(alex).toHaveTextContent("247");
    await expect(alex).toHaveTextContent("▼down 1");
    await expect(named(canvasElement, "Tom")).toHaveTextContent("▲up 1");
    // Shared places: you first, then by name.
    await expect(rows(canvasElement).map(li => li.textContent?.match(/[A-Z][a-z]+( Shah)?/)?.[0])).toEqual(["Jonny", "Raj", "Sam", "Ana", "Mel", "Tom", "Alex", "Kit", "Priya Shah"]);
    for (const button of within(canvasElement).getAllByRole("button")) await thumbSized(button);
    await noSidewaysScroll(canvasElement);
  }
}`,...E.parameters?.docs?.source},description:{story:`That night: the whole table, last night's moves in places; each row opens that friend's page (site map 5A).`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`The eve of matchday 1: everyone level.`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Twenty members, totals past 1,000.`,...k.parameters?.docs?.description}}}})))()}j();export{D as Level,E as Night,k as Twenty,A as __namedExportsOrder,C as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./src-Ckdztxlk.js";import{n as i}from"./picked-Dj7WOPcC.js";import{a,i as o,r as s}from"./checks-CKr9wmxM.js";import{i as c,t as l}from"./moments-Cjxlj8DI.js";import{n as u}from"./format-CEDN8nmY.js";import{r as d,t as f}from"./Avatar-DvpBdAlw.js";function p({picked:e,onFriend:t}){return(0,m.jsxs)(`div`,{className:`grid gap-4`,children:[(0,m.jsx)(`div`,{className:`grid gap-3 ${e.columns.length===3?`grid-cols-3`:`grid-cols-2`}`,children:e.columns.map(e=>(0,m.jsxs)(`section`,{"aria-label":e.label,className:`grid min-w-0 content-start gap-1`,children:[(0,m.jsxs)(`h3`,{className:`flex min-w-0 items-baseline gap-1.5 text-label font-semibold`,children:[(0,m.jsx)(`span`,{className:`truncate`,children:e.label}),(0,m.jsx)(`span`,{className:`font-num text-fg-muted`,children:e.people.length})]}),e.people.map(e=>(0,m.jsxs)(`button`,{type:`button`,onClick:()=>t?.(e.user),className:`flex min-h-target min-w-0 items-center gap-1.5 rounded-tile px-1 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-fg`,children:[(0,m.jsx)(`span`,{"aria-hidden":!0,className:`shrink-0`,children:(0,m.jsx)(f,{name:e.name,...e.you&&{you:!0},size:24})}),(0,m.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-label font-semibold`,children:e.name}),e.points!==void 0&&(0,m.jsx)(`span`,{className:`shrink-0 font-num text-label font-bold ${e.points>0?`text-gain`:`text-fg-muted`}`,children:u(e.points)})]},e.user))]},e.key))}),e.none.length>0&&(0,m.jsxs)(`p`,{className:`text-label text-fg-muted`,children:[(0,m.jsx)(`span`,{className:`font-semibold`,children:`No pick:`}),` `,e.none.map(e=>e.name).join(`, `)]})]})}var m;function h(){return(h=e((()=>{d(),m=t(),p.__docgenInfo={description:`Who picked what on a match, from noon (site map 5B): a column per option, each face a way to that friend's page,
    with the points the pick pays; the members with no pick below.`,methods:[],displayName:`PickedBy`,props:{picked:{required:!0,tsType:{name:`WhoPicked`},description:``},onFriend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(user: string) => void`,signature:{arguments:[{type:{name:`string`},name:`user`}],return:{name:`void`}}},description:``}}}})))()}var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),s(),l(),h(),g=t(),{expect:_}=__STORYBOOK_MODULE_TEST__,v={title:`Domain/PickedBy`,parameters:{layout:`padded`}},y={loaders:[c(`night`)],render:(e,{loaded:t})=>(0,g.jsx)(p,{picked:i(t.s,`C-4`),onFriend:()=>{}}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`button`,{name:`Tom +47`});await a(n),await _(e.getByRole(`button`,{name:`Ana 0`})).toBeVisible(),await _(t).toHaveTextContent(`No pick`),await _(t).toHaveTextContent(`Alex`),await o(t)}},b=[`Lou`,`Bea`,`Femi`,`Grace Okafor`,`Hugo`,`Ines`,`Jules`,`Kemi`,`Leo`,`Maya Patel`,`Nico`,`Ola`,`Pip`,`Quinn`,`Rosa`,`Theo`,`Uma`],x=[`home`,`draw`,`away`],S={render:()=>{let e=n(e=>{e.now=Date.parse(`2028-06-15T11:05:00Z`),e.members.push(...b.map((e,t)=>({id:`m${t}`,name:e,active:!0}))),e.members.forEach((t,n)=>e.picks.push({id:`x${n}`,user:t.id,kind:`result`,fixture:`C-4`,round:`MD2`,outcome:x[n%5==0?2:n%2],status:`locked`,lockedBy:`self`,numbers:{prob:.35,points:29},lockedAt:Date.parse(`2028-06-14T09:00:00Z`)}))});return(0,g.jsx)(p,{picked:i(e,`C-4`),onFriend:()=>{}})},play:async({canvas:e,canvasElement:t})=>{await _(e.getAllByRole(`button`)).toHaveLength(20),await o(t)}},C=[`Night`,`Twenty`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <PickedBy picked={whoPicked((loaded as Loaded).s, "C-4")!} onFriend={() => {}} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const tom = canvas.getByRole("button", {
      name: "Tom +47"
    });
    await thumbSized(tom);
    await expect(canvas.getByRole("button", {
      name: "Ana 0"
    })).toBeVisible();
    await expect(canvasElement).toHaveTextContent("No pick");
    await expect(canvasElement).toHaveTextContent("Alex");
    await noSidewaysScroll(canvasElement);
  }
}`,...y.parameters?.docs?.source},description:{story:`The match page's "who picked what" (site map 5B): a face opens that friend's page.`,...y.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const s: Snapshot = buildSnapshot(s => {
      s.now = Date.parse("2028-06-15T11:05:00Z");
      s.members.push(...MORE.map((name, i) => ({
        id: \`m\${i}\`,
        name,
        active: true
      })));
      s.members.forEach((m, i) => s.picks.push({
        id: \`x\${i}\`,
        user: m.id,
        kind: "result",
        fixture: "C-4",
        round: "MD2",
        outcome: OUTCOMES[i % 5 === 0 ? 2 : i % 2]!,
        status: "locked",
        lockedBy: "self",
        numbers: {
          prob: 0.35,
          points: 29
        },
        lockedAt: Date.parse("2028-06-14T09:00:00Z")
      }));
    });
    return <PickedBy picked={whoPicked(s, "C-4")!} onFriend={() => {}} />;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getAllByRole("button")).toHaveLength(20);
    await noSidewaysScroll(canvasElement);
  }
}`,...S.parameters?.docs?.source},description:{story:`Twenty members (the main design's largest game): the faces wrap inside their columns.`,...S.parameters?.docs?.description}}}})))()}w();export{y as Night,S as Twenty,C as __namedExportsOrder,v as default};
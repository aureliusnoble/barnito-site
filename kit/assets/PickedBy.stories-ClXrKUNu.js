import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./PickedBy-BPnyULv8.js";import{U as i,bt as a,t as o}from"./src-Ca_r4w3v.js";import{a as s,i as c,r as l}from"./checks-C0Y16pbK.js";import{i as u,t as d}from"./moments-Bzx1n_TW.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o(),l(),d(),n(),f=t(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Domain/PickedBy`,parameters:{layout:`padded`}},h={loaders:[u(`night`)],render:(e,{loaded:t})=>(0,f.jsx)(r,{picked:a(t.s,`C-4`),onFriend:()=>{}}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`button`,{name:`Ana +19`});await s(n),await p(e.getByRole(`button`,{name:`Tom 0`})).toBeVisible(),await p(t).toHaveTextContent(`No pick`),await p(t).toHaveTextContent(/No pick:.*You/),await c(t)}},g=[`Lou`,`Bea`,`Femi`,`Grace Okafor`,`Hugo`,`Ines`,`Jules`,`Kemi`,`Leo`,`Maya Patel`,`Nico`,`Ola`,`Pip`,`Quinn`,`Rosa`,`Theo`,`Uma`],_=[`home`,`draw`,`away`],v={render:()=>{let e=i(e=>{e.now=Date.parse(`2028-06-15T11:05:00Z`),e.members.push(...g.map((e,t)=>({id:`m${t}`,name:e,active:!0}))),e.members.forEach((t,n)=>e.picks.push({id:`x${n}`,user:t.id,kind:`result`,fixture:`C-4`,round:`MD2`,outcome:_[n%5==0?2:n%2],status:`locked`,lockedBy:`self`,numbers:{prob:.35,points:29},lockedAt:Date.parse(`2028-06-14T09:00:00Z`)}))});return(0,f.jsx)(r,{picked:a(e,`C-4`),onFriend:()=>{}})},play:async({canvas:e,canvasElement:t})=>{await p(e.getAllByRole(`button`)).toHaveLength(20),await c(t)}},y={render:()=>{let e=i(e=>{e.now=Date.parse(`2028-06-15T11:05:00Z`),e.fixtures.find(e=>e.id===`C-4`).stage=`R16`,e.teams.find(e=>e.id===`AT`).name=`Bosnia & Herzegovina`,e.members.push(...g.slice(0,5).map((e,t)=>({id:`m${t}`,name:e,active:!0})));let t=[`home`,`draw-home`,`draw-away`,`away`];e.members.forEach((n,r)=>e.picks.push({id:`x${r}`,user:n.id,kind:`knockout`,fixture:`C-4`,round:`MD2`,outcome:t[r%4],status:`locked`,lockedBy:`self`,numbers:{prob:.2,points:120},lockedAt:Date.parse(`2028-06-14T09:00:00Z`)}))});return(0,f.jsx)(r,{picked:a(e,`C-4`),onFriend:()=>{}})},play:async({canvas:e,canvasElement:t})=>{let n=e.getAllByRole(`region`);await p(n).toHaveLength(4),await p(n[1]).toHaveAccessibleName(`Draw, then Scotland through`),await p(n[2]).toHaveAccessibleName(`Draw, then Bosnia & Herzegovina through`),await p(n[1]).toHaveTextContent(`◀ Scotland`),await p(n[2]).toHaveTextContent(`Bosnia & Herzegovina ▶`);let r=n[2].querySelector(`[data-arrow]`).getBoundingClientRect(),i=n[2].getBoundingClientRect();await p(r.width).toBeGreaterThan(0),await p(r.right).toBeLessThanOrEqual(i.right+.5),await c(t)}},b=[`Night`,`Twenty`,`Knockout`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <PickedBy picked={whoPicked((loaded as Loaded).s, "C-4")!} onFriend={() => {}} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const ana = canvas.getByRole("button", {
      name: "Ana +19"
    });
    await thumbSized(ana);
    await expect(canvas.getByRole("button", {
      name: "Tom 0"
    })).toBeVisible();
    await expect(canvasElement).toHaveTextContent("No pick");
    // You, as the owner's 28 Oct mockup says it ("No pick: You"; Plan 5e-2's mockup review).
    await expect(canvasElement).toHaveTextContent(/No pick:.*You/);
    await noSidewaysScroll(canvasElement);
  }
}`,...h.parameters?.docs?.source},description:{story:`The match page's "who picked what" (site map 5B): a face opens that friend's page.`,...h.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Twenty members (the main design's largest game): the faces wrap inside their columns.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const s: Snapshot = buildSnapshot(x => {
      x.now = Date.parse("2028-06-15T11:05:00Z");
      x.fixtures.find(f => f.id === "C-4")!.stage = "R16";
      x.teams.find(t => t.id === "AT")!.name = "Bosnia & Herzegovina";
      x.members.push(...MORE.slice(0, 5).map((name, i) => ({
        id: \`m\${i}\`,
        name,
        active: true
      })));
      const endings = ["home", "draw-home", "draw-away", "away"] as const;
      x.members.forEach((m, i) => x.picks.push({
        id: \`x\${i}\`,
        user: m.id,
        kind: "knockout",
        fixture: "C-4",
        round: "MD2",
        outcome: endings[i % 4]!,
        status: "locked",
        lockedBy: "self",
        numbers: {
          prob: 0.2,
          points: 120
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
    const columns = canvas.getAllByRole("region");
    await expect(columns).toHaveLength(4);
    await expect(columns[1]).toHaveAccessibleName("Draw, then Scotland through");
    await expect(columns[2]).toHaveAccessibleName("Draw, then Bosnia & Herzegovina through");
    await expect(columns[1]).toHaveTextContent("◀ Scotland");
    await expect(columns[2]).toHaveTextContent("Bosnia & Herzegovina ▶");
    const arrow = columns[2]!.querySelector<HTMLElement>("[data-arrow]")!.getBoundingClientRect();
    const box = columns[2]!.getBoundingClientRect();
    await expect(arrow.width).toBeGreaterThan(0);
    await expect(arrow.right).toBeLessThanOrEqual(box.right + 0.5);
    await noSidewaysScroll(canvasElement);
  }
}`,...y.parameters?.docs?.source},description:{story:`A knockout's who picked what (design B): four columns, one per ending, each draw with its way; a long name shortens and
keeps its arrow (review finding 3).`,...y.parameters?.docs?.description}}}})))()}x();export{y as Knockout,h as Night,v as Twenty,b as __namedExportsOrder,m as default};
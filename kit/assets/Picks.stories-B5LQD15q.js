import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n,u as r}from"./src-Ckdztxlk.js";import{i,r as a}from"./checks-CKr9wmxM.js";import{i as o,t as s}from"./moments-Cjxlj8DI.js";import{i as c,n as l,r as u,t as d}from"./RoundEnding-A2VXwXWz.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{n(),a(),s(),c(),l(),f=t(),{expect:p,fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Domain/Picks`,parameters:{layout:`padded`}},g=m(),_=m(),v=m(),y=(e,t)=>e.querySelector(`[data-row="${t}"]`),b=e=>(0,f.jsx)(u,{picks:r(e),onOpen:g,onAction:_}),x=(e,t)=>{let n=e.picks.find(t=>t.user===e.you&&t.kind===`scorer`&&t.round===`MD2`);return{...e,now:Date.parse(t),picks:e.picks.filter(t=>t!==n&&(t.user!==e.you||t.kind!==`tokens`||t.fixture!==`A-3`||t.team!==`ES`))}},S=e=>{let t=r(e);return(0,f.jsxs)(`div`,{className:`grid gap-3`,children:[t.ending&&(0,f.jsx)(d,{ending:t.ending,onUse:v}),(0,f.jsx)(u,{picks:t,onOpen:g,onAction:_})]})},C={loaders:[o(`eve`)],render:(e,{loaded:t})=>b(t.s),play:async({canvas:e,canvasElement:t,userEvent:n})=>{g.mockClear(),_.mockClear(),await p([...t.querySelectorAll(`[data-row]`)].map(e=>e.getAttribute(`data-row`))).toEqual([`Champion`,`Tokens`,`Scorers`,`Matches`]),await p(y(t,`Champion`).dataset.tone).toBe(`tomorrow`),await p(y(t,`Champion`)).toHaveTextContent(`Croatia, 900 pts`),await p(y(t,`Tokens`).querySelectorAll(`[role="img"]`).length).toBe(3),await n.click(e.getByRole(`button`,{name:`Lock 1`})),await p(_).toHaveBeenCalledWith(`matches`),await n.click(e.getByRole(`button`,{name:`Lock`})),await p(_).toHaveBeenLastCalledWith(`champion`),await n.click(y(t,`Tokens`).querySelector(`button`)),await p(g).toHaveBeenCalledWith(`tokens`),await i(t)}},w={loaders:[o(`morning`)],render:(e,{loaded:t})=>b(t.s),play:async({canvas:e,canvasElement:t})=>{let n=y(t,`Matches`);await p(n.dataset.tone).toBe(`today`),await p(n).toHaveTextContent(`Due today`),await p(n).toHaveTextContent(`Germany v Poland, Portugal v Austria, Serbia v Türkiye`),await p(n.querySelectorAll(`[data-segment="missing"]`).length).toBe(1),await p(e.getByRole(`img`,{name:`1 to pick, 1 draft, 1 locked`})).toBeVisible(),await p(e.getByRole(`button`,{name:`Draft 1`})).toBeVisible(),await p(y(t,`Champion`)).toHaveTextContent(`Locked`),await p(y(t,`Champion`).dataset.tone).toBe(`calm`),await p(y(t,`Tokens`)).toHaveTextContent(`Done`),await i(t)}},T={loaders:[o(`knockouts`)],render:(e,{loaded:t})=>b(t.s),play:async({canvas:e,canvasElement:t})=>{await p(e.getByRole(`button`,{name:`Lock 2`})).toBeVisible(),await p(y(t,`Matches`)).toHaveTextContent(`Spain v Austria, Italy v Croatia`),await i(t)}},E={loaders:[o(`eve`)],render:(e,{loaded:t})=>{let n=t.s;return b({...n,picks:n.picks.filter(e=>e.user!==n.you||e.kind!==`champion`)})},play:async({canvas:e,canvasElement:t})=>{await p(y(t,`Champion`)).toHaveTextContent(`No pick`),await p(e.getByRole(`button`,{name:`Draft`})).toBeVisible()}},D={loaders:[o(`morning`)],render:(e,{loaded:t})=>{let n=t.s;return b({...n,picks:[...n.picks.map(e=>e.user===n.you&&e.fixture===`C-3`&&e.status===`draft`?{...e,status:`locked`}:e),{id:`c4`,user:n.you,kind:`result`,fixture:`C-4`,round:`MD2`,outcome:`draw`,status:`locked`}]})},play:async({canvasElement:e})=>{let t=y(e,`Matches`);await p(t).toHaveTextContent(`Locked`),await p(t.dataset.tone).toBe(`calm`),await p(t.querySelectorAll(`button`).length).toBe(1)}},O={loaders:[o(`morning`)],render:(e,{loaded:t})=>S(x(t.s,`2028-06-17T07:10:00Z`)),play:async({canvas:e,canvasElement:t,userEvent:n})=>{v.mockClear();let r=e.getByRole(`region`,{name:`Matchday 2 ends`});await p(r).toHaveTextContent(`at 12:00 today`),await p(r).toHaveTextContent(`1 token left`),await p(r).toHaveTextContent(`1 scorer left`),await p(r.querySelector(`[role="timer"]`).dataset.tone).toBe(`calm`),await n.click(e.getByRole(`button`,{name:`Use them`})),await p(v).toHaveBeenCalledOnce(),await p(y(t,`Tokens`).dataset.tone).toBe(`urgent`),await p(y(t,`Tokens`)).toHaveTextContent(`1 left today`),await i(t)}},k={loaders:[o(`morning`)],render:(e,{loaded:t})=>S(x(t.s,`2028-06-17T09:10:00Z`)),play:async({canvasElement:e})=>{await p(e.querySelector(`section [role="timer"]`).dataset.tone).toBe(`orange`)}},A={loaders:[o(`morning`)],render:(e,{loaded:t})=>S(x(t.s,`2028-06-17T10:40:00Z`)),play:async({canvasElement:e})=>{await p(e.querySelector(`section [role="timer"]`).dataset.tone).toBe(`red`)}},j={loaders:[o(`morning`)],render:(e,{loaded:t})=>{let n=t.s;return b({...n,now:Date.parse(`2028-06-16T07:10:00Z`),picks:n.picks.filter(e=>e.user!==n.you||e.kind!==`tokens`||e.fixture!==`A-3`||e.team!==`IT`)})},play:async({canvasElement:e})=>{await p(y(e,`Tokens`).dataset.tone).toBe(`warn`),await p(y(e,`Tokens`)).toHaveTextContent(`Behind`)}},M=[`Eve`,`Morning`,`Knockouts`,`ChampionToPick`,`AllLocked`,`RoundEnds`,`RoundEndsSoon`,`RoundEndsNow`,`Behind`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => rows((loaded as Loaded).s),
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    opened.mockClear();
    acted.mockClear();
    await expect([...canvasElement.querySelectorAll("[data-row]")].map(x => x.getAttribute("data-row"))).toEqual(["Champion", "Tokens", "Scorers", "Matches"]);
    await expect(row(canvasElement, "Champion").dataset.tone).toBe("tomorrow");
    await expect(row(canvasElement, "Champion")).toHaveTextContent("Croatia, 900 pts");
    await expect(row(canvasElement, "Tokens").querySelectorAll('[role="img"]').length).toBe(3);
    await userEvent.click(canvas.getByRole("button", {
      name: "Lock 1"
    }));
    await expect(acted).toHaveBeenCalledWith("matches");
    await userEvent.click(canvas.getByRole("button", {
      name: "Lock"
    }));
    await expect(acted).toHaveBeenLastCalledWith("champion");
    await userEvent.click(row(canvasElement, "Tokens").querySelector("button")!);
    await expect(opened).toHaveBeenCalledWith("tokens");
    await noSidewaysScroll(canvasElement);
  }
}`,...C.parameters?.docs?.source},description:{story:`The eve: the champion and tomorrow's match due, amber; three rounds' tokens and scorers drafted.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => rows((loaded as Loaded).s),
  play: async ({
    canvas,
    canvasElement
  }) => {
    const matches = row(canvasElement, "Matches");
    await expect(matches.dataset.tone).toBe("today");
    await expect(matches).toHaveTextContent("Due today");
    await expect(matches).toHaveTextContent("Germany v Poland, Portugal v Austria, Serbia v Türkiye");
    await expect(matches.querySelectorAll('[data-segment="missing"]').length).toBe(1);
    await expect(canvas.getByRole("img", {
      name: "1 to pick, 1 draft, 1 locked"
    })).toBeVisible();
    await expect(canvas.getByRole("button", {
      name: "Draft 1"
    })).toBeVisible();
    await expect(row(canvasElement, "Champion")).toHaveTextContent("Locked");
    await expect(row(canvasElement, "Champion").dataset.tone).toBe("calm");
    await expect(row(canvasElement, "Tokens")).toHaveTextContent("Done");
    await noSidewaysScroll(canvasElement);
  }
}`,...w.parameters?.docs?.source},description:{story:`A match-day morning: drafting first, in red; the champion locked; two rounds' bars.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => rows((loaded as Loaded).s),
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("button", {
      name: "Lock 2"
    })).toBeVisible();
    await expect(row(canvasElement, "Matches")).toHaveTextContent("Spain v Austria, Italy v Croatia");
    await noSidewaysScroll(canvasElement);
  }
}`,...T.parameters?.docs?.source},description:{story:`The round of 16's first day: two ties drafted.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    return rows({
      ...s,
      picks: s.picks.filter(p => !(p.user === s.you && p.kind === "champion"))
    });
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(row(canvasElement, "Champion")).toHaveTextContent("No pick");
    await expect(canvas.getByRole("button", {
      name: "Draft"
    })).toBeVisible();
  }
}`,...E.parameters?.docs?.source},description:{story:`No champion on the eve: draft one.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    return rows({
      ...s,
      picks: [...s.picks.map(p => p.user === s.you && p.fixture === "C-3" && p.status === "draft" ? {
        ...p,
        status: "locked" as const
      } : p), {
        id: "c4",
        user: s.you,
        kind: "result",
        fixture: "C-4",
        round: "MD2",
        outcome: "draw",
        status: "locked"
      }]
    });
  },
  play: async ({
    canvasElement
  }) => {
    const matches = row(canvasElement, "Matches");
    await expect(matches).toHaveTextContent("Locked");
    await expect(matches.dataset.tone).toBe("calm");
    await expect(matches.querySelectorAll("button").length).toBe(1);
  }
}`,...D.parameters?.docs?.source},description:{story:`Everything due locked: no action, nothing tinted.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => ending(lastDay((loaded as Loaded).s, "2028-06-17T07:10:00Z")),
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    used.mockClear();
    const header = canvas.getByRole("region", {
      name: "Matchday 2 ends"
    });
    await expect(header).toHaveTextContent("at 12:00 today");
    await expect(header).toHaveTextContent("1 token left");
    await expect(header).toHaveTextContent("1 scorer left");
    await expect(header.querySelector<HTMLElement>('[role="timer"]')!.dataset.tone).toBe("calm");
    await userEvent.click(canvas.getByRole("button", {
      name: "Use them"
    }));
    await expect(used).toHaveBeenCalledOnce();
    await expect(row(canvasElement, "Tokens").dataset.tone).toBe("urgent");
    await expect(row(canvasElement, "Tokens")).toHaveTextContent("1 left today");
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`A round's last day with a token and a scorer unplaced: the header, and the rows in red.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => ending(lastDay((loaded as Loaded).s, "2028-06-17T09:10:00Z")),
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector<HTMLElement>('section [role="timer"]')!.dataset.tone).toBe("orange");
  }
}`,...k.parameters?.docs?.source},description:{story:`The same within 3 hours: the time left in orange.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => ending(lastDay((loaded as Loaded).s, "2028-06-17T10:40:00Z")),
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector<HTMLElement>('section [role="timer"]')!.dataset.tone).toBe("red");
  }
}`,...A.parameters?.docs?.source},description:{story:`Within the hour: red.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    return rows({
      ...s,
      now: Date.parse("2028-06-16T07:10:00Z"),
      picks: s.picks.filter(p => !(p.user === s.you && p.kind === "tokens" && p.fixture === "A-3" && p.team === "IT"))
    });
  },
  play: async ({
    canvasElement
  }) => {
    await expect(row(canvasElement, "Tokens").dataset.tone).toBe("warn");
    await expect(row(canvasElement, "Tokens")).toHaveTextContent("Behind");
  }
}`,...j.parameters?.docs?.source},description:{story:`Behind the pace on tokens: amber.`,...j.parameters?.docs?.description}}}})))()}N();export{D as AllLocked,j as Behind,E as ChampionToPick,C as Eve,T as Knockouts,w as Morning,O as RoundEnds,A as RoundEndsNow,k as RoundEndsSoon,M as __namedExportsOrder,h as default};
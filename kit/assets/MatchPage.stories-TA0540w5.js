import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./EarnedTable-H-X8ddSK.js";import{E as c,O as l,U as u,t as d}from"./src-Ca_r4w3v.js";import{i as f,r as p}from"./checks-C0Y16pbK.js";import{i as m,t as h}from"./moments-Bzx1n_TW.js";import{n as g,t as _}from"./PriceChart-C4JwFZ9M.js";function v({s:e,fixture:t}){let r=c(e,t);return r?(0,b.jsxs)(`div`,{className:`grid max-w-[390px] gap-4`,children:[(0,b.jsx)(n,{about:r.about}),r.picks&&(0,b.jsx)(o,{picks:r.picks}),r.parts.includes(`odds`)&&(0,b.jsx)(y,{s:e,fixture:t}),r.earned&&(0,b.jsx)(s,{rows:r.earned})]}):null}function y({s:e,fixture:t}){let n=l(e,t);return n?(0,b.jsx)(`section`,{"aria-label":`The odds`,className:`rounded-card bg-surface p-3`,children:(0,b.jsx)(_,{chart:n})}):null}var b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{d(),g(),p(),h(),i(),a(),r(),b=t(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Domain/MatchPage`,parameters:{layout:`padded`}},w={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,b.jsx)(v,{s:t.s,fixture:`C-4`}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`region`,{name:`The match`});await x(n).toHaveTextContent(`Thu 15 Jun, 20:00`),await x(n).toHaveTextContent(`St. James' Park, Newcastle`),await x(e.queryByRole(`region`,{name:`Who picked what`})).toBeNull(),await f(t)}},T={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,b.jsx)(v,{s:t.s,fixture:`A-3`}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`region`,{name:`The match`});await x(S(n).getByRole(`group`,{name:`Spain`})).toHaveTextContent(`1st in Group A`),await x(S(n).getByRole(`list`,{name:`Spain's form`})).toHaveAccessibleDescription(`Won, won`);let r=e.getByRole(`region`,{name:`Who picked what`}),i=S(r).getByRole(`list`,{name:`Tokens on Italy`});await x(S(i).getAllByRole(`listitem`)[0]).toHaveTextContent(`You`),await x(S(r).getByRole(`list`,{name:`Scorers`})).toHaveTextContent(`Mikel Oyarzabal`);let a=[...r.querySelectorAll(`[data-badge]`)].map(e=>e.getAttribute(`data-badge`));await x(a).toEqual([`all-in`,`risky business`,`long shot`]),await x(r.querySelectorAll(`[data-badge='long shot'] [data-line]`)).toHaveLength(3);let o=e.getByRole(`table`,{name:`What each earned`});await x(S(o).getAllByRole(`row`)[1]).toHaveTextContent(`Jonny`),await x(S(o).getAllByRole(`row`)[1]).toHaveTextContent(`47`),await f(t)}},E={loaders:[m(`reveal`)],render:(e,{loaded:t})=>(0,b.jsx)(v,{s:t.s,fixture:`C-4`}),play:async({canvas:e})=>{await x(e.getByRole(`region`,{name:`Who picked what`})).toBeVisible(),await x(e.queryByRole(`table`,{name:`What each earned`})).toBeNull()}},D={loaders:[async()=>{let{s:e}=await m(`knockouts`)(),t=e.picks.map(e=>e.fixture===`M37`&&e.status===`draft`?{...e,status:`locked`}:e);return{s:{...e,picks:t,now:Date.parse(`2028-06-24T12:00:00Z`)}}}],render:(e,{loaded:t})=>(0,b.jsx)(v,{s:t.s,fixture:`M37`}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`region`,{name:`Who picked what`});await x(S(n).getByRole(`region`,{name:`Draw, then Spain through`})).toBeVisible(),await x(n).not.toHaveTextContent(`No pick: Alex, Ana`),await f(t)}},O={render:()=>{let e=u(e=>{for(let t=1;t<=17;t++)e.members.push({id:`f${t}`,name:`Friend ${String(t).padStart(2,`0`)}`,active:!0});for(let t of e.members.filter(t=>!e.points.some(e=>e.user===t.id)))e.picks.push({id:`r-${t.id}`,user:t.id,kind:`result`,fixture:`A-3`,outcome:`home`,status:`locked`}),e.points.push({pick:`r-${t.id}`,user:t.id,fixture:`A-3`,points:1200+Number(t.id.slice(1))})});return(0,b.jsx)(v,{s:e,fixture:`A-3`})},play:async({canvas:e,canvasElement:t})=>{await x(S(e.getByRole(`table`,{name:`What each earned`})).getAllByRole(`row`)).toHaveLength(21),await f(t)}},k={loaders:[m(`night`)],render:(e,{loaded:t})=>(0,b.jsx)(v,{s:t.s,fixture:`C-4`}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`region`,{name:`The odds`});await x(await S(n).findByRole(`img`,{name:/The odds over time/})).toBeVisible(),await f(t)}},A=[`BeforeTheDeadline`,`Finished`,`FromNoon`,`Knockout`,`TwentyMembers`,`Odds`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Page s={(loaded as Loaded).s} fixture="C-4" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const about = canvas.getByRole("region", {
      name: "The match"
    });
    await expect(about).toHaveTextContent("Thu 15 Jun, 20:00");
    await expect(about).toHaveTextContent("St. James' Park, Newcastle");
    await expect(canvas.queryByRole("region", {
      name: "Who picked what"
    })).toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...w.parameters?.docs?.source},description:{story:`Before the deadline: only the match.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Page s={(loaded as Loaded).s} fixture="A-3" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const about = canvas.getByRole("region", {
      name: "The match"
    });
    await expect(within(about).getByRole("group", {
      name: "Spain"
    })).toHaveTextContent("1st in Group A");
    await expect(within(about).getByRole("list", {
      name: "Spain's form"
    })).toHaveAccessibleDescription("Won, won");
    const picks = canvas.getByRole("region", {
      name: "Who picked what"
    });
    const italy = within(picks).getByRole("list", {
      name: "Tokens on Italy"
    });
    await expect(within(italy).getAllByRole("listitem")[0]).toHaveTextContent("You");
    await expect(within(picks).getByRole("list", {
      name: "Scorers"
    })).toHaveTextContent("Mikel Oyarzabal");
    // Each badge's pill once, its lines beside it (the owner, 26 Oct: many choices, presented neatly).
    const kinds = [...picks.querySelectorAll("[data-badge]")].map(x => x.getAttribute("data-badge"));
    await expect(kinds).toEqual(["all-in", "risky business", "long shot"]);
    await expect(picks.querySelectorAll("[data-badge='long shot'] [data-line]")).toHaveLength(3);
    const earned = canvas.getByRole("table", {
      name: "What each earned"
    });
    await expect(within(earned).getAllByRole("row")[1]).toHaveTextContent("Jonny");
    await expect(within(earned).getAllByRole("row")[1]).toHaveTextContent("47");
    await noSidewaysScroll(canvasElement);
  }
}`,...T.parameters?.docs?.source},description:{story:`A finished match whole: the teams' places and form, who picked what, what each earned.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("reveal")],
  render: (_, {
    loaded
  }) => <Page s={(loaded as Loaded).s} fixture="C-4" />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("region", {
      name: "Who picked what"
    })).toBeVisible();
    await expect(canvas.queryByRole("table", {
      name: "What each earned"
    })).toBeNull();
  }
}`,...E.parameters?.docs?.source},description:{story:`From noon: who picked what, before kickoff.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => {
    const {
      s
    } = await withMoment("knockouts")();
    // An hour past its deadline: the drafts on it locked, as the server locks them.
    const picks = s.picks.map(p => p.fixture === "M37" && p.status === "draft" ? {
      ...p,
      status: "locked" as const
    } : p);
    return {
      s: {
        ...s,
        picks,
        now: Date.parse("2028-06-24T12:00:00Z")
      }
    };
  }],
  render: (_, {
    loaded
  }) => <Page s={(loaded as Loaded).s} fixture="M37" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const picks = canvas.getByRole("region", {
      name: "Who picked what"
    });
    await expect(within(picks).getByRole("region", {
      name: "Draw, then Spain through"
    })).toBeVisible();
    await expect(picks).not.toHaveTextContent("No pick: Alex, Ana");
    await noSidewaysScroll(canvasElement);
  }
}`,...D.parameters?.docs?.source},description:{story:`A knockout: its four endings.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const s = buildSnapshot(x => {
      for (let i = 1; i <= 17; i++) x.members.push({
        id: \`f\${i}\`,
        name: \`Friend \${String(i).padStart(2, "0")}\`,
        active: true
      });
      for (const m of x.members.filter(m => !x.points.some(p => p.user === m.id))) {
        x.picks.push({
          id: \`r-\${m.id}\`,
          user: m.id,
          kind: "result",
          fixture: "A-3",
          outcome: "home",
          status: "locked"
        });
        x.points.push({
          pick: \`r-\${m.id}\`,
          user: m.id,
          fixture: "A-3",
          points: 1200 + Number(m.id.slice(1))
        });
      }
    });
    return <Page s={s} fixture="A-3" />;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(within(canvas.getByRole("table", {
      name: "What each earned"
    })).getAllByRole("row")).toHaveLength(21);
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`Twenty members: everyone earned something, and the table fits.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <Page s={(loaded as Loaded).s} fixture="C-4" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const odds = canvas.getByRole("region", {
      name: "The odds"
    });
    await expect(await within(odds).findByRole("img", {
      name: /The odds over time/
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...k.parameters?.docs?.source},description:{story:`The odds part after the deadline: the chart with everyone's lock.`,...k.parameters?.docs?.description}}}})))()}j();export{w as BeforeTheDeadline,T as Finished,E as FromNoon,D as Knockout,k as Odds,O as TwentyMembers,A as __namedExportsOrder,C as default};
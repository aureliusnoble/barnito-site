import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./ChooseWho-BAIvJG-d.js";import{t as g}from"./jsx-runtime-DeHZSEgm.js";import{c as _,h as v,l as y,p as b,t as x,u as S}from"./src-Ca_r4w3v.js";import{i as C,r as w}from"./checks-C0Y16pbK.js";import{i as T,t as E}from"./moments-Bzx1n_TW.js";var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{x(),D=t(),w(),E(),l(),o(),u(),c(),a(),O=g(),{expect:k,fn:A,within:j}=__STORYBOOK_MODULE_TEST__,M={title:`Domain/PlayerTeamHistory`,parameters:{layout:`padded`}},N=A(),P=A(),F=(e,t)=>async()=>{let n=structuredClone((await T(e)()).s);return t(n),{s:n}},I=()=>j(document.body),L={loaders:[T(`morning`)],render:(e,{loaded:t})=>(0,O.jsx)(d,{player:v(t.s,`pt-bruno-fernandes`),open:!0,onOpenChange:()=>{},onAction:N}),play:async()=>{N.mockClear();let e=await I().findByRole(`dialog`,{name:`Bruno Fernandes`});await k(e).toHaveTextContent(`Portugal · Midfielder · #8`),await k(j(e).getByRole(`region`,{name:`To score in Portugal v Austria, Thu 15 Jun, 17:00`})).toBeVisible(),await k(j(e).queryByRole(`button`,{name:`History`})).toBeNull(),await k(j(e).getByRole(`region`,{name:`This tournament`})).toHaveTextContent(/1\s*Apps.*11 Jun.*Germany.*W 2–0.*64′/),await j(e).getByRole(`button`,{name:`Draft`}).click(),await k(N).toHaveBeenCalledWith(`draft`)}},R={loaders:[F(`morning`,e=>{Object.assign(e.players.find(e=>e.id===`pt-bruno-fernandes`),{club:`Manchester United`,league:`Premier League`,age:33}),e.before={tournaments:[{id:`euro-2024`,name:`Euro 2024`}],teams:[],players:[{player:`pt-bruno-fernandes`,tournament:`euro-2024`,apps:5,goals:0}]}})],render:(e,{loaded:t})=>(0,O.jsx)(d,{player:v(t.s,`pt-bruno-fernandes`),open:!0,onOpenChange:()=>{}}),play:async()=>{let e=await I().findByRole(`dialog`,{name:`Bruno Fernandes`});await k(e).toHaveTextContent(`Manchester United · Premier League · 33`),await k(j(e).getByRole(`region`,{name:`Tournaments before`})).toHaveTextContent(/Euro 2024.*5 apps · 0 goals/)}},z={loaders:[T(`night`)],render:(e,{loaded:t})=>{let n=b(t.s,`CH`);return(0,O.jsxs)(`div`,{className:`grid gap-4`,children:[(0,O.jsx)(r,{team:n.team,meta:n.meta}),(0,O.jsx)(i,{...n.win&&{win:n.win},...n.out&&{out:n.out}}),(0,O.jsx)(h,{rows:n.scorers,onAdd:P,onPlayer:()=>{},allHref:`#/picks/scorers?team=CH`}),(0,O.jsx)(s,{rows:n.matches,href:e=>`#/match/${e}`}),(0,O.jsx)(p,{rows:[{name:`Euro 2024`,text:`Quarter-finals`}]})]})},play:async({canvas:e,canvasElement:t,userEvent:n})=>{P.mockClear(),await k(e.getByRole(`heading`,{name:`Switzerland`})).toBeVisible(),await k(e.getByRole(`region`,{name:`To win the Euro`})).toHaveTextContent(/900\s*pts.*Your champion.*Est\. 3%/);let r=e.getByRole(`region`,{name:`Its scorers for the next match`});await k(j(r).getAllByRole(`button`,{name:/^Add /})).toHaveLength(4),await n.click(j(r).getAllByRole(`button`,{name:/^Add /})[0]),await k(P).toHaveBeenCalledOnce(),await k(e.getByRole(`link`,{name:`All its players`})).toHaveAttribute(`href`,`#/picks/scorers?team=CH`),await k(e.getByRole(`link`,{name:/v Ukraine.*D 0–0/})).toHaveAttribute(`href`,`#/match/E-2`),await k(e.getByRole(`link`,{name:/at Belgium.*20:00/})).toBeVisible(),await C(t)}},B={loaders:[T(`night`)],render:(e,{loaded:t})=>(0,O.jsx)(n,{days:S(t.s).days,href:e=>`#/table/history/${e}`}),play:async({canvas:e})=>{let t=e.getAllByRole(`link`)[0];await k(t).toHaveAttribute(`href`,`#/table/history/2028-06-15`),await k(t).toHaveTextContent(/Thu.*15.*You.*Best:/)}},V={loaders:[T(`night`)],render:(e,{loaded:t})=>(0,O.jsx)(f,{day:y(t.s,`2028-06-14`),prevHref:`#/table/history/2028-06-13`,nextHref:`#/table/history/2028-06-15`}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`table`,{name:`Wed 14 Jun`});await k(j(n).getAllByRole(`columnheader`).map(e=>e.textContent)).toEqual([`Who`,`Day`,`ESP v ITA2–0`,`SVN v SWE0–0`,`ENG v CRO0–0`]),await k(j(n).getAllByRole(`row`)).toHaveLength(10),await k(e.getByRole(`link`,{name:`Previous day`})).toHaveAttribute(`href`,`#/table/history/2028-06-13`),await C(t)}},H=A(),U={loaders:[T(`night`)],render:function(e,{loaded:t}){let{s:n}=t,[r,i]=(0,D.useState)([`raj`,`ana`,`mel`]);return(0,O.jsx)(m,{people:_(n,r),open:!0,onOpenChange:()=>{},onChange:e=>{H(e),i(e)}})},play:async({userEvent:e})=>{H.mockClear();let t=await I().findByRole(`dialog`,{name:`Named on the chart`}),n=j(t).getByRole(`switch`,{name:/^You/});await k(n).toHaveAttribute(`aria-checked`,`true`),await k(getComputedStyle(n).opacity).toBe(`1`),await k(j(t).getByRole(`switch`,{name:/^Tom/})).toBeDisabled(),await e.click(j(t).getByRole(`switch`,{name:/^Raj/})),await k([...H.mock.lastCall[0]].sort()).toEqual([`ana`,`mel`]),await k(j(t).getByRole(`switch`,{name:/^Tom/})).toBeEnabled()}},W=[`PlayerFromSquad`,`PlayerProfile`,`Team`,`Days`,`Day`,`Choose`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <PlayerSheet player={playerView((loaded as Loaded).s, "pt-bruno-fernandes")!} open onOpenChange={() => {}} onAction={acted} />,
  play: async () => {
    acted.mockClear();
    const sheet = await page().findByRole("dialog", {
      name: "Bruno Fernandes"
    });
    await expect(sheet).toHaveTextContent("Portugal · Midfielder · #8");
    await expect(within(sheet).getByRole("region", {
      name: "To score in Portugal v Austria, Thu 15 Jun, 17:00"
    })).toBeVisible();
    await expect(within(sheet).queryByRole("button", {
      name: "History"
    })).toBeNull();
    await expect(within(sheet).getByRole("region", {
      name: "This tournament"
    })).toHaveTextContent(/1\\s*Apps.*11 Jun.*Germany.*W 2–0.*64′/);
    await within(sheet).getByRole("button", {
      name: "Draft"
    }).click();
    await expect(acted).toHaveBeenCalledWith("draft");
  }
}`,...L.parameters?.docs?.source},description:{story:`A player from a squad (the owner's 28 Oct mockup): who he is, the pick on his next match, this tournament. No odds
history: no History button.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  loaders: [changed("morning", s => {
    Object.assign(s.players.find(p => p.id === "pt-bruno-fernandes")!, {
      club: "Manchester United",
      league: "Premier League",
      age: 33
    });
    s.before = {
      tournaments: [{
        id: "euro-2024",
        name: "Euro 2024"
      }],
      teams: [],
      players: [{
        player: "pt-bruno-fernandes",
        tournament: "euro-2024",
        apps: 5,
        goals: 0
      }]
    };
  })],
  render: (_, {
    loaded
  }) => <PlayerSheet player={playerView((loaded as Loaded).s, "pt-bruno-fernandes")!} open onOpenChange={() => {}} />,
  play: async () => {
    const sheet = await page().findByRole("dialog", {
      name: "Bruno Fernandes"
    });
    await expect(sheet).toHaveTextContent("Manchester United · Premier League · 33");
    await expect(within(sheet).getByRole("region", {
      name: "Tournaments before"
    })).toHaveTextContent(/Euro 2024.*5 apps · 0 goals/);
  }
}`,...R.parameters?.docs?.source},description:{story:`With club, age and tournaments before (when a source gives them).`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => {
    const v = teamPage((loaded as Loaded).s, "CH")!;
    return <div className="grid gap-4">
        <TeamHeader team={v.team} meta={v.meta} />
        <TeamWin {...v.win && {
        win: v.win
      }} {...v.out && {
        out: v.out
      }} />
        <TeamScorers rows={v.scorers} onAdd={added} onPlayer={() => {}} allHref="#/picks/scorers?team=CH" />
        <TeamMatches rows={v.matches} href={id => \`#/match/\${id}\`} />
        <BeforeList rows={[{
        name: "Euro 2024",
        text: "Quarter-finals"
      }]} />
      </div>;
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    added.mockClear();
    await expect(canvas.getByRole("heading", {
      name: "Switzerland"
    })).toBeVisible();
    await expect(canvas.getByRole("region", {
      name: "To win the Euro"
    })).toHaveTextContent(/900\\s*pts.*Your champion.*Est\\. 3%/);
    const scorers = canvas.getByRole("region", {
      name: "Its scorers for the next match"
    });
    await expect(within(scorers).getAllByRole("button", {
      name: /^Add /
    })).toHaveLength(4);
    await userEvent.click(within(scorers).getAllByRole("button", {
      name: /^Add /
    })[0]!);
    await expect(added).toHaveBeenCalledOnce();
    await expect(canvas.getByRole("link", {
      name: "All its players"
    })).toHaveAttribute("href", "#/picks/scorers?team=CH");
    await expect(canvas.getByRole("link", {
      name: /v Ukraine.*D 0–0/
    })).toHaveAttribute("href", "#/match/E-2");
    await expect(canvas.getByRole("link", {
      name: /at Belgium.*20:00/
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...z.parameters?.docs?.source},description:{story:`A team's page parts: Switzerland on the night (the owner's 28 Oct mockup).`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <HistoryDays days={history((loaded as Loaded).s).days} href={date => \`#/table/history/\${date}\`} />,
  play: async ({
    canvas
  }) => {
    const first = canvas.getAllByRole("link")[0]!;
    await expect(first).toHaveAttribute("href", "#/table/history/2028-06-15");
    await expect(first).toHaveTextContent(/Thu.*15.*You.*Best:/);
  }
}`,...B.parameters?.docs?.source},description:{story:`History's days, newest first; each opens its day.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <DayGrid day={dayPicks((loaded as Loaded).s, "2028-06-14")!} prevHref="#/table/history/2028-06-13" nextHref="#/table/history/2028-06-15" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const table = canvas.getByRole("table", {
      name: "Wed 14 Jun"
    });
    await expect(within(table).getAllByRole("columnheader").map(h => h.textContent)
    // The day's total right after the name, always in view (the mockup review, finding 4).
    ).toEqual(["Who", "Day", "ESP v ITA2–0", "SVN v SWE0–0", "ENG v CRO0–0"]);
    await expect(within(table).getAllByRole("row")).toHaveLength(10);
    await expect(canvas.getByRole("link", {
      name: "Previous day"
    })).toHaveAttribute("href", "#/table/history/2028-06-13");
    await noSidewaysScroll(canvasElement);
  }
}`,...V.parameters?.docs?.source},description:{story:`A day's picks (A5): everyone by match, best first; the first column stays while the grid scrolls in its card.`,...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: function Render(_, {
    loaded
  }) {
    const {
      s
    } = loaded as Loaded;
    const [named, setNamed] = useState(["raj", "ana", "mel"]);
    return <ChooseWho people={chooseWho(s, named)} open onOpenChange={() => {}} onChange={next => {
      chosen(next);
      setNamed(next);
    }} />;
  },
  play: async ({
    userEvent
  }) => {
    chosen.mockClear();
    const sheet = await page().findByRole("dialog", {
      name: "Named on the chart"
    });
    const you = within(sheet).getByRole("switch", {
      name: /^You/
    });
    await expect(you).toHaveAttribute("aria-checked", "true");
    // Always on, drawn on: not the pale look of a switch that can't be turned on (the mockup review, finding 3).
    await expect(getComputedStyle(you).opacity).toBe("1");
    // Four on: the rest can't be switched on.
    await expect(within(sheet).getByRole("switch", {
      name: /^Tom/
    })).toBeDisabled();
    await userEvent.click(within(sheet).getByRole("switch", {
      name: /^Raj/
    }));
    await expect([...chosen.mock.lastCall![0]].sort()).toEqual(["ana", "mel"]);
    await expect(within(sheet).getByRole("switch", {
      name: /^Tom/
    })).toBeEnabled();
  }
}`,...U.parameters?.docs?.source},description:{story:`Choose who (H2): you always on, at most four in all.`,...U.parameters?.docs?.description}}}})))()}G();export{U as Choose,V as Day,B as Days,L as PlayerFromSquad,R as PlayerProfile,z as Team,W as __namedExportsOrder,M as default};
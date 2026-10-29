import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./MatchPicksDay-C7SF3FMj.js";import{n as i,t as a}from"./NotOpenRow-Br15L4U9.js";import{n as o,t as s}from"./LockSheet-Cf9XX8CZ.js";import{X as c,Z as l,ct as u,t as d}from"./src-Ca_r4w3v.js";import{i as f,r as p}from"./checks-C0Y16pbK.js";import{i as m,n as h,t as g}from"./moments-Bzx1n_TW.js";import{i as _,n as v}from"./sealed-CI1Ph_WX.js";function y({s:e,onReveal:t}){let n=l(e);return(0,b.jsxs)(`div`,{className:`grid gap-6`,children:[n.days.map(e=>(0,b.jsx)(r,{day:e,onLock:T,onScorers:E,onTokens:D},e.at)),n.notOpen.length>0&&(0,b.jsx)(`ul`,{className:`grid gap-2`,children:n.notOpen.map(e=>(0,b.jsx)(a,{item:e,...t&&{onReveal:t}},e.id))})]})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{d(),p(),g(),v(),o(),n(),i(),b=t(),{expect:x,fn:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Domain/MatchPicks`,parameters:{layout:`padded`}},T=S(),E=S(),D=S(),O=()=>C(document.body),k=(e,t)=>C(e).getByRole(`region`,{name:t}),A=S(),j=async e=>x(getComputedStyle(e).backgroundColor).not.toBe(getComputedStyle(document.documentElement).backgroundColor),M={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,b.jsx)(y,{s:t.s}),play:async({canvasElement:e,userEvent:t})=>{T.mockClear(),E.mockClear();let n=k(e,`Today, 12:00`);await x(n.dataset.tone).toBe(`today`),await x(n).toHaveTextContent(`2 to lock`);let r=[...n.querySelectorAll(`[data-match]`)];await x(r.map(e=>e.dataset.match)).toEqual([`C-4`,`C-3`,`B-4`]),await x(C(n).getByText(`No pick`)).toBeVisible(),await t.click(C(n).getByRole(`button`,{name:`Lock Portugal v Austria`})),await x(T).toHaveBeenCalledWith(`C-3`),await x(C(n).queryByRole(`button`,{name:`Lock Serbia v Türkiye`})).toBeNull();let i=k(e,`Sun 18 Jun, 12:00`),a=C(i).getByRole(`button`,{name:/Slovenia v Italy/});await x(a).toHaveAttribute(`aria-expanded`,`false`),await x(a).toHaveTextContent(`Draw`),await x(C(i).queryByRole(`button`,{name:`Lock Slovenia v Italy`})).toBeNull(),await t.click(a),await x(a).toHaveAttribute(`aria-expanded`,`true`),await t.click(C(i).getByRole(`button`,{name:`Scorers 2`})),await x(E).toHaveBeenCalledWith(`A-6`),await t.click(C(i).getByRole(`button`,{name:`Lock Slovenia v Italy`})),await x(T).toHaveBeenLastCalledWith(`A-6`);let o=k(e,`Mon 19 Jun, 12:00`);await x(o).toHaveTextContent(`draft now`),await t.click(C(o).getAllByRole(`button`,{expanded:!1})[0]),await x(C(o).queryByRole(`button`,{name:/^Lock /})).toBeNull(),await f(e)}},N={loaders:[m(`knockouts`)],render:(e,{loaded:t})=>(0,b.jsx)(y,{s:t.s}),play:async({canvasElement:e})=>{let t=k(e,`Today, 12:00`);await x(C(t).queryAllByRole(`group`,{name:`To go through`})).toHaveLength(0),await x(t).toHaveTextContent(`a draw, then who goes through`),await x(t).not.toHaveTextContent(`through:`),await x(k(e,`Tomorrow, 12:00`)).toHaveTextContent(`Croatia`),await f(e)}},P={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,b.jsx)(y,{s:h(t.s,`2028-06-15T11:01:00Z`)}),play:async({canvasElement:e})=>{let t=e.querySelector(`section`);await x(t).toHaveAccessibleName(`Tomorrow, 12:00`),await x(t.querySelectorAll(`[data-match]`)).toHaveLength(3)}},F={loaders:[m(`morning`)],render:(e,{loaded:t})=>{let n=t.s;return(0,b.jsx)(y,{s:{...n,fixtures:n.fixtures.map(e=>e.id===`F-6`?{...e,draftingFrom:Date.parse(`2028-06-18T11:00:00Z`)}:e)}})},play:async({canvas:e})=>{let t=e.getByRole(`listitem`,{name:`Czechia v Denmark`});await x(t).toHaveTextContent(`Opens when prices are available, by Sun 18 Jun, 12:00 at the latest`),await j(t)}},I={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,b.jsx)(s,{sheet:c(t.s),open:!0,onOpenChange:()=>{},onLock:T}),play:async({userEvent:e})=>{T.mockClear();let t=await O().findByRole(`dialog`,{name:`Lock by 12:00 today`}),n=C(t).getByRole(`listitem`,{name:`Portugal v Austria`});await x(n).toHaveTextContent(`Austria`),await x(n).toHaveTextContent(`58 pts`),await e.click(C(t).getByRole(`button`,{name:`Lock 1`})),await x(T).toHaveBeenCalledOnce()}},L={loaders:[m(`knockouts`)],render:(e,{loaded:t})=>{let n=t.s,r={...n,picks:n.picks.map(e=>e.user===n.you&&e.kind===`knockout`&&e.fixture===`M37`?{...e,outcome:`draw-home`}:e)};return(0,b.jsx)(s,{sheet:c(r),open:!0,onOpenChange:()=>{},onLock:T})},play:async()=>{let e=await O().findByRole(`dialog`,{name:`Lock by 12:00 today`});await x(C(e).getAllByRole(`heading`,{level:3}).map(e=>e.textContent)).toEqual([`Matches`,`Scorers`,`Tokens`]);let t=C(e).getByRole(`region`,{name:`Matches`}),n=C(t).getAllByRole(`listitem`,{name:/ v /});await x(n).toHaveLength(2),await x(n[0]).toHaveTextContent(`Draw, then Spain through`),await x(n[0]).toHaveTextContent(`337 pts`),await x(n[1]).toHaveTextContent(`Italy in 90 minutes`),await x(e).not.toHaveTextContent(`to go through`);let r=C(C(e).getByRole(`region`,{name:`Scorers`})).getAllByRole(`listitem`);await x(r.map(e=>e.getAttribute(`aria-label`))).toEqual([`Bryan Cristante`,`Jarell Quansah`,`Matteo Darmian`,`Michael Folorunsho`]),await x(r[1]).toHaveTextContent(`1,214 pts a goal`);let i=C(C(e).getByRole(`region`,{name:`Tokens`})).getAllByRole(`listitem`);await x(i.map(e=>e.textContent)).toEqual([`England, 4 tokens`]),await x(C(e).getByRole(`button`,{name:`Lock 7`})).toBeVisible()}},R={loaders:[m(`eve`)],render:(e,{loaded:t})=>(0,b.jsx)(s,{sheet:c(t.s),open:!0,onOpenChange:()=>{},onLock:T}),play:async()=>{let e=await O().findByRole(`dialog`,{name:`Lock by 12:00 tomorrow`});await x(C(e).getAllByRole(`heading`,{level:3}).map(e=>e.textContent)).toEqual([`Champion`,`Matches`,`Scorers`,`Tokens`]);let t=C(C(e).getByRole(`region`,{name:`Champion`})).getByRole(`listitem`);await x(t).toHaveTextContent(`Switzerland`),await x(t).toHaveTextContent(`900 pts`),await x(C(e).getByRole(`button`,{name:`Lock 8`})).toBeVisible()}},z={loaders:[m(`knockouts`)],render:(e,{loaded:t})=>{let n=t.s,r={...n,picks:n.picks.map(e=>e.user===n.you&&e.kind===`knockout`&&[`M37`,`M38`].includes(e.fixture)?{...e,status:`locked`}:e)};return(0,b.jsx)(s,{sheet:c(r),open:!0,onOpenChange:()=>{},onLock:T})},play:async({userEvent:e})=>{T.mockClear();let t=await O().findByRole(`dialog`,{name:`Lock by 12:00 today`});await x(C(t).queryByRole(`region`,{name:`Matches`})).toBeNull(),await x(C(C(t).getByRole(`region`,{name:`Scorers`})).getAllByRole(`listitem`)).toHaveLength(4),await x(C(C(t).getByRole(`region`,{name:`Tokens`})).getAllByRole(`listitem`)).toHaveLength(1),await e.click(C(t).getByRole(`button`,{name:`Lock 5`})),await x(T).toHaveBeenCalledOnce()}},B={loaders:[m(`knockouts`)],render:(e,{loaded:t})=>(0,b.jsx)(y,{s:u(_(t.s)),onReveal:A}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{A.mockClear();let r=e.getByRole(`listitem`,{name:`Croatia or Denmark v Spain`});await x(r).toHaveTextContent(`Hidden until noon today`),await n.click(C(r).getByRole(`button`,{name:`Show Croatia v Denmark`})),await x(A).toHaveBeenCalledWith([`M39`]);let i=e.getAllByRole(`listitem`,{name:/ v /});await x(i.map(e=>e.getAttribute(`aria-label`))).toEqual([`Croatia or Denmark v Spain`,`Netherlands or Germany v Norway or Switzerland`,`Belgium or Hungary v France or Scotland`]);for(let e of i)await j(e);await x(t.querySelector(`[data-match="M48"]`)).toHaveTextContent(`Portugal`),await f(t)}},V=[`Morning`,`Knockouts`,`PastNoon`,`NotOpen`,`LockSheetMorning`,`LockSheetKnockouts`,`LockSheetEve`,`LockSheetScorersAndTokens`,`SealedTie`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Days s={(loaded as Loaded).s} />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    locked.mockClear();
    scorers.mockClear();
    const today = day(canvasElement, "Today, 12:00");
    await expect(today.dataset.tone).toBe("today");
    await expect(today).toHaveTextContent("2 to lock");
    const cards = [...today.querySelectorAll<HTMLElement>("[data-match]")];
    await expect(cards.map(c => c.dataset.match)).toEqual(["C-4", "C-3", "B-4"]);
    await expect(within(today).getByText("No pick")).toBeVisible();
    await userEvent.click(within(today).getByRole("button", {
      name: "Lock Portugal v Austria"
    }));
    await expect(locked).toHaveBeenCalledWith("C-3");
    await expect(within(today).queryByRole("button", {
      name: "Lock Serbia v Türkiye"
    })).toBeNull();
    const sunday = day(canvasElement, "Sun 18 Jun, 12:00");
    const italy = within(sunday).getByRole("button", {
      name: /Slovenia v Italy/
    });
    await expect(italy).toHaveAttribute("aria-expanded", "false");
    await expect(italy).toHaveTextContent("Draw");
    await expect(within(sunday).queryByRole("button", {
      name: "Lock Slovenia v Italy"
    })).toBeNull();
    await userEvent.click(italy);
    await expect(italy).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(within(sunday).getByRole("button", {
      name: "Scorers 2"
    }));
    await expect(scorers).toHaveBeenCalledWith("A-6");
    await userEvent.click(within(sunday).getByRole("button", {
      name: "Lock Slovenia v Italy"
    }));
    await expect(locked).toHaveBeenLastCalledWith("A-6");
    // Monday's can't be locked until both teams have played: opened, no Lock.
    const monday = day(canvasElement, "Mon 19 Jun, 12:00");
    await expect(monday).toHaveTextContent("draft now");
    await userEvent.click(within(monday).getAllByRole("button", {
      expanded: false
    })[0]!);
    await expect(within(monday).queryByRole("button", {
      name: /^Lock /
    })).toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...M.parameters?.docs?.source},description:{story:`The morning: today's three as full cards (to pick, draft, locked), later days as rows that open into a card.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Days s={(loaded as Loaded).s} />,
  play: async ({
    canvasElement
  }) => {
    const today = day(canvasElement, "Today, 12:00");
    await expect(within(today).queryAllByRole("group", {
      name: "To go through"
    })).toHaveLength(0);
    await expect(today).toHaveTextContent("a draw, then who goes through");
    await expect(today).not.toHaveTextContent("through:");
    await expect(day(canvasElement, "Tomorrow, 12:00")).toHaveTextContent("Croatia");
    await noSidewaysScroll(canvasElement);
  }
}`,...N.parameters?.docs?.source},description:{story:`The round of 16: one pick on how each tie ends, four tiles in the full card.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Days s={later((loaded as Loaded).s, "2028-06-15T11:01:00Z")} />,
  play: async ({
    canvasElement
  }) => {
    const first = canvasElement.querySelector<HTMLElement>("section")!;
    await expect(first).toHaveAccessibleName("Tomorrow, 12:00");
    await expect(first.querySelectorAll("[data-match]")).toHaveLength(3);
  }
}`,...P.parameters?.docs?.source},description:{story:`One minute past noon: tomorrow's are now the full cards.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    return <Days s={{
      ...s,
      fixtures: s.fixtures.map(f => f.id === "F-6" ? {
        ...f,
        draftingFrom: Date.parse("2028-06-18T11:00:00Z")
      } : f)
    }} />;
  },
  play: async ({
    canvas
  }) => {
    const item = canvas.getByRole("listitem", {
      name: "Czechia v Denmark"
    });
    await expect(item).toHaveTextContent("Opens when prices are available, by Sun 18 Jun, 12:00 at the latest");
    await onTile(item);
  }
}`,...F.parameters?.docs?.source},description:{story:`A match not open yet, with why.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <LockSheet sheet={lockSheet((loaded as Loaded).s)!} open onOpenChange={() => {}} onLock={locked} />,
  play: async ({
    userEvent
  }) => {
    locked.mockClear();
    const dialog = await page().findByRole("dialog", {
      name: "Lock by 12:00 today"
    });
    const match = within(dialog).getByRole("listitem", {
      name: "Portugal v Austria"
    });
    await expect(match).toHaveTextContent("Austria");
    await expect(match).toHaveTextContent("58 pts");
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Lock 1"
    }));
    await expect(locked).toHaveBeenCalledOnce();
  }
}`,...I.parameters?.docs?.source},description:{story:`"Lock 1" on the morning: the one draft due, its pick and points, one tap to lock.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    const drawn: Snapshot = {
      ...s,
      picks: s.picks.map(p => p.user === s.you && p.kind === "knockout" && p.fixture === "M37" ? {
        ...p,
        outcome: "draw-home" as const
      } : p)
    };
    return <LockSheet sheet={lockSheet(drawn)!} open onOpenChange={() => {}} onLock={locked} />;
  },
  play: async () => {
    const dialog = await page().findByRole("dialog", {
      name: "Lock by 12:00 today"
    });
    await expect(within(dialog).getAllByRole("heading", {
      level: 3
    }).map(h => h.textContent)).toEqual(["Matches", "Scorers", "Tokens"]);
    const matches = within(dialog).getByRole("region", {
      name: "Matches"
    });
    const ties = within(matches).getAllByRole("listitem", {
      name: / v /
    });
    await expect(ties).toHaveLength(2);
    await expect(ties[0]).toHaveTextContent("Draw, then Spain through");
    await expect(ties[0]).toHaveTextContent("337 pts");
    await expect(ties[1]).toHaveTextContent("Italy in 90 minutes");
    await expect(dialog).not.toHaveTextContent("to go through");
    const scorers = within(within(dialog).getByRole("region", {
      name: "Scorers"
    })).getAllByRole("listitem");
    await expect(scorers.map(x => x.getAttribute("aria-label"))).toEqual(["Bryan Cristante", "Jarell Quansah", "Matteo Darmian", "Michael Folorunsho"]);
    await expect(scorers[1]).toHaveTextContent("1,214 pts a goal");
    const tokens = within(within(dialog).getByRole("region", {
      name: "Tokens"
    })).getAllByRole("listitem");
    await expect(tokens.map(x => x.textContent)).toEqual(["England, 4 tokens"]);
    await expect(within(dialog).getByRole("button", {
      name: "Lock 7"
    })).toBeVisible();
  }
}`,...L.parameters?.docs?.source},description:{story:`"Lock 7" in the round of 16: everything due at noon, in groups: one line per tie, how it ends in the sheet's words;
then the scorers, each with his points a goal; then the token stacks. Your Spain v Austria draft made a draw with
Spain through, so one line is a draw's words (the recording drafts Spain in 90 minutes).`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <LockSheet sheet={lockSheet((loaded as Loaded).s)!} open onOpenChange={() => {}} onLock={locked} />,
  play: async () => {
    const dialog = await page().findByRole("dialog", {
      name: "Lock by 12:00 tomorrow"
    });
    await expect(within(dialog).getAllByRole("heading", {
      level: 3
    }).map(h => h.textContent)).toEqual(["Champion", "Matches", "Scorers", "Tokens"]);
    const champion = within(within(dialog).getByRole("region", {
      name: "Champion"
    })).getByRole("listitem");
    await expect(champion).toHaveTextContent("Switzerland");
    await expect(champion).toHaveTextContent("900 pts");
    await expect(within(dialog).getByRole("button", {
      name: "Lock 8"
    })).toBeVisible();
  }
}`,...R.parameters?.docs?.source},description:{story:`"Lock 8" on the eve, as Home's button: the champion first, then tomorrow's match, its scorers and token stacks.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    const tied: Snapshot = {
      ...s,
      picks: s.picks.map(p => p.user === s.you && p.kind === "knockout" && ["M37", "M38"].includes(p.fixture!) ? {
        ...p,
        status: "locked" as const
      } : p)
    };
    return <LockSheet sheet={lockSheet(tied)!} open onOpenChange={() => {}} onLock={locked} />;
  },
  play: async ({
    userEvent
  }) => {
    locked.mockClear();
    const dialog = await page().findByRole("dialog", {
      name: "Lock by 12:00 today"
    });
    await expect(within(dialog).queryByRole("region", {
      name: "Matches"
    })).toBeNull();
    await expect(within(within(dialog).getByRole("region", {
      name: "Scorers"
    })).getAllByRole("listitem")).toHaveLength(4);
    await expect(within(within(dialog).getByRole("region", {
      name: "Tokens"
    })).getAllByRole("listitem")).toHaveLength(1);
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Lock 5"
    }));
    await expect(locked).toHaveBeenCalledOnce();
  }
}`,...z.parameters?.docs?.source},description:{story:`"Lock 5" with both ties locked: the scorers and the token stack still drafts at noon, no group for the matches.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Days s={spoilerFree(quarterMorning((loaded as Loaded).s))} onReveal={revealed} />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    revealed.mockClear();
    const tie = canvas.getByRole("listitem", {
      name: "Croatia or Denmark v Spain"
    });
    await expect(tie).toHaveTextContent("Hidden until noon today");
    await userEvent.click(within(tie).getByRole("button", {
      name: "Show Croatia v Denmark"
    }));
    await expect(revealed).toHaveBeenCalledWith(["M39"]);
    // Every row not open yet is a tile, sealed or not.
    const rows = canvas.getAllByRole("listitem", {
      name: / v /
    });
    await expect(rows.map(r => r.getAttribute("aria-label"))).toEqual(["Croatia or Denmark v Spain", "Netherlands or Germany v Norway or Switzerland", "Belgium or Hungary v France or Scotland"]);
    for (const row of rows) await onTile(row);
    await expect(canvasElement.querySelector('[data-match="M48"]')).toHaveTextContent("Portugal");
    await noSidewaysScroll(canvasElement);
  }
}`,...B.parameters?.docs?.source},description:{story:`A quarter-final fed by a match hidden this morning (spoiler-free mornings): its side named by that match, hidden
until noon, with the eye that shows it; the tie locking at noon keeps its teams so it can be picked.`,...B.parameters?.docs?.description}}}})))()}H();export{N as Knockouts,R as LockSheetEve,L as LockSheetKnockouts,I as LockSheetMorning,z as LockSheetScorersAndTokens,M as Morning,F as NotOpen,P as PastNoon,B as SealedTie,V as __namedExportsOrder,w as default};
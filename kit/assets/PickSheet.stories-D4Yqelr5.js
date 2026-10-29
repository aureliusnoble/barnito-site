import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{a as n,i as r,n as i,o as a}from"./PickSheet-D8etv4cq.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./EmptyState-DcIOSHY8.js";import{O as l,R as u,t as d}from"./src-Ca_r4w3v.js";import{a as f,r as p}from"./checks-C0Y16pbK.js";import{i as m,n as h,t as g}from"./moments-Bzx1n_TW.js";import{n as _,t as v}from"./PriceChart-C4JwFZ9M.js";function y({s:e,selection:t,refusal:r,history:a}){let[o,s]=(0,b.useState)(!0),d=u(e,t);return d?(0,x.jsx)(i,{sheet:d,open:o,onOpenChange:s,onAction:D,...r&&{refusal:r},...a&&{history:()=>{let r=`fixture`in t?t.fixture:void 0,i=r===void 0?void 0:l(e,r);return i?(0,x.jsx)(v,{chart:i}):(0,x.jsx)(c,{icon:n,title:`No odds history yet`})}}}):null}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{d(),b=t(),a(),_(),s(),p(),g(),r(),x=o(),{expect:S,fn:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Domain/PickSheet`},D=C(),O=()=>T(document.body),k=e=>O().findByRole(`dialog`,{name:e}),A={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`result`,fixture:`C-4`,outcome:`away`}}),play:async({userEvent:e})=>{D.mockClear();let t=await k(`Germany v Poland: Poland`),n=t.querySelector(`[data-sheet-title]`);await S(T(n).getByText(`Germany v Poland, 20:00`)).toBeVisible(),await S(T(n).getByText(`Poland`)).toBeVisible(),await S(T(t).getByTestId(`points`)).toHaveTextContent(`57 pts`),await S(t).toHaveTextContent(`Est. 17%`),await S(T(t).getByText(`Poland win`).parentElement).toHaveTextContent(`Poland win+57`),await S(T(t).getByText(`Germany or a draw`).parentElement).toHaveTextContent(`Germany or a draw0`),await S(t).toHaveTextContent(`Lock by 12:00 today`);let r=T(t).getAllByRole(`button`).filter(e=>[`Lock`,`Draft`].includes(e.textContent??``));await S(r.map(e=>e.textContent)).toEqual([`Lock`,`Draft`]);for(let e of r)await f(e);await e.click(T(t).getByRole(`button`,{name:`Draft`})),await S(D).toHaveBeenCalledWith(`draft`)}},j={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`result`,fixture:`C-3`,outcome:`away`}}),play:async()=>{let e=await k(`Portugal v Austria: Austria`);await S(T(e).getByRole(`button`,{name:`Lock`})).toBeVisible(),await S(T(e).getByRole(`button`,{name:`Remove draft`})).toBeVisible(),await S(T(e).queryByRole(`button`,{name:`Draft`})).toBeNull()}},M={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`result`,fixture:`B-4`,outcome:`draw`}}),play:async()=>{let e=await k(`Serbia v Türkiye: Draw`);await S(e).toHaveTextContent(`Locked`),await S(T(e).queryByRole(`button`,{name:`Lock`})).toBeNull(),await S(T(e).queryByRole(`button`,{name:`Draft`})).toBeNull()}},N={loaders:[async()=>({s:h((await m(`morning`)()).s,`2028-06-15T11:01:00Z`)})],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`result`,fixture:`C-4`,outcome:`away`}}),play:async()=>{let e=await k(`Germany v Poland: Poland`);await S(T(e).queryByRole(`button`,{name:`Lock`})).toBeNull()}},P={loaders:[m(`knockouts`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`knockout`,fixture:`M37`,outcome:`draw-home`}}),play:async()=>{await S(await k(`Spain v Austria: Draw, then Spain through`)).toBeVisible()}},F={loaders:[m(`eve`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`champion`,team:`CH`}}),play:async()=>{let e=await k(`Your champion: Switzerland`);await S(T(e).getByRole(`button`,{name:`Remove draft`})).toBeVisible()}},I={loaders:[m(`knockouts`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`tokens`,fixture:`M38`,team:`IT`}}),play:async()=>{let e=await k(`Italy v England: tokens on Italy`);await S(e).toHaveTextContent(`+43.2 per goal of winning margin`),await S(e).toHaveTextContent(`−1.8 per goal of losing margin`),await S(e).not.toHaveTextContent(/of \d+ locked/)}},L={loaders:[async()=>{let{s:e}=await m(`knockouts`)(),t=[...e.absences,{fixture:`M37`,player:`es-mikel-oyarzabal`,out:`suspended`,reason:`Yellow Cards`,since:Date.parse(`2028-06-22T20:00:00Z`)}];return{s:{...e,absences:t}}}],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`scorer`,round:`R16`,player:`es-mikel-oyarzabal`}}),play:async()=>{let e=await k(`Spain v Austria: Mikel Oyarzabal`);await S(T(e).getByTestId(`points`)).toHaveTextContent(`24 pts a goal`),await S(T(e).getByText(`Each goal in the 90 minutes`).parentElement).toHaveTextContent(`Each goal in the 90 minutes+24`),await S(T(e).getByText(`No goal`).parentElement).toHaveTextContent(`No goal0`),await S(T(e).getByText(`Suspended for Spain v Austria: yellow cards. Pick him anyway?`)).toBeVisible()}},R={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`result`,fixture:`C-4`,outcome:`away`},refusal:`That price has moved: 57 pts now`}),play:async()=>{let e=await k(`Germany v Poland: Poland`);await S(T(e).getByRole(`alert`)).toHaveTextContent(`That price has moved: 57 pts now`)}},z={loaders:[m(`morning`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`result`,fixture:`C-4`,outcome:`away`},history:!0}),play:async({userEvent:e})=>{await k(`Germany v Poland: Poland`),await e.click(O().getByRole(`button`,{name:`History`}));let t=await k(`The odds over time`);await S(await T(t).findByRole(`img`,{name:/The odds over time: Germany, Draw, Poland/})).toBeVisible(),await e.click(O().getByRole(`button`,{name:`Back`})),await w(()=>S(O().getByRole(`dialog`,{name:`Germany v Poland: Poland`})).toBeVisible())}},B={loaders:[async()=>{let{s:e}=await m(`morning`)();return{s:{...e,priceHistory:e.priceHistory.filter(e=>e.fixture!==`D-3`)}}}],render:(e,{loaded:t})=>(0,x.jsx)(y,{s:t.s,selection:{kind:`result`,fixture:`D-3`,outcome:`home`},history:!0}),play:async({userEvent:e})=>{let t=await O().findByRole(`dialog`);await e.click(T(t).getByRole(`button`,{name:`History`})),await w(()=>S(O().getByText(`No odds history yet`)).toBeVisible())}},V=[`OpenOption`,`Drafted`,`Locked`,`PastTheDeadline`,`KnockoutEnding`,`Champion`,`Tokens`,`Warning`,`Refused`,`PriceLayer`,`NoHistory`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "result",
    fixture: "C-4",
    outcome: "away"
  }} />,
  play: async ({
    userEvent
  }) => {
    acted.mockClear();
    // Named as before for screen readers; on screen, the match and its kickoff small over the option (the owner, 28 Oct).
    const sheet = await dialog("Germany v Poland: Poland");
    const heading = sheet.querySelector<HTMLElement>("[data-sheet-title]")!;
    await expect(within(heading).getByText("Germany v Poland, 20:00")).toBeVisible();
    await expect(within(heading).getByText("Poland")).toBeVisible();
    await expect(within(sheet).getByTestId("points")).toHaveTextContent("57 pts");
    await expect(sheet).toHaveTextContent("Est. 17%");
    // What it wins and loses, in words.
    await expect(within(sheet).getByText("Poland win").parentElement).toHaveTextContent("Poland win+57");
    await expect(within(sheet).getByText("Germany or a draw").parentElement).toHaveTextContent("Germany or a draw0");
    await expect(sheet).toHaveTextContent("Lock by 12:00 today");
    const buttons = within(sheet).getAllByRole("button").filter(b => ["Lock", "Draft"].includes(b.textContent ?? ""));
    await expect(buttons.map(b => b.textContent)).toEqual(["Lock", "Draft"]);
    for (const b of buttons) await thumbSized(b);
    await userEvent.click(within(sheet).getByRole("button", {
      name: "Draft"
    }));
    await expect(acted).toHaveBeenCalledWith("draft");
  }
}`,...A.parameters?.docs?.source},description:{story:`An open option on the morning: its points large, what it wins, Lock and Draft.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "result",
    fixture: "C-3",
    outcome: "away"
  }} />,
  play: async () => {
    const sheet = await dialog("Portugal v Austria: Austria");
    await expect(within(sheet).getByRole("button", {
      name: "Lock"
    })).toBeVisible();
    await expect(within(sheet).getByRole("button", {
      name: "Remove draft"
    })).toBeVisible();
    await expect(within(sheet).queryByRole("button", {
      name: "Draft"
    })).toBeNull();
  }
}`,...j.parameters?.docs?.source},description:{story:`Your draft, lockable: Lock and Remove draft.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "result",
    fixture: "B-4",
    outcome: "draw"
  }} />,
  play: async () => {
    const sheet = await dialog("Serbia v Türkiye: Draw");
    await expect(sheet).toHaveTextContent("Locked");
    await expect(within(sheet).queryByRole("button", {
      name: "Lock"
    })).toBeNull();
    await expect(within(sheet).queryByRole("button", {
      name: "Draft"
    })).toBeNull();
  }
}`,...M.parameters?.docs?.source},description:{story:`Locked: what it can win, no actions.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => ({
    s: later((await withMoment("morning")()).s, "2028-06-15T11:01:00Z")
  })],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "result",
    fixture: "C-4",
    outcome: "away"
  }} />,
  play: async () => {
    const sheet = await dialog("Germany v Poland: Poland");
    await expect(within(sheet).queryByRole("button", {
      name: "Lock"
    })).toBeNull();
  }
}`,...N.parameters?.docs?.source},description:{story:`A minute past the deadline, left open on the screen: nothing to do any more (Review Focus 3).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "knockout",
    fixture: "M37",
    outcome: "draw-home"
  }} />,
  play: async () => {
    await expect(await dialog("Spain v Austria: Draw, then Spain through")).toBeVisible();
  }
}`,...P.parameters?.docs?.source},description:{story:`A knockout's ending in the sheet's words.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "champion",
    team: "CH"
  }} />,
  play: async () => {
    const sheet = await dialog("Your champion: Switzerland");
    await expect(within(sheet).getByRole("button", {
      name: "Remove draft"
    })).toBeVisible();
  }
}`,...F.parameters?.docs?.source},description:{story:`Your champion on the eve: drafted, Lock and Remove draft.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "tokens",
    fixture: "M38",
    team: "IT"
  }} />,
  play: async () => {
    const sheet = await dialog("Italy v England: tokens on Italy");
    await expect(sheet).toHaveTextContent("+43.2 per goal of winning margin");
    await expect(sheet).toHaveTextContent("−1.8 per goal of losing margin");
    // Nobody's locks before the deadline: under a side, a lock is the choice itself (the owner, 28 Oct; was F75's
    // count of who had locked tokens on the match).
    await expect(sheet).not.toHaveTextContent(/of \\d+ locked/);
  }
}`,...I.parameters?.docs?.source},description:{story:`A token stack: what one token wins and loses per goal of margin.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => {
    const {
      s
    } = await withMoment("knockouts")();
    const absences = [...s.absences, {
      fixture: "M37",
      player: "es-mikel-oyarzabal",
      out: "suspended" as const,
      reason: "Yellow Cards",
      since: Date.parse("2028-06-22T20:00:00Z")
    }];
    return {
      s: {
        ...s,
        absences
      }
    };
  }],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "scorer",
    round: "R16",
    player: "es-mikel-oyarzabal"
  }} />,
  play: async () => {
    const sheet = await dialog("Spain v Austria: Mikel Oyarzabal");
    await expect(within(sheet).getByTestId("points")).toHaveTextContent("24 pts a goal");
    // A scorer's lines in words too (the owner, 28 Oct).
    await expect(within(sheet).getByText("Each goal in the 90 minutes").parentElement).toHaveTextContent("Each goal in the 90 minutes+24");
    await expect(within(sheet).getByText("No goal").parentElement).toHaveTextContent("No goal0");
    await expect(within(sheet).getByText("Suspended for Spain v Austria: yellow cards. Pick him anyway?")).toBeVisible();
  }
}`,...L.parameters?.docs?.source},description:{story:`A player who may not play: the warning above the actions.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "result",
    fixture: "C-4",
    outcome: "away"
  }} refusal="That price has moved: 57 pts now" />,
  play: async () => {
    const sheet = await dialog("Germany v Poland: Poland");
    await expect(within(sheet).getByRole("alert")).toHaveTextContent("That price has moved: 57 pts now");
  }
}`,...R.parameters?.docs?.source},description:{story:`A refusal shows inside the sheet, above the actions, as an alert.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "result",
    fixture: "C-4",
    outcome: "away"
  }} history />,
  play: async ({
    userEvent
  }) => {
    await dialog("Germany v Poland: Poland");
    // The chance is plain; History beside it opens the odds over time (the owner, 28 Oct).
    await userEvent.click(page().getByRole("button", {
      name: "History"
    }));
    const layer = await dialog("The odds over time");
    await expect(await within(layer).findByRole("img", {
      name: /The odds over time: Germany, Draw, Poland/
    })).toBeVisible();
    await userEvent.click(page().getByRole("button", {
      name: "Back"
    }));
    await waitFor(() => expect(page().getByRole("dialog", {
      name: "Germany v Poland: Poland"
    })).toBeVisible());
  }
}`,...z.parameters?.docs?.source},description:{story:`"Est." opens the odds over time one layer deeper, and Back returns.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => {
    const {
      s
    } = await withMoment("morning")();
    return {
      s: {
        ...s,
        priceHistory: s.priceHistory.filter(h => h.fixture !== "D-3")
      }
    };
  }],
  render: (_, {
    loaded
  }) => <Open s={(loaded as Loaded).s} selection={{
    kind: "result",
    fixture: "D-3",
    outcome: "home"
  }} history />,
  play: async ({
    userEvent
  }) => {
    const sheet = await page().findByRole("dialog");
    await userEvent.click(within(sheet).getByRole("button", {
      name: "History"
    }));
    // The layer slides in: visible once it has.
    await waitFor(() => expect(page().getByText("No odds history yet")).toBeVisible());
  }
}`,...B.parameters?.docs?.source},description:{story:`A match without a history yet: the layer says so instead of drawing nothing. The recording keeps every known
match's history (28 Oct), so France v Hungary's is dropped here.`,...B.parameters?.docs?.description}}}})))()}H();export{F as Champion,j as Drafted,P as KnockoutEnding,M as Locked,B as NoHistory,A as OpenOption,N as PastTheDeadline,z as PriceLayer,R as Refused,I as Tokens,L as Warning,V as __namedExportsOrder,E as default};
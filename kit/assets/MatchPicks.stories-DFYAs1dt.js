import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,o as r,t as i}from"./src-Ckdztxlk.js";import{i as a,r as o}from"./checks-CKr9wmxM.js";import{i as s,n as c,t as l}from"./moments-Cjxlj8DI.js";import{n as u,t as d}from"./Button-DV5UdU4K.js";import{n as f,t as p}from"./lock-BUrpKheq.js";import{n as m,t as h}from"./pencil-line-DFV8uCYy.js";import{n as g,t as _}from"./NumberText-ootfl7MU.js";import{r as v,t as y}from"./Flag-BoI2ifrp.js";import{n as b,t as x}from"./Sheet-BayhnjeB.js";import{i as S,n as C,r as w,t as T}from"./NotOpenRow-BB3fUOcV.js";function E({sheet:e,open:t,onOpenChange:n,onLock:r}){return(0,D.jsx)(x.Root,{open:t,onOpenChange:n,children:(0,D.jsxs)(x.Content,{children:[(0,D.jsx)(x.Header,{children:e.deadline.label}),(0,D.jsx)(x.Body,{children:(0,D.jsx)(`ul`,{className:`grid divide-y divide-line`,children:e.matches.map(e=>(0,D.jsxs)(`li`,{"aria-label":`${e.home.name} v ${e.away.name}`,className:`grid gap-2 py-3`,children:[(0,D.jsxs)(`span`,{className:`flex min-w-0 items-center gap-2 text-body font-semibold`,children:[(0,D.jsxs)(`span`,{className:`flex shrink-0 -space-x-1.5`,children:[(0,D.jsx)(y,{code:e.home.flag,size:16,alt:``}),(0,D.jsx)(y,{code:e.away.flag,size:16,alt:``})]}),(0,D.jsxs)(`span`,{className:`min-w-0`,children:[e.home.name,` v `,e.away.name]})]}),(0,D.jsx)(`ul`,{className:`grid gap-1.5`,children:e.picks.map(e=>(0,D.jsxs)(`li`,{className:`flex min-h-target items-center justify-between gap-2 rounded-tile bg-mine-soft px-3 text-label ring-2 ring-line-strong ring-inset`,children:[(0,D.jsxs)(`span`,{className:`flex min-w-0 items-center gap-1.5 font-semibold`,children:[(0,D.jsx)(h,{"aria-hidden":!0,size:14,strokeWidth:2.5,className:`shrink-0`}),(0,D.jsx)(`span`,{className:`min-w-0`,children:e.label})]}),e.points!==void 0&&(0,D.jsxs)(`span`,{className:`shrink-0`,children:[(0,D.jsx)(`span`,{className:`font-num font-bold`,children:e.points}),` pts`]})]},e.label))})]},e.id))})}),(0,D.jsx)(x.Footer,{children:(0,D.jsxs)(d,{wide:!0,onClick:r,children:[(0,D.jsx)(p,{"aria-hidden":!0,size:16,strokeWidth:2.5}),(0,D.jsx)(`span`,{children:(0,D.jsx)(_,{text:e.action})})]})})]})})}var D;function O(){return(O=e((()=>{f(),m(),u(),v(),g(),b(),D=t(),E.__docgenInfo={description:`What "Lock N" locks (the redesign): the drafts due at the next deadline, each with its pick and points, so you see
    the whole thing before one tap locks them all.`,methods:[],displayName:`LockSheet`,props:{sheet:{required:!0,tsType:{name:`LockSheetView`},description:``},open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean, details?: unknown) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`},{type:{name:`unknown`},name:`details`}],return:{name:`void`}}},description:``},onLock:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}function k({s:e}){let t=r(e);return(0,A.jsxs)(`div`,{className:`grid gap-6`,children:[t.days.map(e=>(0,A.jsx)(w,{day:e,onLock:F,onScorers:I,onTokens:L},e.at)),t.notOpen.length>0&&(0,A.jsx)(`ul`,{className:`grid gap-2`,children:t.notOpen.map(e=>(0,A.jsx)(T,{item:e},e.id))})]})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{i(),o(),l(),O(),S(),C(),A=t(),{expect:j,fn:M,within:N}=__STORYBOOK_MODULE_TEST__,P={title:`Domain/MatchPicks`,parameters:{layout:`padded`}},F=M(),I=M(),L=M(),R=()=>N(document.body),z=(e,t)=>N(e).getByRole(`region`,{name:t}),B={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,A.jsx)(k,{s:t.s}),play:async({canvasElement:e,userEvent:t})=>{F.mockClear(),I.mockClear();let n=z(e,`Today, 12:00`);await j(n.dataset.tone).toBe(`today`),await j(n).toHaveTextContent(`2 to lock`);let r=[...n.querySelectorAll(`[data-match]`)];await j(r.map(e=>e.dataset.match)).toEqual([`C-4`,`C-3`,`B-4`]),await j(N(n).getByText(`No pick`)).toBeVisible(),await t.click(N(n).getByRole(`button`,{name:`Lock Portugal v Austria`})),await j(F).toHaveBeenCalledWith(`C-3`),await j(N(n).queryByRole(`button`,{name:`Lock Serbia v Türkiye`})).toBeNull();let i=z(e,`Sun 18 Jun, 12:00`),o=N(i).getByRole(`button`,{name:/Sweden v Spain/});await j(o).toHaveAttribute(`aria-expanded`,`false`),await j(o).toHaveTextContent(`Sweden`),await j(N(i).queryByRole(`button`,{name:`Lock Sweden v Spain`})).toBeNull(),await t.click(o),await j(o).toHaveAttribute(`aria-expanded`,`true`),await t.click(N(i).getByRole(`button`,{name:`Scorers 3`})),await j(I).toHaveBeenCalledWith(`A-5`),await t.click(N(i).getByRole(`button`,{name:`Lock Sweden v Spain`})),await j(F).toHaveBeenLastCalledWith(`A-5`);let s=z(e,`Mon 19 Jun, 12:00`);await j(s).toHaveTextContent(`draft now`),await t.click(N(s).getAllByRole(`button`,{expanded:!1})[0]),await j(N(s).queryByRole(`button`,{name:/^Lock /})).toBeNull(),await a(e)}},V={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>(0,A.jsx)(k,{s:t.s}),play:async({canvasElement:e})=>{let t=z(e,`Today, 12:00`);await j(N(t).queryAllByRole(`group`,{name:`To go through`})).toHaveLength(0),await j(t).toHaveTextContent(`+110 through`),await j(z(e,`Tomorrow, 12:00`)).toHaveTextContent(`England`),await a(e)}},H={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,A.jsx)(k,{s:c(t.s,`2028-06-15T11:01:00Z`)}),play:async({canvasElement:e})=>{let t=e.querySelector(`section`);await j(t).toHaveAccessibleName(`Tomorrow, 12:00`),await j(t.querySelectorAll(`[data-match]`)).toHaveLength(3)}},U={loaders:[s(`morning`)],render:(e,{loaded:t})=>{let n=t.s;return(0,A.jsx)(k,{s:{...n,fixtures:n.fixtures.map(e=>e.id===`F-6`?{...e,draftingFrom:Date.parse(`2028-06-18T11:00:00Z`)}:e)}})},play:async({canvas:e})=>{let t=e.getByRole(`listitem`,{name:`Czechia v Denmark`});await j(t).toHaveTextContent(`Opens when prices are available, by Sun 18 Jun, 12:00 at the latest`)}},W={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,A.jsx)(E,{sheet:n(t.s),open:!0,onOpenChange:()=>{},onLock:F}),play:async({userEvent:e})=>{F.mockClear();let t=await R().findByRole(`dialog`,{name:`Lock by 12:00 today`}),n=N(t).getByRole(`listitem`,{name:`Portugal v Austria`});await j(n).toHaveTextContent(`Portugal`),await j(n).toHaveTextContent(`18 pts`),await e.click(N(t).getByRole(`button`,{name:`Lock 1`})),await j(F).toHaveBeenCalledOnce()}},G={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>(0,A.jsx)(E,{sheet:n(t.s),open:!0,onOpenChange:()=>{},onLock:F}),play:async()=>{let e=await R().findByRole(`dialog`,{name:`Lock by 12:00 today`});await j(N(e).getAllByRole(`listitem`,{name:/v/})).toHaveLength(2),await j(e).toHaveTextContent(`Spain to go through`),await j(N(e).getByRole(`button`,{name:`Lock 2`})).toBeVisible()}},K=[`Morning`,`Knockouts`,`PastNoon`,`NotOpen`,`LockSheetMorning`,`LockSheetKnockouts`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    const sweden = within(sunday).getByRole("button", {
      name: /Sweden v Spain/
    });
    await expect(sweden).toHaveAttribute("aria-expanded", "false");
    await expect(sweden).toHaveTextContent("Sweden");
    await expect(within(sunday).queryByRole("button", {
      name: "Lock Sweden v Spain"
    })).toBeNull();
    await userEvent.click(sweden);
    await expect(sweden).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(within(sunday).getByRole("button", {
      name: "Scorers 3"
    }));
    await expect(scorers).toHaveBeenCalledWith("A-5");
    await userEvent.click(within(sunday).getByRole("button", {
      name: "Lock Sweden v Spain"
    }));
    await expect(locked).toHaveBeenLastCalledWith("A-5");
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
}`,...B.parameters?.docs?.source},description:{story:`The morning: today's three as full cards (to pick, draft, locked), later days as rows that open into a card.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    await expect(today).toHaveTextContent("+110 through");
    await expect(day(canvasElement, "Tomorrow, 12:00")).toHaveTextContent("England");
    await noSidewaysScroll(canvasElement);
  }
}`,...V.parameters?.docs?.source},description:{story:`The round of 16: both picks on a tie, in the full card and in a row.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`One minute past noon: tomorrow's are now the full cards.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
  }
}`,...U.parameters?.docs?.source},description:{story:`A match not open yet, with why.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    await expect(match).toHaveTextContent("Portugal");
    await expect(match).toHaveTextContent("18 pts");
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Lock 1"
    }));
    await expect(locked).toHaveBeenCalledOnce();
  }
}`,...W.parameters?.docs?.source},description:{story:`"Lock 1" on the morning: the one draft due, its pick and points, one tap to lock.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <LockSheet sheet={lockSheet((loaded as Loaded).s)!} open onOpenChange={() => {}} onLock={locked} />,
  play: async () => {
    const dialog = await page().findByRole("dialog", {
      name: "Lock by 12:00 today"
    });
    await expect(within(dialog).getAllByRole("listitem", {
      name: /v/
    })).toHaveLength(2);
    await expect(dialog).toHaveTextContent("Spain to go through");
    await expect(within(dialog).getByRole("button", {
      name: "Lock 2"
    })).toBeVisible();
  }
}`,...G.parameters?.docs?.source},description:{story:`"Lock 2" in the round of 16: each tie's result and who goes through.`,...G.parameters?.docs?.description}}}})))()}q();export{V as Knockouts,G as LockSheetKnockouts,W as LockSheetMorning,B as Morning,U as NotOpen,H as PastNoon,K as __namedExportsOrder,P as default};
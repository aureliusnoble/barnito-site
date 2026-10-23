import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r,x as i}from"./src-Ckdztxlk.js";import{a,r as o}from"./checks-CKr9wmxM.js";import{i as s,t as c}from"./moments-Cjxlj8DI.js";import{r as l,t as u}from"./Flag-BoI2ifrp.js";import{n as d,t as f}from"./Delta-BLQxyyJa.js";import{n as p,t as m}from"./Sheet-BayhnjeB.js";function h({recap:e,open:t,onOpenChange:n,onOpen:r}){return(0,g.jsx)(m.Root,{open:t,onOpenChange:n,children:(0,g.jsxs)(m.Content,{children:[(0,g.jsx)(m.Header,{children:e.day}),(0,g.jsx)(m.Body,{children:(0,g.jsxs)(`div`,{className:`grid grid-cols-1 gap-3`,children:[(0,g.jsx)(`span`,{className:`text-score`,children:(0,g.jsx)(f,{value:e.points,unit:`pts`})}),(0,g.jsx)(`ul`,{className:`grid grid-cols-1 divide-y divide-line`,children:e.matches.map(e=>{let t=`${e.home.name} ${e.score?.home??0}–${e.score?.away??0} ${e.away.name}`,n=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`span`,{className:`flex shrink-0 -space-x-1.5`,children:[(0,g.jsx)(u,{code:e.home.flag,size:16,alt:``}),(0,g.jsx)(u,{code:e.away.flag,size:16,alt:``})]}),(0,g.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-label font-semibold`,children:t}),e.yours===void 0?(0,g.jsx)(`span`,{className:`shrink-0 text-label font-semibold text-fg-muted`,children:`No pick`}):(0,g.jsx)(`span`,{className:`shrink-0 text-label`,children:(0,g.jsx)(f,{value:e.yours})})]});return(0,g.jsx)(`li`,{children:r?(0,g.jsx)(`button`,{type:`button`,onClick:()=>r(e.id),className:`flex min-h-target w-full min-w-0 items-center gap-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-fg`,children:n}):(0,g.jsx)(`div`,{className:`flex min-h-target min-w-0 items-center gap-2`,children:n})},e.id)})})]})})]})})}var g;function _(){return(_=e((()=>{d(),l(),p(),g=t(),h.__docgenInfo={description:`The last match day's summary, a pop-up on the first open of the day (the redesign): your points from it, large,
    and each match with its score and your points on it. Points and results only; closed with ×. The app decides when
    it opens.`,methods:[],displayName:`SummaryPopup`,props:{recap:{required:!0,tsType:{name:`RecapView`},description:``},open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean, details?: unknown) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`},{type:{name:`unknown`},name:`details`}],return:{name:`void`}}},description:``},onOpen:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: FixtureId) => void`,signature:{arguments:[{type:{name:`FixtureId`},name:`id`}],return:{name:`void`}}},description:``}}}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{r(),o(),c(),_(),v=t(),{expect:y,fn:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Domain/SummaryPopup`,parameters:{layout:`padded`}},w=()=>S(document.body),T=(e,t)=>S(e).getAllByRole(`listitem`).find(e=>e.textContent?.includes(t)),E=b(),D=b(),O={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,v.jsx)(h,{recap:i(t.s),open:!0,onOpenChange:E,onOpen:D}),play:async({userEvent:e})=>{E.mockClear(),D.mockClear();let t=await w().findByRole(`dialog`,{name:`Yesterday`});await y(t).toHaveTextContent(`+48 pts`),await y(T(t,`England`)).toHaveTextContent(`England 0–0 Croatia`),await y(T(t,`England`)).toHaveTextContent(`+55`),await y(T(t,`Spain`)).toHaveTextContent(`−7`),await y(t).not.toHaveTextContent(`6th`),await e.click(S(T(t,`England`)).getByRole(`button`)),await y(D).toHaveBeenCalledWith(`B-3`);let n=S(t).getByRole(`button`,{name:`Close`});await a(n),await e.click(n),await x(()=>y(E).toHaveBeenCalledWith(!1,y.anything()))}},k={loaders:[s(`night`)],render:(e,{loaded:t})=>(0,v.jsx)(h,{recap:i(t.s),open:!0,onOpenChange:()=>{}}),play:async()=>{let e=await w().findByRole(`dialog`,{name:`Today`});await y(e).toHaveTextContent(`+41 pts`),await y(T(e,`Germany`)).toHaveTextContent(`No pick`)}},A={render:()=>{let e=[`A-3`,`A-4`,`B-3`],t=n(t=>t.picks=t.picks.filter(n=>n.user!==t.you||!e.includes(n.fixture??``)));return(0,v.jsx)(h,{recap:i(t),open:!0,onOpenChange:()=>{}})},play:async()=>{let e=await w().findByRole(`dialog`);await y(S(e).getAllByText(`No pick`)).toHaveLength(3)}},j={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,v.jsx)(h,{recap:{...i(t.s),points:1240},open:!0,onOpenChange:()=>{}}),play:async()=>{await y(await w().findByRole(`dialog`,{name:`Yesterday`})).toHaveTextContent(`+1,240 pts`)}},M={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,v.jsx)(h,{recap:i(t.s),open:!1,onOpenChange:()=>{}}),play:async()=>{await y(w().queryByRole(`dialog`)).toBeNull()}},N=[`Morning`,`Night`,`AllMissed`,`BigDay`,`Closed`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <SummaryPopup recap={recap((loaded as Loaded).s)!} open onOpenChange={closed} onOpen={opened} />,
  play: async ({
    userEvent
  }) => {
    closed.mockClear();
    opened.mockClear();
    const dialog = await page().findByRole("dialog", {
      name: "Yesterday"
    });
    await expect(dialog).toHaveTextContent("+48 pts");
    await expect(row(dialog, "England")).toHaveTextContent("England 0–0 Croatia");
    await expect(row(dialog, "England")).toHaveTextContent("+55");
    await expect(row(dialog, "Spain")).toHaveTextContent("−7");
    // Points and results only: no place.
    await expect(dialog).not.toHaveTextContent("6th");
    await userEvent.click(within(row(dialog, "England")).getByRole("button"));
    await expect(opened).toHaveBeenCalledWith("B-3");
    const close = within(dialog).getByRole("button", {
      name: "Close"
    });
    await thumbSized(close);
    await userEvent.click(close);
    await waitFor(() => expect(closed).toHaveBeenCalledWith(false, expect.anything()));
  }
}`,...O.parameters?.docs?.source},description:{story:`The first open on a match-day morning: yesterday's points and results only (the redesign).`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <SummaryPopup recap={recap((loaded as Loaded).s)!} open onOpenChange={() => {}} />,
  play: async () => {
    const dialog = await page().findByRole("dialog", {
      name: "Today"
    });
    await expect(dialog).toHaveTextContent("+41 pts");
    await expect(row(dialog, "Germany")).toHaveTextContent("No pick");
  }
}`,...k.parameters?.docs?.source},description:{story:`That night, once the day's last match is over.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const missed = ["A-3", "A-4", "B-3"];
    const s = buildSnapshot(s => s.picks = s.picks.filter(p => p.user !== s.you || !missed.includes(p.fixture ?? "")));
    return <SummaryPopup recap={recap(s)!} open onOpenChange={() => {}} />;
  },
  play: async () => {
    const dialog = await page().findByRole("dialog");
    await expect(within(dialog).getAllByText("No pick")).toHaveLength(3);
  }
}`,...A.parameters?.docs?.source},description:{story:`A day you missed entirely.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <SummaryPopup recap={{
    ...recap((loaded as Loaded).s)!,
    points: 1240
  }} open onOpenChange={() => {}} />,
  play: async () => {
    await expect(await page().findByRole("dialog", {
      name: "Yesterday"
    })).toHaveTextContent("+1,240 pts");
  }
}`,...j.parameters?.docs?.source},description:{story:`A big day: four digits.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <SummaryPopup recap={recap((loaded as Loaded).s)!} open={false} onOpenChange={() => {}} />,
  play: async () => {
    await expect(page().queryByRole("dialog")).toBeNull();
  }
}`,...M.parameters?.docs?.source},description:{story:`Closed: nothing on the page.`,...M.parameters?.docs?.description}}}})))()}P();export{A as AllMissed,j as BigDay,M as Closed,O as Morning,k as Night,N as __namedExportsOrder,C as default};
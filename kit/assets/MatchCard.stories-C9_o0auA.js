import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{C as r,n as i,p as a,t as ee}from"./src-Ckdztxlk.js";import{a as te,i as o,r as ne}from"./checks-CKr9wmxM.js";import{i as s,n as re,t as ie}from"./moments-Cjxlj8DI.js";import{i as ae,n as c,r as l,t as u}from"./MatchCard-DjdgOBos.js";import{r as oe,t as se}from"./Avatar-DvpBdAlw.js";import{n as d,t as ce}from"./Delta-BLQxyyJa.js";import{n as le,t as ue}from"./OptionTile-DbObekZc.js";import{n as de,t as f}from"./Sheet-BayhnjeB.js";function p({tally:e}){return(0,m.jsxs)(`ul`,{"aria-label":`Who earned what`,className:`flex min-w-0 flex-wrap items-center gap-2`,children:[e.people.filter(t=>e.top.includes(t.user)).map(e=>(0,m.jsxs)(`li`,{"data-person":e.name,className:`inline-flex min-w-0 items-center gap-1.5 rounded-chip bg-surface-sunken py-1 pr-2.5 pl-1 text-label`,children:[(0,m.jsx)(se,{name:e.name,you:e.you,size:24}),(0,m.jsx)(`span`,{className:`max-w-28 truncate font-semibold`,children:e.name}),(0,m.jsx)(ce,{value:e.points})]},e.user)),e.people.length>e.top.length&&(0,m.jsxs)(`li`,{className:`text-label font-semibold text-fg-muted`,children:[`+`,(0,m.jsx)(`span`,{className:`font-num`,children:e.people.length-e.top.length}),` more`]})]})}var m;function h(){return(h=e((()=>{oe(),d(),m=n(),p.__docgenInfo={description:`Who earned what on a match as chips (the first design, kept to compare with the bars, 23 Oct): each friend's points,
    and how many more.`,methods:[],displayName:`EarnedChips`,props:{tally:{required:!0,tsType:{name:`Tally`},description:``}}}})))()}function g({card:e,open:t,onOpenChange:n,onPick:r}){return e.qualify?(0,_.jsx)(f.Root,{open:t,onOpenChange:n,children:(0,_.jsxs)(f.Content,{children:[(0,_.jsx)(f.Header,{children:`Who goes through?`}),(0,_.jsx)(f.Body,{children:(0,_.jsxs)(`div`,{className:`grid gap-3`,children:[(0,_.jsxs)(`p`,{className:`text-label text-fg-muted`,children:[e.home.name,` v `,e.away.name,`, a draw after 90 minutes, then`]}),(0,_.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:e.qualify.map(e=>(0,_.jsx)(ue,{option:e,...r&&{onSelect:r}},e.label))})]})})]})}):null}var _;function v(){return(v=e((()=>{de(),le(),_=n(),g.__docgenInfo={description:`A knockout's draw (the owner, 23 Oct): who goes through, after the 90 minutes, each with what it adds. A side's pick
    includes it going through, so only the draw asks.`,methods:[],displayName:`ThroughSheet`,props:{card:{required:!0,tsType:{name:`MatchCardView`},description:``},open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean, details?: unknown) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`},{type:{name:`unknown`},name:`details`}],return:{name:`void`}}},description:``},onPick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(option: OptionView) => void`,signature:{arguments:[{type:{name:`OptionView`},name:`option`}],return:{name:`void`}}},description:``}}}})))()}function y({cards:e}){return(0,x.jsx)(`div`,{className:`grid gap-3`,children:e.map(e=>(0,x.jsx)(u,{card:e,onOpen:()=>{}},e.id))})}function fe({card:e}){let[t,n]=(0,b.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u,{card:e,onOption:e=>e.label===`Draw`&&n(!0)}),(0,x.jsx)(g,{card:e,open:t,onOpenChange:n,onPick:e=>O(e.label)})]})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ee(),b=t(),ne(),ie(),c(),h(),ae(),v(),x=n(),{expect:S,fn:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Domain/MatchCard`,parameters:{layout:`padded`}},E=e=>(a(e)?.matches??[]).map(t=>r(e,e.fixtures.find(e=>e.id===t.id))),D=(e,t)=>r(e,e.fixtures.find(e=>e.id===t)),O=C(),k=(e,t)=>e.querySelector(`[data-match="${t}"]`),A=e=>[...e.querySelectorAll(`[data-state]`)],j={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{cards:E(t.s)}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-match]`);await S(t.dataset.match).toBe(`C-4`),await S(t).toHaveTextContent(`Germany v Poland`),await S(t).toHaveTextContent(`20:00`),await S(A(t)[0]).toHaveTextContent(`Germany`),await S(A(t)[0]).toHaveTextContent(`18pts`),await S(A(t)[0]).toHaveTextContent(`Est. 56%`),await S(t).toHaveTextContent(`8 of 9 locked`),await S(t).toHaveTextContent(`To pick`);let n=k(e,`C-3`);await S(A(n)[0]).toHaveAttribute(`data-state`,`drafted`),await S(n).toHaveTextContent(`Draft`);let r=k(e,`B-4`);await S(A(r).map(e=>e.dataset.state)).toEqual([`closed`,`closed`,`locked`]),await S(r).toHaveTextContent(`Locked`);for(let t of w(e).getAllByRole(`button`))await te(t);await o(e)}},M={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{cards:E(t.s)}),play:async({canvasElement:e})=>{let t=k(e,`M37`);await S(w(t).queryByRole(`group`,{name:`To go through`})).toBeNull();let[n,r,i]=A(t);await S(n).toHaveTextContent(`+13 through`),await S(i).toHaveTextContent(`+110 through`),await S(r.querySelector(`[data-then]`)).toHaveTextContent(`Spain`),await o(e)}},N=(e,t)=>D(t?e:{...e,picks:e.picks.filter(t=>t.user!==e.you||t.kind!==`qualify`||t.fixture!==`M37`)},`M37`),P={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{cards:[N(t.s,!0)]}),play:async({canvasElement:e})=>{let t=A(k(e,`M37`))[1],n=t.querySelector(`[data-then]`);await S(n.dataset.then).toBe(`home`),await S(n).toHaveTextContent(`Spain`),await S(n).toHaveTextContent(`+13`),await S(n).toHaveTextContent(/Est\. \d+%/),await S(t).not.toHaveTextContent(`Who goes through?`),await o(e)}},F={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{cards:[N(t.s,!1)]}),play:async({canvasElement:e})=>{let t=k(e,`M37`);await S(A(t)[1]).toHaveTextContent(`Who goes through?`),await S(A(t)[1]).toHaveTextContent(`◀ +13`),await S(A(t)[1]).toHaveTextContent(`+110 ▶`),await S(A(t)[1]).toHaveAccessibleName(/then \+13 or \+110 to go through/),await S(t).toHaveTextContent(`To pick`),await o(e)}},I={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>(0,x.jsx)(fe,{card:D(t.s,`M37`)}),play:async({canvasElement:e,userEvent:t})=>{O.mockClear(),await t.click(A(k(e,`M37`))[1]);let n=await w(document.body).findByRole(`dialog`,{name:`Who goes through?`}),[r,i]=w(n).getAllByRole(`button`).filter(e=>e.dataset.state);await S(r).toHaveTextContent(`13pts`),await S(i).toHaveTextContent(`110pts`),await t.click(i),await S(O).toHaveBeenCalledWith(`Austria`)}},L=[`Lou`,`Bea`,`Femi`,`Grace Okafor`,`Hugo`,`Ines`,`Jules`,`Kemi`,`Leo`,`Maya Patel`,`Nico`,`Ola`,`Pip`,`Quinn`,`Rosa`,`Theo`,`Uma`],R={render:()=>{let e=i(e=>{e.teams.find(e=>e.id===`EN`).name=`Bosnia and Herzegovina`,e.teams.find(e=>e.id===`DK`).name=`Republic of Ireland`,e.prices=e.prices.filter(e=>e.fixture!==`C-3`),e.members.push(...L.map((e,t)=>({id:`m${t}`,name:e,active:!0})));let t=e.members.filter(t=>t.id!==e.you).map(e=>e.id);e.lockers=[{fixture:`C-4`,kind:`result`,users:t}],e.counts=[...e.counts.filter(e=>e.fixture!==`C-4`),{fixture:`C-4`,kind:`result`,locked:t.length,drafting:0,members:e.members.length}]});return(0,x.jsx)(y,{cards:E(e)})},play:async({canvasElement:e})=>{await S(e).toHaveTextContent(`Bosnia and Herzegovina v Republic of Ireland`),await S(w(k(e,`C-3`)).getAllByLabelText(`no price yet`)).toHaveLength(3);let t=k(e,`C-4`);await S(t).toHaveTextContent(`19 of 20 locked`),await S(t.querySelectorAll(`[data-avatar]`)).toHaveLength(4),await S(t).toHaveTextContent(`+15`),await o(e)}},z={render:()=>{let e=i(e=>{let t=e.fixtures.find(e=>e.id===`C-4`);e.fixtures.push({...t,id:`C-5`,home:`FR`,away:`BE`,kickoff:Date.parse(`2028-06-16T01:00:00Z`)})});return(0,x.jsx)(y,{cards:E(e).filter(e=>e.id===`C-5`)})},play:async({canvasElement:e})=>{await S(k(e,`C-5`)).toHaveTextContent(`Tomorrow 02:00`)}},B={loaders:[s(`morning`)],render:(e,{loaded:t})=>{let n=re(t.s,`2028-06-15T11:01:00Z`);return(0,x.jsx)(y,{cards:[r(n,n.fixtures.find(e=>e.id===`C-4`))]})},play:async({canvasElement:e})=>{let t=k(e,`C-4`);await S(t.dataset.phase).toBe(`locked`),await S(A(t)).toEqual([]),await S(t).toHaveTextContent(`No pick`)}},V=(e,t)=>e.querySelector(`[data-column="${t}"]`),H={loaders:[s(`reveal`)],render:(e,{loaded:t})=>{let n=t.s;return(0,x.jsx)(y,{cards:[`C-4`,`B-4`].map(e=>D(n,e))})},play:async({canvas:e,canvasElement:t})=>{let n=k(t,`C-4`);await S(n.dataset.phase).toBe(`locked`),await S(n).toHaveTextContent(`Group C`),await S(n).toHaveTextContent(`20:00`),await S(w(n).getByRole(`img`,{name:`5 Germany, 2 Draw, 1 Poland`})).toBeVisible(),await S(V(n,`home`)).toHaveTextContent(`19pts`),await S(V(n,`home`)).toHaveTextContent(`5`),await S(V(n,`away`)).toHaveTextContent(`47pts`),await S(n).toHaveTextContent(`Hot take`),await S(n).toHaveTextContent(`Tom alone backs Poland`),await S(w(n).getByRole(`img`,{name:`3 chillies`})).toBeVisible();let r=k(t,`B-4`);await S(V(r,`away`)).toHaveAttribute(`data-yours`),await S(V(r,`draw`)).not.toHaveAttribute(`data-yours`),await S(e.getByRole(`button`,{name:`Germany v Poland`})).toBeVisible(),await o(t)}},U={loaders:[s(`morning`)],render:(e,{loaded:t})=>{let n=t.s,r={...n,now:Date.parse(`2028-06-14T11:30:00Z`),fixtures:n.fixtures.map(e=>e.id===`A-3`?{...e,status:`scheduled`,score:void 0,result:void 0}:e)};return(0,x.jsx)(y,{cards:[D(r,`A-3`)]})},play:async({canvasElement:e})=>{let t=k(e,`A-3`),n=[...t.querySelectorAll(`[data-badge]`)];await S(n.map(e=>e.dataset.badge)).toEqual([`all-in`,`all-in`]),await S(n[0]).toHaveTextContent(`All-in`),await S(n[0]).toHaveTextContent(`You, Ana, Kit and 3 more on Italy`),await S(n[1]).toHaveTextContent(`Jonny on Spain: 4 tokens`),await S(t).toHaveTextContent(`+14 more`),await o(e)}},W=e=>[...e.querySelectorAll(`[data-person]`)].map(e=>[e.dataset.person,e.dataset.points]),G={loaders:[s(`live`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{cards:[D(t.s,`C-3`)]}),play:async({canvas:e,canvasElement:t})=>{let n=k(t,`C-3`);await S(n.dataset.phase).toBe(`live`),await S(n).toHaveTextContent(`Live 67′`),await S(n).toHaveTextContent(`Portugal 0, Austria 1`),await S(w(n).queryByRole(`list`,{name:`Austria's goals`})).toBeNull(),await S(w(n).getByRole(`img`,{name:`6 Portugal, 1 Draw, 2 Austria`})).toBeVisible(),await S(V(n,`away`)).toHaveAttribute(`data-leading`);let r=w(n).getByRole(`list`,{name:`As it stands`});await S(W(r)).toEqual([[`Kit`,`61`],[`Priya Shah`,`61`]]),await S(getComputedStyle(n).boxShadow).not.toBe(`none`),await S(e.getByRole(`button`,{name:`Portugal v Austria`})).toBeVisible(),await o(t)}},K={loaders:[s(`night`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{cards:[D(t.s,`C-4`)]}),play:async({canvasElement:e})=>{let t=k(e,`C-4`);await S(t.dataset.phase).toBe(`full time`),await S(t).toHaveTextContent(`FT`),await S(t).toHaveTextContent(`Germany 2, Poland 3`),await S(w(t).queryByRole(`list`,{name:`Poland's goals`})).toBeNull(),await S(w(t).getByRole(`img`,{name:`5 Germany, 2 Draw, 1 Poland`})).toBeVisible(),await S(W(w(t).getByRole(`list`,{name:`Who earned what`}))).toEqual([[`Tom`,`47`]]),await o(e)}},q={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,x.jsx)(y,{cards:[D(t.s,`A-3`)]}),play:async({canvasElement:e,userEvent:t})=>{let n=k(e,`A-3`),r=w(n).getByRole(`list`,{name:`Who earned what`});await S(W(r).map(([e])=>e)).toEqual([`Jonny`,`Raj`,`Alex`,`Priya Shah`]);let i=w(n).getByRole(`button`,{name:`Show all 9`});await S(i).toHaveAttribute(`aria-expanded`,`false`),await t.click(i),await S(W(r).map(([e])=>e)).toEqual([`Jonny`,`Raj`,`Sam`,`Mel`,`Ana`,`Tom`,`Alex`,`Kit`,`Priya Shah`]),await S(w(n).getByRole(`button`,{name:`Show fewer`})).toHaveAttribute(`aria-expanded`,`true`);let a=e=>r.querySelector(`[data-person="${e}"] [data-bar]`);await S(a(`Jonny`).dataset.bar).toBe(`gain`),await S(a(`Alex`).dataset.bar).toBe(`loss`),await S(a(`Jonny`).getBoundingClientRect().width).toBeGreaterThan(a(`Raj`).getBoundingClientRect().width),await o(e)}},J={render:()=>{let e=i(e=>{L.slice(0,17).forEach((t,n)=>{e.members.push({id:`m${n}`,name:t,active:!0}),e.points.push({pick:`x${n}`,user:`m${n}`,fixture:`A-3`,points:100+n})}),e.members.push({id:`m17`,name:`Priya Shah-Okonkwo`,active:!0}),e.points.push({pick:`x17`,user:`m17`,fixture:`A-3`,points:1240})});return(0,x.jsx)(y,{cards:[D(e,`A-3`)]})},play:async({canvasElement:e,userEvent:t})=>{let n=k(e,`A-3`),r=w(n).getByRole(`list`,{name:`Who earned what`});await S(r.querySelectorAll(`[data-person]`)).toHaveLength(3),await S(r).toHaveTextContent(`+1,240`),await t.click(w(n).getByRole(`button`,{name:`Show all 19`})),await S(r.querySelectorAll(`[data-person]`)).toHaveLength(19),await o(e)}},Y={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>{let n=t.s,r=e=>({...n,now:Date.parse(`2028-06-24T17:30:00Z`),fixtures:n.fixtures.map(t=>t.id===`M37`?{...t,status:`live`,...e}:t),picks:n.picks.map(e=>e.user===n.you&&e.fixture===`M37`?{...e,status:`locked`,numbers:e.kind===`result`?{prob:.15,points:150}:{prob:.9,points:13}}:e)});return(0,x.jsx)(y,{cards:[D(r({minute:105,score:{home:2,away:1},result:{ft:{home:1,away:1}}}),`M37`),D(r({minute:120,score:{home:1,away:1},result:{ft:{home:1,away:1},aet:{home:1,away:1},pens:{home:2,away:3}}}),`M37`)]})},play:async({canvasElement:e})=>{let[t,n]=[...e.querySelectorAll(`[data-match="M37"]`)];await S(t).toHaveTextContent(`ET 105′`),await S(V(t,`draw`)).toHaveAttribute(`data-leading`),await S(W(w(t).getByRole(`list`,{name:`As it stands`}))).toEqual([[`Alex`,`163`]]),await S(n).toHaveTextContent(`Pens 2–3`),await S(W(w(n).getByRole(`list`,{name:`As it stands`}))).toEqual([[`Alex`,`150`]]),await o(e)}},X={loaders:[s(`morning`)],render:(e,{loaded:t})=>{let n=t.s,r={...n,fixtures:n.fixtures.map(e=>({...e,channel:e.kickoff%2==0?`BBC One`:`ITV1`}))};return(0,x.jsx)(y,{cards:[`C-4`,`C-3`].map(e=>D(r,e))})},play:async({canvasElement:e})=>{for(let t of[`C-4`,`C-3`]){let n=k(e,t).querySelector(`[data-channel]`);await S(n).not.toBeNull(),await S(n.textContent).toMatch(/^(BBC One|ITV1)$/)}await o(e)}},Z={loaders:[s(`morning`)],render:(e,{loaded:t})=>{let n=D(t.s,`A-3`).tally;return(0,x.jsxs)(`div`,{className:`grid gap-6`,children:[(0,x.jsx)(`h2`,{className:`text-body font-bold`,children:`Bars`}),(0,x.jsx)(l,{tally:n}),(0,x.jsx)(`h2`,{className:`text-body font-bold`,children:`Either side of zero`}),(0,x.jsx)(l,{tally:n,layout:`diverging`}),(0,x.jsx)(`h2`,{className:`text-body font-bold`,children:`Chips`}),(0,x.jsx)(p,{tally:n})]})},play:async({canvasElement:e})=>o(e)},Q=[`Morning`,`Knockouts`,`DrawWithDirection`,`DrawNeedsDirection`,`DrawAsksWhoGoesThrough`,`Long`,`SmallHours`,`PastNoon`,`Reveal`,`Badges`,`Live`,`FullTime`,`FullTimeYou`,`TwentyAtFullTime`,`KnockoutLive`,`Channel`,`EarnedChoices`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Deck cards={deck((loaded as Loaded).s)} />,
  play: async ({
    canvasElement
  }) => {
    const first = canvasElement.querySelector<HTMLElement>("[data-match]")!;
    await expect(first.dataset.match).toBe("C-4");
    await expect(first).toHaveTextContent("Germany v Poland");
    await expect(first).toHaveTextContent("20:00");
    await expect(tiles(first)[0]).toHaveTextContent("Germany");
    await expect(tiles(first)[0]).toHaveTextContent("18pts");
    await expect(tiles(first)[0]).toHaveTextContent("Est. 56%");
    await expect(first).toHaveTextContent("8 of 9 locked");
    await expect(first).toHaveTextContent("To pick");
    const c3 = card(canvasElement, "C-3");
    await expect(tiles(c3)[0]).toHaveAttribute("data-state", "drafted");
    await expect(c3).toHaveTextContent("Draft");
    const b4 = card(canvasElement, "B-4");
    await expect(tiles(b4).map(t => t.dataset.state)).toEqual(["closed", "closed", "locked"]);
    await expect(b4).toHaveTextContent("Locked");
    for (const button of within(canvasElement).getAllByRole("button")) await thumbSized(button);
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`The recorded morning (Thu 15 Jun, 08:10): what needs you first, then your draft, then your locked pick.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Deck cards={deck((loaded as Loaded).s)} />,
  play: async ({
    canvasElement
  }) => {
    const m37 = card(canvasElement, "M37");
    await expect(within(m37).queryByRole("group", {
      name: "To go through"
    })).toBeNull();
    const [spain, draw, austria] = tiles(m37);
    await expect(spain).toHaveTextContent("+13 through");
    await expect(austria).toHaveTextContent("+110 through");
    await expect(draw!.querySelector("[data-then]")).toHaveTextContent("Spain");
    await noSidewaysScroll(canvasElement);
  }
}`,...M.parameters?.docs?.source},description:{story:`A round-of-16 morning (the owner, 23 Oct): a side's pick includes it going through, so each side's tile says what
going through adds; the draw's shows both, since picking it asks who goes through.`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Deck cards={[m37((loaded as Loaded).s, true)]} />,
  play: async ({
    canvasElement
  }) => {
    const draw = tiles(card(canvasElement, "M37"))[1]!;
    const then = draw.querySelector<HTMLElement>("[data-then]")!;
    await expect(then.dataset.then).toBe("home");
    await expect(then).toHaveTextContent("Spain");
    await expect(then).toHaveTextContent("+13");
    await expect(then).toHaveTextContent(/Est\\. \\d+%/);
    await expect(draw).not.toHaveTextContent("Who goes through?");
    await noSidewaysScroll(canvasElement);
  }
}`,...P.parameters?.docs?.source},description:{story:`A drafted draw with who goes through picked: the draw's tile shows that side, what it adds and its chance (the
owner, 23 Oct).`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Deck cards={[m37((loaded as Loaded).s, false)]} />,
  play: async ({
    canvasElement
  }) => {
    const c = card(canvasElement, "M37");
    await expect(tiles(c)[1]).toHaveTextContent("Who goes through?");
    await expect(tiles(c)[1]).toHaveTextContent("◀ +13");
    await expect(tiles(c)[1]).toHaveTextContent("+110 ▶");
    await expect(tiles(c)[1]).toHaveAccessibleName(/then \\+13 or \\+110 to go through/);
    await expect(c).toHaveTextContent("To pick");
    await noSidewaysScroll(canvasElement);
  }
}`,...F.parameters?.docs?.source},description:{story:`A drafted draw with nobody picked to go through: the tile asks, and the match is still to pick.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <AskThrough card={byId((loaded as Loaded).s, "M37")} />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    picked.mockClear();
    await userEvent.click(tiles(card(canvasElement, "M37"))[1]!);
    const sheet = await within(document.body).findByRole("dialog", {
      name: "Who goes through?"
    });
    const [spain, austria] = within(sheet).getAllByRole("button").filter(b => b.dataset.state);
    await expect(spain).toHaveTextContent("13pts");
    await expect(austria).toHaveTextContent("110pts");
    await userEvent.click(austria!);
    await expect(picked).toHaveBeenCalledWith("Austria");
  }
}`,...I.parameters?.docs?.source},description:{story:`Picking the draw in a knockout asks who goes through, with what each adds.`,...I.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const s = buildSnapshot(s => {
      s.teams.find(t => t.id === "EN")!.name = "Bosnia and Herzegovina";
      s.teams.find(t => t.id === "DK")!.name = "Republic of Ireland";
      s.prices = s.prices.filter(v => v.fixture !== "C-3");
      s.members.push(...MORE.map((name, i) => ({
        id: \`m\${i}\`,
        name,
        active: true
      })));
      const others = s.members.filter(m => m.id !== s.you).map(m => m.id);
      s.lockers = [{
        fixture: "C-4",
        kind: "result",
        users: others
      }];
      s.counts = [...s.counts.filter(c => c.fixture !== "C-4"), {
        fixture: "C-4",
        kind: "result",
        locked: others.length,
        drafting: 0,
        members: s.members.length
      }];
    });
    return <Deck cards={deck(s)} />;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement).toHaveTextContent("Bosnia and Herzegovina v Republic of Ireland");
    await expect(within(card(canvasElement, "C-3")).getAllByLabelText("no price yet")).toHaveLength(3);
    const c4 = card(canvasElement, "C-4");
    await expect(c4).toHaveTextContent("19 of 20 locked");
    await expect(c4.querySelectorAll("[data-avatar]")).toHaveLength(4);
    await expect(c4).toHaveTextContent("+15");
    await noSidewaysScroll(canvasElement);
  }
}`,...R.parameters?.docs?.source},description:{story:`The longest names, no price yet on one match, and twenty members locking (the main design's largest game).`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const s = buildSnapshot(s => {
      const c4 = s.fixtures.find(f => f.id === "C-4")!;
      s.fixtures.push({
        ...c4,
        id: "C-5",
        home: "FR",
        away: "BE",
        kickoff: Date.parse("2028-06-16T01:00:00Z")
      });
    });
    return <Deck cards={deck(s).filter(c => c.id === "C-5")} />;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(card(canvasElement, "C-5")).toHaveTextContent("Tomorrow 02:00");
  }
}`,...z.parameters?.docs?.source},description:{story:`A World Cup kickoff in the small hours locks at the noon before it, and its card names the day.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = later((loaded as Loaded).s, "2028-06-15T11:01:00Z");
    return <Deck cards={[matchCard(s, s.fixtures.find(f => f.id === "C-4")!)]} />;
  },
  play: async ({
    canvasElement
  }) => {
    const c4 = card(canvasElement, "C-4");
    await expect(c4.dataset.phase).toBe("locked");
    await expect(tiles(c4)).toEqual([]);
    await expect(c4).toHaveTextContent("No pick");
  }
}`,...B.parameters?.docs?.source},description:{story:`One minute past noon: the card reads locked, no options left, and a missed match reads "No pick" (Review Focus 3).`,...B.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("reveal")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    return <Deck cards={["C-4", "B-4"].map(id => byId(s, id))} />;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const c4 = card(canvasElement, "C-4");
    await expect(c4.dataset.phase).toBe("locked");
    await expect(c4).toHaveTextContent("Group C");
    await expect(c4).toHaveTextContent("20:00");
    await expect(within(c4).getByRole("img", {
      name: "5 Germany, 2 Draw, 1 Poland"
    })).toBeVisible();
    await expect(column(c4, "home")).toHaveTextContent("19pts");
    await expect(column(c4, "home")).toHaveTextContent("5");
    await expect(column(c4, "away")).toHaveTextContent("47pts");
    await expect(c4).toHaveTextContent("Hot take");
    await expect(c4).toHaveTextContent("Tom alone backs Poland");
    await expect(within(c4).getByRole("img", {
      name: "3 chillies"
    })).toBeVisible();
    const b4 = card(canvasElement, "B-4");
    await expect(column(b4, "away")).toHaveAttribute("data-yours");
    await expect(column(b4, "draw")).not.toHaveAttribute("data-yours");
    await expect(canvas.getByRole("button", {
      name: "Germany v Poland"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...H.parameters?.docs?.source},description:{story:`Just after noon: the stage, Spicy and the kickoff on top; the split, each outcome's points and how many picked it,
yours lit; a hot take (the redesign).`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const m = (loaded as Loaded).s;
    const s: Snapshot = {
      ...m,
      now: Date.parse("2028-06-14T11:30:00Z"),
      fixtures: m.fixtures.map(f => f.id === "A-3" ? {
        ...f,
        status: "scheduled" as const,
        score: undefined,
        result: undefined
      } : f)
    };
    return <Deck cards={[byId(s, "A-3")]} />;
  },
  play: async ({
    canvasElement
  }) => {
    const a3 = card(canvasElement, "A-3");
    const lines = [...a3.querySelectorAll<HTMLElement>("[data-badge]")];
    await expect(lines.map(l => l.dataset.badge)).toEqual(["all-in", "all-in"]);
    await expect(lines[0]).toHaveTextContent("All-in");
    await expect(lines[0]).toHaveTextContent("You, Ana, Kit and 3 more on Italy");
    await expect(lines[1]).toHaveTextContent("Jonny on Spain: 4 tokens");
    await expect(a3).toHaveTextContent("+14 more");
    await noSidewaysScroll(canvasElement);
  }
}`,...U.parameters?.docs?.source},description:{story:`Spain v Italy at 12:30 on its day: the first two badge lines, and how many more (the redesign).`,...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("live")],
  render: (_, {
    loaded
  }) => <Deck cards={[byId((loaded as Loaded).s, "C-3")]} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const c3 = card(canvasElement, "C-3");
    await expect(c3.dataset.phase).toBe("live");
    await expect(c3).toHaveTextContent("Live 67′");
    await expect(c3).toHaveTextContent("Portugal 0, Austria 1");
    await expect(within(c3).queryByRole("list", {
      name: "Austria's goals"
    })).toBeNull();
    await expect(within(c3).getByRole("img", {
      name: "6 Portugal, 1 Draw, 2 Austria"
    })).toBeVisible();
    await expect(column(c3, "away")).toHaveAttribute("data-leading");
    const tally = within(c3).getByRole("list", {
      name: "As it stands"
    });
    await expect(rows(tally)).toEqual([["Kit", "61"], ["Priya Shah", "61"]]);
    await expect(getComputedStyle(c3).boxShadow).not.toBe("none");
    await expect(canvas.getByRole("button", {
      name: "Portugal v Austria"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...G.parameters?.docs?.source},description:{story:`While played (the owner, 23 Oct): the score, the split with the outcome as it stands marked, and each friend's
points as it stands as a bar, the same design as at full time. The goals are on the match page.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <Deck cards={[byId((loaded as Loaded).s, "C-4")]} />,
  play: async ({
    canvasElement
  }) => {
    const c4 = card(canvasElement, "C-4");
    await expect(c4.dataset.phase).toBe("full time");
    await expect(c4).toHaveTextContent("FT");
    await expect(c4).toHaveTextContent("Germany 2, Poland 3");
    await expect(within(c4).queryByRole("list", {
      name: "Poland's goals"
    })).toBeNull();
    await expect(within(c4).getByRole("img", {
      name: "5 Germany, 2 Draw, 1 Poland"
    })).toBeVisible();
    await expect(rows(within(c4).getByRole("list", {
      name: "Who earned what"
    }))).toEqual([["Tom", "47"]]);
    await noSidewaysScroll(canvasElement);
  }
}`,...K.parameters?.docs?.source},description:{story:`At full time: the result, the split, and who earned what, settled.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Deck cards={[byId((loaded as Loaded).s, "A-3")]} />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const a3 = card(canvasElement, "A-3");
    const tally = within(a3).getByRole("list", {
      name: "Who earned what"
    });
    await expect(rows(tally).map(([name]) => name)).toEqual(["Jonny", "Raj", "Alex", "Priya Shah"]);
    const more = within(a3).getByRole("button", {
      name: "Show all 9"
    });
    await expect(more).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(more);
    await expect(rows(tally).map(([name]) => name)).toEqual(["Jonny", "Raj", "Sam", "Mel", "Ana", "Tom", "Alex", "Kit", "Priya Shah"]);
    await expect(within(a3).getByRole("button", {
      name: "Show fewer"
    })).toHaveAttribute("aria-expanded", "true");
    const bar = (name: string) => tally.querySelector<HTMLElement>(\`[data-person="\${name}"] [data-bar]\`)!;
    await expect(bar("Jonny").dataset.bar).toBe("gain");
    await expect(bar("Alex").dataset.bar).toBe("loss");
    await expect(bar("Jonny").getBoundingClientRect().width).toBeGreaterThan(bar("Raj").getBoundingClientRect().width);
    await noSidewaysScroll(canvasElement);
  }
}`,...q.parameters?.docs?.source},description:{story:`Spain v Italy at full time: the big winners and losers and you first, everyone a tap away (the owner, 23 Oct); gains
in green, losses in red.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const s = buildSnapshot(x => {
      MORE.slice(0, 17).forEach((name, i) => {
        x.members.push({
          id: \`m\${i}\`,
          name,
          active: true
        });
        x.points.push({
          pick: \`x\${i}\`,
          user: \`m\${i}\`,
          fixture: "A-3",
          points: 100 + i
        });
      });
      x.members.push({
        id: "m17",
        name: "Priya Shah-Okonkwo",
        active: true
      });
      x.points.push({
        pick: "x17",
        user: "m17",
        fixture: "A-3",
        points: 1240
      });
    });
    return <Deck cards={[byId(s, "A-3")]} />;
  },
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const a3 = card(canvasElement, "A-3");
    const tally = within(a3).getByRole("list", {
      name: "Who earned what"
    });
    await expect(tally.querySelectorAll("[data-person]")).toHaveLength(3);
    await expect(tally).toHaveTextContent("+1,240");
    await userEvent.click(within(a3).getByRole("button", {
      name: "Show all 19"
    }));
    await expect(tally.querySelectorAll("[data-person]")).toHaveLength(19);
    await noSidewaysScroll(canvasElement);
  }
}`,...J.parameters?.docs?.source},description:{story:`Twenty members: three first, all nineteen a tap away, nothing wider than the phone (Review Focus 4).`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => {
    const k = (loaded as Loaded).s;
    const at = (change: Partial<Snapshot["fixtures"][number]>): Snapshot => ({
      ...k,
      now: Date.parse("2028-06-24T17:30:00Z"),
      fixtures: k.fixtures.map(f => f.id === "M37" ? {
        ...f,
        status: "live" as const,
        ...change
      } : f),
      picks: k.picks.map(p => p.user === k.you && p.fixture === "M37" ? {
        ...p,
        status: "locked" as const,
        numbers: p.kind === "result" ? {
          prob: 0.15,
          points: 150
        } : {
          prob: 0.9,
          points: 13
        }
      } : p)
    });
    return <Deck cards={[byId(at({
      minute: 105,
      score: {
        home: 2,
        away: 1
      },
      result: {
        ft: {
          home: 1,
          away: 1
        }
      }
    }), "M37"), byId(at({
      minute: 120,
      score: {
        home: 1,
        away: 1
      },
      result: {
        ft: {
          home: 1,
          away: 1
        },
        aet: {
          home: 1,
          away: 1
        },
        pens: {
          home: 2,
          away: 3
        }
      }
    }), "M37")]} />;
  },
  play: async ({
    canvasElement
  }) => {
    const [et, pens] = [...canvasElement.querySelectorAll<HTMLElement>('[data-match="M37"]')];
    await expect(et).toHaveTextContent("ET 105′");
    await expect(column(et!, "draw")).toHaveAttribute("data-leading");
    await expect(rows(within(et!).getByRole("list", {
      name: "As it stands"
    }))).toEqual([["Alex", "163"]]);
    await expect(pens).toHaveTextContent("Pens 2–3");
    await expect(rows(within(pens!).getByRole("list", {
      name: "As it stands"
    }))).toEqual([["Alex", "150"]]);
    await noSidewaysScroll(canvasElement);
  }
}`,...Y.parameters?.docs?.source},description:{story:`A knockout into extra time, then penalties (the owner, 23 Oct: how a live knockout looks): the chip says which,
the draw stands after 90 minutes, going through counts as it stands.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const m = (loaded as Loaded).s;
    const s: Snapshot = {
      ...m,
      fixtures: m.fixtures.map(f => ({
        ...f,
        channel: f.kickoff % 2 === 0 ? "BBC One" : "ITV1"
      }))
    };
    return <Deck cards={["C-4", "C-3"].map(id => byId(s, id))} />;
  },
  play: async ({
    canvasElement
  }) => {
    for (const id of ["C-4", "C-3"]) {
      const badge = card(canvasElement, id).querySelector<HTMLElement>("[data-channel]");
      await expect(badge).not.toBeNull();
      await expect(badge!.textContent).toMatch(/^(BBC One|ITV1)$/);
    }
    await noSidewaysScroll(canvasElement);
  }
}`,...X.parameters?.docs?.source},description:{story:`The UK channel on every card (the owner, 23 Oct). An illustration: the channels' source is still to come (F64).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const tally = byId((loaded as Loaded).s, "A-3").tally!;
    return <div className="grid gap-6">
        <h2 className="text-body font-bold">Bars</h2>
        <TallyBars tally={tally} />
        <h2 className="text-body font-bold">Either side of zero</h2>
        <TallyBars tally={tally} layout="diverging" />
        <h2 className="text-body font-bold">Chips</h2>
        <EarnedChips tally={tally} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => noSidewaysScroll(canvasElement)
}`,...Z.parameters?.docs?.source},description:{story:`Who earned what, three ways, for the owner to choose (23 Oct): bars from a common start, bars either side of zero,
and the chips.`,...Z.parameters?.docs?.description}}}})))()}$();export{U as Badges,X as Channel,I as DrawAsksWhoGoesThrough,F as DrawNeedsDirection,P as DrawWithDirection,Z as EarnedChoices,K as FullTime,q as FullTimeYou,Y as KnockoutLive,M as Knockouts,G as Live,R as Long,j as Morning,B as PastNoon,H as Reveal,z as SmallHours,J as TwentyAtFullTime,Q as __namedExportsOrder,T as default};
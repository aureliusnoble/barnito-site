import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n}from"./CardBody-Bm1zVOij.js";import{n as r,t as i}from"./MatchCard-CaVxBFEe.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./EarnedChips-4KdL63L8.js";import{St as c,U as l,ct as u,lt as d,t as f}from"./src-Ca_r4w3v.js";import{a as p,i as m,n as h,r as ee}from"./checks-C0Y16pbK.js";import{i as g,n as _,t as te}from"./moments-Bzx1n_TW.js";import{a as ne,n as re}from"./sealed-CI1Ph_WX.js";function v({cards:e}){return(0,y.jsx)(`div`,{className:`grid gap-3`,children:e.map(e=>(0,y.jsx)(i,{card:e,onOpen:()=>{}},e.id))})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{f(),ee(),te(),re(),r(),o(),t(),y=a(),{expect:b,fn:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Domain/MatchCard`,parameters:{layout:`padded`}},w=e=>(d(e)?.matches??[]).map(t=>c(e,e.fixtures.find(e=>e.id===t.id))),T=(e,t)=>c(e,e.fixtures.find(e=>e.id===t)),E=(e,t)=>e.querySelector(`[data-match="${t}"]`),D=e=>[...e.querySelectorAll(`[data-state]`)],O={loaders:[g(`morning`)],render:(e,{loaded:t})=>(0,y.jsx)(v,{cards:w(t.s)}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-match]`);await b(t.dataset.match).toBe(`C-4`),await b(t).toHaveTextContent(`Germany v Poland`),await b(t).toHaveTextContent(`20:00`),await b(D(t)[0]).toHaveTextContent(`Germany`),await b(D(t)[0]).toHaveTextContent(`18pts`),await b(D(t)[0]).toHaveTextContent(`Est. 57%`),await b(t).toHaveTextContent(`8 of 9 locked`),await b(t).toHaveTextContent(`To pick`);let n=E(e,`C-3`);await b(D(n)[2]).toHaveAttribute(`data-state`,`drafted`),await b(n).toHaveTextContent(`Draft`);let r=E(e,`B-4`);await b(D(r).map(e=>e.dataset.state)).toEqual([`closed`,`locked`,`closed`]),await b(r).toHaveTextContent(`Locked`);for(let t of S(e).getAllByRole(`button`))await p(t);await m(e)}},k={loaders:[g(`knockouts`)],render:(e,{loaded:t})=>(0,y.jsx)(v,{cards:w(t.s)}),play:async({canvasElement:e})=>{let t=E(e,`M37`),n=S(t).getByRole(`group`,{name:`Result`}),r=S(n).getAllByRole(`button`);await b(r).toHaveLength(4);for(let[e,t]of[`Spain`,`Draw`,`Draw`,`Austria`].entries())await b(r[e]).toHaveAccessibleName(RegExp(`^${t}`));let[i,a,o,s]=D(t);await b(a).toHaveTextContent(`◀ Spain`),await b(o).toHaveTextContent(`Austria ▶`),await b(i).toHaveAccessibleName(/^Spain in 90 minutes\b/),await b(a).toHaveAccessibleName(/^Draw ?, then Spain through\b/),await b(o).toHaveAccessibleName(/^Draw ?, then Austria through\b/),await b(s).toHaveAccessibleName(/^Austria in 90 minutes\b/);let c=t.querySelector(`[data-caption]`);await b(c.textContent.match(/in 90 min/g)).toHaveLength(2),await b(c.textContent.match(/a draw, then who goes through/g)).toHaveLength(1),await b(t).not.toHaveTextContent(`+13`);for(let e of[i,s])await b(e).not.toHaveTextContent(`through`);await b(i).toHaveAttribute(`data-look`,`draft`),await b(i).toHaveTextContent(`40pts`);for(let e of r)await p(e);await m(e),await h(()=>D(E(e,`M37`)))}},A={render:()=>{let e=l(e=>{e.rounds.push({id:`F`,label:`Final`,position:7,scorerPicks:1,tokens:1,scorerStake:155,tokenStake:304}),Object.assign(e.fixtures.find(e=>e.id===`C-4`),{round:`F`,stage:`F`,resultStake:607.5,knockoutStake:911.25});let t=e.prices.find(e=>e.fixture===`C-4`&&e.market===`match`);t.market===`match`&&(t.numbers.knockout={home:{prob:.6,points:1519},"draw-home":{prob:.14,points:6509},"draw-away":{prob:.05,points:18225},away:{prob:.21,points:4339}})});return(0,y.jsx)(v,{cards:[T(e,`C-4`)]})},play:async({canvasElement:e})=>{let t=E(e,`C-4`);await b(t).toHaveTextContent(`Final`);let n=D(t);for(let[e,t]of[`1,519`,`6,509`,`18,225`,`4,339`].entries()){let r=n[e].querySelector(`[data-points]`);await b(r.textContent).toBe(t)}await m(e),await h(()=>D(E(e,`C-4`)));for(let t of D(E(e,`C-4`))){let e=t.querySelector(`[data-points]`);await b(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth+.5)}}},j={loaders:[g(`knockouts`)],render:(e,{loaded:t})=>{let n=t.s,r={...n,now:Date.parse(`2028-06-25T11:05:00Z`),picks:[...n.picks,{id:`k1`,user:`sam`,kind:`knockout`,fixture:`M40`,round:`R16`,outcome:`draw-away`,status:`locked`,lockedBy:`self`,numbers:{prob:.1,points:300}}]};return(0,y.jsx)(v,{cards:[T(n,`M40`),T(r,`M40`)]})},play:async({canvasElement:e})=>{let t=(e,t)=>{let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return n.width>0&&n.left>=r.left-.5&&n.right<=r.right+.5},n=async()=>{let[n,r]=[...e.querySelectorAll(`[data-match="M40"]`)],i=D(n)[2];await b(i).toHaveTextContent(`Bosnia & Herzegovina ▶`),await b(t(i.querySelector(`[data-arrow]`),i)).toBe(!0);let a=I(r,`draw-away`);await b(a).toHaveTextContent(`Bosnia & Herzegovina ▶`),await b(t(a.querySelector(`[data-arrow]`),a)).toBe(!0)};await n(),await h(()=>[...e.querySelectorAll(`[data-match="M40"]`)]),await m(e);let r=globalThis.barnitoTest;r&&(await r.viewport(360,800),await n(),await r.viewport(414,896))}},M=[`Lou`,`Bea`,`Femi`,`Grace Okafor`,`Hugo`,`Ines`,`Jules`,`Kemi`,`Leo`,`Maya Patel`,`Nico`,`Ola`,`Pip`,`Quinn`,`Rosa`,`Theo`,`Uma`],N={render:()=>{let e=l(e=>{e.teams.find(e=>e.id===`EN`).name=`Bosnia and Herzegovina`,e.teams.find(e=>e.id===`DK`).name=`Republic of Ireland`,e.prices=e.prices.filter(e=>e.fixture!==`C-3`),e.members.push(...M.map((e,t)=>({id:`m${t}`,name:e,active:!0})));let t=e.members.filter(t=>t.id!==e.you).map(e=>e.id);e.lockers=[{fixture:`C-4`,kind:`result`,users:t}],e.counts=[...e.counts.filter(e=>e.fixture!==`C-4`),{fixture:`C-4`,kind:`result`,locked:t.length,drafting:0,members:e.members.length}]});return(0,y.jsx)(v,{cards:w(e)})},play:async({canvasElement:e})=>{await b(e).toHaveTextContent(`Bosnia and Herzegovina v Republic of Ireland`),await b(S(E(e,`C-3`)).getAllByText(`No price yet`)).toHaveLength(3);let t=E(e,`C-4`);await b(t).toHaveTextContent(`19 of 20 locked`),await b(t.querySelectorAll(`[data-avatar]`)).toHaveLength(4),await b(t).toHaveTextContent(`+15`),await m(e)}},P={render:()=>{let e=l(e=>{let t=e.fixtures.find(e=>e.id===`C-4`);e.fixtures.push({...t,id:`C-5`,home:`FR`,away:`BE`,kickoff:Date.parse(`2028-06-16T01:00:00Z`)})});return(0,y.jsx)(v,{cards:w(e).filter(e=>e.id===`C-5`)})},play:async({canvasElement:e})=>{await b(E(e,`C-5`)).toHaveTextContent(`Tomorrow 02:00`)}},F={loaders:[g(`morning`)],render:(e,{loaded:t})=>{let n=_(t.s,`2028-06-15T11:01:00Z`);return(0,y.jsx)(v,{cards:[c(n,n.fixtures.find(e=>e.id===`C-4`))]})},play:async({canvasElement:e})=>{let t=E(e,`C-4`);await b(t.dataset.phase).toBe(`locked`),await b(D(t)).toEqual([]),await b(t).toHaveTextContent(`No pick`)}},I=(e,t)=>e.querySelector(`[data-column="${t}"]`),L={loaders:[g(`reveal`)],render:(e,{loaded:t})=>{let n=t.s;return(0,y.jsx)(v,{cards:[`C-3`,`B-4`].map(e=>T(n,e))})},play:async({canvas:e,canvasElement:t})=>{let n=E(t,`C-3`);await b(n.dataset.phase).toBe(`locked`),await b(n).toHaveTextContent(`Group C`),await b(n).toHaveTextContent(`17:00`),await b(S(n).getByRole(`img`,{name:`4 Portugal, 1 Draw, 4 Austria`})).toBeVisible(),await b(I(n,`home`)).toHaveTextContent(`17pts`),await b(I(n,`home`)).toHaveTextContent(`4`),await b(I(n,`away`)).toHaveTextContent(`64pts`),await b(n).toHaveTextContent(`Hot take`),await b(n).toHaveTextContent(`Mel alone backs the draw`),await b(S(n).getByRole(`img`,{name:`5 chillies`})).toBeVisible();let r=E(t,`B-4`);await b(I(r,`draw`)).toHaveAttribute(`data-yours`),await b(I(r,`away`)).not.toHaveAttribute(`data-yours`),await b(e.getByRole(`button`,{name:`Portugal v Austria`})).toBeVisible(),await m(t)}},R={loaders:[g(`knockouts`)],render:(e,{loaded:t})=>{let n=t.s,r={...n,now:Date.parse(`2028-06-18T11:30:00Z`),fixtures:n.fixtures.map(e=>e.id===`A-5`?{...e,status:`scheduled`,score:void 0,result:void 0}:e)};return(0,y.jsx)(v,{cards:[T(r,`A-5`)]})},play:async({canvasElement:e})=>{let t=E(e,`A-5`),n=[...t.querySelectorAll(`[data-badge]`)];await b(n.map(e=>e.dataset.badge)).toEqual([`all-in`]),await b(n[0]).toHaveTextContent(`All-in`);let r=[...n[0].querySelectorAll(`[data-line]`)];await b(r[0]).toHaveTextContent(`Kit, Mel and Priya Shah on Sweden`),await b(r[1]).toHaveTextContent(`Jonny on Spain: 3 tokens`),await b(t).toHaveTextContent(`+4 more`),await m(e)}},z=e=>[...e.querySelectorAll(`[data-person]`)].map(e=>[e.dataset.person,e.dataset.points]),B={loaders:[g(`live`)],render:(e,{loaded:t})=>(0,y.jsx)(v,{cards:[T(t.s,`C-3`)]}),play:async({canvas:e,canvasElement:t})=>{let n=E(t,`C-3`);await b(n.dataset.phase).toBe(`live`),await b(n).toHaveTextContent(`Live 67′`),await b(n).toHaveTextContent(`Portugal 0, Austria 1`),await b(S(n).queryByRole(`list`,{name:`Austria's goals`})).toBeNull(),await b(S(n).getByRole(`img`,{name:`4 Portugal, 1 Draw, 4 Austria`})).toBeVisible(),await b(I(n,`away`)).toHaveAttribute(`data-leading`);let r=S(n).getByRole(`list`,{name:`As it stands`});await b(z(r)).toEqual([[`Kit`,`64`],[`Priya Shah`,`64`],[`Alex`,`57`]]),await b(getComputedStyle(n).boxShadow).not.toBe(`none`),await b(e.getByRole(`button`,{name:`Portugal v Austria`})).toBeVisible(),await m(t)}},V={loaders:[g(`night`)],render:(e,{loaded:t})=>(0,y.jsx)(v,{cards:[T(t.s,`C-4`)]}),play:async({canvasElement:e})=>{let t=E(e,`C-4`);await b(t.dataset.phase).toBe(`full time`),await b(t).toHaveTextContent(`FT`),await b(t).toHaveTextContent(`Germany 3, Poland 0`),await b(S(t).queryByRole(`list`,{name:`Germany's goals`})).toBeNull(),await b(S(t).getByRole(`img`,{name:`5 Germany, 2 Draw, 1 Poland`})).toBeVisible(),await b(z(S(t).getByRole(`list`,{name:`Who earned what`}))).toEqual([[`Ana`,`19`],[`Jonny`,`19`]]),await m(e)}},H={loaders:[g(`night`)],render:(e,{loaded:t})=>(0,y.jsx)(v,{cards:[`B-3`,`A-3`,`C-3`].map(e=>T(t.s,e))}),play:async({canvasElement:e})=>{let t=E(e,`B-3`).querySelector(`[data-badge='hot take'] [data-line]`);await b(t).toHaveTextContent(`You alone back the draw`),await b(t).toHaveTextContent(`came in`),await b(t.querySelector(`[data-came-in] .font-num`)).toHaveTextContent(`+60`);let n=E(e,`A-3`).querySelector(`[data-badge='risky business'] [data-line]`);await b(n).toHaveTextContent(`Jonny, Raj, Sam and Tom on Spain`),await b(n.querySelector(`[data-came-in]`)).not.toBeNull(),await b(n.querySelector(`[data-came-in] .font-num`)).toBeNull(),await b(E(e,`C-3`).querySelector(`[data-badge]`)).toBeNull(),await m(e)}},U={loaders:[g(`morning`)],render:(e,{loaded:t})=>(0,y.jsx)(v,{cards:[T(t.s,`A-3`)]}),play:async({canvasElement:e,userEvent:t})=>{let n=E(e,`A-3`),r=S(n).getByRole(`list`,{name:`Who earned what`});await b(z(r).map(([e])=>e)).toEqual([`Jonny`,`Raj`,`Alex`,`Priya Shah`]);let i=S(n).getByRole(`button`,{name:`Show all 8`});await b(i).toHaveAttribute(`aria-expanded`,`false`),await t.click(i),await b(z(r).map(([e])=>e)).toEqual([`Jonny`,`Raj`,`Sam`,`Mel`,`Ana`,`Alex`,`Kit`,`Priya Shah`]),await b(S(n).getByRole(`button`,{name:`Show fewer`})).toHaveAttribute(`aria-expanded`,`true`);let a=e=>r.querySelector(`[data-person="${e}"] [data-bar]`);await b(a(`Jonny`).dataset.bar).toBe(`gain`),await b(a(`Priya Shah`).dataset.bar).toBe(`loss`),await b(a(`Jonny`).getBoundingClientRect().width).toBeGreaterThan(a(`Raj`).getBoundingClientRect().width),await m(e)}},W={render:()=>{let e=l(e=>{M.slice(0,17).forEach((t,n)=>{e.members.push({id:`m${n}`,name:t,active:!0}),e.points.push({pick:`x${n}`,user:`m${n}`,fixture:`A-3`,points:100+n})}),e.members.push({id:`m17`,name:`Priya Shah-Okonkwo`,active:!0}),e.points.push({pick:`x17`,user:`m17`,fixture:`A-3`,points:1240})});return(0,y.jsx)(v,{cards:[T(e,`A-3`)]})},play:async({canvasElement:e,userEvent:t})=>{let n=E(e,`A-3`),r=S(n).getByRole(`list`,{name:`Who earned what`});await b(r.querySelectorAll(`[data-person]`)).toHaveLength(3),await b(r).toHaveTextContent(`+1,240`),await t.click(S(n).getByRole(`button`,{name:`Show all 19`})),await b(r.querySelectorAll(`[data-person]`)).toHaveLength(19),await m(e)}},G={loaders:[g(`knockouts`)],render:(e,{loaded:t})=>{let n=t.s,r=e=>({...n,now:Date.parse(`2028-06-24T17:30:00Z`),fixtures:n.fixtures.map(t=>t.id===`M37`?{...t,status:`live`,...e}:t),picks:n.picks.map(e=>e.user===n.you&&e.fixture===`M37`&&e.kind===`knockout`?{...e,outcome:`draw-home`,status:`locked`,lockedBy:`self`,numbers:{prob:.1001,points:337}}:e)});return(0,y.jsx)(v,{cards:[T(r({minute:60,score:{home:1,away:1}}),`M37`),T(r({minute:105,score:{home:2,away:1},result:{ft:{home:1,away:1}}}),`M37`),T(r({minute:120,score:{home:2,away:2},result:{ft:{home:1,away:1},aet:{home:2,away:2},pens:{home:2,away:3}}}),`M37`)]})},play:async({canvasElement:e})=>{let[t,n,r]=[...e.querySelectorAll(`[data-match="M37"]`)];await b(t).toHaveTextContent(`Live 60′`);let i=e=>[...e.querySelectorAll(`[data-leading]`)].map(e=>e.dataset.column);await b(i(t)).toEqual([`draw-home`,`draw-away`]),await b(t.querySelector(`[data-person="Alex"]`)?.getAttribute(`data-points`)).toBe(`0`),await b(n).toHaveTextContent(`ET 105′`),await b(i(n)).toEqual([`draw-home`]),await b(z(S(n).getByRole(`list`,{name:`As it stands`}))).toEqual([[`Alex`,`337`]]),await b(r).toHaveTextContent(`Pens 2–3`),await b(i(r)).toEqual([`draw-away`]),await b(r.querySelector(`[data-person="Alex"]`)?.getAttribute(`data-points`)).toBe(`0`),await m(e)}},K={loaders:[g(`knockouts`)],render:(e,{loaded:t})=>{let n=t.s,r=e=>({...n,now:Date.parse(`2028-06-24T22:00:00Z`),fixtures:n.fixtures.map(t=>t.id===`M37`?{...t,status:`finished`,...e}:t)});return(0,y.jsx)(v,{cards:[T(r({score:{home:2,away:1},result:{ft:{home:1,away:1},aet:{home:2,away:1}}}),`M37`),T(r({score:{home:2,away:2},result:{ft:{home:1,away:1},aet:{home:2,away:2},pens:{home:2,away:3}}}),`M37`)]})},play:async({canvasElement:e})=>{let[t,n]=[...e.querySelectorAll(`[data-match="M37"]`)];await b(t).toHaveTextContent(`AET`),await b([...t.querySelectorAll(`[data-ended]`)].map(e=>e.dataset.column)).toEqual([`draw-home`]),await b(t.querySelector(`[data-winner]`)).toHaveTextContent(`Spain`),await b(n).toHaveTextContent(`Pens 2–3`),await b([...n.querySelectorAll(`[data-ended]`)].map(e=>e.dataset.column)).toEqual([`draw-away`]),await b(n.querySelector(`[data-winner]`)).toHaveTextContent(`Austria`),await m(e)}},q={loaders:[g(`knockouts`)],render:(e,{loaded:t})=>{let n=t.s,r=(e,t,n,r)=>({id:e,user:t,kind:`knockout`,fixture:`M37`,round:`R16`,outcome:n,status:`locked`,lockedBy:`self`,numbers:{prob:.5,points:r}}),i={...n,now:Date.parse(`2028-06-24T11:05:00Z`),picks:[...n.picks.map(e=>e.user===n.you&&e.fixture===`M37`&&e.kind===`knockout`?{...e,outcome:`draw-home`,status:`locked`,lockedBy:`auto`,numbers:{prob:.1001,points:337}}:e),r(`k1`,`sam`,`home`,40),r(`k2`,`ana`,`home`,40),r(`k3`,`kit`,`draw-home`,337)]};return(0,y.jsx)(v,{cards:[T(i,`M37`)]})},play:async({canvasElement:e})=>{let t=E(e,`M37`),n=[...t.querySelectorAll(`[data-column]`)];await b(n.map(e=>e.dataset.column)).toEqual([`home`,`draw-home`,`draw-away`,`away`]),await b(I(t,`draw-home`)).toHaveAttribute(`data-yours`),await b(I(t,`draw-home`)).toHaveTextContent(`◀ Spain`),await b(I(t,`draw-away`)).toHaveTextContent(`851pts`),await b(I(t,`draw-away`)).toHaveTextContent(`0 picked`);let r=S(t).getByRole(`img`,{name:/^2 Spain, 2 Draw, then Spain through, 0 Draw, then Austria through, 0 Austria$/});await b([...r.querySelectorAll(`[data-segment]`)].map(e=>e.dataset.segment)).toEqual([`home`,`draw-home`]),await m(e)}},J={loaders:[g(`morning`)],render:(e,{loaded:t})=>{let n=t.s,r={...n,fixtures:n.fixtures.map(e=>({...e,channel:e.kickoff%2==0?`BBC One`:`ITV1`}))};return(0,y.jsx)(v,{cards:[`C-4`,`C-3`].map(e=>T(r,e))})},play:async({canvasElement:e})=>{for(let t of[`C-4`,`C-3`]){let n=E(e,t).querySelector(`[data-channel]`);await b(n).not.toBeNull(),await b(n.textContent).toMatch(/^(BBC One|ITV1)$/)}await m(e)}},Y={loaders:[g(`morning`)],render:(e,{loaded:t})=>{let r=T(t.s,`A-3`).tally;return(0,y.jsxs)(`div`,{className:`grid gap-6`,children:[(0,y.jsx)(`h2`,{className:`text-body font-bold`,children:`Bars`}),(0,y.jsx)(n,{tally:r}),(0,y.jsx)(`h2`,{className:`text-body font-bold`,children:`Either side of zero`}),(0,y.jsx)(n,{tally:r,layout:`diverging`}),(0,y.jsx)(`h2`,{className:`text-body font-bold`,children:`Chips`}),(0,y.jsx)(s,{tally:r})]})},play:async({canvasElement:e})=>m(e)},X=x(),Z={loaders:[g(`morning`)],render:(e,{loaded:t})=>{let n=u(ne(t.s));return(0,y.jsx)(i,{card:T(n,`B-3`),onOpen:()=>{},onReveal:X})},play:async({canvasElement:e,userEvent:t})=>{X.mockClear();let n=E(e,`B-3`);await b(n.dataset.phase).toBe(`locked`),await b(n).toHaveTextContent(`Yesterday 20:00`),await b(n).not.toHaveTextContent(`FT`),await b(n).not.toHaveTextContent(`England 0, Croatia 0`),await b(S(n).queryByRole(`list`,{name:`Who earned what`})).toBeNull(),await b(S(n).getByRole(`img`,{name:/England, .* Draw, .* Croatia/})).toBeVisible();let r=S(n).getByRole(`button`,{name:`Show result`});await p(r),await t.click(r),await b(X).toHaveBeenCalledOnce(),await m(e)}},Q=[`Morning`,`Knockout`,`KnockoutFinal`,`KnockoutLongNames`,`Long`,`SmallHours`,`PastNoon`,`Reveal`,`Badges`,`Live`,`FullTime`,`FullTimeCallsCameIn`,`FullTimeYou`,`TwentyAtFullTime`,`KnockoutLive`,`KnockoutFullTime`,`KnockoutSplit`,`Channel`,`EarnedChoices`,`Hidden`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    await expect(tiles(first)[0]).toHaveTextContent("Est. 57%");
    await expect(first).toHaveTextContent("8 of 9 locked");
    await expect(first).toHaveTextContent("To pick");
    const c3 = card(canvasElement, "C-3");
    await expect(tiles(c3)[2]).toHaveAttribute("data-state", "drafted");
    await expect(c3).toHaveTextContent("Draft");
    const b4 = card(canvasElement, "B-4");
    await expect(tiles(b4).map(t => t.dataset.state)).toEqual(["closed", "locked", "closed"]);
    await expect(b4).toHaveTextContent("Locked");
    for (const button of within(canvasElement).getAllByRole("button")) await thumbSized(button);
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`The recorded morning (Thu 15 Jun, 08:10): what needs you first, then your draft, then your locked pick.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Deck cards={deck((loaded as Loaded).s)} />,
  play: async ({
    canvasElement
  }) => {
    const m37 = card(canvasElement, "M37");
    const result = within(m37).getByRole("group", {
      name: "Result"
    });
    const buttons = within(result).getAllByRole("button");
    await expect(buttons).toHaveLength(4);
    for (const [i, name] of ["Spain", "Draw", "Draw", "Austria"].entries()) await expect(buttons[i]).toHaveAccessibleName(new RegExp(\`^\${name}\`));
    const [spain, home, away, austria] = tiles(m37);
    await expect(home).toHaveTextContent("◀ Spain");
    await expect(away).toHaveTextContent("Austria ▶");
    // Screen readers hear each tile by its sheet words (review finding 7); the caption says it by sight.
    await expect(spain).toHaveAccessibleName(/^Spain in 90 minutes\\b/);
    await expect(home).toHaveAccessibleName(/^Draw ?, then Spain through\\b/);
    await expect(away).toHaveAccessibleName(/^Draw ?, then Austria through\\b/);
    await expect(austria).toHaveAccessibleName(/^Austria in 90 minutes\\b/);
    const caption = m37.querySelector<HTMLElement>("[data-caption]")!;
    await expect(caption.textContent!.match(/in 90 min/g)).toHaveLength(2);
    await expect(caption.textContent!.match(/a draw, then who goes through/g)).toHaveLength(1);
    await expect(m37).not.toHaveTextContent("+13");
    for (const side of [spain!, austria!]) await expect(side).not.toHaveTextContent("through");
    await expect(spain).toHaveAttribute("data-look", "draft");
    await expect(spain).toHaveTextContent("40pts");
    for (const button of buttons) await thumbSized(button);
    await noSidewaysScroll(canvasElement);
    await fitsInside(() => tiles(card(canvasElement, "M37")));
  }
}`,...k.parameters?.docs?.source},description:{story:`A round-of-16 morning (design B, 25 Oct 2026): one pick on how the tie ends, four tiles in a row in the tie's order, a
caption tying each to its ending. A draw tile reads "Draw" over its way; a side's tile just its team.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const s = buildSnapshot(x => {
      x.rounds.push({
        id: "F",
        label: "Final",
        position: 7,
        scorerPicks: 1,
        tokens: 1,
        scorerStake: 155,
        tokenStake: 304
      });
      Object.assign(x.fixtures.find(f => f.id === "C-4")!, {
        round: "F",
        stage: "F",
        resultStake: 607.5,
        knockoutStake: 911.25
      });
      const v = x.prices.find(p => p.fixture === "C-4" && p.market === "match")!;
      if (v.market === "match") v.numbers.knockout = {
        home: {
          prob: 0.6,
          points: 1519
        },
        "draw-home": {
          prob: 0.14,
          points: 6509
        },
        "draw-away": {
          prob: 0.05,
          points: 18225
        },
        away: {
          prob: 0.21,
          points: 4339
        }
      };
    });
    return <Deck cards={[byId(s, "C-4")]} />;
  },
  play: async ({
    canvasElement
  }) => {
    const c4 = card(canvasElement, "C-4");
    await expect(c4).toHaveTextContent("Final");
    const all = tiles(c4);
    for (const [i, points] of ["1,519", "6,509", "18,225", "4,339"].entries()) {
      const number = all[i]!.querySelector<HTMLElement>("[data-points]")!;
      await expect(number.textContent).toBe(points);
    }
    await noSidewaysScroll(canvasElement);
    await fitsInside(() => tiles(card(canvasElement, "C-4")));
    // Never cut off: each number is as wide as it needs, inside its tile, at either width.
    for (const tile of tiles(card(canvasElement, "C-4"))) {
      const number = tile.querySelector<HTMLElement>("[data-points]")!;
      await expect(number.scrollWidth).toBeLessThanOrEqual(number.clientWidth + 0.5);
    }
  }
}`,...A.parameters?.docs?.source},description:{story:`A final's long shots (Review Focus): a stake of 911.25 pays five figures at 5%. Every number shows whole, four
tiles in a row at 360 px.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => {
    const k = (loaded as Loaded).s;
    const after: Snapshot = {
      ...k,
      now: Date.parse("2028-06-25T11:05:00Z"),
      picks: [...k.picks, {
        id: "k1",
        user: "sam",
        kind: "knockout",
        fixture: "M40",
        round: "R16",
        outcome: "draw-away",
        status: "locked",
        lockedBy: "self",
        numbers: {
          prob: 0.1,
          points: 300
        }
      }]
    };
    return <Deck cards={[byId(k, "M40"), byId(after, "M40")]} />;
  },
  play: async ({
    canvasElement
  }) => {
    const shown = (el: HTMLElement, box: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const b = box.getBoundingClientRect();
      return r.width > 0 && r.left >= b.left - 0.5 && r.right <= b.right + 0.5;
    };
    const check = async () => {
      const [before, after] = [...canvasElement.querySelectorAll<HTMLElement>('[data-match="M40"]')];
      const away = tiles(before!)[2]!;
      await expect(away).toHaveTextContent("Bosnia & Herzegovina ▶");
      await expect(shown(away.querySelector<HTMLElement>("[data-arrow]")!, away)).toBe(true);
      const columnAway = column(after!, "draw-away");
      await expect(columnAway).toHaveTextContent("Bosnia & Herzegovina ▶");
      await expect(shown(columnAway.querySelector<HTMLElement>("[data-arrow]")!, columnAway)).toBe(true);
    };
    await check();
    await fitsInside(() => [...canvasElement.querySelectorAll<HTMLElement>('[data-match="M40"]')]);
    await noSidewaysScroll(canvasElement);
    const run = (globalThis as {
      barnitoTest?: {
        viewport(w: number, h: number): Promise<void>;
      };
    }).barnitoTest;
    if (run) {
      await run.viewport(360, 800);
      await check();
      await run.viewport(414, 896);
    }
  }
}`,...j.parameters?.docs?.source},description:{story:`A long team name on a draw tile and its split column (review finding 3): the name shortens, its arrow always shows.`,...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
    await expect(within(card(canvasElement, "C-3")).getAllByText("No price yet")).toHaveLength(3);
    const c4 = card(canvasElement, "C-4");
    await expect(c4).toHaveTextContent("19 of 20 locked");
    await expect(c4.querySelectorAll("[data-avatar]")).toHaveLength(4);
    await expect(c4).toHaveTextContent("+15");
    await noSidewaysScroll(canvasElement);
  }
}`,...N.parameters?.docs?.source},description:{story:`The longest names, no price yet on one match, and twenty members locking (the main design's largest game).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`A World Cup kickoff in the small hours locks at the noon before it, and its card names the day.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`One minute past noon: the card reads locked, no options left, and a missed match reads "No pick" (Review Focus 3).`,...F.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("reveal")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    return <Deck cards={["C-3", "B-4"].map(id => byId(s, id))} />;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const c3 = card(canvasElement, "C-3");
    await expect(c3.dataset.phase).toBe("locked");
    await expect(c3).toHaveTextContent("Group C");
    await expect(c3).toHaveTextContent("17:00");
    await expect(within(c3).getByRole("img", {
      name: "4 Portugal, 1 Draw, 4 Austria"
    })).toBeVisible();
    await expect(column(c3, "home")).toHaveTextContent("17pts");
    await expect(column(c3, "home")).toHaveTextContent("4");
    await expect(column(c3, "away")).toHaveTextContent("64pts");
    await expect(c3).toHaveTextContent("Hot take");
    await expect(c3).toHaveTextContent("Mel alone backs the draw");
    await expect(within(c3).getByRole("img", {
      name: "5 chillies"
    })).toBeVisible();
    const b4 = card(canvasElement, "B-4");
    await expect(column(b4, "draw")).toHaveAttribute("data-yours");
    await expect(column(b4, "away")).not.toHaveAttribute("data-yours");
    await expect(canvas.getByRole("button", {
      name: "Portugal v Austria"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...L.parameters?.docs?.source},description:{story:`Just after noon: the stage, Spicy and the kickoff on top; the split, each outcome's points and how many picked it,
yours lit; a hot take (the redesign). Portugal v Austria carries the hot take (Mel alone on the draw).`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => {
    const k = (loaded as Loaded).s;
    const s: Snapshot = {
      ...k,
      now: Date.parse("2028-06-18T11:30:00Z"),
      fixtures: k.fixtures.map(f => f.id === "A-5" ? {
        ...f,
        status: "scheduled" as const,
        score: undefined,
        result: undefined
      } : f)
    };
    return <Deck cards={[byId(s, "A-5")]} />;
  },
  play: async ({
    canvasElement
  }) => {
    const a5 = card(canvasElement, "A-5");
    // The first two lines, both all-in: one pill, its two lines beside it (the owner, 26 Oct).
    const kinds = [...a5.querySelectorAll<HTMLElement>("[data-badge]")];
    await expect(kinds.map(l => l.dataset.badge)).toEqual(["all-in"]);
    await expect(kinds[0]).toHaveTextContent("All-in");
    const lines = [...kinds[0]!.querySelectorAll<HTMLElement>("[data-line]")];
    await expect(lines[0]).toHaveTextContent("Kit, Mel and Priya Shah on Sweden");
    await expect(lines[1]).toHaveTextContent("Jonny on Spain: 3 tokens");
    await expect(a5).toHaveTextContent("+4 more");
    await noSidewaysScroll(canvasElement);
  }
}`,...R.parameters?.docs?.source},description:{story:`Sweden v Spain at 12:30 on its day (matchday 3, from the round of 16's moment): the first two badge lines, and how
many more (the redesign).`,...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      name: "4 Portugal, 1 Draw, 4 Austria"
    })).toBeVisible();
    await expect(column(c3, "away")).toHaveAttribute("data-leading");
    const tally = within(c3).getByRole("list", {
      name: "As it stands"
    });
    // You at 57 as it stands, shown ahead of Tom's 64 (the final review: "you, always").
    await expect(rows(tally)).toEqual([["Kit", "64"], ["Priya Shah", "64"], ["Alex", "57"]]);
    await expect(getComputedStyle(c3).boxShadow).not.toBe("none");
    await expect(canvas.getByRole("button", {
      name: "Portugal v Austria"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...B.parameters?.docs?.source},description:{story:`While played (the owner, 23 Oct): the score, the split with the outcome as it stands marked, and each friend's
points as it stands as a bar, the same design as at full time. The goals are on the match page.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    await expect(c4).toHaveTextContent("Germany 3, Poland 0");
    await expect(within(c4).queryByRole("list", {
      name: "Germany's goals"
    })).toBeNull();
    await expect(within(c4).getByRole("img", {
      name: "5 Germany, 2 Draw, 1 Poland"
    })).toBeVisible();
    await expect(rows(within(c4).getByRole("list", {
      name: "Who earned what"
    }))).toEqual([["Ana", "19"], ["Jonny", "19"]]);
    await noSidewaysScroll(canvasElement);
  }
}`,...V.parameters?.docs?.source},description:{story:`At full time: the result, the split, and who earned what, settled.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <Deck cards={["B-3", "A-3", "C-3"].map(id => byId((loaded as Loaded).s, id))} />,
  play: async ({
    canvasElement
  }) => {
    // Your hot take on the draw in England v Croatia (0-0) came in.
    const take = card(canvasElement, "B-3").querySelector<HTMLElement>("[data-badge='hot take'] [data-line]")!;
    await expect(take).toHaveTextContent("You alone back the draw");
    await expect(take).toHaveTextContent("came in");
    await expect(take.querySelector("[data-came-in] .font-num")).toHaveTextContent("+60");
    const risky = card(canvasElement, "A-3").querySelector<HTMLElement>("[data-badge='risky business'] [data-line]")!;
    await expect(risky).toHaveTextContent("Jonny, Raj, Sam and Tom on Spain");
    await expect(risky.querySelector("[data-came-in]")).not.toBeNull();
    await expect(risky.querySelector("[data-came-in] .font-num")).toBeNull();
    // Mel's hot take on the draw didn't come in (Portugal won 2-1): it has left the card.
    await expect(card(canvasElement, "C-3").querySelector("[data-badge]")).toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...H.parameters?.docs?.source},description:{story:`Calls that came in (CI1, the owner, 27 Oct): at full time a badge that came in keeps its line with a tick and what
it won; a call that didn't come in leaves the card.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    // Eight of the nine: Tom's picks on it netted 0.
    const more = within(a3).getByRole("button", {
      name: "Show all 8"
    });
    await expect(more).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(more);
    await expect(rows(tally).map(([name]) => name)).toEqual(["Jonny", "Raj", "Sam", "Mel", "Ana", "Alex", "Kit", "Priya Shah"]);
    await expect(within(a3).getByRole("button", {
      name: "Show fewer"
    })).toHaveAttribute("aria-expanded", "true");
    const bar = (name: string) => tally.querySelector<HTMLElement>(\`[data-person="\${name}"] [data-bar]\`)!;
    await expect(bar("Jonny").dataset.bar).toBe("gain");
    await expect(bar("Priya Shah").dataset.bar).toBe("loss");
    await expect(bar("Jonny").getBoundingClientRect().width).toBeGreaterThan(bar("Raj").getBoundingClientRect().width);
    await noSidewaysScroll(canvasElement);
  }
}`,...U.parameters?.docs?.source},description:{story:`Spain v Italy at full time: the big winners and losers and you first, everyone a tap away (the owner, 23 Oct); gains
in green, losses in red.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Twenty members: three first, all nineteen a tap away, nothing wider than the phone (Review Focus 4).`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
      picks: k.picks.map(p => p.user === k.you && p.fixture === "M37" && p.kind === "knockout" ? {
        ...p,
        outcome: "draw-home" as const,
        status: "locked" as const,
        lockedBy: "self" as const,
        numbers: {
          prob: 0.1001,
          points: 337
        }
      } : p)
    });
    return <Deck cards={[byId(at({
      minute: 60,
      score: {
        home: 1,
        away: 1
      }
    }), "M37"), byId(at({
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
        home: 2,
        away: 2
      },
      result: {
        ft: {
          home: 1,
          away: 1
        },
        aet: {
          home: 2,
          away: 2
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
    const [level, et, pens] = [...canvasElement.querySelectorAll<HTMLElement>('[data-match="M37"]')];
    await expect(level).toHaveTextContent("Live 60′");
    const leading = (el: HTMLElement) => [...el.querySelectorAll<HTMLElement>("[data-leading]")].map(c => c.dataset.column);
    await expect(leading(level!)).toEqual(["draw-home", "draw-away"]);
    // You at 0 as it stands, still shown (the final review: "you, always").
    await expect(level!.querySelector('[data-person="Alex"]')?.getAttribute("data-points")).toBe("0");
    await expect(et).toHaveTextContent("ET 105′");
    await expect(leading(et!)).toEqual(["draw-home"]);
    await expect(rows(within(et!).getByRole("list", {
      name: "As it stands"
    }))).toEqual([["Alex", "337"]]);
    await expect(pens).toHaveTextContent("Pens 2–3");
    await expect(leading(pens!)).toEqual(["draw-away"]);
    await expect(pens!.querySelector('[data-person="Alex"]')?.getAttribute("data-points")).toBe("0");
    await noSidewaysScroll(canvasElement);
  }
}`,...G.parameters?.docs?.source},description:{story:`A knockout while played (design B), your pick locked on the draw with Spain through: level, both draw columns ring,
nobody is through and the draws have no points as it stands; ahead in extra time, that side's draw column rings and
its pickers' points stand; then penalties.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => {
    const k = (loaded as Loaded).s;
    const ended = (change: Partial<Snapshot["fixtures"][number]>): Snapshot => ({
      ...k,
      now: Date.parse("2028-06-24T22:00:00Z"),
      fixtures: k.fixtures.map(f => f.id === "M37" ? {
        ...f,
        status: "finished" as const,
        ...change
      } : f)
    });
    return <Deck cards={[byId(ended({
      score: {
        home: 2,
        away: 1
      },
      result: {
        ft: {
          home: 1,
          away: 1
        },
        aet: {
          home: 2,
          away: 1
        }
      }
    }), "M37"), byId(ended({
      score: {
        home: 2,
        away: 2
      },
      result: {
        ft: {
          home: 1,
          away: 1
        },
        aet: {
          home: 2,
          away: 2
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
    const [aet, pens] = [...canvasElement.querySelectorAll<HTMLElement>('[data-match="M37"]')];
    await expect(aet).toHaveTextContent("AET");
    await expect([...aet!.querySelectorAll<HTMLElement>("[data-ended]")].map(c => c.dataset.column)).toEqual(["draw-home"]);
    await expect(aet!.querySelector("[data-winner]")).toHaveTextContent("Spain");
    await expect(pens).toHaveTextContent("Pens 2–3");
    await expect([...pens!.querySelectorAll<HTMLElement>("[data-ended]")].map(c => c.dataset.column)).toEqual(["draw-away"]);
    await expect(pens!.querySelector("[data-winner]")).toHaveTextContent("Austria");
    await noSidewaysScroll(canvasElement);
  }
}`,...K.parameters?.docs?.source},description:{story:`A knockout at full time (the final review): its chip says how it was settled ("AET", "Pens 2–3"), the ending that
happened is marked with a tick, and the side that went through is in bold.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => {
    const k = (loaded as Loaded).s;
    const locked = (id: string, user: string, outcome: KnockoutOutcome, points: number): SnapshotPick => ({
      id,
      user,
      kind: "knockout",
      fixture: "M37",
      round: "R16",
      outcome,
      status: "locked",
      lockedBy: "self",
      numbers: {
        prob: 0.5,
        points
      }
    });
    const s: Snapshot = {
      ...k,
      now: Date.parse("2028-06-24T11:05:00Z"),
      picks: [...k.picks.map(p => p.user === k.you && p.fixture === "M37" && p.kind === "knockout" ? {
        ...p,
        outcome: "draw-home" as const,
        status: "locked" as const,
        lockedBy: "auto" as const,
        numbers: {
          prob: 0.1001,
          points: 337
        }
      } : p), locked("k1", "sam", "home", 40), locked("k2", "ana", "home", 40), locked("k3", "kit", "draw-home", 337)]
    };
    return <Deck cards={[byId(s, "M37")]} />;
  },
  play: async ({
    canvasElement
  }) => {
    const m37 = card(canvasElement, "M37");
    const columns = [...m37.querySelectorAll<HTMLElement>("[data-column]")];
    await expect(columns.map(c => c.dataset.column)).toEqual(["home", "draw-home", "draw-away", "away"]);
    await expect(column(m37, "draw-home")).toHaveAttribute("data-yours");
    await expect(column(m37, "draw-home")).toHaveTextContent("◀ Spain");
    await expect(column(m37, "draw-away")).toHaveTextContent("851pts");
    await expect(column(m37, "draw-away")).toHaveTextContent("0 picked");
    const bar = within(m37).getByRole("img", {
      name: /^2 Spain, 2 Draw, then Spain through, 0 Draw, then Austria through, 0 Austria$/
    });
    await expect([...bar.querySelectorAll<HTMLElement>("[data-segment]")].map(x => x.dataset.segment)).toEqual(["home", "draw-home"]);
    await noSidewaysScroll(canvasElement);
  }
}`,...q.parameters?.docs?.source},description:{story:`From a knockout's deadline (design B): four split columns, one per ending, each with how many picked it and its
points, yours filled with a lock; an ending nobody picked still shows its points (Review Focus).`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`The UK channel on every card (the owner, 23 Oct). An illustration: the channels' source is still to come (F64).`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Who earned what, three ways, for the owner to choose (23 Oct): bars from a common start, bars either side of zero,
and the chips.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = spoilerFree(sealedMorning((loaded as Loaded).s));
    return <MatchCard card={byId(s, "B-3")} onOpen={() => {}} onReveal={shown} />;
  },
  play: async ({
    canvasElement,
    userEvent
  }) => {
    shown.mockClear();
    const b3 = card(canvasElement, "B-3");
    await expect(b3.dataset.phase).toBe("locked");
    await expect(b3).toHaveTextContent("Yesterday 20:00");
    await expect(b3).not.toHaveTextContent("FT");
    await expect(b3).not.toHaveTextContent("England 0, Croatia 0");
    await expect(within(b3).queryByRole("list", {
      name: "Who earned what"
    })).toBeNull();
    await expect(within(b3).getByRole("img", {
      name: /England, .* Draw, .* Croatia/
    })).toBeVisible();
    const eye = within(b3).getByRole("button", {
      name: "Show result"
    });
    await thumbSized(eye);
    await userEvent.click(eye);
    await expect(shown).toHaveBeenCalledOnce();
    await noSidewaysScroll(canvasElement);
  }
}`,...Z.parameters?.docs?.source},description:{story:`A match hidden this morning (spoiler-free mornings): as it was at its deadline, the split and the badges, no score
or tally, the kickoff on its chip, and its own eye, "Show result".`,...Z.parameters?.docs?.description}}}})))()}$();export{R as Badges,J as Channel,Y as EarnedChoices,V as FullTime,H as FullTimeCallsCameIn,U as FullTimeYou,Z as Hidden,k as Knockout,A as KnockoutFinal,K as KnockoutFullTime,G as KnockoutLive,j as KnockoutLongNames,q as KnockoutSplit,B as Live,N as Long,O as Morning,F as PastNoon,L as Reveal,P as SmallHours,W as TwentyAtFullTime,Q as __namedExportsOrder,C as default};
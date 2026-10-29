import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./Clock-BSFLvk8s.js";import{n as r,t as i}from"./MatchCard-CaVxBFEe.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./LockButton-DfkUlZu3.js";import{i as c,n as l,r as u,t as d}from"./RoundEnding-C3USwCuT.js";import{n as f,t as p}from"./RoundBand-DJwZz1I7.js";import{n as m,t as h}from"./MatchPicksDay-C7SF3FMj.js";import{n as g,t as _}from"./NotOpenRow-Br15L4U9.js";import{G as v,J as y,Z as b,t as x}from"./src-Ca_r4w3v.js";import{i as S,r as C}from"./checks-C0Y16pbK.js";import{i as w,t as T}from"./moments-Bzx1n_TW.js";function E({title:e,children:t}){return(0,O.jsxs)(`section`,{"aria-label":e,className:`grid grid-cols-1 gap-3`,children:[(0,O.jsx)(`h2`,{className:`text-title font-bold`,children:e}),t]})}function D({s:e}){let n={...e,fixtures:e.fixtures.map((e,t)=>({...e,channel:t%2==0?`BBC One`:`ITV1`}))},r=v(n),a=y(n),o=b(n);return(0,O.jsxs)(`div`,{className:`grid grid-cols-1 gap-8`,children:[(0,O.jsxs)(E,{title:`Home`,children:[r.due&&(0,O.jsx)(s,{due:r.due,pace:r.pace,onPress:M}),r.clock&&(0,O.jsx)(`div`,{children:(0,O.jsx)(t,{clock:r.clock})}),r.day&&(0,O.jsx)(`h3`,{className:`text-body font-bold`,children:r.day.title}),r.day?.cards.map(e=>(0,O.jsx)(i,{card:e,onOpen:M},e.id))]}),(0,O.jsxs)(E,{title:`Picks`,children:[a.ending&&(0,O.jsx)(d,{ending:a.ending,onUse:M}),(0,O.jsx)(u,{picks:a,onOpen:M,onAction:M}),(0,O.jsx)(`h3`,{className:`text-body font-bold`,children:`When things lock`}),a.bands.map(e=>(0,O.jsx)(p,{band:e,onRow:M},e.round))]}),(0,O.jsxs)(E,{title:`Match picks`,children:[o.days.map(e=>(0,O.jsx)(h,{day:e,onLock:M,onOpen:M,onScorers:M,onTokens:M},e.at)),o.notOpen.length>0&&(0,O.jsx)(`ul`,{className:`grid gap-2`,children:o.notOpen.map(e=>(0,O.jsx)(_,{item:e},e.id))})]})]})}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{x(),C(),T(),n(),o(),r(),m(),g(),c(),f(),l(),O=a(),{expect:k,within:A}=__STORYBOOK_MODULE_TEST__,j={title:`Domain/Together`,parameters:{layout:`padded`}},M=()=>{},N=(e,t,n)=>({loaders:[w(e)],render:(e,{loaded:t})=>{let r=t.s;return(0,O.jsx)(D,{s:n?n(r):r})},play:async({canvasElement:e})=>{await t(e),await S(e)}}),P=(e,t)=>A(e).getByRole(`region`,{name:t}),F=N(`eve`,async e=>{await k(A(P(e,`Home`)).getByRole(`button`,{name:`Lock 8 by 12:00 tomorrow`})).toBeVisible(),await k(P(e,`Home`)).toHaveTextContent(`Fri 9 Jun`),await k(P(e,`Picks`)).toHaveTextContent(`Switzerland, 900 pts`)}),I=N(`morning`,async e=>{await k(A(P(e,`Home`)).getByRole(`button`,{name:`Draft 1 by 12:00 today`})).toBeVisible(),await k(P(e,`Home`).querySelectorAll(`[data-match]`)).toHaveLength(3),await k(P(e,`Home`).querySelectorAll(`[data-channel]`)).toHaveLength(3),await k(A(P(e,`Picks`)).getByRole(`region`,{name:`Matchday 3`})).toHaveTextContent(`4 of 4 drafted`),await k(A(P(e,`Match picks`)).getByRole(`region`,{name:`Today, 12:00`})).toHaveTextContent(`2 to lock`)}),L=N(`reveal`,async e=>{await k(A(P(e,`Home`)).getByRole(`button`,{name:`Lock 3 by 12:00 tomorrow`})).toBeVisible(),await k(P(e,`Home`)).toHaveTextContent(`Mel alone backs the draw`)}),R=N(`live`,async e=>{let t=P(e,`Home`).querySelector(`[data-phase="live"]`);await k([...A(t).getByRole(`list`,{name:`As it stands`}).querySelectorAll(`[data-person]`)].map(e=>e.dataset.person)).toEqual([`Kit`,`Priya Shah`,`Alex`])}),z=N(`night`,async e=>{await k(A(P(e,`Home`)).getAllByRole(`list`,{name:`Who earned what`}).length).toBeGreaterThan(0)}),B=N(`knockouts`,async e=>{await k(P(e,`Home`)).toHaveTextContent(`a draw, then who goes through`),await k(P(e,`Home`)).not.toHaveTextContent(`+13 through`),await k(A(P(e,`Picks`)).getByRole(`region`,{name:`Quarter-finals`})).toBeVisible()}),V=N(`morning`,async e=>{await k(A(P(e,`Picks`)).getByRole(`region`,{name:`Matchday 2 ends`})).toHaveTextContent(`1 token left`)},e=>{let t=e.picks.find(t=>t.user===e.you&&t.kind===`scorer`&&t.round===`MD2`);return{...e,now:Date.parse(`2028-06-17T07:10:00Z`),picks:e.picks.filter(e=>e!==t).map(t=>t.user===e.you&&t.kind===`tokens`&&t.fixture===`A-3`&&t.team===`IT`?{...t,count:t.count-1}:t)}}),H=[`Eve`,`Morning`,`Reveal`,`Live`,`Night`,`Knockouts`,`RoundEnds`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`at("eve", async root => {
  await expect(within(part(root, "Home")).getByRole("button", {
    name: "Lock 8 by 12:00 tomorrow"
  })).toBeVisible();
  await expect(part(root, "Home")).toHaveTextContent("Fri 9 Jun");
  await expect(part(root, "Picks")).toHaveTextContent("Switzerland, 900 pts");
})`,...F.parameters?.docs?.source},description:{story:`The day before matchday 1: the champion and tomorrow's match, its scorers and tokens, to lock; three rounds drafted ahead.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`at("morning", async root => {
  await expect(within(part(root, "Home")).getByRole("button", {
    name: "Draft 1 by 12:00 today"
  })).toBeVisible();
  await expect(part(root, "Home").querySelectorAll("[data-match]")).toHaveLength(3);
  await expect(part(root, "Home").querySelectorAll("[data-channel]")).toHaveLength(3);
  await expect(within(part(root, "Picks")).getByRole("region", {
    name: "Matchday 3"
  })).toHaveTextContent("4 of 4 drafted");
  await expect(within(part(root, "Match picks")).getByRole("region", {
    name: "Today, 12:00"
  })).toHaveTextContent("2 to lock");
})`,...I.parameters?.docs?.source},description:{story:`08:10 on a match day: a match to draft first, matchday 2 locked and matchday 3 drafted.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`at("reveal", async root => {
  await expect(within(part(root, "Home")).getByRole("button", {
    name: "Lock 3 by 12:00 tomorrow"
  })).toBeVisible();
  await expect(part(root, "Home")).toHaveTextContent("Mel alone backs the draw");
})`,...L.parameters?.docs?.source},description:{story:`12:05: today's matches locked, with the split and a hot take; tomorrow's to lock.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`at("live", async root => {
  const live = part(root, "Home").querySelector<HTMLElement>('[data-phase="live"]')!;
  await expect([...within(live).getByRole("list", {
    name: "As it stands"
  }).querySelectorAll<HTMLElement>("[data-person]")].map(x => x.dataset.person)).toEqual(["Kit", "Priya Shah", "Alex"]);
})`,...R.parameters?.docs?.source},description:{story:`18:25: a match being played: the score, the split, and each friend's points as it stands.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`at("night", async root => {
  await expect(within(part(root, "Home")).getAllByRole("list", {
    name: "Who earned what"
  }).length).toBeGreaterThan(0);
})`,...z.parameters?.docs?.source},description:{story:`22:30: the day's results, who earned what.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`at("knockouts", async root => {
  await expect(part(root, "Home")).toHaveTextContent("a draw, then who goes through");
  await expect(part(root, "Home")).not.toHaveTextContent("+13 through");
  await expect(within(part(root, "Picks")).getByRole("region", {
    name: "Quarter-finals"
  })).toBeVisible();
})`,...B.parameters?.docs?.source},description:{story:`The round of 16: one pick on how each tie ends, four tiles (design B).`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`at("morning", async root => {
  await expect(within(part(root, "Picks")).getByRole("region", {
    name: "Matchday 2 ends"
  })).toHaveTextContent("1 token left");
}, s => {
  const scorer = s.picks.find(p => p.user === s.you && p.kind === "scorer" && p.round === "MD2")!;
  return {
    ...s,
    now: Date.parse("2028-06-17T07:10:00Z"),
    picks: s.picks.filter(p => p !== scorer).map(p => p.user === s.you && p.kind === "tokens" && p.fixture === "A-3" && p.team === "IT" ? {
      ...p,
      count: p.count! - 1
    } : p)
  };
})`,...V.parameters?.docs?.source},description:{story:`Matchday 2's last day with a token and a scorer unplaced (one token fewer on your Italy stack on A-3, one scorer
fewer): the round's end, and the rows in red.`,...V.parameters?.docs?.description}}}})))()}U();export{F as Eve,B as Knockouts,R as Live,I as Morning,z as Night,L as Reveal,V as RoundEnds,H as __namedExportsOrder,j as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{o as n,s as r,t as i,u as a}from"./src-Ckdztxlk.js";import{i as o,r as s}from"./checks-CKr9wmxM.js";import{i as c,t as l}from"./moments-Cjxlj8DI.js";import{n as u,r as d}from"./Clock-fMXUj84F.js";import{n as f,t as p}from"./MatchCard-DjdgOBos.js";import{n as m,t as h}from"./LockButton-BMN_kwAU.js";import{i as g,n as _,r as v,t as y}from"./NotOpenRow-BB3fUOcV.js";import{i as b,n as x,r as S,t as C}from"./RoundEnding-A2VXwXWz.js";import{n as w,t as T}from"./RoundBand--FoWC7dC.js";function E({title:e,children:t}){return(0,O.jsxs)(`section`,{"aria-label":e,className:`grid grid-cols-1 gap-3`,children:[(0,O.jsx)(`h2`,{className:`text-title font-bold`,children:e}),t]})}function D({s:e}){let t={...e,fixtures:e.fixtures.map((e,t)=>({...e,channel:t%2==0?`BBC One`:`ITV1`}))},i=r(t),o=a(t),s=n(t);return(0,O.jsxs)(`div`,{className:`grid grid-cols-1 gap-8`,children:[(0,O.jsxs)(E,{title:`Home`,children:[i.due&&(0,O.jsx)(h,{due:i.due,pace:i.pace,onPress:M}),i.clock&&(0,O.jsx)(`div`,{children:(0,O.jsx)(u,{clock:i.clock})}),i.day&&(0,O.jsx)(`h3`,{className:`text-body font-bold`,children:i.day.title}),i.day?.cards.map(e=>(0,O.jsx)(p,{card:e,onOpen:M},e.id))]}),(0,O.jsxs)(E,{title:`Picks`,children:[o.ending&&(0,O.jsx)(C,{ending:o.ending,onUse:M}),(0,O.jsx)(S,{picks:o,onOpen:M,onAction:M}),(0,O.jsx)(`h3`,{className:`text-body font-bold`,children:`When things lock`}),o.bands.map(e=>(0,O.jsx)(T,{band:e,onRow:M},e.round))]}),(0,O.jsxs)(E,{title:`Match picks`,children:[s.days.map(e=>(0,O.jsx)(v,{day:e,onLock:M,onOpen:M,onScorers:M,onTokens:M},e.at)),s.notOpen.length>0&&(0,O.jsx)(`ul`,{className:`grid gap-2`,children:s.notOpen.map(e=>(0,O.jsx)(y,{item:e},e.id))})]})]})}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{i(),s(),l(),d(),m(),f(),g(),_(),b(),w(),x(),O=t(),{expect:k,within:A}=__STORYBOOK_MODULE_TEST__,j={title:`Domain/Together`,parameters:{layout:`padded`}},M=()=>{},N=(e,t,n)=>({loaders:[c(e)],render:(e,{loaded:t})=>{let r=t.s;return(0,O.jsx)(D,{s:n?n(r):r})},play:async({canvasElement:e})=>{await t(e),await o(e)}}),P=(e,t)=>A(e).getByRole(`region`,{name:t}),F=N(`eve`,async e=>{await k(A(P(e,`Home`)).getByRole(`button`,{name:`Lock 2 by 12:00 tomorrow`})).toBeVisible(),await k(P(e,`Home`)).toHaveTextContent(`Fri 9 Jun`),await k(P(e,`Picks`)).toHaveTextContent(`Croatia, 900 pts`)}),I=N(`morning`,async e=>{await k(A(P(e,`Home`)).getByRole(`button`,{name:`Draft 1 by 12:00 today`})).toBeVisible(),await k(P(e,`Home`).querySelectorAll(`[data-match]`)).toHaveLength(3),await k(P(e,`Home`).querySelectorAll(`[data-channel]`)).toHaveLength(3),await k(A(P(e,`Picks`)).getByRole(`region`,{name:`Matchday 3`})).toHaveTextContent(`4 of 4 drafted`),await k(A(P(e,`Match picks`)).getByRole(`region`,{name:`Today, 12:00`})).toHaveTextContent(`2 to lock`)}),L=N(`reveal`,async e=>{await k(A(P(e,`Home`)).getByRole(`button`,{name:`Lock 3 by 12:00 tomorrow`})).toBeVisible(),await k(P(e,`Home`)).toHaveTextContent(`Tom alone backs Poland`)}),R=N(`live`,async e=>{let t=P(e,`Home`).querySelector(`[data-phase="live"]`);await k([...A(t).getByRole(`list`,{name:`As it stands`}).querySelectorAll(`[data-person]`)].map(e=>e.dataset.person)).toEqual([`Kit`,`Priya Shah`])}),z=N(`night`,async e=>{await k(A(P(e,`Home`)).getAllByRole(`list`,{name:`Who earned what`}).length).toBeGreaterThan(0)}),B=N(`knockouts`,async e=>{await k(P(e,`Home`)).toHaveTextContent(`+13 through`),await k(A(P(e,`Picks`)).getByRole(`region`,{name:`Quarter-finals`})).toBeVisible()}),V=N(`morning`,async e=>{await k(A(P(e,`Picks`)).getByRole(`region`,{name:`Matchday 2 ends`})).toHaveTextContent(`1 token left`)},e=>{let t=e.picks.find(t=>t.user===e.you&&t.kind===`scorer`&&t.round===`MD2`);return{...e,now:Date.parse(`2028-06-17T07:10:00Z`),picks:e.picks.filter(n=>n!==t&&(n.user!==e.you||n.kind!==`tokens`||n.fixture!==`A-3`||n.team!==`ES`))}}),H=[`Eve`,`Morning`,`Reveal`,`Live`,`Night`,`Knockouts`,`RoundEnds`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`at("eve", async root => {
  await expect(within(part(root, "Home")).getByRole("button", {
    name: "Lock 2 by 12:00 tomorrow"
  })).toBeVisible();
  await expect(part(root, "Home")).toHaveTextContent("Fri 9 Jun");
  await expect(part(root, "Picks")).toHaveTextContent("Croatia, 900 pts");
})`,...F.parameters?.docs?.source},description:{story:`The day before matchday 1: the champion and tomorrow's match to lock; three rounds drafted ahead.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`at("morning", async root => {
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
  await expect(part(root, "Home")).toHaveTextContent("Tom alone backs Poland");
})`,...L.parameters?.docs?.source},description:{story:`12:05: today's matches locked, with the split and a hot take; tomorrow's to lock.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`at("live", async root => {
  const live = part(root, "Home").querySelector<HTMLElement>('[data-phase="live"]')!;
  await expect([...within(live).getByRole("list", {
    name: "As it stands"
  }).querySelectorAll<HTMLElement>("[data-person]")].map(x => x.dataset.person)).toEqual(["Kit", "Priya Shah"]);
})`,...R.parameters?.docs?.source},description:{story:`18:25: a match being played: the score, the split, and each friend's points as it stands.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`at("night", async root => {
  await expect(within(part(root, "Home")).getAllByRole("list", {
    name: "Who earned what"
  }).length).toBeGreaterThan(0);
})`,...z.parameters?.docs?.source},description:{story:`22:30: the day's results, who earned what.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`at("knockouts", async root => {
  await expect(part(root, "Home")).toHaveTextContent("+13 through");
  await expect(within(part(root, "Picks")).getByRole("region", {
    name: "Quarter-finals"
  })).toBeVisible();
})`,...B.parameters?.docs?.source},description:{story:`The round of 16: both picks on every tie.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`at("morning", async root => {
  await expect(within(part(root, "Picks")).getByRole("region", {
    name: "Matchday 2 ends"
  })).toHaveTextContent("1 token left");
}, s => {
  const scorer = s.picks.find(p => p.user === s.you && p.kind === "scorer" && p.round === "MD2")!;
  return {
    ...s,
    now: Date.parse("2028-06-17T07:10:00Z"),
    picks: s.picks.filter(p => p !== scorer && !(p.user === s.you && p.kind === "tokens" && p.fixture === "A-3" && p.team === "ES"))
  };
})`,...V.parameters?.docs?.source},description:{story:`Matchday 2's last day with a token and a scorer unplaced: the round's end, and the rows in red.`,...V.parameters?.docs?.description}}}})))()}U();export{F as Eve,B as Knockouts,R as Live,I as Morning,z as Night,L as Reveal,V as RoundEnds,H as __namedExportsOrder,j as default};
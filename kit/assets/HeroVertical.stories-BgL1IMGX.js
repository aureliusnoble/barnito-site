import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i}from"./checks-CKr9wmxM.js";import{a,f as o,h as s,i as c,n as l,r as u,s as d,t as f}from"./play-BtH8YofX.js";import{n as p,r as m}from"./HeroStack-B4SOujSJ.js";function h({morning:e}){let t=a(e.matches);return(0,g.jsx)(o,{morning:e,children:(0,g.jsx)(`section`,{"aria-label":`Today's matches`,className:`grid gap-3`,children:t.map(t=>(0,g.jsx)(p,{morning:e,match:t},t.id))})})}var g;function _(){return(_=e((()=>{s(),m(),d(),g=t(),h.__docgenInfo={description:`Mix 1: B's cards down the page instead of sideways, the one that needs you first.`,methods:[],displayName:`HeroStackVertical`,props:{morning:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
  date: string;
  deadline: string;
  minutesLeft: number;
  you: { name: string; rank: string; moved: number; total: number; overnight: number };
  matches: Match[];
  scorers: { used: number; of: number; drafts: { name: string; flag: string; perGoal: number }[] };
  /** Tokens are spent across the whole round (the owner, 20 Oct): more on one day, fewer on another, all of them by the
      round's last deadline. "pace" says whether what's placed so far is on track for that. */
  tokens: {
    placed: number;
    of: number;
    spendBy: string;
    pace: "on track" | "behind";
    drafts: { team: Team; stack: number; perGoalWon: number; perGoalLost: number }[];
  };
  /** Today's picks still to make before the deadline, and which. */
  missing: { picks: number; what: string };
  friends: Friend[];
  members: number;
  /** The table this morning, with last night's moves in places. */
  table: { rank: string; name: string; total: number; moved: number; you?: boolean }[];
}`,signature:{properties:[{key:`date`,value:{name:`string`,required:!0}},{key:`deadline`,value:{name:`string`,required:!0}},{key:`minutesLeft`,value:{name:`number`,required:!0}},{key:`you`,value:{name:`signature`,type:`object`,raw:`{ name: string; rank: string; moved: number; total: number; overnight: number }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`rank`,value:{name:`string`,required:!0}},{key:`moved`,value:{name:`number`,required:!0}},{key:`total`,value:{name:`number`,required:!0}},{key:`overnight`,value:{name:`number`,required:!0}}]},required:!0}},{key:`matches`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: MatchId;
  kickoff: string;
  channel: string;
  home: Team;
  away: Team;
  options: [Option, Option, Option];
  /** Your result pick, if any. */
  yours: { pick: OutcomeId; state: "draft" | "locked" } | null;
  /** Provisional Spicy: 0 to 5. */
  chillies: number;
}`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`"sco-aut" | "esp-cro" | "eng-den"`,elements:[{name:`literal`,value:`"sco-aut"`},{name:`literal`,value:`"esp-cro"`},{name:`literal`,value:`"eng-den"`}],required:!0}},{key:`kickoff`,value:{name:`string`,required:!0}},{key:`channel`,value:{name:`string`,required:!0}},{key:`home`,value:{name:`signature`,type:`object`,raw:`{ name: string; flag: string }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`flag`,value:{name:`string`,required:!0}}]},required:!0}},{key:`away`,value:{name:`signature`,type:`object`,raw:`{ name: string; flag: string }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`flag`,value:{name:`string`,required:!0}}]},required:!0}},{key:`options`,value:{name:`tuple`,raw:`[Option, Option, Option]`,elements:[{name:`signature`,type:`object`,raw:`{ id: OutcomeId; chance: number; points: number }`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`"home" | "draw" | "away"`,elements:[{name:`literal`,value:`"home"`},{name:`literal`,value:`"draw"`},{name:`literal`,value:`"away"`}],required:!0}},{key:`chance`,value:{name:`number`,required:!0}},{key:`points`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ id: OutcomeId; chance: number; points: number }`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`"home" | "draw" | "away"`,elements:[{name:`literal`,value:`"home"`},{name:`literal`,value:`"draw"`},{name:`literal`,value:`"away"`}],required:!0}},{key:`chance`,value:{name:`number`,required:!0}},{key:`points`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ id: OutcomeId; chance: number; points: number }`,signature:{properties:[{key:`id`,value:{name:`union`,raw:`"home" | "draw" | "away"`,elements:[{name:`literal`,value:`"home"`},{name:`literal`,value:`"draw"`},{name:`literal`,value:`"away"`}],required:!0}},{key:`chance`,value:{name:`number`,required:!0}},{key:`points`,value:{name:`number`,required:!0}}]}}],required:!0}},{key:`yours`,value:{name:`union`,raw:`{ pick: OutcomeId; state: "draft" | "locked" } | null`,elements:[{name:`signature`,type:`object`,raw:`{ pick: OutcomeId; state: "draft" | "locked" }`,signature:{properties:[{key:`pick`,value:{name:`union`,raw:`"home" | "draw" | "away"`,elements:[{name:`literal`,value:`"home"`},{name:`literal`,value:`"draw"`},{name:`literal`,value:`"away"`}],required:!0}},{key:`state`,value:{name:`union`,raw:`"draft" | "locked"`,elements:[{name:`literal`,value:`"draft"`},{name:`literal`,value:`"locked"`}],required:!0}}]}},{name:`null`}],required:!0},description:`Your result pick, if any.`},{key:`chillies`,value:{name:`number`,required:!0},description:`Provisional Spicy: 0 to 5.`}]}}],raw:`Match[]`,required:!0}},{key:`scorers`,value:{name:`signature`,type:`object`,raw:`{ used: number; of: number; drafts: { name: string; flag: string; perGoal: number }[] }`,signature:{properties:[{key:`used`,value:{name:`number`,required:!0}},{key:`of`,value:{name:`number`,required:!0}},{key:`drafts`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ name: string; flag: string; perGoal: number }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`flag`,value:{name:`string`,required:!0}},{key:`perGoal`,value:{name:`number`,required:!0}}]}}],raw:`{ name: string; flag: string; perGoal: number }[]`,required:!0}}]},required:!0}},{key:`tokens`,value:{name:`signature`,type:`object`,raw:`{
  placed: number;
  of: number;
  spendBy: string;
  pace: "on track" | "behind";
  drafts: { team: Team; stack: number; perGoalWon: number; perGoalLost: number }[];
}`,signature:{properties:[{key:`placed`,value:{name:`number`,required:!0}},{key:`of`,value:{name:`number`,required:!0}},{key:`spendBy`,value:{name:`string`,required:!0}},{key:`pace`,value:{name:`union`,raw:`"on track" | "behind"`,elements:[{name:`literal`,value:`"on track"`},{name:`literal`,value:`"behind"`}],required:!0}},{key:`drafts`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ team: Team; stack: number; perGoalWon: number; perGoalLost: number }`,signature:{properties:[{key:`team`,value:{name:`signature`,type:`object`,raw:`{ name: string; flag: string }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`flag`,value:{name:`string`,required:!0}}]},required:!0}},{key:`stack`,value:{name:`number`,required:!0}},{key:`perGoalWon`,value:{name:`number`,required:!0}},{key:`perGoalLost`,value:{name:`number`,required:!0}}]}}],raw:`{ team: Team; stack: number; perGoalWon: number; perGoalLost: number }[]`,required:!0}}]},required:!0},description:`Tokens are spent across the whole round (the owner, 20 Oct): more on one day, fewer on another, all of them by the
      round's last deadline. "pace" says whether what's placed so far is on track for that.`},{key:`missing`,value:{name:`signature`,type:`object`,raw:`{ picks: number; what: string }`,signature:{properties:[{key:`picks`,value:{name:`number`,required:!0}},{key:`what`,value:{name:`string`,required:!0}}]},required:!0},description:`Today's picks still to make before the deadline, and which.`},{key:`friends`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ name: string; locked: MatchId[] }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`locked`,value:{name:`Array`,elements:[{name:`union`,raw:`"sco-aut" | "esp-cro" | "eng-den"`,elements:[{name:`literal`,value:`"sco-aut"`},{name:`literal`,value:`"esp-cro"`},{name:`literal`,value:`"eng-den"`}],required:!0}],raw:`MatchId[]`,required:!0}}]}}],raw:`Friend[]`,required:!0}},{key:`members`,value:{name:`number`,required:!0}},{key:`table`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ rank: string; name: string; total: number; moved: number; you?: boolean }`,signature:{properties:[{key:`rank`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`total`,value:{name:`number`,required:!0}},{key:`moved`,value:{name:`number`,required:!0}},{key:`you`,value:{name:`boolean`,required:!1}}]}}],raw:`{ rank: string; name: string; total: number; moved: number; you?: boolean }[]`,required:!0},description:`The table this morning, with last night's moves in places.`}]}},description:``}}}})))()}var v,y,b,x,S,C;function w(){return(w=e((()=>{_(),i(),d(),l(),v=t(),{expect:y}=__STORYBOOK_MODULE_TEST__,b={title:`Heroes/Mix 1 The stack, vertical`,parameters:{layout:`fullscreen`}},x={render:()=>(0,v.jsx)(h,{morning:c}),play:async e=>{await f(e);let t=[...e.canvasElement.querySelectorAll(`[data-match]`)];await y(t.map(e=>e.dataset.match)).toEqual([`eng-den`,`esp-cro`,`sco-aut`]);for(let e=1;e<t.length;e++)await y(t[e].getBoundingClientRect().top).toBeGreaterThanOrEqual(t[e-1].getBoundingClientRect().bottom)}},S={render:()=>(0,v.jsx)(h,{morning:u}),play:async({canvasElement:e})=>{await r(()=>[...e.querySelectorAll(`[data-match]`)]),await n(e)}},C=[`Euro2028`,`LongNames`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStackVertical morning={MORNING} />,
  play: async context => {
    await heroChecks(context);
    const cards = [...context.canvasElement.querySelectorAll<HTMLElement>("[data-match]")];
    await expect(cards.map(c => c.dataset.match)).toEqual(["eng-den", "esp-cro", "sco-aut"]);
    for (let i = 1; i < cards.length; i++) await expect(cards[i]!.getBoundingClientRect().top).toBeGreaterThanOrEqual(cards[i - 1]!.getBoundingClientRect().bottom);
  }
}`,...x.parameters?.docs?.source},description:{story:`Today's cards down the page, what needs you first.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStackVertical morning={LONG_NAMES} />,
  play: async ({
    canvasElement
  }) => {
    await fitsInside(() => [...canvasElement.querySelectorAll<HTMLElement>("[data-match]")]);
    await noSidewaysScroll(canvasElement);
  }
}`,...S.parameters?.docs?.source},description:{story:`The longest names never push the page sideways (final review: 448 px at 360).`,...S.parameters?.docs?.description}}}})))()}w();export{x as Euro2028,S as LongNames,C as __namedExportsOrder,b as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-CKr9wmxM.js";import{a as i,f as a,h as o,i as s,n as c,o as l,s as u,t as d}from"./play-BtH8YofX.js";import{n as f,t as p}from"./Button-DV5UdU4K.js";import{r as m,t as h}from"./Avatar-DvpBdAlw.js";import{n as g,t as _}from"./Delta-BLQxyyJa.js";import{n as v,r as y}from"./HeroStack-B4SOujSJ.js";function b({row:e}){return(0,S.jsxs)(`li`,{className:`flex min-h-target items-center gap-3 rounded-tile px-2 ${e.you?`bg-mine-soft`:``}`,children:[(0,S.jsx)(`span`,{className:`w-10 shrink-0 font-num text-label font-bold text-fg-muted`,children:e.rank}),(0,S.jsx)(`span`,{"aria-hidden":!0,className:`shrink-0`,children:(0,S.jsx)(h,{name:e.name,...e.you&&{you:!0}})}),(0,S.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-body font-semibold`,children:e.name}),(0,S.jsx)(`span`,{className:`w-10 shrink-0 text-right text-label`,children:(0,S.jsx)(_,{value:e.moved,places:!0})}),(0,S.jsx)(`span`,{className:`w-12 shrink-0 text-right font-num text-body font-bold`,children:e.total})]})}function x({morning:e}){let{top:t,around:n}=l(e.table);return(0,S.jsxs)(a,{morning:e,children:[(0,S.jsx)(`section`,{"aria-label":`Today's matches`,className:`-mx-gutter flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-gutter px-gutter pb-1 [scrollbar-width:none]`,children:i(e.matches).map(t=>(0,S.jsx)(v,{morning:e,match:t,className:`w-[86%] shrink-0 snap-center`},t.id))}),(0,S.jsxs)(`section`,{"aria-label":`The table`,className:`grid gap-1 rounded-card bg-surface px-2 py-2`,children:[(0,S.jsx)(`ol`,{className:`grid`,children:t.map(e=>(0,S.jsx)(b,{row:e},e.name))}),n.length>0&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`span`,{"aria-hidden":!0,className:`px-2 text-center font-num text-label font-bold text-fg-muted`,children:`⋯`}),(0,S.jsx)(`ol`,{className:`grid`,children:n.map(e=>(0,S.jsx)(b,{row:e},e.name))})]}),(0,S.jsx)(p,{variant:`quiet`,size:`s`,children:`See the table`})]})]})}var S;function C(){return(C=e((()=>{m(),f(),g(),o(),y(),u(),S=t(),x.__docgenInfo={description:`Mix 2, Home's hero (the owner, 22 Oct): B's sideways deck, with the table in the space below: the top five, or the
    top three and you between your neighbours, with last night's moves.`,methods:[],displayName:`HeroStackTable`,props:{morning:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
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
      round's last deadline. "pace" says whether what's placed so far is on track for that.`},{key:`missing`,value:{name:`signature`,type:`object`,raw:`{ picks: number; what: string }`,signature:{properties:[{key:`picks`,value:{name:`number`,required:!0}},{key:`what`,value:{name:`string`,required:!0}}]},required:!0},description:`Today's picks still to make before the deadline, and which.`},{key:`friends`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ name: string; locked: MatchId[] }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`locked`,value:{name:`Array`,elements:[{name:`union`,raw:`"sco-aut" | "esp-cro" | "eng-den"`,elements:[{name:`literal`,value:`"sco-aut"`},{name:`literal`,value:`"esp-cro"`},{name:`literal`,value:`"eng-den"`}],required:!0}],raw:`MatchId[]`,required:!0}}]}}],raw:`Friend[]`,required:!0}},{key:`members`,value:{name:`number`,required:!0}},{key:`table`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ rank: string; name: string; total: number; moved: number; you?: boolean }`,signature:{properties:[{key:`rank`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}},{key:`total`,value:{name:`number`,required:!0}},{key:`moved`,value:{name:`number`,required:!0}},{key:`you`,value:{name:`boolean`,required:!1}}]}}],raw:`{ rank: string; name: string; total: number; moved: number; you?: boolean }[]`,required:!0},description:`The table this morning, with last night's moves in places.`}]}},description:``}}}})))()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{r(),C(),u(),c(),w=t(),{expect:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Heroes/Mix 2 The stack and the table`,parameters:{layout:`fullscreen`}},O={render:()=>(0,w.jsx)(x,{morning:s}),play:async e=>{await d(e);let t=e.canvasElement.querySelector(`[data-match]`);await T(t?.dataset.match,`the deck opens on what needs you`).toBe(`eng-den`);let n=e.canvas.getByRole(`region`,{name:`The table`});await T(n.querySelectorAll(`li`)).toHaveLength(5),await T(n).toHaveTextContent(`=2nd`),await T(n).toHaveTextContent(`112`),await T(e.canvas.getByRole(`button`,{name:`See the table`})).toBeVisible()}},k=e=>({...s,...e}),A=e=>E(e).queryAllByRole(`status`).filter(e=>/missing/.test(e.textContent??``)),j={render:()=>(0,w.jsx)(x,{morning:k({missing:{picks:0,what:``}})}),play:async({canvas:e,canvasElement:t})=>{await T(A(t)).toHaveLength(0),await T(e.getByRole(`link`,{name:/Picks/})).toHaveAccessibleName(`Picks`),await n(t)}},M={render:()=>(0,w.jsx)(x,{morning:k({missing:{picks:1,what:`England v Denmark`}})}),play:async({canvasElement:e})=>{let[t]=A(e);await T(t).toHaveTextContent(`1 pick missing`),await T(t).not.toHaveTextContent(`1 picks`)}},N={render:()=>(0,w.jsx)(x,{morning:k({minutesLeft:12})}),play:async({canvas:e,canvasElement:t})=>{let[n]=A(t);await T(n).toHaveAttribute(`data-tone`,`urgent`),await T(n).toHaveTextContent(`2 picks missing, 12m left`),await T(E(n).getByRole(`button`,{name:`Pick now`})).toBeVisible(),await T(e.getByRole(`timer`)).toHaveTextContent(`12m`)}},P={render:()=>(0,w.jsx)(x,{morning:s}),play:async({canvasElement:e})=>{let[t]=A(e);await T(t).toHaveAttribute(`data-tone`,`warn`),await T(t).not.toHaveTextContent(`left`)}},F={render:()=>(0,w.jsx)(x,{morning:k({minutesLeft:0})}),play:async({canvas:e,canvasElement:t})=>{await T(A(t)).toHaveLength(0),await T(e.queryByRole(`button`,{name:`Pick now`})).toBeNull(),await T(e.getByRole(`link`,{name:/Picks/})).toHaveAccessibleName(`Picks`),await T(e.getByRole(`timer`)).toHaveTextContent(`Locked`)}},I={render:()=>{let e=[`Sam`,`Priya Shah`,`Tom`,`Ana`,`Jonny`,`Mel`,`You`,`Raj`,`Kit`].map((e,t)=>({rank:[`1st`,`2nd`,`3rd`,`4th`,`5th`,`6th`,`7th`,`8th`,`9th`][t],name:e,total:118-t*4,moved:e===`You`?3:0,...e===`You`&&{you:!0}}));return(0,w.jsx)(x,{morning:{...s,table:e,you:{...s.you,rank:`7th`,total:94}}})},play:async({canvas:e,canvasElement:t})=>{let r=e.getByRole(`region`,{name:`The table`}),i=E(r).getAllByRole(`list`);await T(i.map(e=>E(e).getAllByRole(`listitem`).map(e=>e.textContent?.match(/^\d+\w\w/)?.[0]))).toEqual([[`1st`,`2nd`,`3rd`],[`6th`,`7th`,`8th`]]);let a=E(i[1]).getAllByRole(`listitem`)[1];await T(a).toHaveTextContent(`You`),await T(a).toHaveTextContent(/up 3/),await n(t)}},L=[`Euro2028`,`NothingMissing`,`OneMissing`,`LastHour`,`WithTime`,`AfterTheDeadline`,`YouLowerDown`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStackTable morning={MORNING} />,
  play: async context => {
    await heroChecks(context);
    const first = context.canvasElement.querySelector<HTMLElement>("[data-match]");
    await expect(first?.dataset.match, "the deck opens on what needs you").toBe("eng-den");
    const table = context.canvas.getByRole("region", {
      name: "The table"
    });
    await expect(table.querySelectorAll("li")).toHaveLength(5);
    await expect(table).toHaveTextContent("=2nd");
    await expect(table).toHaveTextContent("112");
    await expect(context.canvas.getByRole("button", {
      name: "See the table"
    })).toBeVisible();
  }
}`,...O.parameters?.docs?.source},description:{story:`The sideways deck, with the table using the space below it.`,...O.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStackTable morning={at({
    missing: {
      picks: 0,
      what: ""
    }
  })} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(warnings(canvasElement)).toHaveLength(0);
    await expect(canvas.getByRole("link", {
      name: /Picks/
    })).toHaveAccessibleName("Picks");
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`Nothing missing: no warning, and no count on the Picks tab.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStackTable morning={at({
    missing: {
      picks: 1,
      what: "England v Denmark"
    }
  })} />,
  play: async ({
    canvasElement
  }) => {
    const [warning] = warnings(canvasElement);
    await expect(warning).toHaveTextContent("1 pick missing");
    await expect(warning).not.toHaveTextContent("1 picks");
  }
}`,...M.parameters?.docs?.source},description:{story:`One pick missing reads "1 pick missing".`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStackTable morning={at({
    minutesLeft: 12
  })} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const [warning] = warnings(canvasElement);
    await expect(warning).toHaveAttribute("data-tone", "urgent");
    await expect(warning).toHaveTextContent("2 picks missing, 12m left");
    await expect(within(warning!).getByRole("button", {
      name: "Pick now"
    })).toBeVisible();
    await expect(canvas.getByRole("timer")).toHaveTextContent("12m");
  }
}`,...N.parameters?.docs?.source},description:{story:`The last hour: red, with a clock and the time left in the warning itself (D18 as amended by the owner, 22 Oct).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStackTable morning={MORNING} />,
  play: async ({
    canvasElement
  }) => {
    const [warning] = warnings(canvasElement);
    await expect(warning).toHaveAttribute("data-tone", "warn");
    await expect(warning).not.toHaveTextContent("left");
  }
}`,...P.parameters?.docs?.source},description:{story:`With time to spare: amber, the count without a clock.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStackTable morning={at({
    minutesLeft: 0
  })} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(warnings(canvasElement)).toHaveLength(0);
    await expect(canvas.queryByRole("button", {
      name: "Pick now"
    })).toBeNull();
    await expect(canvas.getByRole("link", {
      name: /Picks/
    })).toHaveAccessibleName("Picks");
    await expect(canvas.getByRole("timer")).toHaveTextContent("Locked");
  }
}`,...F.parameters?.docs?.source},description:{story:`After the deadline nothing can be picked: no warning, no "Pick now", no count on the tab; the clock says Locked.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const names = ["Sam", "Priya Shah", "Tom", "Ana", "Jonny", "Mel", "You", "Raj", "Kit"];
    const table = names.map((name, i) => ({
      rank: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"][i]!,
      name,
      total: 118 - i * 4,
      moved: name === "You" ? 3 : 0,
      ...(name === "You" && {
        you: true
      })
    }));
    return <HeroStackTable morning={{
      ...MORNING,
      table,
      you: {
        ...MORNING.you,
        rank: "7th",
        total: 94
      }
    }} />;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const table = canvas.getByRole("region", {
      name: "The table"
    });
    const lists = within(table).getAllByRole("list");
    await expect(lists.map(list => within(list).getAllByRole("listitem").map(item => item.textContent?.match(/^\\d+\\w\\w/)?.[0]))).toEqual([["1st", "2nd", "3rd"], ["6th", "7th", "8th"]]);
    const you = within(lists[1]!).getAllByRole("listitem")[1]!;
    await expect(you).toHaveTextContent("You");
    await expect(you).toHaveTextContent(/up 3/);
    await noSidewaysScroll(canvasElement);
  }
}`,...I.parameters?.docs?.source},description:{story:`You in 7th: the top three, then 6th, you and 8th, so your rank and move are still on Home (the owner, 22 Oct).`,...I.parameters?.docs?.description}}}})))()}R();export{F as AfterTheDeadline,O as Euro2028,N as LastHour,j as NothingMissing,M as OneMissing,P as WithTime,I as YouLowerDown,L as __namedExportsOrder,D as default};
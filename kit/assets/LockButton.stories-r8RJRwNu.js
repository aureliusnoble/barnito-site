import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./LockButton-DfkUlZu3.js";import{ct as i,dt as a,lt as o,t as s}from"./src-Ca_r4w3v.js";import{i as c,r as l}from"./checks-C0Y16pbK.js";import{i as u,t as d}from"./moments-Bzx1n_TW.js";import{n as f,t as p}from"./sealed-CI1Ph_WX.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{s(),l(),d(),f(),n(),m=t(),{expect:h,fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Domain/LockButton`,parameters:{layout:`padded`}},v=g(),y=e=>o(e.s),b=e=>e.dataset.tone,x=e=>[...e.querySelectorAll(`.font-num`)].map(e=>e.textContent),S={loaders:[u(`eve`)],render:(e,{loaded:t})=>(0,m.jsx)(r,{due:y(t),onPress:v}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{v.mockClear();let r=e.getByRole(`button`,{name:`Lock 8 by 12:00 tomorrow`});await h(b(r)).toBe(`tomorrow`),await h(x(r)).toEqual([`8`,`12:00`]),await n.click(r),await h(v).toHaveBeenCalledOnce(),await c(t)}},C={loaders:[u(`morning`)],render:(e,{loaded:t})=>(0,m.jsx)(r,{due:y(t),onPress:v}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`button`,{name:`Draft 1 by 12:00 today`});await h(b(n)).toBe(`today`),await h(n.querySelector(`[data-icon=draft]`)).not.toBeNull(),await c(t)}},w={loaders:[u(`reveal`)],render:(e,{loaded:t})=>(0,m.jsx)(r,{due:y(t),onPress:v}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Lock 3 by 12:00 tomorrow`});await h(t.querySelector(`[data-icon=lock]`)).not.toBeNull()}},T={loaders:[u(`morning`)],render:(e,{loaded:t})=>{let n=t.s,i={...n,picks:[...n.picks.map(e=>e.user===n.you&&e.fixture===`C-3`&&e.status===`draft`?{...e,status:`locked`}:e),{id:`c4`,user:n.you,kind:`result`,fixture:`C-4`,round:`MD2`,outcome:`draw`,status:`locked`}]};return(0,m.jsx)(r,{due:o(i),onPress:v})},play:async({canvas:e})=>{await h(b(e.getByRole(`button`,{name:`All locked for today`}))).toBe(`done`)}},E={loaders:[u(`knockouts`)],render:(e,{loaded:t})=>{let n=t.s,i={...n,picks:n.picks.map(e=>e.user===n.you&&e.kind===`knockout`&&[`M37`,`M38`].includes(e.fixture)?{...e,status:`locked`}:e)};return(0,m.jsx)(r,{due:o(i),onPress:v})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Lock 5 by 12:00 today`});await h(b(t)).toBe(`today`),await h(t.querySelector(`[data-icon=lock]`)).not.toBeNull()}},D=(e,t=!1)=>{let n=t?e.picks.find(t=>t.user===e.you&&t.kind===`scorer`&&t.round===`MD2`):void 0;return{...e,now:Date.parse(`2028-06-17T07:10:00Z`),picks:e.picks.filter(e=>e!==n).map(t=>t.user===e.you?[`E-4`,`F-3`,`F-4`].includes(t.fixture)?{...t,status:`locked`}:t.kind===`tokens`&&t.fixture===`A-3`&&t.team===`IT`?{...t,count:2}:t:t)}},O={loaders:[u(`morning`)],render:(e,{loaded:t})=>{let n=D(t.s);return(0,m.jsx)(r,{due:o(n),pace:[{kind:`tokens`,...a(n,`tokens`).pill}],onPress:v})},play:async({canvas:e,canvasElement:t,userEvent:n})=>{v.mockClear();let r=e.getByRole(`button`,{name:`Place 2 tokens by 12:00 today`});await h(b(r)).toBe(`today`),await h(r.querySelector(`[data-icon=tokens]`)).not.toBeNull(),await h(t).toHaveTextContent(`Tokens: 2 left today`),await n.click(r),await h(v).toHaveBeenCalledOnce(),await c(t)}},k={loaders:[u(`morning`)],render:(e,{loaded:t})=>(0,m.jsx)(r,{due:o(D(t.s,!0)),onPress:v}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`button`,{name:`Place 2 tokens, pick 1 scorer by 12:00 today`});await h(n.querySelector(`[data-icon=tokens]`)).not.toBeNull(),await c(t)}},A={loaders:[u(`morning`)],render:(e,{loaded:t})=>{let n=t.s,i={...n,now:Date.parse(`2028-06-16T07:10:00Z`),picks:n.picks.filter(e=>e.user!==n.you||e.kind!==`tokens`||e.fixture!==`A-3`||e.team!==`IT`)},s=a(i,`tokens`).pill;return(0,m.jsx)(r,{due:o(i),pace:[{kind:`tokens`,...s}],onPress:v})},play:async({canvas:e,canvasElement:t})=>{await h(e.getByRole(`button`,{name:`Lock 3 by 12:00 today`})).toBeVisible(),await h(t).toHaveTextContent(`Tokens: Behind`),await h(t.querySelector(`.bg-warn-solid`)).not.toBeNull(),await c(t)}},j={loaders:[u(`knockouts`)],render:(e,{loaded:t})=>{let n=i(p(t.s)),a=o(n);return(0,m.jsxs)(`div`,{className:`grid gap-3`,children:[(0,m.jsx)(r,{due:a,onPress:v}),(0,m.jsx)(`p`,{"data-due-names":``,children:a.matches.map(e=>`${e.home.name} v ${e.away.name}`).join(`, `)})]})},play:async({canvas:e,canvasElement:t})=>{await h(e.getByRole(`button`,{name:`Draft 1 by 12:00 Sun`})).toBeVisible(),await h(t.querySelector(`[data-due-names]`)).toHaveTextContent(`Spain v France or Portugal`),await c(t)}},M=[`Eve`,`Morning`,`Reveal`,`AllLocked`,`ScorersAndTokensLeft`,`RoundEnds`,`RoundEndsBoth`,`Behind`,`SealedFinal`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <LockButton due={due(loaded)} onPress={pressed} />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    pressed.mockClear();
    const button = canvas.getByRole("button", {
      name: "Lock 8 by 12:00 tomorrow"
    });
    await expect(tone(button)).toBe("tomorrow");
    await expect(numbers(button)).toEqual(["8", "12:00"]);
    await userEvent.click(button);
    await expect(pressed).toHaveBeenCalledOnce();
    await noSidewaysScroll(canvasElement);
  }
}`,...S.parameters?.docs?.source},description:{story:`The eve: the champion and tomorrow's match drafted, with its four scorers and two token stacks, in amber.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <LockButton due={due(loaded)} onPress={pressed} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const button = canvas.getByRole("button", {
      name: "Draft 1 by 12:00 today"
    });
    await expect(tone(button)).toBe("today");
    await expect(button.querySelector("[data-icon=draft]")).not.toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...C.parameters?.docs?.source},description:{story:`A match-day morning with a match still to pick: drafting comes first, in red.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("reveal")],
  render: (_, {
    loaded
  }) => <LockButton due={due(loaded)} onPress={pressed} />,
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole("button", {
      name: "Lock 3 by 12:00 tomorrow"
    });
    await expect(button.querySelector("[data-icon=lock]")).not.toBeNull();
  }
}`,...w.parameters?.docs?.source},description:{story:`After noon: tomorrow's three drafts.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    const locked: Snapshot = {
      ...s,
      picks: [...s.picks.map(p => p.user === s.you && p.fixture === "C-3" && p.status === "draft" ? {
        ...p,
        status: "locked" as const
      } : p), {
        id: "c4",
        user: s.you,
        kind: "result",
        fixture: "C-4",
        round: "MD2",
        outcome: "draw",
        status: "locked"
      }]
    };
    return <LockButton due={dueNext(locked)!} onPress={pressed} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(tone(canvas.getByRole("button", {
      name: "All locked for today"
    }))).toBe("done");
  }
}`,...T.parameters?.docs?.source},description:{story:`Everything due locked: quiet.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    return <LockButton due={dueNext(tied)!} onPress={pressed} />;
  },
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole("button", {
      name: "Lock 5 by 12:00 today"
    });
    await expect(tone(button)).toBe("today");
    await expect(button.querySelector("[data-icon=lock]")).not.toBeNull();
  }
}`,...E.parameters?.docs?.source},description:{story:`The round of 16 with both ties locked: their scorers and token stacks are still drafts due at noon, so not all
locked (the owner, 27 Oct 2026: option A).`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = lastDay((loaded as Loaded).s);
    return <LockButton due={dueNext(s)!} pace={[{
      kind: "tokens",
      ...budget(s, "tokens")!.pill
    }]} onPress={pressed} />;
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    pressed.mockClear();
    const button = canvas.getByRole("button", {
      name: "Place 2 tokens by 12:00 today"
    });
    await expect(tone(button)).toBe("today");
    await expect(button.querySelector("[data-icon=tokens]")).not.toBeNull();
    await expect(canvasElement).toHaveTextContent("Tokens: 2 left today");
    await userEvent.click(button);
    await expect(pressed).toHaveBeenCalledOnce();
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`The round's last day with tokens unplaced: never "All locked"; placing them comes before any Lock.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <LockButton due={dueNext(lastDay((loaded as Loaded).s, true))!} onPress={pressed} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const button = canvas.getByRole("button", {
      name: "Place 2 tokens, pick 1 scorer by 12:00 today"
    });
    await expect(button.querySelector("[data-icon=tokens]")).not.toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...k.parameters?.docs?.source},description:{story:`The same morning with a scorer unplaced as well: one label names both.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    const short: Snapshot = {
      ...s,
      now: Date.parse("2028-06-16T07:10:00Z"),
      picks: s.picks.filter(p => !(p.user === s.you && p.kind === "tokens" && p.fixture === "A-3" && p.team === "IT"))
    };
    const pill = budget(short, "tokens")!.pill;
    return <LockButton due={dueNext(short)!} pace={[{
      kind: "tokens",
      ...pill
    }]} onPress={pressed} />;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("button", {
      name: "Lock 3 by 12:00 today"
    })).toBeVisible();
    await expect(canvasElement).toHaveTextContent("Tokens: Behind");
    // The same tone as the Picks row's pace pill (F75): amber, solid.
    await expect(canvasElement.querySelector(".bg-warn-solid")).not.toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...A.parameters?.docs?.source},description:{story:`Behind the pace on tokens: the pill under the button says so, in a word as well as a colour.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => {
    const v = spoilerFree(finalMorning((loaded as Loaded).s));
    const d = dueNext(v)!;
    return <div className="grid gap-3">
        <LockButton due={d} onPress={pressed} />
        <p data-due-names="">{d.matches.map(m => \`\${m.home.name} v \${m.away.name}\`).join(", ")}</p>
      </div>;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("button", {
      name: "Draft 1 by 12:00 Sun"
    })).toBeVisible();
    await expect(canvasElement.querySelector("[data-due-names]")).toHaveTextContent("Spain v France or Portugal");
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`The morning after the second semi-final, kept back (spoiler-free mornings): the final still the next lock, one side
named by its match and not a team, and the button as it was.`,...j.parameters?.docs?.description}}}})))()}N();export{T as AllLocked,A as Behind,S as Eve,C as Morning,w as Reveal,O as RoundEnds,k as RoundEndsBoth,E as ScorersAndTokensLeft,j as SealedFinal,M as __namedExportsOrder,_ as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./SpendTokens-CnqcuN16.js";import{H as a,ct as o,t as s}from"./src-Ca_r4w3v.js";import{a as c,i as l,r as u}from"./checks-C0Y16pbK.js";import{i as d,t as f}from"./moments-Bzx1n_TW.js";import{i as p,n as m}from"./sealed-CI1Ph_WX.js";function h({s:e,round:t,start:n=`kickoff`}){let[r,o]=(0,g.useState)(n),s=a(e,t,{sort:r});return s?(0,_.jsx)(`div`,{className:`max-w-[390px]`,children:(0,_.jsx)(i,{view:s,sort:r,onSort:o,onChange:S,onLock:C,onReveal:w})}):null}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{s(),g=t(),u(),f(),m(),r(),_=n(),{expect:v,fn:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Domain/SpendTokens`,parameters:{layout:`padded`}},S=y(),C=y(),w=y(),T=(e,t)=>b(e).getByRole(`region`,{name:t}),E=(e,t)=>b(e).getByRole(`group`,{name:`${t}'s tokens`}),D={loaders:[d(`eve`)],render:(e,{loaded:t})=>(0,_.jsx)(h,{s:t.s,round:`MD1`}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{C.mockClear();let r=e.getByRole(`region`,{name:`Matchday 1`});await v(r).toHaveTextContent(`4 of 4 drafted`),await v(r).toHaveTextContent(`Ahead`),await v(r).toHaveTextContent(`Expected by 1 Sat, 2 Sun, 3 Mon, 4 Tue`),await v(r).toHaveTextContent(`Spend by Tue 13 Jun, 12:00`),await v(e.getAllByRole(`heading`,{level:2}).map(e=>e.textContent)).toEqual([`Matchday 1`,`Lock by 12:00 tomorrow`,`Lock by 12:00 Sat`,`Lock by 12:00 Sun`,`Lock by 12:00 Mon`,`Lock by 12:00 Tue`]);let i=E(T(t,`Spain v Slovenia`),`Spain`);await v(i.dataset.look).toBe(`draft`),await v(i).toHaveTextContent(`Est. 91%`),await v(i).toHaveTextContent(`+0.3 per goal of winning margin`),await v(i).toHaveTextContent(`−29.7 per goal of losing margin`),await v(i).toHaveTextContent(`+0.6 a goal won, −59.4 a goal lost`),await v(i).not.toHaveTextContent(`All-in`),await v(i).toHaveTextContent(`Risky business`),await v(b(i).getByRole(`textbox`,{name:`Tokens on Spain`})).toHaveValue(`2`),await v(b(i).getByRole(`button`,{name:`Increase`})).toBeDisabled();for(let e of b(i).getAllByRole(`button`))await c(e);await n.click(b(i).getByRole(`button`,{name:`Lock Spain's tokens`})),await v(C).toHaveBeenCalledWith(`A-1`,`ES`),await l(t)}},O={loaders:[d(`eve`)],render:(e,{loaded:t})=>(0,_.jsx)(h,{s:t.s,round:`MD1`,start:`chance`}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{await v(e.getAllByRole(`heading`,{level:3}).map(e=>e.textContent).slice(0,2)).toEqual([`Spain v Slovenia`,`England v Serbia`]);let r={level:2,name:`Lock by 12:00 tomorrow`};await v(e.queryByRole(`heading`,r)).toBeNull(),await n.click(e.getByRole(`button`,{name:`By kickoff`})),await v(e.getAllByRole(`heading`,r)).toHaveLength(1),await l(t)}},k={loaders:[async()=>{let{s:e}=await d(`eve`)(),t=e.picks.filter(t=>t.user!==e.you||t.kind!==`tokens`||t.fixture!==`A-1`||t.team!==`SI`);return{s:{...e,picks:t}}}],render:(e,{loaded:t})=>(0,_.jsx)(h,{s:t.s,round:`MD1`}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{S.mockClear(),await v(e.getByRole(`region`,{name:`Matchday 1`})).toHaveTextContent(`2 of 4 placed`);let r=E(T(t,`Spain v Slovenia`),`Slovenia`);await v(r.dataset.look).toBe(`plain`),await v(r).not.toHaveTextContent(`a goal won`),await n.click(b(r).getByRole(`button`,{name:`Increase`})),await v(S).toHaveBeenCalledWith(`A-1`,`SI`,1)}},A={loaders:[d(`morning`)],render:(e,{loaded:t})=>(0,_.jsx)(h,{s:t.s,round:`MD3`}),play:async({canvas:e,canvasElement:t})=>{await v(e.getByRole(`region`,{name:`Matchday 3`})).toHaveTextContent(`4 of 4 drafted`);let n=E(T(t,`Slovenia v Italy`),`Slovenia`);await v(b(n).getByRole(`textbox`,{name:`Tokens on Slovenia`})).toHaveValue(`4`),await v(n).toHaveTextContent(`a goal won`),await v(n).toHaveTextContent(`All-in`)}},j={loaders:[d(`knockouts`)],render:(e,{loaded:t})=>(0,_.jsx)(h,{s:t.s,round:`R16`}),play:async({canvasElement:e})=>{let t=T(e,`Italy v England`);await v(E(t,`Italy`)).toHaveTextContent(`+43.2 per goal of winning margin`),await v(E(t,`Italy`)).not.toHaveTextContent(`a goal won`),await v(E(t,`England`)).toHaveTextContent(`+7.2 a goal won, −172.8 a goal lost`),await l(e)}},M={loaders:[d(`knockouts`)],render:(e,{loaded:t})=>(0,_.jsx)(h,{s:o(p(t.s)),round:`QF`}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{w.mockClear();let r=e.getByRole(`region`,{name:`Not open yet`}),i=b(r).getByRole(`listitem`,{name:`Croatia or Denmark v Spain`});await v(i).toHaveTextContent(`Hidden until noon today`),await n.click(b(i).getByRole(`button`,{name:`Show Croatia v Denmark`})),await v(w).toHaveBeenCalledWith([`M39`]);let a=E(T(t,`Portugal v England`),`Portugal`);await v(a).not.toHaveTextContent(`per goal`),await v(a).not.toHaveTextContent(`Est.`),await l(t)}},N=[`Eve`,`EveByChance`,`TokensLeft`,`MorningMatchday3`,`Knockouts`,`SealedTie`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="MD1" />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    locked.mockClear();
    const top = canvas.getByRole("region", {
      name: "Matchday 1"
    });
    await expect(top).toHaveTextContent("4 of 4 drafted");
    await expect(top).toHaveTextContent("Ahead");
    await expect(top).toHaveTextContent("Expected by 1 Sat, 2 Sun, 3 Mon, 4 Tue");
    await expect(top).toHaveTextContent("Spend by Tue 13 Jun, 12:00");
    // The first deadline's header, under the round's own title.
    await expect(canvas.getAllByRole("heading", {
      level: 2
    }).map(h => h.textContent)).toEqual(["Matchday 1", "Lock by 12:00 tomorrow", "Lock by 12:00 Sat", "Lock by 12:00 Sun", "Lock by 12:00 Mon", "Lock by 12:00 Tue"]);
    const spain = side(match(canvasElement, "Spain v Slovenia"), "Spain");
    await expect(spain.dataset.look).toBe("draft");
    await expect(spain).toHaveTextContent("Est. 91%");
    await expect(spain).toHaveTextContent("+0.3 per goal of winning margin");
    await expect(spain).toHaveTextContent("−29.7 per goal of losing margin");
    await expect(spain).toHaveTextContent("+0.6 a goal won, −59.4 a goal lost");
    // Two of the round's four: risky, but not all-in (that's Slovenia's four on matchday 3, below).
    await expect(spain).not.toHaveTextContent("All-in");
    await expect(spain).toHaveTextContent("Risky business");
    await expect(within(spain).getByRole("textbox", {
      name: "Tokens on Spain"
    })).toHaveValue("2");
    // Nothing left in the round: the stack can't grow.
    await expect(within(spain).getByRole("button", {
      name: "Increase"
    })).toBeDisabled();
    for (const b of within(spain).getAllByRole("button")) await thumbSized(b);
    await userEvent.click(within(spain).getByRole("button", {
      name: "Lock Spain's tokens"
    }));
    await expect(locked).toHaveBeenCalledWith("A-1", "ES");
    await noSidewaysScroll(canvasElement);
  }
}`,...D.parameters?.docs?.source},description:{story:`The eve, matchday 1 by kickoff: every match open, a header per deadline, your four tokens drafted.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="MD1" start="chance" />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const titles = () => canvas.getAllByRole("heading", {
      level: 3
    }).map(h => h.textContent);
    await expect(titles().slice(0, 2)).toEqual(["Spain v Slovenia", "England v Serbia"]);
    const tomorrow = {
      level: 2,
      name: "Lock by 12:00 tomorrow"
    } as const;
    await expect(canvas.queryByRole("heading", tomorrow)).toBeNull();
    await userEvent.click(canvas.getByRole("button", {
      name: "By kickoff"
    }));
    await expect(canvas.getAllByRole("heading", tomorrow)).toHaveLength(1);
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`The eve sorted by the likelier side's chance: no deadline headers.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => {
    const {
      s
    } = await withMoment("eve")();
    const picks = s.picks.filter(p => !(p.user === s.you && p.kind === "tokens" && p.fixture === "A-1" && p.team === "SI"));
    return {
      s: {
        ...s,
        picks
      }
    };
  }],
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="MD1" />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    changed.mockClear();
    await expect(canvas.getByRole("region", {
      name: "Matchday 1"
    })).toHaveTextContent("2 of 4 placed");
    const slovenia = side(match(canvasElement, "Spain v Slovenia"), "Slovenia");
    await expect(slovenia.dataset.look).toBe("plain");
    await expect(slovenia).not.toHaveTextContent("a goal won");
    await userEvent.click(within(slovenia).getByRole("button", {
      name: "Increase"
    }));
    await expect(changed).toHaveBeenCalledWith("A-1", "SI", 1);
  }
}`,...k.parameters?.docs?.source},description:{story:`The eve without the Slovenia tokens: two left to place, so every stepper can go higher.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="MD3" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("region", {
      name: "Matchday 3"
    })).toHaveTextContent("4 of 4 drafted");
    const slovenia = side(match(canvasElement, "Slovenia v Italy"), "Slovenia");
    await expect(within(slovenia).getByRole("textbox", {
      name: "Tokens on Slovenia"
    })).toHaveValue("4");
    await expect(slovenia).toHaveTextContent("a goal won");
    await expect(slovenia).toHaveTextContent("All-in");
  }
}`,...A.parameters?.docs?.source},description:{story:`The morning: matchday 3's tokens drafted while matchday 2's are locked; only matchday 3's count here. All four on
Slovenia: all-in.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="R16" />,
  play: async ({
    canvasElement
  }) => {
    const m38 = match(canvasElement, "Italy v England");
    await expect(side(m38, "Italy")).toHaveTextContent("+43.2 per goal of winning margin");
    await expect(side(m38, "Italy")).not.toHaveTextContent("a goal won");
    await expect(side(m38, "England")).toHaveTextContent("+7.2 a goal won, −172.8 a goal lost");
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`The round of 16: a knockout's tokens pay on its 90 minutes, as a group match's do. Your four are on England.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => <Screen s={spoilerFree(quarterMorning((loaded as Loaded).s))} round="QF" />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    revealed.mockClear();
    const waiting = canvas.getByRole("region", {
      name: "Not open yet"
    });
    const row = within(waiting).getByRole("listitem", {
      name: "Croatia or Denmark v Spain"
    });
    await expect(row).toHaveTextContent("Hidden until noon today");
    await userEvent.click(within(row).getByRole("button", {
      name: "Show Croatia v Denmark"
    }));
    await expect(revealed).toHaveBeenCalledWith(["M39"]);
    const portugal = side(match(canvasElement, "Portugal v England"), "Portugal");
    await expect(portugal).not.toHaveTextContent("per goal");
    await expect(portugal).not.toHaveTextContent("Est.");
    await noSidewaysScroll(canvasElement);
  }
}`,...M.parameters?.docs?.source},description:{story:`A sealed morning (spoiler-free mornings): the quarter-final fed by a hidden match waits among the rows not open
yet, with the eye that shows it; the open one has no price yet.`,...M.parameters?.docs?.description}}}})))()}P();export{D as Eve,O as EveByChance,j as Knockouts,A as MorningMatchday3,M as SealedTie,k as TokensLeft,N as __namedExportsOrder,x as default};
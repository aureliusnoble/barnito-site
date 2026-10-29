import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{n,t as r}from"./PickScorers-7AutOfYR.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{B as a,t as o}from"./src-Ca_r4w3v.js";import{a as s,i as c,r as l}from"./checks-C0Y16pbK.js";import{i as u,t as d}from"./moments-Bzx1n_TW.js";function f({s:e,round:t,start:n}){let[i,o]=(0,p.useState)(n?.query??``),[s,c]=(0,p.useState)(n?.fixture??null),[l,u]=(0,p.useState)(n?.sort??`chance`),d=a(e,t,{query:i,sort:l,...s&&{fixture:s}});return d?(0,m.jsx)(`div`,{className:`max-w-[390px]`,children:(0,m.jsx)(r,{view:d,query:i,fixture:s,sort:l,onSearch:o,onFilter:c,onSort:u,onAdd:y,onOpen:x,onLock:b})}):null}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{o(),p=t(),l(),d(),n(),m=i(),{expect:h,fn:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Domain/PickScorers`,parameters:{layout:`padded`}},y=g(),b=g(),x=g(),S={loaders:[u(`knockouts`)]},C=(e,t)=>[...e.querySelectorAll(`section[aria-label="${t}"] > ul > li`)],w=e=>C(e,`Players`),T=e=>C(e,`Yours`),E={...S,render:(e,{loaded:t})=>(0,m.jsx)(f,{s:t.s,round:`R16`}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{y.mockClear(),b.mockClear(),await h(e.getByRole(`region`,{name:`Round of 16`})).toHaveTextContent(`4 of 4 drafted`);let r=T(t);await h(r.map(e=>e.getAttribute(`aria-label`))).toEqual([`Bryan Cristante`,`Jarell Quansah`,`Matteo Darmian`,`Michael Folorunsho`]),await h(r[1]).toHaveTextContent(`Long shot`),await h(r[0].dataset.look).toBe(`draft`),await h(_(r[0]).getByLabelText(`Draft`)).toBeVisible(),await n.click(_(r[0]).getByRole(`button`,{name:`Lock Bryan Cristante`})),await h(b).toHaveBeenCalledWith(`it-bryan-cristante`);let i=w(t)[0];await h(i).toHaveAccessibleName(`Kylian Mbappé`),await h(i).toHaveTextContent(`France v Scotland`),await h(i).toHaveTextContent(`Est.`);let a=_(i).getByRole(`button`,{name:`Add Kylian Mbappé`});await s(a),await n.click(a),await h(y).toHaveBeenCalledWith(`fr-kylian-mbappe`),await c(t)}},D={...S,render:(e,{loaded:t})=>(0,m.jsx)(f,{s:t.s,round:`R16`,start:{fixture:`M38`}}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{await h(w(t)).toHaveLength(43),await h(e.queryByRole(`region`,{name:`Not open yet`})).toBeNull(),await n.click(e.getByRole(`button`,{name:`All`})),await h(w(t)).toHaveLength(50),await h(e.getByRole(`button`,{name:`Show all 355`})).toBeVisible(),await c(t)}},O={...S,render:(e,{loaded:t})=>(0,m.jsx)(f,{s:t.s,round:`R16`,start:{query:`chi`}}),play:async({canvasElement:e})=>{await h(w(e).map(e=>e.getAttribute(`aria-label`))).toEqual([`Federico Chiesa`])}},k={...S,render:(e,{loaded:t})=>(0,m.jsx)(f,{s:t.s,round:`R16`,start:{sort:`points`}}),play:async({canvas:e,canvasElement:t})=>{await h(e.getByRole(`button`,{name:`Most points`})).toHaveAttribute(`aria-pressed`,`true`),await h(w(t)[0]).toHaveTextContent(`1,800`)}},A={loaders:[async()=>{let{s:e}=await u(`knockouts`)(),t=[...e.absences,{fixture:`M38`,player:`it-bryan-cristante`,out:`injured`,since:Date.parse(`2028-06-12T10:00:00Z`)},{fixture:`M38`,player:`en-anthony-gordon`,out:`suspended`,reason:`Red Card`,since:Date.parse(`2028-06-20T20:00:00Z`)}];return{s:{...e,absences:t}}}],render:(e,{loaded:t})=>(0,m.jsx)(f,{s:t.s,round:`R16`,start:{query:`an`}}),play:async({canvasElement:e,userEvent:t})=>{let n=w(e).find(e=>e.getAttribute(`aria-label`)===`Joachim Andersen`);await h(n).toHaveTextContent(`Out`),await h(n).toHaveTextContent(`Suspended: yellow cards`),await h(n.dataset.priced).toBe(`false`),await h(_(n).queryByRole(`button`)).toBeNull();let r=T(e)[0];await h(r).toHaveAttribute(`aria-label`,`Bryan Cristante`),await h(r).toHaveTextContent(`Injured since Mon 12 Jun`),y.mockClear(),x.mockClear();let i=w(e).find(e=>e.getAttribute(`aria-label`)===`Anthony Gordon`);await h(i.dataset.out).toBe(`suspended`),await h(i).toHaveTextContent(`Suspended: red card`),await h(i).not.toHaveTextContent(`·`),await t.click(_(i).getByRole(`button`,{name:`Add Anthony Gordon`})),await h(x).toHaveBeenCalledWith(`en-anthony-gordon`),await h(y).not.toHaveBeenCalled(),await t.click(_(i).getByRole(`button`,{name:/^Anthony Gordon/})),await h(x).toHaveBeenCalledTimes(2),await c(e)}},j={loaders:[u(`morning`)],render:(e,{loaded:t})=>(0,m.jsx)(f,{s:t.s,round:`MD3`}),play:async({canvas:e,canvasElement:t})=>{await h(e.getByRole(`region`,{name:`Matchday 3`})).toBeVisible(),await h(e.getByRole(`group`,{name:`Match`})).toBeVisible(),await c(t)}},M=[`RoundOf16`,`FilteredToOneMatch`,`Searched`,`ByPoints`,`Absences`,`MorningMatchday3`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...knockouts,
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="R16" />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    added.mockClear();
    locked.mockClear();
    await expect(canvas.getByRole("region", {
      name: "Round of 16"
    })).toHaveTextContent("4 of 4 drafted");
    const mine = yours(canvasElement);
    await expect(mine.map(r => r.getAttribute("aria-label"))).toEqual(["Bryan Cristante", "Jarell Quansah", "Matteo Darmian", "Michael Folorunsho"]);
    await expect(mine[1]).toHaveTextContent("Long shot");
    await expect(mine[0]!.dataset.look).toBe("draft");
    await expect(within(mine[0]!).getByLabelText("Draft")).toBeVisible();
    await userEvent.click(within(mine[0]!).getByRole("button", {
      name: "Lock Bryan Cristante"
    }));
    await expect(locked).toHaveBeenCalledWith("it-bryan-cristante");
    const first = rows(canvasElement)[0]!;
    await expect(first).toHaveAccessibleName("Kylian Mbappé");
    await expect(first).toHaveTextContent("France v Scotland");
    await expect(first).toHaveTextContent("Est.");
    const add = within(first).getByRole("button", {
      name: "Add Kylian Mbappé"
    });
    await thumbSized(add);
    await userEvent.click(add);
    await expect(added).toHaveBeenCalledWith("fr-kylian-mbappe");
    await noSidewaysScroll(canvasElement);
  }
}`,...E.parameters?.docs?.source},description:{story:`The round of 16 by chance: yours at the top, four drafted (all four long shots), each with its own Lock.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...knockouts,
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="R16" start={{
    fixture: "M38"
  }} />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await expect(rows(canvasElement)).toHaveLength(43);
    await expect(canvas.queryByRole("region", {
      name: "Not open yet"
    })).toBeNull();
    await userEvent.click(canvas.getByRole("button", {
      name: "All"
    }));
    // The round's 355 wait behind "Show all".
    await expect(rows(canvasElement)).toHaveLength(50);
    await expect(canvas.getByRole("button", {
      name: "Show all 355"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...D.parameters?.docs?.source},description:{story:`Filtered to Italy v England, then back to all.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...knockouts,
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="R16" start={{
    query: "chi"
  }} />,
  play: async ({
    canvasElement
  }) => {
    await expect(rows(canvasElement).map(r => r.getAttribute("aria-label"))).toEqual(["Federico Chiesa"]);
  }
}`,...O.parameters?.docs?.source},description:{story:`Searched "chi": Chiesa only, not Eberechi Eze or Joachim Andersen.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...knockouts,
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="R16" start={{
    sort: "points"
  }} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("button", {
      name: "Most points"
    })).toHaveAttribute("aria-pressed", "true");
    await expect(rows(canvasElement)[0]).toHaveTextContent("1,800");
  }
}`,...k.parameters?.docs?.source},description:{story:`By points: the longest shots first.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [async (): Promise<Loaded> => {
    const {
      s
    } = await withMoment("knockouts")();
    const absences = [...s.absences, {
      fixture: "M38",
      player: "it-bryan-cristante",
      out: "injured" as const,
      since: Date.parse("2028-06-12T10:00:00Z")
    }, {
      fixture: "M38",
      player: "en-anthony-gordon",
      out: "suspended" as const,
      reason: "Red Card",
      since: Date.parse("2028-06-20T20:00:00Z")
    }];
    return {
      s: {
        ...s,
        absences
      }
    };
  }],
  render: (_, {
    loaded
  }) => <Screen s={(loaded as Loaded).s} round="R16" start={{
    query: "an"
  }} />,
  play: async ({
    canvasElement,
    userEvent
  }) => {
    const andersen = rows(canvasElement).find(r => r.getAttribute("aria-label") === "Joachim Andersen")!;
    await expect(andersen).toHaveTextContent("Out");
    await expect(andersen).toHaveTextContent("Suspended: yellow cards");
    await expect(andersen.dataset.priced).toBe("false");
    await expect(within(andersen).queryByRole("button")).toBeNull();
    const cristante = yours(canvasElement)[0]!;
    await expect(cristante).toHaveAttribute("aria-label", "Bryan Cristante");
    await expect(cristante).toHaveTextContent("Injured since Mon 12 Jun");
    // A priced player out for his match: greyed, and + opens the sheet's "Pick him anyway?" rather than adding him
    // (the final review; D41). Tapping the row opens the sheet too.
    added.mockClear();
    opened.mockClear();
    const gordon = rows(canvasElement).find(r => r.getAttribute("aria-label") === "Anthony Gordon")!;
    await expect(gordon.dataset.out).toBe("suspended");
    await expect(gordon).toHaveTextContent("Suspended: red card");
    await expect(gordon).not.toHaveTextContent("·");
    await userEvent.click(within(gordon).getByRole("button", {
      name: "Add Anthony Gordon"
    }));
    await expect(opened).toHaveBeenCalledWith("en-anthony-gordon");
    await expect(added).not.toHaveBeenCalled();
    await userEvent.click(within(gordon).getByRole("button", {
      name: /^Anthony Gordon/
    }));
    await expect(opened).toHaveBeenCalledTimes(2);
    await noSidewaysScroll(canvasElement);
  }
}`,...A.parameters?.docs?.source},description:{story:`Who may not play: Andersen suspended and not priced (greyed, nothing to add); Cristante, yours, injured but priced.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    })).toBeVisible();
    await expect(canvas.getByRole("group", {
      name: "Match"
    })).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`The morning, matchday 3: its own four scorers, the round's matches open early.`,...j.parameters?.docs?.description}}}})))()}N();export{A as Absences,k as ByPoints,D as FilteredToOneMatch,j as MorningMatchday3,E as RoundOf16,O as Searched,M as __namedExportsOrder,v as default};
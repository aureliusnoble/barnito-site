import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,h as r,t as i}from"./src-Ckdztxlk.js";import{i as a,r as o}from"./checks-CKr9wmxM.js";import{i as s,t as c}from"./moments-Cjxlj8DI.js";import{n as l,t as u}from"./RoundBars-DEVqusUn.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{i(),o(),c(),l(),d=t(),{expect:f}=__STORYBOOK_MODULE_TEST__,p={title:`Domain/RoundBars`,parameters:{layout:`padded`}},m=(e,t)=>({...e,now:Date.parse(t),picks:e.picks.filter(t=>t.user!==e.you||t.kind!==`tokens`||t.fixture!==`A-3`||t.team!==`IT`)}),h=(e,t)=>e.querySelectorAll(`[data-segment="${t}"]`).length,g={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u,{bars:r(t.s,`tokens`).bars}),(0,d.jsx)(`span`,{"data-fg":!0,className:`bg-fg`})]}),play:async({canvas:e,canvasElement:t})=>{await f(e.getByRole(`img`,{name:`Matchday 2: 4 of 4 locked`})).toBeVisible();let n=e=>getComputedStyle(t.querySelector(e)).backgroundColor;await f(n(`[data-expected]`)).toBe(n(`[data-fg]`)),await f(e.getByRole(`img`,{name:`Matchday 3: 4 of 4 drafted`})).toBeVisible(),await f(h(t,`locked`)).toBe(4),await f(h(t,`drafted`)).toBe(4),await f(t.querySelectorAll(`[data-expected]`).length).toBe(1),await f(e.getByText(`Expected by now: 2 of 4`)).toBeInTheDocument(),await a(t)}},_={loaders:[s(`eve`)],render:(e,{loaded:t})=>(0,d.jsx)(u,{bars:r(t.s,`scorers`).bars}),play:async({canvas:e,canvasElement:t})=>{await f(e.getAllByRole(`img`).map(e=>e.getAttribute(`aria-label`))).toEqual([`Matchday 1: 4 of 4 drafted`,`Matchday 2: 4 of 4 drafted`,`Matchday 3: 4 of 4 drafted`]),await a(t)}},v={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,d.jsx)(u,{bars:r(m(t.s,`2028-06-16T07:10:00Z`),`tokens`).bars}),play:async({canvas:e,canvasElement:t})=>{await f(e.getByRole(`img`,{name:`Matchday 2: 1 of 4 placed`})).toBeVisible(),await f(e.getByText(`Expected by now: 3 of 4`)).toBeInTheDocument(),await f(h(t,`unused`)).toBe(3),await a(t)}},y={loaders:[s(`morning`)],render:(e,{loaded:t})=>(0,d.jsx)(u,{bars:r(m(t.s,`2028-06-17T07:10:00Z`),`tokens`).bars}),play:async({canvas:e,canvasElement:t})=>{await f(e.getByText(`Expected by now: 4 of 4`)).toBeInTheDocument(),await a(t)}},b={loaders:[s(`knockouts`)],render:(e,{loaded:t})=>{let r=t.s;return(0,d.jsx)(u,{bars:[n(r,`R16`,`tokens`),n(r,`QF`,`tokens`)]})},play:async({canvas:e,canvasElement:t})=>{await f(e.getByRole(`img`,{name:`Quarter-finals: 2 tokens`})).toBeVisible(),await f(t.querySelectorAll(`[role="img"]`)[1].children.length).toBe(2),await a(t)}},x=[`Morning`,`Eve`,`Behind`,`LastDay`,`TwoAllowance`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <>
      <RoundBars bars={budget((loaded as Loaded).s, "tokens")!.bars} />
      <span data-fg className="bg-fg" />
    </>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("img", {
      name: "Matchday 2: 4 of 4 locked"
    })).toBeVisible();
    // The expected-usage line in black (the owner, 23 Oct).
    const background = (selector: string) => getComputedStyle(canvasElement.querySelector(selector)!).backgroundColor;
    await expect(background("[data-expected]")).toBe(background("[data-fg]"));
    await expect(canvas.getByRole("img", {
      name: "Matchday 3: 4 of 4 drafted"
    })).toBeVisible();
    await expect(segments(canvasElement, "locked")).toBe(4);
    await expect(segments(canvasElement, "drafted")).toBe(4);
    await expect(canvasElement.querySelectorAll("[data-expected]").length).toBe(1);
    await expect(canvas.getByText("Expected by now: 2 of 4")).toBeInTheDocument();
    await noSidewaysScroll(canvasElement);
  }
}`,...g.parameters?.docs?.source},description:{story:`Two budgets at once: matchday 2's tokens locked, matchday 3's drafted (Review Focus 1).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <RoundBars bars={budget((loaded as Loaded).s, "scorers")!.bars} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getAllByRole("img").map(x => x.getAttribute("aria-label"))).toEqual(["Matchday 1: 4 of 4 drafted", "Matchday 2: 4 of 4 drafted", "Matchday 3: 4 of 4 drafted"]);
    await noSidewaysScroll(canvasElement);
  }
}`,..._.parameters?.docs?.source},description:{story:`The eve: three rounds drafted ahead.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <RoundBars bars={budget(short((loaded as Loaded).s, "2028-06-16T07:10:00Z"), "tokens")!.bars} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("img", {
      name: "Matchday 2: 1 of 4 placed"
    })).toBeVisible();
    await expect(canvas.getByText("Expected by now: 3 of 4")).toBeInTheDocument();
    await expect(segments(canvasElement, "unused")).toBe(3);
    await noSidewaysScroll(canvasElement);
  }
}`,...v.parameters?.docs?.source},description:{story:`Behind the pace: one placed where three are expected; the line sits three-quarters along.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <RoundBars bars={budget(short((loaded as Loaded).s, "2028-06-17T07:10:00Z"), "tokens")!.bars} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByText("Expected by now: 4 of 4")).toBeInTheDocument();
    await noSidewaysScroll(canvasElement);
  }
}`,...y.parameters?.docs?.source},description:{story:`The round's last day, three still to place.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    return <RoundBars bars={[roundBar(s, "R16", "tokens"), roundBar(s, "QF", "tokens")]} />;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("img", {
      name: "Quarter-finals: 2 tokens"
    })).toBeVisible();
    await expect(canvasElement.querySelectorAll('[role="img"]')[1]!.children.length).toBe(2);
    await noSidewaysScroll(canvasElement);
  }
}`,...b.parameters?.docs?.source},description:{story:`A round of two, untouched, beside the round of 16's four (a long label).`,...b.parameters?.docs?.description}}}})))()}S();export{v as Behind,_ as Eve,y as LastDay,g as Morning,b as TwoAllowance,x as __namedExportsOrder,p as default};
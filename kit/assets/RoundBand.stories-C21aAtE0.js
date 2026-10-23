import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,t as r}from"./src-Ckdztxlk.js";import{i,r as a}from"./checks-CKr9wmxM.js";import{i as o,t as s}from"./moments-Cjxlj8DI.js";import{n as c,t as l}from"./RoundBand--FoWC7dC.js";var u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),a(),s(),c(),u=t(),{expect:d,fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Domain/RoundBand`,parameters:{layout:`padded`}},m=f(),h=e=>(0,u.jsx)(`div`,{className:`grid gap-3`,children:n(e).map(e=>(0,u.jsx)(l,{band:e,onRow:m},e.round))}),g=e=>[...e.querySelectorAll(`button`)],_={loaders:[o(`morning`)],render:(e,{loaded:t})=>h(t.s),play:async({canvas:e,canvasElement:t,userEvent:n})=>{m.mockClear();let r=e.getByRole(`region`,{name:`Matchday 2`});await d(r).toHaveTextContent(`ends Sat 17 Jun, 12:00`),await d(r).toHaveTextContent(`4 of 4 locked`);let[a,o,s]=g(r);await d(a.dataset.tone).toBe(`today`),await d(a).toHaveTextContent(`1 to pick, 1 draft, 1 locked`),await d(a).toHaveTextContent(`2 to lock`),await d(o.dataset.tone).toBe(`tomorrow`),await d(s.dataset.tone).toBe(`calm`),await d(e.getByRole(`region`,{name:`Matchday 3`})).toHaveTextContent(`4 of 4 drafted`),await d(e.getByRole(`region`,{name:`Round of 16`})).toHaveTextContent(`open once both teams are known`),await n.click(a),await d(m).toHaveBeenCalledWith(Date.parse(`2028-06-15T11:00:00Z`)),await i(t)}},v={loaders:[o(`eve`)],render:(e,{loaded:t})=>h(t.s),play:async({canvas:e,canvasElement:t})=>{await d(e.getAllByRole(`region`).map(e=>e.getAttribute(`aria-label`))).toEqual([`Matchday 1`,`Matchday 2`,`Matchday 3`,`Round of 16`]),await i(t)}},y={loaders:[o(`knockouts`)],render:(e,{loaded:t})=>h(t.s),play:async({canvas:e,canvasElement:t})=>{await d(e.getByRole(`region`,{name:`Quarter-finals`})).toHaveTextContent(`Fri 30 Jun to Sat 1 Jul`),await d(e.getByRole(`region`,{name:`Quarter-finals`})).toHaveTextContent(`2 tokens`),await i(t)}},b={loaders:[o(`morning`)],render:(e,{loaded:t})=>{let n=t.s;return h({...n,fixtures:n.fixtures.map(e=>e.id===`F-6`?{...e,draftingFrom:Date.parse(`2028-06-18T11:00:00Z`)}:e),picks:n.picks.filter(e=>e.user!==n.you||e.fixture!==`F-6`)})},play:async({canvas:e})=>{await d(e.getByRole(`region`,{name:`Matchday 3`})).toHaveTextContent(`3 drafts, 1 not open yet, draft now`)}},x=[`Morning`,`Eve`,`Knockouts`,`NotOpen`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => all((loaded as Loaded).s),
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    chosen.mockClear();
    const md2 = canvas.getByRole("region", {
      name: "Matchday 2"
    });
    await expect(md2).toHaveTextContent("ends Sat 17 Jun, 12:00");
    await expect(md2).toHaveTextContent("4 of 4 locked");
    const [today, tomorrow, saturday] = rowsOf(md2);
    await expect(today!.dataset.tone).toBe("today");
    await expect(today).toHaveTextContent("1 to pick, 1 draft, 1 locked");
    await expect(today).toHaveTextContent("2 to lock");
    await expect(tomorrow!.dataset.tone).toBe("tomorrow");
    await expect(saturday!.dataset.tone).toBe("calm");
    await expect(canvas.getByRole("region", {
      name: "Matchday 3"
    })).toHaveTextContent("4 of 4 drafted");
    await expect(canvas.getByRole("region", {
      name: "Round of 16"
    })).toHaveTextContent("open once both teams are known");
    await userEvent.click(today!);
    await expect(chosen).toHaveBeenCalledWith(Date.parse("2028-06-15T11:00:00Z"));
    await noSidewaysScroll(canvasElement);
  }
}`,..._.parameters?.docs?.source},description:{story:`The morning: matchday 2 locked, matchday 3 drafted, the round of 16 to come; each band with its own budget.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => all((loaded as Loaded).s),
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getAllByRole("region").map(x => x.getAttribute("aria-label"))).toEqual(["Matchday 1", "Matchday 2", "Matchday 3", "Round of 16"]);
    await noSidewaysScroll(canvasElement);
  }
}`,...v.parameters?.docs?.source},description:{story:`The eve: four bands, the longest list.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("knockouts")],
  render: (_, {
    loaded
  }) => all((loaded as Loaded).s),
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("region", {
      name: "Quarter-finals"
    })).toHaveTextContent("Fri 30 Jun to Sat 1 Jul");
    await expect(canvas.getByRole("region", {
      name: "Quarter-finals"
    })).toHaveTextContent("2 tokens");
    await noSidewaysScroll(canvasElement);
  }
}`,...y.parameters?.docs?.source},description:{story:`The round of 16's first day, the quarter-finals to come.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => {
    const s = (loaded as Loaded).s;
    return all({
      ...s,
      fixtures: s.fixtures.map(f => f.id === "F-6" ? {
        ...f,
        draftingFrom: Date.parse("2028-06-18T11:00:00Z")
      } : f),
      picks: s.picks.filter(p => !(p.user === s.you && p.fixture === "F-6"))
    });
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("region", {
      name: "Matchday 3"
    })).toHaveTextContent("3 drafts, 1 not open yet, draft now");
  }
}`,...b.parameters?.docs?.source},description:{story:`A match not open for drafting yet, counted in its day.`,...b.parameters?.docs?.description}}}})))()}S();export{v as Eve,y as Knockouts,_ as Morning,b as NotOpen,x as __namedExportsOrder,p as default};
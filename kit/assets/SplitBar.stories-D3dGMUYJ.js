import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./SplitBar-BDRFGeJn.js";import{U as i,bt as a,t as o}from"./src-Ca_r4w3v.js";import{i as s,r as c}from"./checks-C0Y16pbK.js";import{i as l,t as u}from"./moments-Bzx1n_TW.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{o(),c(),u(),n(),d=t(),{expect:f}=__STORYBOOK_MODULE_TEST__,p={title:`Domain/SplitBar`,parameters:{layout:`padded`}},m={loaders:[l(`reveal`)],render:(e,{loaded:t})=>(0,d.jsx)(r,{columns:a(t.s,`C-3`).columns.map(e=>({key:e.key,label:e.label,count:e.people.length})),yours:`away`}),play:async({canvas:e,canvasElement:t})=>{let n=[...e.getByRole(`img`,{name:`4 Portugal, 1 Draw, 4 Austria`}).querySelectorAll(`[data-segment]`)];await f(n.map(e=>e.dataset.segment)).toEqual([`home`,`draw`,`away`]),await f(n[2]).toHaveAttribute(`data-yours`),await s(t)}},h={render:()=>{let e=i(e=>{e.now=Date.parse(`2028-06-15T11:05:00Z`),e.fixtures.find(e=>e.id===`C-4`).stage=`R16`;let t=(t,n,r)=>e.picks.push({id:t,user:n,kind:`knockout`,fixture:`C-4`,round:`MD2`,outcome:r,status:`locked`,lockedBy:`self`,numbers:{prob:.3,points:50}});t(`a`,`you`,`home`),t(`b`,`sam`,`draw-home`),t(`c`,`priya`,`draw-away`)});return(0,d.jsx)(r,{columns:a(e,`C-4`).columns.map(e=>({key:e.key,label:e.label,count:e.people.length})),yours:`home`})},play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`[data-segment]`)];await f(t.map(e=>e.dataset.segment)).toEqual([`home`,`draw-home`,`draw-away`]),await f(getComputedStyle(t[1]).backgroundColor).toBe(getComputedStyle(t[2]).backgroundColor),await f(getComputedStyle(t[0]).backgroundColor).not.toBe(getComputedStyle(t[1]).backgroundColor),await s(e)}},g=[`Reveal`,`Knockout`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("reveal")],
  render: (_, {
    loaded
  }) => <SplitBar columns={whoPicked((loaded as Loaded).s, "C-3")!.columns.map(c => ({
    key: c.key,
    label: c.label,
    count: c.people.length
  }))} yours="away" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const bar = canvas.getByRole("img", {
      name: "4 Portugal, 1 Draw, 4 Austria"
    });
    const segments = [...bar.querySelectorAll<HTMLElement>("[data-segment]")];
    await expect(segments.map(s => s.dataset.segment)).toEqual(["home", "draw", "away"]);
    await expect(segments[2]).toHaveAttribute("data-yours");
    await noSidewaysScroll(canvasElement);
  }
}`,...m.parameters?.docs?.source},description:{story:`The group's split as one bar from noon, your segment marked; named in full for screen readers.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const s = buildSnapshot(x => {
      x.now = Date.parse("2028-06-15T11:05:00Z");
      x.fixtures.find(f => f.id === "C-4")!.stage = "R16";
      const pick = (id: string, user: string, outcome: "home" | "draw-home" | "draw-away" | "away") => x.picks.push({
        id,
        user,
        kind: "knockout",
        fixture: "C-4",
        round: "MD2",
        outcome,
        status: "locked",
        lockedBy: "self",
        numbers: {
          prob: 0.3,
          points: 50
        }
      });
      pick("a", "you", "home");
      pick("b", "sam", "draw-home");
      pick("c", "priya", "draw-away");
    });
    return <SplitBar columns={whoPicked(s, "C-4")!.columns.map(c => ({
      key: c.key,
      label: c.label,
      count: c.people.length
    }))} yours="home" />;
  },
  play: async ({
    canvasElement
  }) => {
    const segments = [...canvasElement.querySelectorAll<HTMLElement>("[data-segment]")];
    await expect(segments.map(s => s.dataset.segment)).toEqual(["home", "draw-home", "draw-away"]);
    await expect(getComputedStyle(segments[1]!).backgroundColor).toBe(getComputedStyle(segments[2]!).backgroundColor);
    await expect(getComputedStyle(segments[0]!).backgroundColor).not.toBe(getComputedStyle(segments[1]!).backgroundColor);
    await noSidewaysScroll(canvasElement);
  }
}`,...h.parameters?.docs?.source},description:{story:`A knockout's four endings (design B): a segment each, both draws in the draw's colour, told apart by their names.`,...h.parameters?.docs?.description}}}})))()}_();export{h as Knockout,m as Reveal,g as __namedExportsOrder,p as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./src-Ckdztxlk.js";import{n as r}from"./picked-Dj7WOPcC.js";import{i,r as a}from"./checks-CKr9wmxM.js";import{i as o,t as s}from"./moments-Cjxlj8DI.js";import{n as c,t as l}from"./SplitBar-CwgWGSQA.js";var u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),s(),c(),u=t(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Domain/SplitBar`,parameters:{layout:`padded`}},p={loaders:[o(`reveal`)],render:(e,{loaded:t})=>(0,u.jsx)(l,{columns:r(t.s,`C-3`).columns.map(e=>({key:e.key,label:e.label,count:e.people.length})),yours:`home`}),play:async({canvas:e,canvasElement:t})=>{let n=[...e.getByRole(`img`,{name:`6 Portugal, 1 Draw, 2 Austria`}).querySelectorAll(`[data-segment]`)];await d(n.map(e=>e.dataset.segment)).toEqual([`home`,`draw`,`away`]),await d(n[0]).toHaveAttribute(`data-yours`),await i(t)}},m=[`Reveal`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("reveal")],
  render: (_, {
    loaded
  }) => <SplitBar columns={whoPicked((loaded as Loaded).s, "C-3")!.columns.map(c => ({
    key: c.key,
    label: c.label,
    count: c.people.length
  }))} yours="home" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const bar = canvas.getByRole("img", {
      name: "6 Portugal, 1 Draw, 2 Austria"
    });
    const segments = [...bar.querySelectorAll<HTMLElement>("[data-segment]")];
    await expect(segments.map(s => s.dataset.segment)).toEqual(["home", "draw", "away"]);
    await expect(segments[0]).toHaveAttribute("data-yours");
    await noSidewaysScroll(canvasElement);
  }
}`,...p.parameters?.docs?.source},description:{story:`The group's split as one bar from noon, your segment marked; named in full for screen readers.`,...p.parameters?.docs?.description}}}})))()}h();export{p as Reveal,m as __namedExportsOrder,f as default};
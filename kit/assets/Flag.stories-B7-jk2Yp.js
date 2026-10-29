import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./Flag-BkUAiWy-.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),{expect:a,waitFor:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Flag`,component:r,args:{code:`dk`}},c={render:()=>(0,i.jsx)(`div`,{className:`flex items-end gap-4`,children:[16,20,24,32].map(e=>(0,i.jsx)(r,{code:`dk`,size:e},e))}),play:async({canvas:e})=>{let t=e.getAllByRole(`img`,{name:`Denmark`});await a(t.map(e=>e.width)).toEqual([16,20,24,32]),await o(()=>a(t[0].naturalWidth).toBeGreaterThan(0))}},l={args:{code:`zz`,alt:`Unknown team`},play:async({canvas:e})=>{let t=e.getByRole(`img`,{name:`Unknown team`});await a(t.tagName).toBe(`SPAN`)}},u={render:()=>(0,i.jsxs)(`span`,{className:`flex items-center gap-2 font-semibold`,children:[(0,i.jsx)(r,{code:`gb-sct`,alt:``}),` Scotland`]}),play:async({canvas:e})=>{await a(e.queryByRole(`img`)).toBeNull()}},d=[`Sizes`,`Unknown`,`BesideAName`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      {([16, 20, 24, 32] as const).map(size => <Flag key={size} code="dk" size={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const flags = canvas.getAllByRole<HTMLImageElement>("img", {
      name: "Denmark"
    });
    await expect(flags.map(f => f.width)).toEqual([16, 20, 24, 32]);
    await waitFor(() => expect(flags[0]!.naturalWidth).toBeGreaterThan(0));
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    code: "zz",
    alt: "Unknown team"
  },
  play: async ({
    canvas
  }) => {
    const circle = canvas.getByRole("img", {
      name: "Unknown team"
    });
    await expect(circle.tagName).toBe("SPAN");
  }
}`,...l.parameters?.docs?.source},description:{story:`A code with no flag draws an empty circle, named, never a broken image.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <span className="flex items-center gap-2 font-semibold">
      <Flag code="gb-sct" alt="" /> Scotland
    </span>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole("img")).toBeNull();
  }
}`,...u.parameters?.docs?.source},description:{story:`Beside its name, a flag says nothing more to a screen reader.`,...u.parameters?.docs?.description}}}})))()}f();export{u as BesideAName,c as Sizes,l as Unknown,d as __namedExportsOrder,s as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,s as i,t as a}from"./play-DUT_k43r.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{i as s,n as c,r as l}from"./checks-C0Y16pbK.js";import{r as u,t as d}from"./HeroStack-BbvLq3_K.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l(),u(),i(),n(),f=o(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Heroes/B The stack`,parameters:{layout:`fullscreen`}},h={render:()=>(0,f.jsx)(d,{morning:t}),play:a},g=e=>()=>[...e.querySelectorAll(`[data-match]`)],_={render:()=>(0,f.jsx)(d,{morning:r}),play:async({canvasElement:e})=>{await c(g(e)),await s(e)}},v={render:()=>(0,f.jsx)(d,{morning:t}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`button`,{name:/^Scotland ?, your pick, locked/});await p(n.querySelector(`svg[data-yours]`)).not.toBeNull(),await p(e.getByRole(`button`,{name:/^Croatia ?, your draft/})).toBeVisible(),await p(e.queryAllByRole(`button`,{name:/your (pick|draft)/})).toHaveLength(2);let r=t.querySelector(`[data-match="sco-aut"]`);await p(r).toHaveTextContent(`14:00`),await p(r).toHaveTextContent(`ITV1`),await p(e.getByRole(`img`,{name:`Locked by You, Sam, Priya Shah, Tom, Ana, Jonny and Mel`})).toBeDefined()}},y=[`Euro2028`,`LongNames`,`WhatsYours`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStack morning={MORNING} />,
  play: heroChecks
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStack morning={LONG_NAMES} />,
  play: async ({
    canvasElement
  }) => {
    await fitsInside(cards(canvasElement));
    await noSidewaysScroll(canvasElement);
  }
}`,..._.parameters?.docs?.source},description:{story:`The longest names and three-digit points stay inside their cards (final review): names wrap or shorten, never
push an option over the next one.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <HeroStack morning={MORNING} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const scotland = canvas.getByRole("button", {
      name: /^Scotland ?, your pick, locked/
    });
    await expect(scotland.querySelector("svg[data-yours]")).not.toBeNull();
    await expect(canvas.getByRole("button", {
      name: /^Croatia ?, your draft/
    })).toBeVisible();
    await expect(canvas.queryAllByRole("button", {
      name: /your (pick|draft)/
    })).toHaveLength(2);
    const card = canvasElement.querySelector<HTMLElement>('[data-match="sco-aut"]')!;
    await expect(card).toHaveTextContent("14:00");
    await expect(card).toHaveTextContent("ITV1");
    // Who has locked shows before noon (the owner, 22 Oct, amending D20), each by name for screen readers.
    await expect(canvas.getByRole("img", {
      name: "Locked by You, Sam, Priya Shah, Tom, Ana, Jonny and Mel"
    })).toBeDefined();
  }
}`,...v.parameters?.docs?.source},description:{story:`Each card says what's yours in words and a mark, not by colour alone, and when and where it's on (final review;
the owner's note of 20 Oct: the UK channel).`,...v.parameters?.docs?.description}}}})))()}b();export{h as Euro2028,_ as LongNames,v as WhatsYours,y as __namedExportsOrder,m as default};
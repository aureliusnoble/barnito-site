import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./lock-BUrpKheq.js";import{n as r,t as i}from"./pencil-line-DFV8uCYy.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s,t as c}from"./Avatar-DvpBdAlw.js";import{n as l,t as u}from"./Badge-DodHoFzO.js";import{n as d,t as f}from"./Pill-D3PmP-of.js";import{i as p,r as m}from"./checks-C0Y16pbK.js";var h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{t(),r(),m(),s(),l(),d(),h=a(),{expect:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Pills, badges and avatars`},v={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(f,{tone:`mine`,icon:n,children:`Locked`}),(0,h.jsx)(f,{icon:i,children:`Draft`}),(0,h.jsx)(f,{tone:`live`,children:`Live 67′`}),(0,h.jsx)(f,{tone:`warn`,children:`2 left`})]}),play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`[data-pill]`)];await g(t.map(e=>e.textContent)).toEqual([`Locked`,`Draft`,`Live 67′`,`2 left`]);for(let e of t)await g(e.querySelector(`svg, [data-mark]`),e.textContent??``).not.toBeNull();await p(e)}},y={render:()=>(0,h.jsxs)(`div`,{className:`flex gap-4`,children:[(0,h.jsx)(u,{count:3,label:`3 picks missing`}),(0,h.jsx)(`span`,{"data-none":!0,children:(0,h.jsx)(u,{count:0,label:`nothing missing`})})]}),play:async({canvas:e,canvasElement:t})=>{await g(e.getByLabelText(`3 picks missing`)).toBeVisible(),await g(t.querySelector(`[data-none]`).childElementCount).toBe(0)}},b={render:()=>(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(c,{name:`Priya Shah`}),(0,h.jsx)(c,{name:`Kit`}),(0,h.jsx)(c,{name:`Alex Morgan`,you:!0,size:40}),(0,h.jsx)(`span`,{"data-mine":!0,className:`bg-mine`}),(0,h.jsx)(`span`,{"data-ink":!0,className:`text-fg`})]}),play:async({canvas:e,canvasElement:t})=>{await g(e.getByText(`PS`)).toBeVisible(),await g(e.getByText(`K`)).toBeVisible();let n=getComputedStyle(t.querySelector(`[data-mine]`)).backgroundColor,r=getComputedStyle(t.querySelector(`[data-ink]`)).color,i=e.getByText(`AM`).closest(`[data-avatar]`);await g(getComputedStyle(i).boxShadow).toContain(r),await g(getComputedStyle(i).backgroundColor).toBe(n)}},x=[`Sam`,`Priya Shah`,`Tom`,`Ana`,`Jonny`,`Mel`,`Raj`,`Kit`,`Lou`,`Bea`].map(e=>({name:e})),S={render:()=>(0,h.jsx)(o,{people:[{name:`You`,you:!0},...x.slice(0,9)],max:5,label:`6 of 9 locked`}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`img`,{name:`6 of 9 locked`});await g(n.querySelectorAll(`[data-avatar]`)).toHaveLength(5),await g(n).toHaveTextContent(`+5`);for(let e of n.querySelectorAll(`[data-avatar]`))await g(e.textContent).toHaveLength(1);await p(t)}},C={render:()=>(0,h.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:(0,h.jsx)(f,{tone:`warn`,icon:i,children:`Suspended: yellow cards`})}),play:async({canvasElement:e})=>p(e)},w=[`Pills`,`Badges`,`Avatars`,`Stack`,`LongPill`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Pill tone="mine" icon={Lock}>
        Locked
      </Pill>
      <Pill icon={PencilLine}>Draft</Pill>
      <Pill tone="live">Live 67′</Pill>
      <Pill tone="warn">2 left</Pill>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const pills = [...canvasElement.querySelectorAll<HTMLElement>("[data-pill]")];
    await expect(pills.map(p => p.textContent)).toEqual(["Locked", "Draft", "Live 67′", "2 left"]);
    for (const pill of pills) await expect(pill.querySelector("svg, [data-mark]"), pill.textContent ?? "").not.toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...v.parameters?.docs?.source},description:{story:`Every state carries a word and a mark, never colour alone.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Badge count={3} label="3 picks missing" />
      <span data-none>
        <Badge count={0} label="nothing missing" />
      </span>
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByLabelText("3 picks missing")).toBeVisible();
    await expect(canvasElement.querySelector("[data-none]")!.childElementCount).toBe(0);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Avatar name="Priya Shah" />
      <Avatar name="Kit" />
      <Avatar name="Alex Morgan" you size={40} />
      <span data-mine className="bg-mine" />
      <span data-ink className="text-fg" />
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByText("PS")).toBeVisible();
    await expect(canvas.getByText("K")).toBeVisible();
    const mine = getComputedStyle(canvasElement.querySelector("[data-mine]")!).backgroundColor;
    const ink = getComputedStyle(canvasElement.querySelector("[data-ink]")!).color;
    const you = canvas.getByText("AM").closest<HTMLElement>("[data-avatar]")!;
    await expect(getComputedStyle(you).boxShadow).toContain(ink);
    await expect(getComputedStyle(you).backgroundColor).toBe(mine);
  }
}`,...b.parameters?.docs?.source},description:{story:`Friends by initials; you a lime face with an ink ring, so it's yours beyond colour (F66: a lime ring alone was
1.2:1 on white).`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarStack people={[{
    name: "You",
    you: true
  }, ...ten.slice(0, 9)]} max={5} label="6 of 9 locked" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const stack = canvas.getByRole("img", {
      name: "6 of 9 locked"
    });
    await expect(stack.querySelectorAll("[data-avatar]")).toHaveLength(5);
    await expect(stack).toHaveTextContent("+5");
    // At 24 px, one initial each: two would crowd and overlap.
    for (const face of stack.querySelectorAll("[data-avatar]")) await expect(face.textContent).toHaveLength(1);
    await noSidewaysScroll(canvasElement);
  }
}`,...S.parameters?.docs?.source},description:{story:`Who has locked: five faces, then a count, named as a whole.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Pill tone="warn" icon={PencilLine}>
        Suspended: yellow cards
      </Pill>
    </div>,
  play: async ({
    canvasElement
  }) => noSidewaysScroll(canvasElement)
}`,...C.parameters?.docs?.source},description:{story:`A long state, as the scorer picker shows who may not play (D49).`,...C.parameters?.docs?.description}}}})))()}T();export{b as Avatars,y as Badges,C as LongPill,v as Pills,S as Stack,w as __namedExportsOrder,_ as default};
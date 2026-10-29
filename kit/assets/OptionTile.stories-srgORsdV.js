import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./OptionTile-DAynVX-n.js";import{a as i,i as a,r as o}from"./checks-C0Y16pbK.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),n(),s=t(),{expect:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Domain/OptionTile`,parameters:{layout:`padded`}},d=(e,t,n={})=>({selection:{kind:`result`,fixture:`C-4`,outcome:`away`},label:e,words:e,points:55,chance:.18,state:t,...n}),f=[[d(`Poland`,{kind:`not open`,opensAt:0},{note:`Opens Mon 12 Jun, 12:00`}),`Opens Mon 12 Jun, 12:00`],[d(`Poland`,{kind:`draft only`,lockableAt:0},{note:`Lock from Thu 15 Jun, 21:00`}),`Lock from Thu 15 Jun, 21:00`],[d(`Poland`,{kind:`open`}),`Est. 18%`],[d(`Poland`,{kind:`drafted`,lockable:!0}),`your draft`],[d(`Poland`,{kind:`locking`}),`locking`],[d(`Poland`,{kind:`locked`,by:`self`,at:0}),`locked`],[d(`Poland`,{kind:`closed`}),`closed`],[d(`Poland`,{kind:`live`,winning:!0}),`Winning`],[d(`Poland`,{kind:`live`,winning:!1}),`Losing`],[d(`Draw`,{kind:`live`,winning:!1,level:!0},{way:{side:`home`,team:`Spain`}}),`Level`],[d(`Poland`,{kind:`settling`}),`Settling`],[d(`Poland`,{kind:`won`,points:55}),`+55`],[d(`Poland`,{kind:`lost`,points:0}),`0`],[d(`Croatia`,{kind:`lost`,points:-16},{points:void 0,chance:void 0}),`−16`],[d(`Poland`,{kind:`void`}),`Void`]],p={render:()=>(0,s.jsxs)(`div`,{className:`grid grid-cols-3 gap-2`,children:[f.map(([e],t)=>(0,s.jsx)(r,{option:e},t)),(0,s.jsx)(`span`,{"data-mine":!0,className:`bg-mine`}),(0,s.jsx)(`span`,{"data-mine-soft":!0,className:`bg-mine-soft`}),(0,s.jsx)(`span`,{"data-line-strong":!0,className:`bg-line-strong`})]}),play:async({canvasElement:e})=>{let t=l(e).getAllByRole(`button`);await c(t).toHaveLength(f.length);for(let[e,n]of t.entries()){let[t,r]=f[e];await c(n).toHaveAttribute(`data-state`,t.state.kind),await c(n.textContent).toContain(r),await i(n)}let n=e=>t.find(t=>t.dataset.state===e),r=t=>getComputedStyle(e.querySelector(t)).backgroundColor;await c(n(`drafted`).dataset.look).toBe(`draft`),await c(getComputedStyle(n(`drafted`)).backgroundColor).toBe(r(`[data-mine-soft]`)),await c(getComputedStyle(n(`drafted`)).borderStyle).not.toBe(`dashed`),await c(getComputedStyle(n(`drafted`)).boxShadow).toContain(r(`[data-line-strong]`));for(let e of[`locking`,`locked`,`live`,`settling`,`won`,`lost`,`void`])await c(n(e).dataset.look,e).toBe(`locked`),await c(getComputedStyle(n(e)).backgroundColor,e).toBe(r(`[data-mine]`));for(let e of t.filter(e=>![`open`,`not open`,`draft only`,`closed`].includes(e.dataset.state)))await c(e.querySelector(`[data-yours]`),e.dataset.state).not.toBeNull();await a(e)}},m={render:()=>(0,s.jsx)(r,{option:d(`Bosnia and Herzegovina`,{kind:`open`},{points:void 0,chance:void 0})}),play:async({canvas:e,canvasElement:t})=>{await c(e.getByText(`No price yet`)).toBeInTheDocument(),await c(e.getByText(`–`)).toHaveAttribute(`aria-hidden`,`true`),await c(t.querySelector(`[role=meter]`)).toBeNull(),await a(t)}},h={render:()=>(0,s.jsxs)(`div`,{className:`grid grid-cols-3 gap-2`,children:[(0,s.jsx)(r,{option:d(`Bosnia and Herzegovina`,{kind:`open`},{points:393,chance:.03})}),(0,s.jsx)(r,{option:d(`Draw`,{kind:`drafted`,lockable:!0},{points:116,chance:.09})}),(0,s.jsx)(r,{option:d(`Republic of Ireland`,{kind:`open`},{points:11,chance:.89})})]}),play:async({canvasElement:e})=>a(e)},g=[`EveryState`,`NoPrice`,`Long`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-2">
      {STATES.map(([option], i) => <OptionTile key={i} option={option} />)}
      <span data-mine className="bg-mine" />
      <span data-mine-soft className="bg-mine-soft" />
      <span data-line-strong className="bg-line-strong" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const tiles = within(canvasElement).getAllByRole("button");
    await expect(tiles).toHaveLength(STATES.length);
    for (const [i, button] of tiles.entries()) {
      const [option, word] = STATES[i]!;
      await expect(button).toHaveAttribute("data-state", option.state.kind);
      await expect(button.textContent).toContain(word);
      await thumbSized(button);
    }
    // Drafted v locked, one look everywhere (the owner, 23 Oct): a draft a step between a plain option and a lock, light
    // lime with a grey border; from the lock on, filled lime.
    const look = (kind: string) => tiles.find(b => b.dataset.state === kind)!;
    const colour = (selector: string) => getComputedStyle(canvasElement.querySelector(selector)!).backgroundColor;
    await expect(look("drafted").dataset.look).toBe("draft");
    await expect(getComputedStyle(look("drafted")).backgroundColor).toBe(colour("[data-mine-soft]"));
    await expect(getComputedStyle(look("drafted")).borderStyle).not.toBe("dashed");
    // Its border grey, not lime (the owner, 23 Oct).
    await expect(getComputedStyle(look("drafted")).boxShadow).toContain(colour("[data-line-strong]"));
    for (const kind of ["locking", "locked", "live", "settling", "won", "lost", "void"]) {
      await expect(look(kind).dataset.look, kind).toBe("locked");
      await expect(getComputedStyle(look(kind)).backgroundColor, kind).toBe(colour("[data-mine]"));
    }
    // Yours carry a mark beside the colour: a pencil for a draft, a lock, a tick or a cross.
    for (const button of tiles.filter(b => !["open", "not open", "draft only", "closed"].includes(b.dataset.state!))) await expect(button.querySelector("[data-yours]"), button.dataset.state).not.toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <OptionTile option={tile("Bosnia and Herzegovina", {
    kind: "open"
  }, {
    points: undefined,
    chance: undefined
  })} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    // Said as text, not as a label on a bare span, which screen readers may skip (F75); the dash itself is hidden.
    await expect(canvas.getByText("No price yet")).toBeInTheDocument();
    await expect(canvas.getByText("–")).toHaveAttribute("aria-hidden", "true");
    await expect(canvasElement.querySelector("[role=meter]")).toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...m.parameters?.docs?.source},description:{story:`Before any price: a dash, no meter, no chance; nothing invented.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-2">
      <OptionTile option={tile("Bosnia and Herzegovina", {
      kind: "open"
    }, {
      points: 393,
      chance: 0.03
    })} />
      <OptionTile option={tile("Draw", {
      kind: "drafted",
      lockable: true
    }, {
      points: 116,
      chance: 0.09
    })} />
      <OptionTile option={tile("Republic of Ireland", {
      kind: "open"
    }, {
      points: 11,
      chance: 0.89
    })} />
    </div>,
  play: async ({
    canvasElement
  }) => noSidewaysScroll(canvasElement)
}`,...h.parameters?.docs?.source},description:{story:`The longest name and three-digit points, three to a row at 360 px.`,...h.parameters?.docs?.description}}}})))()}_();export{p as EveryState,h as Long,m as NoPrice,g as __namedExportsOrder,u as default};